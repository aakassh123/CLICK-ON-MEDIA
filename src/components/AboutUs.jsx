import React, { useState } from 'react';
import RevealHeading from './RevealHeading';
import { ArrowLeft, ArrowRight, Zap, CheckCircle2, ChevronRight, Award, Users } from 'lucide-react';
import Logo from './Logo';

export default function AboutUs({ onOpenConsultation }) {
  const [activeStoryIndex, setActiveStoryIndex] = useState(0);

  const storyCards = [
    {
      id: 1,
      badge: 'THE INCEPTION',
      badgeColor: 'bg-white/20 text-white',
      cardBg: 'bg-[#0B5CFF]', // Royal Blue from logo
      textColor: 'text-white',
      title: 'A long time ago in a spare room...',
      content: 'In 2019, Click On Media began with 2 laptops and an obsession: to eliminate generic agency bloat and engineer authentic, high-converting digital flagships for ambitious brands.',
      footerTag: '2 Laptops • 1 Relentless Vision'
    },
    {
      id: 2,
      badge: 'LEADERSHIP & MISSION',
      badgeColor: 'bg-white/25 text-white',
      cardBg: 'bg-[#FF7A00]', // Brand Orange from logo
      textColor: 'text-white',
      hasImage: true,
      imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80',
      title: 'Why Click On Media was Founded',
      content: 'Our leadership set up Click On Media after noticing a critical market gap: businesses were paying massive retainers for vanity impressions instead of real, measurable revenue.',
      footerTag: 'Relationship-Centric Growth'
    },
    {
      id: 3,
      badge: 'CLIENT IMPACT',
      badgeColor: 'bg-white/15 text-[var(--cyan-accent)]',
      cardBg: 'bg-[#0A1A4A]', // Deep Navy from logo
      textColor: 'text-white',
      title: 'Early Clients & Lasting Alliances',
      content: 'Early clients included healthcare leaders, regional retail flagships, and national startups — 98% of whom continue to scale their digital growth with us today.',
      footerTag: '150+ Projects • 80+ Retained Brands'
    },
    {
      id: 4,
      badge: 'TODAY & TOMORROW',
      badgeColor: 'bg-[var(--deep-navy)]/20 text-[var(--deep-navy)]',
      cardBg: 'bg-gradient-to-br from-[#00C8FF] to-[#0B5CFF]', // Cyan to Blue gradient
      textColor: 'text-white',
      title: 'A Full-Service Growth Machine',
      content: 'Today, our multidisciplinary squad of engineers, 3D brand designers, and performance marketers builds sub-second flagships and high-ROAS funnels across India.',
      footerTag: 'Sub-Second Speeds • Measurable ROI'
    }
  ];

  const handleNext = () => {
    setActiveStoryIndex((prev) => Math.min(storyCards.length - 1, prev + 1));
  };

  const handlePrev = () => {
    setActiveStoryIndex((prev) => Math.max(0, prev - 1));
  };

  return (
    <section id="about" className="py-20 sm:py-24 lg:py-32 bg-transparent text-slate-800 relative overflow-hidden">
      
      {/* ========================================================================= */}
      {/* 1. BACKGROUND GEOMETRIC AMBIENCE MATCHING LOGO PALETTE                    */}
      {/* ========================================================================= */}
      {/* Large Ambient Orange Aura on Right */}
      <div 
        className="absolute -right-24 sm:-right-36 top-1/2 -translate-y-1/2 w-80 sm:w-96 md:w-[480px] h-80 sm:h-96 md:h-[480px] rounded-full bg-[var(--brand-orange)]/15 pointer-events-none opacity-90 z-0 blur-3xl"
        style={{ transform: 'translateZ(0)' }}
      />

      {/* Floating Brand Orange Dot on Bottom Left */}
      <div 
        className="absolute left-6 sm:left-12 bottom-8 sm:bottom-12 w-6 sm:w-8 h-6 sm:h-8 rounded-full bg-[var(--brand-orange)]/40 pointer-events-none z-0 shadow-lg"
        style={{ transform: 'translateZ(0)' }}
      />

      {/* Subtle Brand Glows in Center */}
      <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-[var(--primary-blue)]/10 rounded-full blur-[140px] pointer-events-none z-0" />

      {/* ========================================================================= */}
      {/* 2. MAIN CENTER SHOWCASE "OUR STORY" CARD CONTAINER                        */}
      {/* ========================================================================= */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="rounded-3xl sm:rounded-[36px] overflow-hidden shadow-2xl border border-slate-200/90 bg-white grid grid-cols-1 lg:grid-cols-12 min-h-[520px]">
          
          {/* --------------------------------------------------------------------- */}
          {/* LEFT HALF: FULL-BLEED PHOTOGRAPHIC VISUAL ANCHOR (5 Cols)             */}
          {/* --------------------------------------------------------------------- */}
          <div className="lg:col-span-5 relative min-h-[380px] sm:min-h-[460px] lg:min-h-[520px] flex flex-col justify-end p-6 sm:p-8 lg:p-10 overflow-hidden group">
            
            {/* Background Photographic Scene: Team outdoor terrace collaboration (like reference) */}
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80" 
              alt="Click On Media Team Collaboration in Gorakhpur, UP"
              className="absolute inset-0 w-full h-full object-cover object-center filter brightness-90 group-hover:scale-105 transition-transform duration-700 pointer-events-none"
              loading="lazy"
            />

            {/* Dark Scrim Vignette for 100% Text Legibility */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-black/20 pointer-events-none" />

            {/* Top Pill: Brand Identifier */}
            <div className="absolute top-6 left-6 z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-[11px] font-heading font-bold text-white shadow-lg">
                <span className="w-2 h-2 rounded-full bg-[var(--brand-orange)] animate-ping" />
                <span>CLICK ON MEDIA</span>
              </div>
            </div>

            {/* Bottom Content: "OUR STORY" & Narrative Tag */}
            <div className="relative z-10 space-y-3">
              <RevealHeading tag="h2" delay={120} direction="up" blur={true} className="text-3xl sm:text-4xl lg:text-5xl font-heading font-black text-white tracking-tight uppercase leading-none drop-shadow-md">
                OUR STORY
              </RevealHeading>

              <p className="text-xs sm:text-sm text-slate-200 font-medium leading-relaxed max-w-sm drop-shadow">
                HOW A 2-PERSON HUSTLE IN GORAKHPUR GREW INTO A FULL-SERVICE DIGITAL DOMINANCE MACHINE.
              </p>

              <div className="pt-2 flex items-center gap-3">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-[11px] font-bold text-white uppercase tracking-wider shadow-sm">
                  <span className="w-2 h-2 rounded-full bg-white" />
                  <span>THE FOUNDATION</span>
                </div>

                <button
                  onClick={onOpenConsultation}
                  className="text-xs font-bold text-[var(--cyan-accent)] hover:text-[var(--brand-orange)] transition-colors flex items-center gap-1 cursor-pointer"
                >
                  <span>Meet Us</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

          </div>

          {/* --------------------------------------------------------------------- */}
          {/* RIGHT HALF: HORIZONTAL STORY CHRONICLE CARDS SLIDER (7 Cols)          */}
          {/* --------------------------------------------------------------------- */}
          <div className="lg:col-span-7 bg-white text-[var(--text-dark)] p-6 sm:p-8 lg:p-10 flex flex-col justify-between overflow-hidden relative">
            
            {/* Top Bar inside White Panel */}
            <div className="flex items-center justify-between pb-4 border-b border-slate-100">
              <div>
                <span className="text-[10px] font-heading font-bold uppercase tracking-widest text-[var(--brand-orange)]">
                  CHRONICLE & MILESTONES
                </span>
                <div className="text-xs sm:text-sm font-bold text-[var(--deep-navy)] mt-0.5">
                  How We Scale Brands That Last
                </div>
              </div>

              {/* Progress Count */}
              <div className="font-mono text-xs font-bold text-slate-400 bg-slate-100 px-2.5 py-1 rounded-full">
                0{activeStoryIndex + 1} / 0{storyCards.length}
              </div>
            </div>

            {/* Sliding Cards Track */}
            <div className="py-6 overflow-hidden relative">
              <div 
                className="flex gap-4 sm:gap-5 transition-transform duration-500 ease-out"
                style={{
                  transform: `translateX(-${activeStoryIndex * (window.innerWidth < 640 ? 250 : 280)}px)`
                }}
              >
                {storyCards.map((card, idx) => {
                  const isActive = idx === activeStoryIndex;
                  return (
                    <div
                      key={card.id}
                      onClick={() => setActiveStoryIndex(idx)}
                      className={`w-[240px] sm:w-[270px] min-h-[310px] sm:min-h-[330px] rounded-2xl p-5 sm:p-6 flex flex-col justify-between shadow-lg transition-all duration-300 flex-shrink-0 cursor-pointer ${card.cardBg} ${card.textColor} ${
                        isActive 
                          ? 'ring-2 ring-[var(--deep-navy)]/30 scale-[1.01] shadow-xl' 
                          : 'opacity-90 hover:opacity-100'
                      }`}
                    >
                      {/* Top Badge & Number */}
                      <div className="flex items-center justify-between">
                        <span className={`text-[9px] sm:text-[10px] font-heading font-bold uppercase tracking-wider px-2.5 py-1 rounded-full ${card.badgeColor}`}>
                          {card.badge}
                        </span>
                        <span className="font-mono text-xs font-bold opacity-75">
                          0{card.id}
                        </span>
                      </div>

                      {/* Card Content or Image */}
                      <div className="my-auto space-y-2.5 pt-2">
                        {card.hasImage && (
                          <div className="w-12 h-12 rounded-xl overflow-hidden border border-white/30 shadow-sm mb-2">
                            <img 
                              src={card.imageUrl} 
                              alt="Click On Media Founder" 
                              className="w-full h-full object-cover filter contrast-105"
                              loading="lazy"
                            />
                          </div>
                        )}

                        <h3 className="text-base sm:text-lg font-heading font-bold tracking-tight leading-snug">
                          {card.title}
                        </h3>

                        <p className="text-xs sm:text-[13px] leading-relaxed opacity-95 line-clamp-4">
                          {card.content}
                        </p>
                      </div>

                      {/* Card Bottom Tag */}
                      <div className="pt-3 border-t border-white/20 text-[10px] sm:text-[11px] font-semibold tracking-wide flex items-center justify-between opacity-90">
                        <span>{card.footerTag}</span>
                        <ChevronRight className="w-3.5 h-3.5 opacity-75" />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Bottom Controls Bar: Dots & Navigation Arrows */}
            <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
              
              {/* Pagination Dots */}
              <div className="flex items-center gap-1.5">
                {storyCards.map((_, dotIdx) => (
                  <button
                    key={dotIdx}
                    onClick={() => setActiveStoryIndex(dotIdx)}
                    className={`h-2 rounded-full transition-all cursor-pointer ${
                      dotIdx === activeStoryIndex 
                        ? 'w-6 bg-[var(--brand-orange)]' 
                        : 'w-2 bg-slate-200 hover:bg-slate-300'
                    }`}
                    aria-label={`Go to story slide ${dotIdx + 1}`}
                  />
                ))}
              </div>

              {/* Navigation Action Area */}
              <div className="flex items-center gap-3">
                <button
                  onClick={onOpenConsultation}
                  className="hidden sm:inline-flex text-xs font-bold text-[var(--primary-blue)] hover:text-[var(--brand-orange)] transition-colors cursor-pointer"
                >
                  <span>Talk with Founders →</span>
                </button>

                {/* Left Arrow */}
                <button
                  onClick={handlePrev}
                  disabled={activeStoryIndex === 0}
                  className={`w-9 h-9 rounded-full border flex items-center justify-center transition-all cursor-pointer ${
                    activeStoryIndex === 0 
                      ? 'border-slate-200 text-slate-300 cursor-not-allowed opacity-50' 
                      : 'border-slate-300 text-slate-700 hover:border-[var(--brand-orange)] hover:text-[var(--brand-orange)] hover:scale-105 active:scale-95 shadow-xs'
                  }`}
                  aria-label="Previous story slide"
                >
                  <ArrowLeft className="w-4 h-4" />
                </button>

                {/* Right Arrow */}
                <button
                  onClick={handleNext}
                  disabled={activeStoryIndex === storyCards.length - 1}
                  className={`w-9 h-9 rounded-full border flex items-center justify-center transition-all cursor-pointer ${
                    activeStoryIndex === storyCards.length - 1 
                      ? 'border-slate-200 text-slate-300 cursor-not-allowed opacity-50' 
                      : 'border-slate-300 text-slate-700 hover:border-[var(--brand-orange)] hover:text-[var(--brand-orange)] hover:scale-105 active:scale-95 shadow-xs'
                  }`}
                  aria-label="Next story slide"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
