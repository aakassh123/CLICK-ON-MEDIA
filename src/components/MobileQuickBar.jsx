import React from 'react';
import { Phone, MessageCircle, ArrowRight, Zap } from 'lucide-react';

export default function MobileQuickBar({ onOpenQuote }) {
  return (
    <div className="md:hidden fixed bottom-0 inset-x-0 z-40 bg-white/95 backdrop-blur-xl border-t border-slate-200/90 p-2.5 px-3 shadow-[0_-10px_25px_rgba(0,0,0,0.08)]">
      <div className="flex items-center gap-2 max-w-md mx-auto">
        
        {/* Call Expert Button */}
        <a
          href="tel:+918303534063"
          className="p-2.5 rounded-2xl bg-slate-100 hover:bg-slate-200 text-[#0A1F6B] flex items-center justify-center border border-slate-200/80 transition-colors flex-shrink-0 cursor-pointer"
          title="Call Growth Strategist"
          aria-label="Call Growth Strategist"
        >
          <Phone className="w-4 h-4" />
        </a>

        {/* WhatsApp Direct Chat */}
        <a
          href="https://wa.me/918303534063?text=Hi%20Click%20On%20Media,%20I%20would%20like%20to%20discuss%20a%20digital%20project."
          target="_blank"
          rel="noopener noreferrer"
          className="p-2.5 rounded-2xl bg-emerald-50 hover:bg-emerald-100 text-emerald-600 flex items-center justify-center border border-emerald-200/80 transition-colors flex-shrink-0 cursor-pointer"
          title="WhatsApp Chat"
          aria-label="WhatsApp Chat"
        >
          <MessageCircle className="w-4 h-4" />
        </a>

        {/* Primary Main CTA Button */}
        <button
          onClick={() => onOpenQuote && onOpenQuote('Mobile Quick Action')}
          className="btn-primary !py-2.5 !px-4 flex-grow text-xs font-bold font-heading flex items-center justify-center gap-1.5 shadow-md shadow-[var(--brand-orange)]/30 cursor-pointer"
        >
          <Zap className="w-3.5 h-3.5 fill-white" />
          <span>Book Free Strategy Audit</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>

      </div>
    </div>
  );
}

