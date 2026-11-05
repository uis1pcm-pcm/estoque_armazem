import { createHash, randomUUID } from 'node:crypto';
import { S3Client, DeleteObjectCommand, PutObjectCommand } from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';
import { initializeApp } from 'firebase-admin/app';
import { getAuth } from 'firebase-admin/auth';
import { FieldValue, Timestamp, getFirestore } from 'firebase-admin/firestore';
import { defineSecret } from 'firebase-functions/params';
import { HttpsError, onCall } from 'firebase-functions/v2/https';

initializeApp();
const db = getFirestore();
const r2AccessKeyId = defineSecret('R2_ACCESS_KEY_ID');
const r2SecretAccessKey = defineSecret('R2_SECRET_ACCESS_KEY');
const r2AccountId = defineSecret('R2_ACCOUNT_ID');
const r2Bucket = defineSecret('R2_BUCKET');
const r2PublicBaseUrl = defineSecret('R2_PUBLIC_BASE_URL');
const maxCustomFields = 30;

function normalize(value: string) {
  return value.trim().toLocaleLowerCase('pt-BR').normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}

function validQuantity(value: number) {
  return Number.isFinite(value) && value >= 0 && value <= 1_000_000_000 && Math.abs(value * 1000 - Math.round(value * 1000)) < 0.000001;
}

function searchTokens(values: string[]) {
  const tokens = new Set<string>();
  for (const word of values.flatMap((value) => normalize(value).split(/[^a-z0-9]+/)).filter(Boolean)) {
    for (let length = 2; length <= Math.min(word.length, 20); length++) tokens.add(word.slice(0, length));
  }
  return [...tokens].slice(0, 300);
}

function requireAdmin(request: { auth?: { token: Record<string, unknown> } | null }) {
  if (!request.auth || request.auth.token.role !== 'admin') throw new HttpsError('permission-denied', 'Acesso administrativo necessário.');
}

export const verifyEmployee = onCall({ enforceAppCheck: true, maxInstances: 10 }, async (request) => {
  const matricula = typeof request.data?.matricula === 'string' ? request.data.matricula.trim() : '';
  if (!/^[a-zA-Z0-9._-]{2,32}$/.test(matricula)) throw new HttpsError('invalid-argument', 'Matrícula inválida.');
  const clientIp = request.rawRequest.ip ?? 'unknown';
  const throttleId = createHash('sha256').update(`${clientIp}:${normalize(matricula)}`).digest('hex');
  const throttleRef = db.collection('authLimits').doc(throttleId);
  const now = Date.now();
  const blocked = await db.runTransaction(async (transaction) => {
    const throttle = await transaction.get(throttleRef);
    const data = throttle.data();
    const withinWindow = data && now - data.windowStartedAt < 10 * 60 * 1000;
    const attempts = withinWindow ? Number(data.attempts) : 0;
    transaction.set(throttleRef, { attempts: attempts + 1, windowStartedAt: withinWindow ? data.windowStartedAt : now, expiresAt: new Date(now + 24 * 60 * 60 * 1000) });
    return attempts >= 8;
  });
  if (blocked) throw new HttpsError('resource-exhausted', 'Muitas tentativas. Aguarde alguns minutos.');

  const lookup = await db.collection('employeeLookup').doc(normalize(matricula)).get();
  if (!lookup.exists) throw new HttpsError('permission-denied', 'Acesso não autorizado.');
  const employeeId = lookup.get('employeeId') as string;
  const employee = await db.collection('employees').doc(employeeId).get();
  if (!employee.exists || !employee.get('active')) throw new HttpsError('permission-denied', 'Acesso não autorizado.');
  const token = await getAuth().createCustomToken(`employee_${employeeId}`, {
    role: 'employee', employeeId, name: employee.get('name'), matricula: employee.get('matricula'), canAdd: employee.get('canAdd') === true, canWithdraw: employee.get('canWithdraw') === true
  });
  return { token };
});

export const searchItems = onCall({ enforceAppCheck: true, maxInstances: 10 }, async (request) => {
  if (!request.auth) throw new HttpsError('unauthenticated', 'Entre no sistema para pesquisar.');
  const prefix = typeof request.data?.prefix === 'string' ? normalize(request.data.prefix).slice(0, 20) : '';
  if (prefix.length < 2) return { items: [] };
  const snapshot = await db.collection('items').where('active', '==', true).where('searchTokens', 'array-contains', prefix).limit(40).get();
  return { items: snapshot.docs.map((item) => ({ id: item.id, ...item.data() })) };
});

export const recordMovement = onCall({ enforceAppCheck: true, maxInstances: 20 }, async (request) => {
  if (!request.auth) throw new HttpsError('unauthenticated', 'Entre no sistema para movimentar o estoque.');
  const { itemId, movementType, quantity, idempotencyKey } = request.data ?? {};
  if (typeof itemId !== 'string' || !['entry', 'withdrawal'].includes(movementType) || !Number.isFinite(quantity) || quantity <= 0 || !validQuantity(quantity) || typeof idempotencyKey !== 'string' || !/^[0-9a-f-]{36}$/i.test(idempotencyKey)) {
    throw new HttpsError('invalid-argument', 'Dados da movimentação inválidos.');
  }
  const isAdmin = request.auth.token.role === 'admin';
  const employeeId = typeof request.auth.token.employeeId === 'string' ? request.auth.token.employeeId : '';
  if (!isAdmin && (!employeeId || request.auth.uid !== `employee_${employeeId}`)) throw new HttpsError('permission-denied', 'Perfil sem permissão para movimentar.');
  const movementId = createHash('sha256').update(`${request.auth.uid}:${idempotencyKey}`).digest('hex');
  const itemRef = db.collection('items').doc(itemId);
  const movementRef = db.collection('stockMovements').doc(movementId);
  const employeeRef = employeeId ? db.collection('employees').doc(employeeId) : undefined;

  const quantityAfter = await db.runTransaction(async (transaction) => {
    const [itemSnapshot, movementSnapshot, employeeSnapshot] = await Promise.all([
      transaction.get(itemRef), transaction.get(movementRef), employeeRef ? transaction.get(employeeRef) : Promise.resolve(undefined)
    ]);
    if (movementSnapshot.exists) return movementSnapshot.get('quantityAfter') as number;
    if (!itemSnapshot.exists || itemSnapshot.get('active') !== true) throw new HttpsError('not-found', 'Item indisponível.');
    if (!isAdmin) {
      if (!employeeSnapshot?.exists || employeeSnapshot.get('active') !== true) throw new HttpsError('permission-denied', 'Funcionário inativo.');
      if (movementType === 'entry' && employeeSnapshot.get('canAdd') !== true) throw new HttpsError('permission-denied', 'Sem permissão para adicionar materiais.');
      if (movementType === 'withdrawal' && employeeSnapshot.get('canWithdraw') !== true) throw new HttpsError('permission-denied', 'Sem permissão para retirar materiais.');
    }
    const before = itemSnapshot.get('quantity') as number;
    const after = before + (movementType === 'entry' ? quantity : -quantity);
    if (after < 0) throw new HttpsError('failed-precondition', 'Estoque insuficiente para essa retirada.');
    const employee = employeeSnapshot?.data();
    const minimumStock = itemSnapshot.get('minimumStock') as number;
    transaction.update(itemRef, { quantity: after, stockStatus: after <= 0 ? 'empty' : after <= minimumStock ? 'low' : 'normal', updatedAt: FieldValue.serverTimestamp() });
    transaction.create(movementRef, {
      itemId, itemNameSnapshot: itemSnapshot.get('name'), itemCode: itemSnapshot.get('code'), employeeId: isAdmin ? request.auth!.uid : employeeId,
      employeeNameSnapshot: isAdmin ? String(request.auth!.token.name ?? request.auth!.token.email ?? 'Administração') : employee?.name,
      matriculaSnapshot: isAdmin ? 'ADMIN' : employee?.matricula,
      movementType, quantity, quantityBefore: before, quantityAfter: after,
      reason: typeof request.data.reason === 'string' ? request.data.reason.trim().slice(0, 250) : '',
      createdAt: FieldValue.serverTimestamp(), idempotencyKey
    });
    return after;
  });
  return { quantityAfter };
});

export const saveItem = onCall({ enforceAppCheck: true, maxInstances: 10 }, async (request) => {
  requireAdmin(request);
  const input = request.data ?? {};
  const name = typeof input.name === 'string' ? input.name.trim() : '';
  const code = typeof input.code === 'string' ? input.code.trim() : '';
  const quantity = Number(input.quantity);
  const minimumStock = Number(input.minimumStock);
  if (!name || name.length > 120 || !code || code.length > 64 || !validQuantity(quantity) || !validQuantity(minimumStock)) {
    throw new HttpsError('invalid-argument', 'Confira nome, código e quantidades do item.');
  }
  const customFields = Array.isArray(input.customFields) ? input.customFields : [];
  if (customFields.length > maxCustomFields || customFields.some((field: unknown) => !field || typeof field !== 'object' || typeof (field as { label?: unknown }).label !== 'string' || !(field as { label: string }).label.trim() || (field as { label: string }).label.length > 60 || typeof (field as { value?: unknown }).value !== 'string' || !(field as { value: string }).value.trim() || (field as { value: string }).value.length > 250)) {
    throw new HttpsError('invalid-argument', 'Cada informação adicional precisa de nome e valor (limite de 30 campos).');
  }
  const itemId = typeof input.itemId === 'string' && input.itemId ? input.itemId : db.collection('items').doc().id;
  const itemRef = db.collection('items').doc(itemId);
  const normalizedCode = normalize(code);
  const codeRef = db.collection('itemCodes').doc(createHash('sha256').update(normalizedCode).digest('hex'));
  const prior = await itemRef.get();
  const oldCodeRef = prior.exists ? db.collection('itemCodes').doc(createHash('sha256').update(normalize(prior.get('code') as string)).digest('hex')) : undefined;
  await db.runTransaction(async (transaction) => {
    const codeSnapshot = await transaction.get(codeRef);
    const itemSnapshot = await transaction.get(itemRef);
    if (codeSnapshot.exists && codeSnapshot.get('itemId') !== itemId) throw new HttpsError('already-exists', 'Já existe um item com esse código.');
    if (typeof input.itemId === 'string' && !itemSnapshot.exists) throw new HttpsError('not-found', 'Item não encontrado.');
    const payload = {
      name, code, description: String(input.description ?? '').slice(0, 2000), category: String(input.category ?? '').slice(0, 80),
      itemType: ['piece', 'component', 'tool', 'machine'].includes(input.itemType) ? input.itemType : 'piece',
      trackingMode: input.trackingMode === 'asset' ? 'asset' : 'quantity', unit: String(input.unit ?? 'UN').slice(0, 20),
      quantity, minimumStock, stockStatus: quantity <= 0 ? 'empty' : quantity <= minimumStock ? 'low' : 'normal',
      rackNumber: String(input.rackNumber ?? '').slice(0, 20), shelfNumber: String(input.shelfNumber ?? '').slice(0, 20),
      locationNote: String(input.locationNote ?? '').slice(0, 100), imageUrl: String(input.imageUrl ?? '').slice(0, 1000), imageObjectKey: String(input.imageObjectKey ?? '').slice(0, 300),
      customFields: customFields.map((field: { id?: string; label: string; value: string }) => ({ id: typeof field.id === 'string' ? field.id : randomUUID(), label: field.label.trim(), value: field.value.trim() })),
      active: input.active !== false,
      searchTokens: searchTokens([name, code, String(input.description ?? ''), ...customFields.flatMap((field: { label: string; value: string }) => [field.label, field.value])]),
      updatedAt: FieldValue.serverTimestamp(), ...(itemSnapshot.exists ? {} : { createdAt: FieldValue.serverTimestamp() })
    };
    if (itemSnapshot.exists && (itemSnapshot.get('quantity') as number) !== quantity) throw new HttpsError('failed-precondition', 'Altere o saldo por uma movimentação de estoque.');
    transaction.set(itemRef, payload, { merge: true });
    transaction.set(codeRef, { itemId });
    if (!itemSnapshot.exists && quantity > 0) {
      transaction.create(db.collection('stockMovements').doc(`initial_${itemId}`), {
        itemId, itemNameSnapshot: name, itemCode: code, employeeId: request.auth!.uid,
        employeeNameSnapshot: 'Administração', matriculaSnapshot: 'ADMIN', movementType: 'entry', quantity,
        quantityBefore: 0, quantityAfter: quantity, reason: 'Saldo inicial do cadastro',
        createdAt: FieldValue.serverTimestamp(), idempotencyKey: `initial_${itemId}`
      });
    }
    if (oldCodeRef && oldCodeRef.path !== codeRef.path) transaction.delete(oldCodeRef);
  });
  return { itemId };
});

export const saveEmployee = onCall({ enforceAppCheck: true, maxInstances: 10 }, async (request) => {
  requireAdmin(request);
  const input = request.data ?? {};
  const name = typeof input.name === 'string' ? input.name.trim() : '';
  const matricula = typeof input.matricula === 'string' ? input.matricula.trim() : '';
  if (!name || name.length > 120 || !/^[a-zA-Z0-9._-]{2,32}$/.test(matricula)) throw new HttpsError('invalid-argument', 'Confira nome e matrícula.');
  const employeeId = typeof input.employeeId === 'string' && input.employeeId ? input.employeeId : db.collection('employees').doc().id;
  const employeeRef = db.collection('employees').doc(employeeId);
  const lookupRef = db.collection('employeeLookup').doc(normalize(matricula));
  const prior = await employeeRef.get();
  const previousLookup = prior.exists ? db.collection('employeeLookup').doc(normalize(prior.get('matricula') as string)) : undefined;
  await db.runTransaction(async (transaction) => {
    const [lookupSnapshot, employeeSnapshot] = await Promise.all([transaction.get(lookupRef), transaction.get(employeeRef)]);
    if (lookupSnapshot.exists && lookupSnapshot.get('employeeId') !== employeeId) throw new HttpsError('already-exists', 'Essa matrícula já está cadastrada.');
    if (typeof input.employeeId === 'string' && !employeeSnapshot.exists) throw new HttpsError('not-found', 'Funcionário não encontrado.');
    transaction.set(employeeRef, {
      name, matricula, matriculaNormalized: normalize(matricula), active: input.active !== false,
      canAdd: input.canAdd === true, canWithdraw: input.canWithdraw === true,
      createdAt: employeeSnapshot.exists ? employeeSnapshot.get('createdAt') : FieldValue.serverTimestamp(), updatedAt: FieldValue.serverTimestamp()
    });
    transaction.set(lookupRef, { employeeId });
    if (previousLookup && previousLookup.path !== lookupRef.path) transaction.delete(previousLookup);
  });
  return { employeeId };
});

export const listMovements = onCall({ enforceAppCheck: true, maxInstances: 10 }, async (request) => {
  requireAdmin(request);
  const itemId = typeof request.data?.itemId === 'string' ? request.data.itemId : undefined;
  let movementsQuery = db.collection('stockMovements').orderBy('createdAt', 'desc').limit(100);
  if (itemId) movementsQuery = db.collection('stockMovements').where('itemId', '==', itemId).orderBy('createdAt', 'desc').limit(100) as typeof movementsQuery;
  const snapshot = await movementsQuery.get();
  return { movements: snapshot.docs.map((movement) => ({ id: movement.id, ...movement.data() })) };
});

export const getDashboardSummary = onCall({ enforceAppCheck: true, maxInstances: 10 }, async (request) => {
  requireAdmin(request);
  const offset = Number.isInteger(request.data?.timezoneOffsetMinutes) && Math.abs(request.data.timezoneOffsetMinutes) <= 840 ? request.data.timezoneOffsetMinutes : 0;
  const now = Date.now();
  const localNow = new Date(now - offset * 60_000);
  const startOfLocalDay = Date.UTC(localNow.getUTCFullYear(), localNow.getUTCMonth(), localNow.getUTCDate()) + offset * 60_000;
  const movementBase = db.collection('stockMovements').where('createdAt', '>=', Timestamp.fromMillis(startOfLocalDay));
  const [total, active, empty, low, daily, entries, withdrawals] = await Promise.all([
    db.collection('items').count().get(),
    db.collection('items').where('active', '==', true).count().get(),
    db.collection('items').where('active', '==', true).where('stockStatus', '==', 'empty').count().get(),
    db.collection('items').where('active', '==', true).where('stockStatus', '==', 'low').count().get(),
    movementBase.count().get(),
    movementBase.where('movementType', '==', 'entry').count().get(),
    movementBase.where('movementType', '==', 'withdrawal').count().get()
  ]);
  return {
    itemCount: total.data().count,
    activeItemCount: active.data().count,
    stockOutCount: empty.data().count,
    lowStockCount: low.data().count,
    movementCount: daily.data().count,
    todayEntries: entries.data().count,
    todayWithdrawals: withdrawals.data().count
  };
});

export const createImageUpload = onCall({ enforceAppCheck: true, maxInstances: 5, secrets: [r2AccessKeyId, r2SecretAccessKey, r2AccountId, r2Bucket, r2PublicBaseUrl] }, async (request) => {
  requireAdmin(request);
  const { itemId, contentType, size } = request.data ?? {};
  if (typeof itemId !== 'string' || !/^[a-zA-Z0-9_-]{1,128}$/.test(itemId) || contentType !== 'image/webp' || !Number.isSafeInteger(size) || size <= 0 || size > 5 * 1024 * 1024) throw new HttpsError('invalid-argument', 'Imagem inválida ou maior que 5 MB.');
  const client = new S3Client({
    region: 'auto', endpoint: `https://${r2AccountId.value()}.r2.cloudflarestorage.com`,
    credentials: { accessKeyId: r2AccessKeyId.value(), secretAccessKey: r2SecretAccessKey.value() }
  });
  const imageObjectKey = `items/${itemId}/${randomUUID()}.webp`;
  const uploadUrl = await getSignedUrl(client, new PutObjectCommand({ Bucket: r2Bucket.value(), Key: imageObjectKey, ContentType: contentType, ContentLength: size }), { expiresIn: 300 });
  const imageUrl = `${r2PublicBaseUrl.value().replace(/\/$/, '')}/${imageObjectKey}`;
  return { uploadUrl, imageObjectKey, imageUrl };
});

export const deleteItemImage = onCall({ enforceAppCheck: true, maxInstances: 5, secrets: [r2AccessKeyId, r2SecretAccessKey, r2AccountId, r2Bucket] }, async (request) => {
  requireAdmin(request);
  const { itemId, imageObjectKey } = request.data ?? {};
  if (typeof itemId !== 'string' || typeof imageObjectKey !== 'string' || !imageObjectKey.startsWith(`items/${itemId}/`) || imageObjectKey.includes('..')) {
    throw new HttpsError('invalid-argument', 'Identificador de imagem inválido.');
  }
  const client = new S3Client({
    region: 'auto', endpoint: `https://${r2AccountId.value()}.r2.cloudflarestorage.com`,
    credentials: { accessKeyId: r2AccessKeyId.value(), secretAccessKey: r2SecretAccessKey.value() }
  });
  await client.send(new DeleteObjectCommand({ Bucket: r2Bucket.value(), Key: imageObjectKey }));
  return { deleted: true };
});