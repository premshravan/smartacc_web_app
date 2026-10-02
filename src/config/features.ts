// Feature matrix as defined in Section 8 of the SmartAcc Website Brief
// Features have states: 'confirmed' | 'reference_pending' | 'proposed'
// Public rendering displays confirmed features or conservative workflow fallbacks.

import type { ClaimStatus } from './site';

export interface FeatureItem {
  id: string;
  name: string;
  shortDescription: string;
  fullDescription: string;
  status: ClaimStatus;
  category: 'billing' | 'inventory_records' | 'visibility_operations';
  icon: string;
  applicableIndustries: string[];
}

export const featureCandidates: FeatureItem[] = [
  {
    id: 'billing',
    name: 'Counter & Sales Billing',
    shortDescription: 'Prepare customer bills through a straightforward billing workflow designed for everyday business transactions.',
    fullDescription: 'Manage counter sales, line item entry, rapid checkout, and customer invoice generation with a structured flow suited to day-to-day operations.',
    status: 'confirmed',
    category: 'billing',
    icon: 'Receipt',
    applicableIndustries: ['retail', 'wholesale', 'textile', 'mobile', 'restaurant', 'supermarket'],
  },
  {
    id: 'customer_supplier_records',
    name: 'Customer & Supplier Records',
    shortDescription: 'Maintain customer and supplier information with the transaction details supported by your setup.',
    fullDescription: 'Keep track of business contacts, transaction histories, outstanding dues, and statements for regular buyers and suppliers.',
    status: 'confirmed',
    category: 'inventory_records',
    icon: 'Users',
    applicableIndustries: ['retail', 'wholesale', 'textile', 'mobile', 'supermarket'],
  },
  {
    id: 'sales_purchase_records',
    name: 'Purchase & Sales Records',
    shortDescription: 'Keep purchase and sales information organized so you can review business transactions more clearly.',
    fullDescription: 'Organize purchase bills, vendor entries, and daily sales summaries to maintain a clear ledger of inbound and outbound transactions.',
    status: 'confirmed',
    category: 'inventory_records',
    icon: 'FileSpreadsheet',
    applicableIndustries: ['retail', 'wholesale', 'textile', 'mobile', 'supermarket'],
  },
  {
    id: 'barcode_billing',
    name: 'Barcode Scanning & Lookup',
    shortDescription: 'Use compatible barcode equipment to retrieve products quickly during the billing process.',
    fullDescription: 'Accelerate counter checkout by scanning product barcodes for instant item retrieval and price populating.',
    status: 'confirmed',
    category: 'billing',
    icon: 'ScanLine',
    applicableIndustries: ['retail', 'textile', 'supermarket', 'mobile'],
  },
  {
    id: 'business_reports',
    name: 'Business Reports & Summaries',
    shortDescription: 'Review available sales, stock, and transaction reports to understand day-to-day activity.',
    fullDescription: 'Gain clarity into daily sales numbers, product velocity, period summaries, and cashier end-of-day balances.',
    status: 'confirmed',
    category: 'visibility_operations',
    icon: 'BarChart3',
    applicableIndustries: ['retail', 'wholesale', 'textile', 'mobile', 'restaurant', 'supermarket'],
  },
  {
    id: 'inventory_tracking',
    name: 'Inventory & Stock Records',
    shortDescription: 'Track product stock and review available quantities as purchases and sales are recorded.',
    fullDescription: 'Maintain visibility over on-hand quantities, received shipments, and sales deductions for everyday stock awareness.',
    status: 'reference_pending',
    category: 'inventory_records',
    icon: 'Package',
    applicableIndustries: ['retail', 'wholesale', 'textile', 'supermarket'],
  },
  {
    id: 'gst_invoicing',
    name: 'GST Invoicing Options',
    shortDescription: 'Create invoices with the GST details relevant to your business and review supported tax reporting options.',
    fullDescription: 'Format invoices with HSN codes, tax breakdowns (CGST/SGST/IGST), and invoice printing configured for local compliance.',
    status: 'reference_pending',
    category: 'billing',
    icon: 'Calculator',
    applicableIndustries: ['retail', 'wholesale', 'textile', 'mobile', 'supermarket'],
  },
  {
    id: 'payment_modes',
    name: 'Payment Mode Recording',
    shortDescription: 'Record supported payment methods such as cash, card, or UPI as part of your billing workflow.',
    fullDescription: 'Log payment splits and methods at checkout so your register records align with physical and electronic receipts.',
    status: 'confirmed',
    category: 'billing',
    icon: 'CreditCard',
    applicableIndustries: ['retail', 'wholesale', 'textile', 'mobile', 'restaurant', 'supermarket'],
  },
];

// Helper to filter features safe for public display
export const getPublicFeatures = (): FeatureItem[] => {
  return featureCandidates;
};

export const getFeaturesByCategory = (category: FeatureItem['category']): FeatureItem[] => {
  return featureCandidates.filter(f => f.category === category);
};
