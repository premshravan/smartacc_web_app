import React from 'react';
import { ShieldCheck, Award } from 'lucide-react';
import { clientsData } from '../../content/clients';

export const TrustedClientsSection: React.FC = () => {
  return (
    <section className="trusted-clients-section" id="trusted-clients" aria-label="Trusted by Businesses">
      {/* Ambient background decoration */}
      <div className="trusted-clients-bg-glow" aria-hidden="true" />
      <div className="trusted-clients-waves-overlay" aria-hidden="true" />

      <div className="container relative z-10">
        {/* Section Header */}
        <div className="trusted-section-header text-center max-w-3xl mx-auto">
          <div className="trusted-eyebrow-pill">
            <Award size={15} className="text-teal-300 shrink-0" />
            <span>Our Valued Clients</span>
          </div>

          <h2 className="trusted-section-title">
            Powering Businesses Across Industries
          </h2>

          <p className="trusted-section-subtitle">
            From aviation and healthcare to retail, food, furniture and mobile businesses, SmartAcc helps businesses simplify billing, accounting and daily operations.
          </p>
        </div>

        {/* 4-column × 2-row Logo Grid (Desktop: 4 col, Tablet: 3 col, Mobile: 2 col) */}
        <div className="trusted-clients-grid" role="list" aria-label="Clients using SmartAcc">
          {clientsData.map((client) => {
            const logoSrc = `${import.meta.env.BASE_URL}images/clients/${client.filename}`;
            return (
              <div 
                key={client.id} 
                className="client-card" 
                role="listitem"
                title={`${client.name} — ${client.category}`}
              >
                <div className="client-logo-wrapper">
                  <img
                    src={logoSrc}
                    alt={client.alt}
                    className="client-logo-img"
                    loading="lazy"
                    width={220}
                    height={85}
                  />
                </div>
                <div className="client-card-meta">
                  <span className="client-name">{client.name}</span>
                  <span className="client-category-badge">{client.badgeText}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Small Trust Statement */}
        <div className="trusted-statement-wrapper">
          <div className="trusted-statement-pill">
            <ShieldCheck size={16} className="text-teal-300 shrink-0" />
            <span>Trusted by businesses across retail, food, education, healthcare, furniture and mobile retail.</span>
          </div>
        </div>
      </div>
    </section>
  );
};
