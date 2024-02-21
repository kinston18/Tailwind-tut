/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')

module.exports = {
  content: ["./dist/*.html"],
  theme: {
    extend: {
      colors: {
        // you can either spread `colors` to apply all the colors
        ...colors,
        // or add them one by one and name whatever you want
        sky: colors.lightBlue, // Replace lightBlue with sky
        stone: colors.warmGray, // Replace warmGray with stone
        neutral: colors.trueGray, // Replace trueGray with neutral
        gray: colors.coolGray, // Replace coolGray with gray
        slate: colors.blueGray, // Replace blueGray with slate
    },
  },
  plugins: [],
}
}
