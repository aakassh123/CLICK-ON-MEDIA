import React, { useState, useEffect, useRef, useMemo } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
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
  RotateCw
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function Services({ onSelectService, onOpenQuote }) {
  const containerRef = useRef(null);
  const pinStageRef = useRef(null);
  const scrollTriggerRef = useRef(null);

  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const [viewMode, setViewMode] = useState('orbit'); // 'orbit' | 'grid'
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== 'undefined' ? window.innerWidth : 1200
  );

  // Responsive resize listener
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // 6 Core Click On Media Services (Aligned to Brand Palette Variables)
  const services = useMemo(() => [
    {
      id: 'web-dev',
      number: '01',
      title: 'Website Development',
      badge: 'Web Architecture',
      tagline: 'Modern, responsive and high-performing websites.',
      description: 'We engineer lightning-fast, high-converting digital flagships with sub-second load times, mobile-first precision, and flawless UX architecture.',
      accent: 'from-[var(--primary-blue)] to-[var(--deep-navy)]',
      tagBg: 'bg-[var(--primary-blue)]/10 text-[var(--primary-blue)] border-[var(--primary-blue)]/20',
      glowColor: 'rgba(11, 92, 255, 0.25)',
      icon: Globe,
      deliverables: [
        'Custom React & Next.js Architecture',
        'Headless CMS & Scalable Backends',
        'Core Web Vitals & 95+ PageSpeed'
      ],
      metrics: '0.6s Avg Load Time',
      metricDetail: '100/100 Core Vitals',
      tags: ['React', 'Next.js', 'Tailwind', 'TypeScript'],
      statusText: 'SSR & Edge Cached'
    },
    {
      id: 'software-dev',
      number: '02',
      title: 'Software & App Development',
      badge: 'Cloud & Mobile',
      tagline: 'Custom software and business applications.',
      description: 'Tailor-made cloud software, cross-platform iOS & Android mobile applications, and internal enterprise automation systems built for effortless scale.',
      accent: 'from-[var(--brand-orange)] to-[var(--amber)]',
      tagBg: 'bg-[var(--brand-orange)]/10 text-[var(--brand-orange)] border-[var(--brand-orange)]/20',
      glowColor: 'rgba(255, 122, 0, 0.25)',
      icon: Code2,
      deliverables: [
        'iOS & Android Cross-Platform Apps',
        'Scalable Cloud SaaS Platforms',
        'Microservices & REST/GraphQL APIs'
      ],
      metrics: '99.98% High Uptime',
      metricDetail: '18ms Latency',
      tags: ['Flutter', 'React Native', 'Node.js', 'PostgreSQL'],
      statusText: 'Zero-Downtime CI/CD'
    },
    {
      id: 'marketing',
      number: '03',
      title: 'Digital Marketing',
      badge: 'Growth Engine',
      tagline: 'Data-driven campaigns that bring real results.',
      description: 'Targeted pay-per-click ads, Meta & Google ad funnels, and precision conversion optimization that consistently lower customer acquisition costs.',
      accent: 'from-[var(--primary-blue)] to-[var(--brand-orange)]',
      tagBg: 'bg-[var(--primary-blue)]/10 text-[var(--primary-blue)] border-[var(--primary-blue)]/20',
      glowColor: 'rgba(11, 92, 255, 0.25)',
      icon: Megaphone,
      deliverables: [
        'Google Performance Max & Search',
        'Meta (FB & IG) Funnel Scale',
        'Transparent Attribution Tracking'
      ],
      metrics: '3.8x+ Avg ROAS',
      metricDetail: '+284% Scaling',
      tags: ['Google Ads', 'Meta Ads', 'GA4 Analytics', 'CRO'],
      statusText: 'Verified Attribution'
    },
    {
      id: 'seo',
      number: '04',
      title: 'SEO & Performance',
      badge: 'Organic Search',
      tagline: 'Rank higher, get traffic and more customers.',
      description: 'Comprehensive 100+ point technical SEO, semantic keyword dominance, and high-authority backlink building that drives compounding organic leads.',
      accent: 'from-[var(--cyan-accent)] to-[var(--deep-navy)]',
      tagBg: 'bg-[var(--primary-blue)]/10 text-[var(--primary-blue)] border-[var(--primary-blue)]/20',
      glowColor: 'rgba(0, 200, 255, 0.25)',
      icon: Search,
      deliverables: [
        '100+ Point Technical SEO Audit',
        'Commercial Keyword Clustering',
        'Local Google Map Pack Domination'
      ],
      metrics: '#1 Rankings in UP',
      metricDetail: '85+ Top Keywords',
      tags: ['Semrush', 'Ahrefs', 'Schema.org', 'PageSpeed'],
      statusText: 'High Domain Authority'
    },
    {
      id: 'branding',
      number: '05',
      title: 'Branding & Creative',
      badge: 'Visual Identity',
      tagline: 'Build a unique and memorable brand.',
      description: 'We define compelling brand personalities, iconic logo systems, design tokens, and corporate collateral that make your business unforgettable.',
      accent: 'from-[var(--brand-orange)] to-[var(--amber)]',
      tagBg: 'bg-[var(--brand-orange)]/10 text-[var(--brand-orange)] border-[var(--brand-orange)]/20',
      glowColor: 'rgba(255, 122, 0, 0.25)',
      icon: Palette,
      deliverables: [
        '3D/2D Logo Suite & Guidelines',
        'Design Tokens & Color Systems',
        'Corporate Stationery & Pitch Decks'
      ],
      metrics: 'Trademark Ready',
      metricDetail: '100% Unique Design',
      tags: ['Figma', 'Illustrator', 'Design Tokens', '3D Logo'],
      statusText: 'Complete Identity'
    },
    {
      id: 'content',
      number: '06',
      title: 'Content Creation',
      badge: 'Storytelling',
      tagline: 'High-quality content, reels, videos and more.',
      description: 'Engaging vertical viral reels, YouTube shorts, commercials, motion graphics, and conversion copywriting that captivate audiences and drive conversions.',
      accent: 'from-[var(--primary-blue)] to-[var(--cyan-accent)]',
      tagBg: 'bg-[var(--primary-blue)]/10 text-[var(--primary-blue)] border-[var(--primary-blue)]/20',
      glowColor: 'rgba(11, 92, 255, 0.25)',
      icon: Film,
      deliverables: [
        'Viral Reels & TikTok Video Shorts',
        'Brand Commercials & Motion VFX',
        'Conversion-Focused Copywriting'
      ],
      metrics: '10M+ Video Views',
      metricDetail: 'High Retention',
      tags: ['Premiere Pro', 'After Effects', '4K Reels', 'Audio'],
      statusText: '9:16 Viral Formats'
    }
  ], []);

  const totalCards = services.length; // 6

  // Radius calculation adapting cleanly to screen size with generous air gaps
  const orbitRadius = useMemo(() => {
    if (windowWidth < 640) return 200; // Mobile
    if (windowWidth < 1024) return 280; // Tablet
    if (windowWidth < 1440) return 380; // Standard Laptop
    return 440; // Large 4K Desktop
  }, [windowWidth]);

  // Compact card width adapting to screen size
  const cardWidth = useMemo(() => {
    if (windowWidth < 640) return '230px'; // Mobile (compact & elegant)
    if (windowWidth < 1024) return '265px'; // Tablet
    return '295px'; // Desktop (compact rectangular card, not oversized)
  }, [windowWidth]);

  // Jump smoothly to a specific service in the orbit
  const jumpToService = (index) => {
    if (!scrollTriggerRef.current) return;
    const st = scrollTriggerRef.current;
    const targetProgress = index / (totalCards - 1);
    const targetY = st.start + targetProgress * (st.end - st.start);
    window.scrollTo({
      top: targetY,
      behavior: 'smooth'
    });
  };

  // GSAP ScrollTrigger Master Timeline
  useEffect(() => {
    if (viewMode !== 'orbit') {
      if (scrollTriggerRef.current) {
        scrollTriggerRef.current.kill();
      }
      return;
    }

    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 120);

    const ctx = gsap.context(() => {
      const scrollDistancePerCard = 520;
      const totalTransitions = totalCards - 1; // 5 transitions
      const totalScrollDistance = totalTransitions * scrollDistancePerCard;

      const st = ScrollTrigger.create({
        trigger: pinStageRef.current,
        start: 'top 80px', // Pinned cleanly below the fixed top navbar
        end: `+=${totalScrollDistance}px`,
        pin: true,
        scrub: 0.8,
        anticipatePin: 1,
        onUpdate: (self) => {
          const p = self.progress;
          setScrollProgress(p);

          // Calculate active card index (0 to 5)
          const activeIdx = Math.min(
            totalCards - 1,
            Math.max(0, Math.round(p * (totalCards - 1)))
          );
          setActiveCardIndex(activeIdx);
        }
      });

      scrollTriggerRef.current = st;
    }, containerRef);

    return () => {
      clearTimeout(timer);
      ctx.revert();
    };
  }, [viewMode, totalCards]);

  // Master rotation angle driven by scroll progress:
  const masterOrbitAngle = -scrollProgress * ((totalCards - 1) / totalCards) * (2 * Math.PI);

  return (
    <section 
      id="services" 
      ref={containerRef}
      className="relative bg-[var(--bg-soft)] text-[var(--text-dark)] overflow-hidden pt-12 sm:pt-16 pb-16 sm:pb-20 border-y border-[var(--primary-blue)]/8"
    >
      
      {/* Background Subtle Ambient Lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-[var(--primary-blue)]/5 rounded-full blur-[150px] pointer-events-none z-0" />
      <div className="absolute top-1/3 right-10 w-[450px] h-[350px] bg-[var(--brand-orange)]/5 rounded-full blur-[130px] pointer-events-none z-0" />

      {/* ===================================================================== */}
      {/* SECTION HEADER: BRANDED TITLES & INTRO                                */}
      {/* ===================================================================== */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 mb-4 sm:mb-6">
        
        {/* Top Centered Header */}
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[var(--primary-blue)]/20 text-xs font-semibold text-[var(--deep-navy)] shadow-soft-blue">
            <span className="w-2 h-2 rounded-full bg-[var(--brand-orange)] animate-pulse" />
            <span className="text-[var(--brand-orange)] uppercase tracking-widest text-[11px] font-bold">Our Services</span>
            <span className="text-[var(--text-muted)] text-[11px]">• Click On Media Suite</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[var(--deep-navy)] tracking-tight leading-tight font-heading">
            End-to-End Digital Solutions for{' '}
            <span className="text-gradient-brand">
              Modern Businesses
            </span>
          </h2>

          <p className="text-xs sm:text-sm text-[var(--text-muted)] font-normal leading-relaxed max-w-xl mx-auto">
            A complete suite of digital services designed to build your brand, expand your reach, and drive measurable growth.
          </p>
        </div>

      </div>

      {/* ===================================================================== */}
      {/* 3D ORBIT PINNED THEATER (CONTROLS + COMPACT CARDS PINNED TOGETHER)    */}
      {/* ===================================================================== */}
      {viewMode === 'orbit' ? (
        <div 
          ref={pinStageRef} 
          className="w-full relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          {/* Orbit Controls & Stepper Pills (Pinned Directly with Theater) */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 border-b border-[var(--primary-blue)]/10 pb-3 mb-2 flex-shrink-0 bg-[var(--bg-soft)]/90 backdrop-blur-xs rounded-xl pt-1">
            
            {/* Stepper Navigation Pills (01 to 06) */}
            <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto w-full sm:w-auto pb-1 sm:pb-0 scrollbar-none">
              {services.map((svc, idx) => {
                const isActive = activeCardIndex === idx;
                return (
                  <button
                    key={svc.id}
                    onClick={() => jumpToService(idx)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 flex-shrink-0 cursor-pointer min-h-[36px] ${
                      isActive
                        ? 'bg-gradient-to-r from-[var(--amber)] to-[var(--brand-orange)] text-white shadow-md shadow-[var(--brand-orange)]/25 scale-102 border border-[var(--amber)]'
                        : 'bg-white text-[var(--deep-navy)] hover:text-[var(--primary-blue)] hover:bg-slate-50 border border-slate-200/80 shadow-xs'
                    }`}
                  >
                    <span className="font-mono text-[11px]">{svc.number}</span>
                    <span className="hidden md:inline text-[11px]">{svc.title}</span>
                  </button>
                );
              })}
            </div>

            {/* Right Status Indicator & Grid Mode Toggle */}
            <div className="flex items-center gap-3 flex-shrink-0">
              {/* Live Progress Counter */}
              <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-[var(--deep-navy)] bg-white px-3 py-1 rounded-full border border-[var(--primary-blue)]/15 shadow-xs">
                <span className="text-[var(--brand-orange)]">{services[activeCardIndex].number}</span>
                <span className="text-slate-400">/</span>
                <span>06</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--primary-blue)] animate-ping ml-1" />
              </div>

              {/* Toggle Orbit vs Grid */}
              <button
                onClick={() => setViewMode('grid')}
                className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white hover:bg-slate-50 border border-[var(--primary-blue)]/30 text-[var(--primary-blue)] text-xs font-semibold transition-all shadow-xs cursor-pointer min-h-[36px]"
              >
                <LayoutGrid className="w-3.5 h-3.5" />
                <span className="text-[11px] font-heading">All 6 Grid</span>
              </button>
            </div>

          </div>

          {/* 3D Orbit Stage */}
          <div className="relative w-full h-[460px] sm:h-[480px] lg:h-[500px] flex items-center justify-center overflow-hidden">
            
            {/* 3D Perspective Scene Container */}
            <div 
              className="relative w-full h-full flex items-center justify-center preserve-3d"
              style={{
                perspective: '1300px',
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

              {/* The 6 Compact Orbiting Service Cards */}
              {services.map((service, index) => {
                const baseAngle = (index / totalCards) * (2 * Math.PI);
                const totalAngle = baseAngle + masterOrbitAngle;
                const diffAngle = ((totalAngle % (2 * Math.PI)) + 3 * Math.PI) % (2 * Math.PI) - Math.PI;

                const xPos = orbitRadius * Math.sin(diffAngle);
                const zPos = orbitRadius * Math.cos(diffAngle) * 0.7 - (orbitRadius * 0.15);

                const depthFactor = (Math.cos(diffAngle) + 1) / 2;
                const scale = 0.76 + 0.24 * depthFactor;
                const opacity = 0.35 + 0.65 * depthFactor;
                const rotateY = -diffAngle * (180 / Math.PI) * 0.32;
                const zIndex = Math.round(depthFactor * 50) + 1;

                const isFrontActive = Math.abs(diffAngle) < 0.42;

                return (
                  <div
                    key={service.id}
                    onClick={() => !isFrontActive && jumpToService(index)}
                    className={`absolute top-1/2 left-1/2 transition-opacity duration-300 ${
                      isFrontActive ? 'cursor-default pointer-events-auto' : 'cursor-pointer pointer-events-auto hover:opacity-90'
                    }`}
                    style={{
                      width: cardWidth,
                      transform: `translate3d(calc(-50% + ${xPos}px), -50%, ${zPos}px) rotateY(${rotateY}deg) scale(${scale})`,
                      transformOrigin: 'center center',
                      opacity: opacity,
                      zIndex: zIndex,
                      filter: `brightness(${0.75 + 0.25 * depthFactor}) blur(${(1 - depthFactor) * 1.5}px)`,
                      willChange: 'transform, opacity'
                    }}
                  >
                    
                    {/* Compact Card Chassis (Crisp Light Theme on Soft Background) */}
                    <div 
                      className={`relative rounded-2xl bg-white p-4 sm:p-5 border transition-all duration-300 overflow-hidden ${
                        isFrontActive 
                          ? 'border-[var(--brand-orange)] shadow-hover-blue ring-2 ring-[var(--brand-orange)]/40' 
                          : 'border-[var(--primary-blue)]/15 shadow-soft-blue hover:border-[var(--primary-blue)]/40'
                      }`}
                    >
                      
                      {/* Active Soft Ambient Radial Glow */}
                      {isFrontActive && (
                        <div 
                          className="absolute -top-10 -right-10 w-36 h-36 rounded-full blur-2xl pointer-events-none"
                          style={{ background: service.glowColor }}
                        />
                      )}

                      {/* Top Row: Service Number & Icon */}
                      <div className="flex items-center justify-between pb-2.5 border-b border-slate-100">
                        <div className="flex items-center gap-2">
                          <span className="w-6 h-6 rounded-md bg-[var(--brand-orange)]/15 border border-[var(--brand-orange)]/30 text-[var(--brand-orange)] font-mono font-bold text-[11px] flex items-center justify-center shadow-inner">
                            {service.number}
                          </span>
                          <span className="text-[10px] font-bold text-[var(--text-muted)] uppercase tracking-wider font-heading">
                            {service.badge}
                          </span>
                        </div>

                        <div className={`p-1.5 rounded-lg bg-gradient-to-tr ${service.accent} text-white shadow-sm`}>
                          {React.createElement(service.icon, { className: "w-3.5 h-3.5" })}
                        </div>
                      </div>

                      {/* Title & Concise Tagline */}
                      <div className="mt-3 space-y-1">
                        <h3 className="text-base sm:text-lg font-bold text-[var(--deep-navy)] tracking-tight leading-snug font-heading">
                          {service.title}
                        </h3>
                        
                        <p className="text-[11px] sm:text-xs text-[var(--text-muted)] leading-relaxed font-normal line-clamp-2">
                          {service.description}
                        </p>
                      </div>

                      {/* Deliverables Checklist */}
                      <div className="mt-2.5 space-y-1 py-0.5">
                        {service.deliverables.slice(0, 2).map((item, dIdx) => (
                          <div key={dIdx} className="flex items-center gap-1.5 text-[11px] text-[var(--text-dark)]">
                            <CheckCircle2 className="w-3 h-3 text-[var(--primary-blue)] flex-shrink-0" />
                            <span className="line-clamp-1">{item}</span>
                          </div>
                        ))}
                      </div>

                      {/* Compact Branded Performance Metric Strip */}
                      <div className="mt-3 p-2 rounded-xl bg-[var(--bg-soft)] border border-[var(--primary-blue)]/15 text-[10px] space-y-1">
                        <div className="flex items-center justify-between font-semibold">
                          <span className="text-[var(--deep-navy)] flex items-center gap-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-[var(--primary-blue)] animate-ping" />
                            {service.metrics}
                          </span>
                          <span className="text-[var(--brand-orange)] font-bold">{service.metricDetail}</span>
                        </div>
                        <div className="w-full h-1 bg-slate-200 rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-gradient-to-r from-[var(--primary-blue)] to-[var(--brand-orange)] rounded-full"
                            style={{ width: `${80 + (index % 3) * 8}%` }}
                          />
                        </div>
                      </div>

                      {/* Bottom Action Footer */}
                      <div className="mt-3 pt-2.5 border-t border-slate-100 flex items-center justify-between gap-1.5">
                        {/* Tech Tag Pill */}
                        <span className="text-[9px] font-medium text-[var(--text-muted)] bg-[var(--bg-soft)] px-2 py-0.5 rounded-md border border-slate-200/80 line-clamp-1 max-w-[120px]">
                          {service.tags[0]} • {service.tags[1]}
                        </span>

                        {/* Interactive Buttons on Active Card */}
                        {isFrontActive ? (
                          <div className="flex items-center gap-1.5">
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                if (onSelectService) onSelectService(service.id);
                              }}
                              className="btn-secondary !py-1 !px-2.5 !text-[10px] min-h-[32px]"
                            >
                              <span>Explore</span>
                              <ExternalLink className="w-2.5 h-2.5" />
                            </button>
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                if (onOpenQuote) onOpenQuote();
                              }}
                              className="btn-primary !py-1 !px-3 !text-[10px] min-h-[32px]"
                            >
                              <span>Quote</span>
                              <ArrowRight className="w-2.5 h-2.5" />
                            </button>
                          </div>
                        ) : (
                          <span className="text-[10px] text-[var(--text-muted)] font-medium flex items-center gap-0.5 hover:text-[var(--brand-orange)] transition-colors">
                            <span>Focus</span>
                            <ChevronRight className="w-3 h-3" />
                          </span>
                        )}
                      </div>

                    </div>

                  </div>
                );
              })}

            </div>

            {/* Left / Right Manual Orbit Navigation Buttons */}
            <div className="absolute inset-y-0 left-1 sm:left-3 flex items-center z-30 pointer-events-auto">
              <button
                onClick={() => {
                  const prevIdx = (activeCardIndex - 1 + totalCards) % totalCards;
                  jumpToService(prevIdx);
                }}
                title="Previous Service in Orbit"
                aria-label="Previous Service in Orbit"
                className="w-10 h-10 rounded-full bg-white hover:bg-[var(--brand-orange)] hover:text-white border border-[var(--primary-blue)]/20 text-[var(--deep-navy)] flex items-center justify-center shadow-soft-blue transition-all hover:scale-105 active:scale-95 cursor-pointer min-w-[44px] min-h-[44px]"
              >
                <ArrowLeft className="w-4 h-4" />
              </button>
            </div>

            <div className="absolute inset-y-0 right-1 sm:right-3 flex items-center z-30 pointer-events-auto">
              <button
                onClick={() => {
                  const nextIdx = (activeCardIndex + 1) % totalCards;
                  jumpToService(nextIdx);
                }}
                title="Next Service in Orbit"
                aria-label="Next Service in Orbit"
                className="w-10 h-10 rounded-full bg-white hover:bg-[var(--brand-orange)] hover:text-white border border-[var(--primary-blue)]/20 text-[var(--deep-navy)] flex items-center justify-center shadow-soft-blue transition-all hover:scale-105 active:scale-95 cursor-pointer min-w-[44px] min-h-[44px]"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Bottom Visual Scroll Cue */}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 z-20 flex items-center gap-1.5 text-[11px] font-semibold text-[var(--text-muted)] bg-white/90 backdrop-blur-xs px-3.5 py-1 rounded-full border border-slate-200 shadow-xs pointer-events-none">
              <RotateCw className="w-3 h-3 text-[var(--brand-orange)] animate-spin" />
              <span>Scroll vertically to rotate 3D orbit</span>
            </div>

          </div>

        </div>
      ) : (
        /* =================================================================== */
        /* ACCESSIBLE ALL 6 GRID VIEW ALTERNATIVE (LIGHT THEME)                */
        /* =================================================================== */
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 relative z-20">
          <div className="flex justify-end pb-3">
            <button
              onClick={() => setViewMode('orbit')}
              className="flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white hover:bg-slate-50 border border-[var(--primary-blue)]/30 text-[var(--primary-blue)] text-xs font-semibold transition-all shadow-xs cursor-pointer min-h-[36px]"
            >
              <RotateCw className="w-3.5 h-3.5 text-[var(--brand-orange)]" />
              <span className="text-[11px] font-heading">Back to 3D Orbit View</span>
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((service) => (
              <div
                key={service.id}
                className="bg-white border border-[var(--primary-blue)]/15 hover:border-[var(--brand-orange)]/50 rounded-2xl p-5 transition-all duration-300 hover:-translate-y-1 shadow-soft-blue flex flex-col justify-between"
              >
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                    <span className="text-xs font-mono font-bold text-[var(--brand-orange)]">{service.number}</span>
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-[var(--bg-soft)] text-[var(--deep-navy)] font-semibold border border-[var(--primary-blue)]/15">
                      {service.badge}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-[var(--deep-navy)] font-heading">{service.title}</h3>
                  <p className="text-xs text-[var(--text-muted)] leading-relaxed">{service.description}</p>
                  
                  <div className="space-y-1 pt-1">
                    {service.deliverables.map((d, i) => (
                      <div key={i} className="flex items-center gap-1.5 text-[11px] text-[var(--text-dark)]">
                        <CheckCircle2 className="w-3 h-3 text-[var(--primary-blue)] flex-shrink-0" />
                        <span className="line-clamp-1">{d}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-1.5 flex items-center justify-between text-[10px] font-semibold">
                    <span className="text-[var(--primary-blue)] bg-[var(--primary-blue)]/10 px-2 py-0.5 rounded-md border border-[var(--primary-blue)]/20">
                      {service.metrics}
                    </span>
                    <span className="text-[var(--brand-orange)] font-bold">{service.metricDetail}</span>
                  </div>
                </div>

                <div className="pt-3 mt-3 border-t border-slate-100 flex items-center justify-between">
                  <button
                    onClick={() => onSelectService && onSelectService(service.id)}
                    className="text-xs font-bold text-[var(--primary-blue)] hover:text-[var(--deep-navy)] flex items-center gap-1 cursor-pointer min-h-[36px]"
                  >
                    <span>Explore Breakdown</span>
                    <ExternalLink className="w-3 h-3" />
                  </button>
                  <button
                    onClick={onOpenQuote}
                    className="btn-primary text-xs !py-1 !px-3.5 min-h-[36px]"
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
