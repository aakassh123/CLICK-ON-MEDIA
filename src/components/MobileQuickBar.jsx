import React from 'react';
import { Phone, MessageCircle, ArrowRight } from 'lucide-react';

export default function MobileQuickBar({ onOpenQuote }) {
  return (
    <div 
      className="md:hidden fixed bottom-0 inset-x-0 z-50 bg-white/95 backdrop-blur-xl border-t border-slate-200/90 pt-2 px-3 shadow-[0_-8px_30px_rgba(0,0,0,0.12)]"
      style={{ paddingBottom: 'max(0.5rem, env(safe-area-inset-bottom, 0.5rem))' }}
    >
      <div className="flex items-center gap-2 max-w-md mx-auto">
        
        {/* 1. Big Thumb-Friendly Direct Call Button */}
        <a
          href="tel:+918303534063"
          className="flex-1 min-h-[46px] px-3 py-2 rounded-2xl bg-[#0A1F6B] hover:bg-[#07164A] text-white flex items-center justify-center gap-2 shadow-sm active:scale-95 transition-all cursor-pointer"
          title="Call Click On Media"
          aria-label="Call +91 83035 34063"
        >
          <div className="w-7 h-7 rounded-full bg-white/15 flex items-center justify-center flex-shrink-0">
            <Phone className="w-3.5 h-3.5 text-[var(--brand-orange)]" />
          </div>
          <div className="flex flex-col text-left leading-tight">
            <span className="text-[10px] text-slate-300 font-medium">Direct</span>
            <span className="text-xs font-heading font-extrabold text-white">Call Now</span>
          </div>
        </a>

        {/* 2. Big Thumb-Friendly WhatsApp Button */}
        <a
          href="https://wa.me/918303534063?text=Hi%20Click%20On%20Media,%20I%20would%20like%20to%20discuss%20a%20digital%20project."
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 min-h-[46px] px-3 py-2 rounded-2xl bg-[#25D366] hover:bg-[#20ba59] text-white flex items-center justify-center gap-2 shadow-[0_4px_16px_rgba(37,211,102,0.35)] active:scale-95 transition-all cursor-pointer"
          title="WhatsApp Chat"
          aria-label="Chat on WhatsApp"
        >
          <div className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
            <MessageCircle className="w-4 h-4 text-white fill-white" />
          </div>
          <div className="flex flex-col text-left leading-tight">
            <span className="text-[10px] text-emerald-100 font-medium">Online 24/7</span>
            <span className="text-xs font-heading font-extrabold text-white">WhatsApp</span>
          </div>
        </a>

        {/* 3. Quote Button */}
        <button
          onClick={() => onOpenQuote && onOpenQuote('Mobile Quick Action')}
          className="min-h-[46px] px-3.5 py-2 rounded-2xl btn-primary text-xs font-heading font-bold flex items-center justify-center gap-1 shadow-md shadow-[var(--brand-orange)]/30 active:scale-95 transition-all flex-shrink-0 cursor-pointer"
          aria-label="Get Free Quote"
        >
          <span>Quote</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>

      </div>
    </div>
  );
}

