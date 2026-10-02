import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ClipboardCheck, 
  Laptop, 
  FileSpreadsheet, 
  GraduationCap, 
  Printer, 
  Headphones, 
  HelpCircle,
  ArrowRight
} from 'lucide-react';
import { servicesList, questionsToAsk } from '../content/services';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { CtaBanner } from '../components/common/CtaBanner';

export const ServicesPage: React.FC = () => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'ClipboardCheck': return ClipboardCheck;
      case 'Laptop': return Laptop;
      case 'FileSpreadsheet': return FileSpreadsheet;
      case 'GraduationCap': return GraduationCap;
      case 'Printer': return Printer;
      default: return Headphones;
    }
  };

  return (
    <div className="services-page">
      <Breadcrumbs items={[{ label: 'Services' }]} />

      <section className="page-hero">
        <div className="container max-w-3xl text-center">
          <span className="section-eyebrow">Onboarding & Support</span>
          <h1 className="page-h1">Setup and Support for Your SmartAcc Journey</h1>
          <p className="page-intro">
            Choosing software is one part of the process. Discuss the setup, onboarding, and ongoing support options available for your SmartAcc product configuration.
          </p>
          <div className="mt-6 flex justify-center gap-4">
            <Link to="/contact" className="btn-primary">
              <span>Discuss Your Setup Requirements</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section bg-surface">
        <div className="container">
          <div className="section-head text-center max-w-2xl mx-auto">
            <span className="section-eyebrow">Implementation Stages</span>
            <h2 className="section-title">Areas of Setup Assistance</h2>
            <p className="section-subtitle">
              Each service option is reviewed and configured according to your business arrangement and local requirements.
            </p>
          </div>

          <div className="services-grid">
            {servicesList.map((service) => {
              const IconComp = getIcon(service.iconName);
              return (
                <div key={service.id} className="service-card">
                  <div className="service-icon-box">
                    <IconComp size={24} className="text-blue-600" />
                  </div>
                  <h3 className="service-title">{service.title}</h3>
                  <p className="service-summary">{service.summary}</p>

                  <div className="service-discussion-box">
                    <span className="discussion-label">What We Review:</span>
                    <p className="discussion-text">{service.scopeDiscussion}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Questions to Ask */}
      <section className="section bg-slate-subtle">
        <div className="container max-w-4xl">
          <div className="questions-advisory-card">
            <div className="questions-header">
              <HelpCircle size={28} className="text-blue-600" />
              <div>
                <h3 className="questions-h3">Practical Questions to Ask Before Starting</h3>
                <p className="questions-sub">
                  We believe in complete transparency. Here are helpful questions business owners should review when choosing billing software:
                </p>
              </div>
            </div>

            <div className="questions-list">
              {questionsToAsk.map((q, idx) => (
                <div key={idx} className="question-item">
                  <span className="q-number">{idx + 1}</span>
                  <span className="q-text">{q}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CtaBanner 
        title="Ready to talk through your setup?"
        subtitle="Contact the SmartAcc team to discuss your hardware, training needs, and product options."
        demoCtaText="Discuss Your Requirements"
        demoUrl="/contact"
      />
    </div>
  );
};
