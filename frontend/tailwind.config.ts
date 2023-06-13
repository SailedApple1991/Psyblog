import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        main: {
          light: "#EDE7E0",
          DEFAULT: "#A18771",
          inactive: "#B5B1AC",
        },
      },
      height: {
        "128": "32rem",
      },
      spacing: {
        "1/12": "8.333333%",
      },
    },
  },
  plugins: [require('flowbite/plugin')],
} satisfies Config

