/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,jsx}",
    "./src/components/**/*.{js,jsx}",
    "./src/data/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#123B65",
          dark: "#0C2A49",
          light: "#1D5189",
        },
        gold: {
          DEFAULT: "#F2B544",
          dark: "#D99A24",
          light: "#F7CC7A",
        },
        soft: "#F5F7FA",
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
