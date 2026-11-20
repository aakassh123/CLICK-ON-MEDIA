import React, { useState, useEffect } from 'react';
import { 
  ArrowLeft, 
  ArrowRight, 
  Phone, 
  Sparkles, 
  Globe, 
  Code2, 
  Megaphone, 
  Search, 
  Palette, 
  Film,
  Users, 
  Layout, 
  PlaySquare, 
  Target, 
  MessageCircle,
  TrendingUp,
  CheckCircle2,
  Check,
  Clock,
  ShieldCheck,
  Zap,
  Award,
  X,
  ChevronRight
} from 'lucide-react';
import Logo from './Logo';
import { SERVICES_CATALOG } from '../data/servicesCatalog';

const SERVICE_ICONS = {
  'social-media': Users,
  'web-dev': Globe,
  'whatsapp-bulk': MessageCircle,
  'graphics-designing': Palette,
  'graphics-logo': Palette,
  'video-editing': Film,
  'short-reels': Film,
  'youtube-videos': PlaySquare,
  'seo': Search,
  'ads': Target,
  'google-ads': Target,
  'social-ads': MessageCircle,
  'software-dev': Code2,
  'crm': Layout,
  'monetization': TrendingUp,
  'digital-marketing': Megaphone,
  'posters': Layout,
  'marketing': Megaphone,
  'branding': Palette,
  'content': Film
};

export default function ServiceDetailPage({ 
  serviceId, 
  initialTypeId,
  onBack, 
  onSelectService, 
  onSelectType,
  onOpenQuoteWithService 
}) {
  // Normalize serviceId
  const normalizedKey = serviceId && SERVICES_CATALOG[serviceId] ? serviceId : 'web-dev';
  const currentService = SERVICES_CATALOG[normalizedKey];

  // Single active expanded card ID (null by default so it shows the clean 3-column cards grid)
  const [expandedCardId, setExpandedCardId] = useState(initialTypeId || null);

  // Sync expandedCardId on mount or when serviceId/initialTypeId changes
  useEffect(() => {
    if (initialTypeId && currentService?.categories?.some(c => c.id === initialTypeId)) {
      setExpandedCardId(initialTypeId);
      setTimeout(() => {
        const el = document.getElementById('active-expanded-card');
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    } else {
      setExpandedCardId(null);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [serviceId, initialTypeId]);

  const allServiceKeys = [
    'social-media',
    'web-dev',
    'whatsapp-bulk',
    'graphics-designing',
    'video-editing',
    'seo',
    'ads',
    'software-dev',
    'crm',
    'monetization'
  ];

  // When user clicks a card: expands it big, automatically shrinking any previously open card
  const handleCardClick = (cat) => {
    if (expandedCardId === cat.id) {
      // Toggle close if clicking the currently open card
      setExpandedCardId(null);
    } else {
      // Open clicked card big, automatically closing previous one
      setExpandedCardId(cat.id);
      setTimeout(() => {
        const el = document.getElementById('active-expanded-card');
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 70);
    }
  };

  const handleCloseExpanded = () => {
    setExpandedCardId(null);
    setTimeout(() => {
      const el = document.getElementById('service-types-heading');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 60);
  };

  const activeCat = currentService?.categories?.find(c => c.id === expandedCardId) || null;

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans flex flex-col selection:bg-[var(--brand-orange)] selection:text-white">
      
      {/* ========================================================================= */}
      {/* 1. STICKY TOP BRAND & CONVERSION HEADER                                  */}
      {/* ========================================================================= */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-xl border-b border-slate-200/90 shadow-sm transition-all">
        <div className="max-w-7xl mx-auto px-2.5 sm:px-6 lg:px-8 h-14 sm:h-16 flex items-center justify-between gap-2 sm:gap-4">
          
          {/* Back to All Services Button */}
          <button
            onClick={onBack}
            className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm font-heading font-bold text-slate-700 hover:text-[var(--primary-blue)] transition-colors cursor-pointer group py-1.5 px-2 sm:px-3 rounded-xl hover:bg-slate-100 flex-shrink-0"
            title="Return to Main Website"
          >
            <ArrowLeft className="w-4 h-4 text-[var(--brand-orange)] transition-transform group-hover:-translate-x-1 flex-shrink-0" />
            <span className="hidden sm:inline">Back to Services</span>
            <span className="sm:hidden text-xs">Back</span>
          </button>

          {/* Center Logo */}
          <button 
            onClick={onBack}
            className="flex items-center gap-2 cursor-pointer transition-transform hover:scale-105 flex-shrink-0"
            title="Click On Media Home"
          >
            <Logo variant="light" size="sm" />
          </button>

          {/* Right Action Stack */}
          <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
            <a
              href="tel:+918303534063"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-xs font-bold text-slate-800 transition-colors"
              title="Call Click On Media"
            >
              <Phone className="w-3.5 h-3.5 text-[var(--brand-orange)]" />
              <span>+91 83035 34063</span>
            </a>

            <button
              onClick={() => onOpenQuoteWithService(currentService.title)}
              className="btn-primary text-xs !py-1.5 sm:!py-2 !px-2.5 sm:!px-4 font-heading font-bold shadow-sm cursor-pointer whitespace-nowrap"
            >
              <span className="hidden xs:inline">Get Free </span>Quote
            </button>
          </div>

        </div>
      </header>

      {/* ========================================================================= */}
      {/* 2. SERVICE NAVIGATION TABS (Quick Switch Between Services)               */}
      {/* ========================================================================= */}
      <div className="bg-slate-50/90 border-b border-slate-200/80 sticky top-[56px] sm:top-[64px] z-40 backdrop-blur-md overflow-x-auto no-scrollbar py-2 sm:py-2.5 touch-pan-x overscroll-x-contain">
        <div className="max-w-7xl mx-auto px-2.5 sm:px-6 lg:px-8 flex items-center gap-1.5 sm:gap-2 min-w-max">
          <span className="text-[11px] font-heading font-bold text-slate-400 uppercase tracking-wider mr-1 hidden sm:inline flex-shrink-0">
            Services:
          </span>
          {allServiceKeys.map((key) => {
            const item = SERVICES_CATALOG[key];
            const Icon = SERVICE_ICONS[key] || Globe;
            const isSelected = normalizedKey === key;
            return (
              <button
                key={key}
                onClick={() => {
                  setSelectedType(null);
                  if (onSelectService) onSelectService(key);
                }}
                className={`flex items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-xs font-heading font-bold transition-all cursor-pointer whitespace-nowrap flex-shrink-0 ${
                  isSelected
                    ? 'bg-[#0A1F6B] text-white shadow-md ring-2 ring-[var(--brand-orange)]/60 scale-[1.02]'
                    : 'bg-white text-slate-600 hover:text-[#0A1F6B] hover:bg-slate-200/70 border border-slate-200'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isSelected ? 'text-[var(--brand-orange)]' : 'text-slate-400'}`} />
                <span>{item.title}</span>
              </button>
            );
          })}
        </div>
      </div>

      <main className="flex-grow">

        {/* ======================================================================= */}
        {/* 3. HERO INTRO BANNER (Clean, Non-Technical & Authoritative)             */}
        {/* ======================================================================= */}
        <section className="relative pt-6 pb-8 sm:pt-12 sm:pb-12 bg-gradient-to-b from-[#FAFBFF] via-white to-slate-50/60 border-b border-slate-200/80 overflow-hidden">
          {/* Subtle Ambient Brand Glow */}
          <div className="absolute top-0 left-1/4 w-80 h-80 bg-[var(--primary-blue)]/5 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute top-10 right-1/4 w-80 h-80 bg-[var(--brand-orange)]/5 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 relative z-10 text-center sm:text-left">
            
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="space-y-2 max-w-3xl">
                <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1 rounded-full bg-[var(--primary-blue)]/10 text-[var(--primary-blue)] font-bold text-[11px] sm:text-xs font-heading">
                  <Sparkles className="w-3.5 h-3.5 text-[var(--brand-orange)] flex-shrink-0" />
                  <span>{currentService.badge}</span>
                  <span className="text-slate-300">•</span>
                  <span className="text-[#0A1F6B]">Click On Media Flagship Solution</span>
                </div>

                <h1 className="text-2xl sm:text-4xl md:text-5xl font-heading font-extrabold text-[#0A1F6B] tracking-tight break-words">
                  {currentService.title}
                </h1>

                <p className="text-xs sm:text-base md:text-lg text-slate-600 font-normal leading-relaxed">
                  {currentService.summary}
                </p>
              </div>

              {/* Direct Fast Action Box */}
              <div className="flex-shrink-0 flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 pt-2 sm:pt-0 w-full sm:w-auto">
                <a
                  href={`https://wa.me/918303534063?text=Hi%20Click%20On%20Media,%20I'm%20interested%20in%20${encodeURIComponent(currentService.title)}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 sm:px-5 py-2.5 sm:py-3 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-heading font-bold shadow-sm transition-all hover:scale-102 min-h-[44px]"
                >
                  <MessageCircle className="w-4 h-4 flex-shrink-0" />
                  <span>Chat on WhatsApp</span>
                </a>

                <button
                  onClick={() => onOpenQuoteWithService(currentService.title)}
                  className="w-full sm:w-auto btn-primary text-xs sm:text-sm !py-2.5 sm:!py-3 !px-5 font-heading font-bold shadow-md cursor-pointer min-h-[44px] text-center"
                >
                  <span>Request Proposal</span>
                </button>
              </div>
            </div>

          </div>
        </section>

        {/* ======================================================================= */}
        {/* 4. CHOOSE YOUR CATEGORY / TYPE OR DETAILED TYPE VIEW                     */}
        {/* ======================================================================= */}
        <section id="service-types-container" className="py-8 sm:py-14 bg-white relative">
          <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
            
            {activeCat ? (
              /* --------------------------------------------------------------- */
              /* EXPANDED VIEW: SELECTED TYPE SHOWN LIKE 2ND IMAGE, OTHERS SMALL */
              /* --------------------------------------------------------------- */
              <div className="space-y-6 sm:space-y-8 animate-in fade-in duration-300">
                
                {/* Top Navigation Strip: Return to Grid & Active Indicator */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-3 sm:p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={handleCloseExpanded}
                      className="inline-flex items-center gap-1.5 px-3 sm:px-4 py-2 rounded-xl bg-white hover:bg-slate-100 border border-slate-200 text-xs sm:text-sm font-heading font-bold text-slate-800 hover:text-[var(--primary-blue)] transition-all cursor-pointer group shadow-2xs"
                      title="Switch back to 3-column cards grid"
                    >
                      <ArrowLeft className="w-4 h-4 text-[var(--brand-orange)] group-hover:-translate-x-1 transition-transform flex-shrink-0" />
                      <span>Back to All Cards Grid</span>
                    </button>

                    <span className="hidden md:inline-block text-xs font-heading font-semibold text-slate-500 pl-2">
                      {currentService.title} <span className="text-slate-300">•</span> <strong className="text-[#0A1F6B]">{activeCat.title}</strong>
                    </span>
                  </div>

                  <button
                    onClick={handleCloseExpanded}
                    className="inline-flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-xl bg-white hover:bg-rose-50 hover:text-rose-600 text-slate-500 text-xs font-heading font-bold transition-all border border-slate-200 cursor-pointer self-start sm:self-auto"
                  >
                    <X className="w-3.5 h-3.5" />
                    <span>Close Details</span>
                  </button>
                </div>

                {/* 1. THE OPEN CARD: EXACTLY LIKE IMAGE 2 */}
                <div 
                  id="active-expanded-card"
                  className="scroll-mt-24 sm:scroll-mt-28 rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-8 lg:p-10 shadow-sm transition-all"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
                    
                    {/* Left Column (5 cols): Large Image with rounded corners */}
                    <div className="lg:col-span-5 w-full">
                      <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-sm border border-slate-200/70 bg-slate-100">
                        <img
                          src={activeCat.image}
                          alt={`${activeCat.title} - ${currentService.title} by Click On Media`}
                          onError={(e) => {
                            e.currentTarget.src = currentService.fallbackImage;
                          }}
                          className="w-full h-full object-cover object-center"
                          loading="eager"
                        />
                      </div>
                    </div>

                    {/* Right Column (7 cols): Badge, Title, 2 Narrative Paragraphs, Action Button */}
                    <div className="lg:col-span-7 space-y-4 sm:space-y-5 text-left">
                      {/* Badge */}
                      <div>
                        <span className="inline-flex items-center px-3 py-1 rounded-md bg-sky-50 border border-sky-100 text-sky-700 font-bold text-xs uppercase tracking-wider font-mono">
                          {activeCat.badge}
                        </span>
                      </div>

                      {/* Heading */}
                      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-extrabold text-[#0A1F6B] leading-tight tracking-tight">
                        {activeCat.title}
                      </h2>

                      {/* 2 Paragraphs of Description (Matching Image 2) */}
                      <div className="space-y-3 text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                        <p>
                          {activeCat.explanation}
                        </p>
                        <p>
                          Tailored specifically for businesses, clinics, showrooms, and digital brands in Gorakhpur and Uttar Pradesh. Click On Media delivers end-to-end execution with guaranteed performance, transparent timelines ({activeCat.timeline}), and 100% intellectual property ownership — engineered to turn inquiries into paying customers and give your business a sustained competitive advantage.
                        </p>
                      </div>

                      {/* CTAs matching Image 2 */}
                      <div className="pt-2 flex flex-wrap items-center gap-3">
                        <button
                          onClick={() => onOpenQuoteWithService(`${currentService.title} - ${activeCat.title}`)}
                          className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full border border-sky-300 hover:border-sky-400 bg-sky-50/60 hover:bg-sky-100/80 text-sky-900 font-heading font-bold text-xs sm:text-sm shadow-2xs transition-all cursor-pointer min-h-[42px]"
                        >
                          <span>Request {activeCat.title} Quote</span>
                          <ArrowRight className="w-4 h-4 text-sky-600" />
                        </button>

                        <a
                          href={`https://wa.me/918303534063?text=Hi%20Click%20On%20Media,%20I'm%20interested%20in%20${encodeURIComponent(currentService.title)}%20(${encodeURIComponent(activeCat.title)}).`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-emerald-50 hover:bg-emerald-100 border border-emerald-300 text-emerald-700 font-heading font-bold text-xs sm:text-sm shadow-2xs transition-all min-h-[42px]"
                        >
                          <MessageCircle className="w-4 h-4 text-emerald-600 fill-emerald-600" />
                          <span>Chat on WhatsApp</span>
                        </a>

                        <a
                          href="tel:+918303534063"
                          className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-800 font-heading font-bold text-xs sm:text-sm transition-colors min-h-[42px]"
                        >
                          <Phone className="w-3.5 h-3.5 text-[var(--brand-orange)]" />
                          <span>Call: +91 83035 34063</span>
                        </a>
                      </div>

                    </div>
                  </div>
                </div>

                {/* 2. BAKI SMALL HO JAYE: OTHER TYPES LISTED AS SLEEK SMALL CARDS */}
                <div className="pt-4 space-y-3">
                  <div className="flex items-center justify-between pb-1">
                    <h3 className="text-xs sm:text-sm font-heading font-bold text-slate-500 uppercase tracking-wider">
                      Other {currentService.title} Types (Click any to open):
                    </h3>
                    <button
                      onClick={handleCloseExpanded}
                      className="text-xs text-[var(--primary-blue)] hover:underline font-heading font-semibold cursor-pointer"
                    >
                      View all in grid
                    </button>
                  </div>

                  <div className="space-y-3">
                    {currentService.categories.map((cat, idx) => {
                      if (cat.id === expandedCardId) return null; // Already open above!
                      return (
                        <div
                          key={cat.id}
                          onClick={() => handleCardClick(cat)}
                          className="rounded-2xl border border-slate-200/90 hover:border-sky-300 bg-white hover:bg-slate-50/80 p-3.5 sm:p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 cursor-pointer group transition-all duration-200 shadow-2xs hover:shadow-xs"
                        >
                          {/* Left: Thumbnail & Title */}
                          <div className="flex items-center gap-3.5">
                            <div className="w-20 sm:w-24 h-14 sm:h-16 rounded-xl overflow-hidden flex-shrink-0 bg-slate-100 border border-slate-200/70">
                              <img
                                src={cat.image}
                                alt={cat.title}
                                onError={(e) => {
                                  e.currentTarget.src = currentService.fallbackImage;
                                }}
                                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform"
                                loading="lazy"
                              />
                            </div>

                            <div className="space-y-0.5">
                              <span className="inline-block px-2 py-0.5 rounded text-[10px] font-heading font-bold uppercase tracking-wider bg-sky-50 text-sky-700 border border-sky-100">
                                {cat.badge}
                              </span>
                              <h4 className="text-sm sm:text-base font-heading font-bold text-[#0A1F6B] group-hover:text-[var(--primary-blue)] transition-colors leading-snug">
                                {cat.title}
                              </h4>
                              <p className="text-xs text-slate-500 line-clamp-1">
                                {cat.tagline}
                              </p>
                            </div>
                          </div>

                          {/* Right: Expand Action Button */}
                          <div className="flex items-center justify-between sm:justify-end gap-3 flex-shrink-0 pl-24 sm:pl-0">
                            <span className="text-[11px] font-bold text-slate-400">
                              ⏱ {cat.timeline}
                            </span>
                            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-slate-200 text-slate-700 group-hover:border-sky-300 group-hover:text-sky-800 group-hover:bg-sky-50 text-xs font-heading font-bold transition-all">
                              <span>Open Package</span>
                              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                            </span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

              </div>
            ) : (
              /* --------------------------------------------------------------- */
              /* INITIAL VIEW: 3-COLUMN CARDS GRID (EXACTLY LIKE 1ST IMAGE)       */
              /* --------------------------------------------------------------- */
              <div>
                {/* Section Heading & Guide */}
                <div id="service-types-heading" className="mb-6 sm:mb-8 text-center sm:text-left">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--brand-orange)]/10 text-[var(--brand-orange)] font-bold text-[11px] sm:text-xs font-heading mb-2">
                    <span className="w-2 h-2 rounded-full bg-[var(--brand-orange)] animate-pulse" />
                    <span>SELECT YOUR SPECIFIC TYPE</span>
                  </div>
                  <h2 className="text-xl sm:text-3xl font-heading font-extrabold text-[#0A1F6B] tracking-tight">
                    Which type of <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0B5CFF] to-[#FF7A00]">{currentService.title}</span> do you need?
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-500 mt-1 max-w-2xl">
                    Click any card below to expand its full details, features, timeline, and deliverables on this page.
                  </p>
                </div>

                {/* Category Cards Grid (3 Columns on Desktop) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                  {currentService.categories.map((cat, idx) => (
                    <div
                      key={cat.id}
                      id={`service-card-${cat.id}`}
                      onClick={() => handleCardClick(cat)}
                      className="group relative rounded-2xl sm:rounded-3xl overflow-hidden border border-slate-200/90 hover:border-[var(--brand-orange)] hover:ring-2 hover:ring-[var(--brand-orange)]/40 hover:shadow-2xl bg-white hover:-translate-y-1 transition-all duration-300 cursor-pointer flex flex-col justify-between"
                    >
                      {/* Top Visual Card Image with Fallback */}
                      <div className="relative w-full aspect-[16/10] overflow-hidden bg-slate-100">
                        <img
                          src={cat.image}
                          alt={`${cat.title} - Click On Media Gorakhpur`}
                          onError={(e) => {
                            e.currentTarget.src = currentService.fallbackImage;
                          }}
                          className="w-full h-full object-cover object-center group-hover:scale-106 transition-transform duration-500"
                          loading="lazy"
                        />
                        {/* Gradient Vignette */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent pointer-events-none" />

                        {/* Top Badges */}
                        <div className="absolute top-2.5 left-2.5 right-2.5 sm:top-3 sm:left-3 sm:right-3 flex items-center justify-between">
                          <span className="px-2.5 py-1 rounded-full bg-white/95 backdrop-blur-md text-[10px] font-heading font-extrabold text-[#0A1F6B] shadow-sm uppercase tracking-wide">
                            {cat.badge}
                          </span>

                          <span className="px-2 py-0.5 rounded-full bg-[#0A1F6B]/80 backdrop-blur-md text-white text-[10px] font-mono font-bold">
                            0{idx + 1}
                          </span>
                        </div>

                        {/* Bottom Title on Image */}
                        <div className="absolute bottom-2 left-2.5 right-2.5 sm:bottom-2.5 sm:left-3 sm:right-3">
                          <span className="text-[10px] sm:text-[11px] font-mono text-[var(--cyan-accent)] font-bold uppercase tracking-wider block">
                            Click to Expand Details
                          </span>
                        </div>
                      </div>

                      {/* Card Content Strip */}
                      <div className="p-3.5 sm:p-5 flex-grow flex flex-col justify-between space-y-2.5 sm:space-y-3">
                        <div>
                          <h3 className="text-base sm:text-lg font-heading font-extrabold text-[#0A1F6B] group-hover:text-[var(--primary-blue)] transition-colors leading-snug">
                            {cat.title}
                          </h3>
                          <p className="text-xs text-slate-500 mt-1 line-clamp-2">
                            {cat.tagline}
                          </p>
                        </div>

                        {/* Bottom Action Hint */}
                        <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs">
                          <span className="text-[10px] sm:text-[11px] font-bold text-slate-400">
                            ⏱ {cat.timeline}
                          </span>
                          <span className="font-heading font-bold text-xs flex items-center gap-1 transition-colors text-[var(--primary-blue)] group-hover:text-[var(--brand-orange)] group-hover:translate-x-0.5">
                            <span>Expand Details</span>
                            <ArrowRight className="w-3.5 h-3.5 flex-shrink-0" />
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>
        </section>

        {/* ======================================================================= */}
        {/* 5. NEED PERSONAL GUIDANCE? (High-Trust Contact Box)                     */}
        {/* ======================================================================= */}
        <section className="py-8 sm:py-12 bg-white border-t border-slate-200/80">
          <div className="max-w-4xl mx-auto px-3 sm:px-6 lg:px-8 text-center space-y-3 sm:space-y-4">
            <h3 className="text-lg sm:text-2xl font-heading font-bold text-[#0A1F6B]">
              Need Help Deciding Which Package Fits Your Budget?
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto leading-relaxed">
              Our Gorakhpur consultants can inspect your current business presence, recommend the best package, and provide a clear quote in under 30 minutes.
            </p>
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-2.5 sm:gap-3">
              <a
                href="tel:+918303534063"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs sm:text-sm font-heading font-bold transition-colors text-center min-h-[44px]"
              >
                <Phone className="w-4 h-4 text-[var(--brand-orange)] flex-shrink-0" />
                <span>Call Strategist: +91 83035 34063</span>
              </a>

              <button
                onClick={onBack}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full border border-slate-200 hover:border-slate-300 text-slate-600 hover:text-slate-900 text-xs sm:text-sm font-heading font-bold transition-colors cursor-pointer text-center min-h-[44px]"
              >
                Back to All Services
              </button>
            </div>
          </div>
        </section>

      </main>

      {/* ========================================================================= */}
      {/* 6. CLEAN FOOTER STRIP                                                     */}
      {/* ========================================================================= */}
      <footer className="bg-slate-900 text-slate-400 py-6 sm:py-8 border-t border-slate-800 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center justify-center sm:justify-start gap-3">
            <Logo variant="dark" size="sm" />
            <span>&copy; {new Date().getFullYear()} Click On Media. All rights reserved.</span>
          </div>

          <div className="flex items-center justify-center gap-4">
            <button onClick={onBack} className="hover:text-white transition-colors cursor-pointer">All Services</button>
            <span className="text-slate-600">•</span>
            <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="hover:text-white transition-colors cursor-pointer">Back to Top ↑</button>
          </div>
        </div>
      </footer>

    </div>
  );
}
