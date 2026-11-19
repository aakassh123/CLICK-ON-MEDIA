import React from 'react';

export default function ClientLogos() {
  const clients = [
    {
      name: 'MAPAZ HOTEL',
      sub: 'LUXURY STAY',
      icon: (
        <svg viewBox="0 0 40 40" className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor">
          <path d="M8 32V12L20 6L32 12V32H26V18H14V32H8ZM16 22H24V32H16V22Z"/>
        </svg>
      ),
      type: 'Hospitality & Luxury'
    },
    {
      name: 'KRISHNA INN',
      sub: 'RESORT & SUITES',
      icon: (
        <svg viewBox="0 0 40 40" className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor">
          <path d="M20 6L23 14H31L25 19L27 27L20 22L13 27L15 19L9 14H17L20 6Z"/>
        </svg>
      ),
      type: 'Resort & Dining'
    },
    {
      name: 'ERA OF EDUCATION',
      sub: 'LEARNING ECOSYSTEM',
      icon: (
        <svg viewBox="0 0 40 40" className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" strokeWidth="2.2">
          <path d="M20 6L6 14L20 22L34 14L20 6Z"/>
          <path d="M10 18V26C10 26 14 30 20 30C26 30 30 26 30 26V18"/>
          <path d="M34 14V24"/>
        </svg>
      ),
      type: 'EdTech & Learning'
    },
    {
      name: 'Shivoy Distributors',
      sub: 'SUPPLY CHAIN',
      icon: (
        <svg viewBox="0 0 40 40" className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" strokeWidth="2.2">
          <rect x="6" y="10" width="28" height="20" rx="3"/>
          <path d="M6 16H34"/>
          <circle cx="14" cy="23" r="2" fill="currentColor"/>
          <circle cx="26" cy="23" r="2" fill="currentColor"/>
        </svg>
      ),
      type: 'Distribution & Trade'
    },
    {
      name: 'BWS',
      sub: 'Barkat Welfare Society',
      icon: (
        <svg viewBox="0 0 40 40" className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor">
          <path d="M20 8C22 5 26 5 28 8C31 12 28 17 20 24C12 17 9 12 12 8C14 5 18 5 20 8Z"/>
          <path d="M10 28H30V32H10V28Z"/>
        </svg>
      ),
      type: 'Non-Profit & NGO'
    }
  ];

  // 4 repetitions create an infinite, seamless loop without gaps
  const marqueeClients = [...clients, ...clients, ...clients, ...clients];

  return (
    <section className="relative z-20 pt-1 pb-5 sm:pb-7 bg-transparent">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Compact, elegant curved white island card */}
        <div className="bg-white/95 backdrop-blur-md rounded-2xl sm:rounded-3xl shadow-md border border-slate-200/90 py-2 sm:py-2.5 px-3 sm:px-5 overflow-hidden relative">
          
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
            
            {/* Compact Header Pill */}
            <div className="flex-shrink-0 flex items-center gap-1.5 sm:pr-4 sm:border-r border-slate-200/80">
              <span className="w-2 h-2 rounded-full bg-[var(--brand-orange)] animate-pulse" />
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-[#0A1F6B] font-heading whitespace-nowrap">
                Trusted by growing brands
              </span>
            </div>

            {/* Moving Infinite Marquee Track with Soft Gradient Fade Edges */}
            <div className="w-full overflow-hidden relative py-1">
              
              {/* Left & Right Soft Fade Masks */}
              <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-6 sm:w-12 bg-gradient-to-r from-white via-white/80 to-transparent z-10" />
              <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-6 sm:w-12 bg-gradient-to-l from-white via-white/80 to-transparent z-10" />

              {/* Infinite Moving Loop Track */}
              <div className="animate-client-marquee flex items-center gap-7 sm:gap-11">
                {marqueeClients.map((client, idx) => (
                  <div 
                    key={idx}
                    className="flex-shrink-0 flex items-center gap-2 sm:gap-2.5 group cursor-pointer transition-transform duration-200 hover:scale-105"
                    title={`${client.name} — ${client.type}`}
                  >
                    <div className="text-[var(--deep-navy)] group-hover:text-[var(--brand-orange)] transition-colors flex-shrink-0">
                      {client.icon}
                    </div>

                    <div className="text-left whitespace-nowrap">
                      <div className="font-extrabold text-xs sm:text-sm text-[var(--deep-navy)] tracking-tight group-hover:text-[var(--primary-blue)] transition-colors font-heading leading-tight">
                        {client.name}
                      </div>
                      {client.sub && (
                        <div className="text-[9px] font-semibold text-[var(--text-muted)] uppercase tracking-wider leading-tight">
                          {client.sub}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
