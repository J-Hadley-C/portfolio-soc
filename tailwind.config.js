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
          DEFAULT: '#00ff41',
          dim: '#0d3a1a',
          muted: '#1a7f37',
        },
        critical: '#f85149',
        high: '#e3b341',
        medium: '#3fb950',
        info: '#58a6ff',
      },
      fontFamily: {
        display: ['Barlow Condensed', 'Impact', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
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
