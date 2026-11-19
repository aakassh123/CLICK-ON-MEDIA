import React, { useRef } from 'react';
import RevealHeading from './RevealHeading';
import {
  ArrowRight,
  Zap,
  FolderCheck,
  Users,
  Award,
  TrendingUp,
  Sparkles,
  CheckCircle2,
  ShieldCheck,
  Star
} from 'lucide-react';

export default function Hero({ onOpenQuote, onOpenVideo, onSelectService }) {
  const sectionRef = useRef(null);

  const stats = [
    { value: '150+', label: 'Projects Delivered', icon: FolderCheck },
    { value: '80+', label: 'Happy Clients', icon: Users },
    { value: '5+', label: 'Years Experience', icon: Award },
    { value: '98%', label: 'Client Satisfaction', icon: TrendingUp },
  ];

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative pt-24 pb-14 md:pt-32 md:pb-18 lg:pt-36 lg:pb-24 overflow-hidden bg-transparent"
      style={{ contain: 'layout paint' }}
    >

      {/* GlobalScrollVideo provides the cinematic full-bleed scroll-driven video canvas behind Hero and all sections */}

      {/* ========================================================================= */}
      {/* 2. HERO FOREGROUND CONTENT: PREMIUM WHITE HIGH-CONTRAST READABILITY        */}
      {/* ========================================================================= */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">

          {/* Left Column: Headline, Copy, Action CTAs & Proof Stats */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-7 text-left">

            {/* Pill Tag with Brand Colors & Gorakhpur Regional Authority */}
            <div className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-[var(--primary-blue)]/30 text-[11px] xs:text-xs sm:text-sm font-semibold text-[var(--deep-navy)] shadow-xs">
              <span className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-[var(--brand-orange)]/15 flex items-center justify-center text-[var(--brand-orange)] flex-shrink-0">
                <Zap className="w-3 sm:w-3.5 h-3 sm:h-3.5 fill-[var(--brand-orange)]" />
              </span>
              <span className="font-heading font-semibold tracking-wide hidden xs:inline">
                #1 Digital Marketing &amp; Web Agency in Gorakhpur, UP
              </span>
              <span className="font-heading font-semibold tracking-wide xs:hidden">
                #1 Digital &amp; Web Agency in Gorakhpur
              </span>
            </div>

            {/* Main Single H1 with Logo Colors (Deep Logo Blue + Vibrant Brand Gradient) */}
            <RevealHeading tag="h1" delay={150} direction="up" blur={true} className="text-[26px] xs:text-3xl sm:text-5xl md:text-6xl font-extrabold text-[#0A1F6B] tracking-tight leading-[1.14] font-heading">
              We Build Digital Experiences That Drive{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0B5CFF] via-[#00C8FF] to-[#FF7A00]">
                Real Growth
              </span>
            </RevealHeading>

            {/* Subtitle with High-Contrast Legibility & Rich Dark Text */}
            <RevealHeading tag="p" delay={250} direction="up" className="text-sm sm:text-base md:text-lg text-[#071133] font-bold leading-relaxed max-w-2xl drop-shadow-[0_1px_2px_rgba(255,255,255,0.95)]">
              Gorakhpur&apos;s premier digital agency for high-converting websites, custom software, Google Ads, localized SEO, viral reels &amp; data-driven marketing. We scale ambitious businesses across Gorakhpur and Uttar Pradesh with guaranteed ROI.
            </RevealHeading>

            {/* Action Button: Primary Orange Gradient */}
            <div className="flex flex-col xs:flex-row items-stretch xs:items-center gap-3 sm:gap-4 pt-1">
              <button
                onClick={onOpenQuote}
                className="btn-primary text-xs sm:text-base !py-3 sm:!py-3.5 !px-6 sm:!px-8 group justify-center shadow-[0_4px_24px_rgba(255,122,0,0.4)] hover:shadow-[0_6px_32px_rgba(255,122,0,0.6)]"
              >
                <span>Start Your Project</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>

            {/* Metrics & Proof Stats (Clean White Frosted Card with Mobile Precision) */}
            <div className="pt-6">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-4 p-3.5 sm:p-5 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200/90 shadow-xl">
                {stats.map((stat, idx) => {
                  const IconComponent = stat.icon;
                  return (
                    <div key={idx} className="space-y-1">
                      <div className="flex items-center gap-2">
                        <IconComponent className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-[var(--brand-orange)] flex-shrink-0" />
                        <span className="text-xl xs:text-2xl sm:text-3xl font-extrabold text-[#0A1F6B] tracking-tight font-heading">
                          {stat.value}
                        </span>
                      </div>
                      <p className="text-[11px] sm:text-[13px] font-medium text-slate-600">
                        {stat.label}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Right Column: Premium Futuristic Showcase Card (Clean Hand & Glass) */}
          <div className="lg:col-span-5 relative flex flex-col items-center justify-center pt-6 lg:pt-0">

            {/* Ambient Platform Glow under Showcase */}
            <div
              className="absolute -bottom-8 w-3/4 h-24 bg-gradient-to-r from-[var(--cyan-accent)]/35 via-[var(--brand-orange)]/30 to-[var(--amber)]/20 rounded-full blur-2xl pointer-events-none"
              style={{ transform: 'translateZ(0)' }}
            />

            {/* 3D Modern Glass Showcase Chassis */}
            <div className="relative w-full max-w-[280px] xs:max-w-[330px] sm:max-w-[370px] lg:max-w-[390px] xl:max-w-[420px] aspect-[796/1024] mx-auto transition-transform duration-500 hover:scale-[1.01]">

              {/* Outer Premium White Glass Chassis */}
              <div className="relative w-full h-full rounded-[30px] sm:rounded-[38px] p-2 sm:p-2.5 bg-white/95 backdrop-blur-2xl border border-slate-200/90 shadow-[0_25px_65px_-15px_rgba(10,31,107,0.18)] flex flex-col justify-between overflow-hidden group">

                {/* Screen Showcase Container with Black Robotic Hand holding Transparent Glass */}
                <div
                  onClick={onOpenQuote}
                  className="relative w-full h-full rounded-[24px] sm:rounded-[30px] overflow-hidden bg-white flex items-center justify-center cursor-pointer shadow-inner"
                >
                  <img
                    src="./hero-hand-showcase.jpg?v=seo_web_soft_mktg"
                    alt="Click On Media - SEO, Website Development, Software Development, Marketing Showcase"
                    className="w-full h-full object-cover object-center filter brightness-102 contrast-102 transition-transform duration-700 group-hover:scale-105 pointer-events-none"
                    loading="eager"
                  />
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
