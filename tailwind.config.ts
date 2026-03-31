import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'arise-black': '#000000',
        'arise-white': '#f5f5f7',
        'arise-gray': '#86868b',
        'arise-dark': '#1d1d1f',
        'whatsapp-green': '#25D366',
        'whatsapp-dark': '#1a1a1a',
      },
      fontFamily: {
        sans: ['var(--font-inter)', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
        hebrew: ['var(--font-noto-serif-hebrew)', 'serif'],
      },
      letterSpacing: {
        'editorial': '-0.04em',
        'ultra-tight': '-0.06em',
      },
      animation: {
        'grain': 'grain 0.5s steps(1) infinite',
        'pulse-gradient': 'pulse-gradient 3s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        grain: {
          '0%': { transform: 'translate(0, 0)' },
          '10%': { transform: 'translate(-2%, -2%)' },
          '20%': { transform: 'translate(2%, 2%)' },
          '30%': { transform: 'translate(-1%, 1%)' },
          '40%': { transform: 'translate(1%, -1%)' },
          '50%': { transform: 'translate(-2%, 2%)' },
          '60%': { transform: 'translate(2%, -2%)' },
          '70%': { transform: 'translate(-1%, -1%)' },
          '80%': { transform: 'translate(1%, 1%)' },
          '90%': { transform: 'translate(-2%, -1%)' },
          '100%': { transform: 'translate(0, 0)' },
        },
        'pulse-gradient': {
          '0%, 100%': { opacity: '0.6', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.05)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}

export default config
