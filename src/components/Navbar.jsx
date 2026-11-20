import React, { useState, useEffect, useRef } from 'react';
import {
  Menu,
  X,
  ChevronDown,
  Phone,
  ArrowRight,
  Sparkles,
  Globe,
  Code2,
  Megaphone,
  Search,
  Palette,
  Film,
  Star,
  ShieldCheck,
  MessageCircle,
  TrendingUp,
  Users,
  Layout,
  PlaySquare,
  Target
} from 'lucide-react';
import Logo from './Logo';

export default function Navbar({ onOpenQuote, onSelectService, onOpenPortfolio }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown on outside click or escape key
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsServicesDropdownOpen(false);
      }
    };
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsServicesDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const serviceSubItems = [
    { title: 'Social Media Marketing', desc: 'Build engagement & organic reach across platforms.', id: 'social-media', icon: Users, color: 'text-[var(--brand-orange)]' },
    { title: 'Website Development', desc: 'Custom, engaging & sub-0.6s speed websites.', id: 'web-dev', icon: Globe, color: 'text-[var(--primary-blue)]' },
    { title: 'WhatsApp Bulk Messaging', desc: 'Official API broadcasts with 98% open rates.', id: 'whatsapp-bulk', icon: MessageCircle, color: 'text-emerald-500' },
    { title: 'Graphics Designing', desc: 'Stunning posters, banners, and 3D/2D logo suites.', id: 'graphics-designing', icon: Palette, color: 'text-[var(--primary-blue)]' },
    { title: 'Video Editing', desc: 'Viral 9:16 reels, 4K YouTube videos & podcasts.', id: 'video-editing', icon: Film, color: 'text-[var(--brand-orange)]' },
    { title: 'SEO - Website + Google My Business', desc: '#1 Google search & local map pack domination.', id: 'seo', icon: Search, color: 'text-[var(--primary-blue)]' },
    { title: 'Ads - Website + Insta, FB, WhatsApp', desc: 'High-ROAS Google, Meta & WhatsApp ad funnels.', id: 'ads', icon: Target, color: 'text-[var(--brand-orange)]' },
    { title: 'Software Development', desc: 'Tailor-made cloud software & mobile apps.', id: 'software-dev', icon: Code2, color: 'text-[var(--primary-blue)]' },
    { title: 'CRM', desc: 'Centralized lead pipeline & automated follow-ups.', id: 'crm', icon: Layout, color: 'text-[var(--primary-blue)]' },
    { title: 'Monetization Service', desc: 'Maximize YouTube, creator & asset revenue streams.', id: 'monetization', icon: TrendingUp, color: 'text-[var(--brand-orange)]' },
  ];

  const navLinks = [
    { name: 'Home', href: '#home' },
    {
      name: 'Services',
      href: '#services',
      hasDropdown: true,
      subItems: serviceSubItems
    },
    { name: 'About', href: '#about' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Contact Us', href: '#contact' },
  ];

  const handleServicesNavClick = (e) => {
    setIsServicesDropdownOpen(false);
    const el = document.getElementById('services');
    if (el) {
      e.preventDefault();
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">

      {/* 1. Yes Madam Inspired Top Utility & Trust Ribbon */}
      <div className={`bg-[#061448] text-white px-3 text-[10px] sm:text-[11px] font-medium border-b border-white/10 transition-all duration-300 hidden sm:block ${isScrolled ? 'max-h-0 py-0 opacity-0 overflow-hidden' : 'max-h-10 py-1.5 opacity-100'
        }`}>
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1 text-[var(--amber)] font-bold">
              <Star className="w-3 h-3 fill-[var(--amber)]" /> 4.9/5 Rating
            </span>
            <span className="text-white/30">•</span>
            <span className="text-slate-200">#1 Agency in Gorakhpur &amp; UP</span>
            <span className="text-white/30">•</span>
            <span className="text-emerald-400 font-semibold flex items-center gap-1">
              <ShieldCheck className="w-3 h-3" /> 100% Code &amp; Asset Ownership
            </span>
          </div>
          <div className="flex items-center gap-4 text-slate-300">
            <span className="text-[var(--brand-orange)] font-bold">Free 30-Min Strategy Audit</span>
            <a
              href="https://wa.me/918303534063"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-emerald-400 transition-colors flex items-center gap-1 text-emerald-400 font-semibold"
            >
              <MessageCircle className="w-3 h-3" /> WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* 2. Main Sticky Navigation Bar */}
      <div
        className={`w-full border-b border-slate-200/90 shadow-sm backdrop-blur-xl transition-all duration-300 relative ${isScrolled ? 'py-2 sm:py-2.5 shadow-md bg-white/98' : 'py-2.5 sm:py-3 shadow-xs bg-white/95'
          }`}
      >
        {/* Top Luminous Brand Accent Line */}
        <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-[var(--cyan-accent)] via-[var(--primary-blue)] to-[var(--brand-orange)] pointer-events-none opacity-90" />

        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center justify-between">

            {/* Logo on Left - Integrates 100% seamlessly with navbar background */}
            <a
              href="#home"
              className="focus:outline-none focus:ring-2 focus:ring-[var(--primary-blue)]/40 rounded-xl transition-transform hover:scale-[1.01] flex items-center"
              aria-label="Click On Media Home"
            >
              <Logo variant="light" size="md" />
            </a>

            {/* Desktop Navigation Command Pill */}
            <nav className="hidden lg:flex items-center gap-1 bg-slate-100/80 border border-slate-200/90 rounded-full px-2.5 py-1.5 shadow-xs backdrop-blur-md">
              {navLinks.map((link) => {
                if (link.hasDropdown) {
                  return (
                    <div
                      key={link.name}
                      ref={dropdownRef}
                      className="relative"
                      onMouseEnter={() => setIsServicesDropdownOpen(true)}
                      onMouseLeave={() => setIsServicesDropdownOpen(false)}
                    >
                      <div className="flex items-center rounded-full text-slate-800 hover:text-[var(--primary-blue)] hover:bg-white transition-all shadow-none hover:shadow-xs">
                        <a
                          href={link.href}
                          onClick={handleServicesNavClick}
                          className="pl-3.5 pr-1.5 py-1.5 text-xs xl:text-sm font-bold tracking-wide cursor-pointer"
                        >
                          {link.name}
                        </a>
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            setIsServicesDropdownOpen(!isServicesDropdownOpen);
                          }}
                          className="pr-3 pl-1 py-1.5 text-slate-500 hover:text-[var(--brand-orange)] transition-colors cursor-pointer"
                          aria-label="Toggle Services menu"
                        >
                          <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${isServicesDropdownOpen ? 'rotate-180 text-[var(--brand-orange)]' : 'text-slate-500'}`} />
                        </button>
                      </div>

                      {/* Dropdown Menu for Services - 100% Solid White & Wide */}
                      {isServicesDropdownOpen && (
                        <div
                          className="absolute top-full left-1/2 -translate-x-1/2 pt-2.5 z-50 animate-in fade-in slide-in-from-top-2 duration-200"
                          style={{ width: '420px', maxWidth: 'calc(100vw - 2rem)' }}
                        >
                          <div
                            className="border border-slate-200/90 rounded-2xl shadow-[0_20px_50px_rgba(10,31,107,0.18)] p-3.5 ring-1 ring-slate-900/5"
                            style={{ backgroundColor: '#ffffff' }}
                          >
                            {/* Dropdown Header Pill */}
                            <div className="flex items-center justify-between px-2.5 pb-2.5 mb-2 border-b border-slate-100">
                              <span className="text-xs font-heading font-black text-[var(--brand-orange)] uppercase tracking-wider flex items-center gap-1.5 whitespace-nowrap">
                                <Sparkles className="w-3.5 h-3.5 text-[var(--brand-orange)] flex-shrink-0" />
                                <span>Core Capabilities</span>
                              </span>
                              <span className="text-[11px] text-slate-600 font-mono font-bold bg-slate-100 px-2 py-0.5 rounded-full whitespace-nowrap">
                                10 Solutions
                              </span>
                            </div>

                            {/* Dropdown Items List */}
                            <div className="space-y-1">
                              {link.subItems.map((item) => {
                                const ItemIcon = item.icon;
                                return (
                                  <button
                                    key={item.id}
                                    type="button"
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      setIsServicesDropdownOpen(false);
                                      if (onSelectService) onSelectService(item.id);
                                      const el = document.getElementById('services');
                                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                                    }}
                                    className="w-full text-left p-2.5 rounded-xl hover:bg-slate-50 transition-all group flex items-start gap-3 cursor-pointer border border-transparent hover:border-slate-200"
                                  >
                                    <div className="w-8 h-8 rounded-lg bg-slate-100 border border-slate-200 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:scale-105 group-hover:bg-white group-hover:shadow-xs transition-all">
                                      <ItemIcon className={`w-4 h-4 ${item.color}`} />
                                    </div>
                                    <div className="flex-grow min-w-0">
                                      <div className="text-xs font-bold text-slate-900 group-hover:text-[var(--primary-blue)] transition-colors flex items-center justify-between">
                                        <span>{item.title}</span>
                                        <ArrowRight className="w-3.5 h-3.5 text-slate-400 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all flex-shrink-0 ml-1" />
                                      </div>
                                      <div className="text-[11px] text-slate-500 leading-tight mt-0.5 truncate">
                                        {item.desc}
                                      </div>
                                    </div>
                                  </button>
                                );
                              })}
                            </div>

                            {/* Dropdown Footer CTA */}
                            <div className="mt-2.5 pt-2 border-t border-slate-100 flex items-center justify-between px-2 text-[11px]">
                              <span className="text-slate-500 font-medium">Looking for full scale?</span>
                              <button
                                type="button"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setIsServicesDropdownOpen(false);
                                  const el = document.getElementById('services');
                                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                                }}
                                className="text-[var(--primary-blue)] hover:text-[var(--brand-orange)] font-bold font-heading flex items-center gap-1 cursor-pointer transition-colors"
                              >
                                <span>Explore Orbit</span>
                                <ArrowRight className="w-3 h-3" />
                              </button>
                            </div>

                          </div>
                        </div>
                      )}
                    </div>
                  );
                }

                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => {
                      if (link.href === '#portfolio') {
                        e.preventDefault();
                        if (onOpenPortfolio) onOpenPortfolio();
                        else window.location.hash = '#portfolio';
                      }
                    }}
                    className="px-3.5 xl:px-4 py-1.5 text-xs xl:text-sm font-bold tracking-wide transition-all rounded-full text-slate-800 hover:text-[var(--primary-blue)] hover:bg-white shadow-none hover:shadow-xs"
                  >
                    {link.name}
                  </a>
                );
              })}
            </nav>

            {/* Right Action CTA Cluster */}
            <div className="hidden lg:flex items-center gap-3 xl:gap-4">

              {/* Direct Phone Support Pill */}
              <a
                href="tel:+918303534063"
                className="flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-100/90 hover:bg-slate-200/70 border border-slate-200/90 transition-all text-xs font-bold text-slate-800 shadow-xs group min-h-[40px]"
                aria-label="Call Click On Media at +91 83035 34063"
              >
                <div className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </div>
                <Phone className="w-3.5 h-3.5 text-[var(--brand-orange)] group-hover:scale-110 transition-transform" />
                <span className="hidden xl:inline font-mono font-bold tracking-tight text-slate-800">+91 83035 34063</span>
              </a>

              {/* Primary High-Conversion CTA */}
              <button
                onClick={onOpenQuote}
                className="btn-primary text-xs xl:text-sm !py-2.5 !px-5 xl:!px-6 shadow-[0_4px_18px_rgba(255,122,0,0.35)] hover:shadow-[0_6px_28px_rgba(255,122,0,0.55)] hover:scale-105 active:scale-95 transition-all group font-heading font-bold"
              >
                <span>Get Free Quote</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </button>
            </div>

            {/* Mobile Menu Action Area (Quick Call, WhatsApp & Hamburger) */}
            <div className="flex lg:hidden items-center gap-1.5 xs:gap-2">
              <a
                href="tel:+918303534063"
                className="w-9 h-9 rounded-xl bg-slate-100 hover:bg-slate-200 border border-slate-200 text-[#0A1F6B] flex items-center justify-center transition-colors cursor-pointer"
                title="Call Click On Media"
                aria-label="Call +91 83035 34063"
              >
                <Phone className="w-4 h-4 text-[var(--brand-orange)]" />
              </a>

              <a
                href="https://wa.me/918303534063?text=Hi%20Click%20On%20Media,%20I%20would%20like%20to%20discuss%20a%20digital%20project."
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 text-emerald-600 flex items-center justify-center transition-colors cursor-pointer"
                title="Chat on WhatsApp"
                aria-label="Chat on WhatsApp"
              >
                <MessageCircle className="w-4 h-4 text-emerald-600 fill-emerald-600" />
              </a>

              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="min-w-[40px] min-h-[40px] flex items-center justify-center rounded-xl bg-slate-100 border border-slate-200 text-slate-800 hover:bg-slate-200 transition-colors cursor-pointer"
                aria-label="Toggle navigation menu"
              >
                {isMobileMenuOpen ? <X className="w-5 h-5 text-[var(--brand-orange)]" /> : <Menu className="w-5 h-5 text-slate-800" />}
              </button>
            </div>

          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation with Frosted Blur Theater */}
      {isMobileMenuOpen && (
        <div
          className="lg:hidden border-b border-slate-200 px-4 pt-3 pb-6 space-y-3 backdrop-blur-2xl animate-in slide-in-from-top-4 duration-200 max-h-[85vh] overflow-y-auto shadow-2xl bg-white/98"
        >
          {navLinks.map((link) => (
            <div key={link.name} className="space-y-1">
              <a
                href={link.href}
                onClick={(e) => {
                  setIsMobileMenuOpen(false);
                  if (link.href === '#portfolio') {
                    e.preventDefault();
                    if (onOpenPortfolio) onOpenPortfolio();
                    else window.location.hash = '#portfolio';
                  }
                }}
                className="block px-3 py-2.5 rounded-xl text-sm font-bold text-slate-800 hover:text-[var(--primary-blue)] hover:bg-slate-50 min-h-[44px] flex items-center justify-between"
              >
                <span>{link.name}</span>
                {link.hasDropdown && <span className="text-[10px] px-2 py-0.5 rounded-full bg-slate-100 text-[var(--primary-blue)] font-bold border border-slate-200">10 Services</span>}
              </a>
              {link.hasDropdown && (
                <div className="pl-3 space-y-1 border-l-2 border-[var(--brand-orange)]/40 ml-2">
                  {link.subItems.map((sub) => (
                    <button
                      key={sub.id}
                      onClick={() => {
                        setIsMobileMenuOpen(false);
                        if (onSelectService) onSelectService(sub.id);
                        const el = document.getElementById('services');
                        if (el) el.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="block w-full text-left px-3 py-2 text-xs text-slate-700 hover:text-[var(--brand-orange)] min-h-[40px] flex items-center rounded-lg hover:bg-slate-50 font-medium"
                    >
                      {sub.title}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}

          {/* Mobile Drawer Quick Connect Cards (Call + WhatsApp + Quote) */}
          <div className="pt-4 border-t border-slate-100 space-y-2.5">
            <a
              href="tel:+918303534063"
              className="flex items-center gap-3 text-sm font-bold text-slate-800 px-4 py-3 min-h-[48px] rounded-2xl bg-slate-50 hover:bg-slate-100 border border-slate-200 transition-colors"
            >
              <div className="w-8 h-8 rounded-xl bg-[#0A1F6B] text-white flex items-center justify-center flex-shrink-0 shadow-xs">
                <Phone className="w-4 h-4 text-[var(--brand-orange)]" />
              </div>
              <div className="flex flex-col text-left">
                <span className="text-xs text-slate-500 font-normal">Direct Phone Support</span>
                <span className="font-mono text-slate-900 font-bold">+91 83035 34063</span>
              </div>
              <span className="ml-auto text-[10px] px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-700 font-mono font-bold">Call Now</span>
            </a>

            <a
              href="https://wa.me/918303534063?text=Hi%20Click%20On%20Media,%20I%20would%20like%20to%20discuss%20a%20digital%20project."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-sm font-bold text-white px-4 py-3 min-h-[48px] rounded-2xl bg-[#25D366] hover:bg-[#20bd5a] transition-colors shadow-md shadow-emerald-500/20"
            >
              <div className="w-8 h-8 rounded-xl bg-white/20 text-white flex items-center justify-center flex-shrink-0">
                <MessageCircle className="w-4 h-4 fill-white" />
              </div>
              <div className="flex flex-col text-left">
                <span className="text-xs text-emerald-100 font-normal">Available 24/7</span>
                <span className="font-heading text-white font-bold">Chat on WhatsApp</span>
              </div>
              <span className="ml-auto text-xs bg-white text-emerald-700 px-2.5 py-0.5 rounded-full font-bold">Instant</span>
            </a>

            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenQuote();
              }}
              className="btn-primary w-full text-center py-3.5 rounded-2xl font-heading font-bold shadow-md cursor-pointer"
            >
              Get Free Quote
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
