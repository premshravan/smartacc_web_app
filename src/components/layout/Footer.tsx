import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, ShieldCheck, ArrowRight } from 'lucide-react';
import { siteConfig, formatLocation } from '../../config/site';
import { WhatsAppIcon, InstagramIcon, FacebookIcon } from '../common/SocialIcons';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const whatsappUrl = siteConfig.socialLinks.find(s => s.platform === 'WhatsApp')?.url ||
    (siteConfig.whatsappE164 ? `https://wa.me/${siteConfig.whatsappE164}` : 'https://wa.me/?text=Hi%20SmartAcc');
  const instagramUrl = siteConfig.socialLinks.find(s => s.platform === 'Instagram')?.url || 'https://instagram.com/';
  const facebookUrl = siteConfig.socialLinks.find(s => s.platform === 'Facebook')?.url || 'https://facebook.com/';

  return (
    <footer className="site-footer">
      <div className="container footer-main-grid">
        {/* Brand & Location Column */}
        <div className="footer-col brand-col">
          <Link to="/" className="brand-logo-link footer-brand-link">
            <div className="footer-logo-wrap">
              <img 
                src={siteConfig.logoUrl} 
                alt="SmartAcc Accounting Solutions" 
                className="footer-logo-img" 
              />
            </div>
          </Link>

          <p className="footer-brand-desc">
            {siteConfig.supportingDescription}
          </p>

          <div className="footer-location-card">
            <MapPin size={16} className="text-blue-500 shrink-0 mt-0.5" />
            <div>
              <div className="location-city">Thalassery</div>
              <div className="location-region">Kannur District, Kerala, India</div>
            </div>
          </div>

          {/* Social Media Channels */}
          <div className="footer-social-wrap">
            <span className="footer-social-title">Connect with SmartAcc</span>
            <div className="footer-social-list">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-chip chip-whatsapp"
                aria-label="Chat on WhatsApp"
                title="WhatsApp"
              >
                <WhatsAppIcon size={17} />
                <span>WhatsApp</span>
              </a>
              <a
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-chip chip-instagram"
                aria-label="Follow SmartAcc on Instagram"
                title="Instagram"
              >
                <InstagramIcon size={17} />
                <span>Instagram</span>
              </a>
              <a
                href={facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-chip chip-facebook"
                aria-label="Follow SmartAcc on Facebook"
                title="Facebook"
              >
                <FacebookIcon size={17} />
                <span>Facebook</span>
              </a>
            </div>
          </div>
        </div>

        {/* Solutions Column */}
        <div className="footer-col">
          <h4 className="footer-heading">Solutions</h4>
          <ul className="footer-links-list">
            <li><Link to="/solutions/retail-billing-software">Retail & General Stores</Link></li>
            <li><Link to="/solutions/wholesale-billing-software">Wholesale & Distribution</Link></li>
            <li><Link to="/solutions/textile-billing-software">Clothing & Textile Shops</Link></li>
            <li><Link to="/solutions/mobile-shop-billing-software">Mobile & Electronics Shops</Link></li>
            <li><Link to="/solutions/restaurant-billing-software">Restaurants & Cafes</Link></li>
            <li><Link to="/solutions/supermarket-billing-software">Supermarkets & Grocery</Link></li>
            <li><Link to="/solutions/hardware-billing-software">Hardware Stores</Link></li>
            <li><Link to="/solutions/automobile-spare-parts-billing-software">Automobiles & Spare Parts</Link></li>
            <li><Link to="/solutions" style={{ color: '#38BDF8', fontWeight: 600 }}>View All 15 Categories &rarr;</Link></li>
          </ul>
        </div>

        {/* Navigation & Pages Column */}
        <div className="footer-col">
          <h4 className="footer-heading">Explore</h4>
          <ul className="footer-links-list">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/features">Billing Features</Link></li>
            <li><Link to="/features#compare-versions">Compare Software Versions</Link></li>
            <li><Link to="/services">Setup & Support Options</Link></li>
            <li><Link to="/about">About SmartAcc</Link></li>
            <li><Link to="/contact">Contact SmartAcc</Link></li>
            <li><Link to="/request-demo">Request a Demo</Link></li>
            <li><Link to="/privacy-policy">Privacy Policy</Link></li>
          </ul>
        </div>

        {/* Next Steps CTA Column */}
        <div className="footer-col cta-col">
          <h4 className="footer-heading">Start a Conversation</h4>
          <p className="footer-cta-text">
            Tell us how your business bills today and explore a walkthrough suited to your workflow.
          </p>
          <Link to="/request-demo" className="btn-primary w-full text-center mt-2">
            <span>Request a Demo</span>
            <ArrowRight size={14} />
          </Link>
          <div className="footer-badge-item">
            <ShieldCheck size={14} className="text-emerald-500" />
            <span>Honest, workflow-focused consultations</span>
          </div>
        </div>
      </div>

      {/* Footer Bottom Bar */}
      <div className="footer-bottom-bar">
        <div className="container footer-bottom-inner">
          <div className="copyright-text">
            © {currentYear} SmartAcc. Based in {formatLocation()}.
          </div>

          <div className="footer-bottom-right-wrap">
            <div className="footer-bottom-links">
              <Link to="/privacy-policy">Privacy Policy</Link>
              <span className="dot-sep">•</span>
              <Link to="/contact">Contact Support</Link>
            </div>

            <div className="footer-bottom-social-icons">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-mini-icon-btn whatsapp"
                aria-label="WhatsApp"
                title="WhatsApp"
              >
                <WhatsAppIcon size={16} />
              </a>
              <a
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-mini-icon-btn instagram"
                aria-label="Instagram"
                title="Instagram"
              >
                <InstagramIcon size={16} />
              </a>
              <a
                href={facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-mini-icon-btn facebook"
                aria-label="Facebook"
                title="Facebook"
              >
                <FacebookIcon size={16} />
              </a>
            </div>
          </div>
        </div>

        <div className="container">
          <p className="footer-disclaimer">
            Illustrative product previews are shown for demonstration. Available software modules, peripheral compatibility, and terms are confirmed during your demo.
          </p>
        </div>
      </div>
    </footer>
  );
};
