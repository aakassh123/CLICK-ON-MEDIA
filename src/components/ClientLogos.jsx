import React from 'react';

export default function ClientLogos() {
  const clients = [
    {
      name: 'MAPAZ HOTEL',
      sub: 'LUXURY STAY',
      icon: (
        <svg viewBox="0 0 40 40" className="w-8 h-8 text-slate-800" fill="currentColor">
          <path d="M8 32V12L20 6L32 12V32H26V18H14V32H8ZM16 22H24V32H16V22Z"/>
        </svg>
      ),
      type: 'Hospitality & Luxury'
    },
    {
      name: 'KRISHNA INN',
      sub: 'RESORT & SUITES',
      icon: (
        <svg viewBox="0 0 40 40" className="w-8 h-8 text-slate-800" fill="currentColor">
          <path d="M20 6L23 14H31L25 19L27 27L20 22L13 27L15 19L9 14H17L20 6Z"/>
        </svg>
      ),
      type: 'Resort & Dining'
    },
    {
      name: 'ERA OF EDUCATION',
      sub: 'LEARNING ECOSYSTEM',
      icon: (
        <svg viewBox="0 0 40 40" className="w-8 h-8 text-slate-800" fill="none" stroke="currentColor" strokeWidth="2.2">
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
        <svg viewBox="0 0 40 40" className="w-8 h-8 text-slate-800" fill="none" stroke="currentColor" strokeWidth="2.2">
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
        <svg viewBox="0 0 40 40" className="w-8 h-8 text-slate-800" fill="currentColor">
          <path d="M20 8C22 5 26 5 28 8C31 12 28 17 20 24C12 17 9 12 12 8C14 5 18 5 20 8Z"/>
          <path d="M10 28H30V32H10V28Z"/>
        </svg>
      ),
      type: 'Non-Profit & NGO'
    }
  ];

  return (
    <section className="relative z-20 pt-4 pb-8 sm:pb-12 bg-transparent">
      {/* Curved White Island Container with gentle shadow */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white/90 backdrop-blur-md rounded-3xl shadow-lg border border-slate-200/90 p-6 sm:p-8 lg:p-10">
          
          <div className="text-center sm:text-left mb-6 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[var(--brand-orange)] animate-pulse" />
            <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#0A1F6B] font-heading">
              Trusted by growing brands
            </span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8 items-center justify-items-center">
            {clients.map((client, idx) => (
              <div 
                key={idx}
                className="group flex flex-col items-center justify-center p-3 sm:p-4 rounded-2xl hover:bg-[var(--bg-soft)] transition-all duration-300 w-full cursor-pointer hover:scale-105"
                title={`${client.name} — ${client.type}`}
              >
                <div className="text-[var(--deep-navy)] group-hover:text-[var(--brand-orange)] transition-colors mb-2">
                  {client.icon}
                </div>
                <div className="font-extrabold text-sm sm:text-base text-[var(--deep-navy)] tracking-tight group-hover:text-[var(--primary-blue)] transition-colors text-center font-heading">
                  {client.name}
                </div>
                {client.sub && (
                  <div className="text-[10px] font-semibold text-[var(--text-muted)] uppercase tracking-wider text-center">
                    {client.sub}
                  </div>
                )}
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

