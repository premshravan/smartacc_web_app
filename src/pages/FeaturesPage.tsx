import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Receipt, 
  Users, 
  FileSpreadsheet, 
  ScanLine, 
  BarChart3, 
  Package, 
  Calculator, 
  CreditCard,
  CheckCircle2, 
  ArrowRight,
  Printer,
  Sparkles
} from 'lucide-react';
import { featureCandidates } from '../config/features';
import { generalFaqs } from '../content/faqs';
import { FaqAccordion } from '../components/common/FaqAccordion';
import { CtaBanner } from '../components/common/CtaBanner';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { VersionComparisonSection } from '../components/common/VersionComparisonSection';

export const FeaturesPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'billing' | 'inventory_records' | 'visibility_operations'>('all');

  const filteredFeatures = activeCategory === 'all' 
    ? featureCandidates 
    : featureCandidates.filter(f => f.category === activeCategory);

  const featureFaqs = generalFaqs.filter(f => f.category === 'features' || f.category === 'hardware');

  return (
    <div className="features-page">
      <Breadcrumbs items={[{ label: 'Features' }]} />

      {/* Hero Header */}
      <section className="page-hero">
        <div className="container text-center max-w-3xl">
          <span className="section-eyebrow">Product Capabilities</span>
          <h1 className="page-h1">Explore SmartAcc Features</h1>
          <p className="page-intro">
            Understand the billing workflow and review the product capabilities that fit your business. Start with your everyday requirements, then explore the relevant features in a SmartAcc demo.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link to="/request-demo" className="btn-primary">
              <span>See These Features in a Demo</span>
              <ArrowRight size={16} />
            </Link>
            <a href="#compare-versions" className="btn-secondary">
              <span>Compare Software Versions</span>
            </a>
            <Link to="/solutions" className="btn-secondary">
              <span>View Industry Solutions</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Billing Workflow Section */}
      <section className="section bg-surface">
        <div className="container">
          <div className="workflow-explainer-card">
            <div className="workflow-explainer-grid">
              <div>
                <span className="section-eyebrow">The Baseline Approach</span>
                <h2 className="section-title text-slate-900">Start with the way your business bills.</h2>
                <p className="text-slate-600 leading-relaxed mt-3">
                  Your product list, billing process, and day-to-day sales routine help define the setup you need. Use a SmartAcc demo to review your workflow, discuss the information on your bills, and identify the relevant product options.
                </p>

                <div className="workflow-questions-list mt-6">
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-700 mb-3">
                    Key Questions We Review in Your Walkthrough:
                  </h4>
                  <ul className="space-y-2 text-slate-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 size={16} className="text-blue-600 mt-1 shrink-0" />
                      <span><strong>What do you sell?</strong> Packaged items, garments with sizes/colors, loose produce, or electronics with serials?</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 size={16} className="text-blue-600 mt-1 shrink-0" />
                      <span><strong>How do you prepare bills?</strong> Rapid counter barcode scanning, touch-based selection, or bulk order lines?</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 size={16} className="text-blue-600 mt-1 shrink-0" />
                      <span><strong>What customer information do you record?</strong> Simple counter sales, customer names & numbers, or running credit ledgers?</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 size={16} className="text-blue-600 mt-1 shrink-0" />
                      <span><strong>What hardware do you use?</strong> Thermal receipt printers, laser printers, USB barcode scanners, or multiple counter desks?</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="workflow-card-sidebar">
                <div className="workflow-badge-card">
                  <div className="badge-header">
                    <Sparkles size={20} className="text-blue-600" />
                    <span className="badge-title">Transparent Verification</span>
                  </div>
                  <p className="text-xs text-slate-600 mt-2">
                    Features are configured based on verified needs. We demonstrate the practical operations relevant to your store rather than overwhelming you with unused complexity.
                  </p>
                  <div className="badge-meta">
                    <span>Base Location: Thalassery, Kerala</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid with Category Filters */}
      <section className="section bg-slate-subtle">
        <div className="container">
          <div className="section-head text-center max-w-2xl mx-auto">
            <span className="section-eyebrow">Modules</span>
            <h2 className="section-title">Billing & Record-Keeping Capabilities</h2>
            <p className="section-subtitle">
              Prepared marketing feature candidates designed to bring order to everyday store operations.
            </p>

            {/* Filter Tabs */}
            <div className="category-filter-tabs mt-6">
              <button 
                type="button"
                className={`filter-tab ${activeCategory === 'all' ? 'active' : ''}`}
                onClick={() => setActiveCategory('all')}
              >
                All Capabilities
              </button>
              <button 
                type="button"
                className={`filter-tab ${activeCategory === 'billing' ? 'active' : ''}`}
                onClick={() => setActiveCategory('billing')}
              >
                Billing & Counter
              </button>
              <button 
                type="button"
                className={`filter-tab ${activeCategory === 'inventory_records' ? 'active' : ''}`}
                onClick={() => setActiveCategory('inventory_records')}
              >
                Records & Inventory
              </button>
              <button 
                type="button"
                className={`filter-tab ${activeCategory === 'visibility_operations' ? 'active' : ''}`}
                onClick={() => setActiveCategory('visibility_operations')}
              >
                Business Visibility
              </button>
            </div>
          </div>

          <div className="features-showcase-grid">
            {filteredFeatures.map((feat) => {
              const IconComp = 
                feat.icon === 'Receipt' ? Receipt :
                feat.icon === 'Users' ? Users :
                feat.icon === 'FileSpreadsheet' ? FileSpreadsheet :
                feat.icon === 'ScanLine' ? ScanLine :
                feat.icon === 'BarChart3' ? BarChart3 :
                feat.icon === 'Package' ? Package :
                feat.icon === 'Calculator' ? Calculator :
                CreditCard;

              return (
                <div key={feat.id} className="feature-detail-card">
                  <div className="feature-detail-head">
                    <div className="feature-icon-box">
                      <IconComp size={22} className="text-blue-600" />
                    </div>
                    {feat.status === 'confirmed' ? (
                      <span className="status-badge-confirmed">Core Capability</span>
                    ) : (
                      <span className="status-badge-pending">Configuration Available</span>
                    )}
                  </div>

                  <h3 className="feature-detail-title">{feat.name}</h3>
                  <p className="feature-detail-short">{feat.shortDescription}</p>
                  <p className="feature-detail-full">{feat.fullDescription}</p>

                  <div className="feature-detail-foot">
                    <span className="applicable-label">Relevant For:</span>
                    <span className="applicable-tags">
                      {feat.applicableIndustries.map(ind => ind.charAt(0).toUpperCase() + ind.slice(1)).join(' • ')}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Hardware & Peripheral Section */}
      <section className="section bg-surface">
        <div className="container max-w-4xl">
          <div className="hardware-advisory-card">
            <div className="hardware-icon-box">
              <Printer size={32} className="text-blue-600" />
            </div>
            <div className="hardware-content">
              <h3 className="hardware-title">Hardware & Peripheral Compatibility</h3>
              <p className="hardware-desc">
                Have questions about your existing thermal printer, barcode scanner, or cash drawer? Bring your device models to the demo discussion. SmartAcc is built to support standard counter equipment.
              </p>
              <div className="hardware-chips">
                <span className="hw-chip">58mm Thermal Printers</span>
                <span className="hw-chip">80mm (3-inch) Printers</span>
                <span className="hw-chip">USB Barcode Scanners</span>
                <span className="hw-chip">Wireless Handheld Scanners</span>
                <span className="hw-chip">Desktop Laser Printers</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Compare SmartAcc Versions Section */}
      <VersionComparisonSection />

      {/* FAQs */}
      <section className="section bg-slate-subtle">
        <div className="container max-w-4xl">
          <div className="section-head text-center">
            <span className="section-eyebrow">Features FAQ</span>
            <h2 className="section-title">Common Feature Questions</h2>
          </div>
          <FaqAccordion items={featureFaqs} />
        </div>
      </section>

      <CtaBanner 
        title="Ready to see how these features work in real time?"
        subtitle="Request a SmartAcc demo and discuss your specific billing and reporting requirements with the team."
      />
    </div>
  );
};
