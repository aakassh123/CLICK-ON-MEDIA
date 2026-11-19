import React from 'react';
import RevealHeading from './RevealHeading';
import { ArrowRight, Sparkles, ShieldCheck, MessageCircle, Star } from 'lucide-react';

export default function CtaBanner({ onOpenConsultation }) {
  return (
    <section className="relative py-14 sm:py-16 lg:py-20 bg-transparent overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Curved Card Container styled with Brand Colors */}
        <div className="relative rounded-3xl sm:rounded-[36px] overflow-hidden bg-gradient-to-br from-[#061448] via-[#0A1F6B] to-[#040E32] p-6 sm:p-12 lg:p-14 border border-[var(--cyan-accent)]/30 shadow-2xl shadow-[#0A1F6B]/30">
          
          {/* Ambient Lighting & Glows */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--brand-orange)]/20 rounded-full blur-3xl pointer-events-none -z-0" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-[var(--cyan-accent)]/20 rounded-full blur-3xl pointer-events-none -z-0" />
          
          {/* Subtle Dynamic Wave SVG on bottom right */}
          <div className="absolute -bottom-10 -right-10 w-96 h-48 opacity-25 pointer-events-none">
            <svg viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 100 C 100 20, 200 180, 400 100 L 400 200 L 0 200 Z" fill="url(#waveGradBrand)" />
              <defs>
                <linearGradient id="waveGradBrand" x1="0" y1="0" x2="1" y2="0">
                  <stop stopColor="#0B5CFF" />
                  <stop offset="0.5" stopColor="#FF7A00" />
                  <stop offset="1" stopColor="#FFB400" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          <div className="relative z-10 space-y-8">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Left Column: Headline */}
              <div className="lg:col-span-6 space-y-3">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-[var(--cyan-accent)] text-xs font-mono font-bold uppercase tracking-wider border border-white/15">
                  <Sparkles className="w-3.5 h-3.5 text-[var(--brand-orange)]" />
                  <span>Zero-Risk Guarantee</span>
                </div>
                <RevealHeading tag="h2" delay={120} direction="up" blur={true} className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-white tracking-tight leading-tight">
                  Ready to Build Your <br className="hidden sm:inline" />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00C8FF] via-[#FFB400] to-[#FF7A00]">
                    Digital Growth Machine?
                  </span>
                </RevealHeading>
              </div>

              {/* Middle Column: Description text */}
              <div className="lg:col-span-3 space-y-2">
                <p className="text-sm text-slate-200 font-normal leading-relaxed">
                  Book a free 30-minute growth strategy audit. We will review your current website, SEO rankings, and ad funnels with 100% transparent recommendations.
                </p>
                <div className="flex items-center gap-2 text-xs text-emerald-400 font-semibold">
                  <ShieldCheck className="w-4 h-4 flex-shrink-0" />
                  <span>No pushy sales calls • 100% Free Audit</span>
                </div>
              </div>

              {/* Right Column: CTA Buttons */}
              <div className="lg:col-span-3 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center lg:items-end">
                <button
                  onClick={onOpenConsultation}
                  className="btn-primary w-full inline-flex items-center justify-center gap-2.5 px-7 py-3.5 min-h-[48px] rounded-full text-white font-heading font-bold text-sm cursor-pointer group shadow-xl shadow-[var(--brand-orange)]/40 hover:scale-105 transition-all"
                >
                  <span>Book Free Strategy Audit</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>

                <a
                  href="https://wa.me/918303534063?text=Hi%20Click%20On%20Media,%20I%20would%20like%20to%20discuss%20a%20digital%20project."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 min-h-[44px] rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold text-xs border border-white/20 transition-all"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-400" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>

            </div>

            {/* Bottom Trust Indicators (Yes Madam Inspired) */}
            <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <span className="flex items-center gap-0.5 text-[var(--amber)]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[var(--amber)] text-[var(--amber)]" />
                  ))}
                </span>
                <span className="font-bold text-white">4.9/5 Overall Client Rating</span>
                <span className="text-white/40">• 150+ Happy Brands</span>
              </div>
              <div className="flex items-center gap-4 text-[11px] font-mono text-slate-400">
                <span>100% Code Ownership</span>
                <span>•</span>
                <span>Sub-14 Day Delivery</span>
                <span>•</span>
                <span>Dedicated Tech Lead</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
