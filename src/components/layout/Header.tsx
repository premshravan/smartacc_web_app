import React, { useState, useEffect, useRef } from 'react';
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
  const [scrolled, setScrolled] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setSolutionsDropdownOpen(false);
  }, [location.pathname]);

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
            className="mobile-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-drawer-backdrop" onClick={() => setMobileMenuOpen(false)}>
          <div className="mobile-drawer" onClick={(e) => e.stopPropagation()}>
            <div className="mobile-drawer-header">
              <Link to="/" onClick={() => setMobileMenuOpen(false)}>
                <img 
                  src={siteConfig.logoUrl} 
                  alt="SmartAcc Accounting Solutions" 
                  className="brand-logo-img-mobile" 
                />
              </Link>
              <button 
                type="button" 
                className="close-drawer-btn" 
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close menu"
              >
                <X size={20} />
              </button>
            </div>

            <div className="mobile-drawer-body">
              <div className="mobile-nav-group">
                <span className="mobile-group-title">Main Navigation</span>
                <NavLink to="/" end className="mobile-nav-item">Home</NavLink>
                <NavLink to="/features" className="mobile-nav-item">Features</NavLink>
                <NavLink to="/solutions" end className="mobile-nav-item">Solutions Hub</NavLink>
                <NavLink to="/services" className="mobile-nav-item">Services & Setup</NavLink>
                <NavLink to="/about" className="mobile-nav-item">About SmartAcc</NavLink>
                <NavLink to="/contact" className="mobile-nav-item">Contact Us</NavLink>
              </div>

              <div className="mobile-nav-group">
                <span className="mobile-group-title">Business Types</span>
                {solutionsLinks.map((sol) => (
                  <NavLink key={sol.path} to={sol.path} className="mobile-nav-subitem">
                    {sol.label}
                  </NavLink>
                ))}
              </div>

              <div className="mobile-drawer-footer">
                <Link to="/request-demo" className="btn-primary w-full text-center">
                  Request a Demo
                </Link>
                <p className="mobile-location-note">
                  Thalassery, Kannur district, Kerala
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
