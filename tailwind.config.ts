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
        primary: '#00d4ff',
        'primary-dark': '#00a8cc',
        secondary: '#7c3aed',
        accent: '#f59e0b',
        'bg-dark': '#0a0e1a',
        'bg-card': '#111827',
        'bg-card-hover': '#1a2236',
        'text-primary': '#f1f5f9',
        'text-secondary': '#94a3b8',
        success: '#10b981',
        danger: '#ef4444',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 2s infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-20px) rotate(5deg)' },
        },
      },
    },
  },
  plugins: [],
}
export default config
