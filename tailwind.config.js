/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      jade: {
        50: "#ebfef6",
        100: "#d0fbe6",
        200: "#a4f6d2",
        300: "#6aebbc",
        400: "#2fd89f",
        500: "#0abf88",
        600: "#00aa7a",
        700: "#007c5c",
        800: "#03624a",
        900: "#04503e",
        950: "#012d24",
      },
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
