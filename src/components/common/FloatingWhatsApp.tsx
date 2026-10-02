import React from 'react';
import { WhatsAppIcon } from './SocialIcons';
import { siteConfig } from '../../config/site';

export const FloatingWhatsApp: React.FC = () => {
  const defaultMessage = 'Hello SmartAcc, I would like to inquire about your billing software.';
  const whatsappUrl = siteConfig.whatsappE164
    ? `https://wa.me/${siteConfig.whatsappE164}?text=${encodeURIComponent(defaultMessage)}`
    : `https://wa.me/?text=${encodeURIComponent(defaultMessage)}`;

  return (
    <div className="floating-whatsapp-wrap" title="Chat with SmartAcc on WhatsApp">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="floating-whatsapp-btn"
        aria-label="Chat with SmartAcc on WhatsApp"
      >
        <span className="whatsapp-pulse-ring"></span>
        <WhatsAppIcon size={32} className="whatsapp-icon-svg" />
        <span className="whatsapp-tooltip">Chat with us</span>
      </a>
    </div>
  );
};
