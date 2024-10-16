/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      width: {
        100: "25rem",
        104: "26rem",
        108: "27rem",
        112: "28rem",
        116: "29rem",
        120: "30rem",
        124: "31rem",
        128: "32rem",
        132: "33rem",
        136: "34rem",
        140: "35rem"
      },
      height: {
        100: "25rem",
        104: "26rem",
        108: "27rem",
        112: "28rem",
        116: "29rem",
        120: "30rem",
        124: "31rem",
        128: "32rem",
        132: "33rem",
        136: "34rem",
        140: "35rem"
      },
      screens: {
        'max-mobileS': {max: '320px'},
        'max-mobileM': {max: '375px'},
        'max-mobileL': {max: '425px'},
        'max-tablet': {max: '768px'},
        'max-laptop': {max: '1024px'},
        'max-laptopL': {max: '1560px'}
      },
    },
  },
  plugins: [],
};
