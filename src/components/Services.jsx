import React, { useState, useEffect, useRef, useMemo } from 'react';
import { 
  ArrowRight, 
  ArrowLeft,
  CheckCircle2, 
  LayoutGrid,
  Globe,
  Code2,
  Megaphone,
  Search,
  Palette,
  Film,
  ExternalLink,
  ChevronRight,
  RotateCw,
  Sparkles,
  Zap,
  TrendingUp,
  ShieldCheck,
  Play,
  Pause
} from 'lucide-react';

export default function Services({ onSelectService, onOpenQuote }) {
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const [viewMode, setViewMode] = useState('orbit'); // 'orbit' | 'grid'
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== 'undefined' ? window.innerWidth : 1200
  );

  const autoPlayTimerRef = useRef(null);
  const touchStartXRef = useRef(0);
  const touchEndXRef = useRef(0);

  // Responsive resize listener
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // 6 Core Click On Media Services with Prominent "Kya Kya Benefits Milega" Details
  const services = useMemo(() => [
    {
      id: 'web-dev',
      number: '01',
      title: 'Website Development',
      badge: 'Web Architecture',
      tagline: 'High-converting, lightning-fast digital flagships.',
      description: 'We engineer custom React & Next.js websites built for speed, sub-second page loads, and seamless customer conversions.',
      accent: 'from-[var(--primary-blue)] to-[var(--deep-navy)]',
      tagBg: 'bg-[var(--primary-blue)]/10 text-[var(--primary-blue)] border-[var(--primary-blue)]/20',
      glowColor: 'rgba(11, 92, 255, 0.25)',
      icon: Globe,
      // "Kya Kya Benefits Milega" (Direct Business Benefits)
      benefits: [
        'Sub-0.6s Page Load Times (Zero bounce on mobile 4G/5G)',
        '0% OTA / Middleman Commission Leakage (Direct sales)',
        '100/100 Core Web Vitals & Mobile-First UX Precision',
        'Headless Cloud CMS for effortless content updates'
      ],
      metrics: '0.6s Avg Load Time',
      metricDetail: '100/100 Core Vitals',
      ctaText: 'Explore Web Solutions'
    },
    {
      id: 'software-dev',
      number: '02',
      title: 'Software & App Development',
      badge: 'Cloud & Mobile',
      tagline: 'Custom cloud software and mobile apps built to scale.',
      description: 'Tailor-made cloud software, cross-platform iOS & Android mobile applications, and automated enterprise systems built for effortless scale.',
      accent: 'from-[var(--brand-orange)] to-[var(--amber)]',
      tagBg: 'bg-[var(--brand-orange)]/10 text-[var(--brand-orange)] border-[var(--brand-orange)]/20',
      glowColor: 'rgba(255, 122, 0, 0.25)',
      icon: Code2,
      // "Kya Kya Benefits Milega"
      benefits: [
        'Single Codebase iOS & Android (Save 50% dev cost & time)',
        'Automated Business Workflows (Save 20+ team hrs/week)',
        '99.98% High Uptime Cloud (Zero crashes during traffic peaks)',
        'Bank-Grade Security with end-to-end encrypted APIs'
      ],
      metrics: '99.98% High Uptime',
      metricDetail: '18ms Latency',
      ctaText: 'Explore App Solutions'
    },
    {
      id: 'marketing',
      number: '03',
      title: 'Digital Marketing & Ads',
      badge: 'Growth Engine',
      tagline: 'Data-driven ad campaigns that bring real buyers.',
      description: 'Precision Meta & Google ad funnels engineered to drive high-intent leads and profitable direct revenue with measurable ROAS.',
      accent: 'from-[var(--primary-blue)] to-[var(--brand-orange)]',
      tagBg: 'bg-[var(--primary-blue)]/10 text-[var(--primary-blue)] border-[var(--primary-blue)]/20',
      glowColor: 'rgba(11, 92, 255, 0.25)',
      icon: Megaphone,
      // "Kya Kya Benefits Milega"
      benefits: [
        '3.8x+ Average ROAS (Profitable return on every ad rupee)',
        'Lowest Customer Acquisition Cost (Zero wasted bot clicks)',
        'Hyper-Local & Pan-India Precision Target Funnels',
        '100% Transparent Attribution Dashboard with live leads'
      ],
      metrics: '3.8x+ Avg ROAS',
      metricDetail: '+284% Scaling',
      ctaText: 'Explore Marketing Funnels'
    },
    {
      id: 'seo',
      number: '04',
      title: 'SEO & Performance',
      badge: 'Organic Search',
      tagline: 'Rank #1 on Google and capture continuous inbound calls.',
      description: 'Comprehensive 100+ point technical SEO, semantic keyword dominance, and map rankings that drive compounding organic buyers daily.',
      accent: 'from-[var(--cyan-accent)] to-[var(--deep-navy)]',
      tagBg: 'bg-[var(--primary-blue)]/10 text-[var(--primary-blue)] border-[var(--primary-blue)]/20',
      glowColor: 'rgba(0, 200, 255, 0.25)',
      icon: Search,
      // "Kya Kya Benefits Milega"
      benefits: [
        '#1 Google Map Pack Domination (High-intent buyer calls)',
        '100+ Point Technical SEO Optimization (Beat competitors)',
        'Compounding Free Organic Traffic without monthly ad spend',
        'High Domain Authority Building with authoritative backlinks'
      ],
      metrics: '#1 Rankings in UP',
      metricDetail: '85+ Top Keywords',
      ctaText: 'Explore SEO Dominance'
    },
    {
      id: 'branding',
      number: '05',
      title: 'Branding & Creative',
      badge: 'Visual Identity',
      tagline: 'An iconic brand personality that commands premium pricing.',
      description: 'We define compelling brand personalities, iconic 3D/2D logo suites, design tokens, and corporate collateral that make your business unforgettable.',
      accent: 'from-[var(--brand-orange)] to-[var(--amber)]',
      tagBg: 'bg-[var(--brand-orange)]/10 text-[var(--brand-orange)] border-[var(--brand-orange)]/20',
      glowColor: 'rgba(255, 122, 0, 0.25)',
      icon: Palette,
      // "Kya Kya Benefits Milega"
      benefits: [
        'Iconic 3D & 2D Logo Suite (Instant customer authority & trust)',
        'Complete Brand Style Guidelines & Color Design Tokens',
        'High-Converting Pitch Decks & Corporate Sales Collateral',
        '100% Original, Trademark-Ready & Copyright-Protected'
      ],
      metrics: 'Trademark Ready',
      metricDetail: '100% Unique Design',
      ctaText: 'Explore Brand Identity'
    },
    {
      id: 'content',
      number: '06',
      title: 'Content Creation & Reels',
      badge: 'Storytelling',
      tagline: 'High-retention 9:16 vertical reels that captivate feeds.',
      description: 'Engaging vertical viral reels, YouTube shorts, commercials, motion graphics, and conversion copywriting that turn casual viewers into buyers.',
      accent: 'from-[var(--primary-blue)] to-[var(--cyan-accent)]',
      tagBg: 'bg-[var(--primary-blue)]/10 text-[var(--primary-blue)] border-[var(--primary-blue)]/20',
      glowColor: 'rgba(11, 92, 255, 0.25)',
      icon: Film,
      // "Kya Kya Benefits Milega"
      benefits: [
        'Viral 9:16 Reels & Shorts (Massive reach & follower growth)',
        '10M+ Video Views Delivered with high-retention hooks',
        'Psychology-Driven Story Scripts that convert viewers to buyers',
        'Studio-Grade 4K Post-Production, Motion VFX & Sound Design'
      ],
      metrics: '10M+ Video Views',
      metricDetail: 'High Retention',
      ctaText: 'Explore Video Production'
    }
  ], []);

  const totalCards = services.length; // 6

  // Radius calculation adapting cleanly to screen size with generous air gaps
  const orbitRadius = useMemo(() => {
    if (windowWidth < 640) return 210; // Mobile
    if (windowWidth < 1024) return 300; // Tablet
    if (windowWidth < 1440) return 400; // Standard Laptop
    return 460; // Large Desktop
  }, [windowWidth]);

  // Card width adapting to screen size
  const cardWidth = useMemo(() => {
    if (windowWidth < 640) return '280px'; // Mobile
    if (windowWidth < 1024) return '315px'; // Tablet
    return '350px'; // Desktop
  }, [windowWidth]);

  // Direct smooth rotation angle driven by activeCardIndex
  const masterOrbitAngle = -activeCardIndex * ((2 * Math.PI) / totalCards);

  // Smooth Auto-Play Loop (rotates every 5s, pauses on mouse hover or touch)
  useEffect(() => {
    if (viewMode !== 'orbit' || !isAutoPlaying || isHovered) {
      if (autoPlayTimerRef.current) clearInterval(autoPlayTimerRef.current);
      return;
    }

    autoPlayTimerRef.current = setInterval(() => {
      setActiveCardIndex((prev) => (prev + 1) % totalCards);
    }, 5000);

    return () => {
      if (autoPlayTimerRef.current) clearInterval(autoPlayTimerRef.current);
    };
  }, [viewMode, isAutoPlaying, isHovered, totalCards]);

  const handleNext = () => {
    setActiveCardIndex((prev) => (prev + 1) % totalCards);
  };

  const handlePrev = () => {
    setActiveCardIndex((prev) => (prev - 1 + totalCards) % totalCards);
  };

  const jumpToService = (index) => {
    setActiveCardIndex(index);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (viewMode !== 'orbit') return;
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [viewMode]);

  // Touch swipe support for mobile
  const handleTouchStart = (e) => {
    touchStartXRef.current = e.touches[0].clientX;
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

  return (
    <section 
      id="services" 
      className="relative bg-[var(--bg-soft)] text-[var(--text-dark)] overflow-hidden pt-14 sm:pt-16 lg:pt-20 pb-16 sm:pb-20 border-y border-[var(--primary-blue)]/8"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background Subtle Ambient Lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-[var(--primary-blue)]/5 rounded-full blur-[150px] pointer-events-none z-0" />
      <div className="absolute bottom-1/3 right-10 w-[450px] h-[350px] bg-[var(--brand-orange)]/5 rounded-full blur-[130px] pointer-events-none z-0" />

      {/* ===================================================================== */}
      {/* 1. IMPORTANT SECTION HEADINGS (CLEAN, BOLD, CLEAR)                     */}
      {/* ===================================================================== */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 mb-8 sm:mb-10">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          
          {/* Top Pill Tag */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[var(--primary-blue)]/20 text-xs font-semibold text-[var(--deep-navy)] shadow-xs">
            <span className="w-2 h-2 rounded-full bg-[var(--brand-orange)] animate-pulse" />
            <span className="text-[var(--brand-orange)] uppercase tracking-widest text-[11px] font-bold">Our Services</span>
            <span className="text-[var(--text-muted)] text-[11px]">• Click On Media Suite</span>
          </div>

          {/* Main Powerful Headline */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[var(--deep-navy)] tracking-tight leading-tight font-heading">
            End-to-End Digital Solutions for{' '}
            <span className="text-gradient-brand">
              Modern Businesses
            </span>
          </h2>

          {/* Concise Subtitle */}
          <p className="text-sm sm:text-base text-[var(--text-muted)] font-normal leading-relaxed max-w-2xl mx-auto">
            A complete suite of digital services designed to build your brand, expand your reach, and drive measurable revenue growth.
          </p>

          {/* Quick Value Highlights */}
          <div className="pt-1 flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs font-semibold text-slate-600">
            <div className="flex items-center gap-1.5">
              <Zap className="w-4 h-4 text-[var(--brand-orange)]" />
              <span>High-Conversion Engineering</span>
            </div>
            <div className="flex items-center gap-1.5">
              <TrendingUp className="w-4 h-4 text-[var(--primary-blue)]" />
              <span>Measurable ROI Guarantee</span>
            </div>
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-500" />
              <span>Dedicated Growth Partner</span>
            </div>
          </div>

        </div>
      </div>

      {/* ===================================================================== */}
      {/* 2. 3D ORBIT ANIMATED CAROUSEL THEATER (ANIMATION PRESERVED & SMOOTH)  */}
      {/* ===================================================================== */}
      {viewMode === 'orbit' ? (
        <div className="w-full relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Controls & Stepper Pills */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 border-b border-[var(--primary-blue)]/10 pb-4 mb-4 bg-white/70 backdrop-blur-md rounded-2xl p-2.5 shadow-xs">
            
            {/* Stepper Navigation Pills (01 to 06) */}
            <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto w-full sm:w-auto pb-1 sm:pb-0 scrollbar-none">
              {services.map((svc, idx) => {
                const isActive = activeCardIndex === idx;
                return (
                  <button
                    key={svc.id}
                    onClick={() => jumpToService(idx)}
                    className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all duration-300 flex items-center gap-1.5 flex-shrink-0 cursor-pointer min-h-[36px] ${
                      isActive
                        ? 'bg-gradient-to-r from-[var(--amber)] to-[var(--brand-orange)] text-white shadow-md shadow-[var(--brand-orange)]/25 scale-105 border border-[var(--amber)]'
                        : 'bg-white text-[var(--deep-navy)] hover:text-[var(--primary-blue)] hover:bg-slate-50 border border-slate-200/80 shadow-xs'
                    }`}
                  >
                    <span className="font-mono text-[11px]">{svc.number}</span>
                    <span className="text-[11px] font-heading">{svc.title}</span>
                  </button>
                );
              })}
            </div>

            {/* Right Controls: AutoPlay Toggle + Counter + Grid Toggle */}
            <div className="flex items-center gap-2.5 flex-shrink-0 self-end sm:self-auto">
              
              {/* AutoPlay Toggle */}
              <button
                onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                className={`p-2 rounded-full text-xs font-bold transition-all border cursor-pointer ${
                  isAutoPlaying 
                    ? 'bg-orange-50 border-orange-200 text-[var(--brand-orange)]' 
                    : 'bg-white border-slate-200 text-slate-500'
                }`}
                title={isAutoPlaying ? 'Pause 3D rotation' : 'Resume 3D rotation'}
              >
                {isAutoPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
              </button>

              {/* Live Progress Counter */}
              <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-[var(--deep-navy)] bg-white px-3 py-1.5 rounded-full border border-[var(--primary-blue)]/15 shadow-xs">
                <span className="text-[var(--brand-orange)]">{services[activeCardIndex].number}</span>
                <span className="text-slate-400">/</span>
                <span>06</span>
              </div>

              {/* Toggle to All 6 Grid View */}
              <button
                onClick={() => setViewMode('grid')}
                className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white hover:bg-slate-50 border border-[var(--primary-blue)]/30 text-[var(--primary-blue)] text-xs font-semibold transition-all shadow-xs cursor-pointer min-h-[36px]"
              >
                <LayoutGrid className="w-3.5 h-3.5" />
                <span className="text-[11px] font-heading">All 6 Grid</span>
              </button>
            </div>

          </div>

          {/* 3D Perspective Scene Container */}
          <div 
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            className="relative w-full h-[520px] sm:h-[540px] lg:h-[560px] flex items-center justify-center overflow-hidden"
          >
            
            <div 
              className="relative w-full h-full flex items-center justify-center preserve-3d"
              style={{
                perspective: '1400px',
                perspectiveOrigin: '50% 50%'
              }}
            >

              {/* Physical Orbital Track Ring */}
              <div 
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none"
                style={{
                  width: `${orbitRadius * 2.1}px`,
                  height: `${orbitRadius * 2.1}px`,
                  transform: 'rotateX(78deg) translateZ(-35px)',
                  border: '1.5px dashed rgba(11, 92, 255, 0.25)',
                  boxShadow: '0 0 45px rgba(11, 92, 255, 0.08), inset 0 0 35px rgba(255, 122, 0, 0.05)'
                }}
              >
                <div className="absolute inset-0 m-auto w-24 h-24 rounded-full bg-[var(--primary-blue)]/10 blur-xl" />
              </div>

              {/* 3D Rotating Service Cards */}
              {services.map((service, index) => {
                const baseAngle = (index / totalCards) * (2 * Math.PI);
                const totalAngle = baseAngle + masterOrbitAngle;
                const diffAngle = ((totalAngle % (2 * Math.PI)) + 3 * Math.PI) % (2 * Math.PI) - Math.PI;

                const xPos = orbitRadius * Math.sin(diffAngle);
                const zPos = orbitRadius * Math.cos(diffAngle) * 0.75 - (orbitRadius * 0.15);

                const depthFactor = (Math.cos(diffAngle) + 1) / 2; // 0 to 1
                const scale = 0.78 + 0.22 * depthFactor;
                const opacity = 0.35 + 0.65 * depthFactor;
                const rotateY = -diffAngle * (180 / Math.PI) * 0.32;
                const zIndex = Math.round(depthFactor * 50) + 1;

                const isFrontActive = Math.abs(diffAngle) < 0.42;

                return (
                  <div
                    key={service.id}
                    onClick={() => !isFrontActive && jumpToService(index)}
                    className={`absolute top-1/2 left-1/2 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                      isFrontActive 
                        ? 'cursor-default pointer-events-auto' 
                        : 'cursor-pointer pointer-events-auto hover:opacity-95'
                    }`}
                    style={{
                      width: cardWidth,
                      transform: `translate3d(calc(-50% + ${xPos}px), -50%, ${zPos}px) rotateY(${rotateY}deg) scale(${scale})`,
                      transformOrigin: 'center center',
                      opacity: opacity,
                      zIndex: zIndex,
                      filter: `brightness(${0.8 + 0.2 * depthFactor}) blur(${(1 - depthFactor) * 1.5}px)`,
                      willChange: 'transform, opacity'
                    }}
                  >
                    
                    {/* Animated Card Chassis */}
                    <div 
                      className={`relative rounded-3xl bg-white p-5 sm:p-6 border transition-all duration-300 overflow-hidden flex flex-col justify-between ${
                        isFrontActive 
                          ? 'border-[var(--brand-orange)] shadow-2xl ring-2 ring-[var(--brand-orange)]/40' 
                          : 'border-[var(--primary-blue)]/15 shadow-md hover:border-[var(--primary-blue)]/40'
                      }`}
                    >
                      {/* Top Accent Gradient Bar */}
                      <div className={`absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r ${service.accent}`} />

                      {/* Active Ambient Glow */}
                      {isFrontActive && (
                        <div 
                          className="absolute -top-10 -right-10 w-36 h-36 rounded-full blur-2xl pointer-events-none"
                          style={{ background: service.glowColor }}
                        />
                      )}

                      <div className="space-y-3.5">
                        
                        {/* Card Top: Number + Badge + Icon */}
                        <div className="flex items-center justify-between pb-2.5 border-b border-slate-100">
                          <div className="flex items-center gap-2">
                            <span className="w-6 h-6 rounded-md bg-[var(--brand-orange)]/15 border border-[var(--brand-orange)]/30 text-[var(--brand-orange)] font-mono font-bold text-xs flex items-center justify-center shadow-inner">
                              {service.number}
                            </span>
                            <span className="text-[10px] font-bold text-[var(--text-muted)] uppercase tracking-wider font-heading">
                              {service.badge}
                            </span>
                          </div>

                          <div className={`p-2 rounded-xl bg-gradient-to-tr ${service.accent} text-white shadow-sm`}>
                            {React.createElement(service.icon, { className: "w-4 h-4" })}
                          </div>
                        </div>

                        {/* Title & Tagline */}
                        <div className="space-y-1">
                          <h3 className="text-lg sm:text-xl font-extrabold text-[var(--deep-navy)] tracking-tight leading-snug font-heading">
                            {service.title}
                          </h3>
                          <p className="text-[11px] sm:text-xs text-[var(--text-muted)] leading-relaxed font-normal line-clamp-2">
                            {service.description}
                          </p>
                        </div>

                        {/* "Kya Kya Benefits Milega" Section */}
                        <div className="space-y-1.5 pt-1 border-t border-slate-100/80">
                          <div className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-[var(--brand-orange)] font-heading">
                            <Sparkles className="w-3 h-3" />
                            <span>What You Get (Key Benefits):</span>
                          </div>

                          <ul className="space-y-1.5">
                            {service.benefits.map((benefit, bIdx) => (
                              <li key={bIdx} className="flex items-start gap-2 text-[11px] text-slate-700 leading-snug">
                                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0 mt-0.5" />
                                <span className="font-medium line-clamp-1">{benefit}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Metrics Callout Pill */}
                        <div className="pt-1">
                          <div className="px-3 py-1.5 rounded-xl bg-slate-50 border border-slate-200/80 text-[10px] font-bold text-[var(--deep-navy)] font-heading flex items-center justify-between">
                            <span className="text-[var(--primary-blue)]">{service.metrics}</span>
                            <span className="text-[var(--brand-orange)]">{service.metricDetail}</span>
                          </div>
                        </div>

                      </div>

                      {/* Card Footer Action: Opens Dedicated Service Detail Page */}
                      <div className="pt-3 mt-3 border-t border-slate-100 flex items-center justify-between">
                        <button
                          onClick={() => onSelectService && onSelectService(service.id)}
                          className="text-xs font-bold text-[var(--primary-blue)] hover:text-[var(--brand-orange)] flex items-center gap-1 transition-colors cursor-pointer min-h-[36px]"
                        >
                          <span>Explore Service</span>
                          <ExternalLink className="w-3 h-3" />
                        </button>

                        <button
                          onClick={() => onOpenQuote && onOpenQuote(service.title)}
                          className="btn-primary text-xs !py-1.5 !px-3.5 min-h-[36px] shadow-sm cursor-pointer"
                        >
                          Get Quote
                        </button>
                      </div>

                    </div>

                  </div>
                );
              })}

            </div>

            {/* Left & Right Stage Navigation Arrows */}
            <div className="absolute inset-x-2 sm:inset-x-8 top-1/2 -translate-y-1/2 z-30 flex justify-between pointer-events-none">
              <button
                onClick={handlePrev}
                title="Previous Service in 3D Orbit"
                aria-label="Previous Service in 3D Orbit"
                className="w-10 h-10 rounded-full bg-white/90 hover:bg-[var(--brand-orange)] hover:text-white border border-[var(--primary-blue)]/20 text-[var(--deep-navy)] flex items-center justify-center shadow-lg transition-all hover:scale-110 active:scale-95 cursor-pointer pointer-events-auto min-w-[44px] min-h-[44px]"
              >
                <ArrowLeft className="w-4 h-4" />
              </button>

              <button
                onClick={handleNext}
                title="Next Service in 3D Orbit"
                aria-label="Next Service in 3D Orbit"
                className="w-10 h-10 rounded-full bg-white/90 hover:bg-[var(--brand-orange)] hover:text-white border border-[var(--primary-blue)]/20 text-[var(--deep-navy)] flex items-center justify-center shadow-lg transition-all hover:scale-110 active:scale-95 cursor-pointer pointer-events-auto min-w-[44px] min-h-[44px]"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Bottom Visual Rotation Cue */}
            <div className="absolute bottom-1 left-1/2 -translate-x-1/2 z-20 flex items-center gap-1.5 text-[11px] font-semibold text-[var(--text-muted)] bg-white/90 backdrop-blur-xs px-3.5 py-1 rounded-full border border-slate-200 shadow-xs pointer-events-none">
              <RotateCw className="w-3 h-3 text-[var(--brand-orange)] animate-spin" />
              <span>Use arrows or pills to rotate 3D cards</span>
            </div>

          </div>

        </div>
      ) : (
        /* ===================================================================== */
        /* ALL 6 GRID VIEW ALTERNATIVE                                           */
        /* ===================================================================== */
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 relative z-20">
          <div className="flex justify-end pb-4">
            <button
              onClick={() => setViewMode('orbit')}
              className="flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white hover:bg-slate-50 border border-[var(--primary-blue)]/30 text-[var(--primary-blue)] text-xs font-semibold transition-all shadow-xs cursor-pointer min-h-[36px]"
            >
              <RotateCw className="w-3.5 h-3.5 text-[var(--brand-orange)]" />
              <span className="text-[11px] font-heading">Back to 3D Orbit View</span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {services.map((service) => (
              <div
                key={service.id}
                className="bg-white border border-slate-200/90 hover:border-[var(--brand-orange)]/50 rounded-3xl p-6 transition-all duration-300 hover:-translate-y-1.5 shadow-sm hover:shadow-xl flex flex-col justify-between"
              >
                <div className="space-y-3.5">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                    <span className="w-7 h-7 rounded-lg bg-slate-100 text-[var(--deep-navy)] font-mono font-bold text-xs flex items-center justify-center">
                      {service.number}
                    </span>
                    <span className="text-[11px] font-bold text-[var(--text-muted)] uppercase tracking-wider font-heading">
                      {service.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-extrabold text-[var(--deep-navy)] font-heading">{service.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{service.description}</p>
                  
                  {/* "Kya Kya Benefits Milega" */}
                  <div className="space-y-2 pt-1 border-t border-slate-100">
                    <div className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-[var(--brand-orange)] font-heading">
                      <Sparkles className="w-3 h-3" />
                      <span>What You Get (Key Benefits):</span>
                    </div>

                    <ul className="space-y-1.5">
                      {service.benefits.map((b, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-slate-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0 mt-0.5" />
                          <span className="line-clamp-1">{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-2">
                    <div className="px-3.5 py-1.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-bold text-[var(--deep-navy)] font-heading flex justify-between">
                      <span className="text-[var(--primary-blue)]">{service.metrics}</span>
                      <span className="text-[var(--brand-orange)]">{service.metricDetail}</span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between">
                  <button
                    onClick={() => onSelectService && onSelectService(service.id)}
                    className="text-xs font-bold text-[var(--primary-blue)] hover:text-[var(--brand-orange)] flex items-center gap-1 cursor-pointer min-h-[36px]"
                  >
                    <span>Explore Breakdown</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={() => onOpenQuote && onOpenQuote(service.title)}
                    className="btn-primary text-xs !py-2 !px-4 min-h-[36px]"
                  >
                    Get Quote
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

    </section>
  );
}
