/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['DM Sans', 'sans-serif'],
        display: ['Space Grotesk', 'sans-serif'],
      },
      colors: {
        ink: '#18251f',
        mint: '#a9f0c7',
        coral: '#ff8a6b',
        cream: '#f7f8f3',
      },
      boxShadow: {
        soft: '0 16px 50px rgba(24, 37, 31, 0.08)',
      },
    },
  },
  plugins: [],
}
