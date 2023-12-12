/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1C6E8C",
        secondary: "#",
        accent: "#C41E3A",
        light: "#FBFCFF",
        dark: "#274156",
      },
    },
  },
  daisyui: {
    themes: ["dark", "light", "emerald", "pastel", "fantasy", "luxury", "acid"],
  },
  plugins: [require("daisyui")],
};
