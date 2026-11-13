import React from 'react';
import { X, TrendingUp, CheckCircle, ArrowRight } from 'lucide-react';

export default function ProjectDetailModal({ project, onClose, onOpenQuote }) {
  if (!project) return null;

  return (
    <div 
      className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
    >
      <div 
        className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Project Header Image */}
        <div className="relative aspect-video w-full bg-slate-900 overflow-hidden">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--deep-navy)] via-[var(--deep-navy)]/40 to-transparent" />
          
          <button
            onClick={onClose}
            aria-label="Close project modal"
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/60 hover:bg-[var(--brand-orange)] text-white flex items-center justify-center backdrop-blur-md transition-all z-10 cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="absolute bottom-4 left-6 right-6">
            <span className="text-[11px] font-heading font-black uppercase tracking-wider px-3 py-1 rounded-full bg-[var(--grad-orange)] text-white inline-block mb-2 shadow-md">
              Case Study • {project.category}
            </span>
            <h3 id="project-modal-title" className="text-2xl sm:text-3xl font-heading font-extrabold text-white">
              {project.title}
            </h3>
            <p className="text-xs sm:text-sm text-slate-300">
              Client: {project.client}
            </p>
          </div>
        </div>

        {/* Content Details */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[60vh] overflow-y-auto">
          
          {/* Key Metric Highlight Box */}
          <div className="p-4 rounded-2xl bg-[var(--bg-soft)] border border-[var(--cyan-accent)]/30 flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl btn-primary text-white flex items-center justify-center flex-shrink-0 shadow-sm">
              <TrendingUp className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[11px] font-heading font-bold uppercase tracking-wider text-[var(--text-muted)]">Measurable Impact</span>
              <div className="text-base sm:text-lg font-heading font-extrabold text-[var(--deep-navy)]">
                {project.results}
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-heading font-bold uppercase tracking-wider text-[var(--text-muted)] mb-2">The Solution & Strategy</h4>
            <p className="text-[var(--text-dark)] text-sm sm:text-base leading-relaxed">
              {project.description || project.summary}
            </p>
          </div>

          <div>
            <h4 className="text-xs font-heading font-bold uppercase tracking-wider text-[var(--text-muted)] mb-2">Key Highlights</h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-[var(--text-dark)]">
              {(project.highlights || []).map((hl, i) => (
                <li key={i} className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[var(--primary-blue)] flex-shrink-0" />
                  <span>{hl}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-heading font-bold uppercase tracking-wider text-[var(--text-muted)] mb-2">Technologies Deployed</h4>
            <div className="flex flex-wrap gap-2">
              {project.tags?.map((tag, i) => (
                <span key={i} className="px-3 py-1 rounded-lg bg-[var(--primary-blue)]/10 text-[var(--primary-blue)] border border-[var(--primary-blue)]/20 text-xs font-semibold">
                  {tag}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Footer CTA */}
        <div className="bg-[var(--bg-soft)] px-6 sm:px-8 py-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="text-xs text-[var(--text-muted)] font-medium">
            Ready for similar measurable growth in your business?
          </span>
          <button
            onClick={() => {
              onClose();
              if (onOpenQuote) onOpenQuote();
            }}
            className="btn-primary w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 min-h-[44px] rounded-full text-white font-heading font-bold text-xs shadow-md transition-all cursor-pointer"
          >
            <span>Start Similar Project</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </div>
  );
}
