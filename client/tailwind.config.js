/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Fraunces Variable", "Georgia", "serif"],
      },
      colors: {
        onyx: "#222526",
        graphite: "#353A3E",
        platinum: "#E0E0E0",
        jet: "#1A1A1A",
        ash: "#BFBFBF",
      },
    },
  },
  plugins: [],
}