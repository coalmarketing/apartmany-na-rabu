/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      keyframes: {
        'slide-left': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' }
        },
        'slide-center': {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' }
        },
        'slide-right': {
          '0%': { transform: 'translateX(200%)' },
          '100%': { transform: 'translateX(100%)' }
        }
      },
      animation: {
        'slide-left': 'slide-left 0.5s ease-in-out',
        'slide-center': 'slide-center 0.5s ease-in-out',
        'slide-right': 'slide-right 0.5s ease-in-out'
      }
    },
  },
  plugins: [],
} 