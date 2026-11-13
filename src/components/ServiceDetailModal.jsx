import React from 'react';
import { X, CheckCircle2, ArrowRight } from 'lucide-react';

export default function ServiceDetailModal({ serviceId, onClose, onOpenQuoteWithService }) {
  if (!serviceId) return null;

  const serviceData = {
    'web-dev': {
      title: 'Website Development',
      badge: 'High Performance & Conversion',
      tagline: 'Modern, responsive and high-performing websites.',
      overview: 'Your website is the single most critical asset of your digital presence. At Click On Media, we build fast, scalable, conversion-focused websites engineered with modern web technologies that rank higher, load in sub-second times, and transform visitors into paying customers.',
      deliverables: [
        'Custom UX/UI Responsive Layouts',
        'Headless CMS or WordPress Architecture',
        'Mobile-First & Cross-Browser Precision',
        'Core Web Vitals & 95+ PageSpeed Score',
        'Built-In SEO & OpenGraph Schemas',
        'Conversion Tracking & Analytics Setups'
      ],
      technologies: ['React', 'Next.js', 'Tailwind CSS', 'TypeScript', 'Node.js', 'WordPress', 'Shopify'],
      timeline: '2 to 5 Weeks',
      startingPrice: 'Tailored for scale'
    },
    'software-dev': {
      title: 'Software & App Development',
      badge: 'Scalable Enterprise Solutions',
      tagline: 'Custom software and business applications.',
      overview: 'From internal automation tools and SaaS platforms to native and cross-platform mobile apps, we design and build robust software products with clean architecture, fault-tolerant infrastructure, and intuitive user experiences.',
      deliverables: [
        'iOS & Android Cross-Platform Apps',
        'Full-Stack Cloud SaaS Platforms',
        'Microservices & Custom REST/GraphQL APIs',
        'Automated CI/CD Deployment Pipelines',
        'Database Architecture & Scalability',
        'Enterprise Security & Role-Based Auth'
      ],
      technologies: ['React Native', 'Flutter', 'Python', 'Node.js', 'PostgreSQL', 'Docker', 'AWS / GCP'],
      timeline: '4 to 12 Weeks',
      startingPrice: 'Custom Sprint Architecture'
    },
    'marketing': {
      title: 'Digital Marketing',
      badge: 'ROI & Data Driven Growth',
      tagline: 'Data-driven campaigns that bring real results.',
      overview: 'We craft and execute performance marketing campaigns that consistently generate high-intent leads and sales. We combine predictive data analytics, continuous A/B testing, and compelling ad creative to maximize your return on ad spend (ROAS).',
      deliverables: [
        'Google Search, Display & Performance Max Ads',
        'Meta (Facebook & Instagram) Funnel Strategy',
        'LinkedIn B2B Account-Based Marketing',
        'High-Converting Landing Page Optimization',
        'Retargeting & Audience Segmentation',
        'Weekly Transparent Attribution Reports'
      ],
      technologies: ['Google Ads', 'Meta Ads Manager', 'Google Analytics 4', 'HubSpot', 'Looker Studio'],
      timeline: 'Monthly Rolling Growth Sprint',
      startingPrice: 'Performance Based'
    },
    'seo': {
      title: 'SEO & Performance',
      badge: 'Compounding Organic Dominance',
      tagline: 'Rank higher, get traffic and more customers.',
      overview: 'Organic search delivers the highest lifetime value customers. Our technical and semantic SEO strategies ensure your website claims page-one rankings for high-intent keywords in your industry, driving a non-stop influx of qualified leads.',
      deliverables: [
        'Comprehensive 100+ Point Technical SEO Audit',
        'High-Intent Commercial Keyword Mapping',
        'Competitor Gap & Opportunity Matrix',
        'On-Page Semantic & Content Optimization',
        'Authoritative White-Hat Backlink Building',
        'Local SEO & Google Business Profile Domination'
      ],
      technologies: ['Ahrefs', 'Semrush', 'Google Search Console', 'Screaming Frog', 'Schema.org'],
      timeline: '3 to 6 Month Ramp Up',
      startingPrice: 'Retainer & Sprint Packages'
    },
    'branding': {
      title: 'Branding & Creative',
      badge: 'Memorable Brand Identities',
      tagline: 'Build a unique and memorable brand.',
      overview: 'Stand out in a crowded market with a distinct visual and emotional identity. We craft everything from logo systems and typography palettes to brand voice guidelines and brand collateral that resonate deeply with your target audience.',
      deliverables: [
        'Primary & Secondary Logo Architecture',
        'Comprehensive Brand Guideline Deck',
        'Color Palettes, Typography & Iconography',
        'Corporate Stationery & Business Collateral',
        'Social Media Kit & Presentation Decks',
        'Packaging & Print Ready Vectors'
      ],
      technologies: ['Figma', 'Adobe Illustrator', 'Photoshop', 'After Effects', 'InDesign'],
      timeline: '2 to 4 Weeks',
      startingPrice: 'Fixed Scope Milestone'
    },
    'content': {
      title: 'Content Creation',
      badge: 'Storytelling & High Engagement',
      tagline: 'High-quality content, reels, videos and more.',
      overview: 'Content is how brands earn trust and attention. We script, produce, and edit thumb-stopping vertical reels, YouTube videos, podcast clips, and thought leadership articles that build massive social followings and convert viewers into fans.',
      deliverables: [
        'Viral Instagram Reels & TikTok Shorts',
        'Brand Commercials & Explainer Videos',
        'Conversion-Focused Copywriting',
        'Motion Graphics & 3D Product Renders',
        'High-Resolution Photography & Mockups',
        'Monthly Content Editorial Calendar'
      ],
      technologies: ['Premiere Pro', 'DaVinci Resolve', 'After Effects', 'Blender', 'Cinema 4D'],
      timeline: 'Weekly / Bi-Weekly Deliveries',
      startingPrice: 'Monthly Content Retainer'
    }
  };

  const current = serviceData[serviceId] || serviceData['web-dev'];

  return (
    <div 
      className="fixed inset-0 z-50 overflow-y-auto bg-black/75 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="service-modal-title"
    >
      <div 
        className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header with Exact Brand Palette */}
        <div className="bg-[var(--deep-navy)] px-6 sm:px-8 py-6 text-white flex items-center justify-between border-b border-[var(--cyan-accent)]/20">
          <div>
            <span className="text-[10px] font-heading font-bold uppercase tracking-widest text-[var(--brand-orange)]">
              {current.badge}
            </span>
            <h3 id="service-modal-title" className="text-xl sm:text-2xl font-heading font-extrabold text-white mt-1">
              {current.title}
            </h3>
          </div>
          <button
            onClick={onClose}
            aria-label="Close service details modal"
            className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white flex items-center justify-center transition-all cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[75vh] overflow-y-auto">
          <div>
            <h4 className="text-xs font-heading font-bold uppercase tracking-wider text-[var(--deep-navy)] mb-2">Overview</h4>
            <p className="text-[var(--text-dark)] text-sm sm:text-base leading-relaxed">
              {current.overview}
            </p>
          </div>

          {/* Key Deliverables */}
          <div>
            <h4 className="text-xs font-heading font-bold uppercase tracking-wider text-[var(--deep-navy)] mb-3">Key Deliverables Included</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {current.deliverables.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[var(--text-dark)] p-3 rounded-xl bg-[var(--bg-soft)] border border-slate-100">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack & Tools */}
          <div>
            <h4 className="text-xs font-heading font-bold uppercase tracking-wider text-[var(--deep-navy)] mb-2">Technologies & Tooling</h4>
            <div className="flex flex-wrap gap-2">
              {current.technologies.map((t, idx) => (
                <span key={idx} className="px-3 py-1 rounded-full bg-[var(--primary-blue)]/10 border border-[var(--primary-blue)]/20 text-[var(--primary-blue)] text-xs font-semibold">
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Specs Bar */}
          <div className="flex items-center justify-between p-4 rounded-2xl bg-[var(--bg-soft)] border border-[var(--brand-orange)]/30 text-xs sm:text-sm">
            <div>
              <span className="text-[var(--text-muted)] block text-[11px] font-semibold">Typical Delivery Window:</span>
              <span className="font-heading font-extrabold text-[var(--deep-navy)]">{current.timeline}</span>
            </div>
            <div className="text-right">
              <span className="text-[var(--text-muted)] block text-[11px] font-semibold">Pricing Model:</span>
              <span className="font-heading font-extrabold text-[var(--brand-orange)]">{current.startingPrice}</span>
            </div>
          </div>

          {/* Action CTA */}
          <div className="pt-2">
            <button
              onClick={() => {
                onClose();
                onOpenQuoteWithService(current.title);
              }}
              className="btn-primary w-full py-4 min-h-[48px] rounded-full text-white font-heading font-extrabold text-sm sm:text-base shadow-lg shadow-[var(--brand-orange)]/30 flex items-center justify-center gap-2 transition-all cursor-pointer"
            >
              <span>Request Quote for {current.title}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
