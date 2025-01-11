/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "not-found-bg": "url('./src/assets/not-found-bg.webp')",
      },
      colors: {
        "brand-secondary": "#FEB273",
        "paragraph-tertiary": "#AAB0B1",
        "paragraph-black": "#03141A",
      },
    },
  },
  plugins: [],
};
