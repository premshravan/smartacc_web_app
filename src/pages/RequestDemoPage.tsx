import React from 'react';
import { 
  Laptop, 
  Printer, 
  ScanLine, 
  Headphones, 
  ShieldCheck, 
  Clock
} from 'lucide-react';
import { DemoForm } from '../components/forms/DemoForm';
import { Breadcrumbs } from '../components/common/Breadcrumbs';

export const RequestDemoPage: React.FC = () => {
  return (
    <div className="request-demo-page">
      <Breadcrumbs items={[{ label: 'Request a Demo' }]} />

      <section className="page-hero">
        <div className="container max-w-3xl text-center">
          <span className="section-eyebrow">Personalized Walkthrough</span>
          <h1 className="page-h1">Request a SmartAcc Demo</h1>
          <p className="page-intro">
            Tell us about your business and the billing workflow you would like to explore. Share your details so the team can follow up about a suitable demo.
          </p>
        </div>
      </section>

      <section className="section bg-surface">
        <div className="container">
          <div className="demo-page-grid">
            {/* Form Column */}
            <div className="demo-form-col">
              <div className="form-wrapper-card">
                <div className="form-header-badge-row">
                  <span className="badge-pill-blue">Demo Consultation</span>
                  <span className="text-xs text-slate-500">Based in Thalassery, Kerala</span>
                </div>
                <h2 className="form-card-title mt-2">Enter Your Business Details</h2>
                <p className="form-card-subtitle">
                  We customize the sample items and billing screens in your walkthrough based on your selected business type.
                </p>

                <DemoForm />
              </div>
            </div>

            {/* What to Expect Column */}
            <div className="demo-sidebar-col">
              <div className="demo-expectations-card">
                <div className="expectations-header">
                  <Laptop size={24} className="text-blue-600" />
                  <h3 className="expectations-title">What to Expect During Your Demo</h3>
                </div>

                <div className="expectations-list">
                  <div className="expectation-row">
                    <div className="exp-icon-wrap">
                      <ScanLine size={18} className="text-blue-600" />
                    </div>
                    <div>
                      <h4 className="exp-h4">Workflow Walkthrough</h4>
                      <p className="exp-p">
                        See how everyday counter bills are generated, from barcode scanning to payment tender and thermal receipt printing.
                      </p>
                    </div>
                  </div>

                  <div className="expectation-row">
                    <div className="exp-icon-wrap">
                      <Printer size={18} className="text-teal-600" />
                    </div>
                    <div>
                      <h4 className="exp-h4">Hardware Compatibility</h4>
                      <p className="exp-p">
                        Review compatibility with your current thermal printers (58mm/80mm), USB barcode scanners, and cash drawers.
                      </p>
                    </div>
                  </div>

                  <div className="expectation-row">
                    <div className="exp-icon-wrap">
                      <Headphones size={18} className="text-indigo-600" />
                    </div>
                    <div>
                      <h4 className="exp-h4">Onboarding & Training Review</h4>
                      <p className="exp-p">
                        Discuss staff training in Malayalam and English, catalog import assistance, and day-to-day support channels.
                      </p>
                    </div>
                  </div>

                  <div className="expectation-row">
                    <div className="exp-icon-wrap">
                      <ShieldCheck size={18} className="text-emerald-600" />
                    </div>
                    <div>
                      <h4 className="exp-h4">Clear, Honest Pricing</h4>
                      <p className="exp-p">
                        Get transparent pricing tailored to your counter configuration without unverified fees or hidden conditions.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="demo-sidebar-footer">
                  <div className="footer-notice">
                    <Clock size={16} className="text-slate-400 shrink-0 mt-0.5" />
                    <span>The team will follow up directly on your provided phone number to schedule a convenient time.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
