import React, { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { 
  ChevronDown, 
  Menu, 
  X, 
  ShoppingBag, 
  Truck, 
  Shirt, 
  Smartphone, 
  UtensilsCrossed, 
  Store,
  MapPin,
  ArrowRight
} from 'lucide-react';
import { siteConfig } from '../../config/site';

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [solutionsDropdownOpen, setSolutionsDropdownOpen] = useState(false);
  const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setSolutionsDropdownOpen(false);
    setMobileSolutionsOpen(false);
  }, [location.pathname]);

  // Lock body scroll when mobile drawer is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  // Handle scroll shadow
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle escape and outside clicks
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSolutionsDropdownOpen(false);
        setMobileMenuOpen(false);
      }
    };
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setSolutionsDropdownOpen(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const solutionsLinks = [
    { label: 'Retail Shops', path: '/solutions/retail-billing-software', icon: ShoppingBag, desc: 'Everyday counter checkout & barcode billing' },
    { label: 'Wholesale & Distribution', path: '/solutions/wholesale-billing-software', icon: Truck, desc: 'Bulk billing, ledgers & customer credit' },
    { label: 'Clothing & Textiles', path: '/solutions/textile-billing-software', icon: Shirt, desc: 'Size/color variants & garment tags' },
    { label: 'Mobile & Electronics', path: '/solutions/mobile-shop-billing-software', icon: Smartphone, desc: 'IMEI/serial records & accessories' },
    { label: 'Restaurants & Cafes', path: '/solutions/restaurant-billing-software', icon: UtensilsCrossed, desc: 'Dine-in, takeaway, KOT & counter orders' },
    { label: 'Supermarkets & Grocery', path: '/solutions/supermarket-billing-software', icon: Store, desc: 'Fast continuous scanning & loose produce' },
  ];

  return (
    <header className={`site-header ${scrolled ? 'header-scrolled' : ''}`}>
      {/* Top Location Strip */}
      <div className="header-top-bar">
        <div className="container header-top-inner">
          <div className="header-location-badge">
            <MapPin size={13} className="text-blue-500" />
            <span>Thalassery, Kannur district, Kerala</span>
          </div>
          <div className="header-top-note">
            <span>Billing software for everyday business operations</span>
          </div>
        </div>
      </div>

      {/* Main Nav Bar */}
      <div className="container header-main-inner">
        {/* Official SmartAcc Logo */}
        <Link to="/" className="brand-logo-link" aria-label="SmartAcc Home">
          <img 
            src={siteConfig.logoUrl} 
            alt="SmartAcc Accounting Solutions" 
            className="brand-logo-img" 
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="desktop-nav" aria-label="Main Navigation">
          <NavLink to="/" end className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
            Home
          </NavLink>
          <NavLink to="/features" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
            Features
          </NavLink>

          {/* Solutions Dropdown */}
          <div className="dropdown-container" ref={dropdownRef}>
            <button
              type="button"
              className={`nav-link dropdown-toggle ${location.pathname.startsWith('/solutions') ? 'active' : ''}`}
              onClick={() => setSolutionsDropdownOpen(!solutionsDropdownOpen)}
              aria-expanded={solutionsDropdownOpen}
              aria-haspopup="true"
            >
              <span>Solutions</span>
              <ChevronDown size={14} className={`chevron-icon ${solutionsDropdownOpen ? 'rotate-180' : ''}`} />
            </button>

            {solutionsDropdownOpen && (
              <div className="solutions-flyout" role="menu">
                <div className="flyout-header">
                  <span className="flyout-heading">Business Solutions</span>
                  <Link to="/solutions" className="flyout-all-link">
                    View Solutions Hub <ArrowRight size={12} />
                  </Link>
                </div>
                <div className="flyout-grid">
                  {solutionsLinks.map((sol) => {
                    const IconComp = sol.icon;
                    return (
                      <Link
                        key={sol.path}
                        to={sol.path}
                        className="flyout-item"
                        role="menuitem"
                        onClick={() => setSolutionsDropdownOpen(false)}
                      >
                        <div className="flyout-icon-box">
                          <IconComp size={18} />
                        </div>
                        <div className="flyout-content">
                          <div className="flyout-title">{sol.label}</div>
                          <div className="flyout-desc">{sol.desc}</div>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          <NavLink to="/services" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
            Services
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
            About
          </NavLink>
          <NavLink to="/contact" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
            Contact
          </NavLink>
        </nav>

        {/* Header Action Button */}
        <div className="header-actions">
          <Link to="/request-demo" className="btn-primary btn-header">
            Request a Demo
          </Link>

          {/* Mobile Menu Hamburger */}
          <button
            type="button"
            className={`mobile-toggle-btn ${mobileMenuOpen ? 'is-active' : ''}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer - rendered via portal to prevent backdrop-filter stacking trap */}
      {mobileMenuOpen && typeof document !== 'undefined' && createPortal(
        <div className="mobile-drawer-backdrop" onClick={() => setMobileMenuOpen(false)}>
          <div 
            className="mobile-drawer" 
            onClick={(e) => e.stopPropagation()} 
            role="dialog" 
            aria-modal="true" 
            aria-label="Mobile Navigation"
          >
            {/* Ambient motion graphic glow orbs matching home page */}
            <div className="mobile-drawer-glow mobile-glow-orb-1" aria-hidden="true" />
            <div className="mobile-drawer-glow mobile-glow-orb-2" aria-hidden="true" />

            {/* Decorative flowing wave ribbon canvas matching home page */}
            <div className="mobile-drawer-wave-canvas" aria-hidden="true">
              <svg 
                className="mobile-drawer-wave-svg" 
                viewBox="0 0 400 240" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg" 
                preserveAspectRatio="none"
              >
                <defs>
                  <linearGradient id="mobWave1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#12C2CF" stopOpacity="0.28" />
                    <stop offset="50%" stopColor="#287DDE" stopOpacity="0.20" />
                    <stop offset="100%" stopColor="#4E8BF7" stopOpacity="0.10" />
                  </linearGradient>
                  <linearGradient id="mobWave2" x1="100%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#084285" stopOpacity="0.35" />
                    <stop offset="100%" stopColor="#12C2CF" stopOpacity="0.15" />
                  </linearGradient>
                </defs>
                <path 
                  d="M-20,120 C80,60 160,180 260,100 C320,50 370,120 420,80 L420,240 L-20,240 Z" 
                  fill="url(#mobWave1)" 
                />
                <path 
                  d="M-20,160 C90,120 180,200 280,140 C340,100 390,160 420,130 L420,240 L-20,240 Z" 
                  fill="url(#mobWave2)" 
                />
              </svg>
            </div>

            {/* Mobile Drawer Header: Close button on left, logo on right (Right-aligned layout) */}
            <div className="mobile-drawer-header">
              <button 
                type="button" 
                className="close-drawer-btn" 
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close navigation menu"
              >
                <X size={20} />
              </button>

              <Link 
                to="/" 
                onClick={() => setMobileMenuOpen(false)} 
                aria-label="SmartAcc Home"
                className="mobile-logo-capsule"
              >
                <img 
                  src={siteConfig.logoUrl} 
                  alt="SmartAcc Accounting Solutions" 
                  className="brand-logo-img-mobile" 
                />
              </Link>
            </div>

            <div className="mobile-drawer-body">
              {/* Main Navigation Group - Right Aligned */}
              <div className="mobile-nav-group">
                <div className="mobile-group-header">
                  <span className="mobile-group-title">Main Navigation</span>
                </div>

                <NavLink to="/" end className="mobile-nav-item" onClick={() => setMobileMenuOpen(false)}>
                  <span>Home</span>
                </NavLink>

                <NavLink to="/features" className="mobile-nav-item" onClick={() => setMobileMenuOpen(false)}>
                  <span>Features</span>
                </NavLink>

                {/* Business Types Collapsible Dropdown List */}
                <div className="mobile-dropdown-container">
                  <button
                    type="button"
                    className={`mobile-nav-item mobile-dropdown-trigger ${mobileSolutionsOpen ? 'is-expanded' : ''} ${location.pathname.startsWith('/solutions') ? 'is-active-parent' : ''}`}
                    onClick={() => setMobileSolutionsOpen(!mobileSolutionsOpen)}
                    aria-expanded={mobileSolutionsOpen}
                    aria-label="Toggle Business Types Solutions Dropdown"
                  >
                    <div className="mobile-dropdown-left">
                      <ChevronDown 
                        size={17} 
                        className={`mobile-chevron ${mobileSolutionsOpen ? 'rotate-180' : ''}`} 
                      />
                      <span className="mobile-count-pill">6 Types</span>
                    </div>
                    <div className="mobile-dropdown-right">
                      <span>Business Types</span>
                    </div>
                  </button>

                  <div className={`mobile-dropdown-content ${mobileSolutionsOpen ? 'is-open' : ''}`}>
                    <div className="mobile-dropdown-inner">
                      {solutionsLinks.map((sol) => {
                        const IconComp = sol.icon;
                        return (
                          <NavLink 
                            key={sol.path} 
                            to={sol.path} 
                            className={({ isActive }) => `mobile-nav-subitem ${isActive ? 'active' : ''}`}
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            <span className="subitem-label">{sol.label}</span>
                            <span className="subitem-icon-wrap">
                              <IconComp size={15} />
                            </span>
                          </NavLink>
                        );
                      })}

                      <NavLink
                        to="/solutions"
                        end
                        className="mobile-solutions-hub-link"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        <span>View All Solutions Hub</span>
                        <ArrowRight size={13} />
                      </NavLink>
                    </div>
                  </div>
                </div>

                <NavLink to="/services" className="mobile-nav-item" onClick={() => setMobileMenuOpen(false)}>
                  <span>Services & Setup</span>
                </NavLink>

                <NavLink to="/about" className="mobile-nav-item" onClick={() => setMobileMenuOpen(false)}>
                  <span>About SmartAcc</span>
                </NavLink>

                <NavLink to="/contact" className="mobile-nav-item" onClick={() => setMobileMenuOpen(false)}>
                  <span>Contact Us</span>
                </NavLink>
              </div>

              {/* Mobile Drawer Footer with Motion Graphic Pulse & CTA */}
              <div className="mobile-drawer-footer">
                <div className="mobile-beacon-pill">
                  <span className="beacon-dot" />
                  <span className="beacon-text">Billing Software • Kerala</span>
                </div>

                <Link 
                  to="/request-demo" 
                  className="btn-primary mobile-cta-btn"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span>Request a Demo</span>
                  <ArrowRight size={16} />
                </Link>

                <p className="mobile-location-note">
                  <MapPin size={13} className="inline-map-icon" />
                  <span>Thalassery, Kannur district, Kerala</span>
                </p>
              </div>
            </div>
          </div>
        </div>,
        document.body
      )}
    </header>
  );
};
