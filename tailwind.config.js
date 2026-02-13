/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0f172a', // Slate 900
          light: '#334155',   // Slate 700
        },
        accent: {
          DEFAULT: '#ca8a04', // Gold-ish
          hover: '#a16207',
        },
        corporate: {
          blue: '#1e3a8a',    // Deep Blue
          gray: '#f8fafc',    // Very light gray for backgrounds
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Ensure you have Inter or a nice sans font imported in index.css
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.8s ease-out',
        'slow-pan': 'panImage 30s linear infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        panImage: {
          '0%': { objectPosition: 'center' },
          '50%': { objectPosition: 'center 60%' },
          '100%': { objectPosition: 'center' },
        }
      }
    },
  },
  plugins: [],
}