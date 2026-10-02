# SmartAcc — Modern Marketing Website

> **Smart Billing. Smarter Business.**  
> Billing software brand based in **Thalassery, Kannur district, Kerala, India**.

This project is a responsive marketing website built with **React**, **TypeScript**, **Vite**, and **React Router**, adhering strictly to the specifications in `SmartAcc_Website_Brief.md`.

---

## 🌟 Architecture & Key Features

- **14 Public Routes + 404 Handlers**:
  1. `/` — Home (Hero, interactive POS billing simulator, audience strip, business challenges, feature cards, walkthrough callout, 3-step journey, why consider SmartAcc, FAQs, CTA).
  2. `/features` — Core billing capabilities, record keeping, barcode scanning, and hardware advisory.
  3. `/solutions` — Solutions hub for all business categories.
  4. `/solutions/retail-billing-software` — Retail & general stores.
  5. `/solutions/wholesale-billing-software` — Wholesale & distribution.
  6. `/solutions/textile-billing-software` — Clothing, dress & textile shops.
  7. `/solutions/mobile-shop-billing-software` — Mobile phone & electronics shops.
  8. `/solutions/restaurant-billing-software` — Restaurants, cafes & food counters.
  9. `/solutions/supermarket-billing-software` — Supermarkets & grocery stores.
  10. `/services` — Setup assistance, catalog import, staff training, and support review.
  11. `/about` — Brand story, business-focused philosophy, and Thalassery connection.
  12. `/contact` — Direct contact info, Thalassery map badge, and general enquiry form.
  13. `/request-demo` — Dedicated demo booking with query parameter pre-selection (`?type=textile`, etc.).
  14. `/privacy-policy` — Honest website data handling practices.
  15. `*` — Custom 404 error page with quick navigation back.

- **Interactive Illustrative Billing Simulator**:
  - Live POS counter interface (`POS Billing Counter 01 • Thalassery`).
  - Add/remove items, adjust quantities, calculate taxes, switch payment modes (UPI / Cash / Card).
  - Simulated thermal receipt modal with authentic print preview and clear "Illustrative preview — Demo data only" labeling.

- **Centralized Configuration & Feature Controls**:
  - `src/config/site.ts`: Unverified facts (phone, WhatsApp, email, legal entity) are preserved as explicit `null` values to maintain complete honesty.
  - `src/config/features.ts`: Feature status matrix (`confirmed` vs `reference_pending`).
  - `src/content/solutions.ts`: Modular content and checklists for all 6 industry sectors.
  - `src/content/faqs.ts`: Approved, factual FAQ items.

- **Enquiry Forms & Anti-Spam**:
  - Client-side validation for Indian mobile numbers (`10 digits`, optional `+91`).
  - Honeypot bot trap field to discard automated bot submissions.
  - Simulated local storage logging (`smartacc_demo_enquiries` and `smartacc_contact_enquiries`) with instant feedback and celebratory confetti.

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18+)
- npm or pnpm

### Running Locally
```bash
# 1. Install dependencies
npm install

# 2. Start Vite development server
npm run dev
```
The site runs at `http://localhost:5173/`.

### Building for Production
```bash
npm run build
```
Production assets are generated in the `dist/` directory.

### Previewing the Production Build
```bash
npm run preview
```

---

## 📁 Project Structure

```
SmartAcc/
├── index.html                   # HTML template with SEO tags & Inter font
├── public/
│   └── favicon.svg              # Brand SVG favicon
├── src/
│   ├── config/
│   │   ├── site.ts              # Brand, location & verified contact config
│   │   └── features.ts          # Feature matrix & verification statuses
│   ├── content/
│   │   ├── solutions.ts         # In-depth content for all 6 industry pages
│   │   ├── services.ts          # Onboarding, setup & hardware questions
│   │   └── faqs.ts              # Strict factual FAQ copy
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx       # Sticky navbar with solutions dropdown & mobile drawer
│   │   │   └── Footer.tsx       # Footer with Thalassery details & route links
│   │   ├── common/
│   │   │   ├── IllustrativeBillingPreview.tsx # POS terminal & thermal receipt preview
│   │   │   ├── AudienceStrip.tsx# 6-sector quick selector
│   │   │   ├── FaqAccordion.tsx # Accessible FAQ accordion
│   │   │   ├── CtaBanner.tsx    # Reusable conversion banner
│   │   │   ├── Breadcrumbs.tsx  # Accessible breadcrumb trail
│   │   │   └── ScrollToTop.tsx  # Scroll position reset on navigation
│   │   └── forms/
│   │       ├── DemoForm.tsx     # Validated demo booking form
│   │       └── ContactForm.tsx  # General contact form
│   ├── pages/
│   │   ├── HomePage.tsx
│   │   ├── FeaturesPage.tsx
│   │   ├── SolutionsHubPage.tsx
│   │   ├── SolutionDetailPage.tsx # Handles all 6 industry routes
│   │   ├── ServicesPage.tsx
│   │   ├── AboutPage.tsx
│   │   ├── ContactPage.tsx
│   │   ├── RequestDemoPage.tsx
│   │   ├── PrivacyPolicyPage.tsx
│   │   └── NotFoundPage.tsx
│   ├── App.tsx                  # Main router config
│   ├── index.css                # Global design system & theme tokens
│   └── main.tsx                 # App mount
├── .env.example                 # Environment variables template
├── package.json
└── tsconfig.json
```

---

## 📋 Launch Verification Checklist

Before publishing to live production domain:
- [ ] Confirm official phone and WhatsApp number in `src/config/site.ts`.
- [ ] Confirm official enquiry recipient email in `src/config/site.ts`.
- [ ] Confirm street address in Thalassery if office visits are offered.
- [ ] Connect `VITE_LEAD_WEBHOOK_URL` in `.env` to your CRM or backend email handler.
- [ ] Verify legal entity name if displaying ownership notices.
