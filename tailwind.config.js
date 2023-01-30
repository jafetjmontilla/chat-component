module.exports = {
  content: ['./lib/**/*.{js,ts,jsx,tsx}'],
  corePlugins: {
    preflight: false,
  },
  prefix: 'asd-',
  darkMode: false, // or 'media' or 'class'
  theme: {

  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/container-queries'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/forms'),
  ]
};

