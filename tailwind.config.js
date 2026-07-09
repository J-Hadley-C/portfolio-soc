/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: '#0a0a0f',
        surface: '#0d1117',
        elevated: '#161b22',
        divider: '#21262d',
        accent: {
          DEFAULT: '#00e5ff',
          dim: '#062a30',
          muted: '#0e7490',
        },
        'accent-violet': {
          DEFAULT: '#8b5cf6',
          dim: '#1e1b3a',
          muted: '#6d28d9',
        },
        critical: '#f85149',
        high: '#e3b341',
        medium: '#3fb950',
        info: '#58a6ff',
      },
      fontFamily: {
        display: ['Poppins', 'sans-serif'],
        sans: ['Poppins', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Consolas', 'monospace'],
      },
      fontSize: {
        'hero': ['clamp(3rem,8vw,6rem)', { lineHeight: '0.95', letterSpacing: '-0.01em' }],
        'hero-sub': ['clamp(1.5rem,3.5vw,2.5rem)', { lineHeight: '1.1' }],
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out both',
        'blink': 'blink 1s step-end infinite',
      },
      keyframes: {
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
      },
    },
  },
  plugins: [],
}
