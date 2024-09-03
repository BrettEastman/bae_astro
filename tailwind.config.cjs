/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary10: "#0d0e0b",
        primary20: "#2b2b2b",
        primary30: "#696969",
        primary40: "#848484",
        primary50: "#a0a0a0",
        primary60: "#b7b8b6",
        primary70: "#c9cac8",
        primary80: "#eeeeee",
        primary90: "#fcfcfc",
        primary100: "#ffffff",
        accentDark: "#c48e22",
      },
    },
  },
  plugins: [],
};
