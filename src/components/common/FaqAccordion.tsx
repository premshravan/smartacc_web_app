import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import type { FaqItem } from '../../content/faqs';

interface FaqAccordionProps {
  items: FaqItem[];
  allowMultiple?: boolean;
}

export const FaqAccordion: React.FC<FaqAccordionProps> = ({ items, allowMultiple = false }) => {
  const [openIds, setOpenIds] = useState<string[]>([items[0]?.id || '']);

  const toggleItem = (id: string) => {
    if (allowMultiple) {
      setOpenIds(prev => 
        prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
      );
    } else {
      setOpenIds(prev => (prev.includes(id) ? [] : [id]));
    }
  };

  return (
    <div className="faq-accordion-wrap">
      {items.map((item) => {
        const isOpen = openIds.includes(item.id);
        return (
          <div key={item.id} className={`faq-item ${isOpen ? 'faq-item-open' : ''}`}>
            <button
              type="button"
              className="faq-question-btn"
              onClick={() => toggleItem(item.id)}
              aria-expanded={isOpen}
              aria-controls={`faq-answer-${item.id}`}
              id={`faq-btn-${item.id}`}
            >
              <span className="faq-question-text">{item.question}</span>
              <ChevronDown 
                size={18} 
                className={`faq-chevron ${isOpen ? 'rotate-180' : ''}`} 
              />
            </button>
            <div
              id={`faq-answer-${item.id}`}
              role="region"
              aria-labelledby={`faq-btn-${item.id}`}
              className={`faq-answer-panel ${isOpen ? 'panel-open' : ''}`}
            >
              <div className="faq-answer-inner">
                <p>{item.answer}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
