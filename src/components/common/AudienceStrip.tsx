import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ShoppingBag, 
  Truck, 
  Shirt, 
  Smartphone, 
  UtensilsCrossed, 
  Store,
  HelpCircle,
  ArrowRight
} from 'lucide-react';

interface AudienceItem {
  name: string;
  sub: string;
  path: string;
  icon: React.ElementType;
}

const audienceList: AudienceItem[] = [
  { name: 'Retail Shops', sub: 'Everyday counter sales', path: '/solutions/retail-billing-software', icon: ShoppingBag },
  { name: 'Wholesale', sub: 'Bulk orders & ledgers', path: '/solutions/wholesale-billing-software', icon: Truck },
  { name: 'Clothing Stores', sub: 'Variants & tags', path: '/solutions/textile-billing-software', icon: Shirt },
  { name: 'Mobile Shops', sub: 'IMEI & accessories', path: '/solutions/mobile-shop-billing-software', icon: Smartphone },
  { name: 'Restaurants & Cafes', sub: 'Dine-in, takeaway, KOT', path: '/solutions/restaurant-billing-software', icon: UtensilsCrossed },
  { name: 'Supermarkets', sub: 'Rapid barcode checkout', path: '/solutions/supermarket-billing-software', icon: Store },
];

export const AudienceStrip: React.FC = () => {
  return (
    <section className="audience-strip-section">
      <div className="container">
        <div className="section-head text-center">
          <span className="section-eyebrow">Audience Fit</span>
          <h2 className="section-title">One billing conversation. Many business needs.</h2>
          <p className="section-subtitle">
            Explore a workflow tailored to the way your store prepares bills, records stock, and serves customers.
          </p>
        </div>

        <div className="audience-grid">
          {audienceList.map((item) => {
            const Icon = item.icon;
            return (
              <Link key={item.path} to={item.path} className="audience-card">
                <div className="audience-icon-wrap">
                  <Icon size={24} />
                </div>
                <div className="audience-info">
                  <h3 className="audience-name">{item.name}</h3>
                  <p className="audience-sub">{item.sub}</p>
                </div>
                <div className="audience-arrow">
                  <ArrowRight size={14} />
                </div>
              </Link>
            );
          })}
        </div>

        {/* Other Businesses Card */}
        <div className="other-business-card">
          <div className="other-biz-content">
            <div className="other-biz-icon">
              <HelpCircle size={20} />
            </div>
            <div>
              <h4 className="other-biz-title">Don't see your specific business category?</h4>
              <p className="other-biz-desc">
                Tell us how your business bills today and what you need to track. We will discuss whether SmartAcc can fit your requirements.
              </p>
            </div>
          </div>
          <Link to="/request-demo?type=other" className="btn-secondary btn-sm shrink-0">
            Discuss Your Business
          </Link>
        </div>
      </div>
    </section>
  );
};
