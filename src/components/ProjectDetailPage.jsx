import React, { useEffect } from 'react';
import { 
  ArrowLeft, 
  ArrowRight, 
  TrendingUp, 
  CheckCircle2, 
  ExternalLink, 
  Zap, 
  ShieldCheck, 
  Clock, 
  Building2, 
  Sparkles,
  Layers,
  ChevronRight
} from 'lucide-react';
import Logo from './Logo';

export default function ProjectDetailPage({ projectId, onBack, onOpenQuote, onSelectProject }) {
  // Scroll to top when page opens
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [projectId]);

  const projectsData = {
    'mapaz-hotel': {
      id: 'mapaz-hotel',
      number: '01',
      title: 'MAPAZ Hotel',
      client: 'MAPAZ Luxury Stays',
      category: 'Luxury Hospitality & Direct Booking',
      year: '2024',
      duration: '8 Weeks Sprint',
      liveUrl: 'https://mapazhotel.com',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1600&q=85',
      accentColor: 'from-amber-500 to-orange-600',
      badgeColor: 'bg-amber-500/10 text-amber-500 border-amber-500/20',
      results: '+240% Direct Bookings, #1 Local Ranking in 90 Days',
      stats: [
        { label: 'Direct Bookings', value: '+240%', desc: 'Bypassing high OTA commissions' },
        { label: 'Google Map Pack', value: '#1 Rank', desc: 'Across Gorakhpur & Eastern UP' },
        { label: 'Mobile Page Speed', value: '0.6s', desc: 'Lighthouse 98/100 score' },
        { label: 'Commission Saved', value: '₹14.2L+', desc: 'Retained annual net revenue' }
      ],
      challenge: 'MAPAZ Hotel was paying up to 22% in commissions to third-party travel aggregators (OTAs) for every room reservation. Their legacy website was slow, non-responsive on budget Android phones, and completely invisible on Google Local Search for travelers arriving in Eastern UP.',
      strategy: 'Click On Media engineered a high-performance direct reservation engine with instant UPI/card payment verification and automated WhatsApp booking confirmations. Simultaneously, we executed a dominant local SEO sprint targeting 45+ high-intent commercial travel keywords.',
      deliverables: [
        'Custom React & Next.js reservation engine with 0% OTA commission leakage',
        'Google Business Profile overhaul & local map pack domination (#1 in 90 days)',
        'Sub-second page load times on 4G/5G mobile networks',
        'Automated WhatsApp booking confirmations, invoices & QR code room check-in',
        'Complete brand identity refinement with luxury typography & photography',
        'Targeted hyper-local Meta & Google Ads capturing high-intent holiday bookings'
      ],
      technologies: ['React', 'Next.js', 'Tailwind CSS', 'Razorpay', 'WhatsApp Business API', 'Google Search Console', 'SEMrush']
    },
    'krishna-inn': {
      id: 'krishna-inn',
      number: '02',
      title: 'Krishna Inn',
      client: 'Krishna Hospitality Group',
      category: 'Resort, Banquet & Performance Marketing',
      year: '2024',
      duration: '10 Weeks Sprint',
      liveUrl: 'https://krishnainn.in',
      image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1600&q=85',
      accentColor: 'from-orange-500 to-red-500',
      badgeColor: 'bg-orange-500/10 text-orange-500 border-orange-500/20',
      results: '3.8x Return on Ad Spend, 45,000+ Monthly Visitors',
      stats: [
        { label: 'ROAS Delivered', value: '3.8x', desc: 'Continuous Meta & Google ad campaigns' },
        { label: 'Banquet Inquiries', value: '180+/mo', desc: 'High-value wedding & corporate bookings' },
        { label: 'Monthly Visitors', value: '45,000+', desc: 'Organic & paid targeted traffic' },
        { label: 'Inquiry Conversion', value: '14.8%', desc: 'Industry benchmark is 3.5%' }
      ],
      challenge: 'Krishna Inn operated a magnificent resort property with luxury banquet halls, but struggled to fill non-peak wedding season dates and weekday corporate suites. Their online presence was fragmented across obsolete social profiles with zero lead capture funnels.',
      strategy: 'We deployed full-funnel digital marketing campaigns combining 4K video storytelling of banquet setups, interactive wedding cost calculators, and targeted geo-fencing Meta ads reaching families planning destination weddings within a 250km radius.',
      deliverables: [
        'High-converting mobile-first resort website with interactive suite tours',
        'Interactive wedding & banquet hall budget calculator that collects verified leads',
        'Multi-stage Meta & Google Ads campaigns delivering consistent 3.8x ROAS',
        'CRM lead routing with instant salesperson call alerts within 60 seconds',
        'High-retention 9:16 Instagram Reels showcasing real guest experiences',
        'Automated email nurture sequences for corporate banquet repeat bookings'
      ],
      technologies: ['React', 'Tailwind CSS', 'Meta Ads Manager', 'Google Ads', 'HubSpot CRM', 'Zapier Automation']
    },
    'era-of-education': {
      id: 'era-of-education',
      number: '03',
      title: 'Era of Education',
      client: 'Era Global EdTech',
      category: 'EdTech Portal & Admissions Engine',
      year: '2023-2024',
      duration: '12 Weeks Sprint',
      liveUrl: 'https://eraofeducation.com',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1600&q=85',
      accentColor: 'from-blue-600 to-cyan-500',
      badgeColor: 'bg-blue-500/10 text-blue-500 border-blue-500/20',
      results: '+310% Enrolment Rate, 12,000+ Active Students',
      stats: [
        { label: 'Enrolment Growth', value: '+310%', desc: 'Year-over-year student admissions' },
        { label: 'Active Students', value: '12,000+', desc: 'Enrolled across North India' },
        { label: 'Platform Uptime', value: '99.98%', desc: 'Zero downtime during exam peaks' },
        { label: 'Lead-to-Admit Rate', value: '28.4%', desc: 'Automated qualification pipeline' }
      ],
      challenge: 'Era of Education was scaling rapidly but their legacy website collapsed under peak admission traffic. Prospective students abandoned lengthy application forms, and student test score tracking was handled via manual spreadsheets.',
      strategy: 'We architected a scalable, multi-tier learning management and admission portal with self-service student dashboards, frictionless one-click registration, and automated SMS/WhatsApp admission reminders.',
      deliverables: [
        'Scalable cloud-hosted student portal supporting 10,000+ concurrent users',
        'Interactive course catalog with syllabus preview and faculty profiles',
        'Automated admissions pipeline with instant lead verification and CRM sync',
        'Real-time student progress tracking, video lectures & automated quiz grading',
        'High-volume regional search marketing campaigns across Tier 2 & Tier 3 cities',
        'Secure multi-tier payment gateway supporting UPI, EMI, and scholarship vouchers'
      ],
      technologies: ['React', 'Node.js', 'PostgreSQL', 'AWS Cloud', 'Razorpay Subscriptions', 'Google Workspace']
    },
    'shivoy-distributors': {
      id: 'shivoy-distributors',
      number: '04',
      title: 'Shivoy Distributors',
      client: 'Shivoy National Distributors',
      category: 'B2B Enterprise Wholesale & Catalog',
      year: '2024',
      duration: '9 Weeks Sprint',
      liveUrl: 'https://shivoydistributors.com',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=85',
      accentColor: 'from-blue-700 to-indigo-600',
      badgeColor: 'bg-indigo-500/10 text-indigo-500 border-indigo-500/20',
      results: '+180% Wholesale Inquiries, Zero Downtime',
      stats: [
        { label: 'Wholesale Inquiries', value: '+180%', desc: 'Verified retailer & dealer applications' },
        { label: 'Dealer Network', value: '850+ Stores', desc: 'Connected across 4 Northern states' },
        { label: 'Catalog Efficiency', value: '65% Faster', desc: 'Real-time SKU lookup & order drafting' },
        { label: 'Order Processing', value: 'Same-Day', desc: 'Automated ERP dispatch routing' }
      ],
      challenge: 'Shivoy Distributors managed over 3,000 SKUs distributed across hundreds of retail dealers. Orders were collected manually via chaotic phone calls and paper notes, causing shipping errors, slow inventory dispatch, and lost wholesale revenue.',
      strategy: 'Click On Media built a private B2B dealer ordering portal with real-time stock levels, volume tiered discounts, and an automated invoice generator linked directly to their dispatch warehouse.',
      deliverables: [
        'Enterprise digital catalog featuring 3,000+ searchable SKUs with live stock status',
        'Role-based dealer login with customized tiered pricing and bulk discounts',
        'One-click WhatsApp order confirmation and PDF quotation generator',
        'Comprehensive brand modernization and corporate identity guidelines',
        'Automated credit term checks and ledger statement downloads for dealers',
        'Full SEO optimization for commercial bulk supply searches across North India'
      ],
      technologies: ['React', 'Next.js', 'Tailwind CSS', 'ERP Integration', 'Cloudflare CDN', 'PostgreSQL']
    },
    'barkat-welfare': {
      id: 'barkat-welfare',
      number: '05',
      title: 'Barkat Welfare Society',
      client: 'Barkat Welfare Trust',
      category: 'NGO, Social Impact & Transparent Donation Funnels',
      year: '2023-2024',
      duration: '6 Weeks Sprint',
      liveUrl: 'https://barkatwelfare.org',
      image: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=1600&q=85',
      accentColor: 'from-emerald-600 to-teal-500',
      badgeColor: 'bg-emerald-500/10 text-emerald-500 border-emerald-500/20',
      results: '4.5x Online Contributions, 50,000+ Beneficiaries',
      stats: [
        { label: 'Online Donations', value: '4.5x Growth', desc: 'Direct digital contributions' },
        { label: 'Beneficiaries', value: '50,000+', desc: 'Direct relief & medical aid recipients' },
        { label: 'Transparency Rating', value: '100%', desc: 'Public fund audit reports' },
        { label: 'Recurring Donors', value: '+320%', desc: 'Monthly recurring supporters' }
      ],
      challenge: 'Barkat Welfare Society did impactful grassroots work but relied on cash donations that were difficult to track and report. Potential international and nationwide donors lacked a secure, transparent platform with 80G tax receipt automation.',
      strategy: 'We built a transparent, story-driven humanitarian platform with instant multi-currency donation gateways, live project progress counters, and automatic 80G tax exemption certificate generation.',
      deliverables: [
        'Emotional, high-impact storytelling web platform with verified field photography',
        'Instant UPI, debit/credit card, and international net-banking payment gateway',
        'Automated instant 80G tax deduction receipt generation via PDF download',
        'Live campaign tracker showing funds raised vs relief materials dispatched',
        'Social proof integration with donor wall and transparent annual audit reports',
        'Viral social media video snippets driving grassroots donor engagement'
      ],
      technologies: ['React', 'Next.js', 'Tailwind CSS', 'Stripe & Razorpay', 'PDFKit', 'Cloudflare']
    }
  };

  const project = projectsData[projectId] || projectsData['mapaz-hotel'];
  const allProjects = Object.values(projectsData);
  const otherProjects = allProjects.filter(p => p.id !== project.id);

  return (
    <div className="min-h-screen bg-white text-[var(--text-dark)] font-sans antialiased">
      
      {/* --------------------------------------------------------------------- */}
      {/* TOP STICKY NAVIGATION BAR                                             */}
      {/* --------------------------------------------------------------------- */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/90 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 sm:h-20 flex items-center justify-between">
          
          {/* Back to Home / Work */}
          <button
            onClick={onBack}
            className="flex items-center gap-2.5 text-xs sm:text-sm font-bold text-[var(--deep-navy)] hover:text-[var(--brand-orange)] transition-colors py-2 px-3 rounded-xl hover:bg-slate-50 cursor-pointer group"
          >
            <div className="w-8 h-8 rounded-full bg-slate-100 group-hover:bg-[var(--brand-orange)] group-hover:text-white flex items-center justify-center transition-all shadow-xs">
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-0.5" />
            </div>
            <span className="font-heading">Back to All Projects</span>
          </button>

          {/* Logo Center */}
          <div className="hidden sm:block">
            <Logo className="h-10 w-auto" />
          </div>

          {/* Action CTA */}
          <button
            onClick={() => {
              if (onOpenQuote) onOpenQuote(`Project inspired by ${project.title}`);
            }}
            className="btn-primary !py-2.5 !px-5 text-xs sm:text-sm font-heading font-bold shadow-md cursor-pointer"
          >
            <span>Start Similar Project</span>
            <ArrowRight className="w-4 h-4" />
          </button>

        </div>
      </header>

      {/* --------------------------------------------------------------------- */}
      {/* HERO SECTION: CASE STUDY SPOTLIGHT                                    */}
      {/* --------------------------------------------------------------------- */}
      <section className="relative overflow-hidden bg-[var(--deep-navy)] text-white pt-12 pb-20 sm:pt-16 sm:pb-28">
        
        {/* Subtle Brand Ambient Glows */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[var(--primary-blue)]/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-80 h-80 bg-[var(--brand-orange)]/15 rounded-full blur-3xl pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Breadcrumb & Project Number */}
          <div className="flex items-center gap-3 mb-6">
            <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-white/10 text-[var(--cyan-accent)] border border-white/15">
              CASE STUDY #{project.number}
            </span>
            <div className="h-4 w-px bg-white/20" />
            <span className="text-xs font-semibold text-slate-300 uppercase tracking-wider font-heading">
              {project.category}
            </span>
          </div>

          {/* Main Title & Client */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-12">
            <div className="lg:col-span-8 space-y-4">
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black font-heading text-white tracking-tight leading-tight">
                {project.title}
              </h1>
              <p className="text-base sm:text-xl text-slate-300 font-normal leading-relaxed max-w-2xl">
                {project.challenge}
              </p>
            </div>

            {/* Quick Meta Card */}
            <div className="lg:col-span-4 bg-white/5 backdrop-blur-md rounded-2xl p-5 border border-white/10 space-y-3">
              <div className="flex items-center justify-between text-xs text-slate-300 pb-2 border-b border-white/10">
                <span className="font-medium text-slate-400">Client Organization</span>
                <span className="font-bold text-white">{project.client}</span>
              </div>
              <div className="flex items-center justify-between text-xs text-slate-300 pb-2 border-b border-white/10">
                <span className="font-medium text-slate-400">Timeline / Scope</span>
                <span className="font-bold text-white">{project.duration}</span>
              </div>
              <div className="flex items-center justify-between text-xs text-slate-300">
                <span className="font-medium text-slate-400">Delivered In</span>
                <span className="font-bold text-[var(--brand-orange)]">{project.year}</span>
              </div>
            </div>
          </div>

          {/* Visual Showcase Banner */}
          <div className="relative aspect-video sm:aspect-[21/9] w-full rounded-3xl overflow-hidden shadow-2xl border border-white/10 bg-slate-900 group">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--deep-navy)] via-transparent to-transparent opacity-80" />
            
            {/* Overlay Result Badge */}
            <div className="absolute bottom-6 left-6 right-6 sm:bottom-8 sm:left-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="bg-black/80 backdrop-blur-md px-5 py-3 rounded-2xl border border-white/20 shadow-xl inline-flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-[var(--brand-orange)] to-[var(--amber)] text-white flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-300 block font-heading">
                    Key Benchmark Achieved
                  </span>
                  <span className="text-sm sm:text-base font-extrabold text-white font-heading">
                    {project.results}
                  </span>
                </div>
              </div>

              <button
                onClick={() => {
                  if (onOpenQuote) onOpenQuote(`Project inspired by ${project.title}`);
                }}
                className="btn-primary text-xs sm:text-sm !py-3 !px-6 shadow-xl font-heading font-bold self-start sm:self-auto cursor-pointer"
              >
                <span>Hire Us For Your Project</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* --------------------------------------------------------------------- */}
      {/* METRICS & ROI GRID                                                    */}
      {/* --------------------------------------------------------------------- */}
      <section className="py-12 sm:py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-[var(--brand-orange)] font-heading">
              Measured Commercial Impact
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[var(--deep-navy)] font-heading mt-1">
              Real Revenue Numbers, Not Just Vanity Metrics
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {project.stats.map((stat, idx) => (
              <div 
                key={idx}
                className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="text-3xl sm:text-4xl font-black font-heading text-[var(--primary-blue)] mb-2">
                  {stat.value}
                </div>
                <div className="text-sm font-bold text-[var(--deep-navy)] font-heading mb-1">
                  {stat.label}
                </div>
                <div className="text-xs text-slate-500 font-normal">
                  {stat.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --------------------------------------------------------------------- */}
      {/* STRATEGY & DELIVERABLES DETAILED BREAKDOWN                             */}
      {/* --------------------------------------------------------------------- */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            
            {/* Left Column: Narrative (7 Cols) */}
            <div className="lg:col-span-7 space-y-8">
              
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--primary-blue)]/10 text-[var(--primary-blue)] text-xs font-bold font-heading">
                  <Zap className="w-3.5 h-3.5" />
                  <span>The Engineering & Growth Solution</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[var(--deep-navy)] font-heading">
                  How Click On Media Executed This Transformation
                </h3>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                  {project.strategy}
                </p>
              </div>

              {/* Deliverables Checklist */}
              <div className="space-y-4 pt-4 border-t border-slate-100">
                <h4 className="text-lg font-bold text-[var(--deep-navy)] font-heading">
                  Deliverables Included in Scope:
                </h4>
                <div className="space-y-3">
                  {project.deliverables.map((item, dIdx) => (
                    <div key={dIdx} className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
                      <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                      </div>
                      <span className="text-xs sm:text-sm text-slate-700 font-medium">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Right Column: Stack & Action Card (5 Cols) */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Tech Stack */}
              <div className="bg-slate-50 rounded-3xl p-6 sm:p-8 border border-slate-200 space-y-4">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[var(--text-muted)] font-heading">
                  <Layers className="w-4 h-4 text-[var(--brand-orange)]" />
                  <span>Technologies & Stack</span>
                </div>
                <h4 className="text-lg font-bold text-[var(--deep-navy)] font-heading">
                  Built With Modern Enterprise Tools
                </h4>
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.technologies.map((tech, tIdx) => (
                    <span 
                      key={tIdx}
                      className="px-3.5 py-1.5 rounded-xl bg-white text-[var(--deep-navy)] border border-slate-200 text-xs font-semibold shadow-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Guarantee & Confidence Box */}
              <div className="bg-gradient-to-br from-[var(--deep-navy)] to-slate-900 text-white rounded-3xl p-6 sm:p-8 shadow-xl space-y-5">
                <div className="w-12 h-12 rounded-2xl bg-[var(--brand-orange)] text-white flex items-center justify-center shadow-md">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div className="space-y-2">
                  <h4 className="text-xl font-bold font-heading text-white">
                    Need Similar ROI For Your Brand?
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                    We engineer digital platforms, search dominance, and conversion funnels tailored specifically to your business goals.
                  </p>
                </div>
                <div className="pt-2">
                  <button
                    onClick={() => {
                      if (onOpenQuote) onOpenQuote(`Project inspired by ${project.title}`);
                    }}
                    className="btn-primary w-full justify-center !py-3.5 text-xs sm:text-sm font-heading font-bold shadow-lg cursor-pointer"
                  >
                    <span>Get a Custom Proposal</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* --------------------------------------------------------------------- */}
      {/* BROWSE OTHER CASE STUDIES                                             */}
      {/* --------------------------------------------------------------------- */}
      <section className="py-16 sm:py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[var(--brand-orange)] font-heading">
                More Success Stories
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[var(--deep-navy)] font-heading mt-1">
                Explore Other Client Case Studies
              </h2>
            </div>
            <button
              onClick={onBack}
              className="text-xs sm:text-sm font-bold text-[var(--primary-blue)] hover:text-[var(--brand-orange)] flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <span>View all projects in portfolio</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {otherProjects.slice(0, 4).map((other) => (
              <div
                key={other.id}
                onClick={() => {
                  if (onSelectProject) {
                    onSelectProject(other);
                  }
                }}
                className="bg-white rounded-2xl overflow-hidden border border-slate-200 hover:border-slate-300 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer flex flex-col justify-between group"
              >
                <div>
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-900">
                    <img
                      src={other.image}
                      alt={other.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-2.5 left-2.5">
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-black/70 backdrop-blur-md text-white border border-white/20">
                        #{other.number}
                      </span>
                    </div>
                  </div>

                  <div className="p-4 space-y-1.5">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--brand-orange)] block font-heading">
                      {other.category}
                    </span>
                    <h4 className="text-base font-bold text-[var(--deep-navy)] group-hover:text-[var(--primary-blue)] transition-colors font-heading truncate">
                      {other.title}
                    </h4>
                    <span className="text-xs text-emerald-600 font-semibold block line-clamp-1">
                      {other.results}
                    </span>
                  </div>
                </div>

                <div className="p-4 pt-2 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[var(--primary-blue)] group-hover:text-[var(--brand-orange)] transition-colors">
                  <span>Read Case Study</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* --------------------------------------------------------------------- */}
      {/* BOTTOM FOOTER BAR                                                     */}
      {/* --------------------------------------------------------------------- */}
      <footer className="bg-[var(--deep-navy)] text-slate-400 py-8 border-t border-white/10 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Click On Media. All rights reserved.</p>
          <button
            onClick={onBack}
            className="text-white hover:text-[var(--brand-orange)] font-bold transition-colors cursor-pointer"
          >
            ← Return to Click On Media Homepage
          </button>
        </div>
      </footer>

    </div>
  );
}

