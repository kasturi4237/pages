/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        matchYellow: "#FABD00",
        matchPink: "#AA1299",
        matchGray: "#78767D",
        alertPink: "#FFD8E7",
        'primary-pink': '#993D6F',
        'accent-pink': '#B75589',
        'light-pink': '#FFD8E7',
        'light-gray': '#C8C5CD',
        'dark-gray': '#47464C',
        'text-gray': '#A3A3A3',
        'black-rock': '#1B1C1C',
        'success-green': '#77DA9F',
        'off-white': '#F7F2FA',
        'border-gray': '#D9D9D9',
        'text-dark-pink': '#7C2457'
      },
      fontFamily: {
      'Manrope': ['Manrope', 'sans-serif'],
      'DM_Sans': ['DM Sans', 'sans-serif'],
    },
      boxShadow: {
        'light-5': '0px 8px 12px 6px rgba(0, 0, 0, 0.15), 0px 4px 4px rgba(0, 0, 0, 0.3)',
      }

    },
  },
  plugins: [],
}

