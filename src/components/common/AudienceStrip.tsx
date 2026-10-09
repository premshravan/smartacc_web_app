import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ShoppingBag, 
  Truck, 
  Shirt, 
  Smartphone, 
  UtensilsCrossed, 
  Store,
  Mountain,
  Gem,
  Wrench,
  Hotel,
  GraduationCap,
  Car,
  Briefcase,
  Factory,
  Zap,
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
  { name: 'Crusher', sub: 'Material sales & aggregate stock', path: '/solutions/crusher-billing-software', icon: Mountain },
  { name: 'Jewellery', sub: 'Item creation & sales records', path: '/solutions/jewellery-billing-software', icon: Gem },
  { name: 'Hardware', sub: 'Store billing & stock adjustments', path: '/solutions/hardware-billing-software', icon: Wrench },
  { name: 'Lodge', sub: 'Billing & financial reporting', path: '/solutions/lodge-billing-software', icon: Hotel },
  { name: 'School & College', sub: 'Administrative billing & ledgers', path: '/solutions/education-billing-software', icon: GraduationCap },
  { name: 'Automobiles & Spare Parts', sub: 'Parts inventory & counter billing', path: '/solutions/automobile-spare-parts-billing-software', icon: Car },
  { name: 'Service Sectors', sub: 'Service billing & expenses', path: '/solutions/service-sector-billing-software', icon: Briefcase },
  { name: 'Manufacturing Units', sub: 'Material purchase & product sales', path: '/solutions/manufacturing-billing-software', icon: Factory },
  { name: 'Electrical Shops', sub: 'Item billing & supplier records', path: '/solutions/electrical-shop-billing-software', icon: Zap },
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
