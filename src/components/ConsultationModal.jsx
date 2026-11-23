import React, { useState, useEffect } from 'react';
import { X, CheckCircle, ArrowRight, Loader2, AlertCircle, MessageCircle } from 'lucide-react';
import { submitConsultation } from '../services/apiService';

export default function ConsultationModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: new Date().toISOString().split('T')[0],
    time: '11:00 AM',
    topic: 'Growth Strategy & Web Overhaul'
  });

  const [confirmed, setConfirmed] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(null);

  // Close on Escape key
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const topics = [
    'Growth Strategy & Web Overhaul',
    'Paid Ad Campaigns & ROI',
    'Custom Software & Mobile App',
    'SEO Audit & Ranking Boost',
    'Brand Identity & Positioning'
  ];

  const times = ['10:00 AM', '11:30 AM', '02:00 PM', '04:00 PM', '06:00 PM'];

  const sanitizeInput = (val) => (typeof val === 'string' ? val.replace(/[<>]/g, '').trim() : val);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);

    const result = await submitConsultation({
      ...formData,
      name: sanitizeInput(formData.name),
      email: sanitizeInput(formData.email),
      phone: sanitizeInput(formData.phone)
    });

    setIsSubmitting(false);

    if (result.success) {
      setConfirmed(true);
    } else {
      setSubmitError(result.error || 'Direct booking transmission failed. Please request your slot directly via WhatsApp.');
    }
  };

  const whatsappFallbackUrl = `https://wa.me/918303534063?text=Hi%20Click%20On%20Media,%20I%20would%20like%20to%20request%20a%20Strategy%20Consultation.%20Name:%20${encodeURIComponent(formData.name || 'Client')}.%20Preferred%20Slot:%20${encodeURIComponent(formData.date)}%20at%20${encodeURIComponent(formData.time)}.%20Topic:%20${encodeURIComponent(formData.topic)}.%20Phone:%20${encodeURIComponent(formData.phone)}.%20Email:%20${encodeURIComponent(formData.email)}`;

  return (
    <div 
      className="fixed inset-0 z-50 overflow-y-auto bg-black/75 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="consultation-modal-title"
    >
      <div 
        className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header with Exact Brand Palette */}
        <div className="bg-[var(--deep-navy)] px-6 py-6 text-white flex items-center justify-between border-b border-[var(--cyan-accent)]/20">
          <div>
            <span className="text-[10px] font-heading font-bold uppercase tracking-widest text-[var(--brand-orange)]">
              30-Min Strategy Call Request
            </span>
            <h3 id="consultation-modal-title" className="text-xl font-heading font-extrabold text-white mt-0.5">
              Request Your Growth Consultation
            </h3>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white flex items-center justify-center transition-all cursor-pointer"
            aria-label="Close consultation modal"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {confirmed ? (
          <div className="p-8 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto shadow-inner border border-emerald-500/20">
              <CheckCircle className="w-10 h-10" />
            </div>
            <h4 className="text-2xl font-heading font-black text-[var(--deep-navy)]">
              Consultation Request Received!
            </h4>
            <p className="text-[var(--text-muted)] text-sm leading-relaxed max-w-sm mx-auto">
              Thank you, <span className="font-semibold text-[var(--deep-navy)]">{formData.name}</span>. Your requested slot for <span className="font-bold text-[var(--deep-navy)]">{formData.date}</span> at <span className="font-bold text-[var(--deep-navy)]">{formData.time}</span> has been logged. Our strategy director will review the schedule and reach out to confirm your appointment and provide the meeting link.
            </p>
            <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-2.5">
              <a
                href={whatsappFallbackUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-heading font-bold text-xs shadow-md transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Confirm Slot on WhatsApp</span>
              </a>
              <button
                onClick={() => {
                  setConfirmed(false);
                  onClose();
                }}
                className="btn-primary px-7 py-2.5 min-h-[40px] rounded-full text-white font-heading font-bold text-xs shadow-md transition-all cursor-pointer"
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-4">
            {submitError && (
              <div className="p-3.5 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 text-xs space-y-1.5">
                <div className="flex items-center gap-1.5 font-bold">
                  <AlertCircle className="w-4 h-4 text-rose-600 shrink-0" />
                  <span>Request Notice</span>
                </div>
                <p>{submitError}</p>
                <a
                  href={whatsappFallbackUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 font-bold text-emerald-700 hover:text-emerald-800 underline mt-0.5"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Request your consultation directly via WhatsApp &rarr;</span>
                </a>
              </div>
            )}
            <div>
              <label className="block text-xs font-heading font-bold text-[var(--deep-navy)] mb-1">Primary Discussion Focus</label>
              <select
                value={formData.topic}
                onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm bg-slate-50 focus:outline-none focus:border-[var(--primary-blue)] font-medium"
              >
                {topics.map((t, idx) => (
                  <option key={idx} value={t}>{t}</option>
                ))}
              </select>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-heading font-bold text-[var(--deep-navy)] mb-1">Preferred Date</label>
                <div className="relative">
                  <input
                    type="date"
                    required
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs focus:outline-none focus:border-[var(--primary-blue)]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-heading font-bold text-[var(--deep-navy)] mb-1">Preferred Time Slot</label>
                <select
                  value={formData.time}
                  onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs bg-slate-50 focus:outline-none focus:border-[var(--primary-blue)]"
                >
                  {times.map((t, i) => (
                    <option key={i} value={t}>{t}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="space-y-3 pt-1">
              <div>
                <label className="block text-xs font-heading font-bold text-[var(--deep-navy)] mb-1">Full Name *</label>
                <input
                  type="text"
                  required
                  maxLength={80}
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[var(--primary-blue)]"
                />
              </div>

              <div>
                <label className="block text-xs font-heading font-bold text-[var(--deep-navy)] mb-1">Work Email *</label>
                <input
                  type="email"
                  required
                  maxLength={100}
                  placeholder="you@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[var(--primary-blue)]"
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
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[var(--primary-blue)]"
                />
              </div>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`btn-primary w-full py-3.5 min-h-[46px] rounded-full text-white font-heading font-bold text-sm shadow-md shadow-[var(--brand-orange)]/30 transition-all flex items-center justify-center gap-2 ${
                  isSubmitting ? 'opacity-80 cursor-wait' : 'cursor-pointer hover:scale-[1.01]'
                }`}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Sending Request...</span>
                  </>
                ) : (
                  <>
                    <span>Submit Consultation Request</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
