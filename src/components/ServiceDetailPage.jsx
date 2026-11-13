import React, { useEffect } from 'react';
import { 
  ArrowLeft, 
  ArrowRight, 
  CheckCircle2, 
  Phone, 
  Sparkles, 
  Clock, 
  CreditCard, 
  ShieldCheck, 
  Zap, 
  TrendingUp, 
  Globe, 
  Code2, 
  Megaphone, 
  Search, 
  Palette, 
  Film,
  Layers,
  ChevronRight
} from 'lucide-react';
import Logo from './Logo';

export default function ServiceDetailPage({ 
  serviceId, 
  onBack, 
  onSelectService, 
  onOpenQuoteWithService 
}) {
  // Scroll to top on mount or when serviceId changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [serviceId]);

  const serviceData = {
    'web-dev': {
      id: 'web-dev',
      number: '01',
      title: 'Website Development',
      badge: 'High Performance & Conversion',
      category: 'Web Architecture & Modern SaaS',
      icon: Globe,
      color: 'text-[var(--primary-blue)]',
      accentBg: 'bg-[var(--primary-blue)]/10',
      tagline: 'Modern, responsive and sub-second performance digital flagships.',
      overview: 'Your website is the single most critical asset of your digital brand. At Click On Media, we do not build generic template sites — we engineer lightning-fast, high-converting digital flagships. Built on modern web architecture with sub-second load times, mobile-first precision, and flawless UX design, our websites rank higher on Google, capture attention instantly, and systematically convert visitors into qualified, paying customers.',
      metrics: '0.6s Avg Load Time',
      metricDetail: '100/100 Core Web Vitals',
      timeline: '2 to 5 Weeks',
      startingPrice: 'Tailored for scale',
      deliverables: [
        {
          title: 'Custom UX/UI Responsive Architecture',
          desc: 'Bespoke layouts tailored specifically to your customer journey, optimized across all mobile, tablet, and 4K desktop screens.'
        },
        {
          title: 'Headless CMS & Scalable Backends',
          desc: 'Flexible content management systems (Sanity, Strapi, or headless WordPress) that allow your team to publish in seconds.'
        },
        {
          title: 'Sub-Second Speed & 95+ Core Web Vitals',
          desc: 'Extreme asset optimization, image compression, SSR edge-caching, and code-splitting for instant page transitions.'
        },
        {
          title: 'Built-in Technical SEO & Rich Schemas',
          desc: 'JSON-LD structured data, dynamic OpenGraph meta tags, canonical tags, and auto-generated XML sitemaps for Google indexation.'
        },
        {
          title: 'Full Conversion Tracking & GA4 Funnels',
          desc: 'Custom Google Tag Manager setup tracking button clicks, lead form submissions, phone calls, and revenue attribution.'
        },
        {
          title: 'Bank-Grade Security & Zero Downtime Hosting',
          desc: 'Free SSL certificates, DDoS mitigation, automated daily backups, and high-availability cloud deployments.'
        }
      ],
      process: [
        { step: '01', title: 'UX Discovery & Wireframing', desc: 'Analyzing competitors, user intent, and mapping high-conversion wireframes.' },
        { step: '02', title: 'High-Fidelity UI Design', desc: 'Crafting pixel-perfect design systems, micro-interactions, and visual assets.' },
        { step: '03', title: 'Agile Clean-Code Development', desc: 'Building with React/Next.js, responsive Tailwind CSS, and headless API integrations.' },
        { step: '04', title: 'QA Audit & Global Deployment', desc: 'Rigorous cross-device testing, 100-point performance audit, and production launch.' }
      ],
      technologies: ['React', 'Next.js', 'Tailwind CSS', 'TypeScript', 'Node.js', 'WordPress', 'Shopify', 'Vercel / Cloudflare'],
      whyChoose: [
        'Dedicated senior web engineering team with zero outsourcing',
        'Guaranteed 90+ Google PageSpeed score on both mobile and desktop',
        '100% intellectual property ownership and clean source code'
      ]
    },
    'software-dev': {
      id: 'software-dev',
      number: '02',
      title: 'Software & App Development',
      badge: 'Scalable Enterprise Solutions',
      category: 'Cloud Engineering & Mobile Apps',
      icon: Code2,
      color: 'text-[var(--brand-orange)]',
      accentBg: 'bg-[var(--brand-orange)]/10',
      tagline: 'Custom software, SaaS platforms, and high-performance mobile apps.',
      overview: 'From internal automation systems and multi-tenant SaaS platforms to native and cross-platform mobile apps, Click On Media designs and engineers robust software solutions built to scale effortlessly. We prioritize clean modular architecture, fault-tolerant cloud infrastructure, bank-grade data security, and intuitive user experiences that turn complex workflows into seamless productivity.',
      metrics: '99.98% High Uptime',
      metricDetail: '18ms Global Edge Latency',
      timeline: '4 to 12 Weeks',
      startingPrice: 'Custom Sprint Architecture',
      deliverables: [
        {
          title: 'iOS & Android Cross-Platform Apps',
          desc: 'Unified mobile applications built with Flutter or React Native that deliver 60fps native performance on both app stores.'
        },
        {
          title: 'Full-Stack Multi-Tenant SaaS Platforms',
          desc: 'Production-ready software architecture with subscription billing (Stripe/Razorpay), user authentication, and admin dashboards.'
        },
        {
          title: 'Microservices & Custom REST/GraphQL APIs',
          desc: 'Ultra-low latency backend services designed to process high volumes of concurrent requests without bottlenecks.'
        },
        {
          title: 'Automated CI/CD Deployment Pipelines',
          desc: 'Automated GitHub Actions workflows with zero-downtime rolling deployments, automated test suites, and rollback protection.'
        },
        {
          title: 'Relational & NoSQL Database Architecture',
          desc: 'Optimized PostgreSQL, MongoDB, or Redis databases structured for maximum query speed and data consistency.'
        },
        {
          title: 'Enterprise Security & Role-Based Auth (RBAC)',
          desc: 'OAuth 2.0, JWT, MFA, end-to-end data encryption, and GDPR/SOC-2 compliant data privacy safeguards.'
        }
      ],
      process: [
        { step: '01', title: 'System Architecture Blueprint', desc: 'Defining data schemas, API contracts, entity relationships, and cloud infrastructure.' },
        { step: '02', title: 'Interactive Prototype & Sprint Plan', desc: 'Interactive clickable prototypes in Figma mapped to 2-week agile sprint milestones.' },
        { step: '03', title: 'Full-Stack Sprint Engineering', desc: 'Continuous testing, automated integration, and daily transparent code commits.' },
        { step: '04', title: 'Load Testing & Store Publishing', desc: 'Handling App Store & Google Play submissions, load-testing, and SLA monitoring.' }
      ],
      technologies: ['Flutter', 'React Native', 'Node.js', 'Python', 'PostgreSQL', 'Docker', 'AWS / Google Cloud', 'Redis'],
      whyChoose: [
        'Modular, clean-architecture codebase that is easily maintainable by your in-house team',
        'Scalable cloud infrastructure designed to handle 10x traffic surges effortlessly',
        'Continuous sprint demos and transparent milestone tracking throughout development'
      ]
    },
    'marketing': {
      id: 'marketing',
      number: '03',
      title: 'Digital Marketing & Ads',
      badge: 'ROI & Data Driven Growth',
      category: 'Performance Funnels & Paid Scale',
      icon: Megaphone,
      color: 'text-[var(--primary-blue)]',
      accentBg: 'bg-[var(--primary-blue)]/10',
      tagline: 'High-ROAS Meta & Google ad funnels that maximize your customer acquisition.',
      overview: 'Clicks without conversions are a waste of marketing budget. At Click On Media, we build data-driven performance marketing engines designed to maximize your Return on Ad Spend (ROAS). We combine deep audience segmentation, compelling creative testing, and multi-touch attribution modeling across Google Ads, Meta Ads (Facebook & Instagram), and LinkedIn to systematically scale your revenue.',
      metrics: '3.8x+ Average ROAS',
      metricDetail: '+284% Scaling Milestone',
      timeline: 'Monthly Rolling Growth Sprint',
      startingPrice: 'Performance & Retainer',
      deliverables: [
        {
          title: 'Google Search & Performance Max Funnels',
          desc: 'High-intent keyword bidding, negative match optimization, and smart bidding algorithms that capture buyers actively searching.'
        },
        {
          title: 'Meta (Facebook & Instagram) Video Ad Testing',
          desc: 'Iterative creative testing with UGC video ads, carousels, and lookalike audiences that unlock scalable customer acquisition.'
        },
        {
          title: 'B2B LinkedIn Account-Based Marketing',
          desc: 'Laser-targeted ads reaching C-level decision-makers, verified by industry, company size, and specific job seniority.'
        },
        {
          title: 'Dedicated High-Converting Landing Pages',
          desc: 'Custom conversion-optimized landing pages engineered to convert up to 3x more visitors than generic corporate homepages.'
        },
        {
          title: 'Dynamic Retargeting & Omnichannel Sequences',
          desc: 'Segmented remarketing funnels that re-engage abandoned cart and interested prospects until they convert into paying customers.'
        },
        {
          title: 'Weekly Transparent Attribution Reports',
          desc: 'Live Looker Studio executive dashboards tracking exact Customer Acquisition Cost (CAC), ROAS, and net profit per campaign.'
        }
      ],
      process: [
        { step: '01', title: 'Market & Competitor Ad Audit', desc: 'Deep-diving into winning competitor ad angles, audience overlap, and historical CPA data.' },
        { step: '02', title: 'Funnel & Creative Production', desc: 'Producing thumb-stopping hooks, high-converting copy, and dedicated landing pages.' },
        { step: '03', title: 'Targeted Testing & Data Gathering', desc: 'Testing 20+ ad combinations across micro-budgets to identify scalable winners.' },
        { step: '04', title: 'Aggressive Budget Scaling', desc: 'Pouring budget into verified winning creatives while aggressively driving down acquisition cost.' }
      ],
      technologies: ['Google Ads', 'Meta Ads Manager', 'Google Analytics 4', 'Looker Studio', 'HubSpot', 'Google Tag Manager'],
      whyChoose: [
        'Zero vanity metrics — we obsess over actual cost-per-lead, cost-per-acquisition, and net revenue',
        'Continuous rapid-fire creative iteration: weekly new video hooks and ad copies',
        '100% transparent ad accounts: you own your accounts and billing directly'
      ]
    },
    'seo': {
      id: 'seo',
      number: '04',
      title: 'SEO & Performance',
      badge: 'Compounding Organic Dominance',
      category: 'Technical Search & Semantic Authority',
      icon: Search,
      color: 'text-[var(--brand-orange)]',
      accentBg: 'bg-[var(--brand-orange)]/10',
      tagline: 'Claim page-one Google rankings that deliver high-intent organic customers.',
      overview: 'Organic search delivers the highest lifetime value customers in business. Our technical and semantic SEO strategies ensure your brand captures page-one rankings for the highest-intent commercial keywords in your industry. By fixing technical debt, building authoritative backlink profiles, and structuring topical clusters, Click On Media creates a compounding organic lead pipeline that continues to grow month after month.',
      metrics: '#1 Rankings in Key Sectors',
      metricDetail: '85+ Top Position Keywords',
      timeline: '3 to 6 Month Ramp Up',
      startingPrice: 'Retainer & Sprint Packages',
      deliverables: [
        {
          title: '100+ Point Technical SEO Deep Audit',
          desc: 'Identifying crawl errors, index bloat, broken redirects, slow rendering scripts, and Core Web Vital bottlenecks.'
        },
        {
          title: 'High-Intent Commercial Keyword Mapping',
          desc: 'Uncovering the exact transactional search queries your target customers use when they are ready to buy.'
        },
        {
          title: 'Topical Authority & Content Clusters',
          desc: 'Publishing comprehensive pillar pages and interlinked cluster articles that establish undisputed niche authority.'
        },
        {
          title: 'On-Page Semantic & Schema Optimization',
          desc: 'Implementing Schema.org JSON-LD microdata, optimizing title tags, header hierarchies, and rich snippets for CTR.'
        },
        {
          title: 'High-Authority White-Hat Backlink Building',
          desc: 'Editorial outreach, digital PR, and verified high-domain-authority links that sustainably boost domain trust.'
        },
        {
          title: 'Local Google Business Profile Domination',
          desc: 'Optimizing local map pack rankings, citation consistency, and geo-targeted landing pages for local market capture.'
        }
      ],
      process: [
        { step: '01', title: 'Comprehensive Technical Audit', desc: 'Uncovering indexation flaws, crawl inefficiencies, and algorithmic vulnerabilities.' },
        { step: '02', title: 'Keyword Clustering & Gap Analysis', desc: 'Mapping high-value keywords against your competitors to find fast-ranking opportunities.' },
        { step: '03', title: 'Content & Structural Optimization', desc: 'Upgrading existing pages and rolling out authoritative topical content clusters.' },
        { step: '04', title: 'High-Authority Link Building', desc: 'Executing outreach to top-tier publications to build unbreakable domain strength.' }
      ],
      technologies: ['Ahrefs', 'Semrush', 'Google Search Console', 'Screaming Frog', 'Schema.org', 'SurferSEO'],
      whyChoose: [
        'Strictly white-hat methodologies compliant with Google helpful content updates',
        'Compounding organic traffic that reduces your long-term dependency on paid advertising',
        'Custom monthly rank-tracking and organic conversion attribution dashboards'
      ]
    },
    'branding': {
      id: 'branding',
      number: '05',
      title: 'Branding & Creative Design',
      badge: 'Memorable Brand Identities',
      category: 'Visual Systems & 3D Brand Personality',
      icon: Palette,
      color: 'text-[var(--primary-blue)]',
      accentBg: 'bg-[var(--primary-blue)]/10',
      tagline: 'Distinctive brand identities, 3D design tokens, and corporate collateral.',
      overview: 'In a crowded digital world, perception is reality. A premium, distinct brand identity instantly builds trust, commands higher pricing, and makes your company unforgettable. Click On Media crafts complete visual identities — from iconic 3D logo systems and expressive typography palettes to corporate pitch decks and comprehensive brand guidelines that unite your digital presence across every customer touchpoint.',
      metrics: '100% Vector & Trademark Ready',
      metricDetail: 'Complete Design System',
      timeline: '2 to 4 Weeks',
      startingPrice: 'Fixed Scope Milestone',
      deliverables: [
        {
          title: 'Primary, Secondary & Responsive Logo Systems',
          desc: 'Versatile vector and 3D lockups engineered for application icons, favicons, billboards, and mobile interfaces.'
        },
        {
          title: 'Comprehensive Brand Architecture Guide (PDF)',
          desc: 'Clear rules for typography hierarchy, color codes (HEX, RGB, CMYK, Pantone), spacing rules, and usage dos & don’ts.'
        },
        {
          title: 'Custom Color Palettes & Design Tokens',
          desc: 'Engineered contrast ratios meeting WCAG AA accessibility standards, complete with primary, secondary, and accent shades.'
        },
        {
          title: 'Corporate Stationery & Marketing Collateral',
          desc: 'Premium business card layouts, letterheads, branded invoice templates, and corporate merchandise mockups.'
        },
        {
          title: 'Investor Pitch Decks & Slide Systems',
          desc: 'High-converting presentation decks designed in Figma and PowerPoint that leave a lasting impression on investors.'
        },
        {
          title: 'Social Media Kit & Vector Icon Library',
          desc: 'High-resolution avatars, header banners, highlight covers, and cohesive vector icon sets for social media.'
        }
      ],
      process: [
        { step: '01', title: 'Brand Discovery & Archetype Audit', desc: 'Defining your company mission, market positioning, target emotional resonance, and personality.' },
        { step: '02', title: 'Concept Sketches & Explorations', desc: 'Presenting 3 distinct visual directions with logo iterations and typography palettes.' },
        { step: '03', title: 'Refinement & Real-World Mockups', desc: 'Testing chosen directions on digital screens, merchandise, and print media.' },
        { step: '04', title: 'Asset Delivery & Brand Book', desc: 'Packaging all raw source files (AI, SVG, PNG, PDF) with the master guideline manual.' }
      ],
      technologies: ['Figma', 'Adobe Illustrator', 'Photoshop', 'After Effects', 'InDesign', 'Blender 3D'],
      whyChoose: [
        'Timeless, trademark-ready identity systems crafted by senior visual brand designers',
        'Complete design token handoff ready for immediate engineering implementation',
        'Full commercial usage rights and high-resolution vector source files included'
      ]
    },
    'content': {
      id: 'content',
      number: '06',
      title: 'Content & Viral Reels',
      badge: 'Storytelling & High Engagement',
      category: 'Short-Form Video & Narrative Production',
      icon: Film,
      color: 'text-[var(--brand-orange)]',
      accentBg: 'bg-[var(--brand-orange)]/10',
      tagline: 'Thumb-stopping 9:16 reels, shorts, and cinematic brand video production.',
      overview: 'Attention is the ultimate currency of the modern internet. At Click On Media, we script, shoot, edit, and optimize viral short-form video content designed to halt scrolling, trigger emotional engagement, and build massive brand communities. From viral Instagram Reels and YouTube Shorts to high-end commercial explainer videos, our content studio creates high-retention stories that turn passive viewers into passionate brand advocates.',
      metrics: '2.4M+ Video Views Generated',
      metricDetail: '85%+ 3-Second Retention',
      timeline: 'Weekly & Monthly Retainers',
      startingPrice: 'Monthly Content Retainer',
      deliverables: [
        {
          title: 'High-Retention 9:16 Viral Reels & Shorts',
          desc: 'Scripted hooks, fast-paced cuts, sound design, and animated captions engineered for Instagram, TikTok, and YouTube.'
        },
        {
          title: 'Cinematic Brand Commercials & Founder Stories',
          desc: 'High-production 4K brand films that showcase your mission, culture, and core differentiators with cinematic polish.'
        },
        {
          title: '3D Product Animations & Motion Graphics',
          desc: 'Engaging animated product demos and explainer graphics that simplify complex value propositions in seconds.'
        },
        {
          title: 'Conversion-Focused Ad Creatives',
          desc: 'Multi-hook video variations tested for paid ads to unlock scalable performance across social media platforms.'
        },
        {
          title: 'Monthly Content Editorial Calendar',
          desc: 'Strategic scheduling aligned with trending audio, industry hashtags, and optimal publishing windows.'
        },
        {
          title: 'Full Raw Asset Archive & Formats',
          desc: 'Delivered in all requisite formats (vertical 9:16, square 1:1, landscape 16:9) ready for cross-channel distribution.'
        }
      ],
      process: [
        { step: '01', title: 'Hook Research & Trend Analysis', desc: 'Identifying trending audio, viral industry formats, and high-retention story structures.' },
        { step: '02', title: 'Scriptwriting & Storyboarding', desc: 'Writing punchy 15-to-60 second scripts with psychological hooks and strong calls to action.' },
        { step: '03', title: 'Production, VFX & Sound Design', desc: 'Professional color grading, custom sound effects, kinetic typography, and motion graphics.' },
        { step: '04', title: 'Publishing Strategy & Analytics', desc: 'Reviewing view duration, completion rates, and shares to continually refine future content.' }
      ],
      technologies: ['Premiere Pro', 'DaVinci Resolve', 'After Effects', 'Cinema 4D', 'Audition', 'CapCut Pro'],
      whyChoose: [
        'Dedicated video editors with deep expertise in short-form social media retention algorithms',
        'End-to-end management: from ideation and scripting to final delivery',
        'High-converting video assets proven to lower customer acquisition costs in paid advertising'
      ]
    }
  };

  const current = serviceData[serviceId] || serviceData['web-dev'];
  const CurrentIcon = current.icon;

  const allServicesList = [
    { id: 'web-dev', title: 'Website Dev', number: '01', icon: Globe },
    { id: 'software-dev', title: 'Software & App', number: '02', icon: Code2 },
    { id: 'marketing', title: 'Digital Marketing', number: '03', icon: Megaphone },
    { id: 'seo', title: 'SEO & Performance', number: '04', icon: Search },
    { id: 'branding', title: 'Branding & Design', number: '05', icon: Palette },
    { id: 'content', title: 'Viral Reels & Video', number: '06', icon: Film },
  ];

  return (
    <div className="min-h-screen bg-[var(--deep-navy)] text-white font-sans selection:bg-[var(--brand-orange)] selection:text-white relative">
      
      {/* ========================================================================= */}
      {/* 1. TOP STICKY HEADER & BREADCRUMB BAR                                     */}
      {/* ========================================================================= */}
      <header className="sticky top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-xl border-b border-slate-200/90 shadow-sm py-2.5 sm:py-3 transition-all">
        {/* Top brand line */}
        <div className="absolute top-0 inset-x-0 h-[2.5px] bg-gradient-to-r from-[var(--cyan-accent)] via-[var(--primary-blue)] to-[var(--brand-orange)] pointer-events-none opacity-90" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Left: Brand Logo & Back Action */}
          <div className="flex items-center gap-3 sm:gap-4">
            <button
              onClick={onBack}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-100 hover:bg-slate-200 border border-slate-200 text-slate-800 text-xs font-bold transition-all group cursor-pointer shadow-xs"
              aria-label="Back to all services overview"
            >
              <ArrowLeft className="w-3.5 h-3.5 text-[var(--brand-orange)] group-hover:-translate-x-1 transition-transform" />
              <span>Back to Services</span>
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
            <button onClick={onBack} className="hover:text-[var(--primary-blue)] transition-colors">Services</button>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-[var(--deep-navy)] font-bold">{current.title}</span>
          </div>

          {/* Right Action CTA */}
          <div className="flex items-center gap-2.5 sm:gap-3">
            <a 
              href="tel:+919876543210" 
              className="hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-slate-800 text-xs font-bold hover:bg-slate-200 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[var(--brand-orange)]" />
              <span className="font-mono">+91 98765 43210</span>
            </a>

            <button
              onClick={() => onOpenQuoteWithService(current.title)}
              className="btn-primary text-xs !py-2 !px-4 sm:!px-5 shadow-md font-heading font-bold flex items-center gap-1.5"
            >
              <span>Get Free Quote</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>
      </header>

      {/* ========================================================================= */}
      {/* 2. DEDICATED HERO BANNER FOR THE SERVICE                                  */}
      {/* ========================================================================= */}
      <section className="relative pt-12 pb-16 md:pt-16 md:pb-24 overflow-hidden bg-[var(--deep-navy)] border-b border-white/10">
        
        {/* Ambient Brand Glow Orbs */}
        <div className="absolute top-10 left-1/4 w-96 h-96 bg-[var(--cyan-accent)]/20 rounded-full blur-[140px] pointer-events-none z-0 animate-pulse-glow" />
        <div className="absolute top-20 right-10 w-96 h-96 bg-[var(--brand-orange)]/18 rounded-full blur-[140px] pointer-events-none z-0" />
        
        {/* Tech Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,200,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,200,255,0.06)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none z-0" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Category Pill with Glowing Beacon */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs font-heading font-bold tracking-wider uppercase mb-5 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-[var(--cyan-accent)] animate-ping" />
            <span className="text-[var(--cyan-accent)]">{current.category}</span>
            <span className="text-white/40">•</span>
            <span className="text-slate-300">Service {current.number} of 06</span>
          </div>

          {/* Big H1 Title with Brand Accent */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-white/15">
            <div className="max-w-3xl space-y-3">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold tracking-tight text-white leading-[1.1]">
                {current.title}
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-slate-300 font-normal leading-relaxed">
                {current.tagline}
              </p>
            </div>

            {/* Quick Action Box */}
            <div className="flex flex-col sm:flex-row md:flex-col gap-3 min-w-[240px]">
              <button
                onClick={() => onOpenQuoteWithService(current.title)}
                className="btn-primary w-full text-center py-3.5 px-6 font-heading font-bold shadow-xl shadow-[var(--brand-orange)]/30 flex items-center justify-center gap-2 group"
              >
                <span>Request Custom Proposal</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
              
              <button
                onClick={onBack}
                className="btn-secondary w-full text-center py-3 px-6 font-bold flex items-center justify-center gap-2"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Explore All Services</span>
              </button>
            </div>
          </div>

          {/* Quick Metrics & Specs Grid (4 Cards) */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 pt-8">
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md space-y-1">
              <div className="flex items-center gap-2 text-xs font-mono text-[var(--cyan-accent)] font-semibold">
                <Clock className="w-3.5 h-3.5" />
                <span>TIMELINE</span>
              </div>
              <div className="text-lg sm:text-xl font-heading font-bold text-white">{current.timeline}</div>
              <div className="text-[11px] text-slate-400">Rapid deployment sprints</div>
            </div>

            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md space-y-1">
              <div className="flex items-center gap-2 text-xs font-mono text-[var(--brand-orange)] font-semibold">
                <CreditCard className="w-3.5 h-3.5" />
                <span>PRICING MODEL</span>
              </div>
              <div className="text-lg sm:text-xl font-heading font-bold text-white">{current.startingPrice}</div>
              <div className="text-[11px] text-slate-400">Milestone & ROI-based</div>
            </div>

            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md space-y-1">
              <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 font-semibold">
                <TrendingUp className="w-3.5 h-3.5" />
                <span>BENCHMARK</span>
              </div>
              <div className="text-lg sm:text-xl font-heading font-bold text-white">{current.metrics}</div>
              <div className="text-[11px] text-slate-400">{current.metricDetail}</div>
            </div>

            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md space-y-1">
              <div className="flex items-center gap-2 text-xs font-mono text-indigo-400 font-semibold">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>GUARANTEE</span>
              </div>
              <div className="text-lg sm:text-xl font-heading font-bold text-white">100% IP Ownership</div>
              <div className="text-[11px] text-slate-400">Zero vendor lock-in</div>
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. IN-DEPTH NARRATIVE & OVERVIEW SECTION                                  */}
      {/* ========================================================================= */}
      <section className="py-16 md:py-24 bg-white text-[var(--text-dark)] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left 7 Columns: Deep Strategic Narrative */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--primary-blue)]/10 text-[var(--primary-blue)] font-bold text-xs font-heading">
                <Sparkles className="w-3.5 h-3.5 text-[var(--brand-orange)]" />
                <span>THE CLICK ON MEDIA ADVANTAGE</span>
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-extrabold text-[var(--deep-navy)] tracking-tight leading-tight">
                Engineering Measurable Scale in {current.title}
              </h2>

              <p className="text-base sm:text-lg text-[var(--text-dark)] leading-relaxed font-normal">
                {current.overview}
              </p>

              <div className="space-y-4 pt-2">
                <h3 className="text-sm font-heading font-bold uppercase tracking-wider text-[var(--deep-navy)]">
                  Why Leading Brands Choose Click On Media:
                </h3>
                
                <div className="space-y-3">
                  {current.whyChoose.map((point, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-3.5 rounded-xl bg-[var(--bg-soft)] border border-slate-200">
                      <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <CheckCircle2 className="w-4 h-4" />
                      </div>
                      <span className="text-sm font-semibold text-slate-800">{point}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Right 5 Columns: Technologies & Commitment Card */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Tech Stack Card */}
              <div className="rounded-3xl p-6 sm:p-8 bg-[var(--deep-navy)] text-white shadow-xl border border-[var(--cyan-accent)]/20 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-48 h-48 bg-[var(--cyan-accent)]/15 rounded-full blur-3xl pointer-events-none" />
                
                <div className="relative z-10 space-y-5">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-[var(--brand-orange)]">
                      <Zap className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-lg font-heading font-bold text-white">Technologies & Tooling</h4>
                      <p className="text-xs text-slate-300">Industry-leading modern stack</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {current.technologies.map((tech, idx) => (
                      <span 
                        key={idx} 
                        className="px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-white text-xs font-semibold hover:border-[var(--brand-orange)] transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="pt-4 border-t border-white/15">
                    <button
                      onClick={() => onOpenQuoteWithService(current.title)}
                      className="btn-primary w-full py-3.5 text-center text-xs sm:text-sm font-heading font-bold flex items-center justify-center gap-2"
                    >
                      <span>Start Your Project</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Verified Commitment Card */}
              <div className="p-6 rounded-3xl bg-[var(--bg-soft)] border border-slate-200 space-y-3">
                <div className="flex items-center gap-2 text-xs font-heading font-bold uppercase tracking-wider text-[var(--brand-orange)]">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Guaranteed Standards</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Every project is governed by strict Service Level Agreements (SLAs), transparent weekly progress tracking, and dedicated strategist support.
                </p>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. COMPREHENSIVE DELIVERABLES GRID (6 INCLUSIONS)                         */}
      {/* ========================================================================= */}
      <section className="py-16 md:py-24 bg-[var(--bg-soft)] border-y border-slate-200 text-[var(--text-dark)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-12 sm:mb-16">
            <span className="text-xs font-heading font-bold uppercase tracking-widest text-[var(--brand-orange)]">
              WHAT IS INCLUDED
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-extrabold text-[var(--deep-navy)] tracking-tight">
              Comprehensive Deliverables for {current.title}
            </h2>
            <p className="text-sm sm:text-base text-slate-600">
              Everything required to establish market dominance, drive measurable conversions, and ensure seamless scalability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {current.deliverables.map((item, idx) => (
              <div 
                key={idx}
                className="p-6 sm:p-7 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:shadow-md hover:border-[var(--primary-blue)]/50 transition-all group flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="w-8 h-8 rounded-lg bg-[var(--primary-blue)]/10 text-[var(--primary-blue)] font-mono font-bold text-xs flex items-center justify-center">
                      0{idx + 1}
                    </span>
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 group-hover:scale-110 transition-transform" />
                  </div>

                  <h3 className="text-base font-heading font-bold text-[var(--deep-navy)] group-hover:text-[var(--primary-blue)] transition-colors leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. 4-STEP EXECUTION FRAMEWORK TIMELINE                                    */}
      {/* ========================================================================= */}
      <section className="py-16 md:py-24 bg-[var(--deep-navy)] text-white relative overflow-hidden">
        
        {/* Glow */}
        <div className="absolute top-1/2 left-1/3 w-96 h-96 bg-[var(--cyan-accent)]/15 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-12 sm:mb-16">
            <span className="text-xs font-heading font-bold uppercase tracking-widest text-[var(--cyan-accent)]">
              HOW WE EXECUTE
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-extrabold text-white tracking-tight">
              Our 4-Step Milestone Process
            </h2>
            <p className="text-sm sm:text-base text-slate-300">
              Structured agile execution that guarantees high-velocity delivery without compromising quality.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {current.process.map((step, idx) => (
              <div 
                key={idx}
                className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md relative space-y-3 hover:border-[var(--brand-orange)] transition-colors group"
              >
                <div className="text-3xl font-heading font-black text-transparent bg-clip-text bg-gradient-to-r from-[var(--cyan-accent)] to-[var(--brand-orange)]">
                  {step.step}
                </div>

                <h3 className="text-base font-heading font-bold text-white group-hover:text-[var(--brand-orange)] transition-colors">
                  {step.title}
                </h3>

                <p className="text-xs text-slate-300 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. SWITCH TO OTHER SERVICES CAROUSEL / NAVIGATOR                          */}
      {/* ========================================================================= */}
      <section className="py-12 bg-white border-b border-slate-200 text-[var(--text-dark)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6">
            <div>
              <span className="text-[11px] font-heading font-bold uppercase tracking-wider text-[var(--brand-orange)]">
                EXPLORE MORE CAPABILITIES
              </span>
              <h3 className="text-lg font-heading font-bold text-[var(--deep-navy)]">
                Switch to Another Service
              </h3>
            </div>
            
            <button
              onClick={onBack}
              className="text-xs font-bold text-[var(--primary-blue)] hover:text-[var(--brand-orange)] flex items-center gap-1 cursor-pointer transition-colors"
            >
              <span>View All 6 Services on Homepage</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {allServicesList.map((s) => {
              const SIcon = s.icon;
              const isActive = s.id === current.id;
              return (
                <button
                  key={s.id}
                  onClick={() => onSelectService(s.id)}
                  className={`p-3 rounded-2xl border text-left transition-all cursor-pointer flex flex-col justify-between h-24 ${
                    isActive 
                      ? 'bg-[var(--deep-navy)] text-white border-[var(--brand-orange)] shadow-md ring-2 ring-[var(--brand-orange)]/40' 
                      : 'bg-[var(--bg-soft)] text-slate-800 border-slate-200 hover:border-[var(--primary-blue)] hover:bg-white'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[10px] font-bold opacity-75">{s.number}</span>
                    <SIcon className={`w-3.5 h-3.5 ${isActive ? 'text-[var(--brand-orange)]' : 'text-[var(--primary-blue)]'}`} />
                  </div>
                  <div className="text-xs font-heading font-bold leading-tight line-clamp-2">
                    {s.title}
                  </div>
                </button>
              );
            })}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 7. HIGH-CONVERTING BOTTOM CALL TO ACTION                                  */}
      {/* ========================================================================= */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-[#0A1F6B] via-[#081855] to-[#060F34] text-white relative overflow-hidden">
        
        <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--brand-orange)]/20 rounded-full blur-[140px] pointer-events-none" />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 relative z-10">
          
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs font-heading font-bold tracking-wider uppercase backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-[var(--brand-orange)]" />
            <span>READY TO ACCELERATE GROWTH?</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-white tracking-tight leading-tight">
            Let’s Build Something Remarkable in <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--cyan-accent)] to-[var(--brand-orange)]">{current.title}</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Get an in-depth audit, tailored milestone roadmap, and transparent quote crafted specifically for your business goals.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => onOpenQuoteWithService(current.title)}
              className="btn-primary text-sm sm:text-base !py-4 !px-8 shadow-xl shadow-[var(--brand-orange)]/40 hover:scale-105 active:scale-95 transition-all font-heading font-bold flex items-center gap-2 group w-full sm:w-auto justify-center"
            >
              <span>Request Free Quote for {current.title}</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>

            <a
              href="tel:+919876543210"
              className="btn-secondary text-sm sm:text-base !py-4 !px-8 font-bold flex items-center gap-2 w-full sm:w-auto justify-center"
            >
              <Phone className="w-4 h-4 text-[var(--brand-orange)]" />
              <span>Direct Call: +91 98765 43210</span>
            </a>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 8. FOOTER WITH LOGO & QUICK RETURN TO TOP                                 */}
      {/* ========================================================================= */}
      <footer className="py-8 bg-[var(--deep-navy)] border-t border-white/10 text-xs text-slate-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Logo variant="dark" size="sm" />
            <span className="text-slate-500">|</span>
            <span>Dedicated Service Hub</span>
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

