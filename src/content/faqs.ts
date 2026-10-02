// FAQ Content as defined in Section 12 of the SmartAcc Website Brief
// Factual, measured answers adhering strictly to editorial guidelines

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: 'general' | 'features' | 'hardware' | 'pricing_support';
}

export const generalFaqs: FaqItem[] = [
  {
    id: 'what-is-smartacc',
    question: 'What is SmartAcc?',
    answer: 'SmartAcc is billing software for businesses such as retail shops, wholesale outlets, clothing stores, mobile shops, and restaurants.',
    category: 'general',
  },
  {
    id: 'is-smartacc-suitable',
    question: 'Is SmartAcc suitable for my business?',
    answer: 'Start by choosing your business type and sharing your billing requirements. A demo can help you review the relevant product setup before deciding.',
    category: 'general',
  },
  {
    id: 'where-is-smartacc-based',
    question: 'Where is SmartAcc based?',
    answer: 'SmartAcc is based in Thalassery, Kerala. Contact the team to discuss the available service arrangements for your location.',
    category: 'general',
  },
  {
    id: 'can-i-request-demo-specialized',
    question: 'Can I request a demo for a clothing shop, mobile shop, or restaurant?',
    answer: 'Yes. Select the relevant business type in the demo form and describe the workflow you would like to explore.',
    category: 'general',
  },
  {
    id: 'inventory-and-accounting',
    question: 'Does SmartAcc include inventory and accounting?',
    answer: 'Discuss the inventory, records, and accounting functions you need during your demo. Confirm the modules included in the product setup offered to your business.',
    category: 'features',
  },
  {
    id: 'deployment-mode',
    question: 'Is the software online, offline, or both?',
    answer: 'The deployment options need to be confirmed for your chosen product setup. Ask the team about connectivity requirements and supported devices before proceeding.',
    category: 'hardware',
  },
  {
    id: 'hardware-compatibility',
    question: 'Can I use my existing printer or barcode scanner?',
    answer: 'Share your device model with the team so compatibility and setup requirements can be checked.',
    category: 'hardware',
  },
  {
    id: 'pricing-info',
    question: 'How much does SmartAcc cost?',
    answer: 'Contact the team for current pricing based on your requirements. Confirm the product inclusions, setup charges, renewals, support arrangements, and any additional costs before purchase.',
    category: 'pricing_support',
  },
  {
    id: 'training-and-support',
    question: 'Is training or support available?',
    answer: 'Ask about the onboarding and support options available for your setup, including channels, timings, and any applicable charges.',
    category: 'pricing_support',
  },
];
