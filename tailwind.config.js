/** @type {import('tailwindcss').Config} */

const { join } = require('path');

module.exports = {
  content: [
    join(__dirname, './pages/**/*.{js,ts,jsx,tsx}'),
    join(__dirname, './components/**/*.{js,ts,jsx,tsx}'),
    join(__dirname, './layout/**/*.{js,ts,jsx,tsx}'),
    join(__dirname, './features/**/*.{js,ts,jsx,tsx}'),
  ],
  theme: {
    extend: {
      keyframes: {
        "slide-down": {
          "0%": {
            transform: "translateY(-100%)",
          },
          "100%": {
            transform: "translateY(0%)",
          },
        },
        "fade-in": {
          "0%": {
            opacity: 0,
          },
          "100%": {
            opacity: 1,
          },
        },
      },
      animation: {
        "slide-down": "slide-down 0.5s ease-out",
        "fade-in": "fade-in 0.5s ease-out",
      },
    },
  },
  plugins: [
    'tailwindcss',
    'postcss-preset-env',
  ],
}
