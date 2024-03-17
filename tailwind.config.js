/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#fffaeb",
          100: "#fff1c6",
          200: "#ffe088",
          300: "#ffca4a",
          400: "#ffb524",
          500: "#f99107",
          600: "#dd6a02",
          700: "#b74906",
          800: "#94370c",
          900: "#7a2e0d",
          950: "#461602",
        },
        secondary: {
          50: "#edefff",
          100: "#dee3ff",
          200: "#c4cbff",
          300: "#a0a8ff",
          400: "#8080ff",
          500: "#675bf9",
          600: "#573dee",
          700: "#4b2fd3",
          800: "#3d29aa",
          900: "#352986",
          950: "#21184e",
        },
      },
    },
  },
  plugins: [],
};
