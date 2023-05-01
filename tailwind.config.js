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
      darkGrey:'#222222',
      lightGrey:'#BABABA',
      mediumOrange:"#F28903",
      hotOrange:"#FF7324"
    }
  },
  plugins: [],
}
