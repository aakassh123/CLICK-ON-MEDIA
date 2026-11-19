import React, { useState } from 'react';
import { X, CheckCircle, ArrowRight, ShieldCheck } from 'lucide-react';

export default function QuoteModal({ isOpen, onClose, preselectedService }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    services: preselectedService ? [preselectedService] : ['Website Development'],
    budget: '$5,000 - $15,000',
    timeline: '1-2 Months',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const serviceOptions = [
    'Social Media Marketing',
    'Website Development',
    'WhatsApp Bulk Messaging',
    'Graphics Designing',
    'Video Editing',
    'SEO - Website + Google My Business',
    'Ads - Website + Insta, FB, WhatsApp',
    'Software Development',
    'CRM',
    'Monetization'
  ];

  const budgetOptions = [
    '< $5,000',
    '$5,000 - $15,000',
    '$15,000 - $35,000',
    '$35,000+'
  ];

  const sanitizeInput = (val) => (typeof val === 'string' ? val.replace(/[<>]/g, '').trim() : val);

  const toggleService = (srv) => {
    if (formData.services.includes(srv)) {
      if (formData.services.length > 1) {
        setFormData({ ...formData, services: formData.services.filter(s => s !== srv) });
      }
    } else {
      setFormData({ ...formData, services: [...formData.services, srv] });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData({
      ...formData,
      name: sanitizeInput(formData.name),
      email: sanitizeInput(formData.email),
      phone: sanitizeInput(formData.phone),
      company: sanitizeInput(formData.company),
      message: sanitizeInput(formData.message)
    });
    setSubmitted(true);
  };

  return (
    <div 
      className="fixed inset-0 z-50 overflow-y-auto bg-black/75 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="quote-modal-title"
    >
      <div 
        className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Ribbon */}
        <div className="bg-[var(--deep-navy)] px-6 sm:px-8 py-6 text-white flex items-center justify-between border-b border-[var(--cyan-accent)]/20">
          <div>
            <span className="text-[11px] font-heading font-bold uppercase tracking-widest text-[var(--brand-orange)]">
              Quick Turnaround • 24hr Response
            </span>
            <h3 id="quote-modal-title" className="text-xl sm:text-2xl font-heading font-extrabold text-white mt-1">
              Start Your Project with <span className="text-transparent bg-clip-text bg-[var(--grad-brand)]">Click On Media</span>
            </h3>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white flex items-center justify-center transition-all cursor-pointer"
            aria-label="Close quote modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {submitted ? (
          <div className="p-8 sm:p-12 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-[var(--bg-soft)] text-emerald-600 flex items-center justify-center mx-auto shadow-inner border border-emerald-500/30">
              <CheckCircle className="w-10 h-10" />
            </div>
            <h4 className="text-2xl font-heading font-black text-[var(--deep-navy)]">
              Proposal Request Received!
            </h4>
            <p className="text-[var(--text-muted)] max-w-md mx-auto text-sm leading-relaxed">
              Thank you, <span className="font-semibold text-[var(--deep-navy)]">{formData.name || 'Friend'}</span>. One of our Senior Growth Strategists will review your specifications and email you a customized proposal within 24 hours.
            </p>
            <div className="pt-4">
              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="btn-primary px-8 py-3 min-h-[44px] rounded-full text-white font-heading font-bold text-sm shadow-md transition-all cursor-pointer"
              >
                Back to Site
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-5 max-h-[80vh] overflow-y-auto">
            {/* Services Multi-selector */}
            <div>
              <label className="block text-xs font-heading font-bold uppercase tracking-wider text-[var(--deep-navy)] mb-2">
                Select Required Services (1 or more)
              </label>
              <div className="flex flex-wrap gap-2">
                {serviceOptions.map((srv) => {
                  const isChecked = formData.services.includes(srv);
                  return (
                    <button
                      key={srv}
                      type="button"
                      onClick={() => toggleService(srv)}
                      className={`px-4 py-2 min-h-[38px] rounded-full text-xs font-heading font-bold transition-all cursor-pointer ${
                        isChecked
                          ? 'bg-[var(--deep-navy)] text-white shadow-sm border border-[var(--primary-blue)]'
                          : 'bg-[var(--bg-soft)] text-[var(--text-dark)] hover:bg-slate-200 border border-slate-200'
                      }`}
                    >
                      {isChecked ? '✓ ' : '+ '}{srv}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Estimated Budget */}
            <div>
              <label className="block text-xs font-heading font-bold uppercase tracking-wider text-[var(--deep-navy)] mb-2">
                Project Budget Range
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {budgetOptions.map((b) => (
                  <button
                    key={b}
                    type="button"
                    onClick={() => setFormData({ ...formData, budget: b })}
                    className={`py-2.5 px-3 min-h-[40px] rounded-xl text-xs font-heading font-semibold border transition-all text-center cursor-pointer ${
                      formData.budget === b
                        ? 'border-[var(--brand-orange)] bg-[var(--brand-orange)]/10 text-[var(--brand-orange)] font-bold'
                        : 'border-slate-200 bg-[var(--bg-soft)] text-[var(--text-muted)] hover:bg-slate-100'
                    }`}
                  >
                    {b}
                  </button>
                ))}
              </div>
            </div>

            {/* Input Details Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-heading font-bold text-[var(--deep-navy)] mb-1">Your Full Name *</label>
                <input
                  type="text"
                  required
                  maxLength={80}
                  placeholder="e.g. Rahul Sharma"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[var(--primary-blue)] focus:ring-1 focus:ring-[var(--primary-blue)]"
                />
              </div>

              <div>
                <label className="block text-xs font-heading font-bold text-[var(--deep-navy)] mb-1">Work Email Address *</label>
                <input
                  type="email"
                  required
                  maxLength={100}
                  placeholder="name@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[var(--primary-blue)] focus:ring-1 focus:ring-[var(--primary-blue)]"
                />
              </div>

              <div>
                <label className="block text-xs font-heading font-bold text-[var(--deep-navy)] mb-1">Phone / WhatsApp *</label>
                <input
                  type="tel"
                  required
                  maxLength={20}
                  placeholder="+91 83035 34063"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[var(--primary-blue)] focus:ring-1 focus:ring-[var(--primary-blue)]"
                />
              </div>

              <div>
                <label className="block text-xs font-heading font-bold text-[var(--deep-navy)] mb-1">Company / Brand Name</label>
                <input
                  type="text"
                  maxLength={100}
                  placeholder="Your Business"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[var(--primary-blue)] focus:ring-1 focus:ring-[var(--primary-blue)]"
                />
              </div>
            </div>

            {/* Message Area */}
            <div>
              <label className="block text-xs font-heading font-bold text-[var(--deep-navy)] mb-1">Tell Us About Your Project Goals</label>
              <textarea
                rows={3}
                maxLength={800}
                placeholder="Give us a brief overview of your business, objectives, timeline, or current bottlenecks..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[var(--primary-blue)] focus:ring-1 focus:ring-[var(--primary-blue)]"
              />
            </div>

            {/* Trust badge */}
            <div className="flex items-center gap-2 text-xs text-[var(--text-muted)] pt-1">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>100% Privacy. NDA protected. No spam ever.</span>
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                className="btn-primary w-full py-4 min-h-[48px] rounded-full text-white font-heading font-extrabold text-sm sm:text-base shadow-lg shadow-[var(--brand-orange)]/30 flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                <span>Request Custom Quote & Strategy</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
