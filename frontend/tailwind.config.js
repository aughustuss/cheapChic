/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        oswald: ['Oswald', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        primary: "#19456B",
        secondary: "#16C79A",
        tertiary: "#ffa500",
        quartiary: "#e6e6ff",
        quinary: "#007aff",
        gray: "#8c8b8b",
      },
    },
  },
  plugins: [],
}
