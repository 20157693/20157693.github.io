/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  // styles.css is the base, so don't let Tailwind reset the browser styles
  corePlugins: {
    preflight: false,
  },
  theme: {
    extend: {
      // The site's own colours (see Project-ReadMe.md)
      colors: {
        fuchsia: "#E14775",
        green: "#269D69",
        blue: "#1C8CA8",
      },
    },
  },
  plugins: [],
}
