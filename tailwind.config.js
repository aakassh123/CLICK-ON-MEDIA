/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '420px',
      },
      colors: {
        'primary-blue': 'var(--primary-blue)',
        'deep-navy': 'var(--deep-navy)',
        'cyan-accent': 'var(--cyan-accent)',
        'brand-orange': 'var(--brand-orange)',
        'amber': 'var(--amber)',
        'bg-light': 'var(--bg-light)',
        'bg-soft': 'var(--bg-soft)',
        'text-dark': 'var(--text-dark)',
        'text-muted': 'var(--text-muted)',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        heading: ['Poppins', 'system-ui', '-apple-system', 'sans-serif'],
      },
      borderRadius: {
        'brand': '16px',
        'card': '14px',
      },
      boxShadow: {
        'soft-blue': '0 10px 30px -10px rgba(11, 92, 255, 0.12)',
        'hover-blue': '0 20px 40px -15px rgba(11, 92, 255, 0.22)',
        'glow-orange': '0 0 30px rgba(255, 122, 0, 0.35)',
        'glow-blue': '0 0 30px rgba(11, 92, 255, 0.35)',
      },
      backgroundImage: {
        'grad-blue': 'var(--grad-blue)',
        'grad-orange': 'var(--grad-orange)',
        'grad-brand': 'var(--grad-brand)',
      }
    },
  },
  plugins: [],
}
