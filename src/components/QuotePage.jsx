import React, { useState, useEffect } from 'react';
import { 
  ArrowLeft, 
  ArrowRight, 
  CheckCircle, 
  ShieldCheck, 
  Phone, 
  Mail, 
  MapPin, 
  Sparkles, 
  Clock, 
  Zap, 
  Lock, 
  Users, 
  ChevronRight,
  Send
} from 'lucide-react';
import Logo from './Logo';

export default function QuotePage({ onBack, preselectedService = '' }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    services: preselectedService ? [preselectedService] : ['Website Development'],
    budget: '$5,000 - $15,000',
    timeline: '1-2 Months',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (preselectedService && !formData.services.includes(preselectedService)) {
      setFormData(prev => ({
        ...prev,
        services: [preselectedService]
      }));
    }
  }, [preselectedService]);

  const serviceOptions = [
    'Social Media Marketing',
    'Website Development',
    'WhatsApp Bulk Messaging',
    'Graphics Designing',
    'Video Editing',
    'SEO - Website + Google My Business',
    'Ads - Website + Insta, FB, WhatsApp',
    'Software Development',
    'CRM',
    'Monetization Service'
  ];

  const budgetOptions = [
    '< $5,000',
    '$5,000 - $15,000',
    '$15,000 - $35,000',
    '$35,000+'
  ];

  const timelineOptions = [
    'Immediate (1-2 Weeks)',
    '1-2 Months',
    '2-4 Months',
    'Exploring / Flexible'
  ];

  const sanitizeInput = (val) => (typeof val === 'string' ? val.replace(/[<>]/g, '').trim() : val);

  const toggleService = (srv) => {
    if (formData.services.includes(srv)) {
      if (formData.services.length > 1) {
        setFormData({ ...formData, services: formData.services.filter(s => s !== srv) });
      }
    } else {
      setFormData({ ...formData, services: [...formData.services, srv] });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData({
      ...formData,
      name: sanitizeInput(formData.name),
      email: sanitizeInput(formData.email),
      phone: sanitizeInput(formData.phone),
      company: sanitizeInput(formData.company),
      message: sanitizeInput(formData.message)
    });
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans selection:bg-[var(--brand-orange)] selection:text-white relative">
      
      {/* ========================================================================= */}
      {/* 1. TOP STICKY HEADER & BREADCRUMB BAR                                     */}
      {/* ========================================================================= */}
      <header className="sticky top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-xl border-b border-slate-200/90 shadow-sm py-2.5 sm:py-3 transition-all">
        {/* Top brand accent line */}
        <div className="absolute top-0 inset-x-0 h-[2.5px] bg-gradient-to-r from-[var(--cyan-accent)] via-[var(--primary-blue)] to-[var(--brand-orange)] pointer-events-none opacity-90" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Left: Brand Logo & Back to Site */}
          <div className="flex items-center gap-3 sm:gap-4">
            <button
              onClick={onBack}
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-slate-100 hover:bg-slate-200 border border-slate-200 text-slate-800 text-xs font-bold transition-all group cursor-pointer shadow-xs"
              aria-label="Back to main website"
            >
              <ArrowLeft className="w-3.5 h-3.5 text-[var(--brand-orange)] group-hover:-translate-x-1 transition-transform" />
              <span>Back to Website</span>
            </button>

            <div className="hidden sm:block h-6 w-px bg-slate-200" />

            {/* Official Logo */}
            <button 
              onClick={onBack} 
              className="focus:outline-none flex items-center cursor-pointer"
              aria-label="Return to Click On Media Home"
            >
              <Logo variant="light" size="sm" />
            </button>
          </div>

          {/* Center Breadcrumb (Desktop) */}
          <div className="hidden md:flex items-center gap-2 text-xs font-semibold text-slate-500">
            <button onClick={onBack} className="hover:text-[var(--primary-blue)] transition-colors">Home</button>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-[#0A1F6B] font-bold">Start Your Project</span>
          </div>

          {/* Right Action: Direct Phone Support */}
          <a 
            href="tel:+918303534063" 
            className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-slate-800 text-xs font-bold hover:bg-slate-200 transition-colors"
          >
            <div className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </div>
            <Phone className="w-3.5 h-3.5 text-[var(--brand-orange)]" />
            <span className="hidden sm:inline font-mono">+91 83035 34063</span>
          </a>

        </div>
      </header>

      {/* ========================================================================= */}
      {/* 2. DEDICATED FULL-PAGE PROPOSAL & QUOTE CONTAINER (PREMIUM WHITE PALETTE) */}
      {/* ========================================================================= */}
      <main className="relative pt-12 pb-20 md:pt-16 md:pb-28 overflow-hidden bg-gradient-to-b from-[#FAFBFF] via-white to-[#F4F7FF] text-slate-800">
        
        {/* Ambient Brand Glow Orbs */}
        <div className="absolute top-10 left-10 w-96 h-96 bg-[var(--primary-blue)]/5 rounded-full blur-[140px] pointer-events-none z-0" />
        <div className="absolute top-1/3 right-10 w-96 h-96 bg-[var(--brand-orange)]/5 rounded-full blur-[140px] pointer-events-none z-0" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            
            {/* ------------------------------------------------------------------- */}
            {/* LEFT COLUMN: BRAND PROMISE & TRUST ARCHITECTURE (5 Cols)           */}
            {/* ------------------------------------------------------------------- */}
            <div className="lg:col-span-5 space-y-8">
              
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[var(--primary-blue)]/10 border border-[var(--primary-blue)]/20 text-xs font-heading font-bold tracking-wider uppercase shadow-xs">
                  <Sparkles className="w-3.5 h-3.5 text-[var(--brand-orange)]" />
                  <span className="text-[#0A1F6B]">FAST 24-HOUR PROPOSAL & ESTIMATE</span>
                </div>

                <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-[#0A1F6B] tracking-tight leading-[1.15]">
                  Start Your Project with{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0B5CFF] via-[#00C8FF] to-[#FF7A00]">
                    Click On Media
                  </span>
                </h1>

                <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
                  Tell us about your brand, growth goals, and timeline. Our senior strategists will review your specifications and engineer a tailored milestone roadmap, technical scope, and transparent quote within 24 hours.
                </p>
              </div>

              {/* 4 Trust Guarantee Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3.5">
                <div className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-sm flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center flex-shrink-0 mt-0.5 border border-emerald-500/20">
                    <Lock className="w-4 h-4" />
                  </div>
                  <div>
                    <h2 className="text-sm font-heading font-bold text-[#0A1F6B]">100% Confidential & NDA Protected</h2>
                    <p className="text-xs text-slate-600 mt-0.5">Your project data and intellectual property are legally protected from day zero.</p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-sm flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-[var(--primary-blue)]/10 text-[var(--primary-blue)] flex items-center justify-center flex-shrink-0 mt-0.5 border border-[var(--primary-blue)]/20">
                    <Zap className="w-4 h-4" />
                  </div>
                  <div>
                    <h2 className="text-sm font-heading font-bold text-[#0A1F6B]">Free Technical & Growth Audit</h2>
                    <p className="text-xs text-slate-600 mt-0.5">We analyze your current website, ads, or keyword rankings before proposing the strategy.</p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-sm flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-[var(--brand-orange)]/10 text-[var(--brand-orange)] flex items-center justify-center flex-shrink-0 mt-0.5 border border-[var(--brand-orange)]/20">
                    <CheckCircle className="w-4 h-4" />
                  </div>
                  <div>
                    <h2 className="text-sm font-heading font-bold text-[#0A1F6B]">Milestone & Fixed Scope Pricing</h2>
                    <p className="text-xs text-slate-600 mt-0.5">Transparent budgets with defined deliverable milestones. No hidden fees or surprises.</p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-sm flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-[var(--primary-blue)]/15 text-[var(--primary-blue)] flex items-center justify-center flex-shrink-0 mt-0.5 border border-[var(--primary-blue)]/30">
                    <Users className="w-4 h-4" />
                  </div>
                  <div>
                    <h2 className="text-sm font-heading font-bold text-[#0A1F6B]">Direct Senior Strategist Access</h2>
                    <p className="text-xs text-slate-600 mt-0.5">Zero junior handoffs. You collaborate directly with experienced engineering and marketing directors.</p>
                  </div>
                </div>
              </div>

              {/* Direct Reach Card */}
              <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-sm space-y-3">
                <div className="text-xs font-heading font-bold uppercase tracking-wider text-[#0A1F6B]">
                  Prefer Direct Discussion?
                </div>
                <div className="space-y-2 text-xs sm:text-sm text-slate-700 font-semibold">
                  <a href="tel:+918303534063" className="flex items-center gap-2.5 hover:text-[var(--brand-orange)] transition-colors">
                    <Phone className="w-4 h-4 text-[var(--brand-orange)]" />
                    <span>+91 83035 34063 (Direct Call & WhatsApp)</span>
                  </a>
                  <div className="flex items-center gap-2.5 text-slate-700">
                    <Mail className="w-4 h-4 text-[var(--primary-blue)]" />
                    <div className="space-y-1">
                        <div>info@clickonmedia.in</div>
                        <div className="text-xs text-slate-500">clickonmedia3@gmail.com</div>
                      </div>
                  </div>
                  <a 
                    href="https://www.google.com/maps/place/Click+On+Media+-Digital+Marketing+Agency/@26.7483214,83.4117146,17z"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-2.5 text-slate-700 hover:text-[var(--primary-blue)] transition-colors group"
                  >
                    <MapPin className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                    <span className="text-xs text-slate-600 group-hover:text-[var(--primary-blue)] leading-snug">
                      Near Adalat Restaurant, Pipal Dada, Shri Ganga Tiraha, Mohaddipur, Gorakhpur, Uttar Pradesh 273008
                      <span className="text-[var(--brand-orange)] text-[10px] font-bold block mt-0.5">View on Google Maps ↗</span>
                    </span>
                  </a>
                </div>
              </div>

            </div>

            {/* ------------------------------------------------------------------- */}
            {/* RIGHT COLUMN: HIGH-END INTERACTIVE QUOTE PROPOSAL CARD (7 Cols)    */}
            {/* ------------------------------------------------------------------- */}
            <div className="lg:col-span-7">
              
              <div className="rounded-3xl bg-white text-[var(--text-dark)] shadow-2xl border border-slate-200 overflow-hidden">
                
                {/* Card Header Strip */}
                <div className="bg-[var(--deep-navy)] px-6 sm:px-8 py-6 text-white border-b border-[var(--cyan-accent)]/20 flex items-center justify-between">
                  <div>
                    <span className="text-[11px] font-heading font-bold uppercase tracking-widest text-[var(--brand-orange)] flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-[var(--brand-orange)]" />
                      <span>STEP 01 OF 01 • PROPOSAL INTAKE</span>
                    </span>
                    <h2 className="text-xl sm:text-2xl font-heading font-extrabold text-white mt-1">
                      Project Specifications
                    </h2>
                  </div>
                  <div className="text-right hidden sm:block">
                    <span className="text-xs font-mono text-emerald-400 font-bold flex items-center gap-1.5 justify-end">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                      Online
                    </span>
                    <span className="text-[10px] text-slate-300 font-mono">Response within 24h</span>
                  </div>
                </div>

                {submitted ? (
                  /* Success Confirmation Screen */
                  <div className="p-8 sm:p-14 text-center space-y-6">
                    <div className="w-20 h-20 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto shadow-inner border border-emerald-200">
                      <CheckCircle className="w-12 h-12" />
                    </div>

                    <div className="space-y-2">
                      <span className="text-xs font-heading font-bold uppercase tracking-wider text-[var(--brand-orange)]">
                        PROPOSAL REQUEST RECEIVED
                      </span>
                      <h3 className="text-2xl sm:text-3xl font-heading font-black text-[var(--deep-navy)]">
                        Thank You, {formData.name || 'Partner'}!
                      </h3>
                      <p className="text-slate-600 max-w-md mx-auto text-sm sm:text-base leading-relaxed">
                        Your project specifications have been logged and assigned to a Senior Growth Strategist at <strong className="text-[var(--deep-navy)]">Click On Media</strong>. We will review your goals and email your customized proposal and roadmap to <span className="text-[var(--primary-blue)] font-semibold">{formData.email}</span> within 24 hours.
                      </p>
                    </div>

                    <div className="p-4 rounded-2xl bg-[var(--bg-soft)] border border-slate-200 max-w-md mx-auto text-left space-y-1.5 text-xs text-slate-600">
                      <div className="font-bold text-[var(--deep-navy)] flex items-center gap-1.5">
                        <Clock className="w-4 h-4 text-[var(--brand-orange)]" />
                        <span>What happens next?</span>
                      </div>
                      <p>1. Technical feasibility & competitor audit by our team.</p>
                      <p>2. Customized milestone roadmap & transparent budget deliverable.</p>
                      <p>3. Direct strategy call to align on execution timelines.</p>
                    </div>

                    <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                      <button
                        onClick={onBack}
                        className="btn-primary px-8 py-3.5 rounded-full text-white font-heading font-bold text-sm shadow-md"
                      >
                        Return to Homepage
                      </button>
                      
                      <button
                        onClick={() => setSubmitted(false)}
                        className="text-xs font-bold text-slate-500 hover:text-[var(--deep-navy)] px-4 py-2 transition-colors cursor-pointer"
                      >
                        Submit another inquiry
                      </button>
                    </div>
                  </div>
                ) : (
                  /* Main Interactive Proposal Form */
                  <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-6">
                    
                    {/* 1. Services Multi-selector */}
                    <div className="space-y-2.5">
                      <div className="flex items-center justify-between">
                        <label className="block text-xs font-heading font-bold uppercase tracking-wider text-[var(--deep-navy)]">
                          1. Select Required Services (Choose 1 or more) *
                        </label>
                        <span className="text-[11px] font-mono text-[var(--brand-orange)] font-bold">
                          {formData.services.length} selected
                        </span>
                      </div>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {serviceOptions.map((srv) => {
                          const isChecked = formData.services.includes(srv);
                          return (
                            <button
                              key={srv}
                              type="button"
                              onClick={() => toggleService(srv)}
                              className={`p-3 rounded-xl text-left text-xs font-heading font-bold transition-all cursor-pointer flex items-center justify-between border ${
                                isChecked
                                  ? 'bg-[var(--deep-navy)] text-white border-[var(--primary-blue)] shadow-md ring-2 ring-[var(--primary-blue)]/30'
                                  : 'bg-[var(--bg-soft)] text-slate-800 hover:bg-slate-200/80 border-slate-200'
                              }`}
                            >
                              <span>{srv}</span>
                              <span className={`w-4 h-4 rounded-full flex items-center justify-center text-[10px] font-mono font-bold ${
                                isChecked ? 'bg-[var(--brand-orange)] text-white' : 'border border-slate-300 text-slate-400'
                              }`}>
                                {isChecked ? '✓' : '+'}
                              </span>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* 2. Estimated Budget Range */}
                    <div className="space-y-2.5">
                      <label className="block text-xs font-heading font-bold uppercase tracking-wider text-[var(--deep-navy)]">
                        2. Approximate Project Budget Range *
                      </label>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                        {budgetOptions.map((b) => (
                          <button
                            key={b}
                            type="button"
                            onClick={() => setFormData({ ...formData, budget: b })}
                            className={`py-3 px-2 rounded-xl text-xs font-heading font-bold border transition-all text-center cursor-pointer ${
                              formData.budget === b
                                ? 'border-[var(--brand-orange)] bg-[var(--brand-orange)]/10 text-[var(--brand-orange)] shadow-xs ring-2 ring-[var(--brand-orange)]/25'
                                : 'border-slate-200 bg-[var(--bg-soft)] text-slate-600 hover:bg-slate-100'
                            }`}
                          >
                            {b}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* 3. Desired Launch Timeline */}
                    <div className="space-y-2.5">
                      <label className="block text-xs font-heading font-bold uppercase tracking-wider text-[var(--deep-navy)]">
                        3. Desired Launch Timeline
                      </label>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                        {timelineOptions.map((t) => (
                          <button
                            key={t}
                            type="button"
                            onClick={() => setFormData({ ...formData, timeline: t })}
                            className={`py-2.5 px-2 rounded-xl text-[11px] font-heading font-bold border transition-all text-center cursor-pointer ${
                              formData.timeline === t
                                ? 'border-[var(--primary-blue)] bg-[var(--primary-blue)]/10 text-[var(--primary-blue)] font-bold'
                                : 'border-slate-200 bg-[var(--bg-soft)] text-slate-600 hover:bg-slate-100'
                            }`}
                          >
                            {t}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* 4. Client & Business Contact Details */}
                    <div className="space-y-2.5 pt-2 border-t border-slate-100">
                      <label className="block text-xs font-heading font-bold uppercase tracking-wider text-[var(--deep-navy)]">
                        4. Your Contact Details
                      </label>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-[11px] font-heading font-bold text-slate-700 mb-1">Your Full Name *</label>
                          <input
                            type="text"
                            required
                            maxLength={80}
                            placeholder="e.g. Rahul Sharma"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[var(--primary-blue)] focus:ring-2 focus:ring-[var(--primary-blue)]/20 transition-all"
                          />
                        </div>

                        <div>
                          <label className="block text-[11px] font-heading font-bold text-slate-700 mb-1">Work Email Address *</label>
                          <input
                            type="email"
                            required
                            maxLength={100}
                            placeholder="name@company.com"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[var(--primary-blue)] focus:ring-2 focus:ring-[var(--primary-blue)]/20 transition-all"
                          />
                        </div>

                        <div>
                          <label className="block text-[11px] font-heading font-bold text-slate-700 mb-1">Phone / WhatsApp Number *</label>
                          <input
                            type="tel"
                            required
                            maxLength={20}
                            placeholder="+91 83035 34063"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[var(--primary-blue)] focus:ring-2 focus:ring-[var(--primary-blue)]/20 transition-all"
                          />
                        </div>

                        <div>
                          <label className="block text-[11px] font-heading font-bold text-slate-700 mb-1">Company / Brand Name</label>
                          <input
                            type="text"
                            maxLength={100}
                            placeholder="Your Business / Startup"
                            value={formData.company}
                            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[var(--primary-blue)] focus:ring-2 focus:ring-[var(--primary-blue)]/20 transition-all"
                          />
                        </div>
                      </div>
                    </div>

                    {/* 5. Project Goals & Vision */}
                    <div className="space-y-1.5">
                      <label className="block text-xs font-heading font-bold uppercase tracking-wider text-[var(--deep-navy)]">
                        5. Tell Us About Your Project Goals
                      </label>
                      <textarea
                        rows={3}
                        maxLength={1000}
                        placeholder="Give us a brief overview of your business, current bottlenecks, desired timeline, or reference websites..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[var(--primary-blue)] focus:ring-2 focus:ring-[var(--primary-blue)]/20 transition-all"
                      />
                    </div>

                    {/* Privacy & Guarantee note */}
                    <div className="flex items-center gap-2 text-xs text-slate-500 pt-1">
                      <ShieldCheck className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                      <span>100% Privacy Protected. Mutual Non-Disclosure Agreement (NDA) applies. Zero spam.</span>
                    </div>

                    {/* Submit Action Button */}
                    <div className="pt-2">
                      <button
                        type="submit"
                        className="btn-primary w-full py-4 min-h-[52px] rounded-full text-white font-heading font-extrabold text-base shadow-xl shadow-[var(--brand-orange)]/35 flex items-center justify-center gap-2 transition-all hover:scale-[1.01] active:scale-[0.99] cursor-pointer"
                      >
                        <span>Submit Project Specifications & Request Proposal</span>
                        <Send className="w-4 h-4" />
                      </button>
                    </div>

                  </form>
                )}

              </div>

            </div>

          </div>

        </div>
      </main>

      {/* ========================================================================= */}
      {/* 3. DEDICATED PAGE FOOTER                                                  */}
      {/* ========================================================================= */}
      <footer className="py-8 bg-[var(--deep-navy)] border-t border-white/10 text-xs text-slate-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Logo variant="dark" size="sm" />
            <span className="text-slate-500">|</span>
            <span>Official Client Proposal Portal</span>
          </div>

          <div className="flex items-center gap-4">
            <button 
              onClick={onBack}
              className="text-slate-300 hover:text-[var(--brand-orange)] font-semibold transition-colors cursor-pointer"
            >
              ← Back to Main Website
            </button>
            <span className="text-slate-600">•</span>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="text-slate-400 hover:text-white transition-colors cursor-pointer"
            >
              Back to Top ↑
            </button>
          </div>
        </div>
      </footer>

    </div>
  );
}

