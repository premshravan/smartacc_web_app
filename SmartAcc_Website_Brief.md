# SmartAcc — Complete Website Brief for Antigravity

**Project:** SmartAcc marketing website  
**Location:** Thalassery, Kannur district, Kerala, India  
**Prepared for:** Website planning and implementation in Antigravity  
**Date:** 2 October 2026  
**Source:** The supplied `Pasted markdown(3).md` and the user's current instructions  
**Document status:** Final implementation brief; missing business facts remain launch dependencies.

---

## 1. Instructions to the Antigravity Agent

Build a polished, responsive, multipage marketing website for **SmartAcc**, a billing software brand/company located in **Thalassery, Kerala**. Its audience includes retailers, wholesalers, clothing stores, mobile shops, restaurants, and other businesses with billing requirements.

Use this document as the implementation specification. Complete the design, page content, reusable components, responsive behavior, SEO setup, and lead-generation flow. Make reasonable design and engineering decisions without repeatedly asking for routine preferences. Keep unresolved company details in a central configuration file and provide a clear handoff list.

The website should explain what SmartAcc does, help visitors recognize their business type, introduce the relevant product capabilities, and encourage them to request a demo or contact the team.

### Scope boundaries

- Build the public marketing website and its demo enquiry integration.
- The website is not the SmartAcc billing application. Do not build a working POS, accounting engine, customer dashboard, software login, subscription checkout, or admin panel as part of this scope.
- Product interface previews must be clearly identified as illustrative unless actual SmartAcc screenshots are supplied.
- Do not present marketing website UI as proof of functionality in the underlying software.
- Do not create live accounts, publish the website, change DNS, or send marketing communications merely because this brief asks for implementation. Provide a tested preview and deployment instructions.
- Inspect an existing project before changing its framework. Preserve a suitable existing stack. Use the default stack in Section 15 only for a new project.
- Treat approved user-supplied assets and later verified product details as higher priority than the proposed design defaults.

### Quality direction

The result should feel like a dependable business software brand: clean, modern, useful, locally relevant, and easy to understand. Prioritize a strong visual hierarchy, believable product presentation, readable content, and working enquiries over ornamental effects.

---

## 2. Source Review and Final Decisions

The attachment contains both an initial landing page and a later five-page content draft. Combine their useful material, remove duplication, and resolve inconsistencies as follows.

| Source item | Final decision |
|---|---|
| SmartAcc billing software | Main product and public brand. |
| Thalassery in the user's instructions and later contact draft | Use Thalassery, Kannur, Kerala consistently. |
| Kochi address in the earlier landing page | Remove. Do not create a Kochi office. |
| Redmango Technologies as product owner/developer | Relationship needs confirmation. Do not display it as a legal fact by default. |
| Retail, wholesale, supermarkets, manufacturing in the attachment | Retail, wholesale, and supermarkets can appear in the planned audience. Manufacturing is an optional later solution pending confirmation. |
| Dress shops, mobile shops, restaurants in the user's instructions | Include dedicated audience content and solution pages. |
| Medical stores in the attachment | Keep as an optional sector, pending confirmation of suitability and relevant modules. |
| GST billing, inventory, purchase/sales, contacts, barcode, reports | Reference-supplied feature candidates. Prepare their copy, but review actual availability before public release. |
| Cloud-only language versus desktop/offline language | Unresolved. Do not claim a deployment mode until confirmed. |
| Mobile access, synchronization, automatic backup, multi-outlet controls | Conditional claims requiring confirmation. |
| “1000+ businesses,” stars, customer names, statistics | Remove unless supported by approved evidence. |
| Three-month promotional offer | Remove unless the business supplies an active offer and its terms. |
| `+91 98765 43210`, `support@smartacc.in` | Sample details; do not use as real contacts. |
| Guaranteed time savings, instant setup, effortless compliance | Replace with measured language. No unsupported promises. |
| Customer testimonials | Publish only genuine quotes with permission. |

### Confirmed from the current request

1. The public name is **SmartAcc**.
2. The business is located in **Thalassery**.
3. The software is used for billing.
4. The intended audience includes retail, wholesale, dress/clothing shops, mobile shops, restaurants, and other business types.

### How to handle remaining details

Use three content states: `confirmed`, `reference_pending`, and `proposed`. Public production claims must be confirmed. Draft previews can show reference-pending content with an internal review indicator; do not show developer review labels to normal visitors.

Provide prepared copy for the source feature candidates, but keep each candidate independently configurable. If a capability is unavailable, remove its claims from cards, solution pages, FAQs, product previews, metadata, and schema together. Maintain a useful conservative fallback rather than leaving a blank page.

Do not ask for missing details before starting design and implementation. Missing contacts or integrations must be reported in the handoff and must never be substituted with invented values.

---

## 3. Positioning, Audience, and Conversion Goals

### Primary positioning

> SmartAcc is billing software for everyday business operations, based in Thalassery and built to serve the billing needs of different business types.

**Working brand line:** Smart Billing. Smarter Business.

**Supporting description:** Billing software for retailers, wholesalers, clothing stores, mobile shops, restaurants, and more.

When inventory and accounting capabilities are confirmed, expand the positioning to “Billing, inventory, and accounting software.” Until then, do not use “complete ERP,” “all-in-one accounting,” or “full business management platform” as established facts.

### Audience and decisions

| Audience | What visitors need to assess | Website response |
|---|---|---|
| Retail and general stores | Everyday billing, checkout flow, ease of use | Show a simple billing workflow and retail demo CTA. |
| Wholesale and distribution | Bulk transactions, customer dues, price structures | Explain wholesale needs; name modules only when verified. |
| Clothing and textile stores | Size/color variants, exchanges, stock visibility | Show a clothing-specific page and demo checklist. |
| Mobile and electronics shops | Product identification, accessories, warranty records | Explain the workflow; do not imply IMEI or repair modules without confirmation. |
| Restaurants and cafes | Order-to-bill flow, tables, KOT, takeaway | Explain restaurant needs; verify each specialized module. |
| Supermarkets and grocery stores | Checkout volume, barcode use, stock tracking | Show supermarket relevance and verified capabilities. |
| Other businesses | Suitability for their particular operation | Invite them to describe their billing requirements. |

### Primary conversion

**Request a Demo** through a dedicated form with a working delivery destination.

### Secondary conversions

- WhatsApp enquiry, only when the verified number is configured.
- Click-to-call, only when the verified phone is configured.
- General contact enquiry.

### Success measures

Track completed demo requests, successful contact submissions, industry-page enquiries, and contact-link clicks. Establish a baseline after launch; do not invent expected conversion rates or promise sales outcomes.

---

## 4. Sitemap and Navigation

### Required routes

| Route | Purpose | Key conversion |
|---|---|---|
| `/` | Explain SmartAcc and introduce audience fit | Request a Demo |
| `/features` | Explain verified billing/product capabilities | See These Features in a Demo |
| `/solutions` | Help visitors choose their business category | View Business Solution |
| `/solutions/retail-billing-software` | Retail and general stores | Request a Retail Demo |
| `/solutions/wholesale-billing-software` | Wholesale and distribution | Request a Wholesale Demo |
| `/solutions/textile-billing-software` | Clothing, dress, and textile shops | Request a Clothing Store Demo |
| `/solutions/mobile-shop-billing-software` | Mobile and electronics shops | Request a Mobile Shop Demo |
| `/solutions/restaurant-billing-software` | Restaurants and cafes | Request a Restaurant Demo |
| `/solutions/supermarket-billing-software` | Supermarkets and grocery stores | Request a Supermarket Demo |
| `/services` | Implementation and support options, when confirmed | Discuss Your Requirements |
| `/about` | Introduce the brand, location, and purpose | Talk to SmartAcc |
| `/contact` | Verified contact information and general enquiries | Send Enquiry |
| `/request-demo` | Focused lead form | Request My Demo |
| `/privacy-policy` | Explain the website's actual data handling | Contact for privacy queries |

This creates **14 public routes**. Add a useful 404 page. Use an inline success state for forms; a separate thank-you route is optional and must be `noindex` if created.

### Conditional routes

- `/customers`: only after genuine customer logos, quotes, or case studies are approved.
- `/pricing`: only after verified prices, inclusions, billing terms, and exclusions are available.
- `/solutions/pharmacy-billing-software`: only after pharmacy suitability and relevant capabilities are verified.
- `/solutions/manufacturing-billing-software`: only after manufacturing support is verified.
- `/resources` and article routes: later, when useful original content is ready.
- `/terms`: when relevant business terms are supplied and reviewed.

Do not launch empty customer, pricing, or resource pages.

### Header

Desktop: SmartAcc logo/wordmark, Home, Features, Solutions dropdown, Services, About, Contact, and a prominent **Request a Demo** button.

Mobile: logo, accessible menu button, navigable links and solution links, then the primary CTA. Avoid an overcrowded desktop-style menu.

Use a restrained sticky header. Give dropdowns and the mobile menu real keyboard behavior, visible focus, Escape-to-close, and correct expanded state. The active route should be clear without relying only on color.

### Footer

Include a short SmartAcc description, page links, solution links, Thalassery location, verified contact links, privacy link, and social links only when supplied. Use “© [current year] SmartAcc” as the draft footer; replace the copyright owner with the verified entity when known.

---

## 5. Visual Design Specification

### Direction

Use a light, premium business software design with deep navy typography, blue actions, and a restrained teal accent. Combine spacious sections, clear feature cards, and a large product-oriented visual. The design should work equally well for a shop owner on a phone and a manager on a desktop.

Avoid neon gradients, excessive glass effects, spinning 3D objects, decorative charts that imply real results, or large stock photos unrelated to the product.

### Proposed tokens

| Token | Value | Use |
|---|---|---|
| Brand primary | `#1D4ED8` | Buttons and selected states |
| Heading/text | `#0F172A` | Headlines and dark CTA band |
| Supporting text | `#475569` | Paragraphs |
| Accent | `#0F766E` | Small highlights and icons |
| Page background | `#F8FAFC` | Alternating light sections |
| Surface | `#FFFFFF` | Cards and forms |
| Border | `#E2E8F0` | Subtle separators |
| Error text | `#B91C1C` | Validation messages |

Adjust this palette if an official SmartAcc brand guide is supplied. Verify contrast for every actual foreground/background pairing; colors listed here are design starting points.

### Typography and layout

- Use one readable sans-serif family such as Inter, with limited weights and optimized loading.
- Body text: about 16–18px, with comfortable line height.
- Hero title: approximately 44–64px desktop and 34–42px mobile; scale responsively.
- Content width: around 1200px; prose width: approximately 65 characters.
- Desktop section spacing: about 80–96px; mobile: 48–64px.
- Cards: 16–20px radius, subtle border, modest shadow.
- Controls: approximately 44px minimum touch target; clear focus rings.
- Use one consistent icon set; decorative icons should be hidden from assistive technology.

### Responsive behavior

Check at 360, 390, 768, 1024, and 1440px. Use one-column mobile layouts, two-column medium layouts where appropriate, and wider desktop grids. Stack the hero with readable copy before the main visual. Never introduce horizontal scrolling.

### Motion

Use short transitions and restrained entrance effects. Respect `prefers-reduced-motion`. Content must remain visible if JavaScript fails or animation is disabled. Do not auto-advance carousels or use scroll hijacking.

### Brand asset rules

Use SmartAcc's actual logo when supplied. Until then, use a clean typographic **SmartAcc** wordmark. Do not invent a final corporate logo or use Prem Digital Solutions branding on this client's website.

---

## 6. Home Page — Structure and Ready-to-Use Copy

### 6.1 Hero

**Eyebrow:** Billing software for businesses

**H1:** Smart Billing. Smarter Business.

**Description:** From everyday shop sales to business-specific billing needs, SmartAcc helps you take a more organized approach to billing. Explore a solution for retail stores, wholesale businesses, clothing shops, mobile shops, restaurants, and more.

**Primary CTA:** Request a Demo  
**Secondary CTA:** Explore Business Solutions

**Location line:** Based in Thalassery, Kerala.

**Visual:** Actual SmartAcc billing screen if available. Otherwise create a clearly labeled illustrative billing interface with fictional demo items and no real customer information.

Do not add star ratings, customer counts, compliance badges, or a live offer to this hero without supporting information.

### 6.2 Audience strip

**Heading:** One billing conversation. Many business needs.

Show six simple labels/icons: Retail, Wholesale, Clothing, Mobile & Electronics, Restaurants, Supermarkets. Link each to its solution page. “Other businesses” can link to the demo form with `businessType=other`.

### 6.3 Business challenges

**Heading:** Your billing software should fit the way you work.

**Intro:** Every business has its own daily routine. A retail counter, a wholesale order, and a restaurant bill do not follow exactly the same process. Start with your workflow, then explore how SmartAcc fits your requirements.

Three cards:

- **A smoother billing routine:** Find out how SmartAcc can support your everyday sales and billing process.
- **A clearer view of your requirements:** Discuss the information, records, and reports your business needs.
- **A setup suited to your business:** Explore the relevant product options in a demo focused on your business type.

### 6.4 Feature overview

**Heading:** Explore the tools behind your daily billing.

Use up to six approved feature cards from Section 8. Order: Billing, Inventory, Purchases & Sales, Customer & Supplier Records, Barcode Billing, Business Reports. Include Accounting/GST only at the approved level of scope.

If those feature candidates have not been approved, show a useful preview section instead:

**Fallback copy:** Tell us how you bill today and what you would like to improve. A SmartAcc demo is the right place to review your billing workflow and discuss the product capabilities relevant to your business.

**CTA:** Explore Features

### 6.5 Business solutions

**Heading:** Find the right starting point for your business.

Use six cards with the exact introductory copy from Section 9. Each card has a meaningful link label such as “Explore retail billing,” rather than six indistinguishable “Learn more” links.

### 6.6 Product preview

**Heading:** See the billing experience before you decide.

**Copy:** Explore SmartAcc with a walkthrough based on your business requirements. Review the billing flow, ask questions, and discuss the features that matter to your team.

Use verified screenshots or one illustrative billing preview. Add stock/report previews only when those capabilities are approved. Actual videos require a poster image, user-initiated playback, captions or transcript, and accessible controls.

**CTA:** Request a Product Walkthrough

### 6.7 Demo journey

**Heading:** Start with a conversation about your business.

1. **Share your requirements:** Tell us your business type and what you need from your billing software.
2. **Explore SmartAcc:** Review the relevant workflow in a demo and ask practical questions.
3. **Discuss the next steps:** Confirm the suitable product setup, pricing, and available support before proceeding.

Do not promise instant onboarding or a fixed response time.

### 6.8 Why consider SmartAcc?

**Heading:** Practical software. A business-focused conversation.

Three points:

- **Different business types:** Start with a workflow relevant to your store or business.
- **A clear product walkthrough:** Understand the product before choosing your setup.
- **A Thalassery connection:** Contact a software business based in Thalassery, Kerala.

Add verified training, support, or service coverage details later. Do not convert the local base into an unsupported statewide support promise.

### 6.9 Trust section — conditional

Only show real customer logos, approved testimonials, or a genuine case study. If unavailable, omit the section completely. Do not replace it with fabricated brands or generic quotations.

### 6.10 FAQs

Use five or six approved FAQs from Section 12. Keep answers visible in server-rendered content even if presented in an accordion.

### 6.11 Final CTA

**Heading:** Let's find the right billing setup for your business.

**Copy:** Tell us what you sell, how you bill, and what you need to manage. Request a SmartAcc demo and discuss the available options with the team.

**Button:** Request a Demo  
**Secondary link:** Contact SmartAcc

Target roughly 500–800 useful words, including cards and FAQs. Do not force repetition to meet a word count.

---

## 7. Features Page — Layout and Claim Controls

**H1:** Explore SmartAcc Features

**Intro:** Understand the billing workflow and review the product capabilities that fit your business. Start with your everyday requirements, then explore the relevant features in a SmartAcc demo.

### Page structure

1. Short introductory hero and demo CTA.
2. Verified billing workflow explanation.
3. Approved feature cards grouped into billing, records/stock, and business visibility.
4. Screenshot sections for actual approved modules.
5. Hardware/deployment questions, only with verified answers.
6. Relevant FAQs.
7. Final demo CTA.

### Billing workflow copy safe for the baseline page

**Heading:** Start with the way your business bills.

**Copy:** Your product list, billing process, and day-to-day sales routine help define the setup you need. Use a SmartAcc demo to review your workflow, discuss the information on your bills, and identify the relevant product options.

Until advanced features are confirmed, keep the page useful with workflow questions: What do you sell? How do you prepare bills? What customer information do you need? What reporting would help you? What devices do you use?

Do not show grayed-out unavailable features as if they are upcoming. Do not imply an integration by using another platform's logo.

---

## 8. Prepared Feature Copy and Verification Matrix

The following modules come from the attachment or expand the business needs in the current request. They are **prepared marketing candidates**, not independently verified SmartAcc specifications. Enable each only after confirmation.

| Candidate feature | Prepared public copy when confirmed | Confirmation needed |
|---|---|---|
| Billing | Prepare customer bills through a straightforward billing workflow designed for everyday business transactions. | Supported invoice types and actual workflow. |
| GST invoicing | Create invoices with the GST details relevant to your business and review the supported tax reporting options. | Invoice fields, tax calculations, reports, supported product edition. |
| Inventory management | Track product stock and review available quantities as purchases and sales are recorded. | Stock update behavior; low-stock alerts are separate. |
| Purchase and sales records | Keep purchase and sales information organized so you can review business transactions more clearly. | Supported transaction types and purchase workflow. |
| Customer and supplier records | Maintain customer and supplier information with the transaction details supported by your setup. | Contacts, dues, statements, credit tracking. |
| Barcode billing | Use compatible barcode equipment to retrieve products during the billing process. | Supported scanners, barcode formats, configuration. |
| Business reports | Review the available sales, stock, and transaction reports to understand day-to-day activity. | Exact reports, filters, exports; do not add unverified profit reports. |
| Accounting | Keep the supported accounts and ledger information connected to your business transactions. | Ledger, receipts/payments, profit/loss, balance sheet scope. |
| Multiple payment modes | Record supported payment methods as part of your billing workflow. | Cash/card/UPI recording versus actual payment processing. |
| Low-stock alerts | Identify products reaching your configured stock thresholds. | Alert delivery and threshold behavior. |
| Staff permissions | Control access to supported functions through configured user roles. | User limits, permissions, audit records. |
| Multi-outlet management | Review supported branch workflows and reporting from the relevant product setup. | Branches, transfers, consolidated views, connectivity. |
| Cloud or mobile access | Access supported product functions through the devices and deployment options included in your plan. | Cloud/desktop model, device compatibility, mobile app versus browser. |
| Offline operation | Continue the supported billing workflow without an active internet connection. | Offline scope, licensing, synchronization and conflict handling. |
| Backup and recovery | Use the backup and recovery options supported by your deployment. | Automated/manual backup, retention, recovery process, responsibilities. |
| Restaurant modules | Manage supported restaurant billing workflows with the modules included in your setup. | KOT, tables, takeaway/delivery, split billing, printing. |
| Clothing variants | Organize supported clothing variations such as size and color. | Variant inventory, SKU structure, exchanges. |
| Mobile product identifiers | Track supported product identifiers within the relevant billing workflow. | IMEI/serial numbers, warranty details, accessories; repairs are separate. |

### Claims to avoid

- “100% GST compliant,” “government approved,” or “automatically files GST” without precise substantiation.
- E-invoicing/e-way bill integrations merely because GST invoices exist.
- “UPI integrated” when the software only records UPI as a payment mode.
- “Works on every device,” “unlimited users,” or “all printers supported.”
- “Bank-grade security,” “never lose data,” “zero downtime,” or “fully secure.”
- “24/7 support,” “lifetime support,” or fixed service response guarantees without an actual policy.
- “Best billing software in Kerala,” “No. 1,” or guaranteed business growth.

---

## 9. Solutions Hub and Industry Pages

### Solutions hub

**H1:** Billing Software for Your Business Type

**Intro:** Different businesses have different billing routines. Explore the SmartAcc starting point for your business, then request a demo to discuss the product setup and features you need.

Show six industry cards and an “Other business?” CTA. Avoid saying every industry shares identical functionality or that the product supports every possible business process.

### Shared industry-page structure

1. Industry-specific H1 and introduction.
2. Three or four practical business challenges.
3. Approved capabilities relevant to that sector.
4. A short realistic workflow, reviewed against the actual product.
5. Sector-specific screenshot or an explicitly illustrative preview.
6. What to discuss during the demo.
7. Three or four FAQs and links to Features/Services.
8. Demo CTA with the correct business type preselected.

Keep each page substantively different, approximately 350–600 useful words. Use sector-specific examples and questions. Do not make six pages by swapping one industry noun in otherwise identical text.

### 9.1 Retail and general stores

**H1:** Billing Software for Retail Shops

**Card copy:** Explore a billing workflow for your everyday shop sales and customer transactions.

**Intro:** From a neighborhood shop to a busy retail counter, billing is part of every business day. Explore SmartAcc for your retail billing requirements and review a workflow suited to the products you sell.

**Business needs:** Straightforward counter billing, product lookup, customer transactions, and understanding daily sales.

**Candidate modules:** Item search, barcode billing, stock visibility, payment-mode recording, sales reports, returns. Enable only those confirmed.

**Demo discussion:** Current product list, daily transaction volume, bill format, printers/scanners, return process, and reporting needs.

**CTA:** Request a Retail Demo

### 9.2 Wholesale and distribution

**H1:** Billing Software for Wholesale Businesses

**Card copy:** Discuss a setup for bulk billing, repeat business customers, and your wholesale transaction process.

**Intro:** Wholesale billing often involves larger orders, repeat customers, and different transaction arrangements. Review your requirements with SmartAcc and explore the available setup for your wholesale or distribution business.

**Business needs:** Bulk orders, customer-specific arrangements, customer dues, purchase records, dispatch paperwork.

**Candidate modules:** Bulk item entry, price levels, credit tracking, customer ledgers, purchase records, units of measure. Dispatch and distribution logistics are not assumed capabilities.

**Demo discussion:** Units, order sizes, credit terms, customer groups, invoice formats, outstanding balances, and report requirements.

**CTA:** Request a Wholesale Demo

### 9.3 Clothing, dress, and textile shops

**H1:** Billing Software for Clothing and Textile Shops

**Card copy:** Explore billing requirements for dress shops, textile outlets, and clothing stores.

**Intro:** Clothing businesses work with different collections, product categories, and customer preferences. Explore SmartAcc for your clothing store's billing process and discuss the product details and records your team needs.

**Business needs:** Multiple product variations, seasonal collections, item identification, exchanges, and stock questions.

**Candidate modules:** Size/color variants, barcode labels, discounts, exchanges/returns, category reports. Do not claim any of these solely because clothing stores are an intended audience.

**Demo discussion:** Sizes and colors, SKU structure, billing peak periods, exchange policies, labeling, and collection reporting.

**CTA:** Request a Clothing Store Demo

### 9.4 Mobile and electronics shops

**H1:** Billing Software for Mobile and Electronics Shops

**Card copy:** Discuss billing for phones, accessories, and your store's product-record requirements.

**Intro:** Mobile shops often sell phones alongside accessories and other electronics. Explore SmartAcc for your billing requirements and discuss the product information your business needs to record.

**Business needs:** Different product categories, device identification, warranty information, accessories, and customer purchase records.

**Candidate modules:** Serial/IMEI records, warranty details, barcode billing, category stock, customer history. Repair/service-job management is a separate capability requiring confirmation.

**Demo discussion:** Identifier tracking, model/color records, warranty fields, invoice requirements, returns, and accessories.

**CTA:** Request a Mobile Shop Demo

### 9.5 Restaurants and cafes

**H1:** Billing Software for Restaurants and Cafes

**Card copy:** Explore the billing requirements of your dine-in, takeaway, or cafe operation.

**Intro:** A restaurant's billing process depends on how orders move through the business. Discuss your restaurant or cafe workflow with SmartAcc and review the available product options in a focused demo.

**Business needs:** Clear order-to-bill flow, table or takeaway handling, kitchen communication, payment records, and shift reporting.

**Candidate modules:** KOT, tables, order changes, split bills, takeaway, kitchen printers. Online ordering and delivery-platform integrations are not assumed.

**Demo discussion:** Service model, tables, counters, kitchen flow, bill splitting, printers, peak periods, and report requirements.

**CTA:** Request a Restaurant Demo

### 9.6 Supermarkets and grocery stores

**H1:** Billing Software for Supermarkets and Grocery Stores

**Card copy:** Review billing requirements for a broad product range and a busy checkout environment.

**Intro:** Supermarkets and grocery stores handle many products and repeated checkout transactions. Explore SmartAcc for your billing process and discuss the stock and reporting options available for your requirements.

**Business needs:** Product lookup, checkout flow, many SKUs, purchase coordination, and daily sales review.

**Candidate modules:** Barcode billing, stock records, multiple units, offers, purchase records, expiry/batch tracking. Weighing-scale integration is a separate claim.

**Demo discussion:** SKU count, counters, scanning equipment, weighing requirements, stock units, purchase workflow, and reports.

**CTA:** Request a Supermarket Demo

### Other businesses

**Heading:** Don't see your business here?

**Copy:** Tell us what your business does and how you bill today. The SmartAcc team can discuss whether the available product options fit your requirements.

**CTA:** Discuss My Business

---

## 10. Services and About Pages

### 10.1 Services page

**H1:** Setup and Support for Your SmartAcc Journey

**Intro:** Choosing software is one part of the process. Discuss the setup, onboarding, and ongoing support options available for your SmartAcc product configuration.

Keep product features on `/features`. This page is for work provided by the team, with each service confirmed independently.

| Candidate service | Prepared copy | Verify before publishing |
|---|---|---|
| Requirements discussion | Review your business type, billing process, devices, and product requirements before choosing a setup. | Who conducts it and what it includes. |
| Installation/configuration | Get assistance with the installation and configuration included in your selected product arrangement. | Deployment type, remote/on-site scope, charges. |
| Product/customer data import | Discuss supported import formats and the data that can be brought into your setup. | Formats, limits, cleanup, migration fees, validation. |
| Staff training | Learn the supported billing workflow and relevant functions through the training arrangement included in your setup. | Sessions, participants, languages, delivery mode. |
| Hardware guidance | Discuss compatible billing equipment and any setup assistance available. | Printers/scanners, supported devices, procurement responsibilities. |
| Ongoing support | Get help through the verified support channels and service terms applicable to your product. | Hours, channel, coverage, fees, exclusions. |
| Updates/maintenance | Understand how product updates and maintenance are handled under your arrangement. | Included updates, renewals, backup responsibilities. |

**Fallback when services are not confirmed:** Use a concise “Discuss your setup requirements” page covering questions to ask about installation, training, data transfer, hardware, and ongoing support. Do not imply all are included.

**CTA:** Discuss Your Setup Requirements

### 10.2 About page

**H1:** About SmartAcc

**Subheading:** Billing software with a business-focused approach, based in Thalassery.

**Opening copy:** SmartAcc is a billing software brand based in Thalassery, Kerala. It serves the billing requirements of different business types, including retail stores, wholesale businesses, clothing shops, mobile shops, and restaurants.

**Purpose section:** Every business has its own way of working. The SmartAcc website helps business owners explore relevant billing requirements, understand the available product options, and start a conversation about the right setup for their business.

**What visitors can expect:** A clear product introduction, business-specific demo enquiries, and straightforward information about confirmed features and service options.

**Location section:** Based in Thalassery, in Kerala's Kannur district. Add the full address and service coverage only after verification.

**CTA:** Talk to the SmartAcc Team

Do not invent a founder, founding year, team size, company history, desktop-to-cloud evolution, awards, or certifications. If Redmango Technologies is confirmed as the owner, add the verified relationship here and in the footer/schema without turning SmartAcc into a generic unrelated IT agency.

---

## 11. Contact and Demo Forms

### 11.1 Contact page

**H1:** Contact SmartAcc

**Intro:** Have a question about SmartAcc or want to discuss your billing requirements? Send an enquiry and share a little about your business.

Use a two-column layout: contact/location details on one side and an enquiry form on the other. On mobile, prioritize the form and actionable contacts.

Display verified phone, WhatsApp, email, hours, and address when available. Use the confirmed location text **Thalassery, Kannur, Kerala, India** without inventing a street address or postal code.

Embed an office map only after the exact location is confirmed. A city-level map must be labeled as a general location and must not imply a verified office pin. Prefer a simple map link or click-to-load embed.

**Contact form:** Name, Phone, Email (optional), Business Name (optional), Topic, Message, enquiry consent. A demo topic can link to the more focused demo page.

### 11.2 Dedicated demo page

**H1:** Request a SmartAcc Demo

**Intro:** Tell us about your business and the billing workflow you would like to explore. Share your details so the team can follow up about a suitable demo.

**Submit button:** Request My Demo

| Field | Required | Behavior |
|---|---|---|
| Name | Yes | Trimmed, sensible maximum length. |
| Phone | Yes | Accept common Indian formatting and optional country code; normalize server-side. |
| Business Name | Yes | Plain text, capped length. |
| Business Type | Yes | Retail, Wholesale, Clothing/Textile, Mobile/Electronics, Restaurant/Cafe, Supermarket/Grocery, Other. |
| City/Town | No | Do not require a full address. |
| Email | No | Validate only when supplied. |
| Requirements | No | Short textarea; no sensitive information requested. |
| Contact consent | Yes | Unchecked initially; link to Privacy Policy. |

**Consent copy:** I agree to be contacted about my enquiry and understand how my details are handled as described in the Privacy Policy.

Do not bundle marketing subscriptions into this checkbox. Do not ask visitors to upload invoices, passwords, payment information, or customer databases.

### 11.3 Lead delivery

Implement a server-side form endpoint or a verified managed form service. Store provider credentials only in server-side environment variables. Choose one primary destination, such as a confirmed email inbox or CRM/webhook.

Required behavior:

- Client validation improves usability; server validation remains authoritative.
- Validate field types, lengths, phone/email format, and allowed business types.
- Use a honeypot and deployment-compatible rate limiting. An in-memory counter is not reliable protection across serverless instances.
- Escape untrusted values in notification templates and prevent header injection.
- Use origin checks appropriate to the deployment and form implementation.
- Submit through POST. Never put personal details in URL parameters or analytics.
- Preserve user-entered values on recoverable errors.
- Prevent duplicate submissions while pending; use an idempotency key/provider support where appropriate.
- Do not return success merely because validation passed or an animation completed.
- A success state means the configured destination accepted the enquiry or a durable approved queue accepted it.
- Handle missing credentials, provider rejection, rate limits, and network failures honestly.
- When unconfigured, allow local form design/validation preview but do not display “sent.” On production, offer verified contact alternatives or explain that the form is temporarily unavailable.
- Notify only the configured SmartAcc enquiry recipient in normal operation. Do not send an unrequested visitor marketing email.

**Success copy:** Thank you. Your enquiry has been received. The SmartAcc team will follow up using the contact details you provided.

**Failure copy:** We couldn't send your enquiry. Please try again or use one of the contact options shown on this page.

Do not promise a response within an hour/day unless the company confirms that service commitment.

### 11.4 WhatsApp and phone

Construct WhatsApp links from the verified international-format number: `https://wa.me/{digits}`. Encode a short message such as “Hello SmartAcc, I would like a demo for my clothing store.” Do not auto-open WhatsApp or automatically send messages.

Use valid `tel:` links. Hide phone and WhatsApp controls when their numbers are missing. A mobile floating action may appear only if verified and must not obscure content, focus, or form submission controls.

---

## 12. FAQ Copy

These answers avoid resolving product questions the attachment leaves open. Replace them with more specific verified answers when available.

**What is SmartAcc?**  
SmartAcc is billing software for businesses such as retail shops, wholesale outlets, clothing stores, mobile shops, and restaurants.

**Is SmartAcc suitable for my business?**  
Start by choosing your business type and sharing your billing requirements. A demo can help you review the relevant product setup before deciding.

**Where is SmartAcc based?**  
SmartAcc is based in Thalassery, Kerala. Contact the team to discuss the available service arrangements for your location.

**Can I request a demo for a clothing shop, mobile shop, or restaurant?**  
Yes. Select the relevant business type in the demo form and describe the workflow you would like to explore.

**Does SmartAcc include inventory and accounting?**  
Discuss the inventory, records, and accounting functions you need during your demo. Confirm the modules included in the product setup offered to your business.

**Is the software online, offline, or both?**  
The deployment options need to be confirmed for your chosen product setup. Ask the team about connectivity requirements and supported devices before proceeding.

**Can I use my existing printer or barcode scanner?**  
Share the device model with the team so compatibility and setup requirements can be checked.

**How much does SmartAcc cost?**  
Contact the team for current pricing based on your requirements. Confirm the product inclusions, setup charges, renewals, support arrangements, and any additional costs before purchase.

**Is training or support available?**  
Ask about the onboarding and support options available for your setup, including channels, timings, and any applicable charges.

**Is the demo free?**  
The reference draft proposes a free demo. Use “Request a Demo” until the company confirms that there is no demo fee; then the CTA can be updated consistently to “Request a Free Demo.” Do not publish this internal verification note as a customer-facing FAQ answer. Omit this FAQ until confirmed.

---

## 13. SEO and Local Discoverability

### Approach

Provide useful, indexable pages that clearly describe the product, location, audience, and confirmed capabilities. Use readable server-rendered or prerendered content, unique titles, meaningful links, and accurate structured data.

Keyword ideas below are **editorial targets**, not measured keyword research. Do not label them high-volume or low-competition without actual research.

### Suggested titles and targets

| Route | Suggested title | Editorial target |
|---|---|---|
| `/` | SmartAcc — Billing Software in Thalassery, Kerala | Billing software Thalassery |
| `/features` | SmartAcc Features — Billing Software for Businesses | Billing software features |
| `/solutions` | Billing Software for Different Businesses — SmartAcc | Business billing software |
| Retail solution | Retail Billing Software — SmartAcc | Retail billing software Kerala |
| Wholesale solution | Wholesale Billing Software — SmartAcc | Wholesale billing software |
| Textile solution | Clothing & Textile Billing Software — SmartAcc | Textile shop billing software |
| Mobile shop solution | Mobile Shop Billing Software — SmartAcc | Mobile shop billing software |
| Restaurant solution | Restaurant Billing Software — SmartAcc | Restaurant billing software Kerala |
| Supermarket solution | Supermarket Billing Software — SmartAcc | Supermarket billing software |
| `/services` | SmartAcc Setup & Support Options | Billing software setup and support |
| `/about` | About SmartAcc — Thalassery, Kerala | SmartAcc Thalassery |
| `/contact` | Contact SmartAcc — Thalassery, Kerala | SmartAcc contact |
| `/request-demo` | Request a SmartAcc Billing Software Demo | SmartAcc demo |

**Home meta description:** Explore SmartAcc billing software for retail, wholesale, clothing shops, mobile shops, restaurants and more. Based in Thalassery, Kerala. Request a demo.

Write unique descriptions for other pages around their actual content. Do not chase an exact character count at the expense of clarity; check likely truncation.

### Technical requirements

- One clear H1 per page; logical heading hierarchy.
- Final-domain canonical URLs, unique page metadata, Open Graph and social share metadata.
- A real 1200 × 630 social share graphic using approved SmartAcc branding.
- Sitemap containing canonical public pages only; meaningful `lastModified` values based on content changes.
- Robots file pointing to the final sitemap.
- Staging protected from indexing; preferably access-controlled. Remove staging restrictions on approved production launch.
- Consistent hostname, HTTPS, and a consistent trailing-slash policy.
- Descriptive image alt text; empty alt for purely decorative images.
- Breadcrumbs for industry pages and contextual links to Features, Demo, and related solutions.
- Useful 404 behavior; no broken routes or placeholder `#` links.
- No duplicated town pages with the same content. Mention Thalassery and Kerala naturally.

### Structured data

Use factual JSON-LD that matches visible page content:

- `Organization`: appropriate baseline for SmartAcc or its verified owner; use only confirmed name, URL, logo, and contacts.
- `LocalBusiness`: consider when the actual office/business details are confirmed; do not invent street address, opening hours, coordinates, or service area.
- `SoftwareApplication`: describe confirmed application facts if appropriate. Do not manufacture a zero-price offer, operating system, aggregate rating, or review just to satisfy a rich-result requirement.
- `BreadcrumbList`: on applicable interior pages.

Schema validity and Google rich-result eligibility are different checks. If verified data does not satisfy a rich-result type, use accurate markup without promising that search enhancement, or omit the type. Do not promise FAQ rich results for this business website.

### Local business consistency

Once official details are supplied, keep business name, phone, address, map location, and relevant business-profile information consistent. Creating or editing a Google Business Profile is separate from building the website.

---

## 14. Product Visuals and Content Assets

### Asset priority

1. Official SmartAcc logo in SVG or high-resolution PNG.
2. Real screenshots from the current product edition.
3. A short product walkthrough video, if approved.
4. Actual business/team photographs, if available and relevant.
5. Approved customer logos/testimonials, if available.
6. Lightweight neutral illustrations or licensed photographs as supporting assets.

### Screenshot rules

Use realistic product visuals. Remove personal customer data, actual contact numbers, confidential sales records, and credentials from supplied screenshots. Do not alter the screenshot to invent functions or imply a newer UI.

If screenshots are absent, create one clean illustrative billing preview in HTML/CSS/SVG with fictional items, Indian currency formatting, and a visible “Illustrative preview” caption. Example items can be “Demo Item A” and “Demo Item B,” with mathematically consistent totals. Avoid example tax rates or compliance claims.

Keep invented business metrics out of the hero. A sample dashboard must be labeled “Demo data” and show only approved module categories. Do not present stock photography as a SmartAcc customer or office.

Optimize asset dimensions, format, and compression. Give images explicit dimensions to prevent layout shift. Load the likely hero/LCP asset promptly; lazy-load lower-page images. Use a video poster instead of loading the video automatically.

---

## 15. Technical Implementation Specification

### Default for a new project

- Next.js App Router, TypeScript, and a compatible React release.
- Tailwind CSS or a small maintainable token-based CSS system.
- Server-rendered/prerendered marketing content; client components only for interactivity.
- A route handler for enquiries, or a verified external form service when the chosen host does not support server execution.
- Central content/configuration modules instead of scattered hardcoded claims.
- Minimal dependencies; one icon package and optional lightweight animation only where useful.

At implementation time, consult the official documentation, choose mutually compatible stable dependency versions, and commit the lockfile. Do not mix setup instructions from different major versions. Preserve an existing suitable project stack rather than recreating the site unnecessarily.

### Suggested project organization

| Path/module | Responsibility |
|---|---|
| `src/app/layout.tsx` | Shared shell and global metadata defaults |
| `src/app/page.tsx` | Home page |
| `src/app/features/page.tsx` | Features |
| `src/app/solutions/page.tsx` | Industry hub |
| `src/app/solutions/[slug]/page.tsx` | Known industry detail pages; unknown slugs return 404 |
| `src/app/services/page.tsx` | Services/support options |
| `src/app/about/page.tsx` | About |
| `src/app/contact/page.tsx` | Contact |
| `src/app/request-demo/page.tsx` | Demo form |
| `src/app/privacy-policy/page.tsx` | Actual website data practices |
| `src/app/api/enquiries/route.ts` | Validated server-side delivery |
| `src/app/sitemap.ts` and `robots.ts` | Search discovery |
| `src/components/layout/` | Header, navigation, footer |
| `src/components/sections/` | Hero, cards, preview, FAQs, CTA |
| `src/components/forms/` | Shared enquiry fields and status handling |
| `src/content/` | Pages, industry definitions, FAQs |
| `src/config/site.ts` | Brand/location/contact/runtime configuration |
| `src/config/features.ts` | Feature states and approved copy |
| `src/lib/` | Validation, lead delivery, SEO, structured data |
| `public/` | Approved images, icons, fonts where applicable |

This table is guidance, not a demand to create empty files. Adapt to the actual project conventions.

### Configuration contract

Use explicit null values for unknown business facts. Never use sample production values.

```ts
type ClaimStatus = 'confirmed' | 'reference_pending' | 'proposed';

export const siteConfig = {
  brandName: 'SmartAcc',
  location: {
    city: 'Thalassery',
    district: 'Kannur',
    region: 'Kerala',
    country: 'India',
    streetAddress: null,
    postalCode: null,
  },
  legalEntity: null,
  productOwner: null,
  canonicalUrl: null,
  phoneE164: null,
  whatsappE164: null,
  email: null,
  officeHours: null,
  mapsUrl: null,
  socialLinks: [],
  demoIsFree: null,
  productDeployment: 'unconfirmed',
};
```

Keep secrets out of this object. Use a deployment origin for preview links; require a verified production origin for canonical metadata before release.

Feature data should include a stable key, status, approved scope, copy, applicable industries, and asset references. Public rendering must use the same approval selector across all components and metadata. For example, `canPublishFeature(feature)` returns true only when its status is `confirmed`.

Do not put `reference_pending` claims into production by changing a CSS class or hiding a warning label. Provide either confirmed copy or the conservative fallback defined in this brief.

### Enquiry contract

The server accepts a validated payload containing form type, business type, name, phone, optional email, business name where required, optional location/message, consent state, and controlled page/source context. Do not accept arbitrary notification recipients or redirect destinations from the browser.

Suggested responses: success/accepted only on accepted delivery; validation error; rate limit; temporary delivery failure. Show actionable messages without exposing provider details, credentials, or full personal data.

### Deployment choice

A Next.js route handler needs a server-capable deployment. Do not use a static-only export while expecting its POST endpoint to work. If static hosting is selected, configure a real external form destination and adapt the design accordingly.

Document environment variable names in `.env.example` with empty values. Keep secrets and generated hosting output out of Git. Use the deployment method appropriate to the actual project; do not assume a provider or change the user's hosting accounts.

---

## 16. Privacy, Accessibility, Analytics, and Performance

### Privacy content

Draft the policy around the implementation actually delivered: enquiry fields collected, purpose, destination/provider, relevant analytics, access, retention practice, and a verified contact for privacy requests. The business must confirm the retention period and operational practices.

Do not copy another company's policy, invent compliance certifications, or state that data is never shared when an email/form provider receives it. Keep unfinished legal text out of production; report missing operational decisions in the handoff.

### Accessibility

- Semantic landmarks, skip link, correctly associated labels, and helpful error messages.
- Keyboard-accessible navigation, dropdowns, accordions, and controls.
- Visible focus, adequate contrast, and no color-only status communication.
- Manage modal/menu focus and restore focus to its trigger on close.
- Announce form status with an appropriate live region; move focus to an error summary when helpful.
- Support zoom and text resizing without clipped controls.
- Provide captions/transcripts for relevant video content.
- No autoplay sound, essential hover-only content, or animation-dependent reading.

### Analytics

If configured and permitted by the final privacy setup, track:

| Event | Trigger | Allowed useful properties |
|---|---|---|
| `demo_cta_click` | Demo link click | Page, CTA location, industry |
| `demo_form_start` | First meaningful form interaction | Page, form type |
| `demo_request_success` | Delivery accepted | Page, industry |
| `contact_request_success` | General enquiry accepted | Page, form type |
| `whatsapp_click` | Verified WhatsApp link click | Page, CTA location |
| `phone_click` | Verified call link click | Page, CTA location |

Do not include names, emails, phone numbers, messages, or full enquiry URLs in analytics. A form success event is a website enquiry conversion, not evidence that a demo occurred or a sale closed. Prevent duplicate event firing.

No analytics credentials are supplied. Implement an optional adapter, disabled by default, and document configuration.

### Performance targets

Aim for a fast experience on ordinary mobile connections. Treat LCP ≤2.5s, INP ≤200ms, and CLS ≤0.1 as performance targets, not promises. Lab results are useful checks; field performance depends on real users and deployment conditions.

Use optimized images, limited font weights, minimal client JavaScript, reusable components, and no heavy map/chat/video embeds during initial load. Test representative pages and record results rather than guaranteeing a Lighthouse score.

---

## 17. Implementation Phases

### Phase 1 — Foundation

Inspect the project and source assets. Set up routes, content types, design tokens, claim controls, header/footer, and configuration. Record missing business details. Build a useful conservative content baseline.

### Phase 2 — Home and shared components

Create the home page, industry cards, feature blocks, product preview, FAQs, and reusable CTA sections. Check the desktop and mobile design before extending the layout across pages.

### Phase 3 — Interior pages

Build Features, Solutions, all six industry routes, Services, About, Contact, Demo, Privacy, and 404 behavior. Preserve unique industry content and correct demo preselection. Add actual assets as available.

### Phase 4 — Enquiries and SEO

Implement validated lead delivery, optional verified contact links, metadata, canonical behavior, sitemap, robots, appropriate schema, and optional analytics. Keep unconfigured integrations honest.

### Phase 5 — Verification and handoff

Complete the checks in Section 18, capture desktop/mobile previews, document configuration and missing launch details, and provide the production build result. Prepare deployment instructions without assuming permission to publish.

---

## 18. Acceptance Criteria and Test Plan

### Content and brand

- [ ] SmartAcc and Thalassery are used consistently.
- [ ] No Kochi office, fake phone/email, invented customer, sample offer, or unsupported statistic appears.
- [ ] Redmango Technologies appears only if the relationship is verified.
- [ ] All six primary business types have distinct, useful pages.
- [ ] Feature approvals affect public copy, previews, FAQs, metadata, and schema consistently.
- [ ] Cloud/offline, GST, specialized industry modules, support terms, and pricing are not guessed.
- [ ] No Prem Digital Solutions contact details or logo are copied into this client site.
- [ ] Production has no visible TODOs, unresolved bracket placeholders, or developer review messages.

### Functionality

- [ ] Every primary route works; unknown routes and solution slugs return the intended 404.
- [ ] Desktop/mobile navigation and solution links work with mouse, touch, and keyboard.
- [ ] Industry CTAs correctly preselect the business type; invalid query values are ignored safely.
- [ ] Invalid submissions show useful errors; valid submissions reach the configured destination.
- [ ] Delivery failures preserve fields and never show false success.
- [ ] Duplicate clicks, missing configuration, rate limits, and provider failure are covered.
- [ ] Call/WhatsApp links use verified contacts; unconfigured controls are hidden.
- [ ] Consent is not prechecked, and Privacy Policy links work.

### Design and accessibility

- [ ] Check the named viewport widths with no horizontal overflow.
- [ ] Hero, cards, menus, forms, footer, and CTA spacing remain clear on mobile.
- [ ] Keyboard navigation and focus behavior work end to end.
- [ ] Form labels, status announcements, contrast, zoom, and reduced-motion behavior are checked.
- [ ] Illustrative UI is labeled; real screenshots reveal no sensitive information.
- [ ] Content is readable if optional animation or client interactivity does not load.

### SEO and technical quality

- [ ] Unique titles/descriptions, approved canonicals, social metadata, sitemap, and robots are verified.
- [ ] Structured data matches visible facts and is checked with an appropriate validator.
- [ ] No staging-domain canonicals or accidental production `noindex` remain at release.
- [ ] Type checks, linting, and the production build pass.
- [ ] No console errors, broken images, dead links, or committed secrets.
- [ ] Representative performance checks are recorded for Home, an industry page, and Demo.
- [ ] Hosting supports the chosen form delivery architecture.

### Meaningful automated checks

Use a small set of tests for feature-approval rendering, server-side form validation, rate/delivery error handling, correct industry preselection, and primary route smoke checks. Mock external delivery in automated tests; do not send real enquiries as a side effect. Perform one controlled delivery check to an approved destination when configured.

If something cannot be verified because credentials or business facts are missing, report that limitation explicitly rather than marking it passed.

---

## 19. Launch Information Checklist

The implementation can proceed without these details. Production publication requires resolving the applicable items or using the documented conservative fallback.

| Needed information | Current status | Implementation action |
|---|---|---|
| Official SmartAcc logo | Not supplied | Use temporary text wordmark. |
| Legal company/product owner | Redmango mentioned, unconfirmed | Hide ownership claim; confirm before final legal copy. |
| Final domain | Not supplied | Keep configurable; do not invent `smartacc.in` ownership. |
| Actual phone and WhatsApp | Not supplied | Hide links and floating actions. |
| Actual email and form destination | Not supplied | Build flow; keep delivery visibly unavailable until configured. |
| Full address and map pin | Only Thalassery confirmed | Show city-level text; no invented office pin. |
| Working hours/service coverage | Not supplied | Omit claims. |
| Core feature matrix | In reference draft, pending review | Prepare candidates; publish only approved capabilities. |
| Product deployment/device support | Contradictory source | Use neutral copy. |
| Restaurant/clothing/mobile-specific modules | Needs confirmation | Describe business needs; enable actual modules when confirmed. |
| Demo fee and booking process | Free demo proposed in source | Use “Request a Demo”; confirm process and any fee. |
| Pricing/license/renewal terms | Not supplied | “Contact for current pricing”; no invented plan amounts. |
| Support/training/migration terms | Draft descriptions only | Publish approved scope or discussion-based fallback. |
| Product screenshots/video | Not supplied | Use labeled illustrative visual. |
| Customer evidence | Sample names/placeholders only | Omit testimonials and statistics. |
| Data retention/provider/privacy contact | Not supplied | Document actual flow and obtain operational details. |
| Social profiles | Not supplied | Hide icons instead of using placeholder links. |

---

## 20. Antigravity Handoff Deliverables

Provide the following when implementation is complete:

1. The website source, dependency lockfile, and successful production build result.
2. Working local/preview instructions and deployment requirements.
3. Desktop and mobile screenshots of Home, one industry page, and Demo.
4. A concise README covering content locations, route additions, asset replacement, feature approval controls, form configuration, and environment variable names.
5. A check summary with actual results and unresolved dependencies.
6. A short launch checklist containing only business facts, assets, credentials, and decisions still needed.

Do not claim that the product's capabilities, software security, or business support quality have been tested merely because the marketing website passes its checks.

### Final build instruction

> Implement this specification as a cohesive SmartAcc website with clear messaging, six distinct business solution pages, honest product claims, strong mobile usability, and a genuine enquiry flow. Use Thalassery consistently. Prepare the reference feature content for approval, avoid invented contact/customer details, and keep the code easy to maintain. Complete the preview, verification, and handoff; clearly list any dependencies that prevent production launch.

---

## 21. Official Technical References

These references support implementation patterns, not claims about SmartAcc. Check their current guidance against the actual dependency versions during development.

- [Next.js App Router documentation](https://nextjs.org/docs/app)
- [Next.js Route Handlers](https://nextjs.org/docs/app/getting-started/route-handlers)
- [Next.js Metadata and Open Graph images](https://nextjs.org/docs/app/getting-started/metadata-and-og-images)
- [Next.js Sitemap file convention](https://nextjs.org/docs/app/api-reference/file-conventions/metadata/sitemap)
- [Google Organization structured data](https://developers.google.com/search/docs/appearance/structured-data/organization)
- [Google Software Application structured data](https://developers.google.com/search/docs/appearance/structured-data/software-app)
- [Google introduction to structured data](https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data)

**End of brief.**
