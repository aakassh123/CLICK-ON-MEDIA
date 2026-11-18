import React, { useState } from 'react';
import RevealHeading from './RevealHeading';
import { 
  MapPin, 
  Navigation, 
  Phone, 
  MessageCircle, 
  ShieldCheck, 
  Star, 
  Sparkles, 
  ChevronDown, 
  ChevronUp, 
  CheckCircle2, 
  ArrowRight,
  Globe2,
  TrendingUp,
  Award,
  Video
} from 'lucide-react';

export default function LocalAuthoritySection({ onOpenQuote }) {
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  const localFaqs = [
    {
      q: 'Why is Click On Media considered the best digital marketing agency in Gorakhpur?',
      a: 'Click On Media is headquartered in Mohaddipur, Gorakhpur, and delivers comprehensive 360-degree digital solutions: custom React/Next.js websites with sub-0.6s loading speeds, high-ROAS Google & Meta ad funnels, #1 Local SEO rankings, cinematic 4K viral reels shoot, and bespoke software development. With 150+ delivered projects and a 4.9/5 client rating, we combine global technical standards with deep local market insight.'
    },
    {
      q: 'How does Click On Media help Gorakhpur businesses rank #1 on Google Search & Google Maps?',
      a: 'We implement advanced localized SEO architectures: technical core web vitals hardening, local citation building, Google Business Profile (GBP) map pack domination, geo-tagged schema markup, and high-intent local commercial keyword ranking across Gorakhpur (Golghar, Civil Lines, Medical College Road, Taramandal, Mohaddipur) and neighboring Uttar Pradesh districts.'
    },
    {
      q: 'How much does website development or SEO services cost in Gorakhpur?',
      a: 'Unlike agencies with hidden retainers, Click On Media operates on 100% transparent milestone pricing with zero surprise charges. We provide customized packages tailored to individual business goals — from high-converting local landing pages and business websites to enterprise cloud portals and monthly SEO growth sprints. All quotes include 100% intellectual property and source code ownership.'
    },
    {
      q: 'Do you offer on-site video shoots and Instagram reels production in Gorakhpur?',
      a: 'Yes! Our in-house Gorakhpur production team visits your business premises, clinic, showroom, hotel, or factory with cinema 4K cameras, professional studio lighting, and wireless audio gear to shoot high-retention 9:16 vertical reels and brand commercials designed for viral organic reach.'
    },
    {
      q: 'Where is your Gorakhpur office located and can we visit for a consultation?',
      a: 'Our head office is conveniently located at Near Adalat Restaurant, Pipal Dada, Shri Ganga Tiraha, Mohaddipur, Gorakhpur, Uttar Pradesh 273008. You can visit us Monday through Saturday from 9:00 AM to 8:00 PM, or schedule a free 30-minute growth strategy consultation with our founders.'
    }
  ];

  const localAreas = [
    'Mohaddipur',
    'Golghar',
    'Civil Lines',
    'Medical College Road',
    'Taramandal',
    'Rapti Nagar',
    'Betiahata',
    'Asuran',
    'Cantt',
    'GIDA Industrial Area',
    'Transport Nagar',
    'Shahpur'
  ];

  const regionalDistricts = [
    'Gorakhpur',
    'Lucknow',
    'Varanasi',
    'Ayodhya',
    'Prayagraj',
    'Deoria',
    'Kushinagar',
    'Basti',
    'Maharajganj',
    'Siddharthnagar'
  ];

  return (
    <section 
      id="local-seo-hub"
      className="py-16 sm:py-20 lg:py-24 bg-transparent text-slate-800 relative overflow-hidden border-t border-slate-200/60"
    >
      {/* Background Soft Ambient Light */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-[var(--primary-blue)]/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[var(--brand-orange)]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ===================================================================== */}
        {/* 1. SECTION HEADER (Clear Gorakhpur & UP Positioning)                  */}
        {/* ===================================================================== */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[var(--primary-blue)]/20 text-xs font-semibold text-[#0A1F6B] shadow-xs">
            <MapPin className="w-4 h-4 text-[var(--brand-orange)]" />
            <span className="text-[var(--brand-orange)] uppercase tracking-wider text-[11px] font-bold">Gorakhpur Headquarters</span>
            <span className="text-slate-400">• Serving All of Uttar Pradesh</span>
          </div>

          <RevealHeading tag="h2" delay={120} direction="up" blur={true} className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0A1F6B] tracking-tight leading-tight font-heading">
            Gorakhpur&apos;s #1 Digital Agency &amp;{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0B5CFF] via-[#00C8FF] to-[#FF7A00]">
              Technology Partner
            </span>
          </RevealHeading>

          <RevealHeading tag="p" delay={220} direction="up" className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
            Headquartered in Mohaddipur, Gorakhpur, Click On Media engineers high-speed web solutions, ROI-focused ad campaigns, and dominant SEO architectures for premier businesses across Eastern and Central Uttar Pradesh.
          </RevealHeading>
        </div>

        {/* ===================================================================== */}
        {/* 2. THREE-PILLAR LOCAL AUTHORITY CARDS                                  */}
        {/* ===================================================================== */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
          
          {/* Card 1: Local Office & Contact */}
          <div className="rounded-3xl bg-white/95 backdrop-blur-xl border border-slate-200/90 p-6 sm:p-7 shadow-lg flex flex-col justify-between space-y-4 hover:shadow-xl transition-shadow">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-2xl bg-[var(--primary-blue)]/10 text-[var(--primary-blue)] flex items-center justify-center">
                <Navigation className="w-5 h-5 text-[var(--primary-blue)]" />
              </div>
              <h3 className="text-lg sm:text-xl font-heading font-extrabold text-[#0A1F6B]">
                Visit Our Office
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Near Adalat Restaurant, Pipal Dada, Shri Ganga Tiraha, Mohaddipur, Gorakhpur, Uttar Pradesh 273008
              </p>
              <div className="pt-1 flex items-center gap-1.5 text-xs text-emerald-600 font-semibold">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Open Mon–Sat: 9:00 AM – 8:00 PM</span>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-center gap-3">
              <a
                href="https://maps.google.com/?q=26.7538,83.3912"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary !py-2.5 !px-4 text-xs font-bold w-full justify-center flex items-center gap-1.5 shadow-md"
              >
                <MapPin className="w-3.5 h-3.5" />
                <span>Get Google Maps Directions</span>
              </a>
            </div>
          </div>

          {/* Card 2: Local Micro-Localities Covered */}
          <div className="rounded-3xl bg-white/95 backdrop-blur-xl border border-slate-200/90 p-6 sm:p-7 shadow-lg flex flex-col justify-between space-y-4 hover:shadow-xl transition-shadow">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-2xl bg-[var(--brand-orange)]/10 text-[var(--brand-orange)] flex items-center justify-center">
                <Globe2 className="w-5 h-5 text-[var(--brand-orange)]" />
              </div>
              <h3 className="text-lg sm:text-xl font-heading font-extrabold text-[#0A1F6B]">
                Gorakhpur Localities
              </h3>
              <p className="text-xs text-slate-500">
                Active client partnerships &amp; localized Google search rankings in:
              </p>
              <div className="flex flex-wrap gap-1.5 pt-1">
                {localAreas.map((area, idx) => (
                  <span
                    key={idx}
                    className="text-[11px] font-medium px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200/70"
                  >
                    📍 {area}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-3 border-t border-slate-100 text-xs text-slate-500 font-medium flex items-center gap-1">
              <ShieldCheck className="w-4 h-4 text-emerald-500 flex-shrink-0" />
              <span>Dedicated Local Field Strategists</span>
            </div>
          </div>

          {/* Card 3: Regional Uttar Pradesh Footprint */}
          <div className="rounded-3xl bg-white/95 backdrop-blur-xl border border-slate-200/90 p-6 sm:p-7 shadow-lg flex flex-col justify-between space-y-4 hover:shadow-xl transition-shadow">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-[#0B5CFF] to-[#FF7A00] text-white flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-heading font-extrabold text-[#0A1F6B]">
                Pan-UP Regional Scale
              </h3>
              <p className="text-xs text-slate-500">
                Engineering digital dominance for businesses across Uttar Pradesh:
              </p>
              <div className="flex flex-wrap gap-1.5 pt-1">
                {regionalDistricts.map((district, idx) => (
                  <span
                    key={idx}
                    className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-orange-50 text-[var(--brand-orange)] border border-orange-200/60"
                  >
                    ⚡ {district}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
              <span className="font-bold text-[#0A1F6B]">150+ UP Projects Delivered</span>
              <span className="flex items-center text-[var(--amber)] font-bold">
                <Star className="w-3.5 h-3.5 fill-[var(--amber)]" /> 4.9/5
              </span>
            </div>
          </div>

        </div>

        {/* ===================================================================== */}
        {/* 3. INTERACTIVE LOCAL SEO FAQS ACCORDION (Rich Google Snippet Boost)   */}
        {/* ===================================================================== */}
        <div className="rounded-3xl sm:rounded-[36px] bg-white/95 backdrop-blur-2xl border border-slate-200/90 shadow-xl p-6 sm:p-10">
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-200/90 mb-6">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-[var(--primary-blue)] uppercase tracking-wider mb-1">
                <Sparkles className="w-3.5 h-3.5 text-[var(--brand-orange)]" />
                <span>Frequently Asked Questions</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-heading font-extrabold text-[#0A1F6B]">
                Questions About Digital Growth in Gorakhpur
              </h3>
            </div>

            <button
              onClick={() => onOpenQuote && onOpenQuote('Local SEO Strategy')}
              className="btn-secondary !py-2.5 !px-5 text-xs font-bold font-heading self-start md:self-auto"
            >
              Ask Our Experts
            </button>
          </div>

          <div className="space-y-3">
            {localFaqs.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={idx}
                  className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                    isOpen 
                      ? 'bg-slate-50/90 border-[var(--primary-blue)]/40 shadow-xs' 
                      : 'bg-white border-slate-200/80 hover:border-slate-300'
                  }`}
                >
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? -1 : idx)}
                    className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 cursor-pointer"
                    aria-expanded={isOpen}
                  >
                    <span className="text-sm sm:text-base font-heading font-bold text-[#0A1F6B] leading-snug">
                      {faq.q}
                    </span>
                    <div className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 transition-transform ${
                      isOpen ? 'bg-[var(--brand-orange)] text-white rotate-180' : 'bg-slate-100 text-slate-600'
                    }`}>
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-4 pb-5 sm:px-5 sm:pb-6 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-200/50 pt-3 animate-in fade-in-50 duration-200">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Quick Support Callout on Bottom */}
          <div className="mt-8 pt-6 border-t border-slate-200/90 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-600">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
              <span>Looking for urgent assistance? Speak directly with our founders today.</span>
            </div>
            <div className="flex items-center gap-3">
              <a 
                href="tel:+918303534063"
                className="flex items-center gap-1.5 font-mono font-bold text-[#0A1F6B] hover:text-[var(--brand-orange)] transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[var(--brand-orange)]" />
                <span>+91 83035 34063</span>
              </a>
              <span className="text-slate-300">•</span>
              <a 
                href="https://wa.me/918303534063"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 font-bold text-emerald-600 hover:text-emerald-700 transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>WhatsApp Us</span>
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
