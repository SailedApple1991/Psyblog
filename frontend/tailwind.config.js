/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{html,js,tsx,ts,jsx}",
            "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {},
  },
  plugins: [require('flowbite/plugin')],
}

