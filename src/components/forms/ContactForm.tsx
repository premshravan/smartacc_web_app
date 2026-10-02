import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, AlertCircle, Send } from 'lucide-react';

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    businessName: '',
    topic: 'general',
    message: '',
    consent: false,
    honeypot: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const validate = () => {
    const errs: Record<string, string> = {};

    if (!formData.name.trim()) {
      errs.name = 'Please enter your name.';
    }

    const cleanPhone = formData.phone.replace(/[\s\-()]/g, '');
    const phoneRegex = /^(\+91|91|0)?[6-9]\d{9}$/;
    if (!formData.phone.trim()) {
      errs.phone = 'Please enter your phone number.';
    } else if (!phoneRegex.test(cleanPhone)) {
      errs.phone = 'Please enter a valid mobile number.';
    }

    if (formData.email.trim()) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email.trim())) {
        errs.email = 'Please provide a valid email address or leave blank.';
      }
    }

    if (!formData.message.trim()) {
      errs.message = 'Please provide details of your question or enquiry.';
    }

    if (!formData.consent) {
      errs.consent = 'Please confirm that you agree to be contacted about your enquiry.';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.honeypot) return;
    if (!validate()) return;

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      await new Promise(resolve => setTimeout(resolve, 700));

      const existing = JSON.parse(localStorage.getItem('smartacc_contact_enquiries') || '[]');
      existing.push({
        ...formData,
        submittedAt: new Date().toISOString(),
        id: 'CONTACT-' + Date.now(),
      });
      localStorage.setItem('smartacc_contact_enquiries', JSON.stringify(existing));

      setSubmitStatus('success');
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({ ...prev, [name]: checked }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }

    if (errors[name]) {
      setErrors(prev => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  if (submitStatus === 'success') {
    return (
      <div className="form-success-card">
        <div className="success-icon-wrap">
          <CheckCircle2 size={40} className="text-emerald-600" />
        </div>
        <h3 className="success-title">Message Received</h3>
        <p className="success-desc">
          Thank you. Your enquiry has been received. The SmartAcc team will follow up using the contact details you provided.
        </p>
        <button
          type="button"
          onClick={() => {
            setSubmitStatus('idle');
            setFormData({
              name: '',
              phone: '',
              email: '',
              businessName: '',
              topic: 'general',
              message: '',
              consent: false,
              honeypot: '',
            });
          }}
          className="btn-secondary mt-4"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="smartacc-form" noValidate>
      <input
        type="text"
        name="honeypot"
        value={formData.honeypot}
        onChange={handleChange}
        style={{ display: 'none' }}
        tabIndex={-1}
        autoComplete="off"
      />

      {submitStatus === 'error' && (
        <div className="form-error-banner" role="alert">
          <AlertCircle size={18} />
          <span>We couldn't send your enquiry. Please try again or use the contact information on this page.</span>
        </div>
      )}

      <div className="form-grid">
        <div className="form-group">
          <label htmlFor="contact-name" className="form-label">
            Your Name <span className="req">*</span>
          </label>
          <input
            id="contact-name"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your name"
            className={`form-input ${errors.name ? 'input-error' : ''}`}
          />
          {errors.name && <p className="error-text">{errors.name}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="contact-phone" className="form-label">
            Mobile Number <span className="req">*</span>
          </label>
          <input
            id="contact-phone"
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="10-digit mobile number"
            className={`form-input ${errors.phone ? 'input-error' : ''}`}
          />
          {errors.phone && <p className="error-text">{errors.phone}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="contact-business" className="form-label">
            Business / Shop Name <span className="text-muted text-xs font-normal">(Optional)</span>
          </label>
          <input
            id="contact-business"
            type="text"
            name="businessName"
            value={formData.businessName}
            onChange={handleChange}
            placeholder="Your business name"
            className="form-input"
          />
        </div>

        <div className="form-group">
          <label htmlFor="contact-topic" className="form-label">
            Enquiry Topic <span className="req">*</span>
          </label>
          <select
            id="contact-topic"
            name="topic"
            value={formData.topic}
            onChange={handleChange}
            className="form-select"
          >
            <option value="general">General Enquiry</option>
            <option value="demo">Demo & Product Walkthrough</option>
            <option value="hardware">Hardware & Printer Compatibility</option>
            <option value="support">Setup & Support Questions</option>
            <option value="other">Other Requirements</option>
          </select>
        </div>
      </div>

      <div className="form-group full-width mt-3">
        <label htmlFor="contact-email" className="form-label">
          Email Address <span className="text-muted text-xs font-normal">(Optional)</span>
        </label>
        <input
          id="contact-email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="your.email@example.com"
          className={`form-input ${errors.email ? 'input-error' : ''}`}
        />
        {errors.email && <p className="error-text">{errors.email}</p>}
      </div>

      <div className="form-group full-width mt-3">
        <label htmlFor="contact-message" className="form-label">
          How Can We Help You? <span className="req">*</span>
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={4}
          value={formData.message}
          onChange={handleChange}
          placeholder="Describe your questions or requirements regarding SmartAcc billing..."
          className={`form-textarea ${errors.message ? 'input-error' : ''}`}
        ></textarea>
        {errors.message && <p className="error-text">{errors.message}</p>}
      </div>

      <div className="consent-group">
        <label className="checkbox-label">
          <input
            type="checkbox"
            name="consent"
            checked={formData.consent}
            onChange={handleChange}
            className="checkbox-input"
          />
          <span className="checkbox-text">
            I agree to be contacted about my enquiry and understand how my details are handled as described in the{' '}
            <Link to="/privacy-policy" className="form-link" target="_blank" rel="noopener noreferrer">
              Privacy Policy
            </Link>
            . <span className="req">*</span>
          </span>
        </label>
        {errors.consent && <p className="error-text">{errors.consent}</p>}
      </div>

      <div className="form-submit-row">
        <button
          type="submit"
          disabled={isSubmitting}
          className="btn-primary"
        >
          {isSubmitting ? (
            <span>Sending Message...</span>
          ) : (
            <>
              <Send size={16} />
              <span>Send Enquiry</span>
            </>
          )}
        </button>
      </div>
    </form>
  );
};
