import React, { useRef, useState, useEffect } from 'react';

export default function GlobalScrollVideo({ isVideoModalOpen = false }) {
  const videoRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const lastScrollYRef = useRef(0);
  const lastTimeRef = useRef(Date.now());
  const velocityTimerRef = useRef(null);

  // Smooth scroll listener that calculates progress and velocity
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const y = window.scrollY;
          const maxScroll = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
          const progress = Math.min(Math.max(y / maxScroll, 0), 1);
          setScrollProgress(progress);

          const now = Date.now();
          const dt = Math.max(1, now - lastTimeRef.current);
          const dy = Math.abs(y - lastScrollYRef.current);
          const velocity = dy / dt; // pixels per ms

          lastScrollYRef.current = y;
          lastTimeRef.current = now;

          const video = videoRef.current;
          if (video && !video.paused) {
            // Dynamically adapt playback rate with scroll velocity (up to 1.45x)
            const targetRate = Math.min(1.0 + velocity * 0.35, 1.45);
            video.playbackRate = targetRate;
          }

          if (velocityTimerRef.current) clearTimeout(velocityTimerRef.current);
          velocityTimerRef.current = setTimeout(() => {
            if (videoRef.current && !videoRef.current.paused) {
              videoRef.current.playbackRate = 1.0;
            }
          }, 180);

          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });
    handleScroll();

    // Auto-pause when tab is hidden or user switches apps to conserve 100% device battery & memory
    const handleVisibilityChange = () => {
      if (document.hidden) {
        videoRef.current?.pause();
      } else if (!isVideoModalOpen) {
        videoRef.current?.play().catch(() => {});
      }
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      if (velocityTimerRef.current) clearTimeout(velocityTimerRef.current);
    };
  }, [isVideoModalOpen]);

  // Pause when full-screen video modal is open
  useEffect(() => {
    if (isVideoModalOpen) {
      videoRef.current?.pause();
    } else {
      videoRef.current?.play().catch(() => {});
    }
  }, [isVideoModalOpen]);

  // Dynamic visual parameters based on scrollProgress
  // In Hero (progress ~0): video is ultra-crisp (opacity 0.96)
  // Deeper in page: video remains smoothly visible all the way to the bottom of the website
  const videoOpacity = Math.max(0.52, 0.96 - scrollProgress * 0.44);
  const watermarkOpacity = Math.max(0.25, 0.45 - scrollProgress * 0.20);
  // Gentle cinematic parallax translation and subtle zoom
  const translateY = scrollProgress * -70; // subtly tracks scroll up to 70px
  const scale = 1.02 + scrollProgress * 0.05; // subtle slow cinematic breathe

  return (
    <div 
      className="fixed inset-0 w-full h-full pointer-events-none z-0 overflow-hidden select-none"
      aria-hidden="true"
    >
      {/* 1. CINEMATIC SCROLL-RESPONSIVE VIDEO CANVAS (MAXIMUM CLARITY) */}
      <div 
        className="absolute inset-0 w-full h-full flex items-center justify-center transition-transform duration-300 ease-out"
        style={{
          transform: `translate3d(0, ${translateY}px, 0) scale(${scale})`,
          willChange: 'transform'
        }}
      >
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          webkit-playsinline="true"
          preload="metadata"
          disablePictureInPicture
          disableRemotePlayback
          className="w-full h-full object-cover filter brightness-100 contrast-112 saturate-115 transition-opacity duration-300 pointer-events-none"
          style={{
            opacity: videoOpacity,
            imageRendering: '-webkit-optimize-contrast'
          }}
        >
          <source src="./hero-office-team.mp4" type="video/mp4" />
          <source src="./hero-video.mp4" type="video/mp4" />
        </video>

        {/* 2. AMBIENT BRAND WALL WATERMARK IN OFFICE BACKGROUND */}
        <div 
          className="absolute top-1/3 right-4 sm:right-10 lg:right-16 -translate-y-1/2 pointer-events-none filter drop-shadow-[0_10px_25px_rgba(11,92,255,0.35)] transition-opacity duration-500"
          style={{ opacity: watermarkOpacity }}
        >
          <img 
            src="./clickonmedia-logo-trans.png" 
            alt="Click On Media Brand Watermark" 
            className="w-48 sm:w-64 lg:w-80 object-contain"
          />
        </div>
      </div>

      {/* 4. SUBTLE ACCENT BRAND LIGHT CORE */}
      <div 
        className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] sm:w-[700px] h-[500px] sm:h-[700px] rounded-full bg-gradient-to-tr from-[var(--primary-blue)]/8 via-[var(--cyan-accent)]/6 to-transparent blur-3xl pointer-events-none animate-pulse-glow"
      />

      {/* 5. ARCHITECTURAL TECH STUDIO GRID (Subtle & Crisp) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(11,92,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(11,92,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_70%_at_50%_40%,#000_70%,transparent_100%)] pointer-events-none z-[1] opacity-60" />

      {/* 6. DIRECTIONAL SCRIM CONFINED TO LEFT TEXT COLUMN IN HERO */}
      <div 
        className="hidden lg:block absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-white/95 via-white/80 via-60% to-transparent pointer-events-none z-[1] transition-opacity duration-500"
        style={{ opacity: Math.max(0, 1 - scrollProgress * 3.5) }}
      />
      <div 
        className="lg:hidden absolute inset-0 bg-gradient-to-b from-white/90 via-white/70 via-45% to-transparent pointer-events-none z-[1] transition-opacity duration-500"
        style={{ opacity: Math.max(0, 1 - scrollProgress * 3.5) }}
      />

      {/* 7. GENTLE SCROLL READABILITY BACKDROP (Protects all text while video smoothly plays underneath) */}
      <div 
        className="absolute inset-0 bg-white/40 pointer-events-none z-[1] transition-opacity duration-500"
        style={{ opacity: Math.min(0.5, scrollProgress * 1.5) }}
      />

      {/* 7. DISCREET FLOATING CINEMATIC AMBIENCE INDICATOR (Bottom Left) */}
      <div className="pointer-events-none fixed bottom-5 left-5 z-30 hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-slate-200/80 shadow-md text-[11px] font-heading font-semibold text-slate-600 transition-opacity duration-300">
        <span className="w-2 h-2 rounded-full bg-[var(--brand-orange)] animate-pulse" />
        <span>Cinematic Workspace</span>
        <span className="text-slate-300">•</span>
        <span className="font-mono text-[var(--primary-blue)] font-bold">{Math.round(scrollProgress * 100)}%</span>
      </div>
    </div>
  );
}
