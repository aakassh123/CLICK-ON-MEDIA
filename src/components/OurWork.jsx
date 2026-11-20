import React, { useState, useMemo } from 'react';
import RevealHeading from './RevealHeading';
import { 
  ArrowRight, 
  ExternalLink,
  Sparkles,
  TrendingUp,
  Globe,
  Film,
  Code2,
  Palette,
  Share2,
  CheckCircle2,
  MessageCircle,
  Phone,
  Layers,
  ChevronRight
} from 'lucide-react';
import { PORTFOLIO_CATEGORIES, PROJECTS_DATA } from '../data/projectsData';

const CATEGORY_ICONS = {
  'all': Sparkles,
  'websites': Globe,
  'video-editing': Film,
  'software': Code2,
  'graphic-design': Palette,
  'social-media': Share2
};

export default function OurWork({ onSelectProject, onOpenPortfolio }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [visibleCount, setVisibleCount] = useState(9);

  const allProjects = useMemo(() => Object.values(PROJECTS_DATA), []);

  // Filter projects based on activeCategory
  const filteredProjects = useMemo(() => {
    if (activeCategory === 'all') {
      return allProjects;
    }
    return allProjects.filter((p) => p.categoryKey === activeCategory);
  }, [activeCategory, allProjects]);

  // Projects to display (handles pagination / view more on "All")
  const displayedProjects = useMemo(() => {
    if (activeCategory === 'all') {
      return filteredProjects.slice(0, visibleCount);
    }
    return filteredProjects;
  }, [activeCategory, filteredProjects, visibleCount]);

  const handleCategoryChange = (catId) => {
    setActiveCategory(catId);
    setVisibleCount(9);
  };

  const handleShowAll = () => {
    setVisibleCount(allProjects.length);
  };

  return (
    <section 
      id="work" 
      className="relative py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-white via-slate-50/50 to-white border-t border-slate-200/60 text-[var(--text-dark)] overflow-hidden"
    >
      {/* Background Soft Glow Accents */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[var(--primary-blue)]/5 rounded-full blur-3xl pointer-events-none -z-0" />
      <div className="absolute bottom-1/4 left-10 w-96 h-96 bg-[var(--brand-orange)]/5 rounded-full blur-3xl pointer-events-none -z-0" />

      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 w-full relative z-10">
        
        {/* ===================================================================== */}
        {/* 1. SECTION HEADER (Attractive, High-Impact & Mobile-Optimized)        */}
        {/* ===================================================================== */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12 space-y-3 sm:space-y-4 relative">
          
          {/* Ambient glow behind heading on mobile & desktop */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-xl h-28 bg-gradient-to-r from-[var(--primary-blue)]/12 via-[var(--cyan-accent)]/12 to-[var(--brand-orange)]/15 rounded-full blur-3xl pointer-events-none -z-10" />

          {/* Top Pill Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 sm:px-5 py-1.5 sm:py-2 rounded-full bg-white/95 backdrop-blur-md border border-[var(--primary-blue)]/25 text-xs sm:text-sm font-semibold text-[#0A1F6B] shadow-[0_4px_20px_rgba(10,31,107,0.06)] mb-1 sm:mb-2 transition-transform hover:scale-105">
            <span className="w-2.5 h-2.5 rounded-full bg-[var(--brand-orange)] shadow-[0_0_10px_#FF7A00] animate-pulse flex-shrink-0" />
            <span className="text-[var(--brand-orange)] uppercase tracking-wider text-[11px] sm:text-xs font-heading font-extrabold whitespace-nowrap">
              Featured Portfolio
            </span>
            <span className="text-slate-300">•</span>
            <span className="text-[#071133] font-bold text-[11px] sm:text-xs flex items-center gap-1.5 whitespace-nowrap">
              <Sparkles className="w-3.5 h-3.5 text-[var(--cyan-accent)] flex-shrink-0" />
              <span>Real Client Results &amp; Growth</span>
            </span>
          </div>

          {/* Main Attractive Responsive Heading */}
          <RevealHeading tag="h2" delay={100} direction="up" blur={true} className="text-[28px] xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-[#0A1F6B] tracking-tight leading-[1.14] font-heading drop-shadow-xs px-1">
            Projects That Create{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0B5CFF] via-[#00C8FF] via-50% to-[#FF7A00] drop-shadow-xs">
              Real Impact
            </span>
          </RevealHeading>

          {/* Subtitle */}
          <p className="text-xs xs:text-sm sm:text-base text-slate-600 font-normal leading-relaxed max-w-2xl mx-auto px-2 sm:px-0">
            Explore verified client transformations delivered across custom websites, viral video reels, cloud software, brand graphics, and performance marketing in Gorakhpur and India.
          </p>

          {/* Glowing Accent Line */}
          <div className="w-24 sm:w-36 h-1 bg-gradient-to-r from-[#0B5CFF] via-[#00C8FF] to-[#FF7A00] rounded-full mx-auto mt-3.5 shadow-[0_0_14px_rgba(255,122,0,0.45)]" />
        </div>

        {/* ===================================================================== */}
        {/* 2. MODERN CATEGORY FILTER TABS (Responsive Horizontal Scroll)         */}
        {/* ===================================================================== */}
        <div className="mb-8 sm:mb-12">
          <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto no-scrollbar py-2.5 px-2 touch-pan-x overscroll-x-contain">
            {PORTFOLIO_CATEGORIES.map((cat) => {
              const Icon = CATEGORY_ICONS[cat.id] || Sparkles;
              const isActive = activeCategory === cat.id;
              
              // Count for this category
              const count = cat.id === 'all' 
                ? allProjects.length 
                : allProjects.filter(p => p.categoryKey === cat.id).length;

              return (
                <button
                  key={cat.id}
                  onClick={() => handleCategoryChange(cat.id)}
                  className={`px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-heading font-bold transition-all cursor-pointer whitespace-nowrap flex items-center gap-2 flex-shrink-0 min-h-[42px] ${
                    isActive
                      ? 'bg-[#0A1F6B] text-white shadow-md ring-2 ring-[var(--brand-orange)]/60 scale-[1.02]'
                      : 'bg-white hover:bg-slate-100 text-slate-700 hover:text-[#0A1F6B] border border-slate-200/90 shadow-2xs'
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0 ${isActive ? 'text-[var(--brand-orange)]' : 'text-slate-400'}`} />
                  <span className="hidden sm:inline">{cat.label}</span>
                  <span className="sm:hidden">{cat.shortLabel}</span>
                  <span className={`text-[10px] font-mono px-1.5 py-0.5 rounded-full ${
                    isActive ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-500'
                  }`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* ===================================================================== */}
        {/* 3. BEAUTIFUL IMAGE-BASED PROJECT CARDS GRID                           */}
        {/* ===================================================================== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-7">
          {displayedProjects.map((project) => {
            const Icon = CATEGORY_ICONS[project.categoryKey] || Globe;
            return (
              <div
                key={project.id}
                onClick={() => onSelectProject && onSelectProject(project)}
                className="group relative rounded-2xl sm:rounded-3xl overflow-hidden border border-slate-200/90 hover:border-[var(--brand-orange)]/60 hover:ring-2 hover:ring-[var(--brand-orange)]/30 hover:shadow-2xl bg-white hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between cursor-pointer"
              >
                {/* 1. TOP SECTION: High-Resolution Image Thumbnail with Badges */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-900 rounded-t-2xl sm:rounded-t-3xl">
                  <img
                    src={project.image}
                    alt={`${project.title} - ${project.categoryLabel}`}
                    className="w-full h-full object-cover object-center group-hover:scale-106 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                  
                  {/* Subtle Gradient Vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-black/10 pointer-events-none" />

                  {/* Top-Left Category Badge */}
                  <div className="absolute top-2.5 left-2.5 sm:top-3 sm:left-3 z-10">
                    <span className="px-2.5 sm:px-3 py-1 rounded-full text-[10px] sm:text-[11px] font-heading font-extrabold uppercase tracking-wide bg-white/95 backdrop-blur-md text-[#0A1F6B] shadow-sm flex items-center gap-1.5">
                      <Icon className="w-3 h-3 text-[var(--brand-orange)] flex-shrink-0" />
                      <span className="truncate max-w-[120px] xs:max-w-[150px]">{project.category}</span>
                    </span>
                  </div>

                  {/* Top-Right Metric Pill */}
                  <div className="absolute top-2.5 right-2.5 sm:top-3 sm:right-3 z-10">
                    <span className="px-2.5 py-1 rounded-full text-[10px] sm:text-[11px] font-heading font-extrabold bg-[#0A1F6B]/90 backdrop-blur-md text-white border border-[var(--brand-orange)]/40 shadow-sm flex items-center gap-1">
                      <TrendingUp className="w-3 h-3 text-[var(--brand-orange)] flex-shrink-0" />
                      <span className="truncate max-w-[110px] xs:max-w-[130px]">{project.metrics}</span>
                    </span>
                  </div>

                  {/* Bottom Strip on Image: Client & Number */}
                  <div className="absolute bottom-2.5 left-3 right-3 z-10 flex items-center justify-between text-[11px] text-white">
                    <span className="font-mono text-[var(--cyan-accent)] font-bold uppercase tracking-wider text-[10px] sm:text-[11px] truncate max-w-[75%]">
                      Client: {project.client}
                    </span>
                    <span className="font-mono font-bold text-slate-300 text-[10px] flex-shrink-0">
                      #{project.number}
                    </span>
                  </div>

                  {/* Hover Overlay Button */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40 backdrop-blur-xs z-20">
                    <div className="px-4 py-2 rounded-full bg-[var(--brand-orange)] text-white text-xs font-heading font-bold flex items-center gap-2 shadow-xl transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                      <span>View Dedicated Case Study</span>
                      <ExternalLink className="w-3.5 h-3.5 flex-shrink-0" />
                    </div>
                  </div>
                </div>

                {/* 2. MIDDLE SECTION: Content, Title, Description & Tags */}
                <div className="p-4 sm:p-5 flex-grow flex flex-col justify-between space-y-3">
                  <div>
                    {/* Subtitle / Type */}
                    <span className="text-[10px] sm:text-[11px] font-mono font-bold text-[var(--brand-orange)] uppercase tracking-wider block">
                      {project.categoryLabel}
                    </span>

                    {/* Main Title */}
                    <h3 className="text-base sm:text-lg font-heading font-extrabold text-[#0A1F6B] group-hover:text-[var(--primary-blue)] transition-colors leading-snug mt-1">
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="text-xs sm:text-[13px] text-slate-500 font-normal leading-relaxed line-clamp-2 mt-1.5">
                      {project.summary || project.description}
                    </p>
                  </div>

                  {/* Tags Strip */}
                  <div className="pt-2 border-t border-slate-100">
                    <div className="flex flex-wrap gap-1">
                      {project.tags.slice(0, 3).map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2 py-0.5 rounded-full text-[10px] font-medium bg-slate-100 text-slate-600 border border-slate-200/70"
                        >
                          ✓ {tag}
                        </span>
                      ))}
                      {project.tags.length > 3 && (
                        <span className="px-1.5 py-0.5 rounded-full text-[10px] font-mono text-slate-400">
                          +{project.tags.length - 3}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* 3. BOTTOM SECTION: Action Bar */}
                <div className="px-4 sm:px-5 py-3 bg-slate-50/70 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="text-[11px] font-medium text-slate-500 flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0" />
                    <span>Verified Result</span>
                  </span>

                  <span className="font-heading font-bold text-xs text-[var(--brand-orange)] group-hover:translate-x-1 transition-transform flex items-center gap-1">
                    <span>View Project</span>
                    <ArrowRight className="w-3.5 h-3.5 flex-shrink-0" />
                  </span>
                </div>

              </div>
            );
          })}
        </div>

        {/* ===================================================================== */}
        {/* 4. DEDICATED PORTFOLIO ARCHIVE & SHAREABLE REFERENCE BANNER          */}
        {/* ===================================================================== */}
        <div className="mt-10 sm:mt-12 flex flex-col sm:flex-row items-center justify-center gap-3.5 text-center">
          {activeCategory === 'all' && visibleCount < allProjects.length && (
            <button
              onClick={handleShowAll}
              className="inline-flex items-center gap-2 px-6 sm:px-7 py-3 rounded-full bg-white hover:bg-slate-100 border-2 border-[#0A1F6B] text-[#0A1F6B] text-xs sm:text-sm font-heading font-bold shadow-xs transition-all hover:scale-102 cursor-pointer group"
            >
              <span>Load More ({allProjects.length - visibleCount} more)</span>
              <ArrowRight className="w-4 h-4 text-[var(--brand-orange)] group-hover:translate-x-1 transition-transform" />
            </button>
          )}

          <a
            href="#portfolio"
            onClick={(e) => {
              if (onOpenPortfolio) {
                e.preventDefault();
                onOpenPortfolio(activeCategory);
              }
            }}
            className="inline-flex items-center gap-2 px-7 sm:px-9 py-3.5 rounded-full bg-[#0A1F6B] hover:bg-[var(--primary-blue)] text-white text-xs sm:text-sm font-heading font-extrabold shadow-lg hover:shadow-xl transition-all hover:scale-105 cursor-pointer group"
          >
            <Layers className="w-4 h-4 text-[var(--brand-orange)] group-hover:rotate-12 transition-transform" />
            <span>Open Dedicated Portfolio Page (20+ Case Studies)</span>
            <ArrowRight className="w-4 h-4 text-[var(--cyan-accent)] group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* ===================================================================== */}
        {/* 5. BOTTOM HIGH-CONVERSION CTA RIBBON                                  */}
        {/* ===================================================================== */}
        <div className="mt-12 sm:mt-16 p-5 xs:p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-gradient-to-r from-[#0A1F6B] via-[#0B257A] to-[#0A1F6B] text-white border border-blue-900/50 shadow-xl relative overflow-hidden">
          {/* Subtle Glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-[var(--brand-orange)]/15 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-5 sm:gap-6 text-center md:text-left">
            <div className="space-y-1.5 max-w-xl">
              <span className="text-xs font-mono font-bold text-[var(--cyan-accent)] uppercase tracking-wider block">
                Start Your Project Today
              </span>
              <h3 className="text-lg xs:text-xl sm:text-2xl md:text-3xl font-heading font-extrabold text-white tracking-tight leading-snug">
                Have a Project in Mind? Let's Build Something Exceptional Together.
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 font-normal">
                Partner with Click On Media for high-speed websites, viral video editing, scalable software, and high-ROAS marketing in Gorakhpur and India.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3 w-full md:w-auto flex-shrink-0">
              <a
                href="#quote"
                className="btn-primary text-xs sm:text-sm !py-3 !px-6 font-heading font-bold shadow-md cursor-pointer text-center"
              >
                Request Free Proposal
              </a>

              <a
                href="https://wa.me/918303534063?text=Hi%20Click%20On%20Media,%20I'm%20interested%20in%20discussing%20a%20project%20after%20viewing%20your%20portfolio."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-heading font-bold shadow-sm transition-all hover:scale-102 text-center"
              >
                <MessageCircle className="w-4 h-4 flex-shrink-0" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
