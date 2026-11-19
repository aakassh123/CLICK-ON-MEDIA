import React, { useState, useEffect, useRef } from 'react';
import RevealHeading from './RevealHeading';
import { 
  ArrowRight, 
  ArrowLeft, 
  Zap, 
  TrendingUp, 
  ExternalLink,
  CheckCircle2
} from 'lucide-react';

export default function OurWork({ onSelectProject }) {
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isInView, setIsInView] = useState(false);
  
  const sectionRef = useRef(null);
  const lastWheelTimeRef = useRef(0);
  const touchStartXRef = useRef(0);
  const touchEndXRef = useRef(0);

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

  // Detect when section is in view for smooth auto-play
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsInView(entry.isIntersecting);
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Smooth auto-slide every 5 seconds when in view and not hovered
  useEffect(() => {
    if (!isInView || isHovered) return;

    const timer = setInterval(() => {
      setActiveProjectIndex((prev) => (prev + 1) % projects.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [isInView, isHovered, projects.length]);

  // Navigate to specific project
  const goToProject = (targetIndex) => {
    const safeIdx = Math.max(0, Math.min(targetIndex, projects.length - 1));
    setActiveProjectIndex(safeIdx);
  };

  const handleNext = () => {
    setActiveProjectIndex((prev) => (prev + 1) % projects.length);
  };

  const handlePrev = () => {
    setActiveProjectIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  // Optional mouse wheel gesture over the card: scrolls through projects smoothly
  const handleCardWheel = (e) => {
    const now = Date.now();
    if (now - lastWheelTimeRef.current < 600) return;

    if (Math.abs(e.deltaY) > 25) {
      if (e.deltaY > 0 && activeProjectIndex < projects.length - 1) {
        // Slide to next project
        lastWheelTimeRef.current = now;
        setActiveProjectIndex((prev) => prev + 1);
      } else if (e.deltaY < 0 && activeProjectIndex > 0) {
        // Slide to previous project
        lastWheelTimeRef.current = now;
        setActiveProjectIndex((prev) => prev - 1);
      }
    }
  };

  // Touch swipe support for mobile
  const handleTouchStart = (e) => {
    touchStartXRef.current = e.touches[0].clientX;
    touchEndXRef.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndXRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const diff = touchStartXRef.current - touchEndXRef.current;
    if (Math.abs(diff) > 45) {
      if (diff > 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }
  };

  return (
    // Clean, natural-height section with ZERO unwanted spacing or blank voids
    <section 
      id="work" 
      ref={sectionRef}
      className="relative py-12 sm:py-16 lg:py-20 bg-transparent border-t border-slate-200/60 text-[var(--text-dark)] overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background Soft Glows */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-50/60 rounded-full blur-3xl pointer-events-none -z-0" />
      <div className="absolute bottom-1/4 left-10 w-80 h-80 bg-orange-50/60 rounded-full blur-3xl pointer-events-none -z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        
        {/* Header with Title and Narrative */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 pb-4 border-b border-slate-200/80 mb-6">
          <div className="space-y-1.5">
            <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full bg-white border border-[var(--primary-blue)]/20 text-xs font-bold text-[var(--primary-blue)] shadow-xs">
              <Zap className="w-3.5 h-3.5 fill-[var(--primary-blue)]" />
              <span>Proven Agency Portfolio</span>
            </div>

            <RevealHeading tag="h2" delay={120} direction="up" blur={true} className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[#0A1F6B] tracking-tight leading-tight font-heading">
              Projects That Create{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0B5CFF] via-[#00C8FF] to-[#FF7A00]">
                Real Impact
              </span>
            </RevealHeading>

            <p className="text-xs sm:text-sm text-[#071133] font-bold max-w-xl drop-shadow-[0_1px_2px_rgba(255,255,255,0.95)]">
              Watch our client case studies shatter benchmarks. Slide through our featured work or click any project to view its full case study.
            </p>
          </div>

          {/* Quick Navigation Controls */}
          <div className="flex items-center gap-2 self-start sm:self-auto">
            <span className="text-xs font-mono font-bold text-slate-500 mr-2">
              <span className="text-[#0A1F6B] font-extrabold text-sm">0{activeProjectIndex + 1}</span> / 0{projects.length}
            </span>
            <button
              onClick={handlePrev}
              className="w-8 h-8 rounded-full bg-white border border-slate-200 hover:border-[var(--brand-orange)] text-slate-700 hover:text-[var(--brand-orange)] flex items-center justify-center transition-all shadow-xs cursor-pointer"
              title="Previous Project"
              aria-label="Previous Project"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <button
              onClick={handleNext}
              className="w-8 h-8 rounded-full bg-white border border-slate-200 hover:border-[var(--brand-orange)] text-slate-700 hover:text-[var(--brand-orange)] flex items-center justify-center transition-all shadow-xs cursor-pointer"
              title="Next Project"
              aria-label="Next Project"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* ===================================================================== */}
        {/* MAIN SLIDING CARD STAGE (ONE PROJECT AT A TIME, SMOOTH SLIDE)        */}
        {/* ===================================================================== */}
        <div 
          onWheel={handleCardWheel}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          className="relative w-full rounded-3xl bg-white border border-slate-200/90 shadow-[0_20px_60px_-15px_rgba(10,31,107,0.12)] overflow-hidden"
        >
          {/* Top Luminous Brand Bar */}
          <div className="h-1.5 w-full bg-gradient-to-r from-[var(--cyan-accent)] via-[var(--primary-blue)] to-[var(--brand-orange)]" />

          {/* Sliding Carousel Track (Horizontal slide transition) */}
          <div 
            className="flex w-full transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] will-change-transform"
            style={{ transform: `translate3d(-${activeProjectIndex * 100}%, 0, 0)` }}
          >
            {projects.map((project, idx) => {
              const isActive = activeProjectIndex === idx;
              return (
                <div 
                  key={project.id} 
                  className={`w-full flex-shrink-0 transition-opacity duration-700 ease-out ${
                    isActive ? 'opacity-100' : 'opacity-30 pointer-events-none'
                  }`}
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-7 lg:gap-8 items-center p-5 sm:p-7 lg:p-9 relative">
                    
                    {/* Left Column: Visual Showcase (7 Cols) */}
                    <div className="lg:col-span-7">
                      <div 
                        onClick={() => onSelectProject(project)}
                        className="relative aspect-video sm:aspect-[16/10] w-full rounded-2xl overflow-hidden bg-slate-900 border border-slate-200 shadow-xl cursor-pointer group"
                      >
                        <img
                          src={project.image}
                          alt={`${project.title} - ${project.category}`}
                          className={`w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105 ${
                            isActive ? 'scale-100' : 'scale-105'
                          }`}
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-black/20" />

                        {/* Category Pill Tag */}
                        <div className="absolute top-3 left-3 sm:top-4 sm:left-4">
                          <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-black/70 backdrop-blur-md text-white border border-white/20 shadow-md">
                            {project.category}
                          </span>
                        </div>

                        {/* Client Tag */}
                        <div className="absolute top-3 right-3 sm:top-4 sm:right-4">
                          <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-bold bg-white/90 backdrop-blur-md text-slate-800 border border-white/40 shadow-xs">
                            #{project.number}
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
                          {project.number}
                        </span>
                        <div className="h-4 w-px bg-slate-200" />
                        <span className="text-xs font-bold uppercase tracking-wider text-[var(--text-muted)] font-heading">
                          Client: {project.client}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-[var(--deep-navy)] tracking-tight leading-snug font-heading">
                        {project.title}
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
                            {project.results}
                          </span>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal line-clamp-3">
                        {project.description}
                      </p>

                      {/* Key Highlights Checklist */}
                      <div className="space-y-1 pt-0.5">
                        {project.highlights.slice(0, 3).map((item, hIdx) => (
                          <div key={hIdx} className="flex items-start gap-2 text-xs text-slate-700">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0 mt-0.5" />
                            <span className="line-clamp-1">{item}</span>
                          </div>
                        ))}
                      </div>

                      {/* Services Tags */}
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {project.tags.map((tag, tIdx) => (
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
                          onClick={() => onSelectProject(project)}
                          className="btn-primary text-xs sm:text-sm !py-2.5 !px-6 group w-full sm:w-auto justify-center shadow-md font-heading font-bold cursor-pointer flex items-center gap-2"
                        >
                          <span>Open Dedicated Case Study Page</span>
                          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </button>
                      </div>

                    </div>

                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom Interactive Navigation & Progress Bar */}
          <div className="border-t border-slate-100 bg-slate-50/80 px-4 sm:px-8 py-3 flex flex-col sm:flex-row items-center justify-between gap-3">
            
            {/* Interactive Slide Tabs */}
            <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto no-scrollbar max-w-full">
              {projects.map((proj, pIdx) => {
                const isActive = activeProjectIndex === pIdx;
                return (
                  <button
                    key={proj.id}
                    onClick={() => goToProject(pIdx)}
                    className={`px-3 py-1 rounded-full text-xs font-heading font-bold transition-all cursor-pointer whitespace-nowrap flex items-center gap-1.5 ${
                      isActive
                        ? 'bg-[#0A1F6B] text-white shadow-sm ring-2 ring-[var(--brand-orange)]/60 scale-[1.02]'
                        : 'bg-white text-slate-600 hover:text-[#0A1F6B] hover:bg-slate-200/60 border border-slate-200'
                    }`}
                  >
                    <span className={isActive ? 'text-[var(--brand-orange)] font-mono' : 'text-slate-400 font-mono'}>
                      0{pIdx + 1}
                    </span>
                    <span className="hidden xs:inline">{proj.title}</span>
                  </button>
                );
              })}
            </div>

            {/* Progress Indicator */}
            <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
              <span className="hidden md:inline text-[11px] font-sans text-slate-500">Auto-playing • Click or swipe</span>
              <div className="w-24 sm:w-32 h-1.5 bg-slate-200 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-[var(--primary-blue)] to-[var(--brand-orange)] transition-all duration-500"
                  style={{ width: `${((activeProjectIndex + 1) / projects.length) * 100}%` }}
                />
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
