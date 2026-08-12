/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#0056b3",
          dark: "#0A2647",
          light: "#205295",
        },
        accent: {
          DEFAULT: "#E5A93C", // Gold accent
          dark: "#C58924",
          light: "#F7D070",
        },
        background: "#FFFFFF",
        foreground: "#1E293B",
        border: "#E2E8F0",
      },
      fontFamily: {
        sans: ["Poppins", "Inter", "sans-serif"],
        serif: ["Playfair Display", "Merriweather", "serif"],
      },
    },
  },
  plugins: [],
}
