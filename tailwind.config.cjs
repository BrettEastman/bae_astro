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
        accentLight: "#e8bf4a",
        accentDark: "#c48e22",
        sun: "#fdd016",
        logoAccent: "#a9dbc9",
        logoAccentDark: "#0d1210",
        navText: "#a5a5a5",
        subtitleText: "#333333",
        icon: "#b9b9b9",
        titleBrown: "#6c411e",
        footerBackground: "#f9f9f9",
        heroBackground: "#ced0d7",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--titleBrown))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--titleBrown))",
      },
    },
  },
  plugins: [],
};
