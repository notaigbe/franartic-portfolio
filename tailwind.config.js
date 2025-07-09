/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backdropBlur: {
        xs: '2px',
      },
      fontFamily: {
        'serif': ['Playfair Display', 'Georgia', 'serif'],
      },
      colors: {
        blush: "#EECFC4",
        sandstone: "#D3B6A1",
        beige: "#F6F1EA",
        olive: "#C1BA9A",
        gold: "#D9B270",
        charcoal: "#4B4B4B",
        stone: "#8F8A80",
    },
    },
  },
  plugins: [],
}

