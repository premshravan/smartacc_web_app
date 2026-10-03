import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, ArrowRight, ExternalLink } from 'lucide-react';
import { siteConfig, formatLocation } from '../config/site';
import { ContactForm } from '../components/forms/ContactForm';
import { Breadcrumbs } from '../components/common/Breadcrumbs';

export const ContactPage: React.FC = () => {
  return (
    <div className="contact-page">
      <Breadcrumbs items={[{ label: 'Contact' }]} />

      <section className="page-hero">
        <div className="container max-w-3xl text-center">
          <span className="section-eyebrow">Get in Touch</span>
          <h1 className="page-h1">Contact SmartAcc</h1>
          <p className="page-intro">
            Have a question about SmartAcc or want to discuss your billing requirements? Send an enquiry and share a little about your business.
          </p>
        </div>
      </section>

      <section className="section bg-surface">
        <div className="container">
          <div className="contact-page-grid">
            {/* Contact Information Column */}
            <div className="contact-info-col">
              <div className="contact-card">
                <h2 className="contact-card-title">Direct Enquiries</h2>
                <p className="contact-card-desc">
                  Whether you are planning a new shop billing counter, upgrading your current registers, or checking printer compatibility, our team is here to assist.
                </p>

                <div className="contact-details-list">
                  <div className="contact-item">
                    <div className="contact-item-icon">
                      <MapPin size={20} className="text-blue-600" />
                    </div>
                    <div>
                      <div className="contact-item-label">Location:</div>
                      <div className="contact-item-value">{formatLocation()}</div>
                      <div className="contact-item-note">Redmango Technologies, Orange Tower, AVK Nair Road, Thalassery</div>
                    </div>
                  </div>

                  {/* Configurable Phone / WhatsApp links (only displayed if confirmed) */}
                  {siteConfig.phoneE164 && (
                    <div className="contact-item">
                      <div className="contact-item-icon">
                        <Phone size={20} className="text-blue-600" />
                      </div>
                      <div>
                        <div className="contact-item-label">Phone:</div>
                        <a href={`tel:${siteConfig.phoneE164}`} className="contact-item-link">
                          {siteConfig.phoneE164}
                        </a>
                      </div>
                    </div>
                  )}

                  {siteConfig.email && (
                    <div className="contact-item">
                      <div className="contact-item-icon">
                        <Mail size={20} className="text-blue-600" />
                      </div>
                      <div>
                        <div className="contact-item-label">Email:</div>
                        <a href={`mailto:${siteConfig.email}`} className="contact-item-link">
                          {siteConfig.email}
                        </a>
                      </div>
                    </div>
                  )}

                  <div className="contact-item">
                    <div className="contact-item-icon">
                      <Clock size={20} className="text-blue-600" />
                    </div>
                    <div>
                      <div className="contact-item-label">Service Enquiries:</div>
                      <div className="contact-item-value">Monday to Saturday • Business Hours</div>
                    </div>
                  </div>
                </div>

                <div className="demo-redirect-box mt-8">
                  <h4 className="text-sm font-semibold text-blue-900 mb-1">Looking specifically for a product walkthrough?</h4>
                  <p className="text-xs text-slate-600 mb-3">
                    Use our dedicated demo request form to specify your business category and counter requirements directly.
                  </p>
                  <Link to="/request-demo" className="btn-secondary btn-sm">
                    <span>Go to Demo Form</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>

              {/* Embedded Google Map Card */}
              <div className="city-map-card mt-6">
                <div className="city-map-header">
                  <div className="city-map-title-wrap">
                    <MapPin size={18} className="text-blue-600 shrink-0" />
                    <span className="font-semibold text-slate-800 text-sm">Office Location — Thalassery</span>
                  </div>
                  {siteConfig.mapsUrl && (
                    <a
                      href={siteConfig.mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="city-map-directions-link"
                      title="Open full view on Google Maps"
                    >
                      <span>Directions</span>
                      <ExternalLink size={12} />
                    </a>
                  )}
                </div>

                <div className="city-map-embed-wrap">
                  <iframe
                    src={siteConfig.mapEmbedUrl || "https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d3651.9384926817265!2d75.4941652!3d11.7473062!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x3ba426518a6167a7%3A0x15caf734cde94569!2sRedmango%20Technologies%2C%20AVK%20Nair%20Road%2C%20Near%20Axis%20Bank%2C%202nd%20Floor%2C%20Orange%20Tower%2C%20Pilakool%2C%20Thalassery%2C%20Kerala%20670101!3m2!1d11.747306199999999!2d75.4941652!5e1!3m2!1sen!2sin!4v1790994010495!5m2!1sen!2sin"}
                    width="100%"
                    height="190"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="strict-origin-when-cross-origin"
                    title="SmartAcc - Redmango Technologies Thalassery Map"
                    className="city-map-iframe"
                  />
                </div>

                <div className="city-map-address">
                  <div className="font-semibold text-slate-800 text-xs">Redmango Technologies</div>
                  <div className="text-xs text-slate-600">2nd Floor, Orange Tower, AVK Nair Road, Near Axis Bank, Pilakool, Thalassery, Kerala 670101</div>
                </div>

                <p className="city-map-caption">
                  Visits and software demonstrations can be scheduled directly with our Thalassery team.
                </p>
              </div>
            </div>

            {/* Contact Form Column */}
            <div className="contact-form-col">
              <div className="form-wrapper-card">
                <h3 className="form-card-title">Send Us a Message</h3>
                <p className="form-card-subtitle">
                  Fill in your details below and we will get back to you regarding your requirements.
                </p>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
