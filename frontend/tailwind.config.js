import { colors } from './src/styles/colors';

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors,
      fontFamily: {
        sans: ['Poppins', 'ui-sans-serif', 'system-ui'],
      },
      backgroundImage: {
        background: "url('/public/background.jpg')",
      },
    },
  },
  plugins: [],
};
