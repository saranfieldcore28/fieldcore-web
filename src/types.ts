
export enum JobStatus {
  PENDING = 'PENDING',
  DISPATCHED = 'DISPATCHED',
  ARRIVED = 'ARRIVED',
  IN_PROGRESS = 'IN_PROGRESS',
  COMPLETED = 'COMPLETED',
  CANCELLED = 'CANCELLED',
  DELAYED = 'DELAYED'
}

export enum InvoiceStatus {
  DRAFT = 'DRAFT',
  SENT = 'SENT',
  PAID = 'PAID',
  OVERDUE = 'OVERDUE',
  VOID = 'VOID'
}

export interface LineItem {
  id: string;
  pricebookId?: string; // Link to pricebook
  description: string;
  qty: number;
  unitPrice: number;
  total: number;
  type: 'Service' | 'Material' | 'Equipment';
  taxable?: boolean;
}

export interface Asset {
  id: string;
  name: string; // e.g. "Carrier Infinity 98"
  type: 'HVAC' | 'Plumbing' | 'Electrical';
  model: string;
  serial: string;
  installDate: string;
  warrantyExp: string;
  status: 'Active' | 'Retired' | 'Needs Repair';
  image?: string;
}

export interface Customer {
  id: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  zip: string;
  type: 'Residential' | 'Commercial';
  status: 'Active' | 'Inactive' | 'Lead';
  balance: number;
  lifetimeValue: number;
  lastServiceDate: string;
  tags: string[];
  assets: Asset[]; // Enterprise Asset Management
  membershipLevel?: 'None' | 'Silver' | 'Gold' | 'Platinum';
}

export interface Invoice {
  id: string;
  jobId: string;
  customerId: string;
  customerName: string;
  issueDate: string;
  dueDate: string;
  amount: number;
  status: InvoiceStatus;
  items: LineItem[];
  paymentMethod?: string;
  paidDate?: string;
}

// --- NEW PRICEBOOK TYPES ---

export interface PricebookEntry {
  id: string;
  code: string;
  name: string;
  description: string;
  type: 'Service' | 'Material' | 'Equipment';
  cost: number; // Internal cost
  price: number; // Standard Customer price
  memberPrice?: number; // Price for members
  estHours: number; // Labor time
  linkedSku?: string; // Link to inventory
  category: string;
  taxable: boolean;
}

export interface ProposalOption {
  id: string;
  name: string; // e.g. "Platinum Repair"
  description: string;
  items: LineItem[];
  total: number;
  recommended: boolean;
}

export interface AuditLog {
  id: string;
  timestamp: string;
  action: string; // e.g., "STATUS_CHANGE", "INVENTORY_DEDUCT"
  details: string;
  user: string;
}

// --- NEW JOB DETAILS ---

export interface JobNote {
  id: string;
  text: string;
  author: string;
  timestamp: string;
  isInternal: boolean;
}

export interface JobPhoto {
  id: string;
  url: string;
  caption: string;
  timestamp: string;
  user: string;
}

export interface JobReading {
  label: string;
  value: string;
  unit: string;
}

export interface PaymentRecord {
  method: 'Card' | 'Check' | 'Cash';
  amount: number;
  transactionId?: string;
  timestamp: string;
}

export interface Job {
  id: string;
  customer: Customer;
  type: string;
  status: JobStatus;
  priority: 'High' | 'Medium' | 'Low';
  technician: string; // ID of technician
  technicianName?: string; // Display name
  startTime: string; // ISO String or "HH:MM"
  duration: number; // in hours
  location: string;
  description: string;
  lineItems: LineItem[]; // The FINAL agreed items
  proposals: ProposalOption[]; // The Good/Better/Best options presented
  value: number;
  createdAt: string;
  marketingSource: string; // e.g. "Google PPC", "Yelp"
  logs: AuditLog[];
  notes?: JobNote[];
  photos?: JobPhoto[];
  readings?: JobReading[];
  signature?: string; // Data URL
  paymentRecord?: PaymentRecord;
}

export interface InventoryItem {
  id: string;
  name: string;
  sku: string;
  category: string;
  location: 'Warehouse A' | 'Warehouse B' | 'Truck 1' | 'Truck 2';
  binLocation?: string;
  supplier?: string;
  quantity: number;
  minQuantity: number;
  unitCost: number;
  sellingPrice: number;
  lastRestocked: string;
}

export interface Technician {
  id: string;
  name: string;
  avatar: string;
  status: 'AVAILABLE' | 'BUSY' | 'OFFLINE';
  skills: string[];
  zone: string;
}

export interface FleetStats {
  activeTeams: number;
  avgResponseTime: string;
  fleetHealth: number;
  dailyRevenue: number;
  hoursSavedThisWeek: number;
}
