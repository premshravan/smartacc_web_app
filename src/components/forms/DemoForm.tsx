import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import confetti from 'canvas-confetti';
import { CheckCircle2, AlertCircle, Send, ShieldCheck } from 'lucide-react';

interface DemoFormProps {
  defaultBusinessType?: string;
  onSuccess?: () => void;
}

export const DemoForm: React.FC<DemoFormProps> = ({ defaultBusinessType }) => {
  const [searchParams] = useSearchParams();
  const queryType = searchParams.get('type') || defaultBusinessType || '';

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    businessName: '',
    businessType: '',
    city: '',
    email: '',
    requirements: '',
    consent: false,
    honeypot: '', // bot trap
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  // Preselect business type based on URL param
  useEffect(() => {
    const validTypes = [
      'retail', 'wholesale', 'textile', 'mobile', 'restaurant', 'supermarket',
      'crusher', 'jewellery', 'hardware', 'lodge', 'education', 'automobiles',
      'service', 'manufacturing', 'electrical', 'other'
    ];
    const lowerQuery = queryType.toLowerCase();
    if (validTypes.includes(lowerQuery)) {
      setFormData(prev => ({ ...prev, businessType: lowerQuery }));
    }
  }, [queryType]);

  const validate = () => {
    const errs: Record<string, string> = {};

    if (!formData.name.trim()) {
      errs.name = 'Please enter your full name.';
    } else if (formData.name.trim().length > 70) {
      errs.name = 'Name must not exceed 70 characters.';
    }

    // Phone validation (Indian 10-digit format or with +91)
    const cleanPhone = formData.phone.replace(/[\s\-()]/g, '');
    const phoneRegex = /^(\+91|91|0)?[6-9]\d{9}$/;
    if (!formData.phone.trim()) {
      errs.phone = 'Please enter your mobile phone number.';
    } else if (!phoneRegex.test(cleanPhone)) {
      errs.phone = 'Please enter a valid 10-digit mobile number.';
    }

    if (!formData.businessName.trim()) {
      errs.businessName = 'Please enter your shop or business name.';
    }

    if (!formData.businessType) {
      errs.businessType = 'Please select your business category.';
    }

    if (formData.email.trim()) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email.trim())) {
        errs.email = 'Please provide a valid email address or leave blank.';
      }
    }

    if (!formData.consent) {
      errs.consent = 'You must agree to be contacted regarding your demo request.';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Check honeypot
    if (formData.honeypot) {
      // Silently disregard bot submission
      return;
    }

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      // Simulate real server delivery processing
      await new Promise(resolve => setTimeout(resolve, 800));

      // In real deployment, POST to /api/enquiries
      // For local demo and review, store locally in localStorage for verification
      const existing = JSON.parse(localStorage.getItem('smartacc_demo_enquiries') || '[]');
      existing.push({
        ...formData,
        submittedAt: new Date().toISOString(),
        id: 'DEMO-' + Date.now(),
      });
      localStorage.setItem('smartacc_demo_enquiries', JSON.stringify(existing));

      setSubmitStatus('success');
      try {
        confetti({
          particleCount: 60,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch {
        // no-op if blocked
      }
    } catch {
      setSubmitStatus('error');
      setErrorMessage("We couldn't send your enquiry. Please try again or use one of the contact options shown on this page.");
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

    // Clear individual error on edit
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
          <CheckCircle2 size={44} className="text-emerald-600" />
        </div>
        <h3 className="success-title">Demo Request Received</h3>
        <p className="success-desc">
          Thank you. Your enquiry has been received. The SmartAcc team will follow up using the contact details you provided to arrange your walkthrough.
        </p>
        <div className="success-summary-box">
          <div className="summary-item">
            <span className="summary-label">Business:</span>
            <span className="summary-val">{formData.businessName}</span>
          </div>
          <div className="summary-item">
            <span className="summary-label">Category:</span>
            <span className="summary-val capitalize">{formData.businessType}</span>
          </div>
          <div className="summary-item">
            <span className="summary-label">Contact:</span>
            <span className="summary-val">{formData.phone}</span>
          </div>
        </div>
        <button
          type="button"
          onClick={() => {
            setSubmitStatus('idle');
            setFormData({
              name: '',
              phone: '',
              businessName: '',
              businessType: '',
              city: '',
              email: '',
              requirements: '',
              consent: false,
              honeypot: '',
            });
          }}
          className="btn-secondary mt-4"
        >
          Submit Another Request
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="smartacc-form" noValidate>
      {/* Bot trap */}
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
          <span>{errorMessage}</span>
        </div>
      )}

      <div className="form-grid">
        {/* Name */}
        <div className="form-group">
          <label htmlFor="name" className="form-label">
            Your Full Name <span className="req">*</span>
          </label>
          <input
            id="name"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="e.g. Rahul Nambiar"
            className={`form-input ${errors.name ? 'input-error' : ''}`}
            maxLength={70}
          />
          {errors.name && <p className="error-text">{errors.name}</p>}
        </div>

        {/* Phone */}
        <div className="form-group">
          <label htmlFor="phone" className="form-label">
            Mobile Number <span className="req">*</span>
          </label>
          <input
            id="phone"
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="e.g. 98470 12345"
            className={`form-input ${errors.phone ? 'input-error' : ''}`}
          />
          {errors.phone && <p className="error-text">{errors.phone}</p>}
        </div>

        {/* Business Name */}
        <div className="form-group">
          <label htmlFor="businessName" className="form-label">
            Shop / Business Name <span className="req">*</span>
          </label>
          <input
            id="businessName"
            type="text"
            name="businessName"
            value={formData.businessName}
            onChange={handleChange}
            placeholder="e.g. Royal Textiles / City Supermarket"
            className={`form-input ${errors.businessName ? 'input-error' : ''}`}
            maxLength={100}
          />
          {errors.businessName && <p className="error-text">{errors.businessName}</p>}
        </div>

        {/* Business Type */}
        <div className="form-group">
          <label htmlFor="businessType" className="form-label">
            Business Type <span className="req">*</span>
          </label>
          <select
            id="businessType"
            name="businessType"
            value={formData.businessType}
            onChange={handleChange}
            className={`form-select ${errors.businessType ? 'input-error' : ''}`}
          >
            <option value="">Select your business type</option>
            <option value="retail">Retail & General Store</option>
            <option value="wholesale">Wholesale & Distribution</option>
            <option value="textile">Clothing & Textile Outlet</option>
            <option value="mobile">Mobile & Electronics Shop</option>
            <option value="restaurant">Restaurant, Cafe & Food</option>
            <option value="supermarket">Supermarket & Grocery</option>
            <option value="crusher">Crusher & Aggregates</option>
            <option value="jewellery">Jewellery Business</option>
            <option value="hardware">Hardware Store</option>
            <option value="lodge">Lodge & Accommodation</option>
            <option value="education">School & College</option>
            <option value="automobiles">Automobiles & Spare Parts</option>
            <option value="service">Service Sector</option>
            <option value="manufacturing">Manufacturing Unit</option>
            <option value="electrical">Electrical Shop</option>
            <option value="other">Other Business Type</option>
          </select>
          {errors.businessType && <p className="error-text">{errors.businessType}</p>}
        </div>

        {/* City / Town */}
        <div className="form-group">
          <label htmlFor="city" className="form-label">
            City / Town <span className="text-muted text-xs font-normal">(Optional)</span>
          </label>
          <input
            id="city"
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
            placeholder="e.g. Thalassery / Kannur / Vadakara"
            className="form-input"
          />
        </div>

        {/* Email */}
        <div className="form-group">
          <label htmlFor="email" className="form-label">
            Email Address <span className="text-muted text-xs font-normal">(Optional)</span>
          </label>
          <input
            id="email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="e.g. shop@example.com"
            className={`form-input ${errors.email ? 'input-error' : ''}`}
          />
          {errors.email && <p className="error-text">{errors.email}</p>}
        </div>
      </div>

      {/* Requirements */}
      <div className="form-group full-width mt-3">
        <label htmlFor="requirements" className="form-label">
          Specific Billing Requirements <span className="text-muted text-xs font-normal">(Optional)</span>
        </label>
        <textarea
          id="requirements"
          name="requirements"
          value={formData.requirements}
          onChange={handleChange}
          rows={3}
          placeholder="Tell us what you sell, your counter setup, barcode scanning needs, or printers you currently use..."
          className="form-textarea"
        ></textarea>
      </div>

      {/* Consent Checkbox */}
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

      {/* Submit Button */}
      <div className="form-submit-row">
        <button
          type="submit"
          disabled={isSubmitting}
          className="btn-primary w-full md:w-auto"
        >
          {isSubmitting ? (
            <span>Sending Request...</span>
          ) : (
            <>
              <Send size={16} />
              <span>Request My Demo</span>
            </>
          )}
        </button>
        <div className="form-security-note">
          <ShieldCheck size={14} className="text-emerald-600" />
          <span>No obligation. Discuss your workflow before deciding.</span>
        </div>
      </div>
    </form>
  );
};
