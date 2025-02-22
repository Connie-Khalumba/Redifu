module.exports = {
  content: [
    "./path/to/your/html/**/*.html", 
    "./path/to/your/js/**/*.js", 
    // add other paths where Tailwind should look for class names
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/line-clamp'),
  ],
}