import React, { useState, useEffect, useRef, useMemo } from 'react';
import RevealHeading from './RevealHeading';
import {
  ArrowRight, 
  ArrowLeft,
  CheckCircle2, 
  Globe,
  Code2,
  Megaphone,
  Search,
  Palette,
  Film,
  ExternalLink,
  RotateCw,
  Sparkles,
  Zap,
  TrendingUp,
  ShieldCheck,
  Users,
  Layout,
  PlaySquare,
  Target,
  MessageCircle

} from 'lucide-react';

// 10 Official Click On Media Services from Visiting Card & Brochure
const SERVICES_DATA = [
  {
    id: 'social-media',
    number: '01',
    title: 'Social Media Marketing',
    badge: 'Audience Building',
    microTag: ['INSTAGRAM', 'FACEBOOK', 'VIRAL REACH'],
    headlineStack: {
      line1: 'SOCIAL',
      line2: 'MARKETING.',
      line3: 'VIRAL',
      line4: 'GROWTH.',
      subline: 'BUILD AN ENGAGED AUDIENCE AND SCALE YOUR BRAND REACH ON INSTAGRAM, FACEBOOK AND LINKEDIN.'
    },
    tagline: 'Build an engaged audience, grow brand authority, and turn casual followers into loyal paying customers across Instagram, Facebook & LinkedIn.',
    description: 'We manage, grow, and monetize your social profiles with daily aesthetic content, engaging community interactions, viral trend capture, and organic follower growth.',
    accent: 'from-[var(--brand-orange)] to-[var(--amber)]',
    tagBg: 'bg-[var(--brand-orange)]/10 text-[var(--brand-orange)] border-[var(--brand-orange)]/20',
    glowColor: 'rgba(255, 122, 0, 0.25)',
    icon: Users,
    image: './services/service-social-media.jpg',
    bottomTags: ['ORGANIC GROWTH', 'COMMUNITY', 'VIRAL REACH', 'DAILY CONTENT'],
    benefits: [
      'Consistent Aesthetic Feed & High-Engagement Visual Creatives',
      'Active Direct Message & Comment Response Funnels',
      'Targeted Local & Regional Follower Acquisition in UP',
      'Influencer Collaborations & Algorithmic Trend Capitalization'
    ],
    metrics: '+340% Reach',
    metricDetail: 'Active Community',
    ctaText: 'Explore Social Marketing'
  },
  {
    id: 'web-dev',
    number: '02',
    title: 'Website Development',
    badge: 'Web Architecture',
    microTag: ['CREATIVE', 'TECHNOLOGY', 'GROWTH'],
    headlineStack: {
      line1: 'WEBSITES',
      line2: 'ENGAGING.',
      line3: 'FAST',
      line4: 'CONVERSIONS.',
      subline: 'WE CRAFT CUSTOM ENGAGING WEBSITES THAT SHOWCASE YOUR BRAND AND DRIVE MASSIVE BUSINESS GROWTH.'
    },
    tagline: 'Crafting custom, engaging websites that showcase your brand and drive business growth with Click On Media in Gorakhpur.',
    description: 'We engineer custom React & Next.js websites built for lightning speed, sub-0.6s page loads, mobile-first UX, and seamless customer conversions.',
    accent: 'from-[var(--primary-blue)] to-[var(--deep-navy)]',
    tagBg: 'bg-[var(--primary-blue)]/10 text-[var(--primary-blue)] border-[var(--primary-blue)]/20',
    glowColor: 'rgba(11, 92, 255, 0.25)',
    icon: Globe,
    image: './services/service-web-dev.jpg',
    bottomTags: ['REACT & NEXT.JS', '0.6s SPEED', 'MOBILE FIRST', 'SEO READY'],
    benefits: [
      'Sub-0.6s Page Load Times (Zero bounce on mobile 4G/5G)',
      'Custom Interactive UX/UI That Showcases Your Brand',
      '100/100 Core Web Vitals & Mobile-First Precision',
      'Direct WhatsApp & Inbound Lead Funnel Integrations'
    ],
    metrics: '0.6s Avg Load Time',
    metricDetail: '100/100 Vitals',
    ctaText: 'Explore Web Solutions'
  },
  {
    id: 'whatsapp-bulk',
    number: '03',
    title: 'WhatsApp Bulk Messaging',
    badge: 'Direct Outreach',
    microTag: ['WHATSAPP API', 'BULK BROADCAST', 'HIGH OPEN RATE'],
    headlineStack: {
      line1: 'WHATSAPP',
      line2: 'BROADCAST.',
      line3: 'INSTANT',
      line4: 'REACH.',
      subline: 'DELIVER PERSONALIZED PROMOTIONS, OFFERS AND ALERTS DIRECTLY TO CUSTOMERS WITH 98% OPEN RATES.'
    },
    tagline: 'Deliver verified bulk broadcasts, promotional alerts, and interactive bot messages with 98% open rates using official WhatsApp APIs.',
    description: 'Reach thousands of verified targeted customers across Gorakhpur and India with official WhatsApp Business API broadcasts, rich media catalogs, and automated chat flows.',
    accent: 'from-emerald-500 to-teal-600',
    tagBg: 'bg-emerald-500/10 text-emerald-600 border-emerald-500/20',
    glowColor: 'rgba(16, 185, 129, 0.25)',
    icon: MessageCircle,
    image: './services/service-whatsapp-bulk.jpg',
    bottomTags: ['OFFICIAL API', '98% OPEN RATE', 'RICH MEDIA', 'AUTO CHATBOT'],
    benefits: [
      'Green Tick Official WhatsApp Business API Integration',
      '98% Open Rate Broadcasts with Zero Spam Penalties',
      'Rich Media: Catalogs, PDFs, Videos & Clickable Buttons',
      'Automated Lead Qualification & Instant CRM Routing'
    ],
    metrics: '98% Open Rate',
    metricDetail: 'Instant Delivery',
    ctaText: 'Explore WhatsApp Bulk'
  },
  {
    id: 'graphics-designing',
    number: '04',
    title: 'Graphics Designing',
    badge: 'Visual Identity',
    microTag: ['POSTERS', 'BRAND LOGOS', 'MARKETING COLLATERAL'],
    headlineStack: {
      line1: 'GRAPHICS',
      line2: 'STUNNING.',
      line3: 'BRAND',
      line4: 'AUTHORITY.',
      subline: 'ELEVATE YOUR BRAND IDENTITY WITH MEMORABLE GRAPHICS, PROMOTIONAL POSTERS AND LOGO DESIGNS.'
    },
    tagline: 'Elevate your brand presence with stunning promotional posters, festival banners, 3D & 2D logos, and complete marketing collateral.',
    description: 'High-impact promotional posters, festival creative banners, hoardings, brochure designs, and trademark-ready 3D/2D logo suites designed to captivate your customers.',
    accent: 'from-[var(--primary-blue)] to-[var(--cyan-accent)]',
    tagBg: 'bg-[var(--primary-blue)]/10 text-[var(--primary-blue)] border-[var(--primary-blue)]/20',
    glowColor: 'rgba(11, 92, 255, 0.25)',
    icon: Palette,
    image: './services/service-graphics-logo.jpg',
    bottomTags: ['3D/2D LOGOS', 'PROMO POSTERS', 'FESTIVAL BANNERS', 'HD VECTORS'],
    benefits: [
      'Eye-Catching Social Media Posters & Festival Creatives',
      '100% Unique & Trademark-Ready Logo & Typography Systems',
      'Print-Ready 300DPI Billboards, Standees & Corporate Collateral',
      'Brand Style Guides with Cohesive Color Palettes & Fonts'
    ],
    metrics: '100% Original',
    metricDetail: 'HD Vector Suite',
    ctaText: 'Explore Graphic Design'
  },
  {
    id: 'video-editing',
    number: '05',
    title: 'Video Editing',
    badge: 'Viral Video Suite',
    microTag: ['4K EDITING', 'VIRAL REELS', 'YOUTUBE PACING'],
    headlineStack: {
      line1: 'VIDEO',
      line2: 'CINEMATIC.',
      line3: 'HIGH',
      line4: 'RETENTION.',
      subline: 'CAPTIVATE VIEWERS WITH HIGH-RETENTION 9:16 INSTAGRAM REELS AND 4K YOUTUBE VIDEO PRODUCTION.'
    },
    tagline: 'End-to-end video editing for viral 9:16 Instagram Reels, YouTube 4K videos, podcasts, and high-impact corporate commercials.',
    description: 'We edit raw footage into thumb-stopping 9:16 Reels and 4K YouTube videos with seamless pacing, sound design, b-roll, trending music, and dynamic motion graphics.',
    accent: 'from-[var(--brand-orange)] to-[var(--amber)]',
    tagBg: 'bg-[var(--brand-orange)]/10 text-[var(--brand-orange)] border-[var(--brand-orange)]/20',
    glowColor: 'rgba(255, 122, 0, 0.25)',
    icon: Film,
    image: './services/service-youtube-videos.jpg',
    bottomTags: ['INSTAGRAM REELS', '4K YOUTUBE', 'SOUND FX', 'MOTION GRAPHICS'],
    benefits: [
      'Psychological 3-Second Scroll-Stopping Video Hooks',
      'Multi-Camera 4K Color Grading, Sound FX & B-Roll Pacing',
      'Dynamic Auto-Captions with Animated Highlights',
      'High-CTR 3D Thumbnails & Video Retention Engineering'
    ],
    metrics: '10M+ Views',
    metricDetail: 'High Retention',
    ctaText: 'Explore Video Editing'
  },
  {
    id: 'seo',
    number: '06',
    title: 'SEO - Website + Google My Business',
    badge: '#1 Google Rankings',
    microTag: ['LOCAL MAP PACK', 'SEARCH SEO', 'ORGANIC TRAFFIC'],
    headlineStack: {
      line1: 'SEARCH',
      line2: 'DOMINATION.',
      line3: 'MAP PACK',
      line4: 'TOP RANK.',
      subline: 'DOMINATE GOOGLE SEARCH AND GOOGLE MAPS PACK IN GORAKHPUR AND ACROSS UTTAR PRADESH.'
    },
    tagline: 'Dominate Google Search and Google Maps pack in Gorakhpur and UP. Drive consistent organic calls, high-intent traffic, and local footfall.',
    description: 'Complete search engine optimization combining on-page technical speed hardening, high-intent keyword ranking, and Google Business Profile (GMB) map pack domination.',
    accent: 'from-[var(--primary-blue)] to-[var(--deep-navy)]',
    tagBg: 'bg-[var(--primary-blue)]/10 text-[var(--primary-blue)] border-[var(--primary-blue)]/20',
    glowColor: 'rgba(11, 92, 255, 0.25)',
    icon: Search,
    image: './services/service-seo.jpg',
    bottomTags: ['MAP PACK #1', 'ON-PAGE SEO', 'LOCAL CITATIONS', 'ZERO AD SPEND'],
    benefits: [
      '#1 Google Maps Pack (GMB) Rankings for Daily Direct Calls',
      'High-Intent Commercial Keyword Ranking with Zero Ad Spend',
      'Core Web Vitals & Technical SEO Hardening for 100/100 Scores',
      'Verified Local Business Citations Across Gorakhpur & Eastern UP'
    ],
    metrics: '#1 Local Rank',
    metricDetail: '300% Organic Calls',
    ctaText: 'Explore SEO & GMB'
  },
  {
    id: 'ads',
    number: '07',
    title: 'Ads - Website + Insta, FB, WhatsApp',
    badge: 'High-ROAS Funnels',
    microTag: ['GOOGLE ADS', 'META ADS', 'WHATSAPP FUNNEL'],
    headlineStack: {
      line1: 'PAID ADS',
      line2: 'PRECISION.',
      line3: 'SCALE',
      line4: 'REVENUE.',
      subline: 'TARGET HIGH-INTENT BUYERS WITH HIGH-ROAS ADS ON GOOGLE SEARCH, INSTAGRAM, FACEBOOK AND WHATSAPP.'
    },
    tagline: 'Target high-intent buyers with high-ROAS paid advertising on Google Search, Instagram, Facebook, and direct WhatsApp click-to-chat funnels.',
    description: 'Precision performance marketing combining Google Search & Maps PPC with Meta Facebook & Instagram direct-response ads and automated WhatsApp lead qualification.',
    accent: 'from-[var(--brand-orange)] to-rose-500',
    tagBg: 'bg-[var(--brand-orange)]/10 text-[var(--brand-orange)] border-[var(--brand-orange)]/20',
    glowColor: 'rgba(255, 122, 0, 0.25)',
    icon: Target,
    image: './services/service-ads.jpg',
    bottomTags: ['GOOGLE SEARCH', 'META FUNNELS', 'WHATSAPP LEADS', 'HIGH ROAS'],
    benefits: [
      'Immediate Top Google Search Placement for Buyer Keywords',
      'Direct-Response Instagram & Facebook Video Ad Funnels',
      'WhatsApp Click-to-Chat Ads for Instant Lead Conversions',
      'Negative Keyword Filtering & Fraud Click Protection'
    ],
    metrics: '4.2x Avg ROAS',
    metricDetail: 'Zero Bot Waste',
    ctaText: 'Explore Paid Ads'
  },
  {
    id: 'software-dev',
    number: '08',
    title: 'Software Development',
    badge: 'Custom IT Solutions',
    microTag: ['CLOUD SAAS', 'MOBILE APPS', 'AUTOMATION'],
    headlineStack: {
      line1: 'SOFTWARE',
      line2: 'SMARTER.',
      line3: 'SCALE',
      line4: 'EFFORTLESS.',
      subline: 'TAILOR-MADE CLOUD SOFTWARE AND CROSS-PLATFORM MOBILE APPS BUILT FOR SEAMLESS PERFORMANCE.'
    },
    tagline: 'Tailor-made cloud software, web applications, and iOS/Android mobile apps engineered for speed, high security, and 99.98% uptime.',
    description: 'Custom enterprise software, business automation portals, and cross-platform mobile apps designed to streamline business operations and scale transactions securely.',
    accent: 'from-indigo-600 to-[var(--primary-blue)]',
    tagBg: 'bg-indigo-500/10 text-indigo-600 border-indigo-500/20',
    glowColor: 'rgba(99, 102, 241, 0.25)',
    icon: Code2,
    image: './services/service-software-dev.jpg',
    bottomTags: ['IOS & ANDROID', 'CLOUD SAAS', '99.98% UPTIME', 'AUTOMATION'],
    benefits: [
      'Cross-Platform iOS & Android Apps (Single codebase savings)',
      'Automated Billing, Inventory & Payment Gateway Systems',
      '99.98% High Uptime Cloud Architecture & Data Security',
      'Dedicated Technical Architecture & Live Maintenance SLA'
    ],
    metrics: '99.98% Uptime',
    metricDetail: 'Bank-Grade Sec',
    ctaText: 'Explore Software Solutions'
  },
  {
    id: 'crm',
    number: '09',
    title: 'CRM',
    badge: 'Sales & Lead Pipeline',
    microTag: ['LEAD TRACKING', 'SALES FUNNELS', 'AUTOMATION'],
    headlineStack: {
      line1: 'LEADS',
      line2: 'ORGANIZED.',
      line3: 'CLOSE',
      line4: 'FASTER.',
      subline: 'TRACK EVERY INQUIRY, AUTOMATE FOLLOW-UPS AND CLOSE DEALS WITH CUSTOMIZED CRM PLATFORMS.'
    },
    tagline: 'Track every inquiry, automate client follow-ups, streamline sales teams, and close deals faster with modern CRM systems tailored to your business.',
    description: 'We deploy and customize intuitive CRM platforms that centralize leads from WhatsApp, website forms, Google Ads, and calls into a single pipeline with automated alerts.',
    accent: 'from-[var(--primary-blue)] to-violet-600',
    tagBg: 'bg-[var(--primary-blue)]/10 text-[var(--primary-blue)] border-[var(--primary-blue)]/20',
    glowColor: 'rgba(11, 92, 255, 0.25)',
    icon: Layout,
    image: './services/service-crm.jpg',
    bottomTags: ['LEAD PIPELINE', 'AUTO FOLLOW-UPS', 'WHATSAPP SYNC', 'TEAM METRICS'],
    benefits: [
      'Instant Lead Capture from Website, WhatsApp & Social Ads',
      'Automated SMS, WhatsApp & Email Follow-Up Sequences',
      'Sales Rep Call Tracking & Performance Leaderboards',
      'Custom Deal Stages, Invoicing & Conversion Analytics'
    ],
    metrics: '+45% Closures',
    metricDetail: 'Zero Lost Leads',
    ctaText: 'Explore CRM Solutions'
  },
  {
    id: 'monetization',
    number: '10',
    title: 'Monetization',
    badge: 'Revenue Optimization',
    microTag: ['YOUTUBE REVENUE', 'META CREATOR', 'ASSET MONETIZATION'],
    headlineStack: {
      line1: 'DIGITAL',
      line2: 'REVENUE.',
      line3: 'SCALE',
      line4: 'PROFITS.',
      subline: 'MAXIMIZE DIGITAL ASSET EARNINGS ACROSS YOUTUBE AD SENSE, META CREATOR REWARDS AND SPONSORSHIPS.'
    },
    tagline: 'Maximize digital asset earnings through YouTube AdSense, Meta creator bonuses, sponsor funnels, and optimized monetization models.',
    description: 'Strategic monetization architectures for content creators, publishers, and brands to unlock high-RPM YouTube revenue, Facebook reels monetization, and sponsored deal flow.',
    accent: 'from-amber-500 to-[var(--brand-orange)]',
    tagBg: 'bg-amber-500/10 text-amber-600 border-amber-500/20',
    glowColor: 'rgba(245, 158, 11, 0.25)',
    icon: TrendingUp,
    image: './services/service-monetization.jpg',
    bottomTags: ['YOUTUBE ADSENSE', 'META BONUSES', 'SPONSOR FUNNELS', 'HIGH RPM'],
    benefits: [
      'YouTube Partner Program (YPP) Fast-Track Compliance',
      'High-RPM Video Structuring & Ad Placement Optimization',
      'Facebook & Instagram Reels Creator Monetization Setup',
      'Direct Brand Sponsorship Media Kits & Negotiation Assets'
    ],
    metrics: 'Max RPM Revenue',
    metricDetail: 'Passive Cashflow',
    ctaText: 'Explore Monetization'
  }
];

export default function Services({ onSelectService, onOpenQuote }) {
  const services = SERVICES_DATA;
  const totalCards = services.length;

  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== 'undefined' ? window.innerWidth : 1200
  );

  const autoPlayTimerRef = useRef(null);
  const sectionRef = useRef(null);
  const touchStartXRef = useRef(0);
  const touchEndXRef = useRef(0);

  // Scroll-driven automatic card rotation: as the user scrolls the website,
  // the cards rotate and progress smoothly in 3D!
  useEffect(() => {
    let lastScrollY = window.scrollY;
    let accumulatedDelta = 0;
    const scrollThreshold = 40; // Responsive threshold: smooth natural rotation as user scrolls

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const delta = currentScrollY - lastScrollY;
      lastScrollY = currentScrollY;

      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const inView = rect.top < window.innerHeight * 1.15 && rect.bottom > -window.innerHeight * 0.15;

      if (inView && Math.abs(delta) > 1) {
        accumulatedDelta += delta;

        if (accumulatedDelta > scrollThreshold) {
          setActiveCardIndex((prev) => (prev + 1) % totalCards);
          accumulatedDelta = 0;
        } else if (accumulatedDelta < -scrollThreshold) {
          setActiveCardIndex((prev) => (prev - 1 + totalCards) % totalCards);
          accumulatedDelta = 0;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [totalCards]);

  // Responsive resize listener
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Radius calculation adapting cleanly to screen size (compact proportions)
  const orbitRadius = useMemo(() => {
    if (windowWidth < 420) return 135; // Compact Mobile (<420px)
    if (windowWidth < 640) return 165; // Standard Mobile (<640px)
    if (windowWidth < 1024) return 235; // Tablet
    if (windowWidth < 1440) return 315; // Standard Laptop
    return 365; // Large Desktop
  }, [windowWidth]);

  // Holographic Glass Card width adapting to screen size (compact sleek size)
  const cardWidth = useMemo(() => {
    if (windowWidth < 380) return '245px'; // Narrow Mobile (<380px)
    if (windowWidth < 640) return '265px'; // Standard Mobile
    if (windowWidth < 1024) return '295px'; // Tablet
    return '325px'; // Desktop
  }, [windowWidth]);

  // Direct smooth rotation angle driven by activeCardIndex
  const masterOrbitAngle = -activeCardIndex * ((2 * Math.PI) / totalCards);

  // Smooth Auto-Play Loop (rotates every 3.5s automatically, pauses on mouse hover)
  useEffect(() => {
    if (isHovered) {
      if (autoPlayTimerRef.current) clearInterval(autoPlayTimerRef.current);
      return;
    }

    autoPlayTimerRef.current = setInterval(() => {
      setActiveCardIndex((prev) => (prev + 1) % totalCards);
    }, 3500);

    return () => {
      if (autoPlayTimerRef.current) clearInterval(autoPlayTimerRef.current);
    };
  }, [isHovered, totalCards]);

  const handleNext = () => {
    setActiveCardIndex((prev) => (prev + 1) % totalCards);
  };

  const handlePrev = () => {
    setActiveCardIndex((prev) => (prev - 1 + totalCards) % totalCards);
  };

  // Direct mouse wheel on cards to rotate instantly
  const handleWheel = (e) => {
    if (Math.abs(e.deltaY) > 15) {
      if (e.deltaY > 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }
  };

  const jumpToService = (index) => {
    setActiveCardIndex(index);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

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
    if (Math.abs(diff) > 40) {
      if (diff > 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }
  };

    // Clean Reference Card (Title + Arrow, Short Description & Big Rounded Image)
  const renderGlassCard = (service, isFrontActive = true) => (
    <div 
      onClick={() => onSelectService && onSelectService(service.id)}
      className={`relative rounded-[26px] sm:rounded-[30px] bg-white p-5 sm:p-6 border transition-all duration-500 overflow-hidden flex flex-col justify-between shadow-[0_15px_40px_-12px_rgba(10,31,107,0.10)] group cursor-pointer ${
        isFrontActive 
          ? 'border-white ring-2 ring-[var(--brand-orange)]/60 shadow-[0_22px_55px_-10px_rgba(255,122,0,0.24)]' 
          : 'border-slate-200/80 hover:border-[var(--brand-orange)]/40 hover:shadow-xl'
      }`}
    >
      {/* Top subtle highlight */}
      <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-[var(--brand-orange)]/70 to-transparent" />
      <div className="pointer-events-none absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-white/90 via-white/20 to-transparent rounded-tr-[26px]" />

      {/* 1. TOP SECTION: Title & Category Badge */}
      <div className="mb-2.5 relative z-10">
        <div className="space-y-0.5">
          <div className="flex items-center gap-1.5 text-[9px] sm:text-[10px] font-mono font-bold uppercase tracking-wider text-[var(--brand-orange)]">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--brand-orange)] animate-pulse" />
            <span>{service.number} • {service.badge}</span>
          </div>
          <h3 className="text-lg sm:text-[21px] font-heading font-extrabold text-[#0A1F6B] tracking-tight leading-snug group-hover:text-[var(--primary-blue)] transition-colors">
            {service.title}
          </h3>
        </div>
      </div>

      {/* 2. MIDDLE SECTION: Clean Short Description (From Reference) */}
      <div className="relative z-10 mb-3 sm:mb-4">
        <p className="text-xs sm:text-[13px] text-slate-500 font-normal leading-relaxed line-clamp-3">
          {service.tagline}
        </p>
      </div>

      {/* 3. BOTTOM SECTION: Large High-Resolution Rounded Image (Exact Reference Match) */}
      <div className="relative w-full aspect-[16/10] sm:aspect-[16/10.5] rounded-2xl sm:rounded-[22px] overflow-hidden bg-slate-100 border border-slate-200/80 shadow-sm mt-auto flex-shrink-0">
        <img
          src={service.image}
          alt={`${service.title} - Click On Media Digital Services in Gorakhpur`}
          className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-106"
          loading="lazy"
        />
        {/* Soft Vignette Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

        {/* Subtle Category Pill Tag on Image Bottom */}
        <div className="absolute bottom-2 left-2.5 px-2.5 py-0.5 rounded-full bg-white/95 backdrop-blur-md text-[9px] font-heading font-bold text-[#0A1F6B] shadow-sm flex items-center gap-1.5">
          <service.icon className="w-3 h-3 text-[var(--brand-orange)]" />
          <span>{service.badge}</span>
        </div>
      </div>

      {/* 4. BOTTOM ACTION STRIP (Get Quote / Explore Link) */}
      <div className="pt-3 mt-3 border-t border-slate-100 flex items-center justify-between text-xs relative z-10">
        <span className="text-[11px] font-bold text-[var(--primary-blue)] group-hover:text-[var(--brand-orange)] flex items-center gap-1 transition-colors">
          <span>View Details</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
        </span>

        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onOpenQuote && onOpenQuote(service.title);
          }}
          className="px-3.5 py-1 rounded-full text-[11px] font-heading font-bold text-white bg-[var(--brand-orange)] hover:bg-[#e06900] shadow-xs hover:shadow-md transition-all cursor-pointer"
        >
          Get Quote
        </button>
      </div>

    </div>
  );

  return (
    <section 
      id="services" 
      ref={sectionRef}
      className="relative bg-transparent text-[var(--text-dark)] overflow-hidden pt-8 sm:pt-10 lg:pt-12 pb-12 sm:pb-16 border-y border-slate-200/60"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background Subtle Ambient Lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-[var(--primary-blue)]/5 rounded-full blur-[150px] pointer-events-none z-0" />
      <div className="absolute bottom-1/3 right-10 w-[450px] h-[350px] bg-[var(--brand-orange)]/5 rounded-full blur-[130px] pointer-events-none z-0" />

      {/* ===================================================================== */}
      {/* 1. HIGH-IMPACT SECTION HEADER (Big, Bold & Attractive)                */}
      {/* ===================================================================== */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 mb-6 sm:mb-8 text-center">
        
        {/* Ambient Subtle Glow directly behind headline */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 max-w-2xl h-24 bg-gradient-to-r from-[var(--primary-blue)]/15 via-[var(--cyan-accent)]/15 to-[var(--brand-orange)]/15 rounded-full blur-3xl pointer-events-none -z-10" />

        {/* Premium Pill Badge */}
        <div className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 rounded-full bg-white/95 backdrop-blur-xl border border-[var(--primary-blue)]/25 text-xs sm:text-sm font-semibold text-[#0A1F6B] shadow-[0_4px_20px_rgba(10,31,107,0.08)] mb-3 sm:mb-4 transition-transform hover:scale-105">
          <span className="w-2.5 h-2.5 rounded-full bg-[var(--brand-orange)] shadow-[0_0_10px_#FF7A00] animate-pulse" />
          <span className="text-[var(--brand-orange)] uppercase tracking-widest text-[11px] sm:text-xs font-heading font-extrabold">
            Our Services
          </span>
          <span className="text-slate-300">•</span>
          <span className="text-[#071133] font-bold text-[11px] sm:text-xs flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-[var(--cyan-accent)]" />
            <span>Click On Media Flagship Solutions</span>
          </span>
        </div>

        {/* Grand Headline: Big, Punchy, Authoritative & Radiant */}
        <RevealHeading tag="h2" delay={120} direction="up" blur={true} className="text-3xl sm:text-5xl md:text-6xl font-black text-[#0A1F6B] tracking-tight leading-[1.12] font-heading max-w-4xl mx-auto drop-shadow-xs">
          End-to-End Digital Solutions for{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0B5CFF] via-[#00C8FF] via-50% to-[#FF7A00] drop-shadow-sm">
            Modern Businesses
          </span>
        </RevealHeading>

        {/* Attractive Subtitle with High Legibility & Rich Dark Text */}
        <RevealHeading tag="p" delay={220} direction="up" className="text-sm sm:text-base md:text-lg text-[#071133] font-bold max-w-2xl mx-auto mt-3 sm:mt-4 leading-relaxed drop-shadow-[0_1px_2px_rgba(255,255,255,0.95)]">
          Crafting custom digital ecosystems engineered to dominate search results, capture consumer attention, and accelerate real business revenue.
        </RevealHeading>

        {/* Radiant Gradient Accent Line */}
        <div className="w-24 sm:w-32 h-1 bg-gradient-to-r from-[#0B5CFF] via-[#00C8FF] to-[#FF7A00] rounded-full mx-auto mt-4 sm:mt-5 shadow-sm" />

      </div>

      {/* ===================================================================== */}
      {/* 2. HOLOGRAPHIC GLASS CAROUSEL THEATER                                  */}
      {/* ===================================================================== */}
      <div className="w-full relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Holographic 3D Perspective Scene Container (Compact Height) */}
          <div 
            onWheel={handleWheel}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            className="relative w-full h-[530px] sm:h-[560px] lg:h-[590px] flex items-center justify-center overflow-hidden"
          >
            
            <div 
              className="relative w-full h-full flex items-center justify-center preserve-3d"
              style={{
                perspective: '1400px',
                perspectiveOrigin: '50% 50%'
              }}
            >

              {/* Physical Orbital Track Ring */}
              <div 
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none"
                style={{
                  width: `${orbitRadius * 2.1}px`,
                  height: `${orbitRadius * 2.1}px`,
                  transform: 'rotateX(78deg) translateZ(-35px)',
                  border: '1.5px dashed rgba(11, 92, 255, 0.25)',
                  boxShadow: '0 0 45px rgba(11, 92, 255, 0.08), inset 0 0 35px rgba(255, 122, 0, 0.05)'
                }}
              >
                <div className="absolute inset-0 m-auto w-24 h-24 rounded-full bg-[var(--primary-blue)]/10 blur-xl" />
              </div>

              {/* 3D Holographic Glass Service Cards */}
              {services.map((service, index) => {
                const baseAngle = (index / totalCards) * (2 * Math.PI);
                const totalAngle = baseAngle + masterOrbitAngle;
                const diffAngle = ((totalAngle % (2 * Math.PI)) + 3 * Math.PI) % (2 * Math.PI) - Math.PI;

                const xPos = orbitRadius * Math.sin(diffAngle);
                const zPos = orbitRadius * Math.cos(diffAngle) * 0.75 - (orbitRadius * 0.15);

                const depthFactor = (Math.cos(diffAngle) + 1) / 2; // 0 to 1
                const scale = 0.8 + 0.2 * depthFactor;
                const opacity = 0.4 + 0.6 * depthFactor;
                const rotateY = -diffAngle * (180 / Math.PI) * 0.3;
                const zIndex = Math.round(depthFactor * 50) + 1;

                const isFrontActive = Math.abs(diffAngle) < 0.42;

                return (
                  <div
                    key={service.id}
                    onClick={() => !isFrontActive && jumpToService(index)}
                    className={`absolute top-1/2 left-1/2 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                      isFrontActive 
                        ? 'cursor-default pointer-events-auto' 
                        : 'cursor-pointer pointer-events-auto hover:opacity-95'
                    }`}
                    style={{
                      width: cardWidth,
                      transform: `translate3d(calc(-50% + ${xPos}px), -50%, ${zPos}px) rotateY(${rotateY}deg) scale(${scale})`,
                      transformOrigin: 'center center',
                      opacity: opacity,
                      zIndex: zIndex,
                      filter: `brightness(${0.85 + 0.15 * depthFactor}) blur(${(1 - depthFactor) * 1.2}px)`,
                      willChange: 'transform, opacity'
                    }}
                  >
                    {renderGlassCard(service, isFrontActive)}
                  </div>
                );
              })}

            </div>

            {/* Left & Right Stage Navigation Arrows */}
            <div className="absolute inset-x-2 sm:inset-x-8 top-1/2 -translate-y-1/2 z-30 flex justify-between pointer-events-none">
              <button
                onClick={handlePrev}
                title="Previous Service"
                aria-label="Previous Service"
                className="w-10 h-10 rounded-full bg-white/95 hover:bg-[var(--brand-orange)] hover:text-white border border-[var(--primary-blue)]/20 text-[#0A1F6B] flex items-center justify-center shadow-lg transition-all hover:scale-110 active:scale-95 cursor-pointer pointer-events-auto min-w-[44px] min-h-[44px]"
              >
                <ArrowLeft className="w-4 h-4" />
              </button>

              <button
                onClick={handleNext}
                title="Next Service"
                aria-label="Next Service"
                className="w-10 h-10 rounded-full bg-white/95 hover:bg-[var(--brand-orange)] hover:text-white border border-[var(--primary-blue)]/20 text-[#0A1F6B] flex items-center justify-center shadow-lg transition-all hover:scale-110 active:scale-95 cursor-pointer pointer-events-auto min-w-[44px] min-h-[44px]"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Bottom Visual Rotation Cue (Responsive on Small Mobile Screens) */}
            <div className="absolute bottom-1 left-1/2 -translate-x-1/2 z-20 flex items-center gap-1.5 text-[10px] sm:text-[11px] font-semibold text-slate-600 bg-white/95 backdrop-blur-md px-3 sm:px-3.5 py-1 rounded-full border border-slate-200/90 shadow-sm pointer-events-none max-w-[94vw] whitespace-nowrap">
              <RotateCw className="w-3 h-3 text-[var(--brand-orange)] animate-spin flex-shrink-0" />
              <span className="hidden sm:inline">Scroll website to rotate cards automatically • Drag or click to explore</span>
              <span className="sm:hidden">Scroll or drag to rotate 3D cards</span>
            </div>

          </div>

        </div>

    </section>
  );
}
