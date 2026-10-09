import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * ScrollMotionManager
 * Smoothly reveals content cards, section headers, and feature items
 * with physics-based spring easing and staggered entry as the user scrolls.
 */
export const ScrollMotionManager: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    // Select elements across all website pages to animate on scroll
    const selectors = [
      '.section-head',
      '.challenge-card',
      '.feature-card',
      '.solution-card',
      '.solution-hub-card',
      '.why-card',
      '.service-card',
      '.expectation-card',
      '.about-purpose-card',
      '.about-location-card',
      '.contact-card',
      '.city-map-card',
      '.form-wrapper-card',
      '.demo-expectations-card',
      '.workflow-explainer-card',
      '.workflow-step-card',
      '.module-card',
      '.faq-item',
      '.audience-card',
      '.preview-callout-card',
      '.cta-banner-card',
      '.feature-detail-card',
      '.hardware-advisory-card',
      '.version-card',
      '.comparison-table-wrapper',
      '.version-cta-card'
    ];

    const elements = document.querySelectorAll<HTMLElement>(selectors.join(', '));

    // Stagger grid child items
    elements.forEach((el) => {
      if (!el.classList.contains('reveal-init')) {
        el.classList.add('reveal-init');
        const parentGrid = el.parentElement;
        if (parentGrid && (parentGrid.className.includes('grid') || parentGrid.className.includes('row') || parentGrid.className.includes('list'))) {
          const siblings = Array.from(parentGrid.children);
          const childIndex = siblings.indexOf(el);
          el.style.setProperty('--reveal-delay', `${(childIndex % 4) * 80}ms`);
        }
      }
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        root: null,
        rootMargin: '0px 0px -40px 0px',
        threshold: 0.1,
      }
    );

    elements.forEach((el) => {
      observer.observe(el);
    });

    return () => {
      observer.disconnect();
    };
  }, [location.pathname]);

  return null;
};
