import React, { useState } from 'react';
import RevealHeading from './RevealHeading';
import { Search, Layers, PenTool, Code2, TrendingUp, Zap, CheckCircle, ArrowRight } from 'lucide-react';

export default function Process({ onOpenQuote }) {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      number: '01',
      title: 'Discover',
      tagline: 'Understand your goals, market and audience.',
      icon: Search,
      nodeColor: 'bg-[var(--primary-blue)]',
      textColor: 'text-[var(--primary-blue)]',
      badgeBorder: 'border-[var(--primary-blue)]/40',
      deliverables: ['Stakeholder Discovery Call', 'Competitor & Industry Benchmark', 'Audience Personas & User Journeys', 'Tech & Performance Audit']
    },
    {
      number: '02',
      title: 'Plan',
      tagline: 'Create a strategy and roadmap for success.',
      icon: Layers,
      nodeColor: 'bg-[var(--brand-orange)]',
      textColor: 'text-[var(--brand-orange)]',
      badgeBorder: 'border-[var(--brand-orange)]/40',
      deliverables: ['Comprehensive Growth Roadmap', 'Information Architecture & Wireframes', 'Content & SEO Strategy', 'Milestone & Sprint Schedule']
    },
    {
      number: '03',
      title: 'Design',
      tagline: 'Craft creative and user-focused designs.',
      icon: PenTool,
      nodeColor: 'bg-[var(--primary-blue)]',
      textColor: 'text-[var(--primary-blue)]',
      badgeBorder: 'border-[var(--primary-blue)]/40',
      deliverables: ['High-Fidelity Figma UI Prototypes', 'Design System & Component Library', 'Interactive Clickable Walkthrough', 'Multi-device Responsive Polish']
    },
    {
      number: '04',
      title: 'Build',
      tagline: 'Develop, test and bring it to life.',
      icon: Code2,
      nodeColor: 'bg-[var(--brand-orange)]',
      textColor: 'text-[var(--brand-orange)]',
      badgeBorder: 'border-[var(--brand-orange)]/40',
      deliverables: ['Clean, Scalable Modern Code', 'Database & API Integrations', 'Cross-Browser & QA Testing', 'Speed & Security Hardening']
    },
    {
      number: '05',
      title: 'Grow',
      tagline: 'Optimize, market and scale for better results.',
      icon: TrendingUp,
      nodeColor: 'bg-[var(--primary-blue)]',
      textColor: 'text-[var(--primary-blue)]',
      badgeBorder: 'border-[var(--primary-blue)]/40',
      deliverables: ['Smooth Production Launch', 'Conversion Tracking & Heatmaps', 'Paid & Organic Lead Generation', 'Continuous A/B Testing & Support']
    }
  ];

  return (
    <section id="process" className="py-16 sm:py-20 lg:py-24 bg-transparent text-[var(--text-dark)] relative overflow-hidden border-y border-slate-200/60">
      
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[var(--primary-blue)]/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[var(--brand-orange)]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header (Encased in Frosted Glass Island to 100% Protect Text Readability) */}
        <div className="text-center max-w-4xl mx-auto space-y-3 bg-white/95 backdrop-blur-xl border border-slate-200/90 rounded-3xl p-6 sm:p-8 shadow-md">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-50 border border-[var(--primary-blue)]/20 text-xs font-semibold text-[#0A1F6B] shadow-xs">
            <Zap className="w-3.5 h-3.5 fill-[var(--brand-orange)] text-[var(--brand-orange)]" />
            <span className="text-[var(--brand-orange)] uppercase tracking-wider text-[11px] font-bold">How We Work</span>
            <span className="text-[var(--text-muted)]">• The 5-Step Formula</span>
          </div>

          <RevealHeading tag="h2" delay={120} direction="up" blur={true} className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0A1F6B] tracking-tight leading-tight font-heading">
            A Clear, Results-Driven Path to{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0B5CFF] via-[#00C8FF] to-[#FF7A00]">
              Growth
            </span>
          </RevealHeading>

          <RevealHeading tag="p" delay={220} direction="up" className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
            From initial discovery to launch and compounding marketing scale, our structured five-stage methodology guarantees on-time delivery, crystal-clear communication, and measurable ROI.
          </RevealHeading>
        </div>

        {/* 5-Step Interactive Timeline Bar */}
        <div className="mt-14 relative">
          
          {/* Connecting Line behind steps */}
          <div className="hidden lg:block absolute top-7 left-12 right-12 h-0.5 bg-gradient-to-r from-[var(--primary-blue)]/30 via-[var(--brand-orange)]/40 to-[var(--primary-blue)]/30 -z-0" />

          {/* Stepper Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-4 relative z-10">
            {steps.map((step, idx) => {
              const IconComp = step.icon;
              const isActive = activeStep === idx;
              return (
                <div
                  key={step.number}
                  onClick={() => setActiveStep(idx)}
                  className={`p-5 rounded-2xl transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                    isActive
                      ? 'bg-white border-2 border-[var(--brand-orange)] shadow-hover-blue scale-[1.03]'
                      : 'bg-white/80 hover:bg-white border border-[var(--primary-blue)]/15 hover:border-[var(--primary-blue)]/40 shadow-soft-blue'
                  }`}
                >
                  <div className="space-y-4">
                    {/* Step Node & Number */}
                    <div className="flex items-center justify-between">
                      <div className={`w-11 h-11 rounded-xl flex items-center justify-center text-white shadow-md ${step.nodeColor}`}>
                        <IconComp className="w-5 h-5" />
                      </div>
                      <span className="font-mono text-xl font-extrabold text-[var(--text-muted)]">
                        {step.number}
                      </span>
                    </div>

                    <div>
                      <h3 className="text-lg font-bold text-[var(--deep-navy)] tracking-tight font-heading">
                        {step.title}
                      </h3>
                      <p className="text-xs text-[var(--text-muted)] mt-1 leading-relaxed line-clamp-2">
                        {step.tagline}
                      </p>
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px]">
                    <span className="text-[var(--brand-orange)] font-bold font-mono">
                      Phase {step.number}
                    </span>
                    <span className="text-slate-400 font-medium font-heading">Click On Media</span>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
