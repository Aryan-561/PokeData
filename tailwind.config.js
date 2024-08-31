/** @type {import('tailwindcss').Config} */
export default {
  darkMode:'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      dropShadow:{
        light:'-3px 2px 0px #94a3b8',
        dark:'-3px 2px 0px #475569',
      }
    },
  },
  plugins: [],
}