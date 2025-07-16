/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
      'Manrope': ['Manrope', 'sans-serif'],
      'DM_Sans': ['DM Sans', 'sans-serif'],
    },


    },
  },
  plugins: [],
}

