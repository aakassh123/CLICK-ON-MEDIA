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
  ChevronRight,
  Users,
  Layout,
  PlaySquare,
  Target,
  MessageCircle
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
      image: './services/service-web-dev.jpg',
      imageBadge: 'Verified Web Architecture: Next.js + React + Headless CMS',
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
      image: './services/service-software-dev.jpg',
      imageBadge: 'Full-Stack Enterprise Cloud & Mobile App Architecture',
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
      image: './services/service-digital-marketing.jpg',
      imageBadge: 'Data-Driven Omnichannel Growth & Attribution Engine',
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
      image: './services/service-google-ads.jpg',
      imageBadge: 'Search Engine Optimization & Google Local Pack Domination',
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
      image: './services/service-graphics-logo.jpg',
      imageBadge: 'Iconic 3D & Vector Brand Identity Design Suite',
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
      image: './services/service-short-reels.jpg',
      imageBadge: 'High-Retention 9:16 Viral Video & Studio Production',
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
    },
    'digital-marketing': {
      id: 'digital-marketing',
      number: '03',
      title: 'Digital Marketing',
      badge: 'Online Growth & Strategy',
      category: 'Omnichannel Digital Strategy',
      icon: TrendingUp,
      color: 'text-[var(--primary-blue)]',
      accentBg: 'bg-[var(--primary-blue)]/10',
      image: './services/service-digital-marketing.jpg',
      imageBadge: 'Data-Driven Omnichannel Growth & Attribution Engine',
      tagline: 'Boost your online presence and reach your target audience with expert growth strategies.',
      overview: 'We build 360° digital marketing engines that expand brand reach and systematically convert prospects into high-paying clients. Through competitor benchmarking, targeted audience segmentation, and multi-channel attribution funnels, we help businesses establish regional and pan-India dominance with measurable ROI.',
      metrics: '4.2x Growth',
      metricDetail: 'Pan-India Reach',
      timeline: 'Monthly Growth',
      startingPrice: 'Growth Roadmap',
      deliverables: [
        { title: 'Omnichannel Growth Strategy', desc: 'Comprehensive digital audit, target customer persona mapping, and revenue roadmap.' },
        { title: 'Inbound Lead Funnel Architecture', desc: 'High-converting lead magnets, landing pages, and automated WhatsApp lead flows.' },
        { title: 'Competitor & Market Benchmarking', desc: 'In-depth analysis of competitor strategies to capture untapped market share.' },
        { title: 'Full-Funnel Attribution Analytics', desc: 'Transparent real-time dashboard tracking impressions, leads, CAC, and revenue.' }
      ],
      process: [
        { step: '01', title: 'Market Audit', desc: 'Deep dive into audience behavior and competitor gaps.' },
        { step: '02', title: 'Funnel Blueprint', desc: 'Structuring lead acquisition pathways across channels.' },
        { step: '03', title: 'Execution & Scale', desc: 'Deploying campaigns with high-impact creatives and copy.' },
        { step: '04', title: 'ROI Optimization', desc: 'Daily tracking and conversion rate optimization.' }
      ],
      technologies: ['Google Analytics 4', 'Meta Business Suite', 'Google Tag Manager', 'HubSpot', 'Zapier', 'WhatsApp Business API'],
      whyChoose: ['Zero wasted marketing spend', 'Real paying buyer focus instead of vanity metrics', 'Transparent live reporting dashboards']
    },
    'social-media': {
      id: 'social-media',
      number: '04',
      title: 'Social Media Growth & Engagement',
      badge: 'Community & Brand Authority',
      category: 'Social Media Marketing',
      icon: Users,
      color: 'text-[var(--brand-orange)]',
      accentBg: 'bg-[var(--brand-orange)]/10',
      image: './services/service-social-media.jpg',
      imageBadge: 'High-Retention Brand Community & Social Engagement Hub',
      tagline: 'Enhance your brand’s online engagement and growth with expert social media strategies.',
      overview: 'Transform your social channels into magnetic community hubs. At Click On Media, we manage your Instagram, Facebook, and LinkedIn profiles with aesthetic visual grids, viral hook copy, high-retention stories, and active follower engagement that builds fierce brand loyalty and daily inbound inquiries.',
      metrics: '+340% Reach',
      metricDetail: 'Active Community',
      timeline: 'Monthly Management',
      startingPrice: 'Monthly Packages',
      deliverables: [
        { title: 'Aesthetic Feed & Story Architecture', desc: 'Curated visual themes and daily branded post designs tailored to your niche.' },
        { title: 'Community Management & DM Workflows', desc: 'Active comment replies, DM lead triage, and direct customer query handling.' },
        { title: 'Organic Growth & Trend Capitalization', desc: 'Capitalizing on trending audio, viral formats, and hashtag strategies for maximum organic reach.' },
        { title: 'Monthly Performance Growth Audits', desc: 'Detailed monthly reports covering reach, engagement rate, profile visits, and follower conversions.' }
      ],
      process: [
        { step: '01', title: 'Brand Voice Discovery', desc: 'Defining your unique tone of voice and visual identity.' },
        { step: '02', title: 'Monthly Content Calendar', desc: 'Pre-scheduling 30 days of high-converting posts and reels.' },
        { step: '03', title: 'Daily Community Engagement', desc: 'Actively interacting with your followers and industry peers.' },
        { step: '04', title: 'Growth Review', desc: 'Reviewing metrics and doubling down on top-performing content.' }
      ],
      technologies: ['Instagram', 'Facebook', 'LinkedIn', 'Canva Pro', 'Figma', 'Buffer / Hootsuite'],
      whyChoose: ['Consistent daily posting with zero effort from your team', 'High aesthetic standards that elevate brand perception', 'Real organic follower growth without fake bots']
    },
    'posters': {
      id: 'posters',
      number: '05',
      title: 'Posters & Marketing Collateral',
      badge: 'High-Impact Visual Creatives',
      category: 'Graphic Design & Print Media',
      icon: Layout,
      color: 'text-[var(--primary-blue)]',
      accentBg: 'bg-[var(--primary-blue)]/10',
      image: './services/service-posters.jpg',
      imageBadge: '300DPI Print-Ready & High-Impact Digital Marketing Collateral',
      tagline: 'Create impactful and visually appealing posters to effectively promote your brand.',
      overview: 'Stop the scroll and make heads turn. We design bold, visually stunning promotional posters, festival social banners, outdoor hoardings, and marketing flyers that convey your core message instantly and compel customers to take immediate action.',
      metrics: '100% Custom',
      metricDetail: '300DPI Print & Web',
      timeline: '2 to 4 Days',
      startingPrice: 'Per Creative / Bundle',
      deliverables: [
        { title: 'Promotional & Product Posters', desc: 'High-impact product launch and discount promotional creatives for digital ads and print.' },
        { title: 'Festival & Occasion Banners', desc: 'Custom holiday and festival creatives tailored with your branding and logo.' },
        { title: 'Large Format Hoardings & Standees', desc: '300DPI print-ready vector designs for billboards, trade show booths, and standees.' },
        { title: 'Multi-Format Social Media Sizes', desc: 'Perfect aspect ratios for 1:1 Instagram feeds, 9:16 Stories, and Facebook banners.' }
      ],
      process: [
        { step: '01', title: 'Creative Brief', desc: 'Understanding your promotion, offer, and target audience.' },
        { step: '02', title: 'Concept Exploration', desc: 'Drafting 2-3 visual concept layouts with bold typography.' },
        { step: '03', title: 'High-Res Refinement', desc: 'Fine-tuning lighting, shadows, product placement, and color grading.' },
        { step: '04', title: 'Multi-Format Delivery', desc: 'Supplying web JPG/PNG files and print-ready vector PDFs.' }
      ],
      technologies: ['Adobe Photoshop', 'Illustrator', 'Figma', 'Vector Pro'],
      whyChoose: ['Zero template work — 100% custom bespoke graphic design', 'Express 48-hour delivery on priority campaigns', 'Print-ready color profiles that look vibrant in real life']
    },
    'short-reels': {
      id: 'short-reels',
      number: '06',
      title: 'Short Videos & Reels',
      badge: 'Viral 9:16 Video Production',
      category: 'Video Production & Social Video',
      icon: Film,
      color: 'text-[var(--brand-orange)]',
      accentBg: 'bg-[var(--brand-orange)]/10',
      image: './services/service-short-reels.jpg',
      imageBadge: 'High-Retention 9:16 Viral Video & Studio Production',
      tagline: 'Captivate your audience and boost engagement with creative short videos and reels.',
      overview: 'Short-form vertical video is the #1 organic growth engine today. We produce dynamic 9:16 Instagram Reels and YouTube Shorts with psychological scroll-stopping hooks, dynamic auto-captions, cinematic sound effects, and trending sound design that explodes brand awareness and drives massive engagement.',
      metrics: '10M+ Views',
      metricDetail: 'Viral Retention',
      timeline: '3 to 7 Days',
      startingPrice: 'Monthly Bundles',
      deliverables: [
        { title: 'Psychological Hook Scripting', desc: '3-second curiosity-inducing hooks that retain viewers through the algorithm.' },
        { title: 'Studio-Grade 4K Post-Production', desc: 'Dynamic text tracking, cinematic color grading, and speed-ramp transitions.' },
        { title: 'Trending Audio & Sound FX', desc: 'Curating viral music and Foley sound effects to maximize watch-time percentage.' },
        { title: 'Repurposing Across Platforms', desc: 'Single production adapted for Instagram Reels, YouTube Shorts, and Facebook Reels.' }
      ],
      process: [
        { step: '01', title: 'Script & Trend Research', desc: 'Identifying viral topics and writing punchy scripts.' },
        { step: '02', title: 'Production & Filming Direction', desc: 'Studio shooting or high-end stock/B-roll composition.' },
        { step: '03', title: 'Dynamic Editing & VFX', desc: 'Adding animated captions, zooms, sound design, and pacing.' },
        { step: '04', title: 'Publishing Optimization', desc: 'Optimizing titles, covers, and timing for algorithmic push.' }
      ],
      technologies: ['Adobe Premiere Pro', 'After Effects', 'DaVinci Resolve', 'CapCut Studio Pro'],
      whyChoose: ['Over 10M+ organic video views delivered for clients', 'High retention editing that algorithms prioritize', 'End-to-end service from concept script to finished render']
    },
    'graphics-logo': {
      id: 'graphics-logo',
      number: '07',
      title: 'Graphics & Logo Design',
      badge: 'Brand Identity & Visual Design',
      category: 'Branding & Corporate Identity',
      icon: Palette,
      color: 'text-[var(--primary-blue)]',
      accentBg: 'bg-[var(--primary-blue)]/10',
      image: './services/service-graphics-logo.jpg',
      imageBadge: 'Iconic 3D & Vector Brand Identity Design Suite',
      tagline: 'Elevate your brand identity with stunning graphics and logo design.',
      overview: 'Your logo and visual design are the first impression customers have of your business. We engineer iconic 3D and 2D logo suites, comprehensive brand guidelines, color palettes, typography tokens, and business stationery that position your business as a premium market leader.',
      metrics: 'Trademark Ready',
      metricDetail: '100% Original',
      timeline: '1 to 2 Weeks',
      startingPrice: 'Full Identity Suite',
      deliverables: [
        { title: 'Iconic 3D & 2D Logo Suite', desc: 'Primary, secondary, and sub-mark logos with 3D embossed and flat vector variants.' },
        { title: 'Brand Style Guidelines', desc: 'Official brand book with color hex codes, font pairings, spacing rules, and usage guides.' },
        { title: 'Corporate Stationery Suite', desc: 'Business cards, letterheads, email signatures, envelopes, and invoice templates.' },
        { title: 'Full Vector Source Files', desc: 'AI, EPS, SVG, PDF, and high-resolution transparent PNG files for any printing scale.' }
      ],
      process: [
        { step: '01', title: 'Brand Core Discovery', desc: 'Uncovering brand values, industry positioning, and target appeal.' },
        { step: '02', title: 'Concept Sketches', desc: 'Presenting multiple distinct logo concepts with rationales.' },
        { step: '03', title: 'Refinement & 3D Rendering', desc: 'Polishing geometry and adding realistic 3D textures.' },
        { step: '04', title: 'Brand Asset Kit Delivery', desc: 'Compiling all vector formats and documentation.' }
      ],
      technologies: ['Adobe Illustrator', 'Photoshop', 'Blender 3D', 'Figma'],
      whyChoose: ['100% Original, copyright-protected designs', 'Versatile vector files that never lose quality', 'Created by award-winning visual designers']
    },
    'youtube-videos': {
      id: 'youtube-videos',
      number: '08',
      title: 'YouTube Videos & Production',
      badge: 'Video Authority & Long-Form Content',
      category: 'Video Production & YouTube SEO',
      icon: PlaySquare,
      color: 'text-[var(--brand-orange)]',
      accentBg: 'bg-[var(--brand-orange)]/10',
      image: './services/service-youtube-videos.jpg',
      imageBadge: '4K Story-Driven Video Editing & High-CTR 3D Thumbnails',
      tagline: 'Enhance your online presence and reach a wider audience with professional YouTube videos.',
      overview: 'YouTube is the second largest search engine in the world. We provide complete YouTube production services for creators and businesses — from script structure and pacing to multi-cam 4K editing, high-CTR 3D thumbnails, and YouTube SEO that ranks your videos for compounding search views.',
      metrics: '+280% Watch Time',
      metricDetail: 'High CTR Thumbs',
      timeline: 'Weekly Episodes',
      startingPrice: 'Per Video / Channel Retainer',
      deliverables: [
        { title: 'Story-Driven 4K Video Editing', desc: 'Dynamic pacing, custom B-roll, animations, and cinematic background scoring.' },
        { title: 'High-CTR 3D Thumbnail Design', desc: 'Click-through optimized thumbnails with custom face cutout editing and bold typography.' },
        { title: 'YouTube SEO & Description Optimization', desc: 'Keyword-rich titles, timestamps, tags, and chapter links for YouTube Search ranking.' },
        { title: 'Intro & Outro Animation Packages', desc: 'Branded 3D channel bumpers, subscribe animations, and end-screen layouts.' }
      ],
      process: [
        { step: '01', title: 'Content Outline & SEO', desc: 'Topic keyword research and video script pacing.' },
        { step: '02', title: 'Rough Cut & Pacing', desc: 'Assembling footage and removing pauses for maximum engagement.' },
        { step: '03', title: 'VFX, Graphics & Sound', desc: 'Adding lower thirds, sound effects, B-roll, and color correction.' },
        { step: '04', title: 'Thumbnail & Upload Optimization', desc: 'Designing A/B testable thumbnails and optimizing SEO metadata.' }
      ],
      technologies: ['Adobe Premiere Pro', 'After Effects', 'Photoshop', 'TubeBuddy / VidIQ'],
      whyChoose: ['Dramatic boost in average percentage viewed (APV)', 'High click-through rates on suggested and browse features', 'Turnkey solution allowing you to focus purely on recording']
    },
    'google-ads': {
      id: 'google-ads',
      number: '09',
      title: 'Google Ads (Search & PPC)',
      badge: 'High-Intent Inbound Leads',
      category: 'Performance PPC Advertising',
      icon: Target,
      color: 'text-[var(--primary-blue)]',
      accentBg: 'bg-[var(--primary-blue)]/10',
      image: './services/service-google-ads.jpg',
      imageBadge: 'High-Intent Google Search, Maps & Performance Max Campaigns',
      tagline: 'Maximize your online visibility and drive targeted traffic to your website with effective Google Ads campaigns.',
      overview: 'Capture customers at the exact second they are searching for your service on Google. We architect high-converting Google Search, Performance Max, and Google Maps ad campaigns with negative keyword filtering, high Quality Scores, and optimized landing pages to guarantee the lowest cost per qualified lead.',
      metrics: '4.5x Avg ROAS',
      metricDetail: 'Instant Lead Flow',
      timeline: 'Campaign Launch in 48h',
      startingPrice: 'Performance Based',
      deliverables: [
        { title: 'High-Intent Keyword Architecture', desc: 'Targeting commercial-intent buyer search terms with high purchase probability.' },
        { title: 'Negative Keyword Filtering', desc: 'Aggressive negative keyword lists to prevent wasted clicks from irrelevant traffic.' },
        { title: 'Google Maps Local Pack Ad Extension', desc: 'Promoting your location at the top of Google Maps to generate immediate phone calls.' },
        { title: 'Conversion Tracking & ROAS Attribution', desc: 'End-to-end tracking of phone calls, form fills, and actual closed revenue.' }
      ],
      process: [
        { step: '01', title: 'Competitor PPC Audit', desc: 'Analyzing competitor bids, keywords, and copy angles.' },
        { step: '02', title: 'Campaign Setup', desc: 'Configuring ad groups, responsive search ads, and call extensions.' },
        { step: '03', title: 'Negative Bidding & Quality Score', desc: 'Optimizing ad copy and landing page relevance to lower CPC.' },
        { step: '04', title: 'Scaling Profitable Keywords', desc: 'Allocating budget strictly to top-converting terms.' }
      ],
      technologies: ['Google Ads', 'Google Keyword Planner', 'Google Tag Manager', 'SpyFu', 'CallRail'],
      whyChoose: ['Immediate #1 search placement on Day 1', 'Zero budget wasted on accidental or bot clicks', 'Transparent live conversion tracking dashboard']
    },
    'social-ads': {
      id: 'social-ads',
      number: '10',
      title: 'Social Media Ads (Meta & WhatsApp)',
      badge: 'Direct Response Advertising',
      category: 'Meta & WhatsApp Ads',
      icon: MessageCircle,
      color: 'text-[var(--brand-orange)]',
      accentBg: 'bg-[var(--brand-orange)]/10',
      image: './services/service-social-ads.jpg',
      imageBadge: 'High-Converting Meta Ads & Direct WhatsApp Click-to-Chat Funnels',
      tagline: 'Amplify your brand’s reach and engagement with strategic advertising on Facebook, Instagram, and WhatsApp.',
      overview: 'Transform cold scrollers into hot inbound leads and customers. We run precision Facebook and Instagram ad campaigns paired with instant WhatsApp click-to-chat funnels. With high-converting video creatives, psychological offer hooks, and dynamic retargeting, we scale your revenue profitably with industry-leading ROAS.',
      metrics: '3.8x+ ROAS',
      metricDetail: 'Direct WhatsApp Leads',
      timeline: 'Campaign Launch in 72h',
      startingPrice: 'Performance Based',
      deliverables: [
        { title: 'Direct-Response Ad Creatives', desc: 'High-converting video and carousel ad creatives tested for lowest cost per lead.' },
        { title: 'WhatsApp Click-to-Chat Funnels', desc: 'Sending high-intent buyers straight into your WhatsApp with pre-filled inquiries.' },
        { title: 'Lookalike & Custom Audience Targeting', desc: 'Targeting verified buyer profiles based on location, age, income, and behaviors.' },
        { title: 'Dynamic Retargeting Sequences', desc: 'Re-engaging visitors who visited your website or Instagram profile without buying.' }
      ],
      process: [
        { step: '01', title: 'Audience & Offer Strategy', desc: 'Formulating an irresistible offer and audience avatar.' },
        { step: '02', title: 'Creative Production & Copywriting', desc: 'Designing thumb-stopping video and image creatives.' },
        { step: '03', title: 'Campaign Launch & Split-Testing', desc: 'Testing multiple hooks, headlines, and audience angles.' },
        { step: '04', title: 'Aggressive Scaling', desc: 'Ramping ad spend on winning combinations with high ROAS.' }
      ],
      technologies: ['Meta Ads Manager', 'Facebook Pixel', 'Conversions API', 'WhatsApp Business API'],
      whyChoose: ['Lowest cost per lead in the industry', 'Instant WhatsApp leads ready to talk and buy', '100% transparent live attribution reporting']
    },
  };

  const current = serviceData[serviceId] || serviceData['web-dev'];
  const CurrentIcon = current.icon;

  const allServicesList = [
    { id: 'web-dev', title: 'Website Dev', number: '01', icon: Globe },
    { id: 'software-dev', title: 'Software & App', number: '02', icon: Code2 },
    { id: 'digital-marketing', title: 'Digital Marketing', number: '03', icon: TrendingUp },
    { id: 'social-media', title: 'Social Media', number: '04', icon: Users },
    { id: 'posters', title: 'Posters & Media', number: '05', icon: Layout },
    { id: 'short-reels', title: 'Shorts & Reels', number: '06', icon: Film },
    { id: 'graphics-logo', title: 'Graphics & Logo', number: '07', icon: Palette },
    { id: 'youtube-videos', title: 'YouTube Videos', number: '08', icon: PlaySquare },
    { id: 'google-ads', title: 'Google Ads', number: '09', icon: Target },
    { id: 'social-ads', title: 'Meta & WhatsApp Ads', number: '10', icon: MessageCircle },
  ];

  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans selection:bg-[var(--brand-orange)] selection:text-white relative">
      
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
            <span className="text-[#0A1F6B] font-bold">{current.title}</span>
          </div>

          {/* Right Action CTA */}
          <div className="flex items-center gap-2.5 sm:gap-3">
            <a 
              href="tel:+918303534063" 
              className="hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-slate-800 text-xs font-bold hover:bg-slate-200 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[var(--brand-orange)]" />
              <span className="font-mono">+91 83035 34063</span>
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

      <main className="flex-grow">
      {/* ========================================================================= */}
      {/* 2. DEDICATED HERO BANNER FOR THE SERVICE (PREMIUM WHITE PALETTE)          */}
      {/* ========================================================================= */}
      <section className="relative pt-12 pb-16 md:pt-16 md:pb-24 overflow-hidden bg-gradient-to-b from-[#FAFBFF] via-white to-[#F4F7FF] border-b border-slate-200/90 text-slate-800">
        
        {/* Ambient Brand Glow Orbs */}
        <div className="absolute top-10 left-1/4 w-96 h-96 bg-[var(--cyan-accent)]/5 rounded-full blur-[140px] pointer-events-none z-0" />
        <div className="absolute top-20 right-10 w-96 h-96 bg-[var(--brand-orange)]/5 rounded-full blur-[140px] pointer-events-none z-0" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Category Pill with Glowing Beacon */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[var(--primary-blue)]/10 border border-[var(--primary-blue)]/20 text-xs font-heading font-bold tracking-wider uppercase mb-5 shadow-xs">
            <span className="w-2 h-2 rounded-full bg-[var(--brand-orange)] animate-ping" />
            <span className="text-[#0A1F6B]">{current.category}</span>
            <span className="text-slate-400">•</span>
            <span className="text-slate-600">Service {current.number} of 10</span>
          </div>

          {/* Big H1 Title with Brand Accent */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-slate-200/90">
            <div className="max-w-3xl space-y-3">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold tracking-tight text-[#0A1F6B] leading-[1.1]">
                {current.title}
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-slate-600 font-normal leading-relaxed">
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
                className="btn-secondary w-full text-center py-3 px-6 font-bold flex items-center justify-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-200"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Explore All Services</span>
              </button>
            </div>
          </div>

          {/* Quick Metrics & Specs Grid (4 Cards) */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 pt-8">
            <div className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-sm space-y-1">
              <div className="flex items-center gap-2 text-xs font-mono text-[var(--primary-blue)] font-semibold">
                <Clock className="w-3.5 h-3.5" />
                <span>TIMELINE</span>
              </div>
              <div className="text-lg sm:text-xl font-heading font-bold text-[#0A1F6B]">{current.timeline}</div>
              <div className="text-[11px] text-slate-500">Rapid deployment sprints</div>
            </div>

            <div className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-sm space-y-1">
              <div className="flex items-center gap-2 text-xs font-mono text-[var(--brand-orange)] font-semibold">
                <CreditCard className="w-3.5 h-3.5" />
                <span>PRICING MODEL</span>
              </div>
              <div className="text-lg sm:text-xl font-heading font-bold text-[#0A1F6B]">{current.startingPrice}</div>
              <div className="text-[11px] text-slate-500">Milestone & ROI-based</div>
            </div>

            <div className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-sm space-y-1">
              <div className="flex items-center gap-2 text-xs font-mono text-emerald-600 font-semibold">
                <TrendingUp className="w-3.5 h-3.5" />
                <span>BENCHMARK</span>
              </div>
              <div className="text-lg sm:text-xl font-heading font-bold text-[#0A1F6B]">{current.metrics}</div>
              <div className="text-[11px] text-slate-500">{current.metricDetail}</div>
            </div>

            <div className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-sm space-y-1">
              <div className="flex items-center gap-2 text-xs font-mono text-indigo-600 font-semibold">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>GUARANTEE</span>
              </div>
              <div className="text-lg sm:text-xl font-heading font-bold text-[#0A1F6B]">100% IP Ownership</div>
              <div className="text-[11px] text-slate-500">Zero vendor lock-in</div>
            </div>
          </div>

          {/* Visual Service Showcase Banner (High-Resolution Visual Context) */}
          {current.image && (
            <div className="pt-8">
              <div className="relative rounded-3xl overflow-hidden border border-[var(--cyan-accent)]/40 shadow-2xl bg-slate-900 aspect-[16/9] sm:aspect-[21/9] max-h-[480px] group">
                <img 
                  src={current.image} 
                  alt={`${current.title} Service Showcase - Click On Media Gorakhpur`} 
                  className="w-full h-full object-cover object-center group-hover:scale-[1.01] transition-transform duration-700" 
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#06123D]/85 via-[#06123D]/20 to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 flex items-center gap-2">
                  <span className="px-3.5 py-1.5 rounded-full bg-[#06123D]/90 backdrop-blur-md border border-[var(--cyan-accent)]/50 text-xs font-bold text-white shadow-lg flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[var(--brand-orange)] animate-pulse" />
                    <span>{current.imageBadge || `Verified Showcase: ${current.title} • Click On Media`}</span>
                  </span>
                </div>
              </div>
            </div>
          )}

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
              href="tel:+918303534063"
              className="btn-secondary text-sm sm:text-base !py-4 !px-8 font-bold flex items-center gap-2 w-full sm:w-auto justify-center"
            >
              <Phone className="w-4 h-4 text-[var(--brand-orange)]" />
              <span>Direct Call: +91 83035 34063</span>
            </a>
          </div>

        </div>
      </section>
      </main>

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

