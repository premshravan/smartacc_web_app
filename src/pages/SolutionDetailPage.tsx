import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { 
  ShoppingBag, 
  Truck, 
  Shirt, 
  Smartphone, 
  UtensilsCrossed, 
  Store,
  Mountain,
  Gem,
  Wrench,
  Hotel,
  GraduationCap,
  Car,
  Briefcase,
  Factory,
  Zap,
  CheckCircle2, 
  ArrowRight,
  ClipboardList,
  Sparkles
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { solutionsData } from '../content/solutions';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { FaqAccordion } from '../components/common/FaqAccordion';
import { CtaBanner } from '../components/common/CtaBanner';

const iconMap: Record<string, LucideIcon> = {
  ShoppingBag,
  Truck,
  Shirt,
  Smartphone,
  UtensilsCrossed,
  Store,
  Mountain,
  Gem,
  Wrench,
  Hotel,
  GraduationCap,
  Car,
  Briefcase,
  Factory,
  Zap,
};

export const SolutionDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  if (!slug || !solutionsData[slug]) {
    return <Navigate to="/404" replace />;
  }

  const solution = solutionsData[slug];
  const IconComp = iconMap[solution.iconName] || Store;
  const demoUrlWithParam = `/request-demo?type=${solution.typeKey}`;

  const mappedFaqs = solution.faqs.map((f, i) => ({
    id: `${solution.typeKey}-faq-${i}`,
    question: f.question,
    answer: f.answer,
    category: 'general' as const,
  }));

  return (
    <div className="solution-detail-page">
      <Breadcrumbs 
        items={[
          { label: 'Solutions', path: '/solutions' },
          { label: solution.shortLabel }
        ]} 
      />

      {/* Hero */}
      <section className="page-hero">
        <div className="container max-w-4xl text-center">
          <div className="hero-icon-pill">
            <IconComp size={20} className="text-blue-600" />
            <span>{solution.shortLabel}</span>
          </div>
          <h1 className="page-h1">{solution.h1}</h1>
          <p className="page-tagline text-lg text-blue-700 font-medium mt-1">
            {solution.tagline}
          </p>
          <p className="page-intro max-w-3xl mx-auto mt-4">
            {solution.intro}
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <Link to={demoUrlWithParam} className="btn-primary btn-lg">
              <span>{solution.demoCtaText}</span>
              <ArrowRight size={18} />
            </Link>
            <Link to="/features" className="btn-secondary btn-lg">
              <span>View General Features</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Practical Business Challenges */}
      <section className="section bg-surface">
        <div className="container">
          <div className="section-head text-center max-w-3xl mx-auto">
            <span className="section-eyebrow">Practical Realities</span>
            <h2 className="section-title">Common Workflow Challenges</h2>
            <p className="section-subtitle">
              Every day on the sales counter presents specific demands. Here is how your billing setup needs to adapt:
            </p>
          </div>

          <div className="challenges-grid">
            {solution.businessChallenges.map((ch, idx) => (
              <div key={idx} className="challenge-card">
                <div className="challenge-icon-box">
                  <CheckCircle2 size={22} className="text-blue-600" />
                </div>
                <h3 className="challenge-card-title">{ch.title}</h3>
                <p className="challenge-card-desc">{ch.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Relevant Candidate Modules */}
      <section className="section bg-slate-subtle">
        <div className="container">
          <div className="section-head text-center max-w-3xl mx-auto">
            <span className="section-eyebrow">Module Focus</span>
            <h2 className="section-title">Relevant Billing & Record Tools</h2>
            <p className="section-subtitle">
              Capabilities designed to support the specific transaction patterns of your sector:
            </p>
          </div>

          <div className="modules-grid">
            {solution.candidateModules.map((mod, idx) => (
              <div key={idx} className="module-card">
                <div className="module-header">
                  <Sparkles size={18} className="text-blue-600" />
                  <span className="module-label">Workflow Capability</span>
                </div>
                <h3 className="module-title">{mod.title}</h3>
                <p className="module-desc">{mod.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow Steps Preview */}
      <section className="section bg-surface">
        <div className="container max-w-4xl">
          <div className="section-head text-center">
            <span className="section-eyebrow">At the Counter</span>
            <h2 className="section-title">A Realistic Counter Workflow</h2>
            <p className="section-subtitle">
              How everyday transactions proceed smoothly from item selection to receipt handover:
            </p>
          </div>

          <div className="workflow-steps-vertical">
            {solution.workflowSteps.map((wf) => (
              <div key={wf.step} className="workflow-step-row">
                <div className="workflow-step-num">{wf.step}</div>
                <div className="workflow-step-card">
                  <h4 className="workflow-step-h4">{wf.title}</h4>
                  <p className="workflow-step-p">{wf.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What to Discuss in the Demo Checklist */}
      <section className="section bg-blue-subtle">
        <div className="container max-w-4xl">
          <div className="demo-checklist-box">
            <div className="demo-checklist-header">
              <ClipboardList size={26} className="text-blue-700" />
              <div>
                <h3 className="demo-checklist-title">What to Discuss During Your Demo</h3>
                <p className="demo-checklist-subtitle">
                  We walk through these exact points to ensure the software setup fits your shop layout:
                </p>
              </div>
            </div>

            <ul className="demo-points-list">
              {solution.demoDiscussionPoints.map((point, idx) => (
                <li key={idx} className="demo-point-item">
                  <CheckCircle2 size={18} className="text-emerald-600 shrink-0 mt-0.5" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>

            <div className="demo-checklist-foot">
              <Link to={demoUrlWithParam} className="btn-primary">
                <span>{solution.demoCtaText}</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Sector FAQs */}
      <section className="section bg-surface">
        <div className="container max-w-4xl">
          <div className="section-head text-center">
            <span className="section-eyebrow">Q&A</span>
            <h2 className="section-title">Questions for {solution.shortLabel}</h2>
          </div>
          <FaqAccordion items={mappedFaqs} />
        </div>
      </section>

      {/* Final Call to Action with preselected type */}
      <CtaBanner 
        title={`Ready to explore billing for your ${solution.shortLabel.toLowerCase()}?`}
        subtitle="Request a focused demo walkthrough with sample data matching your exact business format."
        demoCtaText={solution.demoCtaText}
        demoUrl={demoUrlWithParam}
      />
    </div>
  );
};
