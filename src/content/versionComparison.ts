export interface ComparisonFeature {
  id: string;
  name: string;
  baseIncluded: boolean;
  fullIncluded: boolean;
}

export interface ComparisonGroup {
  id: 'master' | 'transactions' | 'reports';
  title: string;
  iconName: 'Layers' | 'ArrowLeftRight' | 'BarChart3';
  description: string;
  features: ComparisonFeature[];
}

export const comparisonGroups: ComparisonGroup[] = [
  {
    id: 'master',
    title: 'Master Creation',
    iconName: 'Layers',
    description: 'Foundational records and entity configuration',
    features: [
      { id: 'item-creation', name: 'Item Creation', baseIncluded: true, fullIncluded: true },
      { id: 'customer-creation', name: 'Customer Creation', baseIncluded: true, fullIncluded: true },
      { id: 'supplier-creation', name: 'Supplier Creation', baseIncluded: true, fullIncluded: true },
      { id: 'staff-creation', name: 'Staff Creation', baseIncluded: true, fullIncluded: true },
      { id: 'account-creation', name: 'Account Creation', baseIncluded: false, fullIncluded: true },
      { id: 'bank-entry', name: 'Bank Entry', baseIncluded: false, fullIncluded: true },
    ],
  },
  {
    id: 'transactions',
    title: 'Transactions',
    iconName: 'ArrowLeftRight',
    description: 'Day-to-day sales, inventory movements, and ledger postings',
    features: [
      { id: 'sales', name: 'Sales', baseIncluded: true, fullIncluded: true },
      { id: 'purchase', name: 'Purchase', baseIncluded: true, fullIncluded: true },
      { id: 'sales-return', name: 'Sales Return', baseIncluded: true, fullIncluded: true },
      { id: 'purchase-return', name: 'Purchase Return', baseIncluded: true, fullIncluded: true },
      { id: 'stock-adjustment', name: 'Stock Adjustment', baseIncluded: true, fullIncluded: true },
      { id: 'stock-transfer', name: 'Stock Transfer', baseIncluded: true, fullIncluded: true },
      { id: 'receipt-entry', name: 'Receipt Entry', baseIncluded: false, fullIncluded: true },
      { id: 'payment-entry', name: 'Payment Entry', baseIncluded: false, fullIncluded: true },
      { id: 'customer-outstanding-receipt-entry', name: 'Customer Outstanding Receipt Entry', baseIncluded: false, fullIncluded: true },
      { id: 'supplier-outstanding-payment-entry', name: 'Supplier Outstanding Payment Entry', baseIncluded: false, fullIncluded: true },
      { id: 'journal-entry', name: 'Journal Entry', baseIncluded: false, fullIncluded: true },
    ],
  },
  {
    id: 'reports',
    title: 'Reports',
    iconName: 'BarChart3',
    description: 'Analytical dashboards, register summaries, and accounting balances',
    features: [
      { id: 'sales-report', name: 'Sales Report', baseIncluded: true, fullIncluded: true },
      { id: 'purchase-report', name: 'Purchase Report', baseIncluded: true, fullIncluded: true },
      { id: 'sales-return-report', name: 'Sales Return Report', baseIncluded: true, fullIncluded: true },
      { id: 'purchase-return-report', name: 'Purchase Return Report', baseIncluded: true, fullIncluded: true },
      { id: 'gross-profit-report', name: 'Gross Profit Report', baseIncluded: true, fullIncluded: true },
      { id: 'customer-outstanding-report', name: 'Customer Outstanding Report', baseIncluded: true, fullIncluded: true },
      { id: 'supplier-outstanding-report', name: 'Supplier Outstanding Report', baseIncluded: true, fullIncluded: true },
      { id: 'customer-supplier-ageing-report', name: 'Customer/Supplier Ageing Report', baseIncluded: true, fullIncluded: true },
      { id: 'receipt-payment-reports', name: 'Receipt & Payment Reports', baseIncluded: false, fullIncluded: true },
      { id: 'inventory-reports', name: 'Inventory Reports', baseIncluded: true, fullIncluded: true },
      { id: 'accounting-reports', name: 'Accounting Reports', baseIncluded: false, fullIncluded: true },
      { id: 'all-business-accounting-reports', name: 'All Business & Accounting Reports', baseIncluded: false, fullIncluded: true },
    ],
  },
];

export const versionMetadata = {
  header: {
    eyebrow: 'SMARTACC SOFTWARE VERSIONS',
    title: 'Two Powerful Versions. One Smarter Way to Manage Your Business.',
    description: 'Whether you need essential billing and inventory management or a complete business accounting solution, SmartAcc offers the flexibility to choose what works best for your business.',
  },
  base: {
    name: 'Base Version',
    badge: 'Essential Features',
    suitableFor: 'Suitable for businesses requiring billing and inventory management',
    summary: '4 Master Creation • 6 Transactions • 9 Reports',
    totalFeatures: 19,
    ctaText: 'Enquire About Base Version',
  },
  full: {
    name: 'Full Version',
    badge: 'Complete Solution',
    suitableFor: 'Suitable for businesses that also require advanced accounting capabilities',
    summary: '6 Master Creation • 11 Transactions • 12 Reports',
    totalFeatures: 29,
    ctaText: 'Enquire About Full Version',
  },
  ctaSection: {
    title: 'Not Sure Which SmartAcc Version Is Right for You?',
    description: 'Tell us about your business requirements, and our team will help you choose the most suitable SmartAcc solution.',
    buttonText: 'Enquire About SmartAcc',
  },
};

// Helper utilities to retrieve features for specific cards
export const getBaseVersionFeatures = () => {
  return comparisonGroups.map(group => ({
    id: group.id,
    title: group.title,
    iconName: group.iconName,
    features: group.features.filter(f => f.baseIncluded),
  }));
};

export const getFullVersionFeatures = () => {
  return comparisonGroups.map(group => ({
    id: group.id,
    title: group.title,
    iconName: group.iconName,
    features: group.features.filter(f => f.fullIncluded),
  }));
};
