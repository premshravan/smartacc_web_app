// Services Content as defined in Section 10.1 of the SmartAcc Website Brief

export interface ServiceItem {
  id: string;
  title: string;
  summary: string;
  scopeDiscussion: string;
  iconName: string;
}

export const servicesList: ServiceItem[] = [
  {
    id: 'requirements-discussion',
    title: 'Requirements & Workflow Review',
    summary: 'Review your business type, billing process, devices, and product requirements before choosing a setup.',
    scopeDiscussion: 'A dedicated conversation to map your counter layout, invoice design needs, user roles, and daily checkout volume.',
    iconName: 'ClipboardCheck',
  },
  {
    id: 'installation-configuration',
    title: 'Installation & Setup Assistance',
    summary: 'Get assistance with the installation and configuration included in your selected product arrangement.',
    scopeDiscussion: 'Discuss deployment requirements (single counter vs multi-terminal), local network readiness, and system setup.',
    iconName: 'Laptop',
  },
  {
    id: 'data-import',
    title: 'Product & Customer Data Import',
    summary: 'Discuss supported import formats and the data that can be brought into your setup.',
    scopeDiscussion: 'Evaluate bringing your existing item catalog, price lists, customer records, and opening balances from spreadsheets or legacy systems.',
    iconName: 'FileSpreadsheet',
  },
  {
    id: 'staff-training',
    title: 'Staff Onboarding & Training',
    summary: 'Learn the supported billing workflow and relevant functions through the training arrangement included in your setup.',
    scopeDiscussion: 'Equip cashiers, store operators, and managers with hands-on practice in rapid bill creation, returns, and daily shift closing.',
    iconName: 'GraduationCap',
  },
  {
    id: 'hardware-guidance',
    title: 'Hardware & Peripheral Guidance',
    summary: 'Discuss compatible billing equipment and any setup assistance available.',
    scopeDiscussion: 'Check compatibility for thermal receipt printers (58mm/80mm), USB/wireless barcode scanners, cash drawers, and displays.',
    iconName: 'Printer',
  },
  {
    id: 'ongoing-support',
    title: 'Ongoing Support & Assistance',
    summary: 'Get help through the verified support channels and service terms applicable to your product.',
    scopeDiscussion: 'Understand available communication channels, operational hours, remote assistance capabilities, and renewal terms.',
    iconName: 'Headphones',
  },
];

export const questionsToAsk = [
  'What installation assistance is provided for our specific hardware?',
  'Can our existing product spreadsheet be imported directly?',
  'What training sessions are provided for counter staff in Malayalam and English?',
  'Which printer and scanner models are tested and verified for smooth operation?',
  'What are the support hours and turnaround times for day-to-day queries?',
  'How are software updates and data backups managed under our arrangement?',
];
