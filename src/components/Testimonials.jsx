import React, { useState } from 'react';
import RevealHeading from './RevealHeading';
import { Star, ShieldCheck, Quote, ChevronLeft, ChevronRight, TrendingUp, CheckCircle2, ArrowRight } from 'lucide-react';

export default function Testimonials({ onOpenQuote }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const reviews = [
    {
      id: 1,
      name: 'Vikramaditya Singhania',
      role: 'Founder & CEO',
      company: 'Apex Ortho Hospital & Spine Care',
      category: 'Healthcare & Multispecialty',
      metric: '+340% Inbound Calls',
      metricDetail: 'Ranked #1 on Google Maps',
      rating: 5,
      content: 'Click On Media transformed our entire digital presence. Within 60 days of launching our new React website and localized SEO dominance campaign, our direct patient inquiries tripled. Zero fluff, 100% transparent reporting.',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
      verified: true
    },
    {
      id: 2,
      name: 'Pooja Agarwal',
      role: 'Managing Director',
      company: 'The Royal Heritage Resort & Villas',
      category: 'Luxury Hospitality & Resorts',
      metric: '₹48 Lakhs Direct Revenue',
      metricDetail: '0% OTA Middleman Commission',
      rating: 5,
      content: 'We used to lose 18-22% of our booking revenue to OTAs like MakeMyTrip. Click On Media built a lightning-fast direct booking engine and Instagram funnel that shifted 65% of all bookings directly to our website!',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80',
      verified: true
    },
    {
      id: 3,
      name: 'Rohan Deshmukh',
      role: 'Co-Founder & CTO',
      company: 'QuantLogix Supply Chain SaaS',
      category: 'B2B Cloud Software',
      metric: '4.2x ROAS Scaling',
      metricDetail: 'Sub-0.5s Global Dashboard Load',
      rating: 5,
      content: 'Unlike typical agencies who outsource work to interns, Click On Media’s senior engineers built our complex multi-tenant SaaS dashboard in just 4 weeks. Their code quality, security audits, and Google Ads funnels exceeded expectations.',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
      verified: true
    },
    {
      id: 4,
      name: 'Ananya Sharma',
      role: 'Head of Growth',
      company: 'Velour Couture & Lifestyle',
      category: 'D2C Fashion & E-Commerce',
      metric: '10M+ Video Views',
      metricDetail: '52,000+ New Instagram Buyers',
      rating: 5,
      content: 'Their 9:16 vertical video production and conversion ad scripts are pure genius. Click On Media doesn’t just make pretty reels—they make videos that actually sell inventory within 24 hours of dropping.',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80',
      verified: true
    }
  ];

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % reviews.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-transparent text-slate-800 relative overflow-hidden border-t border-slate-200/60">
      
      {/* Background Lighting */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-[var(--primary-blue)]/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[var(--brand-orange)]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header Encased in Frosted Glass Island */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 sm:mb-10 p-6 sm:p-8 rounded-3xl bg-white/95 backdrop-blur-xl border border-slate-200/90 shadow-md">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-50 border border-[var(--primary-blue)]/20 text-xs font-semibold text-[#0A1F6B] shadow-xs">
              <Star className="w-3.5 h-3.5 fill-[var(--amber)] text-[var(--amber)]" />
              <span className="text-[var(--brand-orange)] uppercase tracking-wider text-[11px] font-bold">Verified Client Reviews</span>
              <span className="text-slate-500">• 4.9/5 Overall Rating</span>
            </div>

            <RevealHeading tag="h2" delay={120} direction="up" blur={true} className="text-2xl sm:text-4xl lg:text-5xl font-black text-[#0A1F6B] tracking-tight leading-tight font-heading">
              Real Businesses.{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0B5CFF] via-[#00C8FF] to-[#FF7A00]">
                Measurable Growth.
              </span>
            </RevealHeading>

            <p className="text-xs sm:text-sm md:text-base text-slate-700 font-medium leading-relaxed">
              Read how ambitious founders and marketing leaders scaled revenue, dominated search rankings, and crushed their CAC targets with Click On Media.
            </p>
          </div>

          {/* Carousel Arrows */}
          <div className="flex items-center gap-2 self-start md:self-end">
            <button
              onClick={handlePrev}
              title="Previous Review"
              className="w-10 h-10 rounded-full bg-white hover:bg-[var(--brand-orange)] hover:text-white border border-slate-200 text-[#0A1F6B] flex items-center justify-center shadow-sm transition-all hover:scale-105 active:scale-95 cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              title="Next Review"
              className="w-10 h-10 rounded-full bg-white hover:bg-[var(--brand-orange)] hover:text-white border border-slate-200 text-[#0A1F6B] flex items-center justify-center shadow-sm transition-all hover:scale-105 active:scale-95 cursor-pointer"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Reviews Grid Cards (Yes Madam Style) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((rev, idx) => {
            const isActive = activeIndex === idx;
            return (
              <div
                key={rev.id}
                onClick={() => setActiveIndex(idx)}
                className={`rounded-3xl p-6 transition-all duration-300 flex flex-col justify-between cursor-pointer border ${
                  isActive
                    ? 'bg-white/95 backdrop-blur-2xl border-[var(--brand-orange)]/60 shadow-xl ring-2 ring-[var(--brand-orange)]/30 -translate-y-1'
                    : 'bg-white/80 backdrop-blur-md border-slate-200/90 shadow-sm hover:border-slate-300 hover:shadow-md'
                }`}
              >
                <div className="space-y-4">
                  {/* Top Row: Stars + Category */}
                  <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                    <div className="flex items-center gap-1">
                      {[...Array(rev.rating)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-[var(--amber)] text-[var(--amber)]" />
                      ))}
                    </div>
                    <span className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-wider">
                      {rev.category}
                    </span>
                  </div>

                  {/* Measurable Impact Badge (Yes Madam Style) */}
                  <div className="p-3 rounded-2xl bg-gradient-to-r from-blue-50 to-orange-50 border border-slate-200/80 space-y-0.5">
                    <div className="flex items-center gap-1.5 text-xs font-black text-[#0A1F6B] font-heading">
                      <TrendingUp className="w-3.5 h-3.5 text-[var(--brand-orange)]" />
                      <span>{rev.metric}</span>
                    </div>
                    <span className="text-[10px] text-slate-600 font-medium block">
                      {rev.metricDetail}
                    </span>
                  </div>

                  {/* Review Quote */}
                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    "{rev.content}"
                  </p>
                </div>

                {/* Reviewer Profile */}
                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center gap-3">
                  <img
                    src={rev.avatar}
                    alt={`${rev.name} - ${rev.company} Review for Click On Media`}
                    className="w-10 h-10 rounded-full object-cover border border-slate-200"
                    loading="lazy"
                  />
                  <div className="min-w-0">
                    <div className="flex items-center gap-1">
                      <span className="text-xs font-bold text-slate-900 truncate font-heading">{rev.name}</span>
                      {rev.verified && (
                        <ShieldCheck className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0" title="Verified Client" />
                      )}
                    </div>
                    <span className="text-[10px] text-slate-500 block truncate">{rev.role}, {rev.company}</span>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Section Bottom Trust Callout */}
        <div className="mt-12 text-center">
          <div className="inline-flex flex-wrap items-center justify-center gap-3 px-6 py-3 rounded-full bg-white border border-slate-200/90 shadow-sm text-xs font-semibold text-slate-700">
            <span className="flex items-center gap-1 text-emerald-600 font-bold">
              <CheckCircle2 className="w-4 h-4" /> 150+ Verified Client Engagements
            </span>
            <span className="text-slate-300">|</span>
            <span className="flex items-center gap-1 text-[#0A1F6B] font-bold">
              ★ 4.9/5 Average Satisfaction Rating
            </span>
            <span className="text-slate-300">|</span>
            <button
              onClick={() => onOpenQuote && onOpenQuote('Client Testimonials')}
              className="text-[var(--brand-orange)] hover:underline font-bold flex items-center gap-1 cursor-pointer"
            >
              <span>Join Them Today</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}

