import React from 'react';
import RevealHeading from './RevealHeading';
import { Check, X, ShieldCheck, Zap, ArrowRight, Sparkles, Award } from 'lucide-react';

export default function TransparencyComparison({ onOpenQuote }) {
  const comparisonItems = [
    {
      feature: 'Pricing & Fees',
      traditional: 'Hidden retainer markups & vague hourly billing',
      clickOnMedia: '100% Transparent milestone pricing, zero surprises',
      highlight: true
    },
    {
      feature: 'Code & Asset Ownership',
      traditional: 'Platform lock-in & restricted access',
      clickOnMedia: 'Full 100% direct source code & asset ownership',
      highlight: true
    },
    {
      feature: 'Turnaround Speed',
      traditional: '3 to 6 months agency bureaucracy & delays',
      clickOnMedia: 'Rapid 14-day sprint delivery with weekly demos',
      highlight: false
    },
    {
      feature: 'Team & Execution',
      traditional: 'Pitched by seniors, executed by junior interns',
      clickOnMedia: 'Dedicated senior developers & growth marketers',
      highlight: false
    },
    {
      feature: 'Success Metrics',
      traditional: 'Vanity metrics (clicks & impressions without sales)',
      clickOnMedia: 'Hard business ROI: Direct revenue, leads & growth',
      highlight: true
    }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-18 bg-transparent text-slate-800 relative overflow-hidden border-t border-slate-200/60">
      
      {/* Background Soft Glows */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-[var(--primary-blue)]/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-[var(--brand-orange)]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-2.5 mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[var(--primary-blue)]/20 text-xs font-semibold text-[#0A1F6B] shadow-xs">
            <ShieldCheck className="w-4 h-4 text-[var(--brand-orange)]" />
            <span className="text-[var(--brand-orange)] uppercase tracking-wider text-[11px] font-bold">The Transparency Standard</span>
            <span className="text-slate-500">• Why Brands Choose Us</span>
          </div>

          <RevealHeading tag="h2" delay={120} direction="up" blur={true} className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0A1F6B] tracking-tight leading-tight font-heading">
            Total Transparency vs.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0B5CFF] via-[#00C8FF] to-[#FF7A00]">
              Agency Bloat
            </span>
          </RevealHeading>

          <RevealHeading tag="p" delay={220} direction="up" className="text-xs sm:text-sm text-[#071133] font-bold leading-relaxed max-w-2xl mx-auto drop-shadow-[0_1px_2px_rgba(255,255,255,0.95)]">
            We eliminate hidden fees, vendor lock-ins, and vanity metrics with clear milestone-driven delivery:
          </RevealHeading>
        </div>

        {/* Comparison Matrix Table Card */}
        <div className="rounded-2xl sm:rounded-3xl bg-white/95 backdrop-blur-2xl border border-slate-200/90 shadow-lg overflow-hidden max-w-5xl mx-auto">
          
          {/* Table Header (Desktop & Tablet) */}
          <div className="hidden sm:grid grid-cols-12 bg-slate-50/90 border-b border-slate-200 py-3.5 px-5 sm:px-6 text-xs sm:text-sm font-bold font-heading">
            <div className="col-span-4 text-slate-600 uppercase tracking-wider">
              Deliverable / Standard
            </div>
            <div className="col-span-4 text-slate-400 uppercase tracking-wider pl-2">
              Traditional Agencies
            </div>
            <div className="col-span-4 text-[var(--brand-orange)] uppercase tracking-wider font-extrabold flex items-center gap-1.5 pl-2 sm:pl-4">
              <Sparkles className="w-3.5 h-3.5 text-[var(--brand-orange)]" />
              <span>Click On Media</span>
            </div>
          </div>

          {/* Desktop & Tablet Rows (>=640px) */}
          <div className="hidden sm:block divide-y divide-slate-100">
            {comparisonItems.map((item, idx) => (
              <div 
                key={idx}
                className={`grid grid-cols-12 py-3 px-5 sm:py-3.5 sm:px-6 items-center transition-colors hover:bg-slate-50/60 ${
                  item.highlight ? 'bg-orange-50/20' : ''
                }`}
              >
                {/* Feature Title */}
                <div className="col-span-4 pr-2">
                  <span className="text-xs sm:text-sm font-bold text-[#0A1F6B] font-heading block">
                    {item.feature}
                  </span>
                </div>

                {/* Traditional Agencies (Red / Cross) */}
                <div className="col-span-4 flex items-center gap-2 text-slate-500 pl-2 text-xs">
                  <div className="w-4 h-4 rounded-full bg-red-100 text-red-500 flex items-center justify-center flex-shrink-0">
                    <X className="w-2.5 h-2.5 stroke-[3]" />
                  </div>
                  <span className="leading-snug">{item.traditional}</span>
                </div>

                {/* Click On Media Standard (Green / Check + Orange Badge) */}
                <div className="col-span-4 flex items-center gap-2 pl-2 sm:pl-4 text-xs text-slate-800 font-semibold">
                  <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center flex-shrink-0">
                    <Check className="w-2.5 h-2.5 stroke-[3]" />
                  </div>
                  <span className="leading-snug text-slate-900 font-medium">
                    {item.clickOnMedia}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Optimized Cards (<640px) */}
          <div className="sm:hidden divide-y divide-slate-100">
            {comparisonItems.map((item, idx) => (
              <div 
                key={idx}
                className={`p-3.5 space-y-2 ${item.highlight ? 'bg-orange-50/25' : ''}`}
              >
                {/* Feature Header */}
                <div className="flex items-center justify-between">
                  <span className="text-xs font-heading font-extrabold text-[#0A1F6B]">
                    {item.feature}
                  </span>
                  {item.highlight && (
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[var(--brand-orange)] bg-[var(--brand-orange)]/10 px-2 py-0.5 rounded-full">
                      Advantage
                    </span>
                  )}
                </div>

                {/* Traditional Agency vs Click On Media */}
                <div className="space-y-1.5 text-[11px]">
                  {/* Traditional */}
                  <div className="flex items-center gap-2 p-1.5 px-2.5 rounded-lg bg-slate-50 text-slate-500 border border-slate-100">
                    <div className="w-3.5 h-3.5 rounded-full bg-red-100 text-red-500 flex items-center justify-center flex-shrink-0">
                      <X className="w-2 h-2 stroke-[3]" />
                    </div>
                    <span className="leading-tight">{item.traditional}</span>
                  </div>

                  {/* Click On Media */}
                  <div className="flex items-center gap-2 p-1.5 px-2.5 rounded-lg bg-gradient-to-r from-blue-50/80 to-orange-50/80 text-slate-800 border border-[var(--primary-blue)]/20 shadow-xs">
                    <div className="w-3.5 h-3.5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center flex-shrink-0">
                      <Check className="w-2 h-2 stroke-[3]" />
                    </div>
                    <span className="leading-tight font-semibold text-[#0A1F6B]">{item.clickOnMedia}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Table Bottom Action Banner */}
          <div className="bg-gradient-to-r from-[#061448] via-[#0A1F6B] to-[#040E32] p-4 sm:p-5 text-white flex flex-col sm:flex-row items-center justify-between gap-3.5">
            <div className="space-y-0.5 text-center sm:text-left">
              <div className="text-xs sm:text-sm font-bold font-heading flex items-center justify-center sm:justify-start gap-1.5">
                <Award className="w-4 h-4 text-[var(--brand-orange)]" />
                <span>Zero Risk • 100% Milestone Satisfaction Guarantee</span>
              </div>
              <p className="text-[11px] sm:text-xs text-slate-300">
                You never pay for work until each sprint deliverable passes your review.
              </p>
            </div>

            <button
              onClick={() => onOpenQuote && onOpenQuote('The Transparency Standard')}
              className="btn-primary text-xs !py-2 !px-5 flex items-center gap-1.5 flex-shrink-0 shadow-lg cursor-pointer"
            >
              <span>Book Strategy Audit</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}

