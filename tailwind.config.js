/** @type {import('tailwindcss').Config} */

const { fontFamily } = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
       serif: ['var(--font-jura)', ...fontFamily.serif],
      },
    },
    colors:{
      darkGrey:'#807A79',
      lightGrey:'#BABABA',
      mediumOrange:"#F28903",
      hotOrange:"#F24804"
    }
  },
  plugins: [],
}
