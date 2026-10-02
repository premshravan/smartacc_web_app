import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, ArrowRight } from 'lucide-react';
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
                      <div className="contact-item-note">Thalassery, Kannur District, Kerala</div>
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

              {/* City Level Location Visual Card */}
              <div className="city-map-card mt-6">
                <div className="city-map-header">
                  <MapPin size={18} className="text-blue-600" />
                  <span className="font-semibold text-slate-800 text-sm">General Town Location — Thalassery</span>
                </div>
                <div className="city-map-view">
                  <div className="city-map-pin">
                    <div className="pin-pulse"></div>
                    <MapPin size={28} className="text-blue-700" />
                  </div>
                  <div className="city-map-label">Thalassery, Kannur, Kerala</div>
                </div>
                <p className="city-map-caption">
                  Map representation indicates our regional base in Thalassery. Specific office visit directions are coordinated directly with verified appointments.
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
