/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-image": "url('/hero-bg.webp')",
        star: "url('./src/assets/star.svg')",
      },
      colors: {
        "brand-secondary": "#FEB273",
        "brand-tertiary-light": "#BDD9D8",
        "paragraph-tertiary": "#AAB0B1",
        "paragraph-black": "#03141A",
        "paragraph-tertiary-2": "#566265",
        "nav-bg-black": "#0C0E0E",
        "heading-1": "#EDFFDF",
        "contact-bg": "#191919",
      },
      fontSize: {
        3.5: "2rem",
      },
    },
  },
  plugins: [],
};
