import React, { useState } from 'react';
import { X, CheckCircle, ArrowRight } from 'lucide-react';

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

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData({
      ...formData,
      name: sanitizeInput(formData.name),
      email: sanitizeInput(formData.email),
      phone: sanitizeInput(formData.phone)
    });
    setConfirmed(true);
  };

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
              30-Min Strategy Call
            </span>
            <h3 id="consultation-modal-title" className="text-xl font-heading font-extrabold text-white mt-0.5">
              Book Your Free Growth Consultation
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
            <div className="w-16 h-16 rounded-full bg-[var(--bg-soft)] text-[var(--primary-blue)] flex items-center justify-center mx-auto shadow-inner border border-[var(--primary-blue)]/20">
              <CheckCircle className="w-10 h-10" />
            </div>
            <h4 className="text-2xl font-heading font-black text-[var(--deep-navy)]">
              Strategy Call Booked!
            </h4>
            <p className="text-[var(--text-muted)] text-sm leading-relaxed">
              We've reserved your slot for <span className="font-bold text-[var(--deep-navy)]">{formData.date}</span> at <span className="font-bold text-[var(--deep-navy)]">{formData.time}</span>. A Google Meet invite has been dispatched to <span className="font-semibold text-[var(--primary-blue)]">{formData.email}</span>.
            </p>
            <div className="pt-3">
              <button
                onClick={() => {
                  setConfirmed(false);
                  onClose();
                }}
                className="btn-primary px-8 py-3 min-h-[44px] rounded-full text-white font-heading font-bold text-sm shadow-md transition-all cursor-pointer"
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-4">
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
                className="btn-primary w-full py-3.5 min-h-[46px] rounded-full text-white font-heading font-bold text-sm shadow-md shadow-[var(--brand-orange)]/30 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Confirm Strategy Call</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
