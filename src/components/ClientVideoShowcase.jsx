import React, { useState, useRef } from 'react';
import RevealHeading from './RevealHeading';
import { 
  Play, 
  Pause, 
  ChevronLeft, 
  ChevronRight, 
  CheckCircle2, 
  Video,
  Loader2
} from 'lucide-react';

const CLIENT_STORIES = [
  {
    id: 'usha-tvs',
    name: 'Usha G TVS',
    fullName: 'Usha G TVS Two-Wheeler Showroom',
    subtitle: 'Authorized TVS Showroom',
    location: 'Gorakhpur, Uttar Pradesh',
    videoSrc: '/projects/hotel-adalat-video.mp4',
    poster: '/projects/thumb-usha-tvs.jpg',
    duration: '0:45',
    verified: true
  },
  {
    id: 'hotel-devki-inn',
    name: 'Hotel Devki Inn',
    fullName: 'Hotel Devki Inn & Gourmet Restaurant',
    subtitle: 'Artisan Fresh Pizza Reel',
    location: 'Transport Nagar, Gorakhpur',
    videoSrc: '/projects/hotel-devki-inn-video.mp4',
    poster: '/projects/thumb-hotel-devki-inn.jpg',
    duration: '0:28',
    verified: true
  },
  {
    id: 'adalat-biryani',
    name: 'Adalat Restaurant',
    fullName: 'Adalat Restaurant - Handi Specialist',
    subtitle: 'Taste of Gorakhpur • Handi Meat',
    location: 'Kunraghat, Gorakhpur',
    videoSrc: '/projects/mapaz-hotel-video.mp4',
    poster: '/projects/thumb-adalat-restaurant.jpg',
    duration: '0:24',
    verified: true
  },
  {
    id: 'batipur',
    name: 'Batipur',
    fullName: 'Batipur Heritage Village Dining',
    subtitle: 'Heritage Litti Chokha & Dining',
    location: 'Gorakhpur, Uttar Pradesh',
    videoSrc: '/projects/batipur-video.mp4',
    poster: '/projects/thumb-batipur.jpg',
    duration: '0:21',
    verified: true
  },
  {
    id: 'agastya-yoga',
    name: 'Agastya Yoga',
    fullName: 'Agastya Yoga Goa Retreat',
    subtitle: 'Goa Retreat & Yoga Immersion',
    location: 'Goa, India',
    videoSrc: '/projects/agastya-yoga-video.mp4',
    poster: '/projects/thumb-agastya-yoga.jpg',
    duration: '0:47',
    verified: true
  },
  {
    id: 'devki-inn-banquet',
    name: 'Devki Inn Banquet',
    fullName: 'Hotel Devki Inn Luxury Banquet & Events',
    subtitle: 'Luxury Banquet & Celebrations',
    location: 'Transport Nagar, Gorakhpur',
    videoSrc: '/projects/devki-inn-banquet-video.mp4',
    poster: '/projects/thumb-devki-inn-banquet.jpg',
    duration: '0:43',
    verified: true
  }
];

export default function ClientVideoShowcase() {
  const [playingCardId, setPlayingCardId] = useState(null);
  const [bufferingCardId, setBufferingCardId] = useState(null);
  const [cardProgress, setCardProgress] = useState({});

  const carouselRef = useRef(null);
  const cardVideoRefs = useRef({});

  // Scroll carousel left / right
  const scrollCarousel = (direction) => {
    if (!carouselRef.current) return;
    const scrollAmount = direction === 'left' ? -320 : 320;
    carouselRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  };

  // Toggle card playback inline with sound enabled
  const toggleCardPlay = (storyId) => {
    // Pause other playing cards
    Object.keys(cardVideoRefs.current).forEach((id) => {
      if (id !== storyId && cardVideoRefs.current[id]) {
        cardVideoRefs.current[id].pause();
      }
    });

    const v = cardVideoRefs.current[storyId];
    if (!v) return;

    if (playingCardId === storyId && !v.paused) {
      v.pause();
      setPlayingCardId(null);
      setBufferingCardId(null);
    } else {
      v.playsInline = true;
      v.muted = false; // Audio plays directly without mute button
      setBufferingCardId(storyId);

      v.play()
        .then(() => {
          setPlayingCardId(storyId);
          setBufferingCardId(null);
        })
        .catch(() => {
          // If unmuted autoplay blocked by browser, try muted then immediately enable on interaction
          v.muted = true;
          v.play()
            .then(() => {
              setPlayingCardId(storyId);
              setBufferingCardId(null);
            })
            .catch(() => {
              setBufferingCardId(null);
            });
        });
    }
  };

  // Track playback progress for active card
  const handleTimeUpdate = (storyId) => {
    const v = cardVideoRefs.current[storyId];
    if (v && v.duration) {
      const p = (v.currentTime / v.duration) * 100;
      setCardProgress((prev) => ({ ...prev, [storyId]: p }));
    }
  };

  return (
    <section 
      id="client-videos" 
      className="py-14 sm:py-20 lg:py-24 bg-gradient-to-b from-white via-slate-50/60 to-white text-slate-800 relative overflow-hidden border-t border-slate-200/60"
    >
      {/* Background Soft Glow Accents */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-[var(--primary-blue)]/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-[var(--brand-orange)]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ----------------------------------------------------------------- */}
        {/* 1. SECTION HEADER                                                 */}
        {/* ----------------------------------------------------------------- */}
        <div className="text-center max-w-3xl mx-auto space-y-2.5 sm:space-y-3.5 mb-10 sm:mb-14">
          
          {/* Top Pill Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-1.5 rounded-full bg-white border border-[var(--primary-blue)]/20 text-xs font-semibold text-[#0A1F6B] shadow-xs">
            <span className="w-2.5 h-2.5 rounded-full bg-[var(--brand-orange)] shadow-[0_0_10px_#FF7A00] animate-pulse flex-shrink-0" />
            <span className="text-[var(--brand-orange)] uppercase tracking-wider text-[11px] font-bold font-heading">
              Featured Client Video
            </span>
            <span className="text-slate-300">•</span>
            <span className="text-[#071133] font-bold text-[11px] sm:text-xs flex items-center gap-1">
              <Video className="w-3.5 h-3.5 text-[var(--cyan-accent)] flex-shrink-0" />
              <span>Real Work &amp; Measurable Growth</span>
            </span>
          </div>

          {/* Main Heading */}
          <RevealHeading tag="h2" delay={100} direction="up" blur={true} className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-black text-[#0A1F6B] tracking-tight leading-tight font-heading">
            Real Stories.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0B5CFF] via-[#00C8FF] to-[#FF7A00]">
              Real Proof.
            </span>
          </RevealHeading>

          {/* Subtitle */}
          <RevealHeading tag="p" delay={180} direction="up" className="text-xs xs:text-sm sm:text-base text-[#071133] font-bold leading-relaxed max-w-2xl mx-auto drop-shadow-[0_1px_2px_rgba(255,255,255,0.95)] px-2 sm:px-0">
            Watch how Gorakhpur and India’s leading businesses scale revenue, direct customer orders, and local search dominance with Click On Media.
          </RevealHeading>
        </div>

        {/* ----------------------------------------------------------------- */}
        {/* 2. REEL VIDEO CAROUSEL TRACK                                      */}
        {/* ----------------------------------------------------------------- */}
        <div className="relative group/carousel">

          {/* Desktop Navigation Arrow: Left */}
          <button
            onClick={() => scrollCarousel('left')}
            className="hidden md:flex absolute -left-4 lg:-left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/95 hover:bg-white text-[#0A1F6B] shadow-xl border border-slate-200/80 items-center justify-center transition-all duration-200 hover:scale-110 cursor-pointer z-20 group-hover/carousel:opacity-100 opacity-80"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-6 h-6 stroke-[2.5]" />
          </button>

          {/* Desktop Navigation Arrow: Right */}
          <button
            onClick={() => scrollCarousel('right')}
            className="hidden md:flex absolute -right-4 lg:-right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/95 hover:bg-white text-[#0A1F6B] shadow-xl border border-slate-200/80 items-center justify-center transition-all duration-200 hover:scale-110 cursor-pointer z-20 group-hover/carousel:opacity-100 opacity-80"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-6 h-6 stroke-[2.5]" />
          </button>

          {/* Horizontal Reel Cards Container */}
          <div
            ref={carouselRef}
            className="flex items-center gap-3.5 sm:gap-4 lg:gap-5 overflow-x-auto pb-6 pt-2 px-3 sm:px-1 scroll-smooth snap-x snap-mandatory scrollbar-none"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {CLIENT_STORIES.map((story) => {
              const isPlayingThis = playingCardId === story.id;
              const isBufferingThis = bufferingCardId === story.id;
              const progress = cardProgress[story.id] || 0;

              return (
                <div
                  key={story.id}
                  onClick={() => toggleCardPlay(story.id)}
                  className="flex-shrink-0 w-[78vw] xs:w-[260px] sm:w-[270px] lg:w-[285px] max-w-[290px] aspect-[9/16] rounded-2xl sm:rounded-3xl overflow-hidden relative group cursor-pointer bg-slate-950 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1.5 snap-center sm:snap-start border border-slate-200/70 select-none"
                >
                  {/* Video Element with High-Quality Video-Specific Thumbnail Poster */}
                  <video
                    ref={(el) => (cardVideoRefs.current[story.id] = el)}
                    src={story.videoSrc}
                    poster={story.poster}
                    playsInline
                    loop
                    preload="metadata"
                    onTimeUpdate={() => handleTimeUpdate(story.id)}
                    onWaiting={() => setBufferingCardId(story.id)}
                    onPlaying={() => setBufferingCardId(null)}
                    onCanPlay={() => {
                      if (bufferingCardId === story.id) setBufferingCardId(null);
                    }}
                    onEnded={() => {
                      setPlayingCardId(null);
                      setBufferingCardId(null);
                    }}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 pointer-events-none"
                  />

                  {/* Gradient Overlays for Readability */}
                  <div className={`absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-black/35 pointer-events-none transition-opacity duration-300 ${isPlayingThis ? 'opacity-40 hover:opacity-60' : 'opacity-80'}`} />

                  {/* Top-Right Play / Pause Button (Exact Match to Reference - No Mute Button) */}
                  <div className="absolute top-3 right-3 sm:top-4 sm:right-4 z-10">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleCardPlay(story.id);
                      }}
                      className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/95 hover:bg-white text-slate-900 shadow-md hover:shadow-lg flex items-center justify-center transition-all duration-200 hover:scale-110 cursor-pointer"
                      aria-label={isPlayingThis ? 'Pause video' : 'Play video'}
                    >
                      {isPlayingThis ? (
                        <Pause className="w-4 h-4 fill-slate-900 text-slate-900" />
                      ) : (
                        <Play className="w-4 h-4 fill-slate-900 text-slate-900 translate-x-0.5" />
                      )}
                    </button>
                  </div>

                  {/* Top-Left Duration & Verified Badge */}
                  <div className="absolute top-3 left-3 sm:top-4 sm:left-4 z-10 flex items-center gap-1.5">
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-black/60 backdrop-blur-md text-white border border-white/10">
                      {story.duration}
                    </span>
                    {story.verified && (
                      <span className="p-1 rounded-full bg-emerald-500/90 text-white shadow-xs">
                        <CheckCircle2 className="w-2.5 h-2.5 stroke-[3]" />
                      </span>
                    )}
                  </div>

                  {/* Center Buffering Spinner or Play Button */}
                  {isBufferingThis ? (
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
                      <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-black/60 backdrop-blur-xs flex items-center justify-center text-white shadow-lg animate-spin">
                        <Loader2 className="w-7 h-7 text-[var(--brand-orange)]" />
                      </div>
                    </div>
                  ) : !isPlayingThis ? (
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
                      <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-black/40 backdrop-blur-xs flex items-center justify-center text-white/90 group-hover:scale-110 group-hover:bg-[var(--brand-orange)] transition-all duration-300 shadow-lg">
                        <Play className="w-6 h-6 sm:w-7 sm:h-7 fill-current translate-x-0.5" />
                      </div>
                    </div>
                  ) : null}

                  {/* Bottom Progress Line on Active Card */}
                  {isPlayingThis && (
                    <div className="absolute bottom-0 inset-x-0 h-1 bg-white/20 z-20">
                      <div 
                        className="h-full bg-gradient-to-r from-[var(--primary-blue)] via-[var(--cyan-accent)] to-[var(--brand-orange)] transition-all duration-100 ease-linear"
                        style={{ width: `${progress}%` }}
                      />
                    </div>
                  )}

                  {/* Bottom Info: Subtitle & Golden Name Pill (Exact Match to Reference Video) */}
                  <div className="absolute bottom-3.5 inset-x-3 sm:bottom-4 sm:inset-x-4 z-10 flex flex-col items-center text-center">
                    
                    {/* Subtitle / Testimonial Metric Snippet */}
                    <p className="text-white text-xs sm:text-[13px] font-bold leading-snug drop-shadow-[0_2px_4px_rgba(0,0,0,0.95)] mb-2 px-1 line-clamp-1 truncate w-full text-center">
                      {story.subtitle}
                    </p>

                    {/* Golden / Amber Pill Badge with Client Name */}
                    <div className="px-4 py-1.5 rounded-full bg-[#F59E0B] text-slate-950 font-heading font-black text-xs sm:text-[13px] tracking-wide shadow-lg group-hover:scale-105 transition-transform flex items-center gap-1.5">
                      <span>{story.name}</span>
                    </div>

                  </div>

                </div>
              );
            })}
          </div>

          {/* Swipe indicator hint for mobile users */}
          <div className="md:hidden flex items-center justify-center gap-2 pt-1 text-slate-400 text-xs font-mono">
            <span>← Swipe to explore client reels →</span>
          </div>

        </div>

      </div>
    </section>
  );
}
