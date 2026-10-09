export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        abyss: '#0B0B0B',
        ivory: '#F8F5F0',
        champagne: '#C8A96A',
        gold: '#D9BE7A',
        stone: '#E9E3D8',
        charcoal: '#1A1A1A',
      },
      boxShadow: {
        luxe: '0 20px 40px rgba(12, 12, 12, 0.15)',
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      animation: {
        float: 'float 7s ease-in-out infinite',
        fadeUp: 'fadeUp 0.7s ease-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        fadeUp: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
