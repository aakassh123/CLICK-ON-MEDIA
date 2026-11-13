import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ClientLogos from './components/ClientLogos';
import Services from './components/Services';
import AboutUs from './components/AboutUs';
import Process from './components/Process';
import OurWork from './components/OurWork';
import CtaBanner from './components/CtaBanner';
import Footer from './components/Footer';

// Dedicated Full-Page Views (Clean, Professional, Non-Modal)
import ServiceDetailPage from './components/ServiceDetailPage';
import ProjectDetailPage from './components/ProjectDetailPage';
import QuotePage from './components/QuotePage';

// Interactive Overlays
import ConsultationModal from './components/ConsultationModal';
import VideoModal from './components/VideoModal';
import RobotCursor from './components/RobotCursor';

export default function App() {
  const [isQuotePage, setIsQuotePage] = useState(false);
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  
  const [selectedServiceId, setSelectedServiceId] = useState(null);
  const [selectedProjectId, setSelectedProjectId] = useState(null);
  const [preselectedQuoteService, setPreselectedQuoteService] = useState('');

  // Synchronize URL hash with dedicated pages & support natural browser back/forward buttons
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash === '#quote') {
        setIsQuotePage(true);
        setSelectedServiceId(null);
        setSelectedProjectId(null);
      } else if (hash && hash.startsWith('#service/')) {
        const id = hash.replace('#service/', '');
        setSelectedServiceId(id);
        setIsQuotePage(false);
        setSelectedProjectId(null);
      } else if (hash && hash.startsWith('#project/')) {
        const id = hash.replace('#project/', '');
        setSelectedProjectId(id);
        setIsQuotePage(false);
        setSelectedServiceId(null);
      } else {
        setIsQuotePage(false);
        setSelectedServiceId(null);
        setSelectedProjectId(null);
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
    setSelectedServiceId(id);
    if (window.location.hash !== `#service/${id}`) {
      window.history.pushState(null, '', `#service/${id}`);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectProject = (project) => {
    const id = typeof project === 'string' ? project : project?.id;
    if (!id) return;
    setIsQuotePage(false);
    setSelectedServiceId(null);
    setSelectedProjectId(id);
    if (window.location.hash !== `#project/${id}`) {
      window.history.pushState(null, '', `#project/${id}`);
    }
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const handleBackToHome = () => {
    setIsQuotePage(false);
    setSelectedServiceId(null);
    setSelectedProjectId(null);
    window.history.pushState(null, '', '#home');
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 50);
  };

  const handleBackToWork = () => {
    setIsQuotePage(false);
    setSelectedServiceId(null);
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
    <div className="w-full overflow-x-clip bg-[var(--deep-navy)] text-[var(--text-dark)] font-sans selection:bg-[var(--brand-orange)] selection:text-white relative m-0 p-0">
      
      {/* --------------------------------------------------------------------- */}
      {/* MASTER VIEW ROUTING: DEDICATED PAGES VS MAIN HOMEPAGE                 */}
      {/* --------------------------------------------------------------------- */}
      {isQuotePage ? (
        /* Dedicated Full-Page "Start Your Project / Get a Quote" Experience */
        <QuotePage 
          onBack={handleBackToHome}
          preselectedService={preselectedQuoteService}
        />
      ) : selectedServiceId ? (
        /* Dedicated Full-Page Service Detail Hub */
        <ServiceDetailPage 
          serviceId={selectedServiceId}
          onBack={handleBackToHome}
          onSelectService={handleSelectService}
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

          <main className="flex-grow m-0 p-0">
            {/* Hero Section with 3D Laptop Showcase */}
            <Hero 
              onOpenQuote={() => handleOpenQuote('')}
              onOpenVideo={() => setIsVideoOpen(true)}
              onSelectService={handleSelectService}
            />

            {/* Client Logos / "Trusted by growing brands" Section */}
            <ClientLogos />

            {/* "Our Services" Grid */}
            <Services 
              onSelectService={handleSelectService}
              onOpenQuote={() => handleOpenQuote('')}
            />

            {/* "About Click On Media" Section */}
            <AboutUs 
              onOpenConsultation={() => setIsConsultationOpen(true)}
            />

            {/* "Our Process" 5-Step Timeline */}
            <Process 
              onOpenQuote={() => handleOpenQuote('')}
            />

            {/* "Our Work" Filterable Break & Reveal Showcase */}
            <OurWork 
              onSelectProject={handleSelectProject}
            />

            {/* Bottom CTA Banner */}
            <CtaBanner 
              onOpenConsultation={() => setIsConsultationOpen(true)}
            />
          </main>

          {/* Comprehensive Footer */}
          <Footer 
            onOpenQuote={() => handleOpenQuote('')}
            onSelectService={handleSelectService}
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
