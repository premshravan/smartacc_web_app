import React from 'react';
import { Phone } from 'lucide-react';
import { WhatsAppIcon } from './SocialIcons';
import { siteConfig } from '../../config/site';

export const FloatingWhatsApp: React.FC = () => {
  const defaultMessage = 'Hello SmartAcc, I would like to inquire about your billing software.';
  const whatsappUrl = siteConfig.whatsappE164
    ? `https://wa.me/${siteConfig.whatsappE164}?text=${encodeURIComponent(defaultMessage)}`
    : `https://wa.me/?text=${encodeURIComponent(defaultMessage)}`;

  const isPhoneConfigured = Boolean(siteConfig.phoneE164);
  const callUrl = isPhoneConfigured ? `tel:${siteConfig.phoneE164}` : 'tel:';

  return (
    <div className="floating-actions-container" aria-label="Quick Contact Actions">
      {/* Call Button (Positioned Above WhatsApp) */}
      <div 
        className="floating-call-wrap" 
        title={isPhoneConfigured ? `Call SmartAcc: ${siteConfig.phoneE164}` : 'Call SmartAcc'}
      >
        <a
          href={callUrl}
          className="floating-call-btn"
          aria-label={isPhoneConfigured ? `Call SmartAcc at ${siteConfig.phoneE164}` : 'Call SmartAcc'}
        >
          <span className="call-pulse-ring" aria-hidden="true"></span>
          <Phone size={24} className="call-icon-svg" />
          <span className="call-tooltip">
            {isPhoneConfigured ? `Call ${siteConfig.phoneE164}` : 'Call SmartAcc'}
          </span>
        </a>
      </div>

      {/* WhatsApp Button */}
      <div className="floating-whatsapp-wrap" title="Chat with SmartAcc on WhatsApp">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="floating-whatsapp-btn"
          aria-label="Chat with SmartAcc on WhatsApp"
        >
          <span className="whatsapp-pulse-ring" aria-hidden="true"></span>
          <WhatsAppIcon size={32} className="whatsapp-icon-svg" />
          <span className="whatsapp-tooltip">Chat with us</span>
        </a>
      </div>
    </div>
  );
};
