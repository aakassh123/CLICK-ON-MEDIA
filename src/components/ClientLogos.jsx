import React from 'react';

export default function ClientLogos() {
  const clients = [
    {
      name: 'AGASTYA YOGA',
      sub: 'BEST YOGA TTC IN GOA',
      url: 'https://www.agastyayogagoa.com/',
      icon: (
        <svg viewBox="0 0 40 40" className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor">
          <path d="M20 6C20 6 15 14 15 20C15 23.5 17.2 26.5 20 27.5C22.8 26.5 25 23.5 25 20C25 14 20 6 20 6Z"/>
          <path d="M13 13C13 13 8 18 8 23C8 26 10 28.5 13 29.5C14.5 27 15 23 15 20C15 17 14 14.5 13 13Z" opacity="0.8"/>
          <path d="M27 13C27 13 32 18 32 23C32 26 30 28.5 27 29.5C25.5 27 25 23 25 20C25 17 26 14.5 27 13Z" opacity="0.8"/>
          <path d="M7 25C7 25 3 28 3 31C3 32.5 5 33.5 7 33.5C10 33.5 12 31 13 29.5C10.5 29 8.5 27.5 7 25Z" opacity="0.6"/>
          <path d="M33 25C33 25 37 28 37 31C37 32.5 35 33.5 33 33.5C30 33.5 28 31 27 29.5C29.5 29 31.5 27.5 33 25Z" opacity="0.6"/>
        </svg>
      ),
      type: 'Yoga TTC & Retreats'
    },
    {
      name: 'NEW SPACES INTERIOR',
      sub: 'BEST INTERIOR IN NAGPUR',
      url: 'https://www.newspacesinterior.com/',
      icon: (
        <svg viewBox="0 0 40 40" className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor">
          <path d="M6 26V18C6 16.9 6.9 16 8 16H32C33.1 16 34 16.9 34 18V26H36V28H4V26H6ZM10 18V22H30V18H10ZM8 24H32V26H8V24Z"/>
          <path d="M11 9H15V13H11V9ZM25 9H29V13H25V9Z" opacity="0.75"/>
          <path d="M19 6H21V13H19V6Z" opacity="0.75"/>
        </svg>
      ),
      type: 'Home & Office Interiors'
    },
    {
      name: 'NEW DECOR',
      sub: 'SUN CONTROL FILM PCMC',
      url: 'https://newdecorwindowsuncontrolfilm.com/',
      icon: (
        <svg viewBox="0 0 40 40" className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor">
          <path d="M8 8H32V32H8V8ZM10 10V19H19V10H10ZM21 10V19H30V10H21ZM10 21V30H19V21H10ZM21 21V30H30V21H21Z"/>
          <path d="M24 13L28 17M13 24L17 28" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.6"/>
        </svg>
      ),
      type: 'Sun Control & Glass Films'
    },
    {
      name: 'SHREE KRISHNA INN',
      sub: 'BEST HOTEL IN GORAKHPUR',
      url: 'https://www.shreekrishnainn.com/',
      icon: (
        <svg viewBox="0 0 40 40" className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor">
          <path d="M8 32V12L20 6L32 12V32H26V18H14V32H8ZM16 22H24V32H16V22Z"/>
        </svg>
      ),
      type: 'Luxury Hotel & Banquets'
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
                {marqueeClients.map((client, idx) => {
                  const content = (
                    <>
                      <div className="text-[var(--deep-navy)] group-hover:text-[var(--brand-orange)] transition-colors flex-shrink-0">
                        {client.icon}
                      </div>

                      <div className="text-left whitespace-nowrap">
                        <div className="font-extrabold text-xs sm:text-sm text-[var(--deep-navy)] tracking-tight group-hover:text-[var(--primary-blue)] transition-colors font-heading leading-tight flex items-center gap-1">
                          <span>{client.name}</span>
                          {client.url && (
                            <span className="text-[9px] text-[var(--brand-orange)] font-bold opacity-70 group-hover:opacity-100 transition-opacity">↗</span>
                          )}
                        </div>
                        {client.sub && (
                          <div className="text-[9px] font-semibold text-[var(--text-muted)] uppercase tracking-wider leading-tight">
                            {client.sub}
                          </div>
                        )}
                      </div>
                    </>
                  );

                  return client.url ? (
                    <a
                      key={idx}
                      href={client.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-shrink-0 flex items-center gap-2 sm:gap-2.5 group cursor-pointer transition-transform duration-200 hover:scale-105"
                      title={`${client.name} — ${client.type} (Click to visit website)`}
                    >
                      {content}
                    </a>
                  ) : (
                    <div 
                      key={idx}
                      className="flex-shrink-0 flex items-center gap-2 sm:gap-2.5 group cursor-pointer transition-transform duration-200 hover:scale-105"
                      title={`${client.name} — ${client.type}`}
                    >
                      {content}
                    </div>
                  );
                })}
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
