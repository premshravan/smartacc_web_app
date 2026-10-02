import React from 'react';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { formatLocation } from '../config/site';
import { ShieldCheck, MapPin } from 'lucide-react';

export const PrivacyPolicyPage: React.FC = () => {
  return (
    <div className="privacy-page">
      <Breadcrumbs items={[{ label: 'Privacy Policy' }]} />

      <section className="page-hero">
        <div className="container max-w-3xl text-center">
          <span className="section-eyebrow">Data Transparency</span>
          <h1 className="page-h1">Privacy Policy</h1>
          <p className="page-intro">
            This policy outlines how SmartAcc handles personal and business details submitted through our marketing website.
          </p>
        </div>
      </section>

      <section className="section bg-surface">
        <div className="container max-w-3xl">
          <div className="privacy-content-card">
            <div className="privacy-intro-box">
              <ShieldCheck size={28} className="text-blue-600" />
              <div>
                <h3 className="text-base font-semibold text-slate-900">Our Privacy Commitment</h3>
                <p className="text-sm text-slate-600">
                  SmartAcc respects your privacy. We collect only the information necessary to understand your billing requirements and respond to your demo or contact requests.
                </p>
              </div>
            </div>

            <div className="privacy-section">
              <h2 className="privacy-h2">1. Information We Collect</h2>
              <p className="privacy-p">
                When you submit a demo enquiry or send a message through our website, we may collect the following details:
              </p>
              <ul className="privacy-list">
                <li><strong>Contact details:</strong> Your full name, mobile telephone number, and optional email address.</li>
                <li><strong>Business details:</strong> Your shop or business name, business category (e.g. retail, wholesale, restaurant), and city or town.</li>
                <li><strong>Specific requirements:</strong> Any optional notes you provide describing your billing workflow, product types, or hardware.</li>
              </ul>
            </div>

            <div className="privacy-section">
              <h2 className="privacy-h2">2. How We Use Your Details</h2>
              <p className="privacy-p">
                The information you provide is used strictly for the following purposes:
              </p>
              <ul className="privacy-list">
                <li>To follow up on your request to schedule a personalized SmartAcc demo walkthrough.</li>
                <li>To prepare illustrative sample items and screens that align with your specified business category.</li>
                <li>To answer specific questions regarding printer compatibility, installation, or onboarding options.</li>
              </ul>
              <p className="privacy-p mt-2">
                We do not sell, rent, or lease your contact information to third-party advertisers or telemarketing companies. We do not automatically subscribe you to marketing newsletters without explicit permission.
              </p>
            </div>

            <div className="privacy-section">
              <h2 className="privacy-h2">3. Data Retention & Security</h2>
              <p className="privacy-p">
                Enquiry details are retained only for as long as necessary to conduct your requested demonstration, answer ongoing business queries, or maintain regular customer service communication. We employ reasonable administrative and technical safeguards to protect submitted information from unauthorized access.
              </p>
            </div>

            <div className="privacy-section">
              <h2 className="privacy-h2">4. Your Rights & Privacy Requests</h2>
              <p className="privacy-p">
                You have the right to request access to the information you have submitted, update your details, or request that your contact information be removed from our records.
              </p>
              <p className="privacy-p mt-2">
                To submit any privacy query, please reach out to our team at our base in Thalassery:
              </p>
              <div className="privacy-contact-badge mt-4">
                <MapPin size={16} className="text-blue-600" />
                <span>SmartAcc • {formatLocation()}</span>
              </div>
            </div>

            <div className="privacy-section border-t pt-6 mt-8">
              <p className="text-xs text-slate-500">
                Last reviewed: October 2026. This policy applies strictly to the marketing website at this domain and does not alter any terms in separate software license agreements.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
