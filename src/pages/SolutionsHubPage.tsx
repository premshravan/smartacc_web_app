import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ShoppingBag, 
  Truck, 
  Shirt, 
  Smartphone, 
  UtensilsCrossed, 
  Store,
  ArrowRight,
  HelpCircle,
  CheckCircle2
} from 'lucide-react';
import { solutionsData } from '../content/solutions';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { CtaBanner } from '../components/common/CtaBanner';

export const SolutionsHubPage: React.FC = () => {
  const solutions = Object.values(solutionsData);

  const getIcon = (name: string) => {
    switch (name) {
      case 'ShoppingBag': return ShoppingBag;
      case 'Truck': return Truck;
      case 'Shirt': return Shirt;
      case 'Smartphone': return Smartphone;
      case 'UtensilsCrossed': return UtensilsCrossed;
      default: return Store;
    }
  };

  return (
    <div className="solutions-hub-page">
      <Breadcrumbs items={[{ label: 'Solutions' }]} />

      <section className="page-hero">
        <div className="container text-center max-w-3xl">
          <span className="section-eyebrow">Industry Specifics</span>
          <h1 className="page-h1">Billing Software for Your Business Type</h1>
          <p className="page-intro">
            Different businesses have different billing routines. Explore the SmartAcc starting point for your business, then request a demo to discuss the product setup and features you need.
          </p>
        </div>
      </section>

      <section className="section bg-surface">
        <div className="container">
          <div className="solutions-hub-detailed-grid">
            {solutions.map((sol) => {
              const IconComp = getIcon(sol.iconName);
              return (
                <div key={sol.slug} className="solution-hub-card">
                  <div className="hub-card-header">
                    <div className="hub-icon-wrap">
                      <IconComp size={24} className="text-blue-600" />
                    </div>
                    <span className="hub-badge">{sol.shortLabel}</span>
                  </div>

                  <h2 className="hub-card-title">{sol.h1}</h2>
                  <p className="hub-card-tagline">{sol.tagline}</p>
                  <p className="hub-card-intro">{sol.intro}</p>

                  <div className="hub-card-challenges">
                    <span className="hub-challenges-label">Key Workflow Needs:</span>
                    <ul className="hub-challenges-list">
                      {sol.businessChallenges.slice(0, 3).map((ch, idx) => (
                        <li key={idx} className="hub-challenge-item">
                          <CheckCircle2 size={14} className="text-blue-600 shrink-0 mt-0.5" />
                          <span>{ch.title}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="hub-card-foot">
                    <Link to={`/solutions/${sol.slug}`} className="btn-primary w-full text-center">
                      <span>View {sol.shortLabel} Details</span>
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Other Business Card */}
          <div className="other-business-banner mt-12">
            <div className="other-biz-icon">
              <HelpCircle size={28} className="text-blue-600" />
            </div>
            <div className="other-biz-body">
              <h3 className="other-biz-h3">Don't see your business here?</h3>
              <p className="other-biz-text">
                Tell us what your business does and how you bill today. The SmartAcc team can discuss whether the available product options fit your requirements.
              </p>
            </div>
            <Link to="/request-demo?type=other" className="btn-secondary shrink-0">
              Discuss My Business
            </Link>
          </div>
        </div>
      </section>

      <CtaBanner 
        title="Ready to discuss your store's setup?"
        subtitle="Book a walkthrough tailored specifically to your checkout environment, whether retail, wholesale, food, or electronics."
      />
    </div>
  );
};
