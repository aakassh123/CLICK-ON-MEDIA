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

  // Active Type State for In-Page Detailed View (No Page Navigation)
  const [selectedType, setSelectedType] = useState(() => {
    if (initialTypeId && currentService?.categories) {
      return currentService.categories.find(c => c.id === initialTypeId) || null;
    }
    return null;
  });

  // Sync selectedType and scroll to top on mount or when serviceId/initialTypeId changes
  useEffect(() => {
    setSelectedType(initialTypeId ? currentService?.categories?.find(c => c.id === initialTypeId) || null : null);
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

  const handleCardClick = (cat) => {
    setSelectedType(cat);
    setTimeout(() => {
      const el = document.getElementById('type-details-section');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 60);
  };

  const handleCloseType = () => {
    setSelectedType(null);
    setTimeout(() => {
      const el = document.getElementById('service-types-heading');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 60);
  };

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
            
            {selectedType ? (
              /* --------------------------------------------------------------- */
              /* EXPANDED DETAILED TYPE VIEW (Revealed smoothly on the same page)*/
              /* --------------------------------------------------------------- */
              <div 
                id="type-details-section"
                className="space-y-8 sm:space-y-14 animate-in fade-in slide-in-from-bottom-3 duration-300"
              >
                {/* Top Control Bar: Back / Close & Quick Switcher */}
                <div className="p-2.5 sm:p-4 rounded-2xl sm:rounded-3xl bg-slate-50 border border-slate-200/90 flex flex-col md:flex-row md:items-center justify-between gap-2.5 sm:gap-3 shadow-xs">
                  {/* Left: Back / Close Action */}
                  <div className="flex items-center justify-between sm:justify-start gap-2 w-full md:w-auto">
                    <button
                      onClick={handleCloseType}
                      className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 rounded-xl bg-white hover:bg-slate-100 border border-slate-200/90 text-xs sm:text-sm font-heading font-bold text-slate-800 hover:text-[var(--primary-blue)] shadow-xs transition-all cursor-pointer group flex-shrink-0 min-h-[40px]"
                      title="Return to the list of service types"
                    >
                      <ArrowLeft className="w-4 h-4 text-[var(--brand-orange)] group-hover:-translate-x-1 transition-transform flex-shrink-0" />
                      <span>Back to All Types</span>
                    </button>

                    <button
                      onClick={handleCloseType}
                      className="p-2 sm:p-2.5 rounded-xl bg-white hover:bg-rose-50 border border-slate-200/90 text-slate-500 hover:text-rose-600 transition-colors cursor-pointer flex-shrink-0 min-w-[40px] min-h-[40px] flex items-center justify-center"
                      title="Close Details"
                      aria-label="Close service type details"
                    >
                      <X className="w-4 h-4" />
                    </button>

                    <div className="hidden lg:flex items-center gap-1.5 text-xs text-slate-500 pl-1">
                      <span className="font-semibold text-slate-700">{currentService.title}</span>
                      <span>/</span>
                      <span className="font-bold text-[#0A1F6B] truncate max-w-[200px]">{selectedType.title}</span>
                    </div>
                  </div>

                  {/* Right: Quick Switcher for Other Types in this Service */}
                  <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-1 max-w-full touch-pan-x overscroll-x-contain">
                    <span className="text-[11px] font-heading font-bold text-slate-400 uppercase tracking-wider mr-1 whitespace-nowrap hidden lg:inline flex-shrink-0">
                      Switch Type:
                    </span>
                    {currentService.categories.map((cat) => {
                      const isCatActive = cat.id === selectedType.id;
                      return (
                        <button
                          key={cat.id}
                          onClick={() => {
                            setSelectedType(cat);
                            const el = document.getElementById('type-details-section');
                            if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                          }}
                          className={`px-3 py-1.5 rounded-xl text-xs font-heading font-bold transition-all cursor-pointer whitespace-nowrap flex-shrink-0 flex items-center gap-1.5 min-h-[36px] ${
                            isCatActive
                              ? 'bg-[#0A1F6B] text-white shadow-xs ring-2 ring-[var(--brand-orange)]/60'
                              : 'bg-white hover:bg-slate-200/70 text-slate-600 border border-slate-200'
                          }`}
                        >
                          <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${isCatActive ? 'bg-[var(--brand-orange)]' : 'bg-slate-300'}`} />
                          <span>{cat.title}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* 1. Hero Showcase of Selected Type */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-center pt-1">
                  {/* Left Column (7 cols): Info, Badges, CTAs */}
                  <div className="lg:col-span-7 space-y-4 sm:space-y-5 text-center lg:text-left">
                    {/* Badges */}
                    <div className="flex flex-wrap items-center justify-center lg:justify-start gap-1.5 sm:gap-2">
                      <span className="inline-flex items-center gap-1 px-2.5 sm:px-3 py-1 rounded-full bg-[var(--brand-orange)]/10 text-[var(--brand-orange)] font-bold text-[11px] sm:text-xs font-heading border border-[var(--brand-orange)]/20">
                        <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5 flex-shrink-0" />
                        <span>{selectedType.badge}</span>
                      </span>

                      <span className="inline-flex items-center gap-1 px-2.5 sm:px-3 py-1 rounded-full bg-[var(--primary-blue)]/10 text-[var(--primary-blue)] font-bold text-[11px] sm:text-xs font-heading">
                        <span>{currentService.title} Package</span>
                      </span>

                      <span className="inline-flex items-center gap-1 px-2.5 sm:px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 font-bold text-[11px] sm:text-xs font-heading border border-emerald-200">
                        <CheckCircle2 className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-emerald-600 flex-shrink-0" />
                        <span>Gorakhpur &amp; UP</span>
                      </span>
                    </div>

                    {/* Main Title */}
                    <h2 className="text-xl sm:text-3xl md:text-5xl font-heading font-extrabold text-[#0A1F6B] tracking-tight leading-tight break-words">
                      {selectedType.title}
                    </h2>

                    {/* Tagline */}
                    <p className="text-sm sm:text-lg md:text-xl font-heading font-semibold text-slate-700 leading-snug">
                      {selectedType.tagline}
                    </p>

                    {/* 4 Quick Metadata Value Pills */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-2.5 pt-1">
                      <div className="p-2 sm:p-3 rounded-xl sm:rounded-2xl bg-slate-50 border border-slate-200/90 shadow-2xs text-left">
                        <div className="flex items-center gap-1 text-[9px] sm:text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider">
                          <Clock className="w-3 h-3 text-[var(--brand-orange)] flex-shrink-0" /> Timeline
                        </div>
                        <div className="text-xs sm:text-sm font-heading font-extrabold text-[#0A1F6B] mt-0.5 truncate">
                          {selectedType.timeline}
                        </div>
                      </div>

                      <div className="p-2 sm:p-3 rounded-xl sm:rounded-2xl bg-slate-50 border border-slate-200/90 shadow-2xs text-left">
                        <div className="flex items-center gap-1 text-[9px] sm:text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider">
                          <ShieldCheck className="w-3 h-3 text-emerald-600 flex-shrink-0" /> Ownership
                        </div>
                        <div className="text-xs sm:text-sm font-heading font-extrabold text-[#0A1F6B] mt-0.5 truncate">
                          100% Client
                        </div>
                      </div>

                      <div className="p-2 sm:p-3 rounded-xl sm:rounded-2xl bg-slate-50 border border-slate-200/90 shadow-2xs text-left">
                        <div className="flex items-center gap-1 text-[9px] sm:text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider">
                          <Zap className="w-3 h-3 text-amber-500 flex-shrink-0" /> Support
                        </div>
                        <div className="text-xs sm:text-sm font-heading font-extrabold text-[#0A1F6B] mt-0.5 truncate">
                          30-Day Free
                        </div>
                      </div>

                      <div className="p-2 sm:p-3 rounded-xl sm:rounded-2xl bg-slate-50 border border-slate-200/90 shadow-2xs text-left">
                        <div className="flex items-center gap-1 text-[9px] sm:text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider">
                          <Award className="w-3 h-3 text-[var(--primary-blue)] flex-shrink-0" /> Quality
                        </div>
                        <div className="text-xs sm:text-sm font-heading font-extrabold text-[#0A1F6B] mt-0.5 truncate">
                          Guaranteed
                        </div>
                      </div>
                    </div>

                    {/* CTAs */}
                    <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-2.5 sm:gap-3">
                      <button
                        onClick={() => onOpenQuoteWithService(`${currentService.title} - ${selectedType.title}`)}
                        className="btn-primary w-full sm:w-auto text-xs sm:text-sm !py-3 !px-5 font-heading font-bold shadow-md shadow-[var(--brand-orange)]/25 flex items-center justify-center gap-2 group cursor-pointer text-center min-h-[44px]"
                      >
                        <span>Get a Quote for this Package</span>
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 flex-shrink-0" />
                      </button>

                      <a
                        href={`https://wa.me/918303534063?text=Hi%20Click%20On%20Media,%20I'm%20interested%20in%20getting%20a%20quote%20for%20${encodeURIComponent(currentService.title)}%20(${encodeURIComponent(selectedType.title)}).`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-3 rounded-full bg-emerald-50 hover:bg-emerald-100 border border-emerald-300 text-emerald-700 text-xs sm:text-sm font-heading font-bold shadow-2xs transition-all text-center min-h-[44px]"
                      >
                        <MessageCircle className="w-4 h-4 text-emerald-600 fill-emerald-600 flex-shrink-0" />
                        <span>Chat on WhatsApp</span>
                      </a>

                      <a
                        href="tel:+918303534063"
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-3 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs sm:text-sm font-heading font-bold transition-colors text-center min-h-[44px]"
                      >
                        <Phone className="w-4 h-4 text-[var(--brand-orange)] flex-shrink-0" />
                        <span>Call Directly</span>
                      </a>
                    </div>

                    <div className="text-xs text-slate-500 pt-1">
                      <strong className="text-slate-700">Best Suited For:</strong> {selectedType.idealFor}
                    </div>
                  </div>

                  {/* Right Column (5 cols): High-Quality Relevant Image */}
                  <div className="lg:col-span-5 w-full">
                    <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border-2 border-slate-200/90 shadow-xl sm:shadow-2xl bg-slate-900 group">
                      <div className="relative aspect-[16/10] sm:aspect-[4/3] lg:aspect-[16/11] w-full overflow-hidden">
                        <img
                          src={selectedType.image}
                          alt={`${selectedType.title} - ${currentService.title} by Click On Media`}
                          onError={(e) => {
                            e.currentTarget.src = currentService.fallbackImage;
                          }}
                          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                          loading="eager"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
                        <div className="absolute top-3 right-3 sm:top-4 sm:right-4">
                          <span className="px-2.5 sm:px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-[10px] sm:text-xs font-heading font-extrabold text-[#0A1F6B] shadow-md uppercase tracking-wide">
                            {selectedType.badge}
                          </span>
                        </div>
                        <div className="absolute bottom-3 left-3 right-3 sm:bottom-6 sm:left-6 text-white space-y-1">
                          <div className="text-[10px] sm:text-[11px] font-mono text-[var(--cyan-accent)] font-bold uppercase tracking-wider">
                            {currentService.title} Package
                          </div>
                          <div className="text-base sm:text-xl font-heading font-bold text-white drop-shadow-md">
                            {selectedType.title}
                          </div>
                        </div>
                      </div>

                      <div className="p-3 sm:p-3.5 bg-slate-900 text-white flex items-center justify-between text-[11px] sm:text-xs border-t border-slate-800">
                        <span className="flex items-center gap-1.5 text-slate-300">
                          <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                          <span>100% Quality &amp; On-Time Delivery</span>
                        </span>
                        <span className="font-heading font-bold text-[var(--brand-orange)] whitespace-nowrap">
                          ⚡ {selectedType.timeline}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 2. Simple Explanation Box */}
                <div className="p-4 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-slate-50 to-blue-50/40 border border-slate-200/90 shadow-xs space-y-4 sm:space-y-6">
                  <div className="space-y-1.5 sm:space-y-2">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--primary-blue)]/10 text-[var(--primary-blue)] font-bold text-[11px] sm:text-xs font-heading">
                      <span>WHAT THIS SERVICE IS</span>
                    </div>
                    <h3 className="text-lg sm:text-2xl md:text-3xl font-heading font-extrabold text-[#0A1F6B]">
                      Simple Explanation of {selectedType.title}
                    </h3>
                  </div>

                  <p className="text-sm sm:text-lg text-slate-800 leading-relaxed font-normal">
                    {selectedType.explanation}
                  </p>

                  {/* Highlights Grid */}
                  {selectedType.highlights && selectedType.highlights.length > 0 && (
                    <div className="pt-3 sm:pt-4 border-t border-slate-200/80">
                      <span className="text-[11px] sm:text-xs font-mono font-bold uppercase tracking-wider text-slate-500 block mb-2 sm:mb-3">
                        Key Takeaways &amp; Highlights:
                      </span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                        {selectedType.highlights.map((item, idx) => (
                          <div key={idx} className="flex items-start gap-2.5 p-2.5 sm:p-3 rounded-xl sm:rounded-2xl bg-white border border-slate-200/70 shadow-2xs">
                            <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                              <Check className="w-3 h-3 stroke-[3]" />
                            </span>
                            <span className="text-xs sm:text-sm font-medium text-slate-800 leading-snug">
                              {item}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Bottom Back / Close Action Bar */}
                <div className="pt-5 border-t border-slate-200/90 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 sm:gap-4">
                  <button
                    onClick={handleCloseType}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 sm:px-5 py-2.5 sm:py-3 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs sm:text-sm font-heading font-bold transition-all cursor-pointer group min-h-[44px]"
                  >
                    <ArrowLeft className="w-4 h-4 text-[var(--brand-orange)] group-hover:-translate-x-1 transition-transform flex-shrink-0" />
                    <span>Back to All {currentService.title} Types</span>
                  </button>

                  <div className="flex flex-col xs:flex-row items-center gap-2.5 sm:gap-3 w-full sm:w-auto">
                    <button
                      onClick={() => onOpenQuoteWithService(`${currentService.title} - ${selectedType.title}`)}
                      className="btn-primary w-full sm:w-auto text-xs sm:text-sm !py-2.5 sm:!py-3 !px-5 font-heading font-bold shadow-md cursor-pointer min-h-[44px] text-center"
                    >
                      Get Free Quote
                    </button>
                    <a
                      href={`https://wa.me/918303534063?text=Hi%20Click%20On%20Media,%20I'm%20interested%20in%20${encodeURIComponent(currentService.title)}%20(${encodeURIComponent(selectedType.title)}).`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full xs:w-auto inline-flex items-center justify-center p-3 rounded-full bg-emerald-50 hover:bg-emerald-100 border border-emerald-300 text-emerald-700 transition-colors min-h-[44px]"
                      title="Chat on WhatsApp"
                    >
                      <MessageCircle className="w-4 h-4 text-emerald-600 fill-emerald-600 flex-shrink-0" />
                      <span className="xs:hidden text-xs font-bold font-heading ml-1.5">WhatsApp</span>
                    </a>
                  </div>
                </div>

              </div>
            ) : (
              /* --------------------------------------------------------------- */
              /* DEFAULT VIEW: VISUAL CARDS GRID OF SERVICE TYPES                */
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
                    Click any visual card below to explore its complete features, deliverables, benefits, process, and timeline right here.
                  </p>
                </div>

                {/* Category Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                  {currentService.categories.map((cat, idx) => (
                    <div
                      key={cat.id}
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

                        {/* Bottom Title on Image for Mobile Punch */}
                        <div className="absolute bottom-2 left-2.5 right-2.5 sm:bottom-2.5 sm:left-3 sm:right-3">
                          <span className="text-[10px] sm:text-[11px] font-mono text-[var(--cyan-accent)] font-bold uppercase tracking-wider block">
                            Click to View Details
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
                            <span>View Details</span>
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
