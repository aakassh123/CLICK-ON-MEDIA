import React, { useState, useEffect, lazy, Suspense } from 'react';
import { Volume2, VolumeX, X, Play } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ClientLogos from './components/ClientLogos';
import Services from './components/Services';
import AboutUs from './components/AboutUs';
import OurWork from './components/OurWork';
import CtaBanner from './components/CtaBanner';
import Footer from './components/Footer';

// Yes Madam Inspired High-Converting Sections
import TransparencyComparison from './components/TransparencyComparison';
import ClientVideoShowcase from './components/ClientVideoShowcase';
import Testimonials from './components/Testimonials';
import MobileQuickBar from './components/MobileQuickBar';
import GlobalScrollVideo from './components/GlobalScrollVideo';
import LocalAuthoritySection from './components/LocalAuthoritySection';

// Lazy Loaded Secondary Full-Page Views (Code Split to Reduce Initial Bundle Size)
const ServiceDetailPage = lazy(() => import('./components/ServiceDetailPage'));
const ServiceTypeDetailPage = lazy(() => import('./components/ServiceTypeDetailPage'));
const ProjectDetailPage = lazy(() => import('./components/ProjectDetailPage'));
const QuotePage = lazy(() => import('./components/QuotePage'));
const PortfolioPage = lazy(() => import('./components/PortfolioPage'));

// Lazy Loaded Interactive Overlays
const ConsultationModal = lazy(() => import('./components/ConsultationModal'));
const VideoModal = lazy(() => import('./components/VideoModal'));
import RobotCursor from './components/RobotCursor';

// SEO Metadata Matrix: All Titles < 60 chars, All Descriptions < 155 chars, 100% Crawlable Canonicals (Zero Hashes)
const SEO_METADATA = {
  default: {
    title: 'Best Digital Marketing Agency in Gorakhpur | Click On Media',
    description: "Click On Media is Gorakhpur's #1 digital marketing agency & website development company. Top SEO, software, Google Ads, reels & guaranteed ROI in UP.",
    canonical: 'https://clickonmedia.in/'
  },
  'local-seo-hub': {
    title: 'Top Digital Marketing & SEO Agency in Gorakhpur, UP',
    description: "Gorakhpur's #1 digital marketing, SEO, web & software agency in Mohaddipur. Ranked 4.9/5 by 150+ UP brands. Book your free strategy audit.",
    canonical: 'https://clickonmedia.in/'
  },
  'services': {
    title: 'Digital Marketing & Web Services | Click On Media',
    description: 'Explore our 10 flagship digital solutions in Gorakhpur: website development, software apps, SEO, Meta & Google ads, and video production.',
    canonical: 'https://clickonmedia.in/'
  },
  'work': {
    title: 'Our Work & Case Studies | Click On Media Gorakhpur',
    description: 'Explore verified client case studies, digital transformations, and growth benchmarks delivered by Click On Media across India.',
    canonical: 'https://clickonmedia.in/'
  },
  'about': {
    title: 'About Click On Media | Top Digital Agency Gorakhpur',
    description: "Learn about Click On Media's mission, leadership, and track record of delivering 150+ high-ROI digital projects across Uttar Pradesh and India.",
    canonical: 'https://clickonmedia.in/'
  },
  'quote': {
    title: 'Get a Free Quote & Strategy Call | Click On Media',
    description: 'Ready to scale your business? Request a transparent quote and receive a custom roadmap and proposal from our strategists within 24 hours.',
    canonical: 'https://clickonmedia.in/quote'
  },
  'portfolio': {
    title: 'Portfolio & Client Case Studies | Click On Media Gorakhpur',
    description: 'Explore 20+ verified client case studies, live web apps, viral reels, and custom software delivered by Click On Media across UP and India.',
    canonical: 'https://clickonmedia.in/portfolio'
  },
  'service/social-media': {
    title: 'Social Media Marketing in Gorakhpur | Click On Media',
    description: 'Grow your brand reach on Instagram, Facebook & LinkedIn. Daily aesthetic feeds, reels, viral trends, and verified local follower growth in UP.',
    canonical: 'https://clickonmedia.in/services/social-media'
  },
  'service/web-dev': {
    title: 'Website Development in Gorakhpur | Click On Media',
    description: 'Fast, modern React & Next.js websites built for businesses in Gorakhpur. 0.6s page loads, mobile-first UX, and high conversion funnels.',
    canonical: 'https://clickonmedia.in/services/web-dev'
  },
  'service/whatsapp-bulk': {
    title: 'WhatsApp Bulk Messaging in Gorakhpur | Click On Media',
    description: 'Official WhatsApp Business API bulk broadcasting, 98% open rates, automated customer inquiry funnels, and high-conversion retargeting.',
    canonical: 'https://clickonmedia.in/services/whatsapp-bulk'
  },
  'service/graphics': {
    title: 'Graphics Designing & Branding Gorakhpur | Click On Media',
    description: 'Iconic 3D and 2D logo suites, promotional festival posters, digital hoardings, menus, and corporate brand stationery packages.',
    canonical: 'https://clickonmedia.in/services/graphics'
  },
  'service/video-editing': {
    title: 'Video Editing & Reels Production Gorakhpur | Click On Media',
    description: 'Thumb-stopping 9:16 Instagram Reels, YouTube 4K multi-cam editing, cinematic brand commercials, sound design, and retention pacing.',
    canonical: 'https://clickonmedia.in/services/video-editing'
  },
  'service/seo': {
    title: 'Top SEO & Google My Business Company Gorakhpur | Click On Media',
    description: 'Dominate Google search results and #1 Map Pack rankings with technical SEO audits, high-intent local keywords, and citation building.',
    canonical: 'https://clickonmedia.in/services/seo'
  },
  'service/ads': {
    title: 'Google Ads & Meta Paid Advertising Gorakhpur | Click On Media',
    description: 'High-ROAS Google Search, YouTube, Instagram & Facebook ads paired with direct WhatsApp click-to-chat buyer conversion funnels.',
    canonical: 'https://clickonmedia.in/services/ads'
  },
  'service/software-dev': {
    title: 'Custom Software & Mobile App Development | Click On Media',
    description: 'Custom cloud SaaS platforms, business automation systems, inventory management, and cross-platform iOS & Android mobile apps.',
    canonical: 'https://clickonmedia.in/services/software-dev'
  },
  'service/crm': {
    title: 'CRM Software & Sales Automation Gorakhpur | Click On Media',
    description: 'End-to-end customer relationship management setup, automated sales pipelines, WhatsApp lead routing, and customer lifecycle tracking.',
    canonical: 'https://clickonmedia.in/services/crm'
  },
  'service/monetization': {
    title: 'Digital Asset Monetization Service & Growth | Click On Media',
    description: 'Strategic YouTube AdSense revenue maximization, Meta creator bonuses, sponsor funnels, and passive cashflow optimization for creators.',
    canonical: 'https://clickonmedia.in/services/monetization'
  },
  'service/monetization-service': {
    title: 'Digital Asset Monetization Service & Growth | Click On Media',
    description: 'Strategic YouTube AdSense revenue maximization, Meta creator bonuses, sponsor funnels, and passive cashflow optimization for creators.',
    canonical: 'https://clickonmedia.in/services/monetization'
  }
};

const applyRouteSEO = async (routeKey) => {
  const normalizedKey = (routeKey || '').replace(/^#/, '');
  let meta = SEO_METADATA[normalizedKey] || SEO_METADATA[routeKey];

  // Dynamic Service Resolution (Loaded on Demand)
  if (!meta && normalizedKey && normalizedKey.startsWith('service/')) {
    const sId = normalizedKey.replace('service/', '');
    try {
      const { SERVICES_CATALOG } = await import('./data/servicesCatalog');
      const s = SERVICES_CATALOG[sId];
      if (s) {
        meta = {
          title: `${s.title} in Gorakhpur | Click On Media`,
          description: `${(s.tagline || s.description || '').slice(0, 140)}... Top digital agency in Gorakhpur, UP.`,
          canonical: `https://clickonmedia.in/services/${sId}`
        };
      }
    } catch (_) {}
  }

  // Dynamic Service Type Resolution (Loaded on Demand)
  if (!meta && normalizedKey && normalizedKey.startsWith('type/')) {
    const raw = normalizedKey.replace('type/', '');
    const [sId, tId] = raw.split('/');
    try {
      const { SERVICES_CATALOG } = await import('./data/servicesCatalog');
      const s = SERVICES_CATALOG[sId];
      const t = s?.categories?.find(c => c.id === tId);
      if (t && s) {
        meta = {
          title: `${t.title} | ${s.title} Gorakhpur | Click On Media`,
          description: `${(t.explanation || '').slice(0, 140)}... Delivered by Click On Media Gorakhpur.`,
          canonical: `https://clickonmedia.in/services/${sId}/${tId}`
        };
      }
    } catch (_) {}
  }

  // Dynamic Project / Case Study Resolution (Loaded on Demand)
  if (!meta && normalizedKey && normalizedKey.startsWith('project/')) {
    const pId = normalizedKey.replace('project/', '');
    try {
      const { PROJECTS_DATA } = await import('./data/projectsData');
      const p = PROJECTS_DATA[pId];
      if (p) {
        meta = {
          title: `${p.title} Case Study | Click On Media Gorakhpur`,
          description: `${(p.summary || p.description || '').slice(0, 140)}... Verified ROI results by Click On Media.`,
          canonical: `https://clickonmedia.in/projects/${pId}`
        };
      }
    } catch (_) {}
  }

  if (!meta) {
    meta = SEO_METADATA.default;
  }

  if (typeof document !== 'undefined') {
    document.title = meta.title;

    const setMeta = (name, content) => {
      let el = document.querySelector(`meta[name="${name}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute('name', name);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    const setOgMeta = (property, content) => {
      let el = document.querySelector(`meta[property="${property}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute('property', property);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    setMeta('description', meta.description);
    setOgMeta('og:title', meta.title);
    setOgMeta('og:description', meta.description);
    setOgMeta('og:url', meta.canonical);
    setOgMeta('twitter:title', meta.title);
    setOgMeta('twitter:description', meta.description);
    setOgMeta('twitter:url', meta.canonical);

    let canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      canonical.setAttribute('href', meta.canonical);
    }
  }
};

export default function App() {
  const [isQuotePage, setIsQuotePage] = useState(false);
  const [isPortfolioPage, setIsPortfolioPage] = useState(false);
  const [portfolioCategoryFilter, setPortfolioCategoryFilter] = useState('all');
  const [portfolioReturnView, setPortfolioReturnView] = useState('home');
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const [selectedServiceId, setSelectedServiceId] = useState(null);
  const [initialTypeId, setInitialTypeId] = useState(null);
  const [selectedTypeRoute, setSelectedTypeRoute] = useState(null); // { serviceId, typeId }
  const [selectedProjectId, setSelectedProjectId] = useState(null);
  const [preselectedQuoteService, setPreselectedQuoteService] = useState('');

  // Synchronize clean URL pathnames + hash anchors with dedicated pages, SEO metadata & browser back/forward history
  useEffect(() => {
    const handleRouteChange = () => {
      const pathname = window.location.pathname.replace(/\/$/, '') || '/';
      const hash = window.location.hash || '';
      const search = window.location.search || '';

      // 1. Quote Page
      if (pathname === '/quote' || hash === '#quote') {
        setIsQuotePage(true);
        setIsPortfolioPage(false);
        setSelectedServiceId(null);
        setInitialTypeId(null);
        setSelectedTypeRoute(null);
        setSelectedProjectId(null);
        applyRouteSEO('quote');
        return;
      }

      // 2. Portfolio Page (with optional ?cat= query or #portfolio?cat=)
      if (pathname === '/portfolio' || hash === '#portfolio' || hash.startsWith('#portfolio')) {
        setIsPortfolioPage(true);
        setIsQuotePage(false);
        setSelectedServiceId(null);
        setInitialTypeId(null);
        setSelectedTypeRoute(null);
        setSelectedProjectId(null);

        const params = new URLSearchParams(search || hash.split('?')[1] || '');
        const cat = params.get('cat') || 'all';
        setPortfolioCategoryFilter(cat);
        applyRouteSEO('portfolio');
        return;
      }

      // 3. Service Type Sub-category Detail: /services/:serviceId/:typeId
      if (pathname.startsWith('/services/') || hash.startsWith('#service-type/') || hash.startsWith('#type/')) {
        let raw = '';
        if (pathname.startsWith('/services/')) {
          raw = pathname.replace('/services/', '');
        } else if (hash.startsWith('#service-type/')) {
          raw = hash.replace('#service-type/', '');
        } else {
          raw = hash.replace('#type/', '');
        }

        const parts = raw.split('/');
        if (parts.length >= 2 && parts[1]) {
          const [sId, tId] = parts;
          setSelectedServiceId(sId);
          setInitialTypeId(tId);
          setSelectedTypeRoute(null);
          setSelectedProjectId(null);
          setIsQuotePage(false);
          setIsPortfolioPage(false);
          applyRouteSEO(`type/${sId}/${tId}`);
          return;
        } else if (parts.length === 1 && parts[0]) {
          const sId = parts[0];
          setSelectedServiceId(sId);
          setInitialTypeId(null);
          setSelectedTypeRoute(null);
          setSelectedProjectId(null);
          setIsQuotePage(false);
          setIsPortfolioPage(false);
          applyRouteSEO(`service/${sId}`);
          return;
        }
      }

      // 4. Legacy Hash Service: #service/:id
      if (hash.startsWith('#service/')) {
        const sId = hash.replace('#service/', '');
        setSelectedServiceId(sId);
        setInitialTypeId(null);
        setSelectedTypeRoute(null);
        setSelectedProjectId(null);
        setIsQuotePage(false);
        setIsPortfolioPage(false);
        applyRouteSEO(`service/${sId}`);
        return;
      }

      // 5. Case Study / Project Detail: /projects/:id or #project/:id
      if (pathname.startsWith('/projects/') || hash.startsWith('#project/')) {
        const pId = pathname.startsWith('/projects/') ? pathname.replace('/projects/', '') : hash.replace('#project/', '');
        setSelectedProjectId(pId);
        setSelectedServiceId(null);
        setInitialTypeId(null);
        setSelectedTypeRoute(null);
        setIsQuotePage(false);
        setIsPortfolioPage(false);
        applyRouteSEO(`project/${pId}`);
        return;
      }

      // 6. Homepage & Section Anchors
      setIsQuotePage(false);
      setIsPortfolioPage(false);
      setSelectedServiceId(null);
      setInitialTypeId(null);
      setSelectedTypeRoute(null);
      setSelectedProjectId(null);
      applyRouteSEO(hash || 'default');

      // If an anchor was targeted on home, scroll to it smoothly
      if (hash && hash !== '#home') {
        const targetEl = document.querySelector(hash);
        if (targetEl) {
          setTimeout(() => {
            targetEl.scrollIntoView({ behavior: 'smooth' });
          }, 60);
        }
      }
    };

    handleRouteChange();
    window.addEventListener('popstate', handleRouteChange);
    window.addEventListener('hashchange', handleRouteChange);
    return () => {
      window.removeEventListener('popstate', handleRouteChange);
      window.removeEventListener('hashchange', handleRouteChange);
    };
  }, []);

  const handleOpenPortfolio = (category = 'all') => {
    setIsQuotePage(false);
    setSelectedServiceId(null);
    setInitialTypeId(null);
    setSelectedTypeRoute(null);
    setSelectedProjectId(null);
    setPortfolioCategoryFilter(category || 'all');
    setIsPortfolioPage(true);
    const targetUrl = category && category !== 'all' ? `/portfolio?cat=${encodeURIComponent(category)}` : '/portfolio';
    window.history.pushState(null, '', targetUrl);
    window.scrollTo({ top: 0, behavior: 'instant' });
    applyRouteSEO('portfolio');
  };

  const handleOpenQuote = (serviceName = '') => {
    setPreselectedQuoteService(serviceName);
    setSelectedServiceId(null);
    setInitialTypeId(null);
    setSelectedTypeRoute(null);
    setSelectedProjectId(null);
    setIsPortfolioPage(false);
    setIsQuotePage(true);
    window.history.pushState(null, '', '/quote');
    window.scrollTo({ top: 0, behavior: 'smooth' });
    applyRouteSEO('quote');
  };

  const handleSelectService = (id) => {
    setIsQuotePage(false);
    setIsPortfolioPage(false);
    setSelectedProjectId(null);
    setSelectedTypeRoute(null);
    setInitialTypeId(null);
    setSelectedServiceId(id);
    window.history.pushState(null, '', `/services/${id}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    applyRouteSEO(`service/${id}`);
  };

  const handleSelectType = (serviceId, typeId) => {
    setIsQuotePage(false);
    setIsPortfolioPage(false);
    setSelectedProjectId(null);
    setSelectedTypeRoute(null);
    setSelectedServiceId(serviceId);
    setInitialTypeId(typeId);
    window.history.pushState(null, '', `/services/${serviceId}/${typeId}`);
    applyRouteSEO(`type/${serviceId}/${typeId}`);
  };

  const handleBackToService = (serviceId) => {
    setSelectedTypeRoute(null);
    handleSelectService(serviceId);
  };

  const handleSelectProject = (project) => {
    const id = typeof project === 'string' ? project : project?.id;
    if (!id) return;
    setIsQuotePage(false);
    setIsPortfolioPage(false);
    setSelectedServiceId(null);
    setInitialTypeId(null);
    setSelectedTypeRoute(null);
    setSelectedProjectId(id);
    window.history.pushState(null, '', `/projects/${id}`);
    window.scrollTo({ top: 0, behavior: 'instant' });
    applyRouteSEO(`project/${id}`);
  };

  const handleBackToHome = () => {
    setIsQuotePage(false);
    setIsPortfolioPage(false);
    setSelectedServiceId(null);
    setInitialTypeId(null);
    setSelectedTypeRoute(null);
    setSelectedProjectId(null);
    setPortfolioReturnView('home');
    window.history.pushState(null, '', '/');
    window.scrollTo({ top: 0, behavior: 'smooth' });
    applyRouteSEO('default');
  };

  const handleBackToWork = () => {
    setIsQuotePage(false);
    setIsPortfolioPage(false);
    setSelectedProjectId(null);
    setSelectedServiceId(null);
    setInitialTypeId(null);
    setSelectedTypeRoute(null);
    setPortfolioReturnView('home');
    window.history.pushState(null, '', '/');
    applyRouteSEO('default');
    setTimeout(() => {
      const el = document.getElementById('work');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }, 50);
  };

  const handleBackFromProject = () => {
    if (portfolioReturnView === 'portfolio') {
      handleOpenPortfolio(portfolioCategoryFilter || 'all');
    } else {
      handleBackToWork();
    }
  };

  return (
    <div className="w-full overflow-x-clip bg-white text-[var(--text-dark)] font-sans selection:bg-[var(--brand-orange)] selection:text-white relative m-0 p-0">



      {/* --------------------------------------------------------------------- */}
      {/* MASTER VIEW ROUTING: DEDICATED PAGES VS MAIN HOMEPAGE                 */}
      {/* --------------------------------------------------------------------- */}
      <Suspense fallback={<div className="min-h-screen bg-white flex items-center justify-center"><div className="w-8 h-8 rounded-full border-2 border-[var(--primary-blue)] border-t-[var(--brand-orange)] animate-spin" /></div>}>
        {isQuotePage ? (
          /* Dedicated Full-Page "Start Your Project / Get a Quote" Experience */
          <QuotePage
            onBack={handleBackToHome}
            preselectedService={preselectedQuoteService}
          />
        ) : selectedTypeRoute ? (
          /* Dedicated Full-Page Service Type Detail Page */
          <ServiceTypeDetailPage
            serviceId={selectedTypeRoute.serviceId}
            typeId={selectedTypeRoute.typeId}
            onBackToService={handleBackToService}
            onBackToAllServices={handleBackToHome}
            onSelectType={handleSelectType}
            onOpenQuote={(serviceTitle) => handleOpenQuote(serviceTitle)}
          />
        ) : selectedServiceId ? (
          /* Dedicated Full-Page Service Detail Hub */
          <ServiceDetailPage
            serviceId={selectedServiceId}
            initialTypeId={initialTypeId}
            onBack={handleBackToHome}
            onSelectService={handleSelectService}
            onSelectType={handleSelectType}
            onOpenQuoteWithService={(serviceTitle) => handleOpenQuote(serviceTitle)}
          />
        ) : isPortfolioPage ? (
          /* Dedicated Full-Page Portfolio & Verified Work Archive */
          <PortfolioPage
            initialCategory={portfolioCategoryFilter}
            onBack={handleBackToHome}
            onSelectProject={(project) => {
              setPortfolioReturnView('portfolio');
              handleSelectProject(project);
            }}
            onOpenQuote={(serviceTitle) => handleOpenQuote(serviceTitle)}
          />
        ) : selectedProjectId ? (
          /* Dedicated Full-Page Case Study Hub (No Modals) */
          <ProjectDetailPage
            projectId={selectedProjectId}
            onBack={handleBackFromProject}
            onOpenQuote={(serviceTitle) => handleOpenQuote(serviceTitle)}
            onSelectProject={handleSelectProject}
          />
        ) : (
          /* Complete Main Website */
          <>
            {/* Top Sticky Navigation */}
            <Navbar
              onOpenQuote={() => handleOpenQuote('')}
              onSelectService={handleSelectService}
              onOpenPortfolio={handleOpenPortfolio}
            />

            <main className="flex-grow m-0 p-0 relative">
              {/* Cinematic Scroll-Driven Office Collaboration Video Canvas */}
              <GlobalScrollVideo isVideoModalOpen={isVideoOpen} />

              {/* 1. Hero Section with 3D Showcase & Category Access Hub */}
              <Hero
                onOpenQuote={() => handleOpenQuote('')}
                onOpenVideo={() => setIsVideoOpen(true)}
                onSelectService={handleSelectService}
              />

              {/* 2. Client Logos / "Trusted by growing brands" Section */}
              <ClientLogos />

              {/* 3. "Our Services" Grid with Smart Glass Cards & Bundled Growth Combos */}
              <Services
                onSelectService={handleSelectService}
                onOpenQuote={handleOpenQuote}
              />

              {/* 3.5 Client Video Showcase: Real Stories & Video Proof */}
              <ClientVideoShowcase
                onOpenQuote={handleOpenQuote}
              />

              {/* 4. Yes Madam Inspired: Total Transparency vs Agency Bloat Comparison */}
              <TransparencyComparison
                onOpenQuote={handleOpenQuote}
              />

              {/* 5. "Our Work" Filterable Break & Reveal Showcase */}
              <OurWork
                onSelectProject={handleSelectProject}
                onOpenPortfolio={handleOpenPortfolio}
              />

              {/* 7. Yes Madam Inspired: Verified Client Testimonials & Social Proof */}
              <Testimonials
                onOpenQuote={handleOpenQuote}
              />

              {/* 8. "About Click On Media" Story & Leadership Section */}
              <AboutUs
                onOpenConsultation={() => setIsConsultationOpen(true)}
              />

              {/* 9. Gorakhpur & UP Local SEO Authority & FAQ Hub */}
              <LocalAuthoritySection
                onOpenQuote={handleOpenQuote}
              />

              {/* 10. Bottom High-Conversion CTA Banner */}
              <CtaBanner
                onOpenConsultation={() => setIsConsultationOpen(true)}
              />
            </main>

            {/* 10. Comprehensive Authoritative Footer */}
            <Footer
              onOpenQuote={() => handleOpenQuote('')}
              onSelectService={handleSelectService}
              onOpenPortfolio={handleOpenPortfolio}
            />

            {/* 11. Mobile Sticky Action Bar (Yes Madam Mobile Web Standard) */}
            <MobileQuickBar
              onOpenQuote={handleOpenQuote}
            />
          </>
        )}
      </Suspense>

      {/* Interactive Global Overlays (Loaded on Demand) */}
      <Suspense fallback={null}>
        {isConsultationOpen && (
          <ConsultationModal
            isOpen={isConsultationOpen}
            onClose={() => setIsConsultationOpen(false)}
          />
        )}

        {isVideoOpen && (
          <VideoModal
            isOpen={isVideoOpen}
            onClose={() => setIsVideoOpen(false)}
            onOpenQuote={() => handleOpenQuote('')}
          />
        )}
      </Suspense>

      {/* Interactive Cursor Robot Companion */}
      <RobotCursor />

    </div>
  );
}
