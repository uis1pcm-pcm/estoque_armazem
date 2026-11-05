import { httpsCallable } from 'firebase/functions';
import { getFirebaseServices } from './firebase';
import type { Employee, InventoryItem, StockMovement } from './types';
import { signInWithCustomToken, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { collection, getDocs, limit, orderBy, query, startAfter, where, type QueryDocumentSnapshot } from 'firebase/firestore';

const call = <Input, Output>(name: string) => httpsCallable<Input, Output>(getFirebaseServices().functions, name);

export async function signInEmployee(matricula: string) {
  const { auth, functions } = getFirebaseServices();
  const result = await call<{ matricula: string }, { token: string }>('verifyEmployee')({ matricula });
  return signInWithCustomToken(auth, result.data.token);
}

export async function signInAdmin(email: string, password: string) {
  const { auth } = getFirebaseServices();
  const credential = await signInWithEmailAndPassword(auth, email, password);
  const token = await credential.user.getIdTokenResult(true);
  if (token.claims.role !== 'admin') {
    await signOut(auth);
    throw new Error('Esta conta não possui permissão administrativa.');
  }
  return credential.user;
}

export async function listItems(search: string, cursor?: QueryDocumentSnapshot) {
  const { db, functions } = getFirebaseServices();
  const normalized = search.trim().toLocaleLowerCase('pt-BR').normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  const reference = collection(db, 'items');
  if (normalized) {
    const result = await call<{ prefix: string }, { items: InventoryItem[] }>('searchItems')({ prefix: normalized.split(/\s+/)[0].slice(0, 20) });
    return { items: result.data.items, cursor: undefined };
  }
  const constraints = [where('active', '==', true), orderBy('name'), ...(cursor ? [startAfter(cursor)] : []), limit(40)];
  const snapshot = await getDocs(query(reference, ...constraints));
  return { items: snapshot.docs.map((entry) => ({ id: entry.id, ...entry.data() }) as InventoryItem), cursor: snapshot.docs.at(-1) };
}

export async function loadAllAdminItems() {
  const { db } = getFirebaseServices();
  const snapshot = await getDocs(query(collection(db, 'items'), orderBy('name'), limit(300)));
  return snapshot.docs.map((entry) => ({ id: entry.id, ...entry.data() }) as InventoryItem);
}

export async function loadEmployees() {
  const { db } = getFirebaseServices();
  const snapshot = await getDocs(query(collection(db, 'employees'), orderBy('name'), limit(300)));
  return snapshot.docs.map((entry) => ({ id: entry.id, ...entry.data() }) as Employee);
}

export async function listMovements(itemId?: string) {
  const { functions } = getFirebaseServices();
  const result = await call<{ itemId?: string }, { movements: StockMovement[] }>('listMovements')({ itemId });
  return result.data.movements;
}

export async function getDashboardSummary() {
  const { functions } = getFirebaseServices();
  return call<{ timezoneOffsetMinutes: number }, {
    itemCount: number; activeItemCount: number; stockOutCount: number; lowStockCount: number;
    movementCount: number; todayEntries: number; todayWithdrawals: number;
  }>('getDashboardSummary')({ timezoneOffsetMinutes: new Date().getTimezoneOffset() });
}

export async function recordMovement(input: { itemId: string; movementType: 'entry' | 'withdrawal'; quantity: number; reason: string; idempotencyKey: string }) {
  const { functions } = getFirebaseServices();
  return call<typeof input, { quantityAfter: number }>('recordMovement')(input);
}

export async function saveItem(input: Record<string, unknown>) {
  const { functions } = getFirebaseServices();
  return call<Record<string, unknown>, { itemId: string }>('saveItem')(input);
}

export async function saveEmployee(input: Record<string, unknown>) {
  const { functions } = getFirebaseServices();
  return call<Record<string, unknown>, { employeeId: string }>('saveEmployee')(input);
}

export async function createImageUpload(file: File, itemId: string) {
  const { functions } = getFirebaseServices();
  const form = await call<{ itemId: string; contentType: string; size: number }, { uploadUrl: string; imageUrl: string; imageObjectKey: string }>('createImageUpload')({
    itemId,
    contentType: file.type,
    size: file.size
  });
  const uploadResponse = await fetch(form.data.uploadUrl, { method: 'PUT', headers: { 'Content-Type': 'image/webp' }, body: file });
  if (!uploadResponse.ok) throw new Error('O armazenamento recusou o envio da imagem. Confira a configuração CORS do bucket R2.');
  return { imageUrl: form.data.imageUrl, imageObjectKey: form.data.imageObjectKey };
}

export async function deleteItemImage(itemId: string, imageObjectKey: string) {
  const { functions } = getFirebaseServices();
  return call<{ itemId: string; imageObjectKey: string }, { deleted: boolean }>('deleteItemImage')({ itemId, imageObjectKey });
}

export async function uploadOptimizedImage(file: File, itemId: string) {
  const bitmap = await createImageBitmap(file);
  const scale = Math.min(1, 1200 / Math.max(bitmap.width, bitmap.height));
  const canvas = document.createElement('canvas');
  canvas.width = Math.round(bitmap.width * scale);
  canvas.height = Math.round(bitmap.height * scale);
  const context = canvas.getContext('2d');
  if (!context) throw new Error('Não foi possível preparar a imagem.');
  context.drawImage(bitmap, 0, 0, canvas.width, canvas.height);
  const optimized = await new Promise<Blob>((resolve, reject) => canvas.toBlob((blob) => blob ? resolve(blob) : reject(new Error('Falha ao comprimir a imagem.')), 'image/webp', 0.82));
  if (optimized.size > 5 * 1024 * 1024) throw new Error('A imagem comprimida excede 5 MB.');
  return createImageUpload(new File([optimized], 'item.webp', { type: 'image/webp' }), itemId);
}

export async function passwordReset(email: string) {
  const { auth } = getFirebaseServices();
  const { sendPasswordResetEmail } = await import('firebase/auth');
  return sendPasswordResetEmail(auth, email);
}

export async function signOutUser() {
  const { auth } = getFirebaseServices();
  return signOut(auth);
}
