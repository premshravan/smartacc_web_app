// Content for all 6 industry solutions according to Section 9 of the SmartAcc Website Brief

export interface SolutionData {
  slug: string;
  typeKey: string;
  metaTitle: string;
  metaDescription: string;
  shortLabel: string;
  h1: string;
  tagline: string;
  cardCopy: string;
  intro: string;
  iconName: string;
  businessChallenges: {
    title: string;
    description: string;
  }[];
  candidateModules: {
    title: string;
    description: string;
    verifiedNote?: string;
  }[];
  workflowSteps: {
    step: number;
    title: string;
    detail: string;
  }[];
  demoDiscussionPoints: string[];
  faqs: {
    question: string;
    answer: string;
  }[];
  demoCtaText: string;
}

export const solutionsData: Record<string, SolutionData> = {
  'retail-billing-software': {
    slug: 'retail-billing-software',
    typeKey: 'retail',
    metaTitle: 'Retail Billing Software — SmartAcc',
    metaDescription: 'Billing software for retail and general stores in Kerala. Fast counter checkout, barcode lookup, and sales reports. Based in Thalassery.',
    shortLabel: 'Retail & General Stores',
    h1: 'Billing Software for Retail Shops',
    tagline: 'Simple, rapid counter billing for everyday retail stores.',
    cardCopy: 'Explore a billing workflow for your everyday shop sales and customer transactions.',
    intro: 'From a neighborhood shop to a busy retail counter, billing is part of every business day. Explore SmartAcc for your retail billing requirements and review a workflow suited to the products you sell.',
    iconName: 'ShoppingBag',
    businessChallenges: [
      {
        title: 'Counter Checkout Speed',
        description: 'During peak shopping hours, lines must move quickly with minimum keystrokes and fast item searches.',
      },
      {
        title: 'Accurate Product Lookup',
        description: 'Quickly find items by barcode, item name, or short code without slowing down customer interactions.',
      },
      {
        title: 'Customer Transaction Records',
        description: 'Maintain clean transaction logs for regular customers, receipts, and returns.',
      },
      {
        title: 'End-of-Day Sales Clarity',
        description: 'Review cash drawer totals, digital payment splits, and top-moving products at the close of every shift.',
      },
    ],
    candidateModules: [
      {
        title: 'Counter Item Search & Entry',
        description: 'Instant search across product descriptions, codes, and stock entries at the cash desk.',
      },
      {
        title: 'Barcode Scanning Support',
        description: 'Compatible with standard USB and wireless barcode scanners for zero-typing checkout.',
      },
      {
        title: 'Payment Mode Tracking',
        description: 'Record cash, UPI, card, and split payments accurately for balanced register reconciliation.',
      },
      {
        title: 'Daily Sales & Shift Summaries',
        description: 'Generate end-of-day register tallies and cashier reports with one click.',
      },
    ],
    workflowSteps: [
      { step: 1, title: 'Item Entry', detail: 'Scan barcode or type initials to populate item, price, and applicable taxes on the bill.' },
      { step: 2, title: 'Bill Calculation', detail: 'Line totals calculate automatically with options for discounts or customer detail assignment.' },
      { step: 3, title: 'Payment Tender', detail: 'Record payment mode (Cash, UPI, Card) and print receipt to thermal or standard paper.' },
    ],
    demoDiscussionPoints: [
      'Current product catalog size and barcode usage',
      'Daily transaction volume during peak business hours',
      'Preferred receipt/invoice format (thermal 3-inch or standard A4/A5)',
      'Compatible printer and scanner hardware in your store',
      'Customer credit or dues tracking requirements',
    ],
    faqs: [
      {
        question: 'Can I use my existing thermal receipt printer?',
        answer: 'Yes. SmartAcc works with standard thermal receipt printers (e.g. 58mm, 80mm/3-inch) as well as regular desktop laser or inkjet printers. Share your printer model during the demo so compatibility can be confirmed.',
      },
      {
        question: 'Does it support barcode scanning?',
        answer: 'Yes. You can use standard plug-and-play USB, Bluetooth, or wireless barcode scanners to retrieve products immediately on the billing counter.',
      },
      {
        question: 'How are daily sales tracked at closing?',
        answer: 'The system logs each counter bill with payment breakdowns (cash, UPI, card), giving you a clear daily closing summary to match your physical cash drawer.',
      },
    ],
    demoCtaText: 'Request a Retail Demo',
  },

  'wholesale-billing-software': {
    slug: 'wholesale-billing-software',
    typeKey: 'wholesale',
    metaTitle: 'Wholesale Billing Software — SmartAcc',
    metaDescription: 'Billing software for wholesale and distribution businesses. Manage bulk billing, customer credit dues, and supplier ledgers. Thalassery, Kerala.',
    shortLabel: 'Wholesale & Distribution',
    h1: 'Billing Software for Wholesale Businesses',
    tagline: 'Structured bulk billing, customer ledgers, and credit tracking.',
    cardCopy: 'Discuss a setup for bulk billing, repeat business customers, and your wholesale transaction process.',
    intro: 'Wholesale billing often involves larger orders, repeat customers, and different transaction arrangements. Review your requirements with SmartAcc and explore the available setup for your wholesale or distribution business.',
    iconName: 'Truck',
    businessChallenges: [
      {
        title: 'Handling Bulk Orders & Packaging Units',
        description: 'Managing cartons, boxes, dozens, and loose piece units across wholesale transaction invoices.',
      },
      {
        title: 'Customer Credit & Outstanding Dues',
        description: 'Tracking customer balances, previous dues on printed bills, and payment receipts over time.',
      },
      {
        title: 'Tiered or Customer-Specific Pricing',
        description: 'Accounting for varying price levels for dealers, sub-distributors, and bulk purchasers.',
      },
      {
        title: 'Purchase Bill Logging & Supplier Statements',
        description: 'Keeping vendor invoices organized to verify payments and inward shipments accurately.',
      },
    ],
    candidateModules: [
      {
        title: 'Bulk Line Item Invoicing',
        description: 'Enter quantities by carton/piece units with quick rate calculations suited to wholesale trade.',
      },
      {
        title: 'Customer Ledger & Credit History',
        description: 'Record credit transactions, view running balances, and print outstanding dues on invoices.',
      },
      {
        title: 'Purchase Bill & Vendor Recording',
        description: 'Log inward stock purchases, vendor bills, and supplier payments for clear accounting.',
      },
      {
        title: 'Outstanding Dues Reports',
        description: 'Generate aging lists and customer balance sheets to follow up receivables systematically.',
      },
    ],
    workflowSteps: [
      { step: 1, title: 'Select Buyer', detail: 'Choose customer account to view running balance, credit limits, and contact details.' },
      { step: 2, title: 'Bulk Item Entry', detail: 'Add wholesale items with applicable units (boxes/pieces) and negotiated rates.' },
      { step: 3, title: 'Payment & Statement', detail: 'Tender partial payment or record as credit balance with updated ledger printout.' },
    ],
    demoDiscussionPoints: [
      'Packaging units (pieces, boxes, cartons, bags, kilograms)',
      'Customer credit terms, payment receipts, and statement printouts',
      'Invoice layouts showing previous balance and current total',
      'Supplier purchase recording and payment schedules',
      'Wholesale tax calculation and HSN invoice formatting',
    ],
    faqs: [
      {
        question: 'Can the invoice display previous customer dues?',
        answer: 'Yes. Wholesale setups can be configured to display previous outstanding balance, current bill amount, and net payable balance on the printed invoice.',
      },
      {
        question: 'Can we manage multiple units like boxes and individual pieces?',
        answer: 'Yes, multi-unit requirements can be reviewed and configured during your walkthrough based on how your wholesale catalog is packed and priced.',
      },
      {
        question: 'Can we record partial payments against wholesale bills?',
        answer: 'Yes. You can record advance payments, partial counter receipts, and bank transfers, with balances credited to the customer ledger.',
      },
    ],
    demoCtaText: 'Request a Wholesale Demo',
  },

  'textile-billing-software': {
    slug: 'textile-billing-software',
    typeKey: 'textile',
    metaTitle: 'Clothing & Textile Billing Software — SmartAcc',
    metaDescription: 'Billing software for dress shops, textile outlets, and clothing stores. Variant tracking, barcode labels, and exchange handling. Thalassery, Kerala.',
    shortLabel: 'Clothing & Textile Stores',
    h1: 'Billing Software for Clothing and Textile Shops',
    tagline: 'Tailored billing for dress shops, fabric stores, and garment outlets.',
    cardCopy: 'Explore billing requirements for dress shops, textile outlets, and clothing stores.',
    intro: 'Clothing businesses work with different collections, product categories, and customer preferences. Explore SmartAcc for your clothing store\'s billing process and discuss the product details and records your team needs.',
    iconName: 'Shirt',
    businessChallenges: [
      {
        title: 'Sizes, Colors & Fabric Variations',
        description: 'Managing single garment designs that span multiple sizes (S, M, L, XL, XXL) and distinct color ways.',
      },
      {
        title: 'Festival & Seasonal Footfall Spikes',
        description: 'Fast, reliable counter billing that keeps queues moving smoothly during festival and wedding shopping seasons.',
      },
      {
        title: 'Customer Exchanges & Alterations',
        description: 'Handling product size exchanges, credit notes, and bill adjustments without complicating daily sales figures.',
      },
      {
        title: 'Category & Collection Insights',
        description: 'Understanding which garment styles, materials, or brands generate the highest velocity.',
      },
    ],
    candidateModules: [
      {
        title: 'Garment Variant Organization',
        description: 'Structure items with size, color, design code, and brand attributes for structured tracking.',
      },
      {
        title: 'Garment Barcode Label Support',
        description: 'Scan pre-printed price tags or custom barcode tags attached to clothing items.',
      },
      {
        title: 'Customer Returns & Exchanges',
        description: 'Process size exchanges or issue store credits cleanly at the billing counter.',
      },
      {
        title: 'Discount & Promotional Billing',
        description: 'Apply percentage or flat promotional discounts during festive sales seamlessly.',
      },
    ],
    workflowSteps: [
      { step: 1, title: 'Scan Tag', detail: 'Scan garment barcode tag or search by style code/size to load price and details.' },
      { step: 2, title: 'Adjust Promotions', detail: 'Apply festival discounts, combo adjustments, or process an exchange item.' },
      { step: 3, title: 'Instant Bill', detail: 'Print clear receipt with exchange policies, terms, and payment method details.' },
    ],
    demoDiscussionPoints: [
      'Garment categorization (menswear, womenswear, kids, textiles, readymades)',
      'Barcode labeling methods on clothing tags',
      'Festival sale peak traffic management at billing desks',
      'Return and exchange policy workflow at the register',
      'Report requirements by brand, category, or style',
    ],
    faqs: [
      {
        question: 'Does the billing screen support garment size and color details?',
        answer: 'Yes. Garment listings can be configured with size, color, brand, and style codes so cashiers can identify items accurately at checkout.',
      },
      {
        question: 'How do you handle customer dress exchanges?',
        answer: 'SmartAcc allows the cashier to enter return items on the same or a replacement bill, offsetting the value against the new garment automatically.',
      },
      {
        question: 'Can we print custom exchange conditions on the receipt?',
        answer: 'Yes. Custom terms such as "Exchanges accepted within 7 days with original tag" can be included in the receipt footer.',
      },
    ],
    demoCtaText: 'Request a Clothing Store Demo',
  },

  'mobile-shop-billing-software': {
    slug: 'mobile-shop-billing-software',
    typeKey: 'mobile',
    metaTitle: 'Mobile Shop Billing Software — SmartAcc',
    metaDescription: 'Billing software for mobile phone shops and electronics stores. Track IMEI/serial numbers, warranties, and accessory billing. Thalassery, Kerala.',
    shortLabel: 'Mobile & Electronics Shops',
    h1: 'Billing Software for Mobile and Electronics Shops',
    tagline: 'Track device identifiers, warranties, and fast accessory sales.',
    cardCopy: 'Discuss billing for phones, accessories, and your store\'s product-record requirements.',
    intro: 'Mobile shops often sell phones alongside accessories and other electronics. Explore SmartAcc for your billing requirements and discuss the product information your business needs to record.',
    iconName: 'Smartphone',
    businessChallenges: [
      {
        title: 'Recording IMEI & Device Serial Numbers',
        description: 'Every phone, tablet, and high-value gadget requires unique identifier recording on customer invoices for legal and warranty purposes.',
      },
      {
        title: 'High-Volume Accessory Checkout',
        description: 'Charging cables, screen protectors, phone covers, and chargers require quick scanning with high daily turnover.',
      },
      {
        title: 'Warranty & Purchase History Verification',
        description: 'Retrieving original purchase records quickly when customers return for service or claim manufacturer warranty.',
      },
      {
        title: 'Supplier Serial Matching',
        description: 'Linking device purchase entries with customer sales invoices to trace handsets back to distributor sources.',
      },
    ],
    candidateModules: [
      {
        title: 'IMEI / Serial Number Billing Fields',
        description: 'Capture unique device serial numbers or IMEI tags directly during the checkout flow.',
      },
      {
        title: 'Warranty Details on Invoice',
        description: 'Print warranty terms, duration, and serial verification details clearly on customer bills.',
      },
      {
        title: 'Accessory Barcode Lookup',
        description: 'Fast barcode scanning for tempered glass, cases, earphones, and charging accessories.',
      },
      {
        title: 'Customer Purchase History Search',
        description: 'Look up past phone sales by customer mobile number, bill number, or IMEI code.',
      },
    ],
    workflowSteps: [
      { step: 1, title: 'Product Selection', detail: 'Choose phone model and scan or enter the handset\'s IMEI / serial number.' },
      { step: 2, title: 'Add Accessories', detail: 'Scan barcodes for covers, screen guards, or chargers with instant line totaling.' },
      { step: 3, title: 'Warranty Invoice', detail: 'Print invoice showing full phone specs, IMEI, warranty period, and buyer details.' },
    ],
    demoDiscussionPoints: [
      'Handset IMEI / serial tracking workflow and verification',
      'Warranty terms and customer phone number lookup',
      'Accessory inventory and barcode scanning at the counter',
      'Distributor purchase entry with device identifier logging',
      'Receipt printing format (standard bill with serial breakdown)',
    ],
    faqs: [
      {
        question: 'Can the invoice include IMEI or serial numbers for phones?',
        answer: 'Yes. Dedicated serial and IMEI fields can be printed right under each handset line item on customer invoices for warranty and service purposes.',
      },
      {
        question: 'Can we search previous bills using a customer’s phone number or IMEI?',
        answer: 'Yes. You can retrieve past sales transactions using the customer\'s contact number, bill number, or recorded device identifier.',
      },
      {
        question: 'Can we sell general accessories without typing serial numbers?',
        answer: 'Absolutely. General accessories like tempered glass and cables can be billed with regular barcode scanning or quick name lookup without serial prompts.',
      },
    ],
    demoCtaText: 'Request a Mobile Shop Demo',
  },

  'restaurant-billing-software': {
    slug: 'restaurant-billing-software',
    typeKey: 'restaurant',
    metaTitle: 'Restaurant Billing Software — SmartAcc',
    metaDescription: 'Billing software for restaurants, cafes, and bakeries in Kerala. Table management, takeaway orders, KOT flow, and shift reports. Thalassery.',
    shortLabel: 'Restaurants & Cafes',
    h1: 'Billing Software for Restaurants and Cafes',
    tagline: 'Order-to-bill workflow for dine-in, takeaway, and quick service.',
    cardCopy: 'Explore the billing requirements of your dine-in, takeaway, or cafe operation.',
    intro: 'A restaurant\'s billing process depends on how orders move through the business. Discuss your restaurant or cafe workflow with SmartAcc and review the available product options in a focused demo.',
    iconName: 'UtensilsCrossed',
    businessChallenges: [
      {
        title: 'Dine-In, Takeaway & Counter Splits',
        description: 'Managing varied order types simultaneously: seated table guests, counter parcels, and cafe beverage orders.',
      },
      {
        title: 'Kitchen Order Coordination',
        description: 'Ensuring kitchen staff receive ordered food items clearly with preparation notes without dining room chaos.',
      },
      {
        title: 'Running Table Tabs & Order Additions',
        description: 'Adding starters, main courses, and desserts over time to an open table before generating the final check.',
      },
      {
        title: 'Fast Bill Settlement at Counter',
        description: 'Quick payment splitting, discounts, cash/UPI settlement, and instantaneous receipt generation.',
      },
    ],
    candidateModules: [
      {
        title: 'Table & Order Flow Management',
        description: 'Track open table orders, running tabs, and takeaway queues visually on the cash desk.',
      },
      {
        title: 'Kitchen Order Ticket (KOT) Preparation',
        description: 'Print food preparation tickets to kitchen printers or counter stations for orderly cooking.',
      },
      {
        title: 'Takeaway & Parcel Billing',
        description: 'Fast single-screen order entry and bill printing for quick takeaway customer queues.',
      },
      {
        title: 'Shift & Cashier Reconciliation',
        description: 'Detailed food sales summaries, cashier reconciliation, and category totals at the end of each meal shift.',
      },
    ],
    workflowSteps: [
      { step: 1, title: 'Take Order', detail: 'Select table number or parcel order and tap ordered food items and specials.' },
      { step: 2, title: 'Send to Kitchen', detail: 'Generate Kitchen Order Ticket (KOT) with dish notes and table allocation.' },
      { step: 3, title: 'Bill Settlement', detail: 'Print guest check, record payment mode (UPI, card, cash), and close the table.' },
    ],
    demoDiscussionPoints: [
      'Service format (table service restaurant, quick service counter, cafe, or bakery)',
      'Kitchen printer connectivity and ticket formatting',
      'Table layout and running order amendment process',
      'Parcel/takeaway charges and packaging workflow',
      'Meal shift closing reports (lunch/dinner breakdowns)',
    ],
    faqs: [
      {
        question: 'Does it support both table dining and parcel takeaway orders?',
        answer: 'Yes. You can manage dine-in table checks alongside rapid takeaway parcel billing with independent order queues.',
      },
      {
        question: 'Can KOTs be printed to a kitchen printer?',
        answer: 'Yes. Supported setups allow kitchen order tickets to be sent to designated kitchen or counter thermal printers.',
      },
      {
        question: 'Can items be added to an existing table before final checkout?',
        answer: 'Yes. Running tables can accept additional items as guests order more dishes throughout their meal.',
      },
    ],
    demoCtaText: 'Request a Restaurant Demo',
  },

  'supermarket-billing-software': {
    slug: 'supermarket-billing-software',
    typeKey: 'supermarket',
    metaTitle: 'Supermarket Billing Software — SmartAcc',
    metaDescription: 'Billing software for supermarkets and grocery stores. High-speed barcode scanning, vast SKU catalogs, and multi-counter checkout. Thalassery, Kerala.',
    shortLabel: 'Supermarkets & Grocery Stores',
    h1: 'Billing Software for Supermarkets and Grocery Stores',
    tagline: 'High-speed barcode checkout built for thousands of grocery items.',
    cardCopy: 'Review billing requirements for a broad product range and a busy checkout environment.',
    intro: 'Supermarkets and grocery stores handle many products and repeated checkout transactions. Explore SmartAcc for your billing process and discuss the stock and reporting options available for your requirements.',
    iconName: 'Store',
    businessChallenges: [
      {
        title: 'Massive Catalog of SKUs',
        description: 'Maintaining thousands of grocery items, provisions, packaged foods, and household products accurately.',
      },
      {
        title: 'High-Speed Checkout Queue Management',
        description: 'Minimizing checkout lag so evening and weekend grocery shoppers face minimal wait times at the counter.',
      },
      {
        title: 'Sold by Weight & Loose Provisions',
        description: 'Handling items sold by kilogram, gram, or pre-packed quantity alongside standard packaged goods.',
      },
      {
        title: 'Frequent Inward Purchase Processing',
        description: 'Managing supplier bills, distributor deliveries, and price updates across multiple fast-moving items.',
      },
    ],
    candidateModules: [
      {
        title: 'Rapid Continuous Barcode Checkout',
        description: 'Optimized counter screen engineered for non-stop scanning without cursor repositioning.',
      },
      {
        title: 'Extensive Product Catalog Indexing',
        description: 'Search items instantly by barcode, brand, Malayalam/English name, or category.',
      },
      {
        title: 'Unit Measurement Support',
        description: 'Record loose items by weight (kg, g) and packaged goods by piece or packet cleanly.',
      },
      {
        title: 'Inward Purchase & Price Logging',
        description: 'Log vendor invoices and maintain purchase history to monitor wholesale cost movements.',
      },
    ],
    workflowSteps: [
      { step: 1, title: 'Continuous Scan', detail: 'Rapidly scan barcodes as items glide across the grocery counter.' },
      { step: 2, title: 'Weight / Loose Entry', detail: 'Key in weighed produce or choose quick-pick buttons for staples like rice or pulses.' },
      { step: 3, title: 'Speedy Tender', detail: 'Settle via cash with change calculator or instant UPI QR code printout on bill.' },
    ],
    demoDiscussionPoints: [
      'Total product SKU count and barcode coverage on stock',
      'Number of billing counters and checkout lane speeds',
      'Barcode scanner models (handheld vs omnidirectional counter scanners)',
      'Weighing scale procedures and loose grocery billing practices',
      'Distributor purchase entry and stock record requirements',
    ],
    faqs: [
      {
        question: 'Can the checkout counter handle continuous rapid barcode scanning?',
        answer: 'Yes. The billing counter interface is designed for continuous barcode input without requiring the cashier to touch the mouse between items.',
      },
      {
        question: 'How are loose items like grains, vegetables, or spices handled?',
        answer: 'Loose items can be configured with weight units (kg, grams) and selected through quick item lookup codes or descriptive search.',
      },
      {
        question: 'Can multiple billing counters operate in the same supermarket?',
        answer: 'Multi-counter workflows can be discussed and demonstrated based on your store layout and counter count during your demo walkthrough.',
      },
    ],
    demoCtaText: 'Request a Supermarket Demo',
  },
};

export const allSolutionsList = Object.values(solutionsData);
