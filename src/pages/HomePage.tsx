import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  MapPin, 
  CheckCircle2, 
  Sparkles, 
  Laptop, 
  FileText, 
  Workflow, 
  Users, 
  ScanLine, 
  BarChart3, 
  Receipt,
  CreditCard,
  Building2,
  Store,
  Cloud
} from 'lucide-react';
import { solutionsData } from '../content/solutions';
import { generalFaqs } from '../content/faqs';
import { IllustrativeBillingPreview } from '../components/common/IllustrativeBillingPreview';
import { AudienceStrip } from '../components/common/AudienceStrip';
import { FaqAccordion } from '../components/common/FaqAccordion';
import { CtaBanner } from '../components/common/CtaBanner';
import { TrustedClientsSection } from '../components/common/TrustedClientsSection';
import { ClientLogoMarquee } from '../components/common/ClientLogoMarquee';

export const HomePage: React.FC = () => {
  const homeFaqs = generalFaqs.slice(0, 6);
  const homeSolutions = Object.values(solutionsData);

  return (
    <div className="home-page">
      {/* 6.1 HERO SECTION */}
      <section className="hero-section">
        {/* Ambient floating motion graphic glow orbs */}
        <div className="hero-ambient-glow glow-orb-1" aria-hidden="true" />
        <div className="hero-ambient-glow glow-orb-2" aria-hidden="true" />
        <div className="hero-ambient-glow glow-orb-3" aria-hidden="true" />

        {/* Decorative Flowing Wave & Ribbon Layers matching reference image */}
        <div className="hero-wave-canvas" aria-hidden="true">
          <svg
            className="hero-waves-svg"
            viewBox="0 0 1600 800"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            <defs>
              {/* Cyan to royal blue wave gradient */}
              <linearGradient id="waveCyanBlue" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#12C2CF" stopOpacity="0.35" />
                <stop offset="45%" stopColor="#287DDE" stopOpacity="0.25" />
                <stop offset="100%" stopColor="#4E8BF7" stopOpacity="0.12" />
              </linearGradient>

              {/* Deep blue wave gradient for under-shadow */}
              <linearGradient id="waveDeepBlue" x1="0%" y1="0%" x2="100%" y2="80%">
                <stop offset="0%" stopColor="#084285" stopOpacity="0.45" />
                <stop offset="50%" stopColor="#0E58AB" stopOpacity="0.35" />
                <stop offset="100%" stopColor="#1E40AF" stopOpacity="0.2" />
              </linearGradient>

              {/* Translucent white/cyan ribbon gradient */}
              <linearGradient id="ribbonGlow" x1="0%" y1="20%" x2="100%" y2="80%">
                <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.22" />
                <stop offset="35%" stopColor="#70DEFF" stopOpacity="0.32" />
                <stop offset="70%" stopColor="#287DDE" stopOpacity="0.22" />
                <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.08" />
              </linearGradient>

              {/* Top crest highlight stroke */}
              <linearGradient id="crestStroke" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.15" />
                <stop offset="30%" stopColor="#FFFFFF" stopOpacity="0.85" />
                <stop offset="70%" stopColor="#BAE6FD" stopOpacity="0.75" />
                <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.2" />
              </linearGradient>

              {/* Secondary delicate crest stroke */}
              <linearGradient id="crestStroke2" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.5" />
                <stop offset="50%" stopColor="#FFFFFF" stopOpacity="0.75" />
                <stop offset="100%" stopColor="#60A5FA" stopOpacity="0.3" />
              </linearGradient>
            </defs>

            {/* Layer 5: Deep background curved volume wave */}
            <path
              d="M-50,220 C280,360 620,580 1080,460 C1360,390 1520,240 1650,160 L1650,850 L-50,850 Z"
              fill="url(#waveDeepBlue)"
            />

            {/* Layer 1: Smooth cyan/blue translucent wave entering from the left */}
            <path
              className="wave-layer wave-slow-1"
              d="M-80,80 C180,240 520,520 920,470 C1240,430 1480,260 1680,200 L1680,850 L-80,850 Z"
              fill="url(#waveCyanBlue)"
            />

            {/* Layer 3: Deeper blue translucent wave underneath the main ribbon */}
            <path
              className="wave-layer wave-slow-2"
              d="M-40,360 C260,240 680,560 1080,510 C1340,470 1520,320 1650,250 C1540,440 1320,640 980,620 C580,600 240,510 -40,560 Z"
              fill="url(#waveDeepBlue)"
              opacity="0.7"
            />

            {/* Layer 2: Main elegant sweeping ribbon passing through the middle/lower portion */}
            <path
              className="wave-layer wave-slow-1"
              d="M-50,340 C280,210 690,520 1090,470 C1350,430 1520,280 1650,220 C1540,390 1340,580 1010,570 C640,560 270,470 -50,510 Z"
              fill="url(#ribbonGlow)"
            />

            {/* Layer 2a: Brighter thin curved crest highlight along the ribbon */}
            <path
              className="wave-layer wave-slow-1"
              d="M-50,340 C280,210 690,520 1090,470 C1350,430 1520,280 1650,220"
              stroke="url(#crestStroke)"
              strokeWidth="2.5"
              fill="none"
              strokeLinecap="round"
            />

            {/* Layer 4: Soft bright-blue wave extending toward the right side */}
            <path
              d="M400,650 C760,540 1140,590 1420,440 C1540,380 1620,300 1680,240 L1680,850 L400,850 Z"
              fill="rgba(78, 139, 247, 0.16)"
            />

            {/* Layer 6: Subtle secondary sweeping ribbon trail */}
            <path
              className="wave-layer wave-slow-2"
              d="M-60,160 C320,180 720,420 1180,340 C1400,300 1540,190 1640,120"
              stroke="url(#crestStroke2)"
              strokeWidth="1.75"
              fill="none"
              opacity="0.5"
            />

            {/* Layer 7: Gentle bottom ambient wave */}
            <path
              d="M0,580 C360,640 760,520 1180,620 C1420,680 1560,640 1650,590 L1650,850 L0,850 Z"
              fill="rgba(255, 255, 255, 0.05)"
            />
          </svg>
        </div>

        <div className="container hero-container">
          <div className="hero-grid">
            {/* Left Content Column */}
            <div className="hero-content">
              <div className="hero-eyebrow-pill">
                <Sparkles size={14} className="text-blue-600" />
                <span>Billing software for businesses</span>
              </div>

              <h1 className="hero-h1">
                Smart Billing. <br />
                <span className="text-gradient">Smarter Business.</span>
              </h1>

              <p className="hero-description">
                From everyday shop sales to business-specific billing needs, SmartAcc helps you take a more organized approach to billing. Explore a solution for retail stores, wholesale businesses, clothing shops, mobile shops, restaurants, and more.
              </p>

              {/* CTAs */}
              <div className="hero-cta-group">
                <Link to="/request-demo" className="btn-primary btn-lg">
                  <span>Request a Demo</span>
                  <ArrowRight size={18} className="shrink-0" />
                </Link>
                <Link to="/solutions" className="btn-secondary btn-lg">
                  <span>Explore Business Solutions</span>
                </Link>
              </div>

              {/* Location Line */}
              <div className="hero-location-line">
                <MapPin size={16} className="text-blue-600 shrink-0" />
                <span>Based in Thalassery, Kerala.</span>
              </div>
            </div>

            {/* Right Visual Column — Illustrative POS Terminal with Floating Motion Badges */}
            <div className="hero-visual-col">
              {/* Floating interactive motion graphic badges */}
              <div className="hero-floating-badges-wrap">
                <div className="hero-floating-badge badge-float-3" title="Hybrid Cloud Architecture">
                  <Cloud size={15} className="text-cyan-300 shrink-0" />
                  <span className="badge-text">Offline + Cloud Sync</span>
                </div>
                <div className="hero-floating-badge badge-float-1" title="High-Speed Counter Billing">
                  <span className="badge-pulse-dot" />
                  <span className="badge-text">⚡ Fast 1-Click Billing</span>
                </div>
                <div className="hero-floating-badge badge-float-2" title="GST Invoicing Ready">
                  <CheckCircle2 size={15} className="text-teal-300 shrink-0" />
                  <span className="badge-text">✓ 100% GST & Kerala Ready</span>
                </div>
              </div>

              <IllustrativeBillingPreview />
            </div>
          </div>
        </div>
      </section>

      {/* 6.2 AUDIENCE STRIP */}
      <AudienceStrip />

      {/* CLIENT LOGO SCROLL MARQUEE - Businesses that trust SmartAcc */}
      <ClientLogoMarquee />

      {/* 6.3 BUSINESS CHALLENGES */}
      <section className="section bg-surface">
        <div className="container">
          <div className="section-head text-center max-w-3xl mx-auto">
            <span className="section-eyebrow">Tailored Fit</span>
            <h2 className="section-title">Your billing software should fit the way you work.</h2>
            <p className="section-subtitle">
              Every business has its own daily routine. A retail counter, a wholesale order, and a restaurant bill do not follow exactly the same process. Start with your workflow, then explore how SmartAcc fits your requirements.
            </p>
          </div>

          <div className="challenges-grid">
            <div className="challenge-card">
              <div className="challenge-icon-box">
                <Workflow size={24} className="text-blue-600" />
              </div>
              <h3 className="challenge-card-title">A smoother billing routine</h3>
              <p className="challenge-card-desc">
                Find out how SmartAcc can support your everyday sales and billing process with rapid item search, barcode scanning, and clean receipt formatting.
              </p>
            </div>

            <div className="challenge-card">
              <div className="challenge-icon-box">
                <FileText size={24} className="text-teal-600" />
              </div>
              <h3 className="challenge-card-title">A clearer view of your requirements</h3>
              <p className="challenge-card-desc">
                Discuss the information, customer records, and reports your business needs so your billing register remains clear and actionable.
              </p>
            </div>

            <div className="challenge-card">
              <div className="challenge-icon-box">
                <Building2 size={24} className="text-indigo-600" />
              </div>
              <h3 className="challenge-card-title">A setup suited to your business</h3>
              <p className="challenge-card-desc">
                Explore the relevant product options in a demo focused on your specific business type, whether a boutique, supermarket, or cafe.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6.4 FEATURE OVERVIEW */}
      <section className="section bg-slate-subtle">
        <div className="container">
          <div className="section-header-flex">
            <div>
              <span className="section-eyebrow">Core Capabilities</span>
              <h2 className="section-title">Explore the tools behind your daily billing.</h2>
              <p className="section-subtitle max-w-2xl">
                A dependable set of core billing and recording tools to help your store run orderly checkout operations.
              </p>
            </div>
            <Link to="/features" className="btn-secondary hidden md:inline-flex">
              <span>View All Features</span>
              <ArrowRight size={14} />
            </Link>
          </div>

          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon-box">
                <Receipt size={22} className="text-blue-600" />
              </div>
              <h3 className="feature-card-title">Counter Billing</h3>
              <p className="feature-card-desc">
                Prepare customer bills through a straightforward billing workflow designed for everyday business transactions.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon-box">
                <Users size={22} className="text-blue-600" />
              </div>
              <h3 className="feature-card-title">Customer & Supplier Records</h3>
              <p className="feature-card-desc">
                Maintain customer and supplier information with the transaction details and balances supported by your setup.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon-box">
                <ScanLine size={22} className="text-blue-600" />
              </div>
              <h3 className="feature-card-title">Barcode Scanning</h3>
              <p className="feature-card-desc">
                Use compatible barcode equipment to retrieve products quickly during counter sales.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon-box">
                <CreditCard size={22} className="text-blue-600" />
              </div>
              <h3 className="feature-card-title">Payment Mode Recording</h3>
              <p className="feature-card-desc">
                Record supported payment methods like cash, UPI, or card to keep your register reconciliation accurate.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon-box">
                <BarChart3 size={22} className="text-blue-600" />
              </div>
              <h3 className="feature-card-title">Business Reports</h3>
              <p className="feature-card-desc">
                Review available sales, item summaries, and transaction reports to understand day-to-day trading.
              </p>
            </div>

            <div className="feature-card feature-card-cta">
              <div className="feature-cta-inner">
                <h3 className="feature-card-title text-blue-900">Have specific requirements?</h3>
                <p className="feature-card-desc text-slate-700">
                  Tell us how you bill today. A demo is the right place to review your workflow and discuss available options.
                </p>
                <Link to="/features" className="btn-primary btn-sm mt-3">
                  <span>Explore Features</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6.5 BUSINESS SOLUTIONS GRID */}
      <section className="section bg-surface">
        <div className="container">
          <div className="section-head text-center max-w-3xl mx-auto">
            <span className="section-eyebrow">Solutions by Sector</span>
            <h2 className="section-title">Find the right starting point for your business.</h2>
            <p className="section-subtitle">
              Select your business category to explore the specialized checkout requirements, candidate modules, and demo points relevant to you.
            </p>
          </div>

          <div className="solutions-hub-grid">
            {homeSolutions.map((sol) => (
              <div key={sol.slug} className="solution-card">
                <div className="solution-card-body">
                  <div className="solution-card-badge">{sol.shortLabel}</div>
                  <h3 className="solution-card-title">{sol.h1}</h3>
                  <p className="solution-card-copy">{sol.cardCopy}</p>
                </div>
                <div className="solution-card-foot">
                  <Link to={`/solutions/${sol.slug}`} className="solution-card-link">
                    <span>Explore {sol.shortLabel}</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6.6 PRODUCT PREVIEW EXPLANATION */}
      <section className="section bg-slate-subtle">
        <div className="container">
          <div className="preview-callout-card">
            <div className="preview-callout-grid">
              <div>
                <span className="section-eyebrow">Walkthrough</span>
                <h2 className="section-title text-slate-900">See the billing experience before you decide.</h2>
                <p className="preview-callout-copy">
                  Explore SmartAcc with a walkthrough based on your business requirements. Review the billing flow, ask questions, and discuss the features that matter to your team.
                </p>
                <div className="preview-checklist">
                  <div className="checklist-item">
                    <CheckCircle2 size={18} className="text-blue-600 shrink-0" />
                    <span>Live walkthrough with sample items matching your shop type</span>
                  </div>
                  <div className="checklist-item">
                    <CheckCircle2 size={18} className="text-blue-600 shrink-0" />
                    <span>Check compatibility with your receipt printers & scanners</span>
                  </div>
                  <div className="checklist-item">
                    <CheckCircle2 size={18} className="text-blue-600 shrink-0" />
                    <span>Ask practical questions about staff training and onboarding</span>
                  </div>
                </div>
                <div className="mt-6">
                  <Link to="/request-demo" className="btn-primary btn-lg">
                    <span>Request a Product Walkthrough</span>
                    <ArrowRight size={18} />
                  </Link>
                </div>
              </div>

              <div className="preview-callout-badge-box">
                <div className="callout-glass-card">
                  <div className="callout-glass-header">
                    <Laptop size={28} className="text-blue-600" />
                    <div className="callout-glass-title">Demonstration Highlights</div>
                  </div>
                  <p className="callout-glass-text">
                    Every walkthrough is customized to your store layout—whether counter-based, table-based, or wholesale distribution.
                  </p>
                  <div className="callout-glass-stat">
                    <span className="stat-label">Location:</span>
                    <span className="stat-val">Thalassery, Kerala</span>
                  </div>
                  <div className="callout-glass-stat">
                    <span className="stat-label">Format:</span>
                    <span className="stat-val">Personalized consultation</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6.7 DEMO JOURNEY */}
      <section className="section bg-surface">
        <div className="container">
          <div className="section-head text-center max-w-2xl mx-auto">
            <span className="section-eyebrow">Process</span>
            <h2 className="section-title">Start with a conversation about your business.</h2>
            <p className="section-subtitle">
              A straightforward three-step journey to evaluate SmartAcc for your store.
            </p>
          </div>

          <div className="journey-steps-grid">
            <div className="journey-step-card">
              <div className="step-number-badge">1</div>
              <h3 className="step-title">Share your requirements</h3>
              <p className="step-desc">
                Tell us your business type and what you need from your billing software, such as item lookup, customer records, or barcode scanning.
              </p>
            </div>

            <div className="journey-step-card">
              <div className="step-number-badge">2</div>
              <h3 className="step-title">Explore SmartAcc</h3>
              <p className="step-desc">
                Review the relevant workflow in a live demo and ask practical questions about everyday operations and hardware setups.
              </p>
            </div>

            <div className="journey-step-card">
              <div className="step-number-badge">3</div>
              <h3 className="step-title">Discuss the next steps</h3>
              <p className="step-desc">
                Confirm the suitable product setup, pricing, and available support arrangements before proceeding with your store.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6.8 WHY CONSIDER SMARTACC? */}
      <section className="section bg-slate-subtle">
        <div className="container">
          <div className="section-head text-center max-w-3xl mx-auto">
            <span className="section-eyebrow">Why SmartAcc</span>
            <h2 className="section-title">Practical software. A business-focused conversation.</h2>
            <p className="section-subtitle">
              We focus on dependable counter billing, clear product communication, and an approachable team.
            </p>
          </div>

          <div className="why-grid">
            <div className="why-card">
              <div className="why-icon-wrap">
                <Store size={26} className="text-blue-600" />
              </div>
              <h3 className="why-title">Different business types</h3>
              <p className="why-desc">
                Start with a workflow relevant to your store or business, from clothing variant tags to wholesale customer ledgers.
              </p>
            </div>

            <div className="why-card">
              <div className="why-icon-wrap">
                <Laptop size={26} className="text-teal-600" />
              </div>
              <h3 className="why-title">A clear product walkthrough</h3>
              <p className="why-desc">
                Understand the software before choosing your setup. No speculative promises or confusing package tiers.
              </p>
            </div>

            <div className="why-card">
              <div className="why-icon-wrap">
                <MapPin size={26} className="text-indigo-600" />
              </div>
              <h3 className="why-title">A Thalassery connection</h3>
              <p className="why-desc">
                Contact a software business based in Thalassery, Kerala, accessible for discussions on local billing needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6.10 FAQS */}
      <section className="section bg-surface">
        <div className="container max-w-4xl">
          <div className="section-head text-center">
            <span className="section-eyebrow">Got Questions?</span>
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="section-subtitle">
              Clear, straightforward answers regarding SmartAcc billing software and walkthroughs.
            </p>
          </div>

          <FaqAccordion items={homeFaqs} />

          <div className="text-center mt-8">
            <p className="text-muted text-sm">
              Have questions about your specific counter setup?{' '}
              <Link to="/contact" className="font-semibold text-blue-600 hover:underline">
                Contact the SmartAcc team
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* 6.10 TRUSTED BY BUSINESSES / OUR VALUED CLIENTS */}
      <TrustedClientsSection />

      {/* 6.11 FINAL CTA */}
      <CtaBanner />
    </div>
  );
};
