import React, { useRef, useState, useEffect } from 'react';
import { 
  ArrowRight, 
  Play, 
  Pause, 
  Volume2, 
  VolumeX, 
  Zap, 
  FolderCheck, 
  Users, 
  Award, 
  TrendingUp, 
  Code2, 
  Megaphone, 
  Search, 
  Palette
} from 'lucide-react';

export default function Hero({ onOpenQuote, onOpenVideo, onSelectService }) {
  const [isBgVideoPlaying, setIsBgVideoPlaying] = useState(true);
  const [isBgMuted, setIsBgMuted] = useState(true);
  const sectionRef = useRef(null);
  const bgVideoRef = useRef(null);
  const parallaxRef = useRef(null);

  // High-performance decoupled scroll parallax (Zero React re-renders = ZERO LAG on all devices)
  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (parallaxRef.current) {
            const top = window.scrollY;
            if (top < 1200) {
              parallaxRef.current.style.transform = `translate3d(0, ${(top * 0.12).toFixed(1)}px, 0)`;
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // IntersectionObserver: Pause video when hero is scrolled out of view to save 100% GPU/CPU on other sections
  useEffect(() => {
    if (!sectionRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (bgVideoRef.current) {
            if (entry.isIntersecting) {
              if (isBgVideoPlaying) {
                bgVideoRef.current.play().catch(() => {});
              }
            } else {
              bgVideoRef.current.pause();
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [isBgVideoPlaying]);

  const stats = [
    { value: '150+', label: 'Projects Delivered', icon: FolderCheck },
    { value: '80+', label: 'Happy Clients', icon: Users },
    { value: '5+', label: 'Years Experience', icon: Award },
    { value: '98%', label: 'Client Satisfaction', icon: TrendingUp },
  ];

  const toggleBgPlay = (e) => {
    e.stopPropagation();
    if (!bgVideoRef.current) return;
    if (isBgVideoPlaying) {
      bgVideoRef.current.pause();
      setIsBgVideoPlaying(false);
    } else {
      bgVideoRef.current.play().catch(() => {});
      setIsBgVideoPlaying(true);
    }
  };

  const toggleBgMute = (e) => {
    e.stopPropagation();
    if (!bgVideoRef.current) return;
    bgVideoRef.current.muted = !isBgMuted;
    setIsBgMuted(!isBgMuted);
  };

  return (
    <section 
      ref={sectionRef}
      id="home" 
      className="relative pt-28 pb-16 md:pt-36 md:pb-24 lg:pt-40 lg:pb-28 overflow-hidden bg-[#06123D]"
      style={{ contain: 'layout paint' }}
    >
      
      {/* ========================================================================= */}
      {/* 1. VIBRANT, HIGHLY VISIBLE AMBIENT BACKGROUND VIDEO                       */}
      {/* ========================================================================= */}
      <div 
        ref={parallaxRef}
        className="absolute inset-0 w-full h-[120%] -top-[10%] overflow-hidden pointer-events-none z-0"
        style={{ willChange: 'transform' }}
      >
        {/* Background Video: Replaced with official logo.mp4 */}
        <video
          ref={bgVideoRef}
          autoPlay
          loop
          muted={isBgMuted}
          playsInline
          preload="metadata"
          className="w-full h-full object-cover scale-105 opacity-80 sm:opacity-90 brightness-105 contrast-105 filter transition-opacity duration-500"
        >
          <source src="./logo.mp4" type="video/mp4" />
          <source src="./hero-video.mp4" type="video/mp4" />
        </video>

        {/* Targeted Left-Side Text Scrim: Protects typography without darkening the whole video */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#06123D]/95 via-[#06123D]/70 via-40% to-[#06123D]/25 pointer-events-none" />

        {/* Top Seamless Transition Blending under Fixed Navbar */}
        <div className="absolute top-0 inset-x-0 h-28 bg-gradient-to-b from-[#06123D] via-[#06123D]/60 to-transparent pointer-events-none" />

        {/* Bottom Seamless Transition Blending into ClientLogos */}
        <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-[#06123D] via-[#06123D]/75 to-transparent pointer-events-none" />
      </div>

      {/* Ambient Brand Glowing Orbs Matching Exact Logo Palette (Cyan & Orange) */}
      <div 
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-[var(--cyan-accent)]/20 rounded-full blur-3xl pointer-events-none z-[1] animate-pulse-glow"
        style={{ transform: 'translateZ(0)' }} 
      />
      <div 
        className="absolute top-1/3 right-12 w-96 h-96 bg-[var(--brand-orange)]/20 rounded-full blur-3xl pointer-events-none z-[1]"
        style={{ transform: 'translateZ(0)' }} 
      />
      <div 
        className="absolute -bottom-10 left-10 w-96 h-96 bg-[var(--primary-blue)]/25 rounded-full blur-3xl pointer-events-none z-[1]"
        style={{ transform: 'translateZ(0)' }} 
      />
      
      {/* Subtle Studio Architectural Tech Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,200,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,200,255,0.06)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_20%,#000_70%,transparent_100%)] pointer-events-none z-[1]" />

      {/* Floating Ambient Story Video Controls Pill */}
      <div className="absolute bottom-5 right-6 z-20 hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#06123D]/95 backdrop-blur-md border border-white/20 text-white shadow-xl">
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse mr-1" />
        <span className="text-[11px] font-semibold text-slate-200">Ambient Story</span>
        
        <button
          onClick={toggleBgPlay}
          title={isBgVideoPlaying ? "Pause background video" : "Play background video"}
          aria-label={isBgVideoPlaying ? "Pause background video" : "Play background video"}
          className="p-1 rounded-full hover:bg-white/10 text-slate-300 hover:text-white transition-colors cursor-pointer min-w-[26px] min-h-[26px] flex items-center justify-center"
        >
          {isBgVideoPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 fill-white" />}
        </button>

        <button
          onClick={toggleBgMute}
          title={isBgMuted ? "Unmute audio" : "Mute audio"}
          aria-label={isBgMuted ? "Unmute audio" : "Mute audio"}
          className="p-1 rounded-full hover:bg-white/10 text-slate-300 hover:text-white transition-colors cursor-pointer min-w-[26px] min-h-[26px] flex items-center justify-center"
        >
          {isBgMuted ? <VolumeX className="w-3.5 h-3.5 text-[var(--brand-orange)]" /> : <Volume2 className="w-3.5 h-3.5 text-[var(--cyan-accent)]" />}
        </button>
      </div>

      {/* ========================================================================= */}
      {/* 2. HERO FOREGROUND CONTENT: 100% HIGH-CONTRAST READABILITY                */}
      {/* ========================================================================= */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Headline, Copy, Action CTAs & Proof Stats */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-7 text-left">
            
            {/* Pill Tag with Brand Colors */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#06123D]/90 backdrop-blur-md border border-[var(--cyan-accent)]/50 text-xs sm:text-sm font-semibold text-white shadow-xl">
              <span className="w-5 h-5 rounded-full bg-[var(--brand-orange)]/25 flex items-center justify-center text-[var(--brand-orange)]">
                <Zap className="w-3.5 h-3.5 fill-[var(--brand-orange)]" />
              </span>
              <span className="font-heading font-medium tracking-wide">A Growth-Focused Digital Agency</span>
            </div>

            {/* Main Single H1 with Sharp Contrast & Multi-Layer Drop Shadow */}
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-[1.14] drop-shadow-[0_2px_16px_rgba(0,0,0,0.95)] font-heading">
              We Build Digital Experiences That Drive{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00C8FF] via-[#0B5CFF] to-[#FF7A00] drop-shadow-[0_2px_10px_rgba(255,122,0,0.5)]">
                Real Growth
              </span>
            </h1>

            {/* Subtitle with High-Contrast Legibility */}
            <p className="text-base sm:text-lg text-slate-100 font-normal leading-relaxed max-w-2xl drop-shadow-[0_1px_6px_rgba(0,0,0,0.9)]">
              From high-converting websites and scalable software to performance SEO, viral reels and data-driven marketing — Click On Media is your dedicated digital growth partner.
            </p>

            {/* Action Buttons: Primary Orange Gradient + Secondary Glass */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4 pt-1">
              <button
                onClick={onOpenQuote}
                className="btn-primary text-sm sm:text-base !py-3.5 !px-8 group justify-center shadow-[0_4px_24px_rgba(255,122,0,0.6)] hover:shadow-[0_6px_32px_rgba(255,122,0,0.8)]"
              >
                <span>Start Your Project</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              <button
                onClick={onOpenVideo}
                className="btn-secondary !text-white !border-[var(--cyan-accent)]/60 hover:!border-[var(--cyan-accent)] hover:!bg-white/10 text-sm sm:text-base !py-3.5 !px-7 group justify-center backdrop-blur-md bg-[#06123D]/80 shadow-lg"
              >
                <span className="w-6 h-6 rounded-full bg-white/15 flex items-center justify-center text-[var(--brand-orange)] group-hover:scale-110 transition-transform">
                  <Play className="w-3 h-3 fill-[var(--brand-orange)] translate-x-0.5" />
                </span>
                <span>Watch Our Story</span>
              </button>
            </div>

            {/* Metrics & Proof Stats (High-Contrast Frosted Card) */}
            <div className="pt-6">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-[#06123D]/85 backdrop-blur-md border border-white/15 shadow-2xl">
                {stats.map((stat, idx) => {
                  const IconComponent = stat.icon;
                  return (
                    <div key={idx} className="space-y-1">
                      <div className="flex items-center gap-2">
                        <IconComponent className="w-4 h-4 text-[var(--brand-orange)] flex-shrink-0" />
                        <span className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight drop-shadow font-heading">
                          {stat.value}
                        </span>
                      </div>
                      <p className="text-xs sm:text-[13px] font-medium text-slate-200">
                        {stat.label}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Right Column: 3D Laptop Showcase with Official Logo Emblem */}
          <div className="lg:col-span-5 relative flex items-center justify-center pt-6 lg:pt-0">
            
            {/* Ambient Platform Glow under laptop (Matching Logo Cyan & Orange) */}
            <div 
              className="absolute -bottom-8 w-3/4 h-24 bg-gradient-to-r from-[var(--cyan-accent)]/35 via-[var(--brand-orange)]/30 to-[var(--amber)]/20 rounded-full blur-2xl pointer-events-none"
              style={{ transform: 'translateZ(0)' }}
            />

            {/* Floating Badge 1: Top-Left (Web & App Development) */}
            <div 
              onClick={() => onSelectService && onSelectService('web-dev')}
              className="absolute -top-3 left-0 sm:-top-4 sm:-left-6 z-30 animate-float cursor-pointer"
            >
              <div className="flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2.5 rounded-2xl bg-[#06123D]/95 backdrop-blur-xl border border-[var(--cyan-accent)]/50 text-white text-xs sm:text-sm font-bold shadow-2xl hover:border-[var(--cyan-accent)] hover:scale-105 transition-all">
                <span className="p-1 rounded-lg bg-[var(--primary-blue)]/20 text-[var(--cyan-accent)]">
                  <Code2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </span>
                <span>Web & App Development</span>
              </div>
            </div>

            {/* Floating Badge 2: Mid-Left (Digital Marketing - Tablet & Desktop) */}
            <div 
              onClick={() => onSelectService && onSelectService('marketing')}
              className="absolute top-24 left-0 sm:top-28 sm:-left-10 z-30 animate-float-delayed cursor-pointer hidden sm:block"
            >
              <div className="flex items-center gap-2.5 px-4 py-2 rounded-2xl bg-[#06123D]/95 backdrop-blur-xl border border-[var(--brand-orange)]/50 text-white text-xs sm:text-sm font-bold shadow-2xl hover:border-[var(--brand-orange)] hover:scale-105 transition-all">
                <span className="p-1.5 rounded-lg bg-[var(--brand-orange)]/20 text-[var(--brand-orange)]">
                  <Megaphone className="w-4 h-4" />
                </span>
                <span>Digital Marketing</span>
              </div>
            </div>

            {/* Floating Badge 3: Top-Right (SEO & Performance) */}
            <div 
              onClick={() => onSelectService && onSelectService('seo')}
              className="absolute -top-2 right-0 sm:-right-6 z-30 animate-float cursor-pointer"
            >
              <div className="flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2.5 rounded-2xl bg-[#06123D]/95 backdrop-blur-xl border border-[var(--cyan-accent)]/50 text-white text-xs sm:text-sm font-bold shadow-2xl hover:border-[var(--cyan-accent)] hover:scale-105 transition-all">
                <span className="p-1 rounded-lg bg-[var(--primary-blue)]/20 text-[var(--cyan-accent)]">
                  <Search className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </span>
                <span>SEO & Performance</span>
              </div>
            </div>

            {/* Floating Badge 4: Bottom-Right (Branding & Creative - Tablet & Desktop) */}
            <div 
              onClick={() => onSelectService && onSelectService('branding')}
              className="absolute bottom-8 right-0 sm:bottom-12 sm:-right-6 z-30 animate-float-delayed cursor-pointer hidden sm:block"
            >
              <div className="flex items-center gap-2.5 px-4 py-2 rounded-2xl bg-[#06123D]/95 backdrop-blur-xl border border-[var(--brand-orange)]/50 text-white text-xs sm:text-sm font-bold shadow-2xl hover:border-[var(--brand-orange)] hover:scale-105 transition-all">
                <span className="p-1.5 rounded-lg bg-[var(--brand-orange)]/20 text-[var(--brand-orange)]">
                  <Palette className="w-4 h-4" />
                </span>
                <span>Branding & Creative</span>
              </div>
            </div>

            {/* 3D Modern Laptop Mockup */}
            <div className="relative w-full max-w-lg transition-transform duration-500 hover:rotate-1 hover:scale-[1.01]">
              
              {/* Laptop Screen Bezel */}
              <div className="bg-[#06123D] rounded-t-2xl p-2.5 pt-3 shadow-2xl border-t border-l border-r border-[var(--cyan-accent)]/40">
                {/* Camera dot */}
                <div className="w-1.5 h-1.5 rounded-full bg-slate-600 mx-auto mb-2" />
                
                {/* Screen Display Area: Clean 3D Growth Emblem & Live Dashboard */}
                <div 
                  onClick={onOpenVideo}
                  className="relative rounded-lg overflow-hidden bg-gradient-to-br from-[#061448] via-[#0A1F6B] to-[#040E32] border border-[var(--cyan-accent)]/40 aspect-[16/10] p-4 flex flex-col justify-between text-white shadow-inner cursor-pointer group"
                >
                  
                  {/* Subtle Grid on Screen */}
                  <div className="absolute inset-0 bg-[radial-gradient(var(--cyan-accent)_1px,transparent_1px)] [background-size:16px_16px] opacity-20 pointer-events-none" />

                  {/* Top Bar inside Screen */}
                  <div className="relative z-10 flex items-center justify-between pb-2 border-b border-white/10">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                      <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                      <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                      <span className="text-[10px] text-slate-300 font-mono ml-2">clickonmedia.com/dashboard</span>
                    </div>
                    <span className="text-[9px] px-2 py-0.5 rounded-full bg-green-500/20 text-green-400 font-semibold flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-ping" /> Live Metrics
                    </span>
                  </div>

                  {/* Center of Screen: Official 3D Click On Media Emblem */}
                  <div className="relative z-10 my-auto flex flex-col items-center justify-center">
                    <div className="relative">
                      {/* Radial Glow behind logo */}
                      <div className="absolute inset-0 bg-[var(--cyan-accent)]/30 blur-xl rounded-full scale-125 pointer-events-none" />
                      <div className="relative w-28 h-28 sm:w-32 sm:h-32 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                        <img 
                          src="./clickonmedia-icon-trans.png" 
                          alt="Click On Media Official Emblem"
                          width="128"
                          height="128"
                          className="w-full h-full object-contain filter drop-shadow-[0_8px_24px_rgba(255,122,0,0.7)]"
                        />
                      </div>
                    </div>

                    {/* Floating "+142% Growth" metric badge */}
                    <div className="absolute -bottom-2 -left-2 bg-[#06123D]/95 border border-[var(--cyan-accent)]/50 rounded-xl px-3 py-1.5 shadow-xl backdrop-blur-md flex items-center gap-2">
                      <span className="text-xs font-bold text-emerald-400">+142% ↗</span>
                      <span className="text-[10px] text-slate-200 font-medium">Monthly Growth</span>
                    </div>

                    {/* Play Overlay Hint */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40 rounded-lg backdrop-blur-xs">
                      <div className="btn-primary text-xs !py-1.5 !px-3.5">
                        <Play className="w-3.5 h-3.5 fill-white" />
                        <span>Watch Story</span>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Bar: Mini Sparkline & Status */}
                  <div className="relative z-10 flex items-center justify-between pt-2 border-t border-white/10">
                    <div className="flex items-center gap-2">
                      <div className="w-16 h-4 flex items-end gap-1">
                        <span className="w-1.5 h-1.5 bg-[var(--primary-blue)] rounded-sm"></span>
                        <span className="w-1.5 h-2 bg-[var(--cyan-accent)] rounded-sm"></span>
                        <span className="w-1.5 h-3 bg-[var(--primary-blue)] rounded-sm"></span>
                        <span className="w-1.5 h-2.5 bg-[var(--brand-orange)] rounded-sm"></span>
                        <span className="w-1.5 h-4 bg-[var(--amber)] rounded-sm animate-pulse"></span>
                      </div>
                      <span className="text-[9px] text-slate-300 font-medium">Conversion Optimised</span>
                    </div>
                    <span className="text-[9px] text-[var(--brand-orange)] font-bold tracking-wider">CLICK ON MEDIA</span>
                  </div>

                </div>
              </div>

              {/* Laptop Keyboard Base & Hinge */}
              <div className="relative h-4 bg-gradient-to-b from-[#0D2680] to-[#06123D] rounded-b-xl shadow-2xl flex items-center justify-center border-t border-[var(--cyan-accent)]/30">
                <div className="w-20 h-1.5 bg-slate-700/80 rounded-b-sm" />
              </div>
              {/* Laptop Base Lip */}
              <div className="mx-auto w-[104%] -ml-[2%] h-2 bg-gradient-to-b from-[#06123D] to-[#040E32] rounded-b-lg shadow-xl" />

              {/* Pedestal Stylized Base with Brand Orange Light Accent */}
              <div className="mt-2 mx-auto w-4/5 h-4 bg-gradient-to-r from-[#040E32] via-[#06123D] to-[#040E32] rounded-full blur-[2px] border-b border-[var(--brand-orange)]/40" />
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
