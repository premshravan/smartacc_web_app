import { MapPin, ShieldCheck, HeartHandshake, Eye } from 'lucide-react';
import { formatLocation } from '../config/site';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { CtaBanner } from '../components/common/CtaBanner';

export const AboutPage: React.FC = () => {
  return (
    <div className="about-page">
      <Breadcrumbs items={[{ label: 'About' }]} />

      <section className="page-hero">
        <div className="container max-w-3xl text-center">
          <span className="section-eyebrow">Our Story & Approach</span>
          <h1 className="page-h1">About SmartAcc</h1>
          <p className="page-tagline text-xl font-medium text-blue-700 mt-2">
            Billing software with a business-focused approach, based in Thalassery.
          </p>
          <p className="page-intro mt-4">
            SmartAcc is a billing software brand based in Thalassery, Kerala. It serves the billing requirements of diverse business types, including retail stores, wholesale businesses, supermarkets, clothing shops, hardware stores, automobile & spare parts, crushers, jewellery, lodges, institutions, and service sectors.
          </p>
        </div>
      </section>

      {/* Purpose & Principles */}
      <section className="section bg-surface">
        <div className="container max-w-4xl">
          <div className="about-purpose-card">
            <h2 className="section-title text-center mb-6">Our Purpose</h2>
            <p className="about-prose">
              Every business has its own way of working. A high-footfall textile shop managing size variations, a wholesale distributor logging customer credit ledgers, and a busy restaurant kitchen printing food tickets each require a checkout workflow that respects their operational reality.
            </p>
            <p className="about-prose mt-4">
              The SmartAcc website helps business owners explore relevant billing requirements, understand available product options, and start a conversation about the right setup for their business—before making any commitment.
            </p>
          </div>

          <div className="about-expectations-grid mt-12">
            <div className="expectation-card">
              <div className="expectation-icon-box">
                <Eye size={24} className="text-blue-600" />
              </div>
              <h3 className="expectation-title">Clear Product Introduction</h3>
              <p className="expectation-desc">
                We believe in showing the billing workflow honestly. Product walkthroughs focus on how cashiers and shop owners interact with the system every day.
              </p>
            </div>

            <div className="expectation-card">
              <div className="expectation-icon-box">
                <HeartHandshake size={24} className="text-teal-600" />
              </div>
              <h3 className="expectation-title">Business-Specific Demos</h3>
              <p className="expectation-desc">
                Instead of a one-size-fits-all sales pitch, your demo is aligned with your store type, product catalog complexity, and counter hardware.
              </p>
            </div>

            <div className="expectation-card">
              <div className="expectation-icon-box">
                <ShieldCheck size={24} className="text-indigo-600" />
              </div>
              <h3 className="expectation-title">Transparent Information</h3>
              <p className="expectation-desc">
                We provide straightforward details on confirmed features, setup assistance, and available support arrangements without speculative marketing promises.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="section bg-slate-subtle">
        <div className="container max-w-4xl">
          <div className="about-location-card">
            <div className="location-icon-circle">
              <span className="location-radar-pulse" aria-hidden="true" />
              <MapPin size={32} className="text-blue-600 relative z-10" />
            </div>
            <div className="location-details">
              <span className="section-eyebrow">Local Roots</span>
              <h3 className="location-h3">Based in Thalassery, Kerala</h3>
              <p className="location-p">
                SmartAcc is rooted in Thalassery, in Kerala's historic Kannur district. Being locally positioned means an understanding of regional business patterns, local trading practices, and the everyday counter needs of Kerala merchants.
              </p>
              <div className="location-pill-badge mt-4">
                <span>{formatLocation()}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaBanner 
        title="Talk to the SmartAcc Team"
        subtitle="Discuss your store's billing workflow with an accessible software team based in Thalassery, Kerala."
        demoCtaText="Request a Demo Walkthrough"
      />
    </div>
  );
};
