import React, { useRef } from 'react';
import { X, ArrowRight } from 'lucide-react';

export default function VideoModal({ isOpen, onClose, onOpenQuote }) {
  const videoRef = useRef(null);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 overflow-y-auto bg-black/90 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="video-modal-title"
    >
      <div 
        className="relative w-full max-w-4xl bg-[var(--deep-navy)] rounded-3xl shadow-2xl border border-[var(--cyan-accent)]/30 overflow-hidden text-white"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[var(--deep-navy)]">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[var(--brand-orange)] animate-pulse" />
            <span id="video-modal-title" className="text-xs font-heading font-bold uppercase tracking-wider text-slate-200">
              Click On Media • Official Video Story
            </span>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white flex items-center justify-center transition-all cursor-pointer"
            aria-label="Close video player modal"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Video Player Container */}
        <div className="relative aspect-video w-full bg-black flex items-center justify-center overflow-hidden">
          <video
            ref={videoRef}
            src="./hero-video.mp4"
            autoPlay
            controls
            playsInline
            className="w-full h-full object-contain"
          />
        </div>

        {/* Footer info & CTA */}
        <div className="p-6 bg-[var(--deep-navy)] flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/10">
          <div className="space-y-0.5">
            <div className="text-sm font-heading font-bold text-white">Click On Media — Your Digital Growth Partner</div>
            <div className="text-xs text-slate-300">150+ Projects Delivered • 80+ Scaled Brands • 98% Satisfaction</div>
          </div>

          <button
            onClick={() => {
              onClose();
              if (onOpenQuote) onOpenQuote();
            }}
            className="btn-primary inline-flex items-center gap-2 px-6 py-2.5 min-h-[44px] rounded-full text-white font-heading font-bold text-xs shadow-md transition-all cursor-pointer"
          >
            <span>Start Your Project</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </div>
  );
}
