import React, { useState, useEffect, useRef } from 'react';
import { 
  ArrowRight, 
  ArrowLeft, 
  Zap, 
  Sparkles, 
  TrendingUp, 
  ExternalLink,
  Layers,
  LayoutGrid,
  CheckCircle2,
  ChevronRight,
  Play,
  Pause
} from 'lucide-react';

// =========================================================================
// 6 ASYMMETRICAL GLASS POLYGON SHARDS FOR BUTTERY-SMOOTH SHATTER BREAK
// =========================================================================
const SHARD_CONFIGS = [
  {
    id: 'shard-0',
    clipPath: 'polygon(0% 0%, 55% 0%, 45% 50%, 0% 40%)',
    animClass: 'animate-shard-0'
  },
  {
    id: 'shard-1',
    clipPath: 'polygon(55% 0%, 100% 0%, 100% 50%, 45% 50%)',
    animClass: 'animate-shard-1'
  },
  {
    id: 'shard-2',
    clipPath: 'polygon(45% 50%, 70% 45%, 55% 80%, 30% 70%)',
    animClass: 'animate-shard-2'
  },
  {
    id: 'shard-3',
    clipPath: 'polygon(0% 40%, 45% 50%, 30% 70%, 40% 100%, 0% 100%)',
    animClass: 'animate-shard-3'
  },
  {
    id: 'shard-4',
    clipPath: 'polygon(70% 45%, 100% 50%, 100% 100%, 40% 100%, 55% 80%)',
    animClass: 'animate-shard-4'
  },
  {
    id: 'shard-5',
    clipPath: 'polygon(45% 50%, 100% 50%, 70% 45%)',
    animClass: 'animate-shard-5'
  }
];

export default function OurWork({ onSelectProject }) {
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);
  const [breakingProject, setBreakingProject] = useState(null);
  const [isBreaking, setIsBreaking] = useState(false);
  const [breakKey, setBreakKey] = useState(0);
  
  const [activeFilter, setActiveFilter] = useState('All');
  const [viewMode, setViewMode] = useState('showcase'); // 'showcase' | 'grid'
  
  const sectionRef = useRef(null);
  const targetIndexRef = useRef(0);
  const isBreakingRef = useRef(false);
  const activeIndexRef = useRef(0);
  
  const touchStartXRef = useRef(0);
  const touchEndXRef = useRef(0);

  const filters = ['All', 'Website', 'Marketing', 'Branding', 'Software'];

  const projects = [
    {
      id: 'mapaz-hotel',
      number: '01',
      title: 'MAPAZ Hotel',
      category: 'Luxury Hospitality',
      tags: ['Website', 'Branding', 'SEO'],
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=85',
      client: 'MAPAZ Luxury Stays',
      summary: 'Complete brand overhaul, direct booking web platform, and local SEO domination for a premium hotel chain in Uttar Pradesh.',
      description: 'Complete brand overhaul, direct booking web platform, and local SEO domination for a premium luxury hotel in Uttar Pradesh. We eliminated high OTA commission dependencies by engineering a blazing-fast direct reservation platform.',
      highlights: [
        'Custom direct reservation engine with 0% commission leakage',
        'Google Map Pack #1 rankings across Gorakhpur & Eastern UP',
        'Sub-second page load times on mobile 4G/5G networks',
        'Automated WhatsApp booking confirmations and instant receipts'
      ],
      results: '+240% Direct Bookings, #1 Local Ranking in 90 Days',
      accent: 'from-amber-500 to-orange-600',
      badgeColor: 'bg-amber-500/20 text-amber-500 border-amber-500/30'
    },
    {
      id: 'krishna-inn',
      number: '02',
      title: 'Krishna Inn',
      category: 'Resort & Suites',
      tags: ['Website', 'Marketing'],
      image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1200&q=85',
      client: 'Krishna Hospitality Group',
      summary: 'High-conversion booking engine, responsive mobile experience, and automated meta ads campaign with targeted geo-funnels.',
      description: 'Engineered a high-converting luxury resort booking platform with targeted hyper-local Meta & Google ad funnels for Krishna Inn, driving profitable banquet inquiries and direct room bookings.',
      highlights: [
        '3.8x Return on Ad Spend (ROAS) on continuous ad sprints',
        'Seamless event and banquet hall quote calculator',
        'Interactive virtual room and amenity tour experience',
        'High-converting mobile-first booking workflow'
      ],
      results: '3.8x Return on Ad Spend, 45,000+ Monthly Visitors',
      accent: 'from-orange-500 to-red-500',
      badgeColor: 'bg-orange-500/20 text-orange-500 border-orange-500/30'
    },
    {
      id: 'era-of-education',
      number: '03',
      title: 'Era of Education',
      category: 'EdTech Portal',
      tags: ['Website', 'Marketing', 'Software'],
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=85',
      client: 'Era Global EdTech',
      summary: 'Interactive learning management portal with custom student dashboards and high-volume student admissions funnels.',
      description: 'Architected an interactive, multi-tier learning management portal and student admission funnels for Era of Education, connecting tens of thousands of learners across North India with high-quality educational programs.',
      highlights: [
        'Scalable student and instructor interactive dashboards',
        'Automated admissions and lead qualification pipeline',
        'Over 12,000 active enrolled students with 99.98% uptime',
        'Real-time student progress tracking and automated certifications'
      ],
      results: '+310% Enrolment Rate, 12,000+ Active Students',
      accent: 'from-blue-600 to-cyan-500',
      badgeColor: 'bg-blue-500/20 text-blue-500 border-blue-500/30'
    },
    {
      id: 'shivoy-distributors',
      number: '04',
      title: 'Shivoy Distributors',
      category: 'B2B Enterprise Distribution',
      tags: ['Website', 'Branding', 'Software'],
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=85',
      client: 'Shivoy National Distributors',
      summary: 'B2B wholesale digital catalog, automated order inquiry workflow, and corporate branding identity for multi-state distributor.',
      description: 'Designed a modern B2B enterprise distribution portal, digital wholesale catalog, and automated bulk-order inquiry system for Shivoy National Distributors, streamlining multi-state supply chain interactions.',
      highlights: [
        'Interactive digital product catalog with real-time stock status',
        '+180% increase in validated wholesale dealer inquiries',
        'Role-based dealer pricing and volume-discount engine',
        'Zero downtime enterprise architecture'
      ],
      results: '+180% Wholesale Inquiries, Zero Downtime',
      accent: 'from-blue-700 to-indigo-600',
      badgeColor: 'bg-indigo-500/20 text-indigo-500 border-indigo-500/30'
    },
    {
      id: 'barkat-welfare',
      number: '05',
      title: 'Barkat Welfare Society',
      category: 'NGO & Social Impact',
      tags: ['Website', 'Branding'],
      image: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=1200&q=85',
      client: 'Barkat Welfare Trust',
      summary: 'Transparent donation portal, humanitarian campaign hubs, and community outreach storytelling reaching thousands.',
      description: 'Built an inspiring humanitarian storytelling platform with instant multi-currency donation gateways and real-time project milestone tracking for Barkat Welfare Society.',
      highlights: [
        'Instant UPI, card, and net-banking donation workflows',
        'Transparent real-time impact and relief campaign dashboards',
        'Over 50,000 community beneficiaries reached',
        '4.5x surge in recurring online donor contributions'
      ],
      results: '4.5x Online Contributions, 50,000+ Beneficiaries',
      accent: 'from-emerald-600 to-teal-500',
      badgeColor: 'bg-emerald-500/20 text-emerald-500 border-emerald-500/30'
    }
  ];

  const filteredProjects = projects.filter((project) => {
    if (activeFilter === 'All') return true;
    return project.tags.includes(activeFilter);
  });

  const currentProject = projects[activeProjectIndex] || projects[0];

  // Sync ref values for high-frequency scroll listeners
  useEffect(() => {
    activeIndexRef.current = activeProjectIndex;
  }, [activeProjectIndex]);

  useEffect(() => {
    isBreakingRef.current = isBreaking;
  }, [isBreaking]);

  // =========================================================================
  // TRIGGER BUTTERY-SMOOTH CARD BREAK & REVEAL NEXT (PRESERVED ANIMATION)
  // =========================================================================
  const triggerBreakTo = (targetIndex) => {
    if (targetIndex === activeIndexRef.current || isBreakingRef.current) return;
    
    const currentIndex = activeIndexRef.current;
    setBreakingProject(projects[currentIndex]);
    setActiveProjectIndex(targetIndex);
    setIsBreaking(true);
    isBreakingRef.current = true;
    setBreakKey((prev) => prev + 1);

    // After shatter duration (750ms), cleanup breaking layer
    setTimeout(() => {
      setIsBreaking(false);
      isBreakingRef.current = false;
      setBreakingProject(null);

      // If scroll continued moving while breaking, smoothly catch up
      if (targetIndexRef.current !== targetIndex && targetIndexRef.current >= 0 && targetIndexRef.current < projects.length) {
        triggerBreakTo(targetIndexRef.current);
      }
    }, 750);
  };

  const handleNext = () => {
    if (isBreaking) return;
    const nextIdx = (activeProjectIndex + 1) % projects.length;
    triggerBreakTo(nextIdx);
  };

  const handlePrev = () => {
    if (isBreaking) return;
    const prevIdx = (activeProjectIndex - 1 + projects.length) % projects.length;
    triggerBreakTo(prevIdx);
  };

  // =========================================================================
  // SCROLL-DRIVEN AUTO CARD CHANGE (TRIGGERS AS USER SCROLLS THIS SECTION)
  // =========================================================================
  useEffect(() => {
    if (viewMode !== 'showcase') return;

    let rafId = null;

    const handleScroll = () => {
      if (rafId) cancelAnimationFrame(rafId);
      
      rafId = requestAnimationFrame(() => {
        const el = sectionRef.current;
        if (!el) return;

        const rect = el.getBoundingClientRect();
        const sectionHeight = el.offsetHeight;
        const windowHeight = window.innerHeight;
        const stickyOffset = 80; // approximate top offset of sticky element

        // Distance scrolled past the point where section becomes sticky
        const scrolledDistance = -rect.top + stickyOffset;
        const scrollableDistance = sectionHeight - windowHeight;

        if (scrollableDistance <= 0) return;

        // Progress goes from 0.0 to 1.0 through the section
        if (scrolledDistance >= 0 && scrolledDistance <= scrollableDistance) {
          const progress = Math.min(Math.max(scrolledDistance / scrollableDistance, 0), 0.999);
          const computedTargetIndex = Math.min(
            Math.floor(progress * projects.length),
            projects.length - 1
          );

          targetIndexRef.current = computedTargetIndex;

          if (computedTargetIndex !== activeIndexRef.current && !isBreakingRef.current) {
            triggerBreakTo(computedTargetIndex);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [viewMode, projects.length]);

  // Click on top pill jumps scroll to that exact project's segment
  const handlePillClick = (idx) => {
    if (idx === activeProjectIndex || isBreaking) return;
    triggerBreakTo(idx);

    if (sectionRef.current) {
      const rect = sectionRef.current.getBoundingClientRect();
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const sectionTop = rect.top + scrollTop;
      const sectionHeight = sectionRef.current.offsetHeight;
      const windowHeight = window.innerHeight;
      const scrollableDistance = sectionHeight - windowHeight;

      if (scrollableDistance > 0) {
        // Scroll to the midpoint of the target card segment
        const segmentProgress = (idx + 0.3) / projects.length;
        const targetScroll = sectionTop - 80 + segmentProgress * scrollableDistance;
        window.scrollTo({ top: targetScroll, behavior: 'smooth' });
      }
    }
  };

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
      id="work" 
      ref={sectionRef}
      className="bg-white relative overflow-hidden text-[var(--text-dark)]"
    >
      {/* Background Subtle Ambience */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-50/70 rounded-full blur-3xl pointer-events-none -z-0" />
      <div className="absolute bottom-1/4 left-10 w-80 h-80 bg-orange-50/70 rounded-full blur-3xl pointer-events-none -z-0" />

      {/* ========================================================================= */}
      {/* 1. SCROLL-DRIVEN SHOWCASE THEATER (Cards Auto-Change on Scroll)           */}
      {/* ========================================================================= */}
      {viewMode === 'showcase' ? (
        /* Outer Scroll Track: gives ample height so scrolling naturally drives card transitions */
        <div className="relative h-[250vh] sm:h-[280vh] lg:h-[300vh]">
          
          {/* Sticky Theater Viewport: remains locked on screen while scrolling through track */}
          <div className="sticky top-16 sm:top-20 min-h-[calc(100vh-80px)] flex flex-col justify-center py-6 sm:py-8 lg:py-10 z-20">
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
              
              {/* Header with Title and Mode Switcher */}
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-5 border-b border-slate-200 mb-5">
                <div className="space-y-2">
                  {/* Pill Tag */}
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--primary-blue)]/10 border border-[var(--primary-blue)]/20 text-xs font-bold text-[var(--primary-blue)] shadow-xs">
                    <Zap className="w-3.5 h-3.5 fill-[var(--primary-blue)]" />
                    <span>Scroll To Reveal Our Work</span>
                  </div>

                  {/* Headline */}
                  <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[var(--deep-navy)] tracking-tight leading-tight font-heading">
                    Projects That Create{' '}
                    <span className="text-gradient-brand">Real Impact</span>
                  </h2>
                  <p className="text-xs sm:text-sm text-[var(--text-muted)] font-normal max-w-xl">
                    Scroll down through this section to watch each project break benchmarks. Click any card to view its dedicated full page.
                  </p>
                </div>

                {/* View Mode Controls & Filter Buttons */}
                <div className="flex items-center gap-3">
                  <div className="inline-flex p-1 bg-slate-100 rounded-2xl border border-slate-200 shadow-sm">
                    <button
                      onClick={() => setViewMode('showcase')}
                      className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all bg-gradient-to-r from-[var(--brand-orange)] to-[var(--amber)] text-white shadow-sm cursor-pointer"
                    >
                      <Layers className="w-3.5 h-3.5" />
                      <span>Scroll Showcase</span>
                    </button>
                    <button
                      onClick={() => setViewMode('grid')}
                      className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all text-slate-600 hover:text-slate-900 cursor-pointer"
                    >
                      <LayoutGrid className="w-3.5 h-3.5" />
                      <span>All Projects Grid</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Top Project Selector Tabs & Controls Bar */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-4">
                
                {/* Project Buttons Tabs */}
                <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto pb-1 max-w-full no-scrollbar">
                  {projects.map((proj, idx) => {
                    const isActive = activeProjectIndex === idx;
                    return (
                      <button
                        key={proj.id}
                        onClick={() => handlePillClick(idx)}
                        disabled={isBreaking}
                        className={`flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold transition-all duration-300 cursor-pointer flex-shrink-0 ${
                          isActive
                            ? 'bg-[var(--deep-navy)] text-white shadow-md ring-2 ring-[var(--cyan-accent)]/50 scale-[1.02]'
                            : 'bg-slate-100 text-slate-700 hover:bg-slate-200/80 border border-slate-200/80'
                        }`}
                      >
                        <span className={`w-4.5 h-4.5 rounded-full flex items-center justify-center font-mono text-[10px] font-bold ${
                          isActive ? 'bg-[var(--brand-orange)] text-white' : 'bg-slate-200 text-slate-600'
                        }`}>
                          {proj.number}
                        </span>
                        <span className="font-heading tracking-wide">{proj.title}</span>
                      </button>
                    );
                  })}
                </div>

                {/* Navigation Arrows & Counter */}
                <div className="flex items-center gap-2.5 flex-shrink-0 self-end sm:self-auto">
                  <span className="text-xs font-mono font-bold text-slate-700 bg-slate-100 px-3 py-1 rounded-full border border-slate-200">
                    0{activeProjectIndex + 1} / 0{projects.length}
                  </span>

                  <button
                    onClick={handlePrev}
                    disabled={isBreaking}
                    className="w-8 h-8 rounded-full bg-slate-100 border border-slate-200 hover:bg-[var(--deep-navy)] hover:text-white hover:border-[var(--deep-navy)] text-slate-700 flex items-center justify-center transition-all cursor-pointer shadow-xs active:scale-95 disabled:opacity-50"
                    aria-label="Previous project"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" />
                  </button>

                  <button
                    onClick={handleNext}
                    disabled={isBreaking}
                    className="w-8 h-8 rounded-full bg-slate-100 border border-slate-200 hover:bg-[var(--brand-orange)] hover:text-white hover:border-[var(--brand-orange)] text-slate-700 flex items-center justify-center transition-all cursor-pointer shadow-xs active:scale-95 disabled:opacity-50"
                    aria-label="Next project"
                  >
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>

              {/* ========================================================================= */}
              {/* MAIN BREAK & REVEAL CARD STAGE (100% PRESERVED ANIMATION)                 */}
              {/* ========================================================================= */}
              <div 
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
                className="relative w-full rounded-3xl bg-white border border-slate-200/90 shadow-[0_20px_60px_-15px_rgba(10,31,107,0.12)] overflow-hidden"
                style={{ perspective: '1200px' }}
              >
                {/* Top Luminous Brand Bar */}
                <div className="h-1.5 w-full bg-gradient-to-r from-[var(--cyan-accent)] via-[var(--primary-blue)] to-[var(--brand-orange)]" />

                {/* ----------------------------------------------------------------- */}
                {/* ACTIVE INCOMING CARD (Appears smoothly underneath)                */}
                {/* ----------------------------------------------------------------- */}
                <div className={`w-full ${isBreaking ? 'animate-card-appear' : ''}`}>
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center p-5 sm:p-7 lg:p-10 relative">
                    
                    {/* Shockwave border glow during break transition */}
                    {isBreaking && (
                      <div className="absolute inset-0 pointer-events-none rounded-3xl border-2 border-[var(--cyan-accent)]/80 animate-card-shockwave" />
                    )}

                    {/* Left Column: Visual Showcase (7 Cols) */}
                    <div className="lg:col-span-7">
                      <div 
                        onClick={() => onSelectProject(currentProject)}
                        className="relative aspect-video sm:aspect-[16/10] w-full rounded-2xl overflow-hidden bg-slate-900 border border-slate-200 shadow-xl cursor-pointer group"
                      >
                        <img
                          src={currentProject.image}
                          alt={`${currentProject.title} - ${currentProject.category}`}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                          loading="eager"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-black/20" />

                        {/* Category Pill Tag */}
                        <div className="absolute top-3 left-3 sm:top-4 sm:left-4">
                          <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-black/70 backdrop-blur-md text-white border border-white/20 shadow-md">
                            {currentProject.category}
                          </span>
                        </div>

                        {/* Client Tag */}
                        <div className="absolute top-3 right-3 sm:top-4 sm:right-4">
                          <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-bold bg-white/90 backdrop-blur-md text-slate-800 border border-white/40 shadow-xs">
                            #{currentProject.number}
                          </span>
                        </div>

                        {/* Hover Overlay Button: Click opens dedicated page */}
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40 backdrop-blur-xs">
                          <div className="px-5 py-2.5 rounded-full bg-[var(--brand-orange)] text-white font-bold text-sm flex items-center gap-2 shadow-xl">
                            <span>Open Dedicated Case Study Page</span>
                            <ExternalLink className="w-4 h-4" />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Right Column: Case Study Narrative & Results (5 Cols) */}
                    <div className="lg:col-span-5 space-y-3 sm:space-y-4">
                      
                      {/* Number & Client */}
                      <div className="flex items-center gap-3">
                        <span className="text-2xl sm:text-3xl font-black font-mono text-[var(--brand-orange)]">
                          {currentProject.number}
                        </span>
                        <div className="h-4 w-px bg-slate-200" />
                        <span className="text-xs font-bold uppercase tracking-wider text-[var(--text-muted)] font-heading">
                          Client: {currentProject.client}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-[var(--deep-navy)] tracking-tight leading-snug font-heading">
                        {currentProject.title}
                      </h3>

                      {/* Measurable Results Callout Pill */}
                      <div className="p-3 rounded-2xl bg-gradient-to-r from-[var(--primary-blue)]/10 via-[var(--primary-blue)]/5 to-[var(--brand-orange)]/10 border border-[var(--primary-blue)]/20 flex items-center gap-3">
                        <div className="w-7 h-7 rounded-xl bg-gradient-to-r from-[var(--brand-orange)] to-[var(--amber)] text-white flex items-center justify-center flex-shrink-0 shadow-xs">
                          <TrendingUp className="w-3.5 h-3.5" />
                        </div>
                        <div>
                          <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--text-muted)] block font-heading">
                            Verified Measurable Impact
                          </span>
                          <span className="text-xs sm:text-sm font-extrabold text-[var(--deep-navy)] font-heading">
                            {currentProject.results}
                          </span>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal line-clamp-3">
                        {currentProject.description}
                      </p>

                      {/* Key Highlights Checklist */}
                      <div className="space-y-1 pt-0.5">
                        {currentProject.highlights.slice(0, 3).map((item, hIdx) => (
                          <div key={hIdx} className="flex items-start gap-2 text-xs text-slate-700">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0 mt-0.5" />
                            <span className="line-clamp-1">{item}</span>
                          </div>
                        ))}
                      </div>

                      {/* Services Tags */}
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {currentProject.tags.map((tag, tIdx) => (
                          <span
                            key={tIdx}
                            className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-slate-100 text-slate-700 border border-slate-200"
                          >
                            ✓ {tag}
                          </span>
                        ))}
                      </div>

                      {/* Action CTA: Opens dedicated Case Study Page */}
                      <div className="pt-1">
                        <button
                          onClick={() => onSelectProject(currentProject)}
                          className="btn-primary text-xs sm:text-sm !py-2.5 !px-6 group w-full sm:w-auto justify-center shadow-md font-heading font-bold cursor-pointer"
                        >
                          <span>Open Dedicated Case Study Page</span>
                          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </button>
                      </div>

                    </div>

                  </div>
                </div>

                {/* ----------------------------------------------------------------- */}
                {/* OVERLAY: SHATTERING GLASS POLYGONS (Card Breaks into 6 Shards)    */}
                {/* ----------------------------------------------------------------- */}
                {isBreaking && breakingProject && (
                  <div 
                    key={`break-${breakKey}`}
                    className="absolute inset-0 z-30 pointer-events-none overflow-hidden"
                    style={{ perspective: '1200px' }}
                  >
                    {SHARD_CONFIGS.map((shard) => (
                      <div
                        key={shard.id}
                        className={`absolute inset-0 ${shard.animClass}`}
                        style={{
                          clipPath: shard.clipPath,
                          WebkitClipPath: shard.clipPath,
                          transformStyle: 'preserve-3d'
                        }}
                      >
                        {/* Mirror Image of Outgoing Breaking Card */}
                        <div className="w-full h-full bg-white">
                          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center p-5 sm:p-7 lg:p-10">
                            
                            {/* Shard Left Visual */}
                            <div className="lg:col-span-7">
                              <div className="relative aspect-video sm:aspect-[16/10] w-full rounded-2xl overflow-hidden bg-slate-900 shadow-xl">
                                <img
                                  src={breakingProject.image}
                                  alt={breakingProject.title}
                                  className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-black/20" />
                                <div className="absolute top-3 left-3 sm:top-4 sm:left-4">
                                  <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-black/70 text-white">
                                    {breakingProject.category}
                                  </span>
                                </div>
                              </div>
                            </div>

                            {/* Shard Right Content */}
                            <div className="lg:col-span-5 space-y-3 sm:space-y-4">
                              <div className="flex items-center gap-3">
                                <span className="text-2xl sm:text-3xl font-black font-mono text-[var(--brand-orange)]">
                                  {breakingProject.number}
                                </span>
                                <div className="h-4 w-px bg-slate-200" />
                                <span className="text-xs font-bold uppercase text-[var(--text-muted)] font-heading">
                                  Client: {breakingProject.client}
                                </span>
                              </div>

                              <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-[var(--deep-navy)] font-heading">
                                {breakingProject.title}
                              </h3>

                              <div className="p-3 rounded-2xl bg-[var(--primary-blue)]/10 border border-[var(--primary-blue)]/20 flex items-center gap-3">
                                <div className="w-7 h-7 rounded-xl bg-[var(--brand-orange)] text-white flex items-center justify-center">
                                  <TrendingUp className="w-3.5 h-3.5" />
                                </div>
                                <span className="text-xs sm:text-sm font-bold text-[var(--deep-navy)] font-heading">
                                  {breakingProject.results}
                                </span>
                              </div>
                            </div>

                          </div>
                        </div>

                        {/* Glowing Crystal Edge Highlight */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-[var(--cyan-accent)]/20 via-white/10 to-[var(--brand-orange)]/25 pointer-events-none" />
                      </div>
                    ))}
                  </div>
                )}

                {/* Bottom Progress Bar */}
                <div className="h-1.5 w-full bg-slate-100 relative">
                  <div 
                    className="h-full bg-gradient-to-r from-[var(--primary-blue)] via-[var(--cyan-accent)] to-[var(--brand-orange)] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                    style={{ width: `${((activeProjectIndex + 1) / projects.length) * 100}%` }}
                  />
                </div>

              </div>

            </div>

          </div>

        </div>
      ) : (
        /* ========================================================================= */
        /* 2. ALL PROJECTS GRID VIEW (When Toggled to View All Cards)                 */
        /* ========================================================================= */
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
          
          {/* Header in Grid Mode */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-slate-200 mb-8">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[var(--primary-blue)]/10 border border-[var(--primary-blue)]/20 text-xs sm:text-sm font-bold text-[var(--primary-blue)] shadow-xs">
                <Zap className="w-3.5 h-3.5 fill-[var(--primary-blue)]" />
                <span>All Projects Grid</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[var(--deep-navy)] tracking-tight leading-tight font-heading">
                Client Portfolio <span className="text-gradient-brand">Showcase</span>
              </h2>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={() => setViewMode('showcase')}
                className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold transition-all bg-[var(--deep-navy)] text-white shadow-sm cursor-pointer"
              >
                <Layers className="w-3.5 h-3.5" />
                <span>Return to Scroll Showcase</span>
              </button>

              <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-100 rounded-2xl border border-slate-200">
                {filters.map((filter) => {
                  const isActive = activeFilter === filter;
                  return (
                    <button
                      key={filter}
                      onClick={() => setActiveFilter(filter)}
                      className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                        isActive
                          ? 'bg-[var(--primary-blue)] text-white shadow-sm'
                          : 'text-slate-600 hover:text-slate-900'
                      }`}
                    >
                      {filter}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                onClick={() => onSelectProject(project)}
                className="group relative bg-white rounded-3xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-1.5 cursor-pointer flex flex-col justify-between"
              >
                <div>
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-900">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                    
                    <div className="absolute top-3 left-3">
                      <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-black/70 backdrop-blur-md text-white border border-white/20">
                        {project.category}
                      </span>
                    </div>

                    <div className="absolute top-3 right-3 font-mono font-bold text-xs bg-black/60 backdrop-blur-md text-white px-2.5 py-1 rounded-full border border-white/20">
                      {project.number}
                    </div>
                  </div>

                  <div className="p-6 space-y-2">
                    <div className="text-xs font-bold text-[var(--brand-orange)] font-mono uppercase">
                      Client: {project.client}
                    </div>

                    <h3 className="text-xl font-extrabold text-[var(--deep-navy)] group-hover:text-[var(--primary-blue)] transition-colors font-heading">
                      {project.title}
                    </h3>
                    
                    <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
                      {project.summary}
                    </p>

                    <div className="pt-2 flex items-center gap-2 text-xs font-bold text-emerald-600">
                      <TrendingUp className="w-3.5 h-3.5" />
                      <span>{project.results}</span>
                    </div>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-3 flex items-center justify-between border-t border-slate-100">
                  <span className="text-xs font-bold text-[var(--primary-blue)] group-hover:text-[var(--brand-orange)] flex items-center gap-1 transition-colors">
                    Open Dedicated Page
                  </span>
                  <div className="w-8 h-8 rounded-full bg-slate-100 text-slate-700 flex items-center justify-center group-hover:bg-[var(--brand-orange)] group-hover:text-white transition-all shadow-xs">
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      )}

    </section>
  );
}
