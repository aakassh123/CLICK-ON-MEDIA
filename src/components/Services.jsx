import React from 'react';
import { 
  ArrowRight, 
  CheckCircle2, 
  Globe, 
  Code2, 
  Megaphone, 
  Search, 
  Palette, 
  Film, 
  Sparkles,
  TrendingUp,
  ShieldCheck,
  Zap,
  ExternalLink
} from 'lucide-react';

export default function Services({ onSelectService, onOpenQuote }) {
  // 6 Core Click On Media Services with Clear "Kya Kya Benefits Milega" Details
  const services = [
    {
      id: 'web-dev',
      number: '01',
      title: 'Website Development',
      badge: 'Web Architecture',
      tagline: 'High-converting, lightning-fast digital flagships.',
      description: 'We engineer custom React & Next.js websites built for speed, sub-second page loads, and seamless customer conversions.',
      accent: 'from-[var(--primary-blue)] to-[var(--deep-navy)]',
      borderGlow: 'hover:border-[var(--primary-blue)]/50',
      tagBg: 'bg-[var(--primary-blue)]/10 text-[var(--primary-blue)] border-[var(--primary-blue)]/20',
      icon: Globe,
      // "Kya Kya Benefits Milega" (Direct Business Benefits)
      benefits: [
        'Sub-0.6s Page Load Times (Zero bounce rate on mobile 4G/5G)',
        '0% OTA / Middleman Commission Leakage (Direct booking & sales)',
        'Mobile-First UX Precision with 100/100 Core Web Vitals score',
        'Headless CMS & Fast Cloud CDN for effortless content updates'
      ],
      metric: '⚡ 0.6s Avg Load Time • 100/100 Vitals',
      ctaText: 'Explore Web Development'
    },
    {
      id: 'software-dev',
      number: '02',
      title: 'Software & App Development',
      badge: 'Cloud & Mobile',
      tagline: 'Custom cloud software and mobile apps built to scale.',
      description: 'Tailor-made cloud software, cross-platform iOS & Android mobile apps, and workflow automation built for effortless business scale.',
      accent: 'from-[var(--brand-orange)] to-[var(--amber)]',
      borderGlow: 'hover:border-[var(--brand-orange)]/50',
      tagBg: 'bg-[var(--brand-orange)]/10 text-[var(--brand-orange)] border-[var(--brand-orange)]/20',
      icon: Code2,
      // "Kya Kya Benefits Milega"
      benefits: [
        'Single Codebase iOS & Android Apps (Cut development costs by 50%)',
        'Automated Business Workflows (Save 20+ manual team hours weekly)',
        '99.98% High Uptime Cloud Architecture (Zero crashes during traffic peaks)',
        'Bank-Grade Security with end-to-end encrypted REST/GraphQL APIs'
      ],
      metric: '🛡️ 99.98% High Uptime • 18ms Latency',
      ctaText: 'Explore App & Software'
    },
    {
      id: 'marketing',
      number: '03',
      title: 'Digital Marketing & Ads',
      badge: 'Growth Engine',
      tagline: 'Data-driven ad funnels that generate verified buyers.',
      description: 'Precision Meta (FB/IG) and Google Ads campaigns engineered to drive high-intent leads and profitable direct revenue.',
      accent: 'from-[var(--primary-blue)] to-[var(--brand-orange)]',
      borderGlow: 'hover:border-[var(--brand-orange)]/50',
      tagBg: 'bg-[var(--primary-blue)]/10 text-[var(--primary-blue)] border-[var(--primary-blue)]/20',
      icon: Megaphone,
      // "Kya Kya Benefits Milega"
      benefits: [
        '3.8x+ Average ROAS (Turn every ₹1 in ad spend into profitable revenue)',
        'Lowest Customer Acquisition Cost (Zero budget wasted on bot clicks)',
        'Hyper-Local & Pan-India Funnels targeting active ready-to-buy customers',
        '100% Transparent Attribution Dashboard with real-time verified lead reports'
      ],
      metric: '📈 3.8x+ Avg ROAS • +284% Lead Surge',
      ctaText: 'Explore Digital Marketing'
    },
    {
      id: 'seo',
      number: '04',
      title: 'SEO & Organic Dominance',
      badge: 'Organic Search',
      tagline: 'Rank #1 on Google and capture continuous inbound calls.',
      description: 'Comprehensive 100+ point technical SEO, semantic keyword clustering, and map dominance that drive compounding free organic customers.',
      accent: 'from-[var(--cyan-accent)] to-[var(--deep-navy)]',
      borderGlow: 'hover:border-[var(--cyan-accent)]/50',
      tagBg: 'bg-[var(--primary-blue)]/10 text-[var(--primary-blue)] border-[var(--primary-blue)]/20',
      icon: Search,
      // "Kya Kya Benefits Milega"
      benefits: [
        '#1 Google Map Pack Domination (High-intent buyer calls directly to you)',
        '100+ Point Technical SEO Optimization (Outrank established competitors)',
        'Compounding Free Organic Traffic (Predictable leads without monthly ad spend)',
        'High Domain Authority Building with authoritative white-hat backlinks'
      ],
      metric: '🏆 #1 Local Rankings in UP • 85+ Keywords',
      ctaText: 'Explore SEO & Organic'
    },
    {
      id: 'branding',
      number: '05',
      title: 'Branding & Creative Design',
      badge: 'Visual Identity',
      tagline: 'An iconic brand personality that commands premium pricing.',
      description: 'We define compelling brand identities, iconic 3D/2D logo systems, and marketing collateral that make your business instantly recognizable.',
      accent: 'from-[var(--brand-orange)] to-[var(--amber)]',
      borderGlow: 'hover:border-[var(--brand-orange)]/50',
      tagBg: 'bg-[var(--brand-orange)]/10 text-[var(--brand-orange)] border-[var(--brand-orange)]/20',
      icon: Palette,
      // "Kya Kya Benefits Milega"
      benefits: [
        'Iconic 3D & 2D Logo Suite (Instant brand authority and customer trust)',
        'Complete Brand Guidelines & Color Tokens (100% consistency across media)',
        'High-Converting Pitch Decks & Corporate Collateral for enterprise deals',
        '100% Original, Trademark-Ready & Copyright-Protected Design Assets'
      ],
      metric: '✨ Trademark-Ready • 100% Unique Design',
      ctaText: 'Explore Brand Identity'
    },
    {
      id: 'content',
      number: '06',
      title: 'Content Creation & Viral Reels',
      badge: 'Viral Storytelling',
      tagline: 'High-retention 9:16 vertical reels that captivate feeds.',
      description: 'Engaging vertical viral reels, YouTube shorts, commercials, and high-converting copy that dominate feeds and convert viewers into fans.',
      accent: 'from-[var(--primary-blue)] to-[var(--cyan-accent)]',
      borderGlow: 'hover:border-[var(--primary-blue)]/50',
      tagBg: 'bg-[var(--primary-blue)]/10 text-[var(--primary-blue)] border-[var(--primary-blue)]/20',
      icon: Film,
      // "Kya Kya Benefits Milega"
      benefits: [
        'Viral 9:16 Reels & YouTube Shorts (Build massive follower growth and authority)',
        '10M+ Video Views Delivered (Proven hook writing and retention editing)',
        'Psychology-Driven Storytelling Scripts that convert viewers into paying clients',
        'Studio-Grade 4K Post-Production (Pro color grading, sound design & motion VFX)'
      ],
      metric: '🔥 10M+ Video Views • 85%+ Retention',
      ctaText: 'Explore Video Production'
    }
  ];

  return (
    <section 
      id="services" 
      className="relative bg-[var(--bg-soft)] text-[var(--text-dark)] py-16 sm:py-20 lg:py-24 border-y border-[var(--primary-blue)]/8 overflow-hidden"
    >
      {/* Background Subtle Ambient Lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-[var(--primary-blue)]/5 rounded-full blur-[150px] pointer-events-none z-0" />
      <div className="absolute bottom-1/3 right-10 w-[450px] h-[350px] bg-[var(--brand-orange)]/5 rounded-full blur-[130px] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ===================================================================== */}
        {/* 1. IMPORTANT SECTION HEADINGS (CLEAN, BOLD, CLEAR)                     */}
        {/* ===================================================================== */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12 sm:mb-16">
          
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
            A complete suite of digital services designed to build your brand, expand your reach, and deliver measurable revenue growth.
          </p>

          {/* Quick Value Highlights */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs font-semibold text-slate-600">
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

        {/* ===================================================================== */}
        {/* 2. SIMPLE, RESPONSIVE CARDS GRID SHOWING CLIENT BENEFITS              */}
        {/* ===================================================================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              onClick={() => onSelectService(service.id)}
              className={`relative rounded-3xl bg-white border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 cursor-pointer flex flex-col justify-between overflow-hidden group ${service.borderGlow}`}
            >
              {/* Top Accent Gradient Bar */}
              <div className={`h-1.5 w-full bg-gradient-to-r ${service.accent}`} />

              <div className="p-6 sm:p-7 space-y-4">
                
                {/* Card Top: Number + Badge + Icon */}
                <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                  <div className="flex items-center gap-2.5">
                    <span className="w-7 h-7 rounded-lg bg-slate-100 text-[var(--deep-navy)] font-mono font-bold text-xs flex items-center justify-center group-hover:bg-[var(--brand-orange)] group-hover:text-white transition-colors">
                      {service.number}
                    </span>
                    <span className="text-[11px] font-bold text-[var(--text-muted)] uppercase tracking-wider font-heading">
                      {service.badge}
                    </span>
                  </div>

                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-tr ${service.accent} text-white flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform`}>
                    {React.createElement(service.icon, { className: "w-5 h-5" })}
                  </div>
                </div>

                {/* Title & Tagline */}
                <div className="space-y-1">
                  <h3 className="text-xl sm:text-2xl font-extrabold text-[var(--deep-navy)] group-hover:text-[var(--primary-blue)] transition-colors font-heading leading-snug">
                    {service.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {service.description}
                  </p>
                </div>

                {/* "Kya Kya Benefits Milega" Section */}
                <div className="pt-2 space-y-2.5">
                  <div className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-[var(--brand-orange)] font-heading">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>What You Get (Key Benefits):</span>
                  </div>

                  <ul className="space-y-2">
                    {service.benefits.map((benefit, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2.5 text-xs text-slate-700 leading-relaxed">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                        <span className="font-medium">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Measurable Metric Pill */}
                <div className="pt-2">
                  <div className="px-3.5 py-2 rounded-xl bg-slate-50 border border-slate-200/80 text-[11px] font-bold text-[var(--deep-navy)] font-heading">
                    {service.metric}
                  </div>
                </div>

              </div>

              {/* Card Footer Action: Opens Dedicated Service Detail Page */}
              <div className="px-6 sm:px-7 py-4 bg-slate-50/70 border-t border-slate-100 flex items-center justify-between group-hover:bg-orange-50/40 transition-colors">
                <span className="text-xs font-bold text-[var(--primary-blue)] group-hover:text-[var(--brand-orange)] transition-colors flex items-center gap-1 font-heading">
                  {service.ctaText}
                </span>
                <div className="w-8 h-8 rounded-full bg-white border border-slate-200 text-slate-700 flex items-center justify-center group-hover:bg-[var(--brand-orange)] group-hover:text-white group-hover:border-[var(--brand-orange)] transition-all shadow-xs">
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* ===================================================================== */}
        {/* 3. BOTTOM CALL TO ACTION BANNER                                       */}
        {/* ===================================================================== */}
        <div className="mt-12 sm:mt-16 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-lg sm:text-xl font-bold text-[var(--deep-navy)] font-heading">
              Need a Custom Solution Combining Multiple Services?
            </h4>
            <p className="text-xs sm:text-sm text-[var(--text-muted)] font-normal">
              Tell us your targets and get a personalized growth blueprint engineered for your business within 24 hours.
            </p>
          </div>

          <button
            onClick={() => {
              if (onOpenQuote) onOpenQuote();
            }}
            className="btn-primary !py-3 !px-7 text-xs sm:text-sm font-heading font-bold shadow-md flex-shrink-0 cursor-pointer w-full md:w-auto justify-center"
          >
            <span>Get a Free Custom Proposal</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>

    </section>
  );
}
