import React, { useEffect } from 'react';
import { 
  ArrowLeft, 
  ArrowRight, 
  CheckCircle2, 
  Phone, 
  MessageCircle, 
  Sparkles, 
  Clock, 
  ShieldCheck, 
  Zap, 
  TrendingUp, 
  Check, 
  ChevronRight, 
  Layers, 
  Target, 
  Users, 
  Calendar,
  Award,
  Globe,
  Share2
} from 'lucide-react';
import Logo from './Logo';
import { SERVICES_CATALOG } from '../data/servicesCatalog';

/**
 * ServiceTypeDetailPage
 * Dedicated, full-page dynamic view for each specific service category/type.
 * Designed for maximum clarity, mobile responsiveness, and high conversion.
 */
export default function ServiceTypeDetailPage({
  serviceId,
  typeId,
  onBackToService,
  onBackToAllServices,
  onSelectType,
  onOpenQuote
}) {
  // 1. Resolve parent service and active type
  const normalizedServiceKey = serviceId && SERVICES_CATALOG[serviceId] ? serviceId : 'web-dev';
  const service = SERVICES_CATALOG[normalizedServiceKey];

  // Resolve specific type
  const matchedType = service.categories.find(c => c.id === typeId);
  const currentType = matchedType || service.categories[0];

  // Other types in this service (excluding active)
  const otherTypes = service.categories.filter(c => c.id !== currentType.id);

  // Scroll to top when route changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [serviceId, typeId]);

  const handleQuoteClick = () => {
    if (onOpenQuote) {
      onOpenQuote(`${service.title} - ${currentType.title}`);
    }
  };

  const handleBackToServiceClick = () => {
    if (onBackToService) {
      onBackToService(service.id);
    } else if (onBackToAllServices) {
      onBackToAllServices();
    }
  };

  // WhatsApp prefilled URL
  const whatsappUrl = `https://wa.me/918303534063?text=Hi%20Click%20On%20Media,%20I'm%20interested%20in%20${encodeURIComponent(currentType.title)}%20(${encodeURIComponent(service.title)}).%20Please%20share%20details%20and%20pricing.`;

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans flex flex-col selection:bg-[var(--brand-orange)] selection:text-white">

      {/* ========================================================================= */}
      {/* 1. STICKY TOP NAVIGATION BAR                                              */}
      {/* ========================================================================= */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-xl border-b border-slate-200/90 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 sm:h-16 flex items-center justify-between gap-3">
          
          {/* Back to Parent Service Button */}
          <button
            onClick={handleBackToServiceClick}
            className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm font-heading font-bold text-slate-700 hover:text-[var(--primary-blue)] transition-colors cursor-pointer group py-1.5 px-2 sm:px-3 rounded-xl hover:bg-slate-100"
            title={`Back to ${service.title}`}
          >
            <ArrowLeft className="w-4 h-4 text-[var(--brand-orange)] transition-transform group-hover:-translate-x-1" />
            <span className="hidden xs:inline">Back to</span>
            <span className="truncate max-w-[140px] sm:max-w-none text-[var(--primary-blue)]">{service.title}</span>
          </button>

          {/* Logo Center / Return to Home */}
          <button 
            onClick={onBackToAllServices}
            className="flex items-center gap-2 cursor-pointer transition-transform hover:scale-105"
            title="Click On Media Home"
          >
            <Logo variant="light" size="sm" />
          </button>

          {/* Action CTAs */}
          <div className="flex items-center gap-1.5 sm:gap-3">
            {/* Quick WhatsApp */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 text-emerald-600 transition-all cursor-pointer"
              title="Chat on WhatsApp"
            >
              <MessageCircle className="w-4 h-4 text-emerald-600 fill-emerald-600" />
            </a>

            {/* Quick Call */}
            <a
              href="tel:+918303534063"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-xs font-bold text-slate-800 transition-colors"
              title="Call Us Directly"
            >
              <Phone className="w-3.5 h-3.5 text-[var(--brand-orange)]" />
              <span>+91 83035 34063</span>
            </a>

            {/* Get Quote CTA */}
            <button
              onClick={handleQuoteClick}
              className="btn-primary text-xs !py-1.5 sm:!py-2 !px-3 sm:!px-4 font-heading font-bold shadow-sm flex items-center gap-1.5"
            >
              <span>Get Quote</span>
              <ArrowRight className="w-3.5 h-3.5 hidden sm:inline" />
            </button>
          </div>

        </div>
      </header>

      {/* ========================================================================= */}
      {/* 2. BREADCRUMB STRIP                                                       */}
      {/* ========================================================================= */}
      <div className="bg-slate-50/90 border-b border-slate-200/80 py-2.5 text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-1.5 overflow-x-auto no-scrollbar whitespace-nowrap">
          <button 
            onClick={onBackToAllServices}
            className="hover:text-[var(--primary-blue)] transition-colors cursor-pointer"
          >
            Home
          </button>
          <ChevronRight className="w-3.5 h-3.5 text-slate-300 flex-shrink-0" />
          <button
            onClick={onBackToAllServices}
            className="hover:text-[var(--primary-blue)] transition-colors cursor-pointer"
          >
            Services
          </button>
          <ChevronRight className="w-3.5 h-3.5 text-slate-300 flex-shrink-0" />
          <button
            onClick={handleBackToServiceClick}
            className="hover:text-[var(--primary-blue)] font-medium transition-colors cursor-pointer"
          >
            {service.title}
          </button>
          <ChevronRight className="w-3.5 h-3.5 text-slate-300 flex-shrink-0" />
          <span className="font-heading font-bold text-[#0A1F6B] truncate">
            {currentType.title}
          </span>
        </div>
      </div>

      <main className="flex-grow">

        {/* ======================================================================= */}
        {/* 3. HERO SECTION WITH IMAGE & ACTION BADGES                              */}
        {/* ======================================================================= */}
        <section className="relative pt-8 pb-12 sm:pt-14 sm:pb-16 bg-gradient-to-b from-[#FAFBFF] via-white to-slate-50/70 border-b border-slate-200/80 overflow-hidden">
          
          {/* Ambient Glow Accents */}
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-[var(--brand-orange)]/5 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute top-1/3 left-10 w-80 h-80 bg-[var(--primary-blue)]/5 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              {/* Left Column (7 cols): Title, Tagline, Highlights & CTAs */}
              <div className="lg:col-span-7 space-y-5 text-center lg:text-left">
                
                {/* Badges */}
                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[var(--brand-orange)]/10 text-[var(--brand-orange)] font-bold text-xs font-heading border border-[var(--brand-orange)]/20">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>{currentType.badge}</span>
                  </span>

                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[var(--primary-blue)]/10 text-[var(--primary-blue)] font-bold text-xs font-heading">
                    <span>{service.title} Solution</span>
                  </span>

                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 font-bold text-xs font-heading border border-emerald-200">
                    <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                    <span>Gorakhpur &amp; UP</span>
                  </span>
                </div>

                {/* Main Heading */}
                <h1 className="text-2xl sm:text-4xl md:text-5xl font-heading font-extrabold text-[#0A1F6B] tracking-tight leading-tight">
                  {currentType.title}
                </h1>

                {/* Tagline / Subtitle */}
                <p className="text-base sm:text-xl font-heading font-semibold text-slate-700 leading-snug">
                  {currentType.tagline}
                </p>

                {/* 4 Quick Metadata Pills */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-1">
                  <div className="p-2.5 sm:p-3 rounded-2xl bg-white border border-slate-200/90 shadow-sm text-left">
                    <div className="flex items-center gap-1 text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider">
                      <Clock className="w-3 h-3 text-[var(--brand-orange)]" /> Timeline
                    </div>
                    <div className="text-xs sm:text-sm font-heading font-extrabold text-[#0A1F6B] mt-0.5">
                      {currentType.timeline}
                    </div>
                  </div>

                  <div className="p-2.5 sm:p-3 rounded-2xl bg-white border border-slate-200/90 shadow-sm text-left">
                    <div className="flex items-center gap-1 text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider">
                      <ShieldCheck className="w-3 h-3 text-emerald-600" /> Ownership
                    </div>
                    <div className="text-xs sm:text-sm font-heading font-extrabold text-[#0A1F6B] mt-0.5">
                      100% Client
                    </div>
                  </div>

                  <div className="p-2.5 sm:p-3 rounded-2xl bg-white border border-slate-200/90 shadow-sm text-left">
                    <div className="flex items-center gap-1 text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider">
                      <Zap className="w-3 h-3 text-amber-500" /> Support
                    </div>
                    <div className="text-xs sm:text-sm font-heading font-extrabold text-[#0A1F6B] mt-0.5">
                      30-Day Free
                    </div>
                  </div>

                  <div className="p-2.5 sm:p-3 rounded-2xl bg-white border border-slate-200/90 shadow-sm text-left">
                    <div className="flex items-center gap-1 text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider">
                      <Award className="w-3 h-3 text-[var(--primary-blue)]" /> Quality
                    </div>
                    <div className="text-xs sm:text-sm font-heading font-extrabold text-[#0A1F6B] mt-0.5">
                      Guaranteed
                    </div>
                  </div>
                </div>

                {/* Primary Action Buttons */}
                <div className="pt-3 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3">
                  <button
                    onClick={handleQuoteClick}
                    className="btn-primary w-full sm:w-auto text-sm sm:text-base !py-3.5 !px-7 font-heading font-bold shadow-lg shadow-[var(--brand-orange)]/25 flex items-center justify-center gap-2 group cursor-pointer"
                  >
                    <span>Get a Quote for this Service</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </button>

                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-emerald-50 hover:bg-emerald-100 border border-emerald-300 text-emerald-700 text-sm font-heading font-bold shadow-sm transition-all hover:scale-105"
                  >
                    <MessageCircle className="w-4 h-4 text-emerald-600 fill-emerald-600" />
                    <span>Chat on WhatsApp</span>
                  </a>

                  <a
                    href="tel:+918303534063"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-800 text-sm font-heading font-bold transition-colors"
                  >
                    <Phone className="w-4 h-4 text-[var(--brand-orange)]" />
                    <span className="sm:hidden lg:inline">Call: +91 83035 34063</span>
                    <span className="hidden sm:inline lg:hidden">Call Now</span>
                  </a>
                </div>

                {/* Best Suited For Tag */}
                <div className="pt-1 text-xs text-slate-500">
                  <strong className="text-slate-700">Best Suited For:</strong> {currentType.idealFor}
                </div>

              </div>

              {/* Right Column (5 cols): High-Resolution Featured Image Card */}
              <div className="lg:col-span-5">
                <div className="relative rounded-3xl overflow-hidden border-2 border-slate-200/90 shadow-2xl bg-slate-900 group">
                  
                  {/* High Quality Image with Fallback */}
                  <div className="relative aspect-[4/3] sm:aspect-[16/11] w-full overflow-hidden">
                    <img
                      src={currentType.image}
                      alt={`${currentType.title} - ${service.title} by Click On Media`}
                      onError={(e) => {
                        e.currentTarget.src = service.fallbackImage;
                      }}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                      loading="eager"
                    />

                    {/* Gradient Overlay for Depth */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />

                    {/* Badge on Top-Right */}
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-xs font-heading font-extrabold text-[#0A1F6B] shadow-md uppercase tracking-wide">
                        {currentType.badge}
                      </span>
                    </div>

                    {/* Overlay Text on Bottom */}
                    <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 text-white space-y-1">
                      <div className="text-[11px] font-mono text-[var(--cyan-accent)] font-bold uppercase tracking-wider">
                        {service.title} Package
                      </div>
                      <div className="text-lg sm:text-xl font-heading font-bold text-white drop-shadow-md">
                        {currentType.title}
                      </div>
                    </div>
                  </div>

                  {/* Bottom Assurance Strip */}
                  <div className="p-3.5 bg-slate-900 text-white flex items-center justify-between text-xs border-t border-slate-800">
                    <span className="flex items-center gap-1.5 text-slate-300">
                      <ShieldCheck className="w-4 h-4 text-emerald-400" />
                      <span>100% Quality &amp; On-Time Delivery</span>
                    </span>
                    <span className="font-heading font-bold text-[var(--brand-orange)]">
                      ⚡ {currentType.timeline}
                    </span>
                  </div>

                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ======================================================================= */}
        {/* 4. SIMPLE EXPLANATION (Easy to Understand for Non-Technical Users)     */}
        {/* ======================================================================= */}
        <section className="py-12 sm:py-16 bg-white border-b border-slate-200/80">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="text-center sm:text-left space-y-3 mb-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--primary-blue)]/10 text-[var(--primary-blue)] font-bold text-xs font-heading">
                <span>WHAT THIS SERVICE IS</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-extrabold text-[#0A1F6B] tracking-tight">
                Simple Explanation of {currentType.title}
              </h2>
            </div>

            {/* Explanation Box */}
            <div className="p-6 sm:p-8 md:p-10 rounded-3xl bg-gradient-to-br from-slate-50 to-blue-50/40 border border-slate-200/90 shadow-sm space-y-6">
              <p className="text-base sm:text-lg md:text-xl text-slate-800 leading-relaxed font-normal">
                {currentType.explanation}
              </p>

              {/* Key Takeaways Grid */}
              <div className="pt-4 border-t border-slate-200/80">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 block mb-3">
                  Key Takeaways &amp; Highlights:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {currentType.highlights.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 p-3 rounded-2xl bg-white border border-slate-200/70 shadow-2xs">
                      <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 stroke-[3]" />
                      </span>
                      <span className="text-xs sm:text-sm font-medium text-slate-800">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* ======================================================================= */}
        {/* 5. WHAT WE PROVIDE (Features & Deliverables Included)                   */}
        {/* ======================================================================= */}
        <section className="py-12 sm:py-16 bg-slate-50/70 border-b border-slate-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="text-center max-w-3xl mx-auto mb-10 space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100/70 text-emerald-800 font-bold text-xs font-heading">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>WHAT WE PROVIDE</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-extrabold text-[#0A1F6B] tracking-tight">
                Complete Features &amp; Deliverables Included
              </h2>
              <p className="text-xs sm:text-sm text-slate-600">
                Everything required to launch, run, and scale successfully with zero hidden costs or surprises.
              </p>
            </div>

            {/* 6 Feature / Deliverable Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
              {currentType.deliverables.map((item, idx) => (
                <div
                  key={idx}
                  className="p-5 sm:p-6 rounded-2xl sm:rounded-3xl bg-white border border-slate-200/90 shadow-sm hover:shadow-md transition-all hover:-translate-y-1 flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="w-10 h-10 rounded-2xl bg-[var(--primary-blue)]/10 text-[var(--primary-blue)] flex items-center justify-center font-heading font-bold text-sm">
                      0{idx + 1}
                    </div>

                    <h3 className="text-base sm:text-lg font-heading font-extrabold text-[#0A1F6B]">
                      {item.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-slate-100 flex items-center gap-1.5 text-xs font-bold text-emerald-600">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                    <span>Included in Package</span>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* ======================================================================= */}
        {/* 6. HOW THIS HELPS YOUR BUSINESS (Commercial Benefits & ROI)              */}
        {/* ======================================================================= */}
        <section className="py-12 sm:py-16 bg-white border-b border-slate-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="text-center max-w-3xl mx-auto mb-10 space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--brand-orange)]/10 text-[var(--brand-orange)] font-bold text-xs font-heading">
                <TrendingUp className="w-3.5 h-3.5 text-[var(--brand-orange)]" />
                <span>COMMERCIAL VALUE</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-extrabold text-[#0A1F6B] tracking-tight">
                How This Helps Your Business Grow
              </h2>
              <p className="text-xs sm:text-sm text-slate-600">
                Investing in professional digital services is designed to generate verified commercial returns.
              </p>
            </div>

            {/* 4 Commercial Benefits Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
              {currentType.benefits.map((benefit, idx) => (
                <div
                  key={idx}
                  className="p-6 sm:p-7 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-white to-slate-50/80 border border-slate-200/90 shadow-sm hover:border-[var(--brand-orange)]/50 transition-all flex items-start gap-4"
                >
                  <div className="w-12 h-12 rounded-2xl bg-[var(--brand-orange)]/10 text-[var(--brand-orange)] flex items-center justify-center flex-shrink-0 font-heading font-extrabold text-base">
                    ✓
                  </div>
                  <div className="space-y-1.5">
                    <h3 className="text-base sm:text-lg font-heading font-extrabold text-[#0A1F6B]">
                      {benefit.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {benefit.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* ======================================================================= */}
        {/* 7. OUR DELIVERY PROCESS (4 Milestone Steps)                             */}
        {/* ======================================================================= */}
        <section className="py-12 sm:py-16 bg-slate-50/80 border-b border-slate-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="text-center max-w-3xl mx-auto mb-10 space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--primary-blue)]/10 text-[var(--primary-blue)] font-bold text-xs font-heading">
                <Clock className="w-3.5 h-3.5" />
                <span>STEP-BY-STEP PROCESS</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-extrabold text-[#0A1F6B] tracking-tight">
                Our Clear 4-Step Delivery Process
              </h2>
              <p className="text-xs sm:text-sm text-slate-600">
                Transparent milestones with predictable delivery times and constant communication.
              </p>
            </div>

            {/* 4 Process Milestone Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {currentType.process.map((p, idx) => (
                <div
                  key={idx}
                  className="p-5 sm:p-6 rounded-2xl sm:rounded-3xl bg-white border border-slate-200/90 shadow-sm relative overflow-hidden flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="w-9 h-9 rounded-xl bg-[#0A1F6B] text-white flex items-center justify-center font-heading font-extrabold text-xs shadow-sm">
                        {p.step}
                      </span>
                      <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider">
                        Milestone 0{idx + 1}
                      </span>
                    </div>

                    <h3 className="text-base font-heading font-extrabold text-[#0A1F6B]">
                      {p.title}
                    </h3>

                    <p className="text-xs text-slate-600 leading-relaxed">
                      {p.desc}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-slate-100 text-[11px] font-bold text-[var(--primary-blue)] flex items-center gap-1">
                    <span>Phase 0{idx + 1} Approved</span>
                    <Check className="w-3 h-3 text-emerald-500 stroke-[3]" />
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* ======================================================================= */}
        {/* 8. PROJECT TIMELINE & FAST TURNAROUND COMMITMENT                         */}
        {/* ======================================================================= */}
        <section className="py-10 bg-white border-b border-slate-200/80">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-blue-50/70 via-indigo-50/40 to-orange-50/50 border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-6">
              
              <div className="space-y-2 text-center sm:text-left">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white text-slate-700 font-bold text-xs font-mono shadow-2xs">
                  <Calendar className="w-3.5 h-3.5 text-[var(--brand-orange)]" />
                  <span>GUARANTEED TIMELINE</span>
                </span>
                <h3 className="text-xl sm:text-2xl font-heading font-extrabold text-[#0A1F6B]">
                  Estimated Delivery: <span className="text-[var(--brand-orange)]">{currentType.timeline}</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 max-w-xl">
                  We commit to on-time milestone handovers. If you have an urgent deadline for an exhibition or grand opening, express delivery is available.
                </p>
              </div>

              <div className="flex-shrink-0">
                <button
                  onClick={handleQuoteClick}
                  className="btn-primary text-xs sm:text-sm !py-3 !px-6 font-heading font-bold shadow-md cursor-pointer whitespace-nowrap"
                >
                  Book Your Slot Now
                </button>
              </div>

            </div>
          </div>
        </section>

        {/* ======================================================================= */}
        {/* 9. HIGH-CONVERTING BOTTOM CALL TO ACTION                                */}
        {/* ======================================================================= */}
        <section className="py-16 md:py-20 bg-gradient-to-r from-[#0A1F6B] via-[#081855] to-[#060F34] text-white relative overflow-hidden">
          
          <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--brand-orange)]/20 rounded-full blur-[140px] pointer-events-none" />
          
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 relative z-10">
            
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs font-heading font-bold tracking-wider uppercase backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5 text-[var(--brand-orange)]" />
              <span>READY TO GET STARTED?</span>
            </div>

            <h2 className="text-2xl sm:text-4xl md:text-5xl font-heading font-extrabold text-white tracking-tight leading-tight">
              Let&apos;s Build Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--cyan-accent)] to-[var(--brand-orange)]">{currentType.title}</span>
            </h2>

            <p className="text-sm sm:text-base md:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Get an in-depth audit, transparent milestone quote, and launch plan crafted specifically for your business in Gorakhpur and UP.
            </p>

            <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={handleQuoteClick}
                className="btn-primary text-sm sm:text-base !py-4 !px-8 shadow-xl shadow-[var(--brand-orange)]/40 hover:scale-105 active:scale-95 transition-all font-heading font-bold flex items-center gap-2 group w-full sm:w-auto justify-center cursor-pointer"
              >
                <span>Request Free Quote for {currentType.title}</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-heading font-bold shadow-md transition-all hover:scale-105"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Discuss on WhatsApp</span>
              </a>

              <a
                href="tel:+918303534063"
                className="btn-secondary text-sm sm:text-base !py-4 !px-8 font-bold flex items-center gap-2 w-full sm:w-auto justify-center"
              >
                <Phone className="w-4 h-4 text-[var(--brand-orange)]" />
                <span>Call +91 83035 34063</span>
              </a>
            </div>

          </div>
        </section>

        {/* ======================================================================= */}
        {/* 10. EXPLORE OTHER TYPES OF THIS SERVICE (Related Card Switcher)         */}
        {/* ======================================================================= */}
        {otherTypes.length > 0 && (
          <section className="py-12 sm:py-16 bg-white border-t border-slate-200/80">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
                <div>
                  <span className="text-xs font-mono font-bold text-[var(--brand-orange)] uppercase tracking-wider block mb-1">
                    More Options in {service.title}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-heading font-extrabold text-[#0A1F6B]">
                    Explore Other {service.title} Packages
                  </h3>
                </div>

                <button
                  onClick={handleBackToServiceClick}
                  className="text-xs font-heading font-bold text-[var(--primary-blue)] hover:text-[#0A1F6B] flex items-center gap-1 cursor-pointer transition-colors"
                >
                  <span>View All {service.categories.length} Types</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Other Types Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {otherTypes.map((item) => (
                  <div
                    key={item.id}
                    onClick={() => onSelectType && onSelectType(service.id, item.id)}
                    className="p-4 sm:p-5 rounded-2xl bg-slate-50 hover:bg-white border border-slate-200 hover:border-[var(--primary-blue)]/60 hover:shadow-lg transition-all cursor-pointer flex flex-col justify-between group"
                  >
                    <div className="space-y-3">
                      <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden bg-slate-200">
                        <img
                          src={item.image}
                          alt={item.title}
                          onError={(e) => {
                            e.currentTarget.src = service.fallbackImage;
                          }}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          loading="lazy"
                        />
                        <span className="absolute top-2 left-2 px-2 py-0.5 rounded-full bg-white/95 text-[10px] font-heading font-extrabold text-[#0A1F6B] shadow-2xs uppercase">
                          {item.badge}
                        </span>
                      </div>

                      <div>
                        <h4 className="text-base font-heading font-extrabold text-[#0A1F6B] group-hover:text-[var(--primary-blue)] transition-colors">
                          {item.title}
                        </h4>
                        <p className="text-xs text-slate-500 mt-1 line-clamp-2">
                          {item.tagline}
                        </p>
                      </div>
                    </div>

                    <div className="pt-3 mt-3 border-t border-slate-200/70 flex items-center justify-between text-xs font-heading font-bold text-[var(--primary-blue)]">
                      <span className="text-slate-400 font-normal">⏱ {item.timeline}</span>
                      <span className="flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                        <span>View Details</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </section>
        )}

      </main>

      {/* ========================================================================= */}
      {/* 11. CLEAN FOOTER STRIP                                                    */}
      {/* ========================================================================= */}
      <footer className="bg-slate-900 text-slate-400 py-8 border-t border-slate-800 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Logo variant="dark" size="sm" />
            <span>&copy; {new Date().getFullYear()} Click On Media. All rights reserved.</span>
          </div>

          <div className="flex items-center gap-4">
            <button onClick={handleBackToServiceClick} className="hover:text-white transition-colors cursor-pointer">
              ← Back to {service.title}
            </button>
            <span className="text-slate-600">•</span>
            <button onClick={onBackToAllServices} className="hover:text-white transition-colors cursor-pointer">
              All Services
            </button>
            <span className="text-slate-600">•</span>
            <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="hover:text-white transition-colors cursor-pointer">
              Back to Top ↑
            </button>
          </div>
        </div>
      </footer>

    </div>
  );
}
