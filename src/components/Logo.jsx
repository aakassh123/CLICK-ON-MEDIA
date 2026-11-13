import React from 'react';

/**
 * Click On Media — Official Brand Logo Component
 * Renders the authentic official brand logo provided by the client.
 * Seamlessly integrates with the navbar and backgrounds with zero color mismatch.
 */
export default function Logo({ 
  variant = 'light', 
  className = '', 
  showTagline = true, 
  iconOnly = false,
  size = 'md' 
}) {
  // Responsive sizing map
  const sizeMap = {
    sm: {
      icon: 'w-7 h-7 sm:w-8 sm:h-8',
      logo: 'h-7 sm:h-8',
    },
    md: {
      icon: 'w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10',
      logo: 'h-8 sm:h-9 md:h-10 lg:h-11',
    },
    lg: {
      icon: 'w-11 h-11 sm:w-12 sm:h-12 md:w-14 md:h-14',
      logo: 'h-10 sm:h-12 md:h-14',
    }
  };

  const currentSize = sizeMap[size] || sizeMap.md;

  // 1. Icon Only View (Standalone 3D Emblem with luminous ambient glow)
  if (iconOnly) {
    return (
      <div className={`relative inline-flex items-center justify-center select-none group ${className}`}>
        <div className="absolute inset-0 bg-[var(--cyan-accent)]/20 rounded-full blur-md group-hover:bg-[var(--brand-orange)]/30 transition-all duration-300" />
        <img
          src="./clickonmedia-icon-trans.png"
          alt="Click On Media Emblem"
          width="80"
          height="80"
          className={`${currentSize.icon} object-contain filter drop-shadow-[0_2px_8px_rgba(0,200,255,0.4)] group-hover:drop-shadow-[0_4px_14px_rgba(255,122,0,0.5)] group-hover:scale-105 transition-all duration-300 relative z-10`}
        />
      </div>
    );
  }

  // 2. Official Brand Lockup
  // - If variant === 'dark': Uses clickonmedia-logo-dark.png (crisp white text for dark navy backgrounds)
  // - If variant === 'light' or default: Uses clickonmedia-logo-trans.png (matches white/light navbars 100% seamlessly)
  const logoSrc = variant === 'dark' 
    ? './clickonmedia-logo-dark.png' 
    : './clickonmedia-logo-trans.png';

  return (
    <div className={`inline-flex items-center select-none cursor-pointer group transition-transform duration-300 hover:scale-[1.01] ${className}`}>
      <img
        src={logoSrc}
        alt="Click On Media - Your Digital Growth Partner"
        className={`${currentSize.logo} w-auto object-contain filter drop-shadow-xs`}
        loading="eager"
      />
    </div>
  );
}
