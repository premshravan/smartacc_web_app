import React from 'react';
import { Building2 } from 'lucide-react';
import { clientsData } from '../../content/clients';

export const ClientLogoMarquee: React.FC = () => {
  return (
    <section className="client-marquee-section" aria-label="Businesses that trust SmartAcc">
      <div className="container text-center">
        <div className="client-marquee-heading-pill">
          <Building2 size={14} className="text-blue-600" />
          <span>Businesses that trust SmartAcc</span>
        </div>
      </div>

      <div className="client-marquee-track-wrap">
        <div className="client-marquee-track">
          {/* Double render of clients for seamless infinite loop */}
          <div className="client-marquee-inner">
            {clientsData.map((client) => (
              <div 
                key={`m1-${client.id}`} 
                className="client-marquee-card" 
                title={`${client.name} — ${client.category}`}
              >
                <img
                  src={`${import.meta.env.BASE_URL}images/clients/${client.filename}`}
                  alt={client.alt}
                  className="client-marquee-img"
                  loading="lazy"
                  width={140}
                  height={52}
                />
              </div>
            ))}
            {clientsData.map((client) => (
              <div 
                key={`m2-${client.id}`} 
                className="client-marquee-card" 
                title={`${client.name} — ${client.category}`}
              >
                <img
                  src={`${import.meta.env.BASE_URL}images/clients/${client.filename}`}
                  alt={client.alt}
                  className="client-marquee-img"
                  loading="lazy"
                  width={140}
                  height={52}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
