import React from 'react';
import { X, ShieldCheck, FileText, Lock, CheckCircle2 } from 'lucide-react';

export default function LegalModal({ isOpen, onClose, activeTab = 'privacy' }) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-black/75 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="legal-modal-title"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-[var(--deep-navy)] px-6 sm:px-8 py-5 text-white flex items-center justify-between border-b border-[var(--cyan-accent)]/20">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-[var(--brand-orange)] border border-white/15">
              {activeTab === 'privacy' ? <Lock className="w-5 h-5" /> : <FileText className="w-5 h-5" />}
            </div>
            <div>
              <span className="text-[10px] font-heading font-bold uppercase tracking-widest text-[var(--brand-orange)]">
                Click On Media Legal &amp; Governance
              </span>
              <h3 id="legal-modal-title" className="text-xl font-heading font-extrabold text-white">
                {activeTab === 'privacy' ? 'Privacy Policy & NDA Standards' : 'Terms of Service & Client Rights'}
              </h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white flex items-center justify-center transition-all cursor-pointer"
            aria-label="Close legal modal"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 max-h-[70vh] overflow-y-auto space-y-6 text-sm text-slate-700 leading-relaxed font-sans">
          {activeTab === 'privacy' ? (
            <>
              <div>
                <h4 className="font-heading font-bold text-[#0A1F6B] text-base mb-2 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  1. Zero Data Sharing &amp; Strict Confidentiality
                </h4>
                <p className="text-slate-600 text-xs sm:text-sm">
                  Click On Media adheres to strict non-disclosure principles. We do not sell, rent, or trade client commercial data, customer records, database credentials, or marketing assets under any circumstances. All communication and project assets are covered by mutual non-disclosure standard protocols.
                </p>
              </div>

              <div>
                <h4 className="font-heading font-bold text-[#0A1F6B] text-base mb-2 flex items-center gap-2">
                  <Lock className="w-4 h-4 text-[var(--primary-blue)]" />
                  2. Information We Collect &amp; Usage
                </h4>
                <p className="text-slate-600 text-xs sm:text-sm">
                  When you request a quote or book a strategy consultation, we collect your name, business email, contact number, and project goals solely to formulate accurate milestone roadmaps and quotes. We comply with the Digital Personal Data Protection (DPDP) Act of India and international best practices.
                </p>
              </div>

              <div>
                <h4 className="font-heading font-bold text-[#0A1F6B] text-base mb-2 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[var(--brand-orange)]" />
                  3. Direct Client Asset Ownership
                </h4>
                <p className="text-slate-600 text-xs sm:text-sm">
                  Unlike conventional agencies that lock credentials into proprietary accounts, Click On Media creates all Google Ads, Meta Business Manager accounts, GitHub code repositories, and Cloud Storage under the client's direct legal ownership. You hold administrator authority over your assets at all times.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs space-y-1 text-slate-600">
                <span className="font-bold text-[#0A1F6B] block">Grievance &amp; Privacy Officer Contact:</span>
                <p>Click On Media • Mohaddipur, Gorakhpur, Uttar Pradesh 273008, India</p>
                <p>Email: <a href="mailto:info@clickonmedia.in" className="text-[var(--primary-blue)] font-semibold">info@clickonmedia.in</a> • Phone: +91 83035 34063</p>
              </div>
            </>
          ) : (
            <>
              <div>
                <h4 className="font-heading font-bold text-[#0A1F6B] text-base mb-2 flex items-center gap-2">
                  <FileText className="w-4 h-4 text-emerald-600" />
                  1. Scope of Services &amp; Transparent Milestones
                </h4>
                <p className="text-slate-600 text-xs sm:text-sm">
                  All website development, software engineering, and digital marketing services are executed according to pre-approved milestone deliverables. Scope changes are documented transparently with zero hidden surprise charges or retrospective billing.
                </p>
              </div>

              <div>
                <h4 className="font-heading font-bold text-[#0A1F6B] text-base mb-2 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[var(--primary-blue)]" />
                  2. 100% Intellectual Property (IP) Ownership
                </h4>
                <p className="text-slate-600 text-xs sm:text-sm">
                  Upon completion of project milestones and payment settlement, the complete custom codebase, design files, trademarks, domain rights, and media deliverables are transferred 100% to the client with full commercial ownership rights.
                </p>
              </div>

              <div>
                <h4 className="font-heading font-bold text-[#0A1F6B] text-base mb-2 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[var(--brand-orange)]" />
                  3. Service Level Agreements &amp; Post-Launch Hypercare
                </h4>
                <p className="text-slate-600 text-xs sm:text-sm">
                  Every custom software and web build includes a standard 30-day post-launch hypercare guarantee covering bug fixes, speed calibration, and search engine indexing assurance without additional retainer requirements.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs space-y-1 text-slate-600">
                <span className="font-bold text-[#0A1F6B] block">Jurisdiction &amp; Commercial Office:</span>
                <p>Governed in accordance with the laws of India. Legal jurisdiction: Gorakhpur, Uttar Pradesh.</p>
                <p>Email: <a href="mailto:info@clickonmedia.in" className="text-[var(--primary-blue)] font-semibold">info@clickonmedia.in</a> • Phone: +91 83035 34063</p>
              </div>
            </>
          )}
        </div>

        {/* Footer */}
        <div className="bg-slate-50 px-6 py-4 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
          <span>Last Updated: November 2026</span>
          <button
            onClick={onClose}
            className="btn-primary !py-2 !px-6 text-xs text-white rounded-full font-heading font-bold shadow-sm"
          >
            I Understand
          </button>
        </div>
      </div>
    </div>
  );
}
