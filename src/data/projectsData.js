// ============================================================================
// CLICK ON MEDIA — COMPREHENSIVE PORTFOLIO & CASE STUDIES DATA
// Across 5 Flagship Agency Verticals:
// 1. Website Development
// 2. Video Editing & Reels
// 3. Software Development
// 4. Graphic Design
// 5. Social Media Marketing
// ============================================================================

export const PORTFOLIO_CATEGORIES = [
  { id: 'all', label: 'All Projects', shortLabel: 'All' },
  { id: 'websites', label: 'Websites', shortLabel: 'Websites' },
  { id: 'video-editing', label: 'Video Editing', shortLabel: 'Video' },
  { id: 'software', label: 'Software', shortLabel: 'Software' },
  { id: 'graphic-design', label: 'Graphic Design', shortLabel: 'Design' },
  { id: 'social-media', label: 'Social Media Marketing', shortLabel: 'Social Media' }
];

export const PROJECTS_DATA = {
  // --------------------------------------------------------------------------
  // 1. WEBSITE DEVELOPMENT (Business, Hotel, Restaurant, Corporate)
  // --------------------------------------------------------------------------
  'shree-krishna-inn': {
    id: 'shree-krishna-inn',
    number: '01',
    categoryKey: 'websites',
    category: 'Website Development',
    categoryLabel: 'Luxury Hospitality & Direct Reservation Engine',
    title: 'Shree Krishna Inn — Best Hotel In Gorakhpur',
    client: 'Hotel Shree Krishna Inn',
    year: '2024',
    duration: '6 Weeks Sprint',
    liveUrl: 'https://www.shreekrishnainn.com/',
    image: '/projects/shree-krishna-inn.jpg',
    summary: 'Direct room booking engine, banquet inquiry funnels, and local SEO domination near Nauka Vihar & Ramgarh Tal.',
    description: 'Complete digital brand architecture, direct reservation platform, and local SEO dominance for Shree Krishna Inn — celebrated as the best hotel in Gorakhpur. Located near Nauka Vihar and Ramgarh Tal Lake on Taramandal Road, the platform eliminates high OTA commissions with instant room bookings, fine-dining multi-cuisine menus, banquet lawns booking, and top Google Map Pack local search rankings.',
    tags: ['Best Hotel Gorakhpur', 'Nauka Vihar Ramgarh Tal', 'Direct Room Booking', 'Banquets & Lawns', '0.6s Speed'],
    metrics: '+260% Direct Bookings',
    results: '+260% Direct Bookings, #1 Hotel Near Ramgarh Tal Gorakhpur',
    accentColor: 'from-amber-500 to-orange-600',
    stats: [
      { label: 'Direct Bookings', value: '+260%', desc: 'Bypassing high OTA commissions' },
      { label: 'Google Map Pack', value: '#1 Rank', desc: 'Across Gorakhpur & Nauka Vihar' },
      { label: 'Mobile Page Speed', value: '0.6s', desc: 'Lighthouse 98/100 score' },
      { label: 'Commission Saved', value: '₹16.5L+', desc: 'Retained annual net revenue' }
    ],
    challenge: 'Shree Krishna Inn was paying up to 22% in heavy commissions to third-party travel aggregators (OTAs) for every room reservation. Their legacy web presence was slow, non-responsive on budget Android phones, and completely invisible on Google Local Search for travelers arriving in Gorakhpur and Ramgarh Tal.',
    strategy: 'Click On Media engineered a high-performance direct reservation engine with instant UPI/card payment verification and automated WhatsApp booking confirmations. Simultaneously, we executed a dominant local SEO sprint targeting 45+ high-intent commercial travel keywords in Gorakhpur.',
    deliverables: [
      'Custom React & Next.js reservation engine with 0% OTA commission leakage',
      'Google Business Profile overhaul & local map pack domination (#1 in 90 days)',
      'Sub-second page load times on 4G/5G mobile networks',
      'Automated WhatsApp booking confirmations, invoices & QR code room check-in',
      'Complete brand identity refinement with luxury typography & photography',
      'Targeted hyper-local Meta & Google Ads capturing high-intent holiday bookings'
    ],
    technologies: ['React', 'Next.js', 'Tailwind CSS', 'Razorpay', 'WhatsApp Business API', 'Google Search Console']
  },

  'hotel-adalat': {
    id: 'hotel-adalat',
    number: '02',
    categoryKey: 'websites',
    category: 'Website Development',
    categoryLabel: 'Heritage Dining & Handi Specialist',
    title: 'Hotel Adalat & Restaurant',
    client: 'Adalat Restaurant & Hospitality',
    year: '2024',
    duration: '3 Weeks Sprint',
    liveUrl: 'https://adalatrestaurant.com',
    videoUrl: '/projects/hotel-adalat-video.mp4',
    image: '/projects/hotel-adalat.jpg',
    summary: 'Iconic heritage culinary platform with interactive visual menu, table reservation engine, and instant WhatsApp ordering for Gorakhpur’s legendary Handi Meat.',
    description: 'Designed and engineered a high-converting digital culinary flagship for Gorakhpur’s iconic Adalat Hotel & Restaurant. Celebrated across Eastern UP for 20+ years for their authentic wood-fire Handi Meat, the new platform features a mobile-first digital menu, direct table booking, instant WhatsApp takeaway funnels, and top Google Map Pack local search ranking.',
    tags: ['Handi Meat Specialist', 'Digital Menu', 'Table Booking', 'Kunraghat Gorakhpur'],
    metrics: '3.1x Online Inquiries',
    results: '+310% Weekend Reservations, #1 Handi Mutton on Google',
    accentColor: 'from-amber-600 via-orange-600 to-red-600',
    stats: [
      { label: 'Online Inquiries', value: '3.1x Growth', desc: 'Direct web & WhatsApp orders' },
      { label: 'Monthly Menu Views', value: '34,000+', desc: 'Interactive digital QR & web views' },
      { label: 'Weekend Footfall', value: '+55%', desc: 'Sustained full-house dining' },
      { label: 'Google Rating', value: '4.8 ★', desc: 'Over 1,200+ verified customer reviews' }
    ],
    challenge: 'Despite being Gorakhpur’s most renowned 20-year culinary destination for authentic clay-pot Handi Meat, Adalat Restaurant faced severe phone call bottlenecks during peak dinner rushes, unorganized table queues on weekends, and high commission costs on third-party food delivery aggregators.',
    strategy: 'Click On Media architected a high-speed, mobile-optimized digital presence showcasing Adalat’s wood-fire Handi heritage with professional culinary photography. We integrated a frictionless 1-tap WhatsApp ordering channel, dynamic digital food menu with pricing, and local SEO domination for non-veg dining queries across Gorakhpur and NH-28.',
    deliverables: [
      'Interactive visual menu highlighting Gorakhpur Special Handi Meat & Biryani with live pricing',
      'Zero-friction table reservation system with automated WhatsApp booking alerts',
      'Google My Business Local Map Pack optimization (#1 for Handi Meat in Kunraghat & Gorakhpur)',
      'Direct-to-kitchen WhatsApp takeaway ordering eliminating 20%+ aggregator commissions',
      'News18 media feature integration & verified customer review highlights'
    ],
    technologies: ['React', 'Tailwind CSS', 'Vite', 'WhatsApp Business API', 'Google Search Console']
  },

  'apex-legal': {
    id: 'apex-legal',
    number: '03',
    categoryKey: 'websites',
    category: 'Website Development',
    categoryLabel: 'Corporate Law Firm Flagship',
    title: 'Apex Legal & Corporate Advisory',
    client: 'Apex Legal Partners LLP',
    year: '2024',
    duration: '5 Weeks Sprint',
    liveUrl: 'https://apexlegalpartners.in',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=85',
    summary: 'Authoritative corporate legal platform with practice area hubs and confidential consultation booking.',
    description: 'Designed an authoritative, corporate law firm platform highlighting partner credentials, corporate litigation track records, and a confidential legal consultation intake workflow.',
    tags: ['Corporate UX', 'Lead Intake', 'High Security', 'B2B Authority'],
    metrics: '+180% Inbound Calls',
    results: '+180% Qualified Corporate Inquiries, #1 Regional Legal Rank',
    accentColor: 'from-blue-700 to-indigo-800',
    stats: [
      { label: 'Inbound Calls', value: '+180%', desc: 'High-ticket corporate retainers' },
      { label: 'Consultations', value: '65+/mo', desc: 'Pre-qualified legal inquiries' },
      { label: 'Average Retainer', value: '₹2.5L+', desc: 'High commercial case value' },
      { label: 'Speed Score', value: '100/100', desc: 'Google PageSpeed Insights' }
    ],
    challenge: 'Apex Legal had an outdated HTML website from 2017 that failed to reflect their premium legal capabilities. Corporate clients perceived the firm as traditional rather than modern tech-enabled counsel.',
    strategy: 'Crafted a sleek, navy-and-gold corporate legal flagship with dedicated practice area hubs, attorney credential dossiers, and an encrypted client consultation intake form.',
    deliverables: [
      'Bespoke corporate UI/UX establishing instant institutional authority',
      'Confidential legal intake questionnaire with automated calendaring',
      'Search engine optimization for commercial & intellectual property law',
      'Client testimonial dossiers and precedent case summaries'
    ],
    technologies: ['React', 'Next.js', 'Tailwind CSS', 'Calendly API', 'Cloudflare SSL']
  },

  'krishna-inn': {
    id: 'krishna-inn',
    number: '04',
    categoryKey: 'websites',
    category: 'Website Development',
    categoryLabel: 'Resort, Banquet & Booking Platform',
    title: 'Krishna Inn Suites & Banquets',
    client: 'Krishna Hospitality Group',
    year: '2024',
    duration: '10 Weeks Sprint',
    liveUrl: 'https://krishnainn.in',
    image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1200&q=85',
    summary: 'Luxury resort website featuring 360 virtual tours and high-converting wedding inquiry funnels.',
    description: 'Engineered a high-converting luxury resort booking platform with interactive wedding banquet cost calculators and hyper-local ad funnels for Krishna Inn, driving profitable banquet inquiries.',
    tags: ['Banquet Calculator', 'Virtual Tour', 'Mobile-First', 'High ROAS'],
    metrics: '45,000+ Visitors/mo',
    results: '3.8x Return on Ad Spend, 45,000+ Monthly Visitors',
    accentColor: 'from-orange-500 to-red-500',
    stats: [
      { label: 'ROAS Delivered', value: '3.8x', desc: 'Continuous Meta & Google ad campaigns' },
      { label: 'Banquet Inquiries', value: '180+/mo', desc: 'High-value wedding bookings' },
      { label: 'Monthly Visitors', value: '45,000+', desc: 'Organic & paid targeted traffic' },
      { label: 'Inquiry Conversion', value: '14.8%', desc: 'Industry benchmark is 3.5%' }
    ],
    challenge: 'Krishna Inn operated a magnificent resort property with luxury banquet halls, but struggled to fill non-peak wedding season dates and weekday corporate suites.',
    strategy: 'Deployed full-funnel digital marketing campaigns combining 4K video storytelling of banquet setups, interactive wedding cost calculators, and targeted geo-fencing ads.',
    deliverables: [
      'High-converting mobile-first resort website with suite tour previews',
      'Interactive wedding & banquet hall budget calculator collecting verified leads',
      'Multi-stage Meta & Google Ads campaigns delivering consistent 3.8x ROAS',
      'CRM lead routing with instant salesperson call alerts within 60 seconds'
    ],
    technologies: ['React', 'Tailwind CSS', 'Meta Ads Manager', 'Google Ads', 'HubSpot CRM']
  },

  'agastya-yoga': {
    id: 'agastya-yoga',
    number: '05',
    categoryKey: 'websites',
    category: 'Website Development',
    categoryLabel: 'Yoga Teacher Training & Retreat Booking',
    title: 'Agastya Yoga Goa — Best TTC School In Goa',
    client: 'Agastya Yoga Village',
    year: '2024',
    duration: '4 Weeks Sprint',
    liveUrl: 'https://www.agastyayogagoa.com/',
    videoUrl: '/projects/agastya-yoga-video.mp4',
    image: '/projects/thumb-agastya-yoga.jpg',
    summary: 'Direct booking engine and international student enrollment portal for Goa’s premier Yoga Alliance certified teacher training school and beachside retreat in Querim.',
    description: 'Designed and engineered an international digital flagship for Agastya Yoga Goa — recognized as the best Yoga Teacher Training (TTC) school in North Goa (Querim / Pernem). The platform features comprehensive course curriculums for 50-Hour, 100-Hour, 200-Hour Multi-Style (Hatha, Ashtanga, Vinyasa, Yin & Meditation) and 300-Hour Advanced Yoga Teacher Training programs, international student registration with multi-currency checkout, and top-tier global SEO for wellness retreats.',
    tags: ['Yoga Teacher Training', 'Yoga Alliance Certified', 'Querim Goa', 'Direct Booking Engine', 'Global SEO'],
    metrics: '+380% Global Inquiries',
    results: '+380% International Enrollments, #1 Yoga TTC in North Goa',
    accentColor: 'from-emerald-600 via-teal-600 to-amber-500',
    stats: [
      { label: 'Global Enrollments', value: '+380%', desc: 'Students from Europe, Americas & Asia' },
      { label: 'Direct Course Bookings', value: '4.2x', desc: 'Bypassing 3rd party retreat portals' },
      { label: 'Mobile Page Speed', value: '0.5s', desc: 'Lighthouse 99/100 performance score' },
      { label: 'Organic Search Rank', value: 'Top 3', desc: 'Ranked for Best Yoga TTC in Goa' }
    ],
    challenge: 'Agastya Yoga Village attracted students worldwide through word-of-mouth and third-party wellness directories, but lost 18-25% in high portal listing fees. Their digital presence needed an international-grade booking engine, transparent syllabus explorer, and seamless mobile experience to convert global yoga practitioners into enrolled students.',
    strategy: 'Click On Media engineered a high-converting, serene visual portal capturing the natural beachside ashram ambiance of Querim, Goa. We built detailed daily schedules, Yoga Alliance certification breakdowns, multi-currency payment options (Stripe/Razorpay/UPI), automated WhatsApp student consultation, and an international SEO strategy targeting European and American yoga aspirants.',
    deliverables: [
      'Comprehensive 200-Hour & 300-Hour TTC syllabus explorer with daily retreat schedules',
      'International direct student registration engine with secure payment gateways',
      'High-speed mobile UX optimized for global travelers and low-bandwidth connections',
      'Yoga Alliance USA & UK credential showcase and verified student video testimonials',
      'Direct WhatsApp admissions hotline with automated timezone-aware responses',
      'Global and national SEO campaign for "Best Yoga Teacher Training School in Goa"'
    ],
    technologies: ['React', 'Next.js', 'Tailwind CSS', 'Stripe', 'Razorpay', 'WhatsApp Business API', 'Global SEO']
  },

  'new-spaces-interior': {
    id: 'new-spaces-interior',
    number: '06',
    categoryKey: 'websites',
    category: 'Website Development',
    categoryLabel: 'Luxury Residential & Office Interiors',
    title: 'New Spaces Interior — Best Interior Designer In Nagpur',
    client: 'New Spaces Interior & Architecture',
    year: '2024',
    duration: '4 Weeks Sprint',
    liveUrl: 'https://www.newspacesinterior.com/',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=85',
    summary: 'Interactive 3D project gallery, modular kitchen cost estimator, and local SEO domination for Nagpur’s leading turnkey interior design studio.',
    description: 'Designed and engineered a high-converting digital showroom for New Spaces Interior — recognized as Nagpur’s top interior design and turnkey execution firm led by Surbhi Babhulkar. Featuring ultra-fast 3D project galleries, modular kitchen and corporate office workspace design catalogues, instant WhatsApp design consultation booking, and top Google Map Pack local search rankings.',
    tags: ['Interior Designer Nagpur', 'Home & Office Interiors', 'Modular Kitchens', 'Turnkey Execution', '3D Walkthroughs'],
    metrics: '+340% Design Leads',
    results: '+340% High-Ticket Inquiries, #1 Interior Designer in Nagpur',
    accentColor: 'from-amber-700 via-orange-600 to-stone-700',
    stats: [
      { label: 'Design Inquiries', value: '+340%', desc: 'Pre-qualified residential & office projects' },
      { label: 'Monthly Visitors', value: '28,000+', desc: 'High-intent Nagpur & Vidarbha traffic' },
      { label: 'Google Search Rank', value: '#1 Rank', desc: 'Ranked for Best Interior Designer in Nagpur' },
      { label: 'Consultation Bookings', value: '80+/mo', desc: 'Direct WhatsApp and web intake' }
    ],
    challenge: 'New Spaces Interior had executed dozens of prestigious home and corporate interior projects across Nagpur, but their previous web presence lacked modern visual elegance and was buried on page 3 of Google search, allowing generic contractors to capture local leads.',
    strategy: 'Click On Media engineered an ultra-fast, visually stunning portfolio showcasing high-resolution project transformations, categorizing residential, commercial, modular kitchen, and custom furniture works. We integrated a frictionless 1-tap WhatsApp consultation funnel and executed an aggressive local SEO campaign for interior design keywords in Nagpur.',
    deliverables: [
      'Interactive visual portfolio showcase for luxury living rooms, bedrooms, and modular kitchens',
      'Turnkey commercial office space design catalogue with client testimonials',
      'Local SEO sprint securing #1 Google search ranking across Nagpur and Vidarbha',
      'Direct WhatsApp inquiry funnel with automated design consultation scheduling',
      'Lighthouse 98+ mobile page performance score for instantaneous image loading'
    ],
    technologies: ['React', 'Next.js', 'Tailwind CSS', 'WhatsApp Business API', 'Local SEO', 'Google Search Console']
  },

  'new-decor-window-film': {
    id: 'new-decor-window-film',
    number: '07',
    categoryKey: 'websites',
    category: 'Website Development',
    categoryLabel: 'Sun Control & Architectural Glass Films',
    title: 'New Decor Window Sun Control Film — Pimpri-Chinchwad',
    client: 'New Decor Glass & Window Solutions',
    year: '2024',
    duration: '3 Weeks Sprint',
    liveUrl: 'https://newdecorwindowsuncontrolfilm.com/',
    image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&q=85',
    summary: 'Direct lead-generation web platform, instant measurement booking funnel, and local SEO domination for Pimpri-Chinchwad & Pune’s premier window film specialist.',
    description: 'Engineered a high-converting digital storefront and local lead generation engine for New Decor Window Sun Control Film. Serving corporate offices, tech parks, and residential societies across Pimpri-Chinchwad, Hinjewadi, and Pune, the platform features interactive film comparison guides (Sun Control, Frosted, Blackout, UV Safety), 1-click free measurement & quote booking via WhatsApp, and top Google Map Pack local search rankings.',
    tags: ['Sun Control Film', 'Pimpri-Chinchwad', 'Pune Window Film', 'Heat Reduction 99% UV', 'Local SEO #1'],
    metrics: '+290% Local Calls',
    results: '+290% On-Site Measurement Requests, #1 Window Film in PCMC',
    accentColor: 'from-blue-600 via-cyan-600 to-sky-500',
    stats: [
      { label: 'Measurement Bookings', value: '+290%', desc: 'Residential societies & commercial IT parks' },
      { label: 'Monthly Search Traffic', value: '18,500+', desc: 'Targeted PCMC, Hinjewadi & Pune queries' },
      { label: 'Google Map Pack Rank', value: '#1 Rank', desc: 'Ranked for Window Film in Pimpri-Chinchwad' },
      { label: 'Inquiry Response Time', value: '< 60 Sec', desc: 'Automated WhatsApp lead routing' }
    ],
    challenge: 'New Decor had exceptional hands-on expertise in installing premium sun control, frosted, and UV protection films across Pune and PCMC, but relied heavily on word-of-mouth. Corporate clients and high-rise apartment owners in Hinjewadi and Pimpri were searching on Google and choosing competitors with modern web presences.',
    strategy: 'Click On Media engineered an ultra-fast, mobile-first lead capture platform highlighting heat rejection specs, 99% UV blocking metrics, and frosted glass privacy solutions. We integrated a frictionless 1-tap "Book Free Site Measurement" WhatsApp funnel and launched an aggressive local SEO campaign targeting Pimpri-Chinchwad and West Pune.',
    deliverables: [
      'Interactive window film catalog (Sun Control, Frosted Privacy, Blackout, Safety & Decorative Films)',
      'Free site visit & measurement request funnel with instant WhatsApp dispatch',
      'Local Map Pack SEO domination securing top ranking for window film searches in PCMC',
      'Corporate office partition gallery with real installation before/after showcases',
      'High-speed mobile performance optimized for local homeowners and facility managers'
    ],
    technologies: ['React', 'Next.js', 'Tailwind CSS', 'WhatsApp Business API', 'Local SEO', 'Google Search Console']
  },

  // --------------------------------------------------------------------------
  // 2. VIDEO EDITING & REELS (Promotional, Reels, Cinematic, Commercials)
  // --------------------------------------------------------------------------
  'viral-food-reels': {
    id: 'viral-food-reels',
    number: '05',
    categoryKey: 'video-editing',
    category: 'Video Editing & Reels',
    categoryLabel: 'Viral 9:16 Restaurant Reels Series',
    title: 'Viral Food & Hospitality Reels',
    client: 'Spice & Grill Lounge',
    year: '2024',
    duration: 'Ongoing Sprint',
    liveUrl: 'https://instagram.com/clickonmedia',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=85',
    summary: 'Cinematic 9:16 vertical reels edited with psychological 3-second hooks, sound design, and viral pacing.',
    description: 'We directed, scripted, and edited a viral 12-episode 9:16 Instagram Reels campaign for a premier dining brand, utilizing ASMR food audio, fast retention jump-cuts, and animated typography to capture over 2.4 million views.',
    tags: ['9:16 Reels', 'Sound FX', 'Viral Hooks', 'Auto-Captions'],
    metrics: '2.4M+ Organic Views',
    results: '2.4M+ Combined Views, +18,000 Instagram Followers',
    accentColor: 'from-rose-500 to-amber-500',
    stats: [
      { label: 'Total Views', value: '2.4M+', desc: 'Organic viral algorithm reach' },
      { label: 'Follower Growth', value: '+18,500', desc: 'Real local customers gained' },
      { label: 'Save & Share Rate', value: '18.4%', desc: 'Viral benchmark is 4%' },
      { label: 'Dine-In Revenue', value: '+68%', desc: 'Directly attributed to reels promo' }
    ],
    challenge: 'The restaurant was posting static food photos with stagnant 200-300 view reach. Customers were unaware of signature chef preparations and evening live music events.',
    strategy: 'Engineered a weekly retention-focused reels publishing cadence with high-energy trending audio, micro-storytelling hooks, and clickable WhatsApp reservation links in bio.',
    deliverables: [
      '12 professionally edited 9:16 4K viral Instagram Reels',
      'Custom Foley sound effects (sizzle, chop, pour, crunch)',
      'Dynamic animated karaoke captions with brand-colored highlight words',
      'High-CTR thumbnail covers designed for grid aesthetics'
    ],
    technologies: ['Adobe Premiere Pro', 'After Effects', 'DaVinci Resolve', 'Logic Pro Audio']
  },

  'cinematic-commercial': {
    id: 'cinematic-commercial',
    number: '06',
    categoryKey: 'video-editing',
    category: 'Video Editing & Reels',
    categoryLabel: 'Cinematic Brand Film & 4K Commercial',
    title: '4K Cinematic Resort Commercial',
    client: 'Shree Krishna Inn',
    year: '2024',
    duration: '3 Weeks Production',
    liveUrl: 'https://www.shreekrishnainn.com/',
    image: '/projects/shree-krishna-inn-front.jpg',
    summary: 'Luxury commercial with 4K drone cinematography, DaVinci Resolve color grading, and custom sound design.',
    description: 'Produced a cinematic 90-second flagship commercial film combining sweeping 4K drone shots, warm cinematic color grading, orchestral audio mastering, and evocative voiceover storytelling for Shree Krishna Inn Gorakhpur.',
    tags: ['4K Commercial', 'DaVinci Resolve', 'Color Grading', 'Sound Design'],
    metrics: '88% Watch Retention',
    results: '88% Average Completion Rate, Broadcast Quality',
    accentColor: 'from-amber-500 to-yellow-600',
    stats: [
      { label: 'Watch Retention', value: '88%', desc: 'High completion rate across YouTube' },
      { label: 'Resolution', value: '4K DCI', desc: 'Mastered for cinema & TV screens' },
      { label: 'Color Grade', value: 'ACES 3D', desc: 'Hollywood cinematic color grading' },
      { label: 'Brand Recall', value: '+310%', desc: 'Post-campaign survey rating' }
    ],
    challenge: 'Shree Krishna Inn needed a flagship video asset to pitch corporate retreats, destination travelers visiting Ramgarh Tal, and wedding planners that positioned them far above regional competition.',
    strategy: 'Structured a three-act narrative: Morning Tranquility, Daytime Adventure & Poolside Luxury, and Evening Royal Dining under the stars.',
    deliverables: [
      '90-second Master 4K Cinema cut for YouTube and website hero banner',
      '30-second and 15-second high-energy cuts optimized for Instagram & TV ads',
      'Full Dolby-mastered audio soundscape with original musical score',
      'Custom motion graphic title sequences and logo animation'
    ],
    technologies: ['Blackmagic DaVinci Resolve Studio', 'Sony FX3 Cinema', 'DJI Mavic 3 Cine', 'Pro Tools']
  },

  'flash-sale-promo': {
    id: 'flash-sale-promo',
    number: '07',
    categoryKey: 'video-editing',
    category: 'Video Editing & Reels',
    categoryLabel: 'Motion Graphics & E-Commerce Video Ad',
    title: 'E-Commerce Flash Sale Video Ad',
    client: 'Urban Fit Apparel',
    year: '2024',
    duration: '2 Weeks Sprint',
    liveUrl: 'https://urbanfit.in',
    image: 'https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&w=1200&q=85',
    summary: 'High-energy video ad combining 3D product renders, kinetic typography, and direct-response CTAs.',
    description: 'Created an adrenaline-pumping 20-second paid performance video ad featuring 3D sneaker and apparel rotations, fast beat-synced typography, and countdown timer motion graphics.',
    tags: ['Motion Graphics', 'Paid Ad Creative', 'Fast Pacing', '3D Motion'],
    metrics: '4.6x Ad ROAS',
    results: '4.6x ROAS on Meta Ads, 48,000+ Click-Throughs',
    accentColor: 'from-purple-600 to-pink-500',
    stats: [
      { label: 'Campaign ROAS', value: '4.6x', desc: 'Over ₹18.5L in 7-day revenue' },
      { label: 'Click-Through Rate', value: '4.2%', desc: '2.5x higher than industry average' },
      { label: 'Cost Per Purchase', value: '₹142', desc: 'Lowest acquisition cost in category' },
      { label: 'Thumb-Stop Rate', value: '41%', desc: 'Stopped scroll in first 3 seconds' }
    ],
    challenge: 'Urban Fit was running static image ads with declining ROAS (1.8x). Their target audience of 18-30 year-olds scrolled right past generic discount banners.',
    strategy: 'Constructed an aggressive 3-second hook with 3D product explosion, followed by seamless outfit transitions and bold typography announcing the 72-hour flash sale.',
    deliverables: [
      '9:16 vertical and 1:1 square multi-ratio video exports for Reels & Feeds',
      'Dynamic 3D product showcase with synchronized bass drops and sound effects',
      'A/B test variations with 3 distinct opening hook styles'
    ],
    technologies: ['Adobe After Effects', 'Cinema 4D', 'Premiere Pro', 'Motion 4']
  },

  'corporate-podcast': {
    id: 'corporate-podcast',
    number: '08',
    categoryKey: 'video-editing',
    category: 'Video Editing & Reels',
    categoryLabel: 'Multi-Cam YouTube Podcast Production',
    title: 'Founder Stories Corporate Podcast',
    client: 'UP Business Founders Pod',
    year: '2024',
    duration: 'Weekly Episodic',
    liveUrl: 'https://youtube.com',
    image: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=1200&q=85',
    summary: 'Multi-camera 4K podcast edit with automated angle switching, audio denoiser, and chapters.',
    description: 'Complete post-production for a premier business leadership podcast: 3-camera 4K angle switching, studio voice clarity enhancement, dynamic slide overlays, YouTube chapter markers, and viral short clips.',
    tags: ['YouTube 4K', 'Multi-Cam', 'Audio Mastering', 'Viral Shorts'],
    metrics: '650K+ Channel Views',
    results: '650,000+ Views, 45,000 Watch Hours in 6 Months',
    accentColor: 'from-cyan-600 to-blue-600',
    stats: [
      { label: 'Total Views', value: '650K+', desc: 'Across YouTube & Spotify' },
      { label: 'Subscribers', value: '+34,000', desc: 'Organic growth in 6 months' },
      { label: 'Average Watch Time', value: '28 Mins', desc: 'Exceptionally high podcast retention' },
      { label: 'Viral Shorts Cut', value: '80+ Clips', desc: 'Extracted for Instagram & Shorts' }
    ],
    challenge: 'Raw 2-hour recordings had echoey room noise, awkward verbal pauses, and lacked visual engagement, resulting in high viewer drop-off within the first 3 minutes.',
    strategy: 'Implemented dynamic multi-cam pacing that cuts between speaker close-ups and host reactions every 4-7 seconds, coupled with professional background noise gating and graphic title cards.',
    deliverables: [
      'Full 4K episode edits with color grading, lower-thirds, and sponsor cards',
      'Extracting 5-8 viral YouTube Shorts & Reels from every single episode',
      'High-CTR 3D graphic thumbnails that achieve 11%+ click-through rate'
    ],
    technologies: ['Adobe Premiere Pro', 'iZotope RX Audio', 'Photoshop', 'DaVinci Resolve']
  },

  // --------------------------------------------------------------------------
  // 3. SOFTWARE DEVELOPMENT (Web Apps, Dashboards, Management Systems, SaaS)
  // --------------------------------------------------------------------------
  'shivoy-distributors': {
    id: 'shivoy-distributors',
    number: '09',
    categoryKey: 'software',
    category: 'Software Development',
    categoryLabel: 'B2B Enterprise Distribution & ERP Portal',
    title: 'Shivoy B2B Distribution & ERP',
    client: 'Shivoy National Distributors',
    year: '2024',
    duration: '9 Weeks Sprint',
    liveUrl: 'https://shivoydistributors.com',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=85',
    summary: 'Cloud-based B2B ordering portal with 3,000+ SKUs, dealer-specific pricing tiers, and automated ERP dispatch.',
    description: 'Designed a modern B2B enterprise distribution portal, digital wholesale catalog, and automated bulk-order inquiry system for Shivoy National Distributors, streamlining multi-state supply chain interactions.',
    tags: ['React SaaS', 'ERP Sync', 'B2B Wholesale', 'Zero Downtime'],
    metrics: '+180% Wholesale Inquiries',
    results: '+180% Wholesale Inquiries, Zero System Downtime',
    accentColor: 'from-blue-700 to-indigo-600',
    stats: [
      { label: 'Wholesale Inquiries', value: '+180%', desc: 'Verified retailer applications' },
      { label: 'Dealer Network', value: '850+ Stores', desc: 'Connected across 4 Northern states' },
      { label: 'Catalog Efficiency', value: '65% Faster', desc: 'Real-time SKU lookup & order drafting' },
      { label: 'Order Processing', value: 'Same-Day', desc: 'Automated ERP dispatch routing' }
    ],
    challenge: 'Shivoy Distributors managed over 3,000 SKUs across hundreds of retail dealers. Orders were collected manually via chaotic phone calls and paper notes, causing shipping errors and slow inventory dispatch.',
    strategy: 'Click On Media built a private B2B dealer ordering portal with real-time stock levels, volume tiered discounts, and an automated invoice generator linked directly to their dispatch warehouse.',
    deliverables: [
      'Enterprise digital catalog featuring 3,000+ searchable SKUs with live stock status',
      'Role-based dealer login with customized tiered pricing and bulk discounts',
      'One-click WhatsApp order confirmation and PDF quotation generator',
      'Comprehensive brand modernization and corporate identity guidelines',
      'Automated credit term checks and ledger statement downloads for dealers'
    ],
    technologies: ['React', 'Next.js', 'Tailwind CSS', 'ERP Integration', 'Cloudflare CDN', 'PostgreSQL']
  },

  'era-of-education': {
    id: 'era-of-education',
    number: '10',
    categoryKey: 'software',
    category: 'Software Development',
    categoryLabel: 'EdTech Portal & Admissions Engine',
    title: 'Era of Education Cloud LMS',
    client: 'Era Global EdTech',
    year: '2023-2024',
    duration: '12 Weeks Sprint',
    liveUrl: 'https://eraofeducation.com',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=85',
    summary: 'Multi-tier educational portal supporting 12,000+ concurrent students, live exams, and admission CRM.',
    description: 'Architected an interactive, multi-tier learning management portal and student admission funnels for Era of Education, connecting tens of thousands of learners across North India with high-quality educational programs.',
    tags: ['Cloud LMS', 'Live Exams', '99.98% Uptime', 'Scalable Cloud'],
    metrics: '12,000+ Active Students',
    results: '+310% Enrolment Rate, 12,000+ Active Students',
    accentColor: 'from-blue-600 to-cyan-500',
    stats: [
      { label: 'Enrolment Growth', value: '+310%', desc: 'Year-over-year student admissions' },
      { label: 'Active Students', value: '12,000+', desc: 'Enrolled across North India' },
      { label: 'Platform Uptime', value: '99.98%', desc: 'Zero downtime during exam peaks' },
      { label: 'Lead-to-Admit Rate', value: '28.4%', desc: 'Automated qualification pipeline' }
    ],
    challenge: 'Era of Education was scaling rapidly but their legacy website collapsed under peak admission traffic. Prospective students abandoned lengthy application forms.',
    strategy: 'We architected a scalable, multi-tier learning management and admission portal with self-service student dashboards, frictionless one-click registration, and automated SMS/WhatsApp admission reminders.',
    deliverables: [
      'Scalable cloud-hosted student portal supporting 10,000+ concurrent users',
      'Interactive course catalog with syllabus preview and faculty profiles',
      'Automated admissions pipeline with instant lead verification and CRM sync',
      'Real-time student progress tracking, video lectures & automated quiz grading'
    ],
    technologies: ['React', 'Node.js', 'PostgreSQL', 'AWS Cloud', 'Razorpay Subscriptions']
  },

  'medix-hospital-pms': {
    id: 'medix-hospital-pms',
    number: '11',
    categoryKey: 'software',
    category: 'Software Development',
    categoryLabel: 'Hospital Management & Patient EHR System',
    title: 'Medix Hospital Patient Management',
    client: 'Medix Multi-Speciality Clinic',
    year: '2024',
    duration: '8 Weeks Sprint',
    liveUrl: 'https://clickonmedia.in',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=85',
    summary: 'Digital hospital system with smart OPD token queue management, e-prescriptions, and WhatsApp billing.',
    description: 'Engineered an intuitive, secure cloud-based clinic management system for Medix Hospital: live OPD patient queue display on waiting room TVs, electronic medical records (EMR), doctor schedule calendars, and automated WhatsApp appointment reminders.',
    tags: ['Healthcare SaaS', 'OPD Token', 'EHR System', 'WhatsApp API'],
    metrics: '70% Faster OPD Flow',
    results: '70% Reduction in Waiting Room Congestion, 1,200+ Daily Patients',
    accentColor: 'from-emerald-500 to-teal-700',
    stats: [
      { label: 'Waiting Time', value: '-70%', desc: 'Reduced from 45 mins to 12 mins' },
      { label: 'Daily Patients', value: '1,200+', desc: 'Handled effortlessly across 14 doctors' },
      { label: 'Paper Cost Saved', value: '₹45,000/mo', desc: '100% digital prescription records' },
      { label: 'No-Show Rate', value: '4.2%', desc: 'Automated WhatsApp reminder engine' }
    ],
    challenge: 'Crowded waiting rooms, lost paper prescription slips, and patient disputes over appointment turns created chaotic hospital reception bottlenecks.',
    strategy: 'Deployed a real-time web socket queue manager with TV display screens, barcode prescription scanners, and encrypted cloud patient history lookup.',
    deliverables: [
      'Smart digital token screen system with multilingual audio announcements',
      'Doctor portal for rapid 2-click digital diagnosis and Rx generation',
      'Automated WhatsApp appointment confirmations, lab reports & billing receipts'
    ],
    technologies: ['React', 'Node.js', 'Socket.io', 'MongoDB', 'WhatsApp Cloud API']
  },

  'smart-inventory-pos': {
    id: 'smart-inventory-pos',
    number: '12',
    categoryKey: 'software',
    category: 'Software Development',
    categoryLabel: 'Retail Cloud POS & Barcode Scanner Engine',
    title: 'Smart Cloud POS & Inventory SaaS',
    client: 'RetailPlus Superstores',
    year: '2024',
    duration: '7 Weeks Sprint',
    liveUrl: 'https://clickonmedia.in',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=85',
    summary: 'Fast billing POS with low-stock SMS alerts, barcode printing, GST invoicing, and multi-outlet sync.',
    description: 'A blazing-fast cloud POS system with barcode scanner integration, offline billing cache, automatic GST compliance invoice generation, and real-time inventory synchronization across multi-branch retail outlets.',
    tags: ['Cloud POS', 'GST Invoicing', 'Inventory Sync', 'Offline Mode'],
    metrics: '₹2.5Cr+ GMV Handled',
    results: '₹2.5Cr+ Monthly Processed GMV, 0.4s Fast Checkout',
    accentColor: 'from-indigo-600 to-purple-600',
    stats: [
      { label: 'Processed GMV', value: '₹2.5Cr+', desc: 'Monthly processed checkout volume' },
      { label: 'Checkout Speed', value: '0.4s', desc: 'Sub-second barcode scan to receipt' },
      { label: 'Inventory Shrink', value: '-85%', desc: 'Real-time stock audit tracking' },
      { label: 'Active Outlets', value: '18 Stores', desc: 'Centralized live cloud dashboard' }
    ],
    challenge: 'Retailers were using slow legacy desktop software that crashed frequently, couldn’t operate during internet outages, and lacked real-time stock sync between warehouse and stores.',
    strategy: 'Developed a progressive web app (PWA) with IndexedDB offline capability, sub-second barcode matching, and instant automated GST return reports.',
    deliverables: [
      'High-speed touch and barcode retail checkout interface',
      'Automated supplier reorder alerts via SMS & WhatsApp when stock drops below minimum',
      'Multi-branch profit, tax, and sales performance analytics dashboard'
    ],
    technologies: ['React', 'PWA', 'IndexedDB', 'PostgreSQL', 'Express', 'Tailwind CSS']
  },

  // --------------------------------------------------------------------------
  // 4. GRAPHIC DESIGN (Posters, Banners, Branding, Logos, Creatives)
  // --------------------------------------------------------------------------
  'heritage-brand-identity': {
    id: 'heritage-brand-identity',
    number: '13',
    categoryKey: 'graphic-design',
    category: 'Graphic Design',
    categoryLabel: '3D/2D Logo Design & Brand Identity Guidelines',
    title: 'Heritage Jewellers Brand Identity',
    client: 'Heritage Gold & Diamonds',
    year: '2024',
    duration: '3 Weeks Sprint',
    liveUrl: 'https://clickonmedia.in',
    image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=1200&q=85',
    summary: 'Complete brand overhaul with trademark-ready 3D logo, luxury typography, packaging, and brand book.',
    description: 'Engineered an iconic luxury brand identity for a multi-generational jewellery showroom: bespoke 3D & 2D logo insignia, custom royal gold color tokens, premium jewellery box packaging vectors, and brand identity guidelines.',
    tags: ['3D Logo', 'Brand Guidelines', 'Typography', 'Vector Suite'],
    metrics: '100% Unique Design',
    results: '100% Unique Trademark Approval, 60+ Brand Collateral Assets',
    accentColor: 'from-amber-500 to-yellow-600',
    stats: [
      { label: 'Trademark Status', value: '100% Granted', desc: 'Zero conflict intellectual property' },
      { label: 'Brand Assets', value: '60+ Files', desc: 'Full vector SVG, EPS, PDF & PNG suite' },
      { label: 'Packaging Suite', value: 'Luxury Box', desc: 'Gold-foiled bags, boxes & tags' },
      { label: 'Client Trust', value: '+240%', desc: 'Immediate perceived luxury valuation' }
    ],
    challenge: 'The brand had an outdated, pixelated logo created 20 years ago that could not be scaled for modern digital signage, laser jewellery engraving, or social media avatars.',
    strategy: 'Distilled the heritage royal peacock motif into a geometric, timeless luxury monogram accompanied by bespoke Serif typography and gold foil printing specifications.',
    deliverables: [
      'Primary, secondary, and badge variations of the 3D & 2D logo suite',
      'Comprehensive 48-page Brand Guidelines Book with spacing, color codes & typography',
      'Print-ready luxury jewellery carry bag, warranty card, and bill jacket designs'
    ],
    technologies: ['Adobe Illustrator', 'Photoshop', 'Blender 3D', 'InDesign']
  },

  'festival-social-posters': {
    id: 'festival-social-posters',
    number: '14',
    categoryKey: 'graphic-design',
    category: 'Graphic Design',
    categoryLabel: 'Festival Campaigns & Promotional Poster Suite',
    title: 'Festive Marketing Poster Suite',
    client: 'Eastern UP Retail Network',
    year: '2024',
    duration: 'Continuous',
    liveUrl: 'https://clickonmedia.in',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=85',
    summary: 'Eye-catching promotional social media posters, festival banners, and story ads for retail blitz.',
    description: 'Designed over 500 high-converting promotional banners, festive social media posters, and WhatsApp broadcast graphics for Diwali, Eid, New Year, and seasonal wedding shopping campaigns.',
    tags: ['Promo Posters', 'Festival Creatives', 'Instagram Feed', 'HD Graphics'],
    metrics: '500+ Assets Delivered',
    results: '500+ High-Impact Creatives, +340% Higher Ad Engagement',
    accentColor: 'from-rose-500 to-amber-600',
    stats: [
      { label: 'Creatives Designed', value: '500+ Designs', desc: 'Delivered with 24-hr turnaround' },
      { label: 'Average CTR', value: '3.6%', desc: 'Significantly above 1.1% benchmark' },
      { label: 'Print Resolutions', value: '300 DPI', desc: 'Crystal-clear vector quality' },
      { label: 'Client Retention', value: '98%', desc: 'Ongoing monthly retainer brands' }
    ],
    challenge: 'Retail businesses struggled with last-minute festival graphic requests, blurry downloaded images from Google, and mismatched brand colors that damaged brand credibility.',
    strategy: 'Created an agile on-demand design pipeline with custom 3D festive elements, cohesive brand typography, and pre-scheduled holiday campaign packs delivered weeks in advance.',
    deliverables: [
      'Multi-size creative packs (1:1 Square, 9:16 Story, 16:9 Banner, WhatsApp status)',
      'High-impact festive offer banners with clear commercial discount callouts',
      'Print-ready shop front standees and newspaper display ad inserts'
    ],
    technologies: ['Adobe Illustrator', 'Photoshop', 'Figma', 'Lightroom']
  },

  'real-estate-billboards': {
    id: 'real-estate-billboards',
    number: '15',
    categoryKey: 'graphic-design',
    category: 'Graphic Design',
    categoryLabel: 'Large Format Print, Hoardings & Brochure Design',
    title: 'Grand Vista Luxury Billboards',
    client: 'Grand Vista Residencies',
    year: '2024',
    duration: '4 Weeks Production',
    liveUrl: 'https://clickonmedia.in',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85',
    summary: 'Ultra-high-definition print graphics including roadside highway billboards, standees, and brochures.',
    description: 'Architected large-scale visual collateral for a 50-acre luxury residential township: 40ft x 20ft highway hoardings, showroom wall murals, site office entrance standees, and hardbound foiled brochures.',
    tags: ['Large Format', '300 DPI Print', 'Brochures', 'Billboards'],
    metrics: '100% Print Precision',
    results: '100% Print Color Calibration, 12 Highway Hoardings Placed',
    accentColor: 'from-blue-600 to-emerald-600',
    stats: [
      { label: 'Hoardings Installed', value: '12 Locations', desc: 'High-traffic highway visibility' },
      { label: 'Brochure Distribution', value: '5,000 Copies', desc: 'Hardbound gold-foiled books' },
      { label: 'Walk-In Inquiries', value: '+350/mo', desc: 'Directly attributed to billboard QR' },
      { label: 'Print Resolution', value: '12,000px', desc: 'Zero pixelation at 40 feet width' }
    ],
    challenge: 'Large highway billboards often suffer from color distortion when printed at massive scale, while text can be illegible for drivers passing at 60 km/h.',
    strategy: 'Engineered high-contrast CMYK color-calibrated typography and minimal 3-second reading hierarchy: Hero 3D Villa Render, Landmark Location, and a bold Phone/WhatsApp CTA.',
    deliverables: [
      '12 massive highway billboard print files with exact printer spot color codes',
      '32-page luxury hardbound property brochure with floor plans and architectural renders',
      'On-site directional signage and project milestone banners'
    ],
    technologies: ['Adobe InDesign', 'Photoshop', 'Illustrator', 'CMYK Pre-Press']
  },

  'instagram-brand-kit': {
    id: 'instagram-brand-kit',
    number: '16',
    categoryKey: 'graphic-design',
    category: 'Graphic Design',
    categoryLabel: 'Social Media Kit & Aesthetic Carousels',
    title: 'Dr. Neha Wellness Social Kit',
    client: 'Dr. Neha Clinic & Aesthetics',
    year: '2024',
    duration: '2 Weeks Sprint',
    liveUrl: 'https://clickonmedia.in',
    image: 'https://images.unsplash.com/photo-1542744094-24638eff58bb?auto=format&fit=crop&w=1200&q=85',
    summary: 'Aesthetic Instagram carousel templates, icon sets, and story templates for medical authority.',
    description: 'Designed a clinical yet warm, aesthetic social media branding kit for a high-end dermatology and wellness clinic: seamless 10-slide educational carousels, custom line-art icons, and branded story highlights.',
    tags: ['Carousels', 'Iconography', 'Brand Palette', 'High Shares'],
    metrics: '+420% Post Saves',
    results: '+420% Instagram Post Saves, 2.8x Follower Conversion',
    accentColor: 'from-teal-500 to-indigo-600',
    stats: [
      { label: 'Post Saves', value: '+420%', desc: 'Viral educational carousel saves' },
      { label: 'Templates Built', value: '45 Layouts', desc: 'Plug-and-play Figma & Canva kit' },
      { label: 'Consultation DMs', value: '120+/mo', desc: 'Driven by informative post carousels' },
      { label: 'Aesthetic Score', value: 'Clean Minimal', desc: 'Medical trust & luxury feel' }
    ],
    challenge: 'Medical advice posts were text-heavy and boring, failing to stand out against trendy lifestyle content on Instagram explore feeds.',
    strategy: 'Constructed clean, Scandinavian-style minimalist carousel layouts with step-by-step visual skincare advice, digestible bullet points, and authoritative doctor badges.',
    deliverables: [
      '45 reusable Canva and Figma carousel slide templates',
      'Custom vector icon library for skincare, treatments, and appointments',
      'Branded Instagram story highlight covers and verified badge assets'
    ],
    technologies: ['Figma', 'Adobe Illustrator', 'Photoshop']
  },

  // --------------------------------------------------------------------------
  // 5. SOCIAL MEDIA MARKETING (Campaigns, IG Management, Ads, Outreach)
  // --------------------------------------------------------------------------
  'banquet-meta-ads': {
    id: 'banquet-meta-ads',
    number: '17',
    categoryKey: 'social-media',
    category: 'Social Media Marketing',
    categoryLabel: 'High-ROAS Meta Wedding Ads Campaign',
    title: 'Krishna Inn Banquet Meta Ads',
    client: 'Krishna Hospitality Group',
    year: '2024',
    duration: 'Ongoing 6-Month Sprint',
    liveUrl: 'https://krishnainn.in',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=85',
    summary: 'Hyper-targeted Meta ad campaigns generating 180+ verified high-budget banquet wedding bookings.',
    description: 'Conceived, launched, and managed high-ROAS Facebook and Instagram direct-response video campaigns targeting families planning weddings within 200km of Gorakhpur, integrated with instant WhatsApp lead capture.',
    tags: ['Meta Ads', 'WhatsApp Funnel', '3.8x ROAS', 'Wedding Leads'],
    metrics: '3.8x Verified ROAS',
    results: '3.8x Verified ROAS, 180+ High-Value Wedding Inquiries',
    accentColor: 'from-orange-500 to-rose-600',
    stats: [
      { label: 'ROAS Delivered', value: '3.8x', desc: 'Over ₹65L in banquet contracts' },
      { label: 'Cost Per Lead', value: '₹62', desc: 'Verified phone & wedding date' },
      { label: 'Inquiries Generated', value: '180+/mo', desc: 'Peak wedding season inquiries' },
      { label: 'Lead Response Time', value: '< 2 Mins', desc: 'Instant WhatsApp automated routing' }
    ],
    challenge: 'Generic boost-post spending generated tire-kicker comments ("price?") with zero genuine high-budget wedding inquiries.',
    strategy: 'Deployed custom video ad funnels featuring real wedding testimonials, coupled with instant WhatsApp click-to-chat automation that collects guest count and event date automatically.',
    deliverables: [
      'Comprehensive Meta Ads Manager structure with Custom & Lookalike Audiences',
      'Automated WhatsApp bot qualifying guest count and budget before alerting sales team',
      'Weekly performance analytics reporting CPL, conversion rates, and revenue'
    ],
    technologies: ['Meta Ads Manager', 'WhatsApp Business API', 'Google Analytics 4', 'HubSpot CRM']
  },

  'fashion-boutique-growth': {
    id: 'fashion-boutique-growth',
    number: '18',
    categoryKey: 'social-media',
    category: 'Social Media Marketing',
    categoryLabel: 'Instagram Brand Growth & Viral Reach Blitz',
    title: 'Zivaya Fashion Instagram Growth',
    client: 'Zivaya Luxury Pret',
    year: '2024',
    duration: '4-Month Campaign',
    liveUrl: 'https://instagram.com/clickonmedia',
    image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1200&q=85',
    summary: 'Daily aesthetic content, viral trend capture, and active DM-to-WhatsApp funnels growing reach by +340%.',
    description: 'Turned a luxury designer boutique into a recognized regional fashion powerhouse through aesthetic daily feed curation, influencer styling collaborations, and automated direct message (DM) sales routing.',
    tags: ['Organic Growth', 'DM Funnels', 'Viral Reels', '+340% Reach'],
    metrics: '+340% Real Reach',
    results: '+340% Organic Reach Surge, 24,000+ Engaged Followers',
    accentColor: 'from-rose-500 to-purple-600',
    stats: [
      { label: 'Organic Reach', value: '+340%', desc: 'Over 850,000 unique monthly accounts' },
      { label: 'Follower Gain', value: '+24,000', desc: '100% organic without bot followers' },
      { label: 'DM Inquiries', value: '45/Day', desc: 'Direct order inquiries via Instagram' },
      { label: 'Online Sales', value: '+190%', desc: 'Out-of-state shipping orders' }
    ],
    challenge: 'The boutique had stunning physical collections but an inactive, inconsistent Instagram profile with low engagement and zero sales conversion.',
    strategy: 'Curated a cohesive warm aesthetic feed grid, scheduled 5 high-fashion reels per week with viral styling tips, and set up automated ManyChat DM reply funnels.',
    deliverables: [
      'Full monthly content calendars with professional photoshoot direction',
      'Automated Instagram Direct Message bot routing inquiries straight to sales reps',
      'Micro-influencer gifting campaign with 15 prominent UP lifestyle creators'
    ],
    technologies: ['Instagram Creator Studio', 'ManyChat Automation', 'Meta Business Suite']
  },

  'local-seo-gmb-domination': {
    id: 'local-seo-gmb-domination',
    number: '19',
    categoryKey: 'social-media',
    category: 'Social Media Marketing',
    categoryLabel: 'Google My Business Domination & Local Buzz',
    title: 'Local Business GMB & Social Domination',
    client: 'Gorakhpur Commercial Hub',
    year: '2024',
    duration: 'Ongoing Sprint',
    liveUrl: 'https://clickonmedia.in/#local-seo-hub',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=85',
    summary: 'Full Google My Business optimization, review generation, and local buzz dominating local searches.',
    description: 'Dominated Google Search Map Pack and regional community social channels for local businesses in Mohaddipur and Gorakhpur, driving massive direct phone calls and store walk-ins.',
    tags: ['Local SEO', 'GMB Domination', 'Review Funnel', 'Map Pack #1'],
    metrics: '#1 Local Map Rank',
    results: '#1 Google Map Pack Position for 45+ Commercial Keywords',
    accentColor: 'from-primary-blue to-cyan-500',
    stats: [
      { label: 'Map Pack Rank', value: '#1 Position', desc: 'Top 3 ranking across 45+ keywords' },
      { label: 'Direct Phone Calls', value: '380+/mo', desc: 'Direct calls from Google Maps' },
      { label: 'Direction Requests', value: '1,400+/mo', desc: 'Footfall navigation triggers' },
      { label: 'Review Velocity', value: '+45/mo', desc: 'Automated 5-star review collector' }
    ],
    challenge: 'Local competitors were dominating Google Search because the client lacked localized schema markup, review generation funnels, and consistent local business citations.',
    strategy: 'Performed complete Google Business Profile optimization with geocoded photos, automated QR code review cards at checkout, and weekly GMB promotional updates.',
    deliverables: [
      'Google Business Profile verification, category optimization, and keyword tags',
      'Near Me search domination sprint across Gorakhpur, Deoria & Basti',
      'Smart NFC and QR review cards for counter checkout collection'
    ],
    technologies: ['Google Business Profile API', 'SEMrush Local', 'BrightLocal', 'WhatsApp Automation']
  },

  'barkat-welfare': {
    id: 'barkat-welfare',
    number: '20',
    categoryKey: 'social-media',
    category: 'Social Media Marketing',
    categoryLabel: 'NGO & Humanitarian Storytelling Funnel',
    title: 'Barkat Welfare Humanitarian Outreach',
    client: 'Barkat Welfare Trust',
    year: '2023-2024',
    duration: '6 Weeks Sprint',
    liveUrl: 'https://barkatwelfare.org',
    image: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=1200&q=85',
    summary: 'Grassroots video storytelling and digital outreach campaigns driving direct online donations.',
    description: 'Built an inspiring humanitarian storytelling platform with instant multi-currency donation gateways and real-time project milestone tracking for Barkat Welfare Society.',
    tags: ['Social Impact', 'Donation Growth', 'Storytelling', '4.5x Donations'],
    metrics: '4.5x Online Donations',
    results: '4.5x Online Contributions, 50,000+ Beneficiaries Reached',
    accentColor: 'from-emerald-600 to-teal-500',
    stats: [
      { label: 'Online Donations', value: '4.5x Growth', desc: 'Direct digital contributions' },
      { label: 'Beneficiaries', value: '50,000+', desc: 'Direct relief & medical aid recipients' },
      { label: 'Transparency Rating', value: '100%', desc: 'Public fund audit reports' },
      { label: 'Recurring Donors', value: '+320%', desc: 'Monthly recurring supporters' }
    ],
    challenge: 'Barkat Welfare Society did impactful grassroots work but relied on cash donations that were difficult to track and report. Potential donors lacked a transparent digital donation platform.',
    strategy: 'We built a transparent, story-driven humanitarian platform with instant multi-currency donation gateways, live project progress counters, and automatic 80G tax exemption certificate generation.',
    deliverables: [
      'Emotional, high-impact storytelling web platform with verified field photography',
      'Instant UPI, debit/credit card, and international net-banking payment gateway',
      'Automated instant 80G tax deduction receipt generation via PDF download',
      'Live campaign tracker showing funds raised vs relief materials dispatched'
    ],
    technologies: ['React', 'Next.js', 'Tailwind CSS', 'Stripe & Razorpay', 'PDFKit']
  }
};

// Backward-compatibility alias for legacy or cached references
Object.defineProperty(PROJECTS_DATA, 'royal-awadh', {
  get() {
    return PROJECTS_DATA['hotel-adalat'];
  },
  enumerable: false
});

Object.defineProperty(PROJECTS_DATA, 'mapaz-hotel', {
  get() {
    return PROJECTS_DATA['shree-krishna-inn'];
  },
  enumerable: false
});
