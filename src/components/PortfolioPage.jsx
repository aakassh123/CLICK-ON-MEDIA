import React, { useState, useMemo, useEffect } from 'react';
import { 
  ArrowLeft, 
  ArrowRight, 
  Search, 
  Sparkles, 
  Globe, 
  Film, 
  Code2, 
  Palette, 
  Share2, 
  ExternalLink, 
  Copy, 
  Check, 
  MessageCircle, 
  Phone, 
  Building2, 
  Filter, 
  X, 
  Layers, 
  Calendar, 
  TrendingUp, 
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';
import Logo from './Logo';
import { PORTFOLIO_CATEGORIES, PROJECTS_DATA } from '../data/projectsData';

const CATEGORY_ICONS = {
  'all': Sparkles,
  'websites': Globe,
  'video-editing': Film,
  'software': Code2,
  'graphic-design': Palette,
  'social-media': Share2
};

export default function PortfolioPage({ 
  initialCategory = 'all',
  onBack, 
  onSelectProject, 
  onOpenQuote 
}) {
  const [activeCategory, setActiveCategory] = useState(initialCategory || 'all');
  const [searchQuery, setSearchQuery] = useState('');
  const [copiedId, setCopiedId] = useState(null);
  const [toastMessage, setToastMessage] = useState('');

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  // Sync category if initialCategory changes
  useEffect(() => {
    if (initialCategory) {
      setActiveCategory(initialCategory);
    }
  }, [initialCategory]);

  const allProjects = useMemo(() => Object.values(PROJECTS_DATA), []);

  // Compute counts dynamically per category
  const categoryCounts = useMemo(() => {
    const counts = { all: allProjects.length };
    PORTFOLIO_CATEGORIES.forEach((cat) => {
      if (cat.id !== 'all') {
        counts[cat.id] = allProjects.filter((p) => p.categoryKey === cat.id).length;
      }
    });
    return counts;
  }, [allProjects]);

  // Filter projects by category and search query
  const filteredProjects = useMemo(() => {
    let list = allProjects;

    // Filter by Category
    if (activeCategory !== 'all') {
      list = list.filter((p) => p.categoryKey === activeCategory);
    }

    // Filter by Search Query
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      list = list.filter((p) => {
        const titleMatch = p.title?.toLowerCase().includes(q);
        const clientMatch = p.client?.toLowerCase().includes(q);
        const categoryMatch = p.category?.toLowerCase().includes(q);
        const summaryMatch = p.summary?.toLowerCase().includes(q);
        const tagMatch = p.tags?.some((t) => t.toLowerCase().includes(q));
        const techMatch = p.technologies?.some((t) => t.toLowerCase().includes(q));
        return titleMatch || clientMatch || categoryMatch || summaryMatch || tagMatch || techMatch;
      });
    }

    return list;
  }, [allProjects, activeCategory, searchQuery]);

  // Copy reference link handler
  const handleCopyReference = (e, project) => {
    e.stopPropagation();
    const url = `${window.location.origin}/#project/${project.id}`;
    navigator.clipboard.writeText(url).then(() => {
      setCopiedId(project.id);
      setToastMessage(`Reference link for "${project.title}" copied! Ready to share.`);
      setTimeout(() => {
        setCopiedId(null);
        setToastMessage('');
      }, 3500);
    });
  };

  // Copy entire portfolio link handler
  const handleCopyPortfolioLink = () => {
    const url = `${window.location.origin}/#portfolio`;
    navigator.clipboard.writeText(url).then(() => {
      setToastMessage('Complete Portfolio Link copied! Share with clients anytime.');
      setTimeout(() => setToastMessage(''), 3500);
    });
  };

  return (
    <div className="min-h-screen bg-slate-50/60 text-slate-900 font-sans flex flex-col selection:bg-[var(--brand-orange)] selection:text-white">
      
      {/* --------------------------------------------------------------------- */}
      {/* 1. TOP STICKY BRAND HEADER                                            */}
      {/* --------------------------------------------------------------------- */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-xl border-b border-slate-200/90 shadow-xs transition-all">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between gap-3">
          
          {/* Left: Back to Home */}
          <button
            onClick={onBack}
            className="flex items-center gap-2 px-3 sm:px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200/80 text-slate-800 hover:text-[var(--primary-blue)] transition-all cursor-pointer group shadow-2xs text-xs sm:text-sm font-heading font-bold"
            title="Return to Click On Media Homepage"
          >
            <ArrowLeft className="w-4 h-4 text-[var(--brand-orange)] group-hover:-translate-x-1 transition-transform flex-shrink-0" />
            <span className="hidden xs:inline">Back to Home</span>
            <span className="xs:hidden">Home</span>
          </button>

          {/* Center: Brand Logo */}
          <div className="flex items-center gap-2">
            <Logo variant="light" size="sm" />
            <span className="hidden md:inline-block px-2.5 py-0.5 rounded-full bg-[var(--primary-blue)]/10 text-[var(--primary-blue)] font-mono font-bold text-[10px] uppercase tracking-wider">
              Work Archive
            </span>
          </div>

          {/* Right: Quick Share & Quote Actions */}
          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyPortfolioLink}
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 hover:text-[var(--primary-blue)] text-xs font-heading font-bold transition-all shadow-2xs cursor-pointer"
              title="Copy portfolio link to share with prospective clients"
            >
              <Share2 className="w-3.5 h-3.5 text-[var(--brand-orange)]" />
              <span>Share Portfolio</span>
            </button>

            <button
              onClick={() => onOpenQuote('Portfolio Exploration')}
              className="btn-primary !py-2 sm:!py-2.5 !px-3.5 sm:!px-5 text-xs sm:text-sm font-heading font-bold shadow-md cursor-pointer whitespace-nowrap min-h-[38px]"
            >
              <span className="hidden xs:inline">Start a </span>Project
            </button>
          </div>

        </div>
      </header>

      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-4 sm:right-8 z-50 animate-in fade-in slide-in-from-bottom-3 duration-300">
          <div className="flex items-center gap-2.5 px-4 sm:px-5 py-3 rounded-2xl bg-slate-900 text-white text-xs sm:text-sm font-heading font-bold shadow-2xl border border-slate-700">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
            <span>{toastMessage}</span>
          </div>
        </div>
      )}

      <main className="flex-grow">

        {/* --------------------------------------------------------------------- */}
        {/* 2. HERO INTRO BANNER                                                  */}
        {/* --------------------------------------------------------------------- */}
        <section className="pt-8 pb-10 sm:pt-14 sm:pb-14 bg-gradient-to-b from-white via-blue-50/20 to-slate-50/60 border-b border-slate-200/80 relative overflow-hidden">
          {/* Subtle Ambient Brand Glow */}
          <div className="absolute top-0 left-1/3 w-96 h-96 bg-[var(--primary-blue)]/5 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute top-10 right-1/4 w-96 h-96 bg-[var(--brand-orange)]/5 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 relative z-10 text-center space-y-4 sm:space-y-6">
            
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-full bg-[var(--primary-blue)]/10 text-[var(--primary-blue)] font-bold text-xs font-heading">
              <Sparkles className="w-3.5 h-3.5 text-[var(--brand-orange)] flex-shrink-0" />
              <span>CLICK ON MEDIA VERIFIED WORK &amp; CLIENT RESULTS</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-heading font-extrabold text-[#0A1F6B] tracking-tight leading-tight">
              Real Work. Proven ROI. <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0B5CFF] via-[var(--primary-blue)] to-[#FF7A00]">
                Built for Measurable Growth.
              </span>
            </h1>

            <p className="text-sm sm:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Explore our complete client portfolio across Web Development, High-Retention Video Editing, Custom Software, Brand Design, and Paid Marketing. Engineered for speed, high conversions, and 100% intellectual property ownership.
            </p>

            {/* Trust Proof Counters */}
            <div className="pt-4 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto">
              <div className="p-3 sm:p-4 rounded-2xl bg-white border border-slate-200/90 shadow-2xs">
                <div className="text-xl sm:text-3xl font-heading font-extrabold text-[#0A1F6B]">
                  {allProjects.length}+
                </div>
                <div className="text-[11px] sm:text-xs font-semibold text-slate-500 mt-0.5">
                  Verified Case Studies
                </div>
              </div>

              <div className="p-3 sm:p-4 rounded-2xl bg-white border border-slate-200/90 shadow-2xs">
                <div className="text-xl sm:text-3xl font-heading font-extrabold text-emerald-600">
                  ₹10Cr+
                </div>
                <div className="text-[11px] sm:text-xs font-semibold text-slate-500 mt-0.5">
                  Client Revenue Generated
                </div>
              </div>

              <div className="p-3 sm:p-4 rounded-2xl bg-white border border-slate-200/90 shadow-2xs">
                <div className="text-xl sm:text-3xl font-heading font-extrabold text-[var(--primary-blue)]">
                  100%
                </div>
                <div className="text-[11px] sm:text-xs font-semibold text-slate-500 mt-0.5">
                  Client Asset Ownership
                </div>
              </div>

              <div className="p-3 sm:p-4 rounded-2xl bg-white border border-slate-200/90 shadow-2xs">
                <div className="text-xl sm:text-3xl font-heading font-extrabold text-[var(--brand-orange)]">
                  4.9 / 5
                </div>
                <div className="text-[11px] sm:text-xs font-semibold text-slate-500 mt-0.5">
                  Average Client Rating
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* --------------------------------------------------------------------- */}
        {/* 3. SALES & CLIENT REFERENCE HELPER BANNER                             */}
        {/* --------------------------------------------------------------------- */}
        <section className="bg-gradient-to-r from-blue-50 to-indigo-50 border-b border-blue-100/80 py-3 sm:py-3.5">
          <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-2.5 text-center sm:text-left text-xs text-slate-700">
            <div className="flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-[var(--brand-orange)] text-white flex items-center justify-center font-bold text-[10px] flex-shrink-0">
                ★
              </span>
              <span>
                <strong>Client Reference Guide:</strong> Want to send a relevant work sample to your client? Click <strong>"Share Reference"</strong> or <strong>"Copy Link"</strong> on any project card below.
              </span>
            </div>

            <button
              onClick={handleCopyPortfolioLink}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white hover:bg-slate-100 border border-blue-200 text-blue-800 text-[11px] font-heading font-bold shadow-2xs transition-all cursor-pointer whitespace-nowrap flex-shrink-0"
            >
              <Share2 className="w-3 h-3 text-[var(--brand-orange)]" />
              <span>Copy Full Portfolio Link</span>
            </button>
          </div>
        </section>

        {/* --------------------------------------------------------------------- */}
        {/* 4. FILTER TABS & SEARCH CONTROLS                                      */}
        {/* --------------------------------------------------------------------- */}
        <section className="py-6 sm:py-8 bg-white border-b border-slate-200/80 sticky top-16 sm:top-20 z-30 backdrop-blur-xl shadow-xs">
          <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 space-y-4">
            
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
              
              {/* Category Pills Strip */}
              <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1 max-w-full touch-pan-x overscroll-x-contain">
                {PORTFOLIO_CATEGORIES.map((cat) => {
                  const Icon = CATEGORY_ICONS[cat.id] || Sparkles;
                  const isActive = activeCategory === cat.id;
                  const count = categoryCounts[cat.id] || 0;

                  return (
                    <button
                      key={cat.id}
                      onClick={() => {
                        setActiveCategory(cat.id);
                        window.history.replaceState(null, '', cat.id === 'all' ? '#portfolio' : `#portfolio?cat=${cat.id}`);
                      }}
                      className={`inline-flex items-center gap-2 px-3.5 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-heading font-bold transition-all cursor-pointer whitespace-nowrap flex-shrink-0 min-h-[40px] ${
                        isActive
                          ? 'bg-[#0A1F6B] text-white shadow-sm ring-2 ring-[var(--brand-orange)]/60 scale-[1.02]'
                          : 'bg-slate-100 hover:bg-slate-200/80 text-slate-700 border border-slate-200/90'
                      }`}
                    >
                      <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-[var(--brand-orange)]' : 'text-slate-400'}`} />
                      <span>{cat.shortLabel || cat.label}</span>
                      <span className={`px-1.5 py-0.2 rounded-md text-[10px] font-mono font-bold ${
                        isActive ? 'bg-white/20 text-white' : 'bg-slate-200/80 text-slate-600'
                      }`}>
                        {count}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Search Filter Input */}
              <div className="relative w-full lg:w-80 flex-shrink-0">
                <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                <input
                  type="text"
                  maxLength={60}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value.replace(/[<>]/g, ''))}
                  placeholder="Search by client, title, tag..."
                  className="w-full pl-10 pr-9 py-2 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-[var(--primary-blue)] focus:ring-2 focus:ring-[var(--primary-blue)]/20 text-xs sm:text-sm font-heading font-medium text-slate-900 placeholder:text-slate-400 outline-none transition-all"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-0.5"
                    title="Clear search"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>

            </div>

            {/* Filter Status Text */}
            <div className="flex items-center justify-between text-xs text-slate-500 pt-1">
              <span>
                Showing <strong className="text-slate-900">{filteredProjects.length}</strong> of {allProjects.length} projects
                {activeCategory !== 'all' && (
                  <> in <span className="font-semibold text-[var(--primary-blue)]">{PORTFOLIO_CATEGORIES.find(c => c.id === activeCategory)?.label}</span></>
                )}
                {searchQuery && (
                  <> matching <span className="font-semibold text-slate-800">"{searchQuery}"</span></>
                )}
              </span>

              {(activeCategory !== 'all' || searchQuery) && (
                <button
                  onClick={() => {
                    setActiveCategory('all');
                    setSearchQuery('');
                    window.history.replaceState(null, '', '#portfolio');
                  }}
                  className="text-xs font-heading font-bold text-[var(--brand-orange)] hover:underline cursor-pointer"
                >
                  Reset all filters
                </button>
              )}
            </div>

          </div>
        </section>

        {/* --------------------------------------------------------------------- */}
        {/* 5. PROJECTS CARDS GRID                                                */}
        {/* --------------------------------------------------------------------- */}
        <section className="py-10 sm:py-16">
          <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
            
            {filteredProjects.length === 0 ? (
              /* Empty Search Results State */
              <div className="text-center py-16 sm:py-24 space-y-4 rounded-3xl bg-white border border-slate-200 p-8">
                <div className="w-14 h-14 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center mx-auto">
                  <Search className="w-6 h-6" />
                </div>
                <h3 className="text-lg sm:text-xl font-heading font-bold text-slate-800">
                  No projects match your search
                </h3>
                <p className="text-sm text-slate-500 max-w-md mx-auto">
                  We couldn't find any projects matching "{searchQuery}". Try searching for another term like "Hotel", "Reels", "Software", or "E-Commerce".
                </p>
                <button
                  onClick={() => {
                    setActiveCategory('all');
                    setSearchQuery('');
                  }}
                  className="btn-primary !py-2.5 !px-5 text-xs sm:text-sm font-heading font-bold"
                >
                  View All {allProjects.length} Projects
                </button>
              </div>
            ) : (
              /* Projects Responsive Grid */
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {filteredProjects.map((project, idx) => {
                  const isCopied = copiedId === project.id;
                  const whatsappShareUrl = `https://wa.me/?text=Check%20out%20this%20verified%20work%20reference%20by%20Click%20On%20Media:%0A%0A*${encodeURIComponent(project.title)}*%20(${encodeURIComponent(project.category)})%0A${encodeURIComponent(project.summary)}%0A%0AView%20Case%20Study:%20${encodeURIComponent(`${window.location.origin}/#project/${project.id}`)}`;

                  return (
                    <article
                      key={project.id}
                      onClick={() => onSelectProject(project.id)}
                      className="group rounded-3xl overflow-hidden bg-white border border-slate-200/90 hover:border-[var(--brand-orange)] hover:ring-2 hover:ring-[var(--brand-orange)]/30 hover:shadow-2xl transition-all duration-300 flex flex-col justify-between cursor-pointer"
                    >
                      {/* Top Visual Image Preview */}
                      <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-900">
                        <img
                          src={project.image}
                          alt={`${project.title} - ${project.category} by Click On Media`}
                          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />

                        {/* Top Badges */}
                        <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                          <span className="px-2.5 sm:px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-[10px] sm:text-xs font-heading font-extrabold text-[#0A1F6B] shadow-sm uppercase tracking-wide">
                            {project.category}
                          </span>
                          <span className="px-2.5 py-1 rounded-full bg-[#0A1F6B]/90 backdrop-blur-md text-white text-[10px] sm:text-xs font-mono font-bold">
                            #{project.number || String(idx + 1).padStart(2, '0')}
                          </span>
                        </div>

                        {/* Bottom Client & Year */}
                        <div className="absolute bottom-3 left-3 right-3 text-white flex items-center justify-between text-xs">
                          <span className="font-heading font-medium text-slate-200 truncate pr-2 flex items-center gap-1">
                            <Building2 className="w-3.5 h-3.5 text-[var(--cyan-accent)] flex-shrink-0" />
                            <span>{project.client}</span>
                          </span>
                          <span className="font-mono text-[10px] text-slate-300 whitespace-nowrap bg-black/40 px-2 py-0.5 rounded-md">
                            {project.year || '2024'}
                          </span>
                        </div>
                      </div>

                      {/* Card Middle Body */}
                      <div className="p-5 sm:p-6 flex-grow flex flex-col justify-between space-y-4">
                        
                        <div className="space-y-2">
                          <div className="text-[11px] font-mono font-bold uppercase tracking-wider text-[var(--primary-blue)]">
                            {project.categoryLabel || project.category}
                          </div>

                          <h3 className="text-lg sm:text-xl font-heading font-extrabold text-[#0A1F6B] group-hover:text-[var(--primary-blue)] transition-colors leading-snug">
                            {project.title}
                          </h3>

                          <p className="text-xs sm:text-sm text-slate-600 line-clamp-2 leading-relaxed">
                            {project.summary}
                          </p>
                        </div>

                        {/* Results / ROI Metric Highlight */}
                        {project.results && (
                          <div className="p-2.5 rounded-xl bg-emerald-50/80 border border-emerald-200/80 flex items-start gap-2">
                            <TrendingUp className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                            <span className="text-xs font-heading font-bold text-emerald-800 leading-snug">
                              {project.results}
                            </span>
                          </div>
                        )}

                        {/* Tech Tags */}
                        {project.tags && project.tags.length > 0 && (
                          <div className="flex flex-wrap gap-1.5 pt-1">
                            {project.tags.slice(0, 4).map((tag, tIdx) => (
                              <span
                                key={tIdx}
                                className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-600 text-[10px] font-heading font-semibold"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        )}

                      </div>

                      {/* Card Footer: Client Reference & Sharing Tools */}
                      <div className="p-4 sm:p-5 bg-slate-50/80 border-t border-slate-100 flex items-center justify-between gap-2 text-xs">
                        
                        {/* Primary Action: View Case Study */}
                        <button
                          onClick={() => onSelectProject(project.id)}
                          className="inline-flex items-center gap-1.5 text-xs font-heading font-bold text-[#0A1F6B] group-hover:text-[var(--brand-orange)] transition-colors cursor-pointer"
                        >
                          <span>Case Study</span>
                          <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                        </button>

                        {/* Reference Sharing Actions for Clients */}
                        <div className="flex items-center gap-1.5" onClick={(e) => e.stopPropagation()}>
                          
                          {/* 1. Share on WhatsApp */}
                          <a
                            href={whatsappShareUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-xl bg-white hover:bg-emerald-50 text-slate-600 hover:text-emerald-600 border border-slate-200/80 transition-all shadow-2xs"
                            title="Share this project reference with client on WhatsApp"
                            aria-label={`Share ${project.title} on WhatsApp`}
                          >
                            <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
                          </a>

                          {/* 2. Copy Direct Reference Link */}
                          <button
                            onClick={(e) => handleCopyReference(e, project)}
                            className={`p-2 rounded-xl border transition-all shadow-2xs cursor-pointer ${
                              isCopied
                                ? 'bg-emerald-500 text-white border-emerald-500'
                                : 'bg-white hover:bg-slate-100 text-slate-600 border-slate-200/80'
                            }`}
                            title="Copy project reference link"
                            aria-label="Copy reference link"
                          >
                            {isCopied ? (
                              <Check className="w-3.5 h-3.5" />
                            ) : (
                              <Copy className="w-3.5 h-3.5" />
                            )}
                          </button>

                          {/* 3. Live Project External Link (if available) */}
                          {project.liveUrl && (
                            <a
                              href={project.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="p-2 rounded-xl bg-white hover:bg-blue-50 text-slate-600 hover:text-[var(--primary-blue)] border border-slate-200/80 transition-all shadow-2xs"
                              title="Open live website"
                              aria-label={`Visit ${project.title} live website`}
                            >
                              <ExternalLink className="w-3.5 h-3.5" />
                            </a>
                          )}

                        </div>

                      </div>

                    </article>
                  );
                })}
              </div>
            )}

          </div>
        </section>

        {/* --------------------------------------------------------------------- */}
        {/* 6. CONVERSION / CALL TO ACTION BOX                                    */}
        {/* --------------------------------------------------------------------- */}
        <section className="py-12 sm:py-16 bg-white border-t border-slate-200/90">
          <div className="max-w-4xl mx-auto px-3 sm:px-6 lg:px-8 text-center space-y-4 sm:space-y-6">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[var(--brand-orange)]/10 text-[var(--brand-orange)] font-bold text-xs font-heading">
              <Sparkles className="w-3.5 h-3.5" />
              <span>READY TO BUILD YOUR NEXT GROWTH MILESTONE?</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-heading font-extrabold text-[#0A1F6B] tracking-tight">
              Inspired by Our Work? Let's Engineer Your Results.
            </h2>

            <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Every project in our portfolio started with a free 30-minute growth audit. Tell us your goals, and we'll deliver a transparent milestone plan and quote within 24 hours.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                onClick={() => onOpenQuote('Portfolio Call to Action')}
                className="btn-primary !py-3 !px-7 text-xs sm:text-sm font-heading font-bold shadow-md shadow-[var(--brand-orange)]/25 flex items-center justify-center gap-2 cursor-pointer w-full sm:w-auto"
              >
                <span>Start Your Project</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="https://wa.me/918303534063?text=Hi%20Click%20On%20Media,%20I%20reviewed%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-emerald-50 hover:bg-emerald-100 border border-emerald-300 text-emerald-700 text-xs sm:text-sm font-heading font-bold shadow-2xs transition-all w-full sm:w-auto"
              >
                <MessageCircle className="w-4 h-4 text-emerald-600 fill-emerald-600" />
                <span>Chat on WhatsApp</span>
              </a>

              <a
                href="tel:+918303534063"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs sm:text-sm font-heading font-bold transition-colors w-full sm:w-auto"
              >
                <Phone className="w-4 h-4 text-[var(--brand-orange)]" />
                <span>+91 83035 34063</span>
              </a>
            </div>

          </div>
        </section>

      </main>

      {/* --------------------------------------------------------------------- */}
      {/* 7. CLEAN FOOTER STRIP                                                 */}
      {/* --------------------------------------------------------------------- */}
      <footer className="bg-slate-900 text-slate-400 py-6 sm:py-8 border-t border-slate-800 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center justify-center sm:justify-start gap-3">
            <Logo variant="dark" size="sm" />
            <span>&copy; {new Date().getFullYear()} Click On Media. All rights reserved.</span>
          </div>

          <div className="flex items-center justify-center gap-4">
            <button onClick={onBack} className="hover:text-white transition-colors cursor-pointer">Back to Home</button>
            <span className="text-slate-600">•</span>
            <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="hover:text-white transition-colors cursor-pointer">Back to Top ↑</button>
          </div>
        </div>
      </footer>

    </div>
  );
}
