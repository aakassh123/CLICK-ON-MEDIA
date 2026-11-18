import React from 'react';
import RevealHeading from './RevealHeading';
import { Check, X, ShieldCheck, Zap, ArrowRight, Sparkles, Award } from 'lucide-react';

export default function TransparencyComparison({ onOpenQuote }) {
  const comparisonItems = [
    {
      feature: 'Pricing & Fee Structure',
      traditional: 'Hidden retainer fees, vague markups & billable hours padding',
      clickOnMedia: '100% Transparent milestone pricing with zero surprise charges',
      highlight: true
    },
    {
      feature: 'Code & Asset Ownership',
      traditional: 'Proprietary platform lock-in (you lose access if you leave)',
      clickOnMedia: '100% Direct source code, repository & asset ownership from Day 1',
      highlight: true
    },
    {
      feature: 'Project Turnaround',
      traditional: '3 to 6 months of agency bureaucracy & endless delay excuses',
      clickOnMedia: 'Rapid 14-day sprint delivery with weekly milestone demos',
      highlight: false
    },
    {
      feature: 'Talent & Execution',
      traditional: 'Pitch by senior founders, executed by unpaid junior interns',
      clickOnMedia: 'Dedicated senior engineers & seasoned performance marketers',
      highlight: false
    },
    {
      feature: 'Success Metrics',
      traditional: 'Fluffy vanity metrics (impressions, clicks, bounce rate excuses)',
      clickOnMedia: 'Hard commercial metrics: Revenue, qualified leads & ROAS guarantee',
      highlight: true
    },
    {
      feature: 'Post-Launch Support',
      traditional: 'Radio silence or expensive emergency maintenance tickets',
      clickOnMedia: 'Dedicated 30-day post-launch hypercare & SLA uptime guarantees',
      highlight: false
    }
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-transparent text-slate-800 relative overflow-hidden border-t border-slate-200/60">
      
      {/* Background Soft Glows */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-[var(--primary-blue)]/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-[var(--brand-orange)]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with Yes Madam-inspired Trust Badge (Open & Grand Style) */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[var(--primary-blue)]/20 text-xs font-semibold text-[#0A1F6B] shadow-xs">
            <ShieldCheck className="w-4 h-4 text-[var(--brand-orange)]" />
            <span className="text-[var(--brand-orange)] uppercase tracking-wider text-[11px] font-bold">The Transparency Standard</span>
            <span className="text-slate-500">• Why Brands Choose Us</span>
          </div>

          <RevealHeading tag="h2" delay={120} direction="up" blur={true} className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0A1F6B] tracking-tight leading-tight font-heading">
            Total Transparency vs.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0B5CFF] via-[#00C8FF] to-[#FF7A00]">
              Agency Bloat
            </span>
          </RevealHeading>

          <RevealHeading tag="p" delay={220} direction="up" className="text-sm sm:text-base text-[#071133] font-bold leading-relaxed max-w-2xl mx-auto drop-shadow-[0_1px_2px_rgba(255,255,255,0.95)]">
            Inspired by consumer-first platforms like Yes Madam, we eliminate hidden agency fees, proprietary lock-ins, and vanity excuses. Here is how we compare:
          </RevealHeading>
        </div>

        {/* Comparison Matrix Table Card */}
        <div className="rounded-3xl sm:rounded-[36px] bg-white/95 backdrop-blur-2xl border border-slate-200/90 shadow-xl overflow-hidden">
          
          {/* Table Header */}
          <div className="grid grid-cols-12 bg-slate-50/90 border-b border-slate-200 p-4 sm:p-6 text-xs sm:text-sm font-bold font-heading">
            <div className="col-span-5 sm:col-span-4 text-slate-600 uppercase tracking-wider">
              Deliverable / Standard
            </div>
            <div className="col-span-3 sm:col-span-4 text-slate-400 uppercase tracking-wider pl-2">
              Traditional Agencies
            </div>
            <div className="col-span-4 text-[var(--brand-orange)] uppercase tracking-wider font-extrabold flex items-center gap-1.5 pl-2 sm:pl-4">
              <Sparkles className="w-3.5 h-3.5 text-[var(--brand-orange)]" />
              <span>Click On Media</span>
            </div>
          </div>

          {/* Rows */}
          <div className="divide-y divide-slate-100">
            {comparisonItems.map((item, idx) => (
              <div 
                key={idx}
                className={`grid grid-cols-12 p-4 sm:p-6 items-center transition-colors hover:bg-slate-50/60 ${
                  item.highlight ? 'bg-orange-50/20' : ''
                }`}
              >
                {/* Feature Title */}
                <div className="col-span-5 sm:col-span-4 pr-2">
                  <span className="text-xs sm:text-sm font-bold text-[#0A1F6B] font-heading block">
                    {item.feature}
                  </span>
                </div>

                {/* Traditional Agencies (Red / Cross) */}
                <div className="col-span-3 sm:col-span-4 flex items-start gap-2 text-slate-500 pl-2 text-[11px] sm:text-xs">
                  <div className="w-4 h-4 rounded-full bg-red-100 text-red-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <X className="w-2.5 h-2.5 stroke-[3]" />
                  </div>
                  <span className="hidden sm:inline leading-snug">{item.traditional}</span>
                </div>

                {/* Click On Media Standard (Green / Check + Orange Badge) */}
                <div className="col-span-4 flex items-start gap-2 pl-2 sm:pl-4 text-[11px] sm:text-xs text-slate-800 font-semibold">
                  <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-2.5 h-2.5 stroke-[3]" />
                  </div>
                  <span className="leading-snug text-slate-900 font-medium">
                    {item.clickOnMedia}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Table Bottom Action Banner */}
          <div className="bg-gradient-to-r from-[#061448] via-[#0A1F6B] to-[#040E32] p-5 sm:p-7 text-white flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="space-y-1 text-center sm:text-left">
              <div className="text-sm sm:text-base font-bold font-heading flex items-center justify-center sm:justify-start gap-2">
                <Award className="w-4 h-4 text-[var(--brand-orange)]" />
                <span>Zero Risk • 100% Milestone Satisfaction Guarantee</span>
              </div>
              <p className="text-xs text-slate-300">
                You never pay for work until each sprint deliverable passes your review.
              </p>
            </div>

            <button
              onClick={() => onOpenQuote && onOpenQuote('The Transparency Standard')}
              className="btn-primary text-xs sm:text-sm !py-2.5 !px-6 flex items-center gap-2 flex-shrink-0 shadow-lg cursor-pointer"
            >
              <span>Book Free Strategy Audit</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}

