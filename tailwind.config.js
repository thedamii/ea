/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          10: "#FFF8EC",
          20: "#FFDEA5",
          30: "#FFC56D",
          40: "#FFA032",
          50: "#FF830A",
          60: "#FF6A00",
          70: "#CC4C02",
          80: "#A13B0B",
          90: "#82330C",
          100: "#461704"
        },
        neutral: {
          10: "#F7F7F7",
          20: "#E3E3E3",
          30: "#CFCFCF",
          40: "#BABABA",
          50: "#A6A6A6",
          60: "#919191",
          70: "#7D7D7D",
          80: "#696969",
          90: "#545454",
          100: "#404040"
        }
      }
    }
  },
  plugins: []
};
