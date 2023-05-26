/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{html,js,tsx}",
            "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {},
  },
  plugins: [require('flowbite/plugin')],
}

