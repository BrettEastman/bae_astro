/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        // Legacy scale, remapped to the new monochrome neutrals
        primary10: "#111111",
        primary20: "#1a1a19",
        primary30: "#4a4a48",
        primary40: "#6f6f6c",
        primary50: "#8a8a86",
        primary60: "#c7c5c0",
        primary70: "#dedcd7",
        primary80: "#f0eeea",
        primary90: "#faf9f7",
        primary100: "#faf9f7",
        accentDark: "#e34a27",
        // Semantic tokens
        ink: "#111111",
        paper: "#faf9f7",
        surface: "#f0eeea",
        surfaceDark: "#1a1a19",
        muted: "#8a8a86",
        line: "#dedcd7",
        lineDark: "#3a3a38",
        accent: "#e34a27",
      },
      fontFamily: {
        sans: [
          "Space Grotesk",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "sans-serif",
        ],
        display: [
          "Space Grotesk",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "sans-serif",
        ],
      },
    },
  },
  plugins: [],
};
