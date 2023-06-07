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
        titleFont: ['Oswald', 'sans-serif'],
        bodyFont: ['Poppins', 'sans-serif'],
      },
      colors: {
        primary: "#7E22CE",
        secondary: "#16C79A",
        tertiary: "#ffa500",
        quartiary: "#e6e6ff",
        quinary: "#007aff",
        gray: "#8c8b8b",
        navTextColor: '#f1f1f1',
        darkPrimary: "#31005B",
      },
    },
  },
  plugins: [],
}
