<script lang="ts">
  import { onMount } from 'svelte';
  import {
    ArrowDownLeft, ArrowLeft, ArrowRight, Boxes, Check, ChevronDown, CircleAlert, ClipboardList,
    LockKeyhole, LogOut, Minus, PackagePlus, Plus, Search, Settings2, ShieldCheck, Trash2, Upload,
    UserRound, Users, Warehouse, Wrench, X
  } from '@lucide/svelte';
  import { onAuthStateChanged, type User } from 'firebase/auth';
  import type { QueryDocumentSnapshot } from 'firebase/firestore';
  import { auth, db, firebaseConfigured } from './lib/firebase';
  import {
    deleteItemImage, getDashboardSummary, listItems, listMovements, loadAllAdminItems, loadEmployees, passwordReset, recordMovement,
    saveEmployee, saveItem, signInAdmin, signInEmployee, signOutUser, uploadOptimizedImage
  } from './lib/api';
  import type { CustomField, Employee, InventoryItem, StockMovement } from './lib/types';

  type UserRole = 'admin' | 'employee' | null;
  type Page = 'overview' | 'items' | 'employees' | 'movements';
  type ItemDraft = Omit<InventoryItem, 'id' | 'searchTokens' | 'createdAt' | 'updatedAt'>;
  const emptyItem = () => ({
    name: '', code: '', description: '', category: '', itemType: 'piece' as const,
    trackingMode: 'quantity' as const, unit: 'UN', quantity: 0, minimumStock: 0,
    rackNumber: '', shelfNumber: '', locationNote: '', imageUrl: '', imageObjectKey: '',
    customFields: [] as CustomField[], active: true
  });

  let user = $state<User | null>(null);
  let userRole = $state<UserRole>(null);
  let employee = $state<{ id: string; name: string; matricula: string } | null>(null);
  let page = $state<Page>('overview');
  let adminLogin = $state(false);
  let matricula = $state('');
  let email = $state('');
  let password = $state('');
  let busy = $state(false);
  let errorMessage = $state('');
  let successMessage = $state('');
  let search = $state('');
  let locationFilter = $state('');
  let items = $state<InventoryItem[]>([]);
  let itemCursor = $state<QueryDocumentSnapshot | undefined>();
  let hasMoreItems = $state(false);
  let loadingMore = $state(false);
  let adminItems = $state<InventoryItem[]>([]);
  let employees = $state<Employee[]>([]);
  let movements = $state<StockMovement[]>([]);
  let dashboardSummary = $state({ itemCount: 0, activeItemCount: 0, stockOutCount: 0, lowStockCount: 0, movementCount: 0, todayEntries: 0, todayWithdrawals: 0 });
  let selectedItem = $state<InventoryItem | null>(null);
  let movementType = $state<'entry' | 'withdrawal'>('withdrawal');
  let movementQuantity = $state(1);
  let pendingMovementKey = $state('');
  let pendingMovementFingerprint = $state('');
  let movementReason = $state('');
  let itemDialog = $state(false);
  let employeeDialog = $state(false);
  let adminMovementDialog = $state(false);
  let adminMovementItem = $state<InventoryItem | null>(null);
  let adminMovementType = $state<'entry' | 'withdrawal'>('entry');
  let adminMovementQuantity = $state(1);
  let adminMovementReason = $state('');
  let itemDraft = $state<ItemDraft>(emptyItem());
  let itemDraftId = $state('');
  let employeeDraft = $state({ name: '', matricula: '', active: true, canAdd: true, canWithdraw: true });
  let employeeDraftId = $state('');
  let chosenImage = $state<File | null>(null);
  let historySearch = $state('');
  let movementTypeFilter = $state<'all' | 'entry' | 'withdrawal'>('all');
  let historyFromDate = $state('');
  let historyToDate = $state('');

  onMount(() => {
    if (!auth) return;
    return onAuthStateChanged(auth, async (currentUser) => {
    user = currentUser;
    if (!currentUser) {
      userRole = null;
      employee = null;
      items = [];
      return;
    }
    try {
      const token = await currentUser.getIdTokenResult();
      userRole = token.claims.role === 'admin' ? 'admin' : token.claims.role === 'employee' ? 'employee' : null;
      employee = userRole === 'employee' ? {
        id: String(token.claims.employeeId ?? ''), name: String(token.claims.name ?? 'Funcionário'),
        matricula: String(token.claims.matricula ?? '')
      } : null;
      if (!userRole) {
        await signOutUser();
        throw new Error('Esta conta não possui um perfil autorizado.');
      }
      await refreshItems();
      if (userRole === 'admin') await loadAdminData();
    } catch (error) {
      showError(error);
    }
    });
  });

  $effect(() => {
    const term = search;
    if (!user || selectedItem) return;
    const timer = setTimeout(() => refreshItems(term), 250);
    return () => clearTimeout(timer);
  });

  $effect(() => {
    if (userRole !== 'admin') return;
    if (page === 'employees') loadEmployeesPage();
    if (page === 'movements') loadMovementPage();
  });

  async function refreshItems(term = search) {
    try {
      itemCursor = undefined;
      hasMoreItems = false;
      if (userRole === 'admin') {
        const all = await loadAllAdminItems();
        adminItems = all;
        items = term.trim() ? filterItems(all, term) : all.filter((item) => item.active);
      } else {
        const result = await listItems(term);
        items = term.trim() ? filterItems(result.items, term) : result.items;
        itemCursor = result.cursor;
        hasMoreItems = Boolean(result.cursor && result.items.length === 40);
      }
    } catch (error) {
      showError(error);
    }
  }

  async function loadMoreItems() {
    if (!itemCursor || loadingMore || search.trim()) return;
    loadingMore = true;
    try {
      const result = await listItems('', itemCursor);
      items = [...items, ...result.items];
      itemCursor = result.cursor;
      hasMoreItems = Boolean(result.cursor && result.items.length === 40);
    } catch (error) { showError(error); }
    finally { loadingMore = false; }
  }

  function filterItems(source: InventoryItem[], term: string) {
    const normalized = normalize(term);
    const words = normalized.split(/\s+/).filter(Boolean);
    return source.filter((item) => {
      const haystack = normalize([item.name, item.code, item.description, item.category, ...item.customFields.flatMap((field) => [field.label, field.value])].join(' '));
      const location = `${item.rackNumber} ${item.shelfNumber}`.toLowerCase();
      return words.every((word) => haystack.includes(word) || location.includes(word));
    });
  }

  function normalize(value: string) {
    return value.trim().toLocaleLowerCase('pt-BR').normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  }

  async function loadAdminData() {
    try {
      const [nextItems, nextEmployees, nextMovements, summary] = await Promise.all([loadAllAdminItems(), loadEmployees(), listMovements(), getDashboardSummary()]);
      adminItems = nextItems;
      employees = nextEmployees;
      movements = nextMovements;
      dashboardSummary = summary.data;
      items = search.trim() ? filterItems(adminItems, search) : adminItems.filter((item) => item.active);
    } catch (error) {
      showError(error);
    }
  }

  async function loadEmployeesPage() {
    try { employees = await loadEmployees(); } catch (error) { showError(error); }
  }

  async function loadMovementPage() {
    try { movements = await listMovements(); } catch (error) { showError(error); }
  }

  async function submitEmployeeAccess(event: SubmitEvent) {
    event.preventDefault();
    busy = true;
    clearMessages();
    try {
      await signInEmployee(matricula.trim());
      matricula = '';
    } catch (error) { showError(error); }
    finally { busy = false; }
  }

  async function submitAdminAccess(event: SubmitEvent) {
    event.preventDefault();
    busy = true;
    clearMessages();
    try { await signInAdmin(email.trim(), password); }
    catch (error) { showError(error); }
    finally { busy = false; }
  }

  async function resetAdminPassword() {
    if (!email.trim()) { errorMessage = 'Informe o e-mail administrativo para recuperar a senha.'; return; }
    busy = true;
    try { await passwordReset(email.trim()); successMessage = 'Enviamos as instruções de recuperação para o e-mail.'; }
    catch (error) { showError(error); }
    finally { busy = false; }
  }

  async function logout() {
    await signOutUser();
    selectedItem = null;
    page = 'overview';
    clearMessages();
  }

  async function submitMovement(event: SubmitEvent) {
    event.preventDefault();
    if (!selectedItem || movementQuantity <= 0) return;
    if (movementType === 'withdrawal' && movementQuantity > selectedItem.quantity) {
      errorMessage = 'Não há quantidade suficiente para essa retirada.';
      return;
    }
    busy = true;
    clearMessages();
    try {
      const fingerprint = JSON.stringify([selectedItem.id, movementType, movementQuantity, movementReason.trim()]);
      if (fingerprint !== pendingMovementFingerprint) {
        pendingMovementFingerprint = fingerprint;
        pendingMovementKey = crypto.randomUUID();
      }
      const result = await recordMovement({
        itemId: selectedItem.id, movementType, quantity: movementQuantity,
        reason: movementReason.trim(), idempotencyKey: pendingMovementKey
      });
      pendingMovementKey = '';
      pendingMovementFingerprint = '';
      successMessage = movementType === 'entry' ? 'Entrada registrada.' : 'Retirada registrada.';
      movementQuantity = 1;
      movementReason = '';
      await refreshItems();
      selectedItem = { ...selectedItem, quantity: result.data.quantityAfter };
      const refreshedItem = items.find((item) => item.id === selectedItem?.id);
      if (refreshedItem) selectedItem = refreshedItem;
      if (userRole === 'admin') await loadMovementPage();
    } catch (error) { showError(error); }
    finally { busy = false; }
  }

  function openNewItem() {
    itemDraft = emptyItem();
    itemDraftId = crypto.randomUUID();
    chosenImage = null;
    itemDialog = true;
  }

  function openEditItem(item: InventoryItem) {
    itemDraft = {
      name: item.name, code: item.code, description: item.description, category: item.category,
      itemType: item.itemType, trackingMode: item.trackingMode, unit: item.unit, quantity: item.quantity,
      minimumStock: item.minimumStock, rackNumber: item.rackNumber, shelfNumber: item.shelfNumber,
      locationNote: item.locationNote, imageUrl: item.imageUrl, imageObjectKey: item.imageObjectKey,
      customFields: item.customFields.map((field) => ({ ...field })), active: item.active
    };
    itemDraftId = item.id;
    chosenImage = null;
    selectedItem = null;
    itemDialog = true;
  }

  function addCustomField() {
    if (itemDraft.customFields.length >= 30) { errorMessage = 'Limite de 30 informações adicionais por item.'; return; }
    itemDraft.customFields = [...itemDraft.customFields, { id: crypto.randomUUID(), label: '', value: '' }];
  }

  async function submitItem(event: SubmitEvent) {
    event.preventDefault();
    clearMessages();
    if (itemDraft.customFields.some((field) => !field.label.trim() || !field.value.trim())) {
      errorMessage = 'Preencha o nome e o valor de cada informação adicional ou remova o campo vazio.';
      return;
    }
    busy = true;
    try {
      const previousImageKey = itemDraft.imageObjectKey;
      if (chosenImage) {
        const image = await uploadOptimizedImage(chosenImage, itemDraftId);
        itemDraft.imageUrl = image.imageUrl;
        itemDraft.imageObjectKey = image.imageObjectKey;
      }
      await saveItem({ ...itemDraft, itemId: itemDraftId });
      if (chosenImage && previousImageKey) {
        try { await deleteItemImage(itemDraftId, previousImageKey); }
        catch { successMessage = 'Item salvo; a imagem anterior precisa ser removida manualmente do bucket.'; }
      }
      itemDialog = false;
      if (!successMessage) successMessage = 'Cadastro do item salvo.';
      await loadAdminData();
    } catch (error) { showError(error); }
    finally { busy = false; }
  }

  async function removeItemImage() {
    if (!itemDraft.imageObjectKey) { itemDraft.imageUrl = ''; chosenImage = null; return; }
    busy = true;
    try {
      await deleteItemImage(itemDraftId, itemDraft.imageObjectKey);
      itemDraft.imageUrl = '';
      itemDraft.imageObjectKey = '';
      chosenImage = null;
    } catch (error) { showError(error); }
    finally { busy = false; }
  }

  function openNewEmployee() {
    employeeDraft = { name: '', matricula: '', active: true, canAdd: true, canWithdraw: true };
    employeeDraftId = '';
    employeeDialog = true;
  }

  function openEditEmployee(person: Employee) {
    employeeDraft = { name: person.name, matricula: person.matricula, active: person.active, canAdd: person.canAdd, canWithdraw: person.canWithdraw };
    employeeDraftId = person.id;
    employeeDialog = true;
  }

  async function submitEmployee(event: SubmitEvent) {
    event.preventDefault();
    busy = true;
    clearMessages();
    try {
      await saveEmployee({ ...employeeDraft, ...(employeeDraftId ? { employeeId: employeeDraftId } : {}) });
      employeeDialog = false;
      successMessage = 'Cadastro do funcionário salvo.';
      await loadEmployeesPage();
    } catch (error) { showError(error); }
    finally { busy = false; }
  }

  function openAdminMovement(item: InventoryItem, type: 'entry' | 'withdrawal') {
    adminMovementItem = item;
    adminMovementType = type;
    adminMovementQuantity = 1;
    adminMovementReason = '';
    clearMessages();
    adminMovementDialog = true;
  }

  async function submitAdminMovement(event: SubmitEvent) {
    event.preventDefault();
    if (!adminMovementItem) return;
    if (adminMovementType === 'withdrawal' && adminMovementQuantity > adminMovementItem.quantity) {
      errorMessage = 'Não há quantidade suficiente para essa retirada.';
      return;
    }
    busy = true;
    clearMessages();
    try {
      await recordMovement({
        itemId: adminMovementItem.id, movementType: adminMovementType,
        quantity: adminMovementQuantity, reason: adminMovementReason.trim(), idempotencyKey: crypto.randomUUID()
      });
      adminMovementDialog = false;
      successMessage = 'Movimentação administrativa registrada no histórico.';
      await loadAdminData();
    } catch (error) { showError(error); }
    finally { busy = false; }
  }

  function showError(error: unknown) {
    const candidate = error as { message?: string; code?: string };
    const messages: Record<string, string> = {
      'functions/permission-denied': 'Acesso não autorizado. Confira se a matrícula está ativa ou se a conta tem permissão.',
      'functions/resource-exhausted': 'Muitas tentativas. Aguarde alguns minutos e tente novamente.',
      'functions/failed-precondition': 'A operação não pode ser concluída com o saldo atual.',
      'functions/already-exists': 'Esse código ou matrícula já está cadastrado.',
      'auth/invalid-credential': 'E-mail ou senha incorretos.',
      'auth/network-request-failed': 'Sem conexão com o servidor. Movimentações exigem conexão ativa.'
    };
    errorMessage = candidate.code && messages[candidate.code] ? messages[candidate.code] : candidate.message ?? 'Ocorreu um erro. Tente novamente.';
  }

  function clearMessages() { errorMessage = ''; successMessage = ''; }
  function locationLabel(item: InventoryItem) {
    return item.rackNumber && item.shelfNumber ? `E-${item.rackNumber.padStart(2, '0')} / P-${item.shelfNumber.padStart(2, '0')}` : 'LOCALIZAÇÃO NÃO CADASTRADA';
  }
  function stockStatus(item: InventoryItem) {
    if (item.quantity <= 0) return 'empty';
    if (item.quantity <= item.minimumStock) return 'low';
    return 'normal';
  }
  function formatDate(seconds?: number) {
    return seconds ? new Intl.DateTimeFormat('pt-BR', { dateStyle: 'short', timeStyle: 'short' }).format(new Date(seconds * 1000)) : 'Agora';
  }

  function isInMovementRange(movement: StockMovement) {
    const date = movement.createdAt?.seconds ? new Date(movement.createdAt.seconds * 1000) : new Date();
    const dateKey = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
    return (!historyFromDate || dateKey >= historyFromDate) && (!historyToDate || dateKey <= historyToDate);
  }
  let filteredMovements = $derived(movements.filter((movement) =>
    normalize(`${movement.employeeNameSnapshot} ${movement.matriculaSnapshot} ${movement.itemNameSnapshot} ${movement.itemCode} ${movement.movementType}`).includes(normalize(historySearch)) &&
    (movementTypeFilter === 'all' || movement.movementType === movementTypeFilter) && isInMovementRange(movement)
  ));
  let stockOutCount = $derived(dashboardSummary.stockOutCount);
  let lowStockCount = $derived(dashboardSummary.lowStockCount);
</script>

<svelte:head>
  <meta name="apple-mobile-web-app-capable" content="yes" />
  <meta name="apple-mobile-web-app-title" content="Estoque" />
  <meta name="theme-color" content="#f3f5f2" />
  <title>Controle de Estoque</title>
</svelte:head>

{#if !user}
  <main class="entry-screen">
    <button class="admin-shortcut" aria-label="Acesso administrativo" title="Acesso administrativo" onclick={() => { adminLogin = !adminLogin; clearMessages(); }}>
      {#if adminLogin}<ArrowLeft size={19} />{:else}<LockKeyhole size={19} />{/if}
    </button>
    <section class="entry-content" aria-labelledby="page-title">
      <div class="brand-mark"><Warehouse size={25} strokeWidth={1.8} /></div>
      <p class="eyebrow">ARMAZÉM · CONTROLE INTERNO</p>
      <h1 id="page-title">{adminLogin ? 'ACESSO\nADMINISTRATIVO' : 'CONTROLE\nDE ESTOQUE'}</h1>
      <p class="entry-hint">{adminLogin ? 'Entre com sua conta administrativa.' : 'Identifique-se para consultar os materiais.'}</p>
      {#if adminLogin}
        <form class="access-form" onsubmit={submitAdminAccess}>
          <label for="email">E-MAIL</label>
          <div class="input-wrap"><UserRound size={19} /><input id="email" type="email" bind:value={email} autocomplete="username" placeholder="nome@empresa.com" required /></div>
          <label for="password" class="second-label">SENHA</label>
          <div class="input-wrap"><LockKeyhole size={18} /><input id="password" type="password" bind:value={password} autocomplete="current-password" placeholder="Sua senha" required /></div>
          <button class="primary-button" type="submit" disabled={busy}>{busy ? 'VALIDANDO...' : 'ENTRAR'} <span aria-hidden="true">↗</span></button>
          <button class="text-button reset-button" type="button" onclick={resetAdminPassword}>Recuperar senha</button>
        </form>
      {:else}
        <form class="access-form" onsubmit={submitEmployeeAccess}>
          <label for="matricula">MATRÍCULA</label>
          <div class="input-wrap"><Search size={19} aria-hidden="true" /><input id="matricula" bind:value={matricula} inputmode="text" autocomplete="off" placeholder="Digite sua matrícula" required /></div>
          <button class="primary-button" type="submit" disabled={busy || !matricula.trim()}>{busy ? 'VALIDANDO...' : 'ACESSAR'} <span aria-hidden="true">↗</span></button>
        </form>
      {/if}
      {#if errorMessage}<p class="form-message error-message" role="alert">{errorMessage}</p>{/if}
      {#if successMessage}<p class="form-message success-message" role="status">{successMessage}</p>{/if}
      {#if !firebaseConfigured}<p class="form-message setup-message">Configure as variáveis Firebase do arquivo `.env` para conectar este sistema.</p>{/if}
      <p class="connection-note"><span></span> ACESSO RESTRITO A USUÁRIOS AUTORIZADOS</p>
    </section>
    <footer>ESTOQUE · OPERAÇÃO E MANUTENÇÃO</footer>
  </main>
{:else if userRole === 'admin'}
  <main class="admin-layout">
    <aside class="admin-rail">
      <a class="rail-brand" href="#inicio" aria-label="Controle de estoque"><Warehouse size={22} /></a>
      <nav aria-label="Administração">
        <button class:active={page === 'overview'} title="Visão geral" aria-label="Visão geral" onclick={() => page = 'overview'}><Boxes size={20} /></button>
        <button class:active={page === 'items'} title="Itens" aria-label="Itens" onclick={() => page = 'items'}><Wrench size={20} /></button>
        <button class:active={page === 'employees'} title="Funcionários" aria-label="Funcionários" onclick={() => page = 'employees'}><Users size={20} /></button>
        <button class:active={page === 'movements'} title="Movimentações" aria-label="Movimentações" onclick={() => page = 'movements'}><ClipboardList size={20} /></button>
      </nav>
      <button class="rail-logout" aria-label="Sair" title="Sair" onclick={logout}><LogOut size={19} /></button>
    </aside>
    <section class="admin-main">
      <header class="topbar">
        <div><p class="eyebrow">ARMAZÉM / ADMINISTRAÇÃO</p><h1>{page === 'overview' ? 'Visão geral' : page === 'items' ? 'Itens do estoque' : page === 'employees' ? 'Funcionários' : 'Movimentações'}</h1></div>
        <div class="user-chip"><ShieldCheck size={17} /><span>Administrador</span><button aria-label="Sair" onclick={logout}><LogOut size={17} /></button></div>
      </header>
      {#if successMessage}<div class="inline-message success-message" role="status"><Check size={18} />{successMessage}<button aria-label="Fechar aviso" onclick={() => successMessage = ''}><X size={17} /></button></div>{/if}

      {#if page === 'overview'}
        <section class="overview-page">
          <div class="metric-grid">
            <article class="metric"><p>TOTAL DE ITENS</p><strong>{dashboardSummary.itemCount}</strong><span>no catálogo</span><Boxes size={20} /></article>
            <article class="metric"><p>ITENS ATIVOS</p><strong>{dashboardSummary.activeItemCount}</strong><span>disponíveis para consulta</span><Warehouse size={20} /></article>
            <article class="metric alert-metric"><p>SEM ESTOQUE</p><strong>{stockOutCount}</strong><span>reposição imediata</span><CircleAlert size={20} /></article>
            <article class="metric warn-metric"><p>ESTOQUE BAIXO</p><strong>{lowStockCount}</strong><span>no limite mínimo</span><ArrowDownLeft size={20} /></article>
            <article class="metric"><p>MOVIMENTAÇÕES HOJE</p><strong>{dashboardSummary.movementCount}</strong><span>registradas no servidor</span><ClipboardList size={20} /></article>
            <article class="metric"><p>ENTRADAS HOJE</p><strong>{dashboardSummary.todayEntries}</strong><span>materiais adicionados</span><PackagePlus size={20} /></article>
            <article class="metric"><p>RETIRADAS HOJE</p><strong>{dashboardSummary.todayWithdrawals}</strong><span>materiais retirados</span><ArrowDownLeft size={20} /></article>
          </div>
          <section class="content-section restock-section">
            <div class="section-heading"><div><p class="eyebrow">ATENÇÃO</p><h2>Reposição necessária</h2></div><button class="quiet-button" onclick={() => page = 'items'}>Ver todos <ArrowRight size={16} /></button></div>
            {#if adminItems.filter((item) => item.active && item.quantity <= item.minimumStock).length}
              <div class="table-scroll"><table><thead><tr><th>ITEM</th><th>CÓDIGO</th><th>LOCALIZAÇÃO</th><th>DISPONÍVEL</th><th>MÍNIMO</th></tr></thead><tbody>
                {#each adminItems.filter((item) => item.active && item.quantity <= item.minimumStock).slice(0, 10) as item (item.id)}
                  <tr><td><button class="table-link" onclick={() => openEditItem(item)}>{item.name}</button></td><td>{item.code}</td><td>{locationLabel(item)}</td><td><span class:danger-text={item.quantity === 0}>{item.quantity} {item.unit}</span></td><td>{item.minimumStock} {item.unit}</td></tr>
                {/each}
              </tbody></table></div>
            {:else}<p class="empty-state">Nenhum item precisa de reposição.</p>{/if}
          </section>
          <section class="content-section today-section"><div class="section-heading"><div><p class="eyebrow">ATIVIDADE</p><h2>Movimentações recentes</h2></div><button class="quiet-button" onclick={() => page = 'movements'}>Abrir histórico <ArrowRight size={16} /></button></div>
            {#if movements.length}{@render MovementList(movements.slice(0, 5))}{:else}<button class="quiet-button" onclick={loadMovementPage}>Carregar movimentações <ArrowRight size={16} /></button>{/if}
          </section>
        </section>
      {:else if page === 'items'}
        <section class="content-section records-page">
          <div class="section-heading"><div><p class="eyebrow">CATÁLOGO</p><h2>Materiais cadastrados</h2></div><button class="primary-action" onclick={openNewItem}><Plus size={18} /> Novo item</button></div>
          <div class="toolbar"><div class="search-box"><Search size={19} /><input bind:value={search} placeholder="Buscar por nome, código ou informação" /></div><label class="location-filter"><Settings2 size={17} /><input bind:value={locationFilter} placeholder="Estante ou prateleira" /></label></div>
          <div class="table-scroll"><table><thead><tr><th>ITEM</th><th>CÓDIGO</th><th>LOCALIZAÇÃO</th><th>QUANTIDADE</th><th>SITUAÇÃO</th><th></th></tr></thead><tbody>
            {#each adminItems.filter((item) => (!search.trim() || filterItems([item], search).length) && (!locationFilter || `${item.rackNumber} ${item.shelfNumber}`.toLowerCase().includes(locationFilter.toLowerCase()))) as item (item.id)}
              <tr><td><div class="item-cell">{#if item.imageUrl}<img src={item.imageUrl} alt="" loading="lazy" />{:else}<span class="mini-placeholder"><Boxes size={18} /></span>{/if}<div><strong>{item.name}</strong><small>{item.category || 'Sem categoria'}</small></div></div></td><td>{item.code}</td><td>{locationLabel(item)}</td><td>{item.quantity} {item.unit}</td><td><span class="status-pill" class:status-empty={stockStatus(item) === 'empty'} class:status-low={stockStatus(item) === 'low'}>{item.active ? (stockStatus(item) === 'empty' ? 'SEM ESTOQUE' : stockStatus(item) === 'low' ? 'ESTOQUE BAIXO' : 'NORMAL') : 'INATIVO'}</span></td><td><div class="row-actions"><button class="icon-action" aria-label="Adicionar ao estoque" title="Adicionar ao estoque" onclick={() => openAdminMovement(item, 'entry')}><PackagePlus size={17} /></button><button class="icon-action" aria-label="Retirar do estoque" title="Retirar do estoque" onclick={() => openAdminMovement(item, 'withdrawal')}><ArrowDownLeft size={17} /></button><button class="icon-action" aria-label="Editar item" title="Editar item" onclick={() => openEditItem(item)}><Settings2 size={18} /></button></div></td></tr>
            {:else}<tr><td colspan="6"><p class="empty-state">Nenhum item encontrado.</p></td></tr>{/each}
          </tbody></table></div>
        </section>
      {:else if page === 'employees'}
        <section class="content-section records-page">
          <div class="section-heading"><div><p class="eyebrow">ACESSO INTERNO</p><h2>Cadastro de funcionários</h2></div><button class="primary-action" onclick={openNewEmployee}><Plus size={18} /> Novo funcionário</button></div>
          <div class="table-scroll"><table><thead><tr><th>NOME</th><th>MATRÍCULA</th><th>ADICIONAR</th><th>RETIRAR</th><th>ACESSO</th><th></th></tr></thead><tbody>
            {#each employees as person (person.id)}
              <tr><td><strong>{person.name}</strong></td><td>{person.matricula}</td><td>{person.canAdd ? 'Permitido' : 'Não permitido'}</td><td>{person.canWithdraw ? 'Permitido' : 'Não permitido'}</td><td><span class="status-pill" class:status-empty={!person.active}>{person.active ? 'ATIVO' : 'DESATIVADO'}</span></td><td><button class="icon-action" aria-label="Editar funcionário" title="Editar funcionário" onclick={() => openEditEmployee(person)}><Settings2 size={18} /></button></td></tr>
            {:else}<tr><td colspan="6"><p class="empty-state">Nenhum funcionário cadastrado.</p></td></tr>{/each}
          </tbody></table></div>
        </section>
      {:else}
        <section class="content-section records-page">
          <div class="section-heading"><div><p class="eyebrow">AUDITORIA</p><h2>Histórico imutável</h2></div></div>
          <div class="toolbar movement-filters"><div class="search-box"><Search size={19} /><input bind:value={historySearch} placeholder="Filtrar funcionário, matrícula, item ou código" /></div><select aria-label="Tipo de movimentação" bind:value={movementTypeFilter}><option value="all">Todos os tipos</option><option value="entry">Entradas</option><option value="withdrawal">Retiradas</option></select><label class="date-filter">DE<input type="date" bind:value={historyFromDate} /></label><label class="date-filter">ATÉ<input type="date" bind:value={historyToDate} /></label><button class="quiet-button" onclick={loadMovementPage}>Atualizar <ChevronDown size={16} /></button></div>
          {#if filteredMovements.length}{@render MovementList(filteredMovements)}{:else}<p class="empty-state">Nenhuma movimentação corresponde ao filtro.</p>{/if}
        </section>
      {/if}
    </section>
  </main>
{:else if userRole === 'employee'}
  <main class="stock-app">
    <header class="stock-header">
      <div class="stock-brand"><div class="brand-mark"><Warehouse size={21} /></div><div><p class="eyebrow">ARMAZÉM · ESTOQUE</p><strong>{selectedItem ? 'Detalhes do item' : 'Consulta de materiais'}</strong></div></div>
      <div class="employee-chip"><span>{employee?.name ?? 'Funcionário'} · {employee?.matricula}</span><button title="Sair ou trocar funcionário" aria-label="Sair ou trocar funcionário" onclick={logout}><LogOut size={18} /></button></div>
    </header>
    {#if errorMessage}<div class="inline-message error-message" role="alert"><CircleAlert size={18} />{errorMessage}<button aria-label="Fechar aviso" onclick={() => errorMessage = ''}><X size={17} /></button></div>{/if}
    {#if successMessage}<div class="inline-message success-message" role="status"><Check size={18} />{successMessage}<button aria-label="Fechar aviso" onclick={() => successMessage = ''}><X size={17} /></button></div>{/if}
    {#if selectedItem}
      <section class="detail-page">
        <button class="back-button" onclick={() => { selectedItem = null; clearMessages(); }}><ArrowLeft size={18} /> VOLTAR À LISTA</button>
        <div class="detail-grid">
          <div class="detail-image">{#if selectedItem.imageUrl}<img src={selectedItem.imageUrl} alt={selectedItem.name} />{:else}<div class="large-placeholder"><Boxes size={44} /></div>{/if}</div>
          <div class="detail-main">
            <div class="detail-title-row"><div><p class="eyebrow">{selectedItem.code} · {selectedItem.category || 'MATERIAL'}</p><h1>{selectedItem.name}</h1></div><span class="status-pill" class:status-empty={stockStatus(selectedItem) === 'empty'} class:status-low={stockStatus(selectedItem) === 'low'}>{stockStatus(selectedItem) === 'empty' ? 'SEM ESTOQUE' : stockStatus(selectedItem) === 'low' ? 'ESTOQUE BAIXO' : 'NORMAL'}</span></div>
            {#if selectedItem.description}<p class="detail-description">{selectedItem.description}</p>{/if}
            <div class="detail-facts"><div class="quantity-fact"><span>DISPONÍVEL</span><strong>{selectedItem.quantity}<small> {selectedItem.unit}</small></strong></div><div><span>LOCALIZAÇÃO</span><strong class="location-emphasis">{locationLabel(selectedItem)}</strong></div><div><span>ESTOQUE MÍNIMO</span><strong>{selectedItem.minimumStock} {selectedItem.unit}</strong></div><div><span>TIPO</span><strong>{selectedItem.itemType}</strong></div></div>
            {#if selectedItem.locationNote}<p class="location-note">{selectedItem.locationNote}</p>{/if}
            {#if selectedItem.customFields.length}<section class="custom-fields"><p class="eyebrow">INFORMAÇÕES ADICIONAIS</p><dl>{#each selectedItem.customFields as field (field.id)}<div><dt>{field.label}</dt><dd>{field.value}</dd></div>{/each}</dl></section>{/if}
            <form class="movement-panel" onsubmit={submitMovement}>
              <div class="section-heading"><div><p class="eyebrow">MOVIMENTAÇÃO</p><h2>Registrar operação</h2></div></div>
              <div class="segmented"><button type="button" class:chosen={movementType === 'withdrawal'} onclick={() => movementType = 'withdrawal'}><Minus size={17} /> Retirar</button><button type="button" class:chosen={movementType === 'entry'} onclick={() => movementType = 'entry'}><Plus size={17} /> Adicionar</button></div>
              <div class="movement-inputs"><label>QUANTIDADE<input type="number" min="0.001" step="0.001" bind:value={movementQuantity} required /></label><label>MOTIVO <span>(opcional)</span><input bind:value={movementReason} maxlength="250" placeholder="Ex.: manutenção preventiva" /></label></div>
              <p class="balance-preview">Saldo atual <strong>{selectedItem.quantity} {selectedItem.unit}</strong>{#if movementQuantity > 0}<span>→</span> após operação <strong>{Math.max(0, selectedItem.quantity + (movementType === 'entry' ? Number(movementQuantity) : -Number(movementQuantity)))} {selectedItem.unit}</strong>{/if}</p>
              <button class="primary-action confirm-movement" type="submit" disabled={busy || movementQuantity < 1 || (movementType === 'withdrawal' && movementQuantity > selectedItem.quantity)}>{busy ? 'REGISTRANDO...' : movementType === 'entry' ? 'CONFIRMAR ENTRADA' : 'CONFIRMAR RETIRADA'} <ArrowRight size={18} /></button>
            </form>
          </div>
        </div>
      </section>
    {:else}
      <section class="inventory-page">
        <div class="inventory-intro"><div><p class="eyebrow">CONSULTA RÁPIDA</p><h1>Encontre seu material.</h1></div><p>{items.length} {items.length === 1 ? 'resultado' : 'resultados'}</p></div>
        <div class="search-box main-search"><Search size={21} /><input bind:value={search} placeholder="Nome, código ou informação adicional" aria-label="Buscar materiais" /><kbd>↵</kbd></div>
        <div class="quick-filter-row"><label class="location-filter"><Settings2 size={17} /><input bind:value={locationFilter} placeholder="Filtrar por estante ou prateleira" /></label><span><span class="dot normal-dot"></span>Disponível <span class="dot low-dot"></span>Baixo <span class="dot empty-dot"></span>Zerado</span></div>
        {#if items.length}
          <div class="inventory-grid">{#each items.filter((item) => !locationFilter || `${item.rackNumber} ${item.shelfNumber}`.toLowerCase().includes(locationFilter.toLowerCase())) as item (item.id)}
            <button class="inventory-card" onclick={() => { selectedItem = item; clearMessages(); }}>
              <div class="card-image">{#if item.imageUrl}<img src={item.imageUrl} alt="" loading="lazy" />{:else}<div class="card-placeholder"><Boxes size={25} /></div>{/if}</div>
              <div class="card-body"><div class="card-heading"><span class="eyebrow">{item.code}</span><span class="status-mark" class:mark-empty={stockStatus(item) === 'empty'} class:mark-low={stockStatus(item) === 'low'}></span></div><h2>{item.name}</h2><p class="card-location">{locationLabel(item)}</p><div class="card-footer"><strong class:danger-text={item.quantity === 0}>{#if item.quantity === 0}SEM ESTOQUE{:else}{item.quantity} <span>{item.unit}</span>{/if}</strong><span>mín. {item.minimumStock}</span></div></div>
            </button>
          {/each}</div>
        {:else}<div class="empty-stock"><Boxes size={27} /><p>Nenhum material encontrado.</p><span>Confira o código ou tente outro termo.</span></div>{/if}
        {#if hasMoreItems && !search.trim()}<button class="load-more" onclick={loadMoreItems} disabled={loadingMore}>{loadingMore ? 'CARREGANDO...' : 'CARREGAR MAIS ITENS'} <ChevronDown size={18} /></button>{/if}
      </section>
    {/if}
  </main>
{/if}

{#if itemDialog}
  <div class="dialog-backdrop" role="presentation" onclick={(event) => { if (event.target === event.currentTarget) itemDialog = false; }}>
    <dialog open class="edit-dialog" aria-labelledby="item-dialog-title">
      <header class="dialog-header"><div><p class="eyebrow">CATÁLOGO DE ESTOQUE</p><h2 id="item-dialog-title">{itemDraft.name ? 'Editar item' : 'Novo item'}</h2></div><button class="icon-action" aria-label="Fechar" onclick={() => itemDialog = false}><X size={20} /></button></header>
      <form class="dialog-form" onsubmit={submitItem}>
        <div class="form-grid"><label>Nome do item<input bind:value={itemDraft.name} maxlength="120" required /></label><label>Código único<input bind:value={itemDraft.code} maxlength="64" required /></label><label>Categoria<input bind:value={itemDraft.category} maxlength="80" /></label><label>Tipo<select bind:value={itemDraft.itemType}><option value="piece">Peça</option><option value="component">Componente</option><option value="tool">Ferramenta</option><option value="machine">Máquina</option></select></label><label>Controle<select bind:value={itemDraft.trackingMode}><option value="quantity">Quantidade</option><option value="asset">Individual (série/patrimônio)</option></select></label><label>Unidade<input bind:value={itemDraft.unit} maxlength="20" required /></label><label>Quantidade inicial<input type="number" min="0" step="0.001" bind:value={itemDraft.quantity} required disabled={!!adminItems.find((item) => item.id === itemDraftId)} /></label><label>Estoque mínimo<input type="number" min="0" step="0.001" bind:value={itemDraft.minimumStock} required /></label><label>Estante<input bind:value={itemDraft.rackNumber} maxlength="20" /></label><label>Prateleira<input bind:value={itemDraft.shelfNumber} maxlength="20" /></label><label>Localização complementar<input bind:value={itemDraft.locationNote} maxlength="100" /></label><label class="wide-field">Descrição<textarea bind:value={itemDraft.description} maxlength="2000" rows="3"></textarea></label><label class="wide-field upload-control"><span>Fotografia do item</span><span class="upload-box"><Upload size={19} />{chosenImage?.name ?? (itemDraft.imageUrl ? 'Substituir fotografia' : 'Selecionar imagem')}<input type="file" accept="image/*" onchange={(event) => chosenImage = event.currentTarget.files?.[0] ?? null} /></span>{#if itemDraft.imageUrl}<div class="image-actions"><img class="upload-preview" src={itemDraft.imageUrl} alt="Prévia do item" /><button type="button" class="remove-image" onclick={removeItemImage} disabled={busy}><Trash2 size={16} /> Excluir fotografia</button></div>{/if}</label><label class="check-label"><input type="checkbox" bind:checked={itemDraft.active} /> Item ativo</label></div>
        <section class="custom-editor"><div class="section-heading"><div><p class="eyebrow">FLEXÍVEL POR ITEM</p><h3>Informações adicionais</h3></div><button type="button" class="add-field-button" onclick={addCustomField}><Plus size={16} /> Adicionar campo</button></div>
          {#each itemDraft.customFields as field, index (field.id)}<div class="custom-row"><label>Nome do campo<input bind:value={field.label} maxlength="60" placeholder="Ex.: Fabricante" /></label><label>Informação<input bind:value={field.value} maxlength="250" placeholder="Valor" /></label><button type="button" class="remove-field" aria-label="Remover campo" title="Remover campo" onclick={() => itemDraft.customFields = itemDraft.customFields.filter((_, position) => position !== index)}><Trash2 size={17} /></button></div>{/each}
          {#if !itemDraft.customFields.length}<p class="form-hint">Nenhuma informação adicional.</p>{/if}
        </section>
        {#if errorMessage}<p class="form-message error-message" role="alert">{errorMessage}</p>{/if}
        <div class="dialog-actions"><button class="quiet-button" type="button" onclick={() => itemDialog = false}>Cancelar</button><button class="primary-action" type="submit" disabled={busy}>{busy ? 'SALVANDO...' : 'SALVAR ITEM'} <Check size={17} /></button></div>
      </form>
    </dialog>
  </div>
{/if}

{#if employeeDialog}
  <div class="dialog-backdrop" role="presentation" onclick={(event) => { if (event.target === event.currentTarget) employeeDialog = false; }}>
    <dialog open class="edit-dialog employee-dialog" aria-labelledby="employee-dialog-title">
      <header class="dialog-header"><div><p class="eyebrow">ACESSO INTERNO</p><h2 id="employee-dialog-title">{employeeDraftId ? 'Editar funcionário' : 'Novo funcionário'}</h2></div><button class="icon-action" aria-label="Fechar" onclick={() => employeeDialog = false}><X size={20} /></button></header>
      <form class="dialog-form" onsubmit={submitEmployee}>
        <div class="form-grid"><label class="wide-field">Nome completo<input bind:value={employeeDraft.name} maxlength="120" required /></label><label class="wide-field">Matrícula<input bind:value={employeeDraft.matricula} maxlength="32" required /></label><label class="check-label"><input type="checkbox" bind:checked={employeeDraft.active} /> Acesso ativo</label><label class="check-label"><input type="checkbox" bind:checked={employeeDraft.canAdd} /> Pode adicionar materiais</label><label class="check-label"><input type="checkbox" bind:checked={employeeDraft.canWithdraw} /> Pode retirar materiais</label></div>
        {#if errorMessage}<p class="form-message error-message" role="alert">{errorMessage}</p>{/if}
        <div class="dialog-actions"><button class="quiet-button" type="button" onclick={() => employeeDialog = false}>Cancelar</button><button class="primary-action" type="submit" disabled={busy}>{busy ? 'SALVANDO...' : 'SALVAR FUNCIONÁRIO'} <Check size={17} /></button></div>
      </form>
    </dialog>
  </div>
{/if}

{#if adminMovementDialog && adminMovementItem}
  <div class="dialog-backdrop" role="presentation" onclick={(event) => { if (event.target === event.currentTarget) adminMovementDialog = false; }}>
    <dialog open class="edit-dialog employee-dialog" aria-labelledby="admin-movement-title">
      <header class="dialog-header"><div><p class="eyebrow">AJUSTE AUDITÁVEL</p><h2 id="admin-movement-title">Movimentar estoque</h2></div><button class="icon-action" aria-label="Fechar" onclick={() => adminMovementDialog = false}><X size={20} /></button></header>
      <form class="dialog-form" onsubmit={submitAdminMovement}>
        <p class="admin-movement-item"><strong>{adminMovementItem.name}</strong><span>{adminMovementItem.code} · saldo {adminMovementItem.quantity} {adminMovementItem.unit}</span></p>
        <div class="segmented"><button type="button" class:chosen={adminMovementType === 'withdrawal'} onclick={() => adminMovementType = 'withdrawal'}><Minus size={17} /> Retirar</button><button type="button" class:chosen={adminMovementType === 'entry'} onclick={() => adminMovementType = 'entry'}><Plus size={17} /> Adicionar</button></div>
        <div class="form-grid admin-movement-fields"><label>Quantidade<input type="number" min="0.001" step="0.001" bind:value={adminMovementQuantity} required /></label><label>Motivo<input bind:value={adminMovementReason} maxlength="250" placeholder="Motivo do ajuste" /></label></div>
        {#if errorMessage}<p class="form-message error-message" role="alert">{errorMessage}</p>{/if}
        <div class="dialog-actions"><button class="quiet-button" type="button" onclick={() => adminMovementDialog = false}>Cancelar</button><button class="primary-action" type="submit" disabled={busy || (adminMovementType === 'withdrawal' && adminMovementQuantity > adminMovementItem.quantity)}>{busy ? 'REGISTRANDO...' : 'CONFIRMAR'} <Check size={17} /></button></div>
      </form>
    </dialog>
  </div>
{/if}

{#snippet MovementList(entries: StockMovement[])}
  <div class="movement-list">{#each entries as movement (movement.id)}<article class="movement-row"><span class="movement-icon" class:movement-in={movement.movementType === 'entry'}>{#if movement.movementType === 'entry'}<PackagePlus size={18} />{:else}<ArrowDownLeft size={18} />{/if}</span><div class="movement-copy"><strong>{movement.itemNameSnapshot}</strong><span>{movement.employeeNameSnapshot} · {movement.matriculaSnapshot} · {movement.itemCode}</span><small>{movement.reason || (movement.movementType === 'entry' ? 'Entrada' : 'Retirada')} · {formatDate(movement.createdAt?.seconds)}</small></div><div class="movement-quantity" class:entry-quantity={movement.movementType === 'entry'}><strong>{movement.movementType === 'entry' ? '+' : '−'}{movement.quantity}</strong><small>{movement.quantityBefore} → {movement.quantityAfter}</small></div></article>{/each}</div>
{/snippet}