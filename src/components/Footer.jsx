import React, { useState } from 'react';
import { Phone, Mail, MapPin, ArrowRight, Instagram, Linkedin, Twitter, Youtube, CheckCircle2 } from 'lucide-react';
import Logo from './Logo';

export default function Footer({ onOpenQuote, onSelectService }) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

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
      className="bg-[var(--deep-navy)] text-slate-300 pt-12 sm:pt-14 pb-6 sm:pb-8 border-t border-[var(--cyan-accent)]/20 relative overflow-hidden m-0"
      style={{ contain: 'paint', clipPath: 'inset(0)' }}
    >
      
      {/* Ambient background glow centered safely away from boundaries */}
      <div className="absolute top-1/2 -translate-y-1/2 left-1/4 w-80 h-80 bg-[var(--primary-blue)]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 -translate-y-1/2 right-1/4 w-80 h-80 bg-[var(--brand-orange)]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-10 border-b border-white/10">
          
          {/* Col 1: Brand Info & Contact (4 cols) */}
          <div className="lg:col-span-4 space-y-5">
            <Logo variant="dark" />
            
            <p className="text-sm text-slate-300 font-normal leading-relaxed pr-4">
              Click On Media is a high-growth digital agency blending cutting-edge engineering, brand design, and data-driven marketing to deliver measurable scale.
            </p>

            <div className="space-y-3 pt-2 text-sm text-slate-300">
              <a 
                href="tel:+919876543210" 
                className="flex items-center gap-3 text-slate-200 hover:text-[var(--cyan-accent)] transition-colors group"
              >
                <div className="w-9 h-9 rounded-lg bg-white/10 border border-white/15 flex items-center justify-center text-[var(--brand-orange)] group-hover:scale-105 transition-transform flex-shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <span className="font-semibold">+91 98765 43210</span>
              </a>

              <a 
                href="mailto:contact@clickonmedia.com" 
                className="flex items-center gap-3 text-slate-200 hover:text-[var(--cyan-accent)] transition-colors group"
              >
                <div className="w-9 h-9 rounded-lg bg-white/10 border border-white/15 flex items-center justify-center text-[var(--brand-orange)] group-hover:scale-105 transition-transform flex-shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <span>contact@clickonmedia.com</span>
              </a>

              <div className="flex items-start gap-3 text-slate-300">
                <div className="w-9 h-9 rounded-lg bg-white/10 border border-white/15 flex items-center justify-center text-[var(--brand-orange)] flex-shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="font-semibold text-white block">Gorakhpur Headquarters:</span>
                  <span className="text-xs text-slate-300">Park Road, Civil Lines, Golghar, Gorakhpur, Uttar Pradesh 273001, India</span>
                </div>
              </div>
            </div>
          </div>

          {/* Col 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-white font-heading font-bold text-sm tracking-wider uppercase">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm">
              {['Home', 'About Us', 'Our Work', 'Our Process', 'Pricing & Quote', 'Client Stories'].map((link, idx) => (
                <li key={idx}>
                  <a 
                    href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
                    className="hover:text-white transition-colors flex items-center gap-2 group py-1"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-400 group-hover:bg-[var(--brand-orange)] transition-colors" />
                    <span className="group-hover:text-[var(--cyan-accent)] transition-colors">{link}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Services (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-white font-heading font-bold text-sm tracking-wider uppercase">
              Services
            </h4>
            <ul className="space-y-2.5 text-sm">
              {[
                { name: 'Website Development', id: 'web-dev' },
                { name: 'Software & App Development', id: 'software-dev' },
                { name: 'Digital Marketing & Ads', id: 'marketing' },
                { name: 'SEO & Performance', id: 'seo' },
                { name: 'Branding & Creative Design', id: 'branding' },
                { name: 'Content & Viral Reels', id: 'content' }
              ].map((service, idx) => (
                <li key={idx}>
                  <button
                    onClick={() => {
                      if (onSelectService) onSelectService(service.id);
                      const el = document.getElementById('services');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="hover:text-white transition-colors text-left flex items-center gap-2 group cursor-pointer py-1"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-400 group-hover:bg-[var(--cyan-accent)] transition-colors" />
                    <span className="group-hover:text-[var(--amber)] transition-colors">{service.name}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Newsletter & Socials (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-white font-heading font-bold text-sm tracking-wider uppercase">
              Stay in the Loop
            </h4>
            <p className="text-xs text-slate-300 leading-relaxed">
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
                  className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-slate-400 text-xs focus:outline-none focus:border-[var(--brand-orange)] focus:ring-1 focus:ring-[var(--brand-orange)] transition-colors"
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
                <div className="flex items-center gap-1.5 text-xs text-emerald-400 pt-1">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Subscribed successfully! Welcome aboard.</span>
                </div>
              )}
            </form>

            <div className="pt-2">
              <span className="text-xs font-semibold text-slate-200 block mb-2">Connect With Us:</span>
              <div className="flex items-center gap-2">
                {[
                  { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
                  { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
                  { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
                  { icon: Youtube, href: 'https://youtube.com', label: 'YouTube' },
                ].map((social, i) => {
                  const SIcon = social.icon;
                  return (
                    <a
                      key={i}
                      href={social.href}
                      aria-label={social.label}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-xl bg-white/10 hover:bg-[var(--brand-orange)] border border-white/15 hover:border-[var(--amber)] text-slate-200 hover:text-white flex items-center justify-center transition-all duration-300 hover:scale-105"
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
        <div className="py-5 sm:py-6 border-b border-white/10 text-xs text-slate-300">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="space-y-1 text-center md:text-left">
              <span className="font-heading font-bold text-white block">
                Primary Regional Service Centers in Uttar Pradesh:
              </span>
              <p className="text-slate-400 text-[11px] leading-relaxed">
                Gorakhpur (Civil Lines, Golghar, Medical College Road, Taramandal, Rapti Nagar) • Lucknow • Varanasi • Prayagraj • Kanpur • Ayodhya • Basti • Deoria • Kushinagar • Maharajganj
              </p>
            </div>
            <div className="flex items-center gap-3">
              <button 
                onClick={onOpenQuote}
                className="px-5 py-2.5 min-h-[44px] rounded-full bg-white/10 hover:bg-[var(--primary-blue)] border border-[var(--cyan-accent)]/40 text-[var(--cyan-accent)] hover:text-white text-xs font-heading font-semibold transition-all hover:scale-105 cursor-pointer shadow-sm"
              >
                Request Regional Proposal
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Legal Links */}
        <div className="pt-5 sm:pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400 text-center sm:text-left">
          <div>
            &copy; {new Date().getFullYear()} Click On Media. All rights reserved.
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            <a href="#privacy" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#terms" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#sitemap" className="hover:text-white transition-colors">Sitemap</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
