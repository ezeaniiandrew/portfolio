/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "not-found-bg": "url('./src/assets/not-found-bg.webp')",
        "noise-bg": "url('./src/assets/noise.webp')",
        "about-me-img": "url('./src/assets/about-me-img.png')",
        "hero-bg-img": "url('./src/assets/hero-bg-image.png')",
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
