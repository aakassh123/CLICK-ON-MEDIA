import React, { useState, useEffect } from 'react';
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
import Testimonials from './components/Testimonials';
import MobileQuickBar from './components/MobileQuickBar';
import GlobalScrollVideo from './components/GlobalScrollVideo';
import LocalAuthoritySection from './components/LocalAuthoritySection';

// Dedicated Full-Page Views (Clean, Professional, Non-Modal)
import ServiceDetailPage from './components/ServiceDetailPage';
import ServiceTypeDetailPage from './components/ServiceTypeDetailPage';
import ProjectDetailPage from './components/ProjectDetailPage';
import QuotePage from './components/QuotePage';
import { SERVICES_CATALOG } from './data/servicesCatalog';

// Interactive Overlays
import ConsultationModal from './components/ConsultationModal';
import VideoModal from './components/VideoModal';
import RobotCursor from './components/RobotCursor';

// SEO Metadata Matrix: All Titles < 60 chars, All Descriptions < 155 chars
const SEO_METADATA = {
  default: {
    title: 'Best Digital Marketing Agency in Gorakhpur | Click On Media',
    description: "Click On Media is Gorakhpur's #1 digital marketing agency & website development company. Top SEO, software, Google Ads, reels & guaranteed ROI in UP.",
    canonical: 'https://clickonmedia.in/'
  },
  '#local-seo-hub': {
    title: 'Top Digital Marketing & SEO Agency in Gorakhpur, UP',
    description: "Gorakhpur's #1 digital marketing, SEO, web & software agency in Mohaddipur. Ranked 4.9/5 by 150+ UP brands. Book your free strategy audit.",
    canonical: 'https://clickonmedia.in/#local-seo-hub'
  },
  '#services': {
    title: 'Digital Marketing & Web Services | Click On Media',
    description: 'Explore our 10 flagship digital solutions in Gorakhpur: website development, software apps, SEO, Meta & Google ads, and video production.',
    canonical: 'https://clickonmedia.in/#services'
  },
  '#work': {
    title: 'Our Work & Case Studies | Click On Media Gorakhpur',
    description: 'Explore verified client case studies, digital transformations, and growth benchmarks delivered by Click On Media across India.',
    canonical: 'https://clickonmedia.in/#work'
  },
  '#about': {
    title: 'About Click On Media | Top Digital Agency Gorakhpur',
    description: "Learn about Click On Media's mission, leadership, and track record of delivering 150+ high-ROI digital projects across Uttar Pradesh and India.",
    canonical: 'https://clickonmedia.in/#about'
  },
  '#quote': {
    title: 'Get a Free Quote & Strategy Call | Click On Media',
    description: 'Ready to scale your business? Request a transparent quote and receive a custom roadmap and proposal from our strategists within 24 hours.',
    canonical: 'https://clickonmedia.in/#quote'
  },
  'service/web-dev': {
    title: 'Website Development in Gorakhpur | Click On Media',
    description: 'Fast, modern React & Next.js websites built for businesses in Gorakhpur. 0.6s page loads, mobile-first UX, and high conversion funnels.',
    canonical: 'https://clickonmedia.in/#service/web-dev'
  },
  'service/software-dev': {
    title: 'Software & App Development Gorakhpur | Click On Media',
    description: 'Custom cloud SaaS platforms, business automation portals, and cross-platform mobile apps engineered for speed, scale, and high uptime.',
    canonical: 'https://clickonmedia.in/#service/software-dev'
  },
  'service/digital-marketing': {
    title: 'Digital Marketing Agency Gorakhpur | Click On Media',
    description: 'Boost your online presence and scale revenue with 360° digital marketing, competitor benchmarking, and ROI-driven customer acquisition.',
    canonical: 'https://clickonmedia.in/#service/digital-marketing'
  },
  'service/social-media': {
    title: 'Social Media Marketing Gorakhpur | Click On Media',
    description: 'Build an engaged community on Instagram, Facebook & LinkedIn. Aesthetic visual feeds, viral trend capture, and daily inbound customer leads.',
    canonical: 'https://clickonmedia.in/#service/social-media'
  },
  'service/posters': {
    title: 'Poster & Graphic Design Gorakhpur | Click On Media',
    description: 'High-impact promotional posters, festival social banners, hoardings, and marketing flyers designed to capture attention and drive sales.',
    canonical: 'https://clickonmedia.in/#service/posters'
  },
  'service/short-reels': {
    title: 'Viral Reels & Video Shoot Gorakhpur | Click On Media',
    description: 'High-retention 9:16 Instagram Reels, YouTube Shorts & brand commercials shot and edited with trending audio, hooks, and cinematic polish.',
    canonical: 'https://clickonmedia.in/#service/short-reels'
  },
  'service/graphics-logo': {
    title: 'Logo Design & Branding Agency Gorakhpur | Click On Media',
    description: 'Elevate your brand with bespoke 3D & 2D logo systems, brand guidelines, typography palettes, and corporate stationery packages in Gorakhpur.',
    canonical: 'https://clickonmedia.in/#service/graphics-logo'
  },
  'service/youtube-videos': {
    title: 'YouTube Video Production Gorakhpur | Click On Media',
    description: 'End-to-end YouTube channel production: 4K multi-cam editing, high-CTR 3D thumbnails, SEO titles, and retention pacing for creators and brands.',
    canonical: 'https://clickonmedia.in/#service/youtube-videos'
  },
  'service/google-ads': {
    title: 'Google Ads PPC Agency Gorakhpur | Click On Media',
    description: 'Generate immediate high-intent customer leads with Google Search, Maps & Performance Max campaigns. Zero wasted ad spend with high ROAS.',
    canonical: 'https://clickonmedia.in/#service/google-ads'
  },
  'service/social-ads': {
    title: 'Meta & Facebook Ads Agency Gorakhpur | Click On Media',
    description: 'High-ROAS Facebook & Instagram direct-response ads paired with WhatsApp click-to-chat funnels. Convert scrollers into paying buyers.',
    canonical: 'https://clickonmedia.in/#service/social-ads'
  },
  'service/marketing': {
    title: 'Digital Marketing & Paid Ads | Click On Media',
    description: 'High-ROAS Google and Meta ad funnels engineered to maximize your return on ad spend and drive verified customer acquisitions.',
    canonical: 'https://clickonmedia.in/#service/marketing'
  },
  'service/seo': {
    title: 'Top SEO Company in Gorakhpur | Click On Media',
    description: 'Dominate Google search results with technical SEO audits, high-intent keyword ranking, local map pack optimization, and high-authority backlinks.',
    canonical: 'https://clickonmedia.in/#service/seo'
  },
  'service/branding': {
    title: 'Branding & Creative Design | Click On Media',
    description: 'Distinctive brand identities, 3D design tokens, and corporate collateral that build customer trust and command premium market pricing.',
    canonical: 'https://clickonmedia.in/#service/branding'
  },
  'service/content': {
    title: 'Content & Viral Reels Shoot | Click On Media',
    description: 'Thumb-stopping 9:16 Instagram Reels, YouTube Shorts, and cinematic brand video production engineered for viral retention and growth.',
    canonical: 'https://clickonmedia.in/#service/content'
  },
  'project/mapaz-hotel': {
    title: 'MAPAZ Hotel Case Study | Click On Media Gorakhpur',
    description: 'How Click On Media drove +240% direct bookings and #1 Google Map Pack rankings for MAPAZ Hotel with custom web tech and local SEO.',
    canonical: 'https://clickonmedia.in/#project/mapaz-hotel'
  },
  'project/krishna-inn': {
    title: 'Krishna Inn Case Study | Click On Media Gorakhpur',
    description: 'How Click On Media generated 3.8x ROAS and 45,000+ monthly visitors for Krishna Inn with high-converting ads and social video.',
    canonical: 'https://clickonmedia.in/#project/krishna-inn'
  },
  'project/era-of-education': {
    title: 'Era of Education Case Study | Click On Media',
    description: 'Scaling student admissions by +310% with a custom multi-tier cloud learning portal engineered by Click On Media.',
    canonical: 'https://clickonmedia.in/#project/era-of-education'
  },
  'project/shivoy-distributors': {
    title: 'Shivoy Distributors Case Study | Click On Media',
    description: 'B2B wholesale portal with 3,000+ SKUs driving +180% wholesale dealer orders and same-day automated ERP dispatch.',
    canonical: 'https://clickonmedia.in/#project/shivoy-distributors'
  },
  'project/barkat-welfare': {
    title: 'Barkat Welfare Society Case Study | Click On Media',
    description: 'Transparent donor platform with instant 80G tax receipt generation delivering 4.5x online donation growth.',
    canonical: 'https://clickonmedia.in/#project/barkat-welfare'
  }
};

const applyRouteSEO = (routeKey) => {
  let meta = SEO_METADATA[routeKey];

  if (!meta && routeKey && routeKey.startsWith('type/')) {
    const raw = routeKey.replace('type/', '');
    const [sId, tId] = raw.split('/');
    const s = SERVICES_CATALOG[sId];
    const t = s?.categories?.find(c => c.id === tId);
    if (t && s) {
      meta = {
        title: `${t.title} | ${s.title} Gorakhpur | Click On Media`,
        description: `${t.explanation.slice(0, 140)}... Delivered by Click On Media Gorakhpur.`,
        canonical: `https://clickonmedia.in/#type/${sId}/${tId}`
      };
    }
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
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const [selectedServiceId, setSelectedServiceId] = useState(null);
  const [initialTypeId, setInitialTypeId] = useState(null);
  const [selectedTypeRoute, setSelectedTypeRoute] = useState(null); // { serviceId, typeId }
  const [selectedProjectId, setSelectedProjectId] = useState(null);
  const [preselectedQuoteService, setPreselectedQuoteService] = useState('');

  // Synchronize URL hash with dedicated pages, SEO metadata & support natural browser back/forward buttons
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash === '#quote') {
        setIsQuotePage(true);
        setSelectedServiceId(null);
        setInitialTypeId(null);
        setSelectedTypeRoute(null);
        setSelectedProjectId(null);
        applyRouteSEO('#quote');
      } else if (hash && (hash.startsWith('#type/') || hash.startsWith('#service-type/'))) {
        const raw = hash.replace(/^#(type|service-type)\//, '');
        const [sId, tId] = raw.split('/');
        setSelectedServiceId(sId);
        setInitialTypeId(tId);
        setSelectedTypeRoute(null);
        setSelectedProjectId(null);
        setIsQuotePage(false);
        applyRouteSEO(`type/${sId}/${tId}`);
      } else if (hash && hash.startsWith('#service/')) {
        const id = hash.replace('#service/', '');
        setSelectedServiceId(id);
        setInitialTypeId(null);
        setSelectedTypeRoute(null);
        setIsQuotePage(false);
        setSelectedProjectId(null);
        applyRouteSEO(`service/${id}`);
      } else if (hash && hash.startsWith('#project/')) {
        const id = hash.replace('#project/', '');
        setSelectedProjectId(id);
        setInitialTypeId(null);
        setSelectedTypeRoute(null);
        setIsQuotePage(false);
        setSelectedServiceId(null);
        applyRouteSEO(`project/${id}`);
      } else {
        setIsQuotePage(false);
        setSelectedServiceId(null);
        setInitialTypeId(null);
        setSelectedTypeRoute(null);
        setSelectedProjectId(null);
        applyRouteSEO(hash || 'default');
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    window.addEventListener('popstate', handleHashChange);
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
      window.removeEventListener('popstate', handleHashChange);
    };
  }, []);

  const handleOpenQuote = (serviceName = '') => {
    setPreselectedQuoteService(serviceName);
    setSelectedServiceId(null);
    setInitialTypeId(null);
    setSelectedTypeRoute(null);
    setSelectedProjectId(null);
    setIsQuotePage(true);
    if (window.location.hash !== '#quote') {
      window.history.pushState(null, '', '#quote');
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectService = (id) => {
    setIsQuotePage(false);
    setSelectedProjectId(null);
    setSelectedTypeRoute(null);
    setInitialTypeId(null);
    setSelectedServiceId(id);
    if (window.location.hash !== `#service/${id}`) {
      window.history.pushState(null, '', `#service/${id}`);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectType = (serviceId, typeId) => {
    setIsQuotePage(false);
    setSelectedProjectId(null);
    setSelectedTypeRoute(null);
    setSelectedServiceId(serviceId);
    setInitialTypeId(typeId);
    if (window.location.hash !== `#service/${serviceId}`) {
      window.history.pushState(null, '', `#service/${serviceId}`);
    }
  };

  const handleBackToService = (serviceId) => {
    setSelectedTypeRoute(null);
    handleSelectService(serviceId);
  };

  const handleSelectProject = (project) => {
    const id = typeof project === 'string' ? project : project?.id;
    if (!id) return;
    setIsQuotePage(false);
    setSelectedServiceId(null);
    setInitialTypeId(null);
    setSelectedTypeRoute(null);
    setSelectedProjectId(id);
    if (window.location.hash !== `#project/${id}`) {
      window.history.pushState(null, '', `#project/${id}`);
    }
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const handleBackToHome = () => {
    setIsQuotePage(false);
    setSelectedServiceId(null);
    setInitialTypeId(null);
    setSelectedTypeRoute(null);
    setSelectedProjectId(null);
    window.history.pushState(null, '', '#home');
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 50);
  };

  const handleBackToWork = () => {
    setIsQuotePage(false);
    setSelectedServiceId(null);
    setInitialTypeId(null);
    setSelectedTypeRoute(null);
    setSelectedProjectId(null);
    window.history.pushState(null, '', '#work');
    setTimeout(() => {
      const el = document.getElementById('work');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }, 50);
  };

  return (
    <div className="w-full overflow-x-clip bg-white text-[var(--text-dark)] font-sans selection:bg-[var(--brand-orange)] selection:text-white relative m-0 p-0">



      {/* --------------------------------------------------------------------- */}
      {/* MASTER VIEW ROUTING: DEDICATED PAGES VS MAIN HOMEPAGE                 */}
      {/* --------------------------------------------------------------------- */}
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
      ) : selectedProjectId ? (
        /* Dedicated Full-Page Case Study Hub (No Modals) */
        <ProjectDetailPage
          projectId={selectedProjectId}
          onBack={handleBackToWork}
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

            {/* 4. Yes Madam Inspired: Total Transparency vs Agency Bloat Comparison */}
            <TransparencyComparison
              onOpenQuote={handleOpenQuote}
            />

            {/* 5. "Our Work" Filterable Break & Reveal Showcase */}
            <OurWork
              onSelectProject={handleSelectProject}
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
          />

          {/* 11. Mobile Sticky Action Bar (Yes Madam Mobile Web Standard) */}
          <MobileQuickBar
            onOpenQuote={handleOpenQuote}
          />
        </>
      )}

      {/* Interactive Global Overlays (Zero Modals on Project Clicks) */}
      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
      />

      <VideoModal
        isOpen={isVideoOpen}
        onClose={() => setIsVideoOpen(false)}
        onOpenQuote={() => handleOpenQuote('')}
      />

      {/* Interactive Cursor Robot Companion */}
      <RobotCursor />

    </div>
  );
}
