module.exports = {
  content: ['./lib/**/*.{js,ts,jsx,tsx}'],
  corePlugins: {
    preflight: false,
  },
  prefix: 'asd-',
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: `var(--color-primary)`,
        secondary: `var(--color-secondary)`,
        tertiary: `var(--color-tertiary)`,
        "color-base": `var(--color-base)`,
      },
    },
  },
  plugins: [
    require('@tailwindcss/container-queries'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/forms'),
  ]
};

