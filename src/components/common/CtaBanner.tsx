import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MessageSquare, ShieldCheck } from 'lucide-react';

interface CtaBannerProps {
  title?: string;
  subtitle?: string;
  demoCtaText?: string;
  demoUrl?: string;
}

export const CtaBanner: React.FC<CtaBannerProps> = ({
  title = "Let's find the right billing setup for your business.",
  subtitle = "Tell us what you sell, how you bill, and what you need to manage. Request a SmartAcc demo and discuss the available options with the team.",
  demoCtaText = 'Request a Demo',
  demoUrl = '/request-demo',
}) => {
  return (
    <section className="cta-banner-section">
      <div className="container">
        <div className="cta-banner-card">
          <div className="cta-banner-glow"></div>
          <div className="cta-banner-content">
            <span className="cta-eyebrow">Ready for a Walkthrough?</span>
            <h2 className="cta-title">{title}</h2>
            <p className="cta-subtitle">{subtitle}</p>

            <div className="cta-actions-row">
              <Link to={demoUrl} className="btn-primary btn-lg">
                <span>{demoCtaText}</span>
                <ArrowRight size={18} />
              </Link>
              <Link to="/contact" className="btn-outline-white btn-lg">
                <MessageSquare size={18} />
                <span>Contact SmartAcc</span>
              </Link>
            </div>

            <div className="cta-footer-note">
              <ShieldCheck size={14} className="text-teal-300" />
              <span>Based in Thalassery, Kerala • Focused product demos tailored to your business</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
