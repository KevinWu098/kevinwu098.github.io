/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        text: "#000000",
        background: "#F5F5F5",
        primary: "#1D6432",
        secondary: "#dddfdf",
        accent: "#78757a",
      },
    },
  },
  plugins: [],
};
