/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "primary":"#042037",
        "secondary":"#123652",
        "third":"#718EA4",
        "fourth":"#4da0b4",
        "fifth":"#AA7939",
        "sixth":"#FFDBAA"

      }
    },
    screens: {
      'lg': {'max': '1023px'},

      'sm': {'max': '820px'},
    }
  },
  plugins: [],
}