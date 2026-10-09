import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Layers, 
  ArrowLeftRight, 
  BarChart3, 
  Check, 
  ArrowRight, 
  Sparkles,
  HelpCircle
} from 'lucide-react';
import { 
  versionMetadata,
  getBaseVersionFeatures,
  getFullVersionFeatures
} from '../../content/versionComparison';

export const VersionComparisonSection: React.FC = () => {
  const baseGroups = getBaseVersionFeatures();
  const fullGroups = getFullVersionFeatures();

  const getGroupIcon = (iconName: string) => {
    switch (iconName) {
      case 'Layers':
        return Layers;
      case 'ArrowLeftRight':
        return ArrowLeftRight;
      case 'BarChart3':
        return BarChart3;
      default:
        return Layers;
    }
  };

  return (
    <section 
      id="compare-versions" 
      className="section version-comparison-section"
      aria-labelledby="version-comparison-heading"
    >
      <div className="container">
        {/* Section Header */}
        <div className="section-head text-center max-w-3xl mx-auto">
          <span className="section-eyebrow">
            {versionMetadata.header.eyebrow}
          </span>
          <h2 id="version-comparison-heading" className="section-title">
            {versionMetadata.header.title}
          </h2>
          <p className="section-subtitle">
            {versionMetadata.header.description}
          </p>
        </div>

        {/* Two Comparison Cards Side-by-Side on Desktop */}
        <div className="version-cards-grid mt-12">
          {/* LEFT CARD: Base Version */}
          <div className="version-card base-card">
            <div className="version-card-header">
              <div className="version-card-top-row">
                <span className="version-badge version-badge-neutral">
                  {versionMetadata.base.badge}
                </span>
                <span className="version-count-pill">
                  {versionMetadata.base.totalFeatures} Features
                </span>
              </div>
              <h3 className="version-card-title">
                {versionMetadata.base.name}
              </h3>
              <p className="version-card-suitable">
                {versionMetadata.base.suitableFor}
              </p>
              <div className="version-summary-tags">
                <span className="v-tag">4 Master</span>
                <span className="v-tag-dot">•</span>
                <span className="v-tag">6 Transactions</span>
                <span className="v-tag-dot">•</span>
                <span className="v-tag">9 Reports</span>
              </div>
            </div>

            <div className="version-card-action">
              <Link 
                to="/contact?version=base" 
                className="btn-secondary w-full text-center version-action-btn"
                aria-label="Enquire about SmartAcc Base Version"
              >
                <span>{versionMetadata.base.ctaText}</span>
                <ArrowRight size={16} />
              </Link>
            </div>

            <div className="version-groups-list">
              {baseGroups.map((group, groupIdx) => {
                const IconComponent = getGroupIcon(group.iconName);
                return (
                  <div key={group.id} className="version-feature-group">
                    {groupIdx > 0 && <div className="group-divider" />}
                    <div className="group-header">
                      <div className="group-icon-wrap neutral-icon">
                        <IconComponent size={18} />
                      </div>
                      <div className="group-title-wrap">
                        <h4 className="group-title">{group.title}</h4>
                        <span className="group-count">
                          {group.features.length} {group.id === 'reports' ? 'Reports' : 'Included'}
                        </span>
                      </div>
                    </div>

                    <ul className="group-features-list">
                      {group.features.map((feature, featureIdx) => (
                        <li key={feature.id} className="feature-item-row">
                          <span className="check-icon-wrap" aria-hidden="true">
                            <Check size={14} className="text-emerald-600" />
                          </span>
                          <span className="feature-item-name">
                            {group.id === 'reports' && (
                              <span className="feature-number">{featureIdx + 1}. </span>
                            )}
                            {feature.name}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>

          {/* RIGHT CARD: Full Version (Highlighted) */}
          <div className="version-card full-card">
            {/* Visual Highlight Ribbon */}
            <div className="full-card-highlight-bar" aria-hidden="true" />
            
            <div className="version-card-header">
              <div className="version-card-top-row">
                <span className="version-badge version-badge-accent">
                  <Sparkles size={13} className="text-blue-600 shrink-0" />
                  <span>{versionMetadata.full.badge}</span>
                </span>
                <span className="version-count-pill pill-accent">
                  {versionMetadata.full.totalFeatures} Features
                </span>
              </div>
              <h3 className="version-card-title text-accent-gradient">
                {versionMetadata.full.name}
              </h3>
              <p className="version-card-suitable">
                {versionMetadata.full.suitableFor}
              </p>
              <div className="version-summary-tags">
                <span className="v-tag v-tag-accent">6 Master</span>
                <span className="v-tag-dot">•</span>
                <span className="v-tag v-tag-accent">11 Transactions</span>
                <span className="v-tag-dot">•</span>
                <span className="v-tag v-tag-accent">12 Reports</span>
              </div>
            </div>

            <div className="version-card-action">
              <Link 
                to="/contact?version=full" 
                className="btn-primary w-full text-center version-action-btn"
                aria-label="Enquire about SmartAcc Full Version"
              >
                <span>{versionMetadata.full.ctaText}</span>
                <ArrowRight size={16} />
              </Link>
            </div>

            <div className="version-groups-list">
              {fullGroups.map((group, groupIdx) => {
                const IconComponent = getGroupIcon(group.iconName);
                return (
                  <div key={group.id} className="version-feature-group">
                    {groupIdx > 0 && <div className="group-divider" />}
                    <div className="group-header">
                      <div className="group-icon-wrap accent-icon">
                        <IconComponent size={18} />
                      </div>
                      <div className="group-title-wrap">
                        <h4 className="group-title">{group.title}</h4>
                        <span className="group-count font-medium text-blue-600">
                          {group.features.length} {group.id === 'reports' ? 'Reports' : 'Included'}
                        </span>
                      </div>
                    </div>

                    <ul className="group-features-list">
                      {group.features.map((feature, featureIdx) => {
                        // Check if this feature is an advanced capability exclusive to Full Version
                        const isExclusive = !feature.baseIncluded;
                        return (
                          <li 
                            key={feature.id} 
                            className={`feature-item-row ${isExclusive ? 'feature-row-exclusive' : ''}`}
                          >
                            <span className="check-icon-wrap check-accent" aria-hidden="true">
                              <Check size={14} className="text-blue-600" />
                            </span>
                            <span className="feature-item-name">
                              {group.id === 'reports' && (
                                <span className="feature-number">{featureIdx + 1}. </span>
                              )}
                              <span>{feature.name}</span>
                              {isExclusive && (
                                <span className="advanced-badge" title="Full Version exclusive capability">
                                  Advanced
                                </span>
                              )}
                            </span>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Section 8: Call-to-Action Area */}
        <div className="version-cta-card mt-16">
          <div className="version-cta-inner">
            <div className="version-cta-text">
              <div className="version-cta-eyebrow">
                <HelpCircle size={15} className="text-blue-600 shrink-0" />
                <span>Consultation & Advice</span>
              </div>
              <h3 className="version-cta-title">
                {versionMetadata.ctaSection.title}
              </h3>
              <p className="version-cta-desc">
                {versionMetadata.ctaSection.description}
              </p>
            </div>
            <div className="version-cta-button-wrap">
              <Link to="/contact" className="btn-primary btn-lg">
                <span>{versionMetadata.ctaSection.buttonText}</span>
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
