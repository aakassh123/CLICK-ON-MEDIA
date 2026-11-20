import React, { useState } from 'react';
import { Phone, Mail, MapPin, ArrowRight, Instagram, Linkedin, Twitter, Youtube, CheckCircle2 } from 'lucide-react';
import Logo from './Logo';
import LegalModal from './LegalModal';

export default function Footer({ onOpenQuote, onSelectService }) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [legalModalOpen, setLegalModalOpen] = useState(false);
  const [legalModalTab, setLegalModalTab] = useState('privacy');

  const openLegal = (tab) => {
    setLegalModalTab(tab);
    setLegalModalOpen(true);
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    const sanitizedEmail = email.replace(/[<>]/g, '').trim();
    if (sanitizedEmail && sanitizedEmail.includes('@')) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  return (
    <footer 
      className="bg-white/90 backdrop-blur-md text-slate-700 pt-12 sm:pt-14 pb-24 sm:pb-10 md:pb-8 border-t border-slate-200/90 relative overflow-hidden m-0"
      style={{ contain: 'paint', clipPath: 'inset(0)' }}
    >
      
      {/* Ambient background glow */}
      <div className="absolute top-1/2 -translate-y-1/2 left-1/4 w-80 h-80 bg-[var(--primary-blue)]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 -translate-y-1/2 right-1/4 w-80 h-80 bg-[var(--brand-orange)]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-10 border-b border-slate-200/90">
          
          {/* Col 1: Brand Info & Contact (4 cols) */}
          <div className="lg:col-span-4 space-y-5">
            <Logo variant="light" size="md" />
            
            <p className="text-sm text-slate-600 font-normal leading-relaxed pr-4">
              Click On Media is a high-growth digital agency blending cutting-edge engineering, brand design, and data-driven marketing to deliver measurable scale.
            </p>

            <div className="space-y-3 pt-2 text-sm text-slate-700">
              <div className="flex items-center gap-3 text-slate-700">
                <div className="w-9 h-9 rounded-lg bg-slate-100 border border-slate-200 flex items-center justify-center text-[var(--brand-orange)] flex-shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div className="flex flex-wrap items-center gap-x-2 gap-y-1 font-semibold text-slate-900">
                  <a href="tel:+918303534063" className="hover:text-[var(--primary-blue)] transition-colors">+91 83035 34063</a>
                  <span className="text-slate-300">|</span>
                  <a href="tel:+917905382491" className="hover:text-[var(--primary-blue)] transition-colors">+91 79053 82491</a>
                </div>
              </div>

              <div className="space-y-2">
                <a 
                  href="mailto:info@clickonmedia.in" 
                  className="flex items-center gap-3 text-slate-700 hover:text-[var(--primary-blue)] transition-colors group"
                >
                  <div className="w-9 h-9 rounded-lg bg-slate-100 border border-slate-200 flex items-center justify-center text-[var(--brand-orange)] group-hover:scale-105 transition-transform flex-shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <span className="font-medium text-slate-900">info@clickonmedia.in</span>
                </a>
                <a 
                  href="mailto:clickonmedia3@gmail.com" 
                  className="flex items-center gap-3 text-slate-700 hover:text-[var(--primary-blue)] transition-colors group text-xs sm:text-sm pl-12"
                >
                  <span className="text-slate-500 hover:text-[var(--primary-blue)] transition-colors">clickonmedia3@gmail.com</span>
                </a>
              </div>

              <div className="flex items-start gap-3 text-slate-600">
                <div className="w-9 h-9 rounded-lg bg-slate-100 border border-slate-200 flex items-center justify-center text-[var(--brand-orange)] flex-shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="font-semibold text-slate-900 block">Gorakhpur Headquarters:</span>
                  <span className="text-xs text-slate-500 leading-relaxed">Near Adalat Restaurant, Pipal Dada, Shri Ganga Tiraha, Mohaddipur, Gorakhpur, Uttar Pradesh 273008</span>
                </div>
              </div>
            </div>
          </div>

          {/* Col 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-[#0A1F6B] font-heading font-bold text-sm tracking-wider uppercase">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm">
              {['Home', 'About Us', 'Our Work', 'Our Process', 'Pricing & Quote', 'Client Stories'].map((link, idx) => (
                <li key={idx}>
                  <a 
                    href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
                    className="hover:text-[var(--primary-blue)] text-slate-600 transition-colors flex items-center gap-2 group py-1"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover:bg-[var(--brand-orange)] transition-colors" />
                    <span className="group-hover:text-[var(--primary-blue)] transition-colors font-medium">{link}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Services (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-[#0A1F6B] font-heading font-bold text-sm tracking-wider uppercase">
              Services
            </h4>
            <ul className="space-y-2.5 text-sm">
              {[
                { name: 'Social Media Marketing', id: 'social-media' },
                { name: 'Website Development', id: 'web-dev' },
                { name: 'WhatsApp Bulk Messaging', id: 'whatsapp-bulk' },
                { name: 'Graphics Designing', id: 'graphics-designing' },
                { name: 'Video Editing', id: 'video-editing' },
                { name: 'SEO - Website + Google My Business', id: 'seo' },
                { name: 'Ads - Website + Insta, FB, WhatsApp', id: 'ads' },
                { name: 'Software Development', id: 'software-dev' },
                { name: 'CRM', id: 'crm' },
                { name: 'Monetization Service', id: 'monetization' }
              ].map((service, idx) => (
                <li key={idx}>
                  <button
                    onClick={() => {
                      if (onSelectService) onSelectService(service.id);
                      const el = document.getElementById('services');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                    aria-label={`Explore ${service.name} service`}
                    className="hover:text-[var(--primary-blue)] text-slate-600 transition-colors text-left flex items-center gap-2 group cursor-pointer py-1"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover:bg-[var(--cyan-accent)] transition-colors" />
                    <span className="group-hover:text-[var(--brand-orange)] transition-colors font-medium">{service.name}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Newsletter & Socials (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-[#0A1F6B] font-heading font-bold text-sm tracking-wider uppercase">
              Stay in the Loop
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Get bi-weekly digital growth playbooks, design inspirations, and marketing insights straight to your inbox.
            </p>

            <form onSubmit={handleSubscribe} className="space-y-2">
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your work email"
                  required
                  maxLength={100}
                  aria-label="Work email for newsletter"
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 placeholder-slate-400 text-xs focus:outline-none focus:border-[var(--primary-blue)] focus:ring-1 focus:ring-[var(--primary-blue)] transition-colors"
                />
                <button
                  type="submit"
                  aria-label="Subscribe to newsletter"
                  className="absolute right-1 top-1 bottom-1 px-3.5 btn-primary text-white rounded-lg text-xs font-heading font-bold transition-all flex items-center justify-center cursor-pointer shadow-md"
                >
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

              {subscribed && (
                <div className="flex items-center gap-1.5 text-xs text-emerald-600 pt-1 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Subscribed successfully! Welcome aboard.</span>
                </div>
              )}
            </form>

            <div className="pt-2">
              <span className="text-xs font-semibold text-slate-700 block mb-2 font-heading">Connect With Us:</span>
              <div className="flex items-center gap-2">
                {[
                  { icon: Instagram, href: 'https://www.instagram.com/clickonmedia', label: 'Instagram' },
                  { icon: Linkedin, href: 'https://www.linkedin.com/company/clickonmedia', label: 'LinkedIn' },
                  { icon: Twitter, href: 'https://twitter.com/clickonmedia', label: 'Twitter' },
                  { icon: Youtube, href: 'https://youtube.com/@clickonmedia', label: 'YouTube' },
                ].map((social, i) => {
                  const SIcon = social.icon;
                  return (
                    <a
                      key={i}
                      href={social.href}
                      aria-label={social.label}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-xl bg-slate-100 hover:bg-[var(--brand-orange)] border border-slate-200 hover:border-[var(--brand-orange)] text-slate-600 hover:text-white flex items-center justify-center transition-all duration-300 hover:scale-105"
                    >
                      <SIcon className="w-4 h-4" />
                    </a>
                  );
                })}
              </div>
            </div>

          </div>

        </div>

        {/* Regional Coverage Notice (Local SEO & Regional Footprint) */}
        <div className="py-5 sm:py-6 border-b border-slate-200/90 text-xs text-slate-600">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="space-y-1 text-center md:text-left">
              <span className="font-heading font-bold text-[#0A1F6B] block">
                Primary Regional Service Centers in Uttar Pradesh:
              </span>
              <p className="text-slate-500 text-[11px] leading-relaxed">
                Gorakhpur (Civil Lines, Golghar, Medical College Road, Taramandal, Rapti Nagar) • Lucknow • Varanasi • Prayagraj • Kanpur • Ayodhya • Basti • Deoria • Kushinagar • Maharajganj
              </p>
            </div>
            <div className="flex items-center gap-3">
              <button 
                onClick={onOpenQuote}
                className="px-5 py-2.5 min-h-[44px] rounded-full bg-slate-100 hover:bg-[var(--primary-blue)] border border-slate-200 text-[#0A1F6B] hover:text-white text-xs font-heading font-bold transition-all hover:scale-105 cursor-pointer shadow-xs"
              >
                Request Regional Proposal
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Legal Links */}
        <div className="pt-5 sm:py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 text-center sm:text-left">
          <div>
            &copy; {new Date().getFullYear()} Click On Media. All rights reserved.
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            <button
              onClick={() => openLegal('privacy')}
              className="hover:text-[var(--primary-blue)] transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <button
              onClick={() => openLegal('terms')}
              className="hover:text-[var(--primary-blue)] transition-colors cursor-pointer"
            >
              Terms of Service
            </button>
            <a
              href="./sitemap.xml"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[var(--primary-blue)] transition-colors cursor-pointer"
            >
              Sitemap
            </a>
          </div>
        </div>

      </div>

      {/* Legal & Governance Modal */}
      <LegalModal
        isOpen={legalModalOpen}
        onClose={() => setLegalModalOpen(false)}
        activeTab={legalModalTab}
      />
    </footer>
  );
}
