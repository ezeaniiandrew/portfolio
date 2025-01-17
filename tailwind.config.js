/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "not-found-bg": "url('./src/assets/not-found-bg.webp')",
        "noise-bg": "url('./src/assets/noise.webp')",
      },
      colors: {
        "brand-secondary": "#FEB273",
        "brand-tertiary-light": "#BDD9D8",
        "paragraph-tertiary": "#AAB0B1",
        "paragraph-black": "#03141A",
        "nav-bg-black": "#0C0E0E",
      },
    },
  },
  plugins: [],
};
