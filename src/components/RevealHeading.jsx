import React, { useEffect, useRef, useState } from 'react';

/**
 * RevealHeading Component
 * 
 * Provides buttery-smooth, GPU-accelerated slide & reveal animation
 * as headings enter the viewport during user exploration.
 * Uses high-performance IntersectionObserver with Apple/Linear cubic-bezier easing.
 */
export default function RevealHeading({
  children,
  className = '',
  tag: Tag = 'h2',
  delay = 0,
  direction = 'up', // 'up' | 'down' | 'left' | 'right'
  threshold = 0.12,
  blur = false
}) {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const el = elementRef.current;
    if (!el) return;

    // Check if IntersectionObserver is supported
    if (typeof window !== 'undefined' && 'IntersectionObserver' in window) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(el); // Reveal once smoothly
          }
        },
        {
          threshold,
          rootMargin: '0px 0px -50px 0px' // Triggers slightly before element enters view
        }
      );

      observer.observe(el);
      return () => observer.disconnect();
    } else {
      // Fallback for environments without observer
      setIsVisible(true);
    }
  }, [threshold]);

  const getTransform = () => {
    if (isVisible) return 'translate3d(0, 0, 0)';
    switch (direction) {
      case 'up':
        return 'translate3d(0, 32px, 0)';
      case 'down':
        return 'translate3d(0, -32px, 0)';
      case 'left':
        return 'translate3d(-35px, 0, 0)';
      case 'right':
        return 'translate3d(35px, 0, 0)';
      default:
        return 'translate3d(0, 32px, 0)';
    }
  };

  return (
    <Tag
      ref={elementRef}
      className={`${className} transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]`}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: getTransform(),
        filter: blur ? (isVisible ? 'blur(0px)' : 'blur(4px)') : 'none',
        transitionDelay: `${delay}ms`,
        willChange: 'transform, opacity'
      }}
    >
      {children}
    </Tag>
  );
}

