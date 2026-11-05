export type CustomField = { id: string; label: string; value: string };

export type InventoryItem = {
  id: string;
  name: string;
  code: string;
  description: string;
  category: string;
  itemType: 'piece' | 'component' | 'tool' | 'machine';
  trackingMode: 'quantity' | 'asset';
  unit: string;
  quantity: number;
  minimumStock: number;
  rackNumber: string;
  shelfNumber: string;
  locationNote: string;
  imageUrl: string;
  imageObjectKey: string;
  customFields: CustomField[];
  searchTokens: string[];
  active: boolean;
  createdAt?: unknown;
  updatedAt?: unknown;
};

export type Employee = {
  id: string;
  name: string;
  matricula: string;
  active: boolean;
  canAdd: boolean;
  canWithdraw: boolean;
};

export type StockMovement = {
  id: string;
  itemId: string;
  itemNameSnapshot: string;
  itemCode: string;
  employeeId: string;
  employeeNameSnapshot: string;
  matriculaSnapshot: string;
  movementType: 'entry' | 'withdrawal';
  quantity: number;
  quantityBefore: number;
  quantityAfter: number;
  reason: string;
  createdAt?: { seconds: number };
};