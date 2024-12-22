/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#3ec970',
          DEFAULT: '#2E9452',
          dark: '#2E9452',
        },
        background: {
          light: '#F7F9FC',
          card: '#ffffff',
          accent: '#E3F5E9',
          dark: '#054F31',
        },
        text: {
          primary: '#2D4B4D',
          secondary: '#5D7079',
          accent: '#37B063',
        },
        border: '#E6E8EB',
      },
      boxShadow: {
        'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.07)',
        'hover': '0 8px 30px rgba(0, 0, 0, 0.12)',
      },
      animation: {
        'slow-spin': 'spin 20s linear infinite',
      },
    },
  },
  plugins: [],
};