/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
       fontFamily: {
        courierPrime: ['"Courier Prime"', "monospace"],
        // Add more custom font families as needed
      },
    },
  },
  plugins: [],
}
