import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function CtaBanner({ onOpenConsultation }) {
  return (
    <section className="relative py-14 sm:py-16 lg:py-20 bg-[var(--bg-soft)] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Curved Card Container styled with Brand Colors */}
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[var(--deep-navy)] via-[#0d2374] to-[var(--deep-navy)] p-8 sm:p-12 lg:p-14 border border-[var(--cyan-accent)]/30 shadow-2xl shadow-[var(--deep-navy)]/30">
          
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

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column: Headline */}
            <div className="lg:col-span-5">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-white tracking-tight leading-tight">
                Let's Build Something <br className="hidden sm:inline" />
                <span className="text-transparent bg-clip-text bg-[var(--grad-orange)]">
                  Great Together
                </span>
              </h2>
            </div>

            {/* Middle Column: Description text */}
            <div className="lg:col-span-4">
              <p className="text-sm sm:text-base text-slate-200 font-normal leading-relaxed">
                Have a project in mind? Let's discuss how Click On Media can help you achieve your business goals with custom engineering and growth marketing.
              </p>
            </div>

            {/* Right Column: CTA Button */}
            <div className="lg:col-span-3 flex lg:justify-end">
              <button
                onClick={onOpenConsultation}
                className="btn-primary w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 min-h-[48px] rounded-full text-white font-heading font-bold text-sm sm:text-base cursor-pointer group shadow-xl shadow-[var(--brand-orange)]/35"
              >
                <span>Get a Free Consultation</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
