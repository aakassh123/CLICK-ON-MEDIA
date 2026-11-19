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
import { PROJECTS_DATA } from '../data/projectsData';

export default function ProjectDetailPage({ projectId, onBack, onOpenQuote, onSelectProject }) {
  // Scroll to top when page opens
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [projectId]);

  const project = PROJECTS_DATA[projectId] || PROJECTS_DATA['mapaz-hotel'];
  const allProjects = Object.values(PROJECTS_DATA);
  const otherProjects = allProjects.filter(p => p.id !== project.id);

  return (
    <div className="min-h-screen bg-white text-[var(--text-dark)] font-sans antialiased">
      
      {/* --------------------------------------------------------------------- */}
      {/* TOP STICKY NAVIGATION BAR                                             */}
      {/* --------------------------------------------------------------------- */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/90 shadow-xs">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between gap-2">
          
          {/* Back to Home / Work */}
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-xs sm:text-sm font-bold text-[var(--deep-navy)] hover:text-[var(--brand-orange)] transition-colors py-1.5 px-2.5 sm:py-2 sm:px-3 rounded-xl hover:bg-slate-50 cursor-pointer group"
          >
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-slate-100 group-hover:bg-[var(--brand-orange)] group-hover:text-white flex items-center justify-center transition-all shadow-xs flex-shrink-0">
              <ArrowLeft className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform group-hover:-translate-x-0.5" />
            </div>
            <span className="font-heading hidden xs:inline">Back to All Projects</span>
            <span className="font-heading xs:hidden">Back</span>
          </button>

          {/* Logo Center */}
          <div className="hidden sm:block">
            <Logo className="h-9 sm:h-10 w-auto" />
          </div>

          {/* Action CTA */}
          <button
            onClick={() => {
              if (onOpenQuote) onOpenQuote(`Project inspired by ${project.title}`);
            }}
            className="btn-primary !py-2 sm:!py-2.5 !px-3.5 sm:!px-5 text-xs sm:text-sm font-heading font-bold shadow-md cursor-pointer whitespace-nowrap"
          >
            <span className="hidden xs:inline">Start Similar Project</span>
            <span className="xs:hidden">Get Quote</span>
            <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          </button>

        </div>
      </header>

      <main className="flex-grow">
      {/* --------------------------------------------------------------------- */}
      {/* HERO SECTION: CASE STUDY SPOTLIGHT (PREMIUM WHITE PALETTE)            */}
      {/* --------------------------------------------------------------------- */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#FAFBFF] via-white to-[#F4F7FF] text-slate-800 pt-8 pb-14 sm:pt-16 sm:pb-28 border-b border-slate-200/90">
        
        {/* Subtle Brand Ambient Glows */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[var(--primary-blue)]/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-80 h-80 bg-[var(--brand-orange)]/5 rounded-full blur-3xl pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Breadcrumb & Project Number */}
          <div className="flex items-center gap-2.5 sm:gap-3 mb-4 sm:mb-6 flex-wrap">
            <span className="px-3 py-1 rounded-full text-[11px] sm:text-xs font-mono font-bold bg-[var(--primary-blue)]/10 text-[var(--primary-blue)] border border-[var(--primary-blue)]/20 shadow-xs">
              CASE STUDY #{project.number}
            </span>
            <div className="h-4 w-px bg-slate-300" />
            <span className="text-[11px] sm:text-xs font-semibold text-slate-500 uppercase tracking-wider font-heading">
              {project.category}
            </span>
          </div>

          {/* Main Title & Client */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-end mb-8 sm:mb-12">
            <div className="lg:col-span-8 space-y-3 sm:space-y-4">
              <h1 className="text-2xl xs:text-3xl sm:text-5xl lg:text-6xl font-black font-heading text-[#0A1F6B] tracking-tight leading-tight">
                {project.title}
              </h1>
              <p className="text-sm sm:text-xl text-slate-600 font-normal leading-relaxed max-w-2xl">
                {project.challenge}
              </p>
            </div>

            {/* Quick Meta Card */}
            <div className="lg:col-span-4 bg-white rounded-2xl p-4 sm:p-5 border border-slate-200/90 shadow-lg space-y-2.5 sm:space-y-3">
              <div className="flex items-center justify-between text-xs text-slate-600 pb-2 border-b border-slate-100">
                <span className="font-medium text-slate-500">Client Organization</span>
                <span className="font-bold text-[#0A1F6B]">{project.client}</span>
              </div>
              <div className="flex items-center justify-between text-xs text-slate-600 pb-2 border-b border-slate-100">
                <span className="font-medium text-slate-500">Timeline / Scope</span>
                <span className="font-bold text-[#0A1F6B]">{project.duration}</span>
              </div>
              <div className="flex items-center justify-between text-xs text-slate-600">
                <span className="font-medium text-slate-500">Delivered In</span>
                <span className="font-bold text-[var(--brand-orange)]">{project.year}</span>
              </div>
            </div>
          </div>

          {/* Visual Showcase Banner */}
          <div className="relative aspect-[16/10] sm:aspect-[21/9] w-full rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-slate-200/90 bg-slate-900 group">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent" />
            
            {/* Overlay Result Badge */}
            <div className="absolute bottom-3 left-3 right-3 sm:bottom-8 sm:left-8 sm:right-8 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="bg-white/95 backdrop-blur-md px-3 sm:px-5 py-2 sm:py-3 rounded-xl sm:rounded-2xl border border-slate-200/90 shadow-xl inline-flex items-center gap-2.5 sm:gap-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-gradient-to-r from-[var(--brand-orange)] to-[var(--amber)] text-white flex items-center justify-center flex-shrink-0 shadow-xs">
                  <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div>
                  <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-slate-500 block font-heading">
                    Key Benchmark Achieved
                  </span>
                  <span className="text-xs sm:text-base font-extrabold text-[#0A1F6B] font-heading line-clamp-1">
                    {project.results}
                  </span>
                </div>
              </div>

              <button
                onClick={() => {
                  if (onOpenQuote) onOpenQuote(`Project inspired by ${project.title}`);
                }}
                className="btn-primary text-xs sm:text-sm !py-2.5 sm:!py-3 !px-4 sm:!px-6 shadow-xl font-heading font-bold self-stretch sm:self-auto justify-center cursor-pointer"
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
      <section className="py-10 sm:py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-[var(--brand-orange)] font-heading">
              Measured Commercial Impact
            </span>
            <h2 className="text-xl xs:text-2xl sm:text-3xl font-extrabold text-[var(--deep-navy)] font-heading mt-1">
              Real Revenue Numbers, Not Just Vanity Metrics
            </h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
            {project.stats.map((stat, idx) => (
              <div 
                key={idx}
                className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-slate-200 shadow-xs hover:shadow-md transition-shadow"
              >
                <div className="text-2xl xs:text-3xl sm:text-4xl font-black font-heading text-[var(--primary-blue)] mb-1 sm:mb-2">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm font-bold text-[var(--deep-navy)] font-heading mb-0.5 sm:mb-1">
                  {stat.label}
                </div>
                <div className="text-[11px] sm:text-xs text-slate-500 font-normal line-clamp-2">
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

          <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
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
      </main>

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

