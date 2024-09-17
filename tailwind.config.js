module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brown: {
          800: '#5D4037',
          900: '#3E2723',
        },
        amber: {
          50: '#FFF8E1',
          100: '#FFECB3',
          600: '#FFB300',
          700: '#FFA000',
        },
      },
      fontFamily: {
        serif: ['Georgia', 'serif'],
      },
    },
  },
  plugins: [],
}