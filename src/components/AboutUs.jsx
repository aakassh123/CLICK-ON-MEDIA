import React, { useState, useEffect, useRef } from 'react';
import RevealHeading from './RevealHeading';
import { 
  ArrowLeft, 
  ArrowRight, 
  Zap, 
  CheckCircle2, 
  ChevronRight, 
  Award, 
  Users, 
  Code2, 
  Search, 
  Globe, 
  FileText, 
  GraduationCap, 
  TrendingUp, 
  Sparkles, 
  Star, 
  ShieldCheck, 
  Layers, 
  CreditCard 
} from 'lucide-react';
import Logo from './Logo';

export default function AboutUs({ onOpenConsultation }) {
  const [activeStoryIndex, setActiveStoryIndex] = useState(0);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);
  const touchStartXRef = useRef(0);
  const touchEndXRef = useRef(0);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize, { passive: true });
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const coreCapabilities = [
    { icon: Code2, label: 'Custom Software Development' },
    { icon: CreditCard, label: 'Advanced Billing & POS' },
    { icon: GraduationCap, label: 'School & College ERP' },
    { icon: Globe, label: 'SEO-Friendly Web Development' },
    { icon: Search, label: 'Google Search & GMB Domination' },
    { icon: TrendingUp, label: 'Performance Ads & Social Growth' }
  ];
  const marqueeCapabilities = [...coreCapabilities, ...coreCapabilities, ...coreCapabilities, ...coreCapabilities];

  const storyCards = [
    {
      id: 1,
      badge: 'THE INCEPTION',
      badgeColor: 'bg-white/20 text-white',
      cardBg: 'bg-[#0B5CFF]', // Royal Blue from logo
      textColor: 'text-white',
      title: 'A long time ago in a spare room...',
      content: 'In 2019, Click On Media began with 2 laptops and an obsession: to eliminate generic agency bloat and engineer authentic, high-converting digital flagships for ambitious brands.',
      footerTag: '2 Laptops • 1 Relentless Vision'
    },
    {
      id: 2,
      badge: 'LEADERSHIP & MISSION',
      badgeColor: 'bg-white/25 text-white',
      cardBg: 'bg-[#FF7A00]', // Brand Orange from logo
      textColor: 'text-white',
      hasImage: true,
      imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80',
      title: 'Why Click On Media was Founded',
      content: 'Our leadership set up Click On Media after noticing a critical market gap: businesses were paying massive retainers for vanity impressions instead of real, measurable revenue.',
      footerTag: 'Relationship-Centric Growth'
    },
    {
      id: 3,
      badge: 'CLIENT IMPACT',
      badgeColor: 'bg-white/15 text-[var(--cyan-accent)]',
      cardBg: 'bg-[#0A1A4A]', // Deep Navy from logo
      textColor: 'text-white',
      title: 'Early Clients & Lasting Alliances',
      content: 'Early clients included healthcare leaders, regional retail flagships, and national startups — 98% of whom continue to scale their digital growth with us today.',
      footerTag: '150+ Projects • 80+ Retained Brands'
    },
    {
      id: 4,
      badge: 'TODAY & TOMORROW',
      badgeColor: 'bg-[var(--deep-navy)]/20 text-[var(--deep-navy)]',
      cardBg: 'bg-gradient-to-br from-[#00C8FF] to-[#0B5CFF]', // Cyan to Blue gradient
      textColor: 'text-white',
      title: 'A Full-Service Growth Machine',
      content: 'Today, our multidisciplinary squad of engineers, 3D brand designers, and performance marketers builds sub-second flagships and high-ROAS funnels across India.',
      footerTag: 'Sub-Second Speeds • Measurable ROI'
    }
  ];

  const handleNext = () => {
    setActiveStoryIndex((prev) => Math.min(storyCards.length - 1, prev + 1));
  };

  const handlePrev = () => {
    setActiveStoryIndex((prev) => Math.max(0, prev - 1));
  };

  // Touch swipe support for mobile devices
  const handleTouchStart = (e) => {
    touchStartXRef.current = e.touches[0].clientX;
    touchEndXRef.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndXRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const diff = touchStartXRef.current - touchEndXRef.current;
    if (Math.abs(diff) > 40) {
      if (diff > 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }
  };

  const stepSize = windowWidth < 640 ? 256 : 290;

  return (
    <section id="about" className="pt-6 sm:pt-8 lg:pt-10 pb-16 sm:pb-20 lg:pb-28 bg-transparent text-slate-800 relative overflow-hidden">
      
      {/* ========================================================================= */}
      {/* 1. BACKGROUND GEOMETRIC AMBIENCE MATCHING LOGO PALETTE                    */}
      {/* ========================================================================= */}
      {/* Large Ambient Orange Aura on Right */}
      <div 
        className="absolute -right-24 sm:-right-36 top-1/2 -translate-y-1/2 w-80 sm:w-96 md:w-[480px] h-80 sm:h-96 md:h-[480px] rounded-full bg-[var(--brand-orange)]/15 pointer-events-none opacity-90 z-0 blur-3xl"
        style={{ transform: 'translateZ(0)' }}
      />

      {/* Floating Brand Orange Dot on Bottom Left */}
      <div 
        className="absolute left-6 sm:left-12 bottom-8 sm:bottom-12 w-6 sm:w-8 h-6 sm:h-8 rounded-full bg-[var(--brand-orange)]/40 pointer-events-none z-0 shadow-lg"
        style={{ transform: 'translateZ(0)' }}
      />

      {/* Subtle Brand Glows in Center */}
      <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-[var(--primary-blue)]/10 rounded-full blur-[140px] pointer-events-none z-0" />

      {/* ========================================================================= */}
      {/* 2. MAIN ABOUT SECTION CONTENT                                             */}
      {/* ========================================================================= */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16 sm:space-y-24">
        
        {/* ------------------------------------------------------------------------- */}
        {/* SECTION HEADER & RECREATED EXECUTIVE OVERVIEW                             */}
        {/* ------------------------------------------------------------------------- */}
        <div className="text-center max-w-4xl mx-auto space-y-5">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-[var(--primary-blue)]/20 text-xs font-semibold text-[#0A1F6B] shadow-xs">
            <Sparkles className="w-4 h-4 text-[var(--brand-orange)]" />
            <span className="text-[var(--brand-orange)] uppercase tracking-wider text-[11px] font-bold">About Click On Media</span>
            <span className="text-slate-300">•</span>
            <span className="text-slate-600 font-medium">Premier IT &amp; Digital Growth Company in Gorakhpur</span>
          </div>

          <RevealHeading tag="h2" delay={100} direction="up" blur={true} className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0A1F6B] tracking-tight leading-[1.15] font-heading">
            Engineering Custom Software &amp; High-Speed Websites —{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0B5CFF] via-[#00C8FF] to-[#FF7A00]">
              Built for Measurable Business Growth
            </span>
          </RevealHeading>

          <RevealHeading tag="p" delay={200} direction="up" className="text-sm sm:text-base md:text-lg text-slate-600 font-normal leading-relaxed max-w-3xl mx-auto">
            Click On Media stands as Gorakhpur’s premier software development and full-stack digital marketing agency. We engineer custom cloud software, high-speed billing platforms, school ERPs, and SEO-engineered websites that streamline operations and accelerate qualified revenue. From bespoke cloud architecture to viral social campaigns and Google search domination, we deliver tailor-made technology with zero generic templates and 100% asset ownership.
          </RevealHeading>

          {/* Highlighted Moving Box: Core Service Capability Marquee */}
          <div className="w-full max-w-5xl mx-auto pt-3">
            <div className="relative rounded-2xl sm:rounded-3xl bg-gradient-to-r from-blue-50/95 via-white to-amber-50/90 p-2 sm:p-2.5 border border-blue-200/90 shadow-[0_8px_30px_rgba(11,92,255,0.08)] ring-1 ring-blue-500/15 overflow-hidden group/moving-box">
              
              {/* Subtle Ambient Glow inside Box */}
              <div className="absolute -top-10 left-1/4 w-48 h-20 bg-[var(--primary-blue)]/10 rounded-full blur-2xl pointer-events-none" />
              <div className="absolute -bottom-10 right-1/4 w-48 h-20 bg-[var(--brand-orange)]/10 rounded-full blur-2xl pointer-events-none" />

              <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3">
                
                {/* Left Highlight Pill Badge */}
                <div className="flex-shrink-0 flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-[#0A1F6B] via-[#0B5CFF] to-[#0A1F6B] text-white shadow-sm border border-white/20">
                  <span className="w-2 h-2 rounded-full bg-[var(--brand-orange)] shadow-[0_0_8px_#FF7A00] animate-pulse flex-shrink-0" />
                  <span className="text-[10px] sm:text-[11px] font-heading font-extrabold uppercase tracking-wider whitespace-nowrap">
                    Core Capabilities
                  </span>
                </div>

                {/* Moving Infinite Marquee Track with Soft Gradient Fade Edges */}
                <div className="w-full overflow-hidden relative py-0.5">
                  
                  {/* Left & Right Soft Fade Masks */}
                  <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-8 sm:w-16 bg-gradient-to-r from-white via-white/80 to-transparent z-10" />
                  <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-8 sm:w-16 bg-gradient-to-l from-white via-white/80 to-transparent z-10" />

                  {/* Infinite Moving Loop Track */}
                  <div className="animate-client-marquee flex items-center gap-2.5 sm:gap-3">
                    {marqueeCapabilities.map((pill, idx) => {
                      const Icon = pill.icon;
                      return (
                        <div 
                          key={idx}
                          className="flex-shrink-0 flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-slate-200/90 hover:border-[var(--brand-orange)] text-slate-800 hover:text-[#0A1F6B] shadow-2xs hover:shadow-md transition-all duration-300 hover:scale-105 group/pill cursor-pointer select-none"
                        >
                          <div className="w-5 h-5 rounded-full bg-blue-50 group-hover/pill:bg-orange-50 flex items-center justify-center text-[var(--primary-blue)] group-hover/pill:text-[var(--brand-orange)] transition-colors flex-shrink-0">
                            <Icon className="w-3 h-3" />
                          </div>
                          <span className="text-xs sm:text-[13px] font-bold font-heading whitespace-nowrap">
                            {pill.label}
                          </span>
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_6px_rgba(16,185,129,0.7)] flex-shrink-0" />
                        </div>
                      );
                    })}
                  </div>

                </div>

              </div>

            </div>
          </div>
        </div>

        {/* ------------------------------------------------------------------------- */}
        {/* STATS THAT MATTER — 4 KEY PILLARS                                         */}
        {/* ------------------------------------------------------------------------- */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {[
            {
              metric: '#1 Rated',
              label: 'IT Services Agency',
              sub: 'Top software company in Gorakhpur & Eastern UP',
              icon: Award,
              accent: 'from-[#0B5CFF]/10 to-[#0B5CFF]/5',
              border: 'border-[#0B5CFF]/25',
              textColor: 'text-[#0B5CFF]'
            },
            {
              metric: '250+',
              label: 'Global & Local Clients',
              sub: 'Businesses scaled across India and overseas',
              icon: Users,
              accent: 'from-[#FF7A00]/10 to-[#FF7A00]/5',
              border: 'border-[#FF7A00]/25',
              textColor: 'text-[#FF7A00]'
            },
            {
              metric: '9+ Years',
              label: 'Engineering Expertise',
              sub: 'Proven track record in high-load digital systems',
              icon: Zap,
              accent: 'from-[#0A1A4A]/10 to-[#0A1A4A]/5',
              border: 'border-[#0A1A4A]/20',
              textColor: 'text-[#0A1F6B]'
            },
            {
              metric: '4.9 / 5',
              label: 'Client Satisfaction',
              sub: '98% client retention rate year-over-year',
              icon: Star,
              accent: 'from-amber-500/10 to-amber-500/5',
              border: 'border-amber-400/30',
              textColor: 'text-amber-600'
            }
          ].map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div 
                key={idx}
                className={`p-5 sm:p-6 rounded-2xl bg-gradient-to-br ${stat.accent} bg-white/90 backdrop-blur-sm border ${stat.border} shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between`}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className={`p-2.5 rounded-xl bg-white shadow-xs ${stat.textColor}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Verified</span>
                </div>
                <div>
                  <div className={`text-2xl sm:text-3xl lg:text-4xl font-black font-heading tracking-tight ${stat.textColor}`}>
                    {stat.metric}
                  </div>
                  <div className="text-sm font-bold text-[#0A1F6B] mt-1">
                    {stat.label}
                  </div>
                  <p className="text-xs text-slate-500 mt-1 line-clamp-2">
                    {stat.sub}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* ------------------------------------------------------------------------- */}
        {/* WHY CHOOSE US? — 3 VALUE PILLARS                                          */}
        {/* ------------------------------------------------------------------------- */}
        <div className="space-y-6">
          <div className="text-center max-w-xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-widest text-[var(--brand-orange)]">Why Choose Click On Media?</span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0A1F6B] font-heading mt-1">
              Built on Modern Tech. Delivered with Absolute Integrity.
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1: 100% Customized Software */}
            <div className="p-6 sm:p-7 rounded-2xl sm:rounded-3xl bg-white border border-slate-200/80 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#0B5CFF]/10 text-[#0B5CFF] flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-[#0B5CFF] group-hover:text-white transition-all duration-300">
                  <Code2 className="w-6 h-6" />
                </div>
                <div className="inline-block px-2.5 py-0.5 rounded-full bg-blue-50 text-[11px] font-bold text-[#0B5CFF] uppercase tracking-wider mb-2">
                  Zero Generic Templates
                </div>
                <h4 className="text-xl font-bold text-[#0A1F6B] font-heading mb-2.5">
                  100% Customized Software
                </h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  We create tailored software solutions engineered around your exact business logic. No inflexible pre-made templates — from robust retail billing systems to school portals and cloud ERPs, we build modern, scalable architectures with full source code ownership.
                </p>
              </div>
              <ul className="mt-5 pt-4 border-t border-slate-100 space-y-2 text-xs font-medium text-slate-700">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Bespoke Billing &amp; Inventory Systems</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Modular School &amp; Institute ERP Portals</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Cloud Database &amp; Automated Backups</span>
                </li>
              </ul>
            </div>

            {/* Card 2: SEO-Friendly Websites */}
            <div className="p-6 sm:p-7 rounded-2xl sm:rounded-3xl bg-white border border-slate-200/80 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#FF7A00]/10 text-[var(--brand-orange)] flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-[var(--brand-orange)] group-hover:text-white transition-all duration-300">
                  <Search className="w-6 h-6" />
                </div>
                <div className="inline-block px-2.5 py-0.5 rounded-full bg-orange-50 text-[11px] font-bold text-[var(--brand-orange)] uppercase tracking-wider mb-2">
                  Sub-0.6s &amp; Top Rankings
                </div>
                <h4 className="text-xl font-bold text-[#0A1F6B] font-heading mb-2.5">
                  SEO-Engineered Fast Websites
                </h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  We design and develop lightning-fast websites engineered to dominate Google Search. Clean code, rich schema integration, mobile responsiveness, and high conversion rate optimization (CRO) ensure you attract continuous organic traffic and turn visitors into buyers.
                </p>
              </div>
              <ul className="mt-5 pt-4 border-t border-slate-100 space-y-2 text-xs font-medium text-slate-700">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Google Core Web Vitals 95+ Score</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Local SEO &amp; Google Business Profile Sync</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Conversion-Driven Visual UX Design</span>
                </li>
              </ul>
            </div>

            {/* Card 3: Affordable & Transparent */}
            <div className="p-6 sm:p-7 rounded-2xl sm:rounded-3xl bg-white border border-slate-200/80 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#0A1A4A]/10 text-[#0A1F6B] flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-[#0A1F6B] group-hover:text-white transition-all duration-300">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div className="inline-block px-2.5 py-0.5 rounded-full bg-indigo-50 text-[11px] font-bold text-[#0A1F6B] uppercase tracking-wider mb-2">
                  Maximum ROI for Any Budget
                </div>
                <h4 className="text-xl font-bold text-[#0A1F6B] font-heading mb-2.5">
                  Affordable &amp; Milestone-Based
                </h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Get enterprise-grade technology and growth marketing without bloated agency fees. We offer transparent, milestone-based pricing designed to deliver measurable ROI, so growing businesses in Gorakhpur and beyond can scale affordably without compromise.
                </p>
              </div>
              <ul className="mt-5 pt-4 border-t border-slate-100 space-y-2 text-xs font-medium text-slate-700">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>100% Transparent Milestone Deliverables</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Zero Hidden Retainers or Maintenance Traps</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Dedicated Post-Launch Warranty Support</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* ------------------------------------------------------------------------- */}
        {/* OUR STORY — CHRONICLE SHOWCASE                                            */}
        {/* ------------------------------------------------------------------------- */}
        <div className="rounded-3xl sm:rounded-[36px] overflow-hidden shadow-2xl border border-slate-200/90 bg-white grid grid-cols-1 lg:grid-cols-12 min-h-[520px]">
          
          {/* --------------------------------------------------------------------- */}
          {/* LEFT HALF: FULL-BLEED PHOTOGRAPHIC VISUAL ANCHOR (5 Cols)             */}
          {/* --------------------------------------------------------------------- */}
          <div className="lg:col-span-5 relative min-h-[380px] sm:min-h-[460px] lg:min-h-[520px] flex flex-col justify-end p-6 sm:p-8 lg:p-10 overflow-hidden group">
            
            {/* Background Photographic Scene: Team outdoor terrace collaboration (like reference) */}
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=75" 
              alt="Click On Media Team Collaboration in Gorakhpur, UP"
              className="absolute inset-0 w-full h-full object-cover object-center filter brightness-90 group-hover:scale-105 transition-transform duration-700 pointer-events-none"
              loading="lazy"
              decoding="async"
              width="800"
              height="520"
            />

            {/* Dark Scrim Vignette for 100% Text Legibility */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-black/20 pointer-events-none" />

            {/* Top Pill: Brand Identifier */}
            <div className="absolute top-6 left-6 z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-[11px] font-heading font-bold text-white shadow-lg">
                <span className="w-2 h-2 rounded-full bg-[var(--brand-orange)] animate-ping" />
                <span>CLICK ON MEDIA</span>
              </div>
            </div>

            {/* Bottom Content: "OUR STORY" & Narrative Tag */}
            <div className="relative z-10 space-y-3">
              <RevealHeading tag="h2" delay={120} direction="up" blur={true} className="text-3xl sm:text-4xl lg:text-5xl font-heading font-black text-white tracking-tight uppercase leading-none drop-shadow-md">
                OUR STORY
              </RevealHeading>

              <p className="text-xs sm:text-sm text-slate-200 font-medium leading-relaxed max-w-sm drop-shadow">
                HOW A 2-PERSON HUSTLE IN GORAKHPUR GREW INTO A FULL-SERVICE DIGITAL DOMINANCE MACHINE.
              </p>

              <div className="pt-2 flex items-center gap-3">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-[11px] font-bold text-white uppercase tracking-wider shadow-sm">
                  <span className="w-2 h-2 rounded-full bg-white" />
                  <span>THE FOUNDATION</span>
                </div>

                <button
                  onClick={onOpenConsultation}
                  className="text-xs font-bold text-[var(--cyan-accent)] hover:text-[var(--brand-orange)] transition-colors flex items-center gap-1 cursor-pointer"
                >
                  <span>Meet Us</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

          </div>

          {/* --------------------------------------------------------------------- */}
          {/* RIGHT HALF: HORIZONTAL STORY CHRONICLE CARDS SLIDER (7 Cols)          */}
          {/* --------------------------------------------------------------------- */}
          <div className="lg:col-span-7 bg-white text-[var(--text-dark)] p-6 sm:p-8 lg:p-10 flex flex-col justify-between overflow-hidden relative">
            
            {/* Top Bar inside White Panel */}
            <div className="flex items-center justify-between pb-4 border-b border-slate-100">
              <div>
                <span className="text-[10px] font-heading font-bold uppercase tracking-widest text-[var(--brand-orange)]">
                  CHRONICLE & MILESTONES
                </span>
                <div className="text-xs sm:text-sm font-bold text-[var(--deep-navy)] mt-0.5">
                  How We Scale Brands That Last
                </div>
              </div>

              {/* Progress Count */}
              <div className="font-mono text-xs font-bold text-slate-400 bg-slate-100 px-2.5 py-1 rounded-full">
                0{activeStoryIndex + 1} / 0{storyCards.length}
              </div>
            </div>

            {/* Sliding Cards Track with Mobile Touch Swipe */}
            <div 
              className="py-6 overflow-hidden relative select-none"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              <div 
                className="flex gap-4 sm:gap-5 transition-transform duration-500 ease-out will-change-transform"
                style={{
                  transform: `translateX(-${activeStoryIndex * stepSize}px)`
                }}
              >
                {storyCards.map((card, idx) => {
                  const isActive = idx === activeStoryIndex;
                  return (
                    <div
                      key={card.id}
                      onClick={() => setActiveStoryIndex(idx)}
                      className={`w-[240px] sm:w-[270px] min-h-[310px] sm:min-h-[330px] rounded-2xl p-5 sm:p-6 flex flex-col justify-between shadow-lg transition-all duration-300 flex-shrink-0 cursor-pointer ${card.cardBg} ${card.textColor} ${
                        isActive 
                          ? 'ring-2 ring-[var(--deep-navy)]/30 scale-[1.01] shadow-xl' 
                          : 'opacity-90 hover:opacity-100'
                      }`}
                    >
                      {/* Top Badge & Number */}
                      <div className="flex items-center justify-between">
                        <span className={`text-[9px] sm:text-[10px] font-heading font-bold uppercase tracking-wider px-2.5 py-1 rounded-full ${card.badgeColor}`}>
                          {card.badge}
                        </span>
                        <span className="font-mono text-xs font-bold opacity-75">
                          0{card.id}
                        </span>
                      </div>

                      {/* Card Content or Image */}
                      <div className="my-auto space-y-2.5 pt-2">
                        {card.hasImage && (
                          <div className="w-12 h-12 rounded-xl overflow-hidden border border-white/30 shadow-sm mb-2">
                            <img 
                              src={card.imageUrl} 
                              alt="Click On Media Founder" 
                              className="w-full h-full object-cover filter contrast-105"
                              loading="lazy"
                            />
                          </div>
                        )}

                        <h3 className="text-base sm:text-lg font-heading font-bold tracking-tight leading-snug">
                          {card.title}
                        </h3>

                        <p className="text-xs sm:text-[13px] leading-relaxed opacity-95 line-clamp-4">
                          {card.content}
                        </p>
                      </div>

                      {/* Card Bottom Tag */}
                      <div className="pt-3 border-t border-white/20 text-[10px] sm:text-[11px] font-semibold tracking-wide flex items-center justify-between opacity-90">
                        <span>{card.footerTag}</span>
                        <ChevronRight className="w-3.5 h-3.5 opacity-75" />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Bottom Controls Bar: Dots & Navigation Arrows */}
            <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
              
              {/* Pagination Dots */}
              <div className="flex items-center gap-1.5">
                {storyCards.map((_, dotIdx) => (
                  <button
                    key={dotIdx}
                    onClick={() => setActiveStoryIndex(dotIdx)}
                    className={`h-2 rounded-full transition-all cursor-pointer ${
                      dotIdx === activeStoryIndex 
                        ? 'w-6 bg-[var(--brand-orange)]' 
                        : 'w-2 bg-slate-200 hover:bg-slate-300'
                    }`}
                    aria-label={`Go to story slide ${dotIdx + 1}`}
                  />
                ))}
              </div>

              {/* Navigation Action Area */}
              <div className="flex items-center gap-3">
                <button
                  onClick={onOpenConsultation}
                  className="hidden sm:inline-flex text-xs font-bold text-[var(--primary-blue)] hover:text-[var(--brand-orange)] transition-colors cursor-pointer"
                >
                  <span>Talk with Founders →</span>
                </button>

                {/* Left Arrow */}
                <button
                  onClick={handlePrev}
                  disabled={activeStoryIndex === 0}
                  className={`w-9 h-9 rounded-full border flex items-center justify-center transition-all cursor-pointer ${
                    activeStoryIndex === 0 
                      ? 'border-slate-200 text-slate-300 cursor-not-allowed opacity-50' 
                      : 'border-slate-300 text-slate-700 hover:border-[var(--brand-orange)] hover:text-[var(--brand-orange)] hover:scale-105 active:scale-95 shadow-xs'
                  }`}
                  aria-label="Previous story slide"
                >
                  <ArrowLeft className="w-4 h-4" />
                </button>

                {/* Right Arrow */}
                <button
                  onClick={handleNext}
                  disabled={activeStoryIndex === storyCards.length - 1}
                  className={`w-9 h-9 rounded-full border flex items-center justify-center transition-all cursor-pointer ${
                    activeStoryIndex === storyCards.length - 1 
                      ? 'border-slate-200 text-slate-300 cursor-not-allowed opacity-50' 
                      : 'border-slate-300 text-slate-700 hover:border-[var(--brand-orange)] hover:text-[var(--brand-orange)] hover:scale-105 active:scale-95 shadow-xs'
                  }`}
                  aria-label="Next story slide"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
