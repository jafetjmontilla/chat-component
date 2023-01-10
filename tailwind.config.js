module.exports = {
  content: ['./lib/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    // fontFamily: {
    //   "body": ['Montserrat', ...defaultTheme.fontFamily.sans],
    //   "display": ['Poppins', ...defaultTheme.fontFamily.sans],
    //   "title": ['Italiana', ...defaultTheme.fontFamily.sans],
    // },
    extend: {
      colors: {
        primary: "#F7628C",
        secondary: "#87F3B5",
        tertiary: "#49516F",
        "color-base": "#F2F2F2",
      },
      transitionProperty: {
        'height': 'height'
      },
      spacing: {
        '182px': '177.5px',
        '20px': '23px',
        '267px': '136px',
        '17px': '17px'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/container-queries'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/forms'),
  ],

};

