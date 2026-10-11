const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./pages/**/*.{js, jsx}", "./components/**/*.{js, jsx}"],
  theme: {
    screens: {
      xs: "475px",
      ...defaultTheme.screens,
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      black: "#000000",
      /* ——— The Art of the Build · editorial palette ——— */
      paper: {
        DEFAULT: "#F4F0E8",
        2: "#E7E0D5",
      },
      ink: "#171717",
      coal: "#111111",
      vermilion: {
        DEFAULT: "#F04428",
        dark: "#C9331A",
      },
      cobalt: "#3157D5",
      muted: "#77736D",
      line: "#D3CCC1",
      /* legacy keys retained for untouched modules */
      purple: "#0ea5e9",
      red: "#06b6d4",
      green: "#00d9ff",
      indigo: {
        light: "#38bdf8",
        dark: "#0284c7",
      },
      gray: {
        light: {
          1: "#f0f0f0",
          2: "#dbdbdb",
          3: "#aaaaaa",
          4: "#8a8a8a",
        },
        dark: {
          1: "#323133",
          2: "#242225",
          3: "#1e1b20",
          4: "#1a171e",
          5: "#120e16",
        },
      },
    },
    fontFamily: {
      sans: ["var(--font-calibre)"],
      mono: ["var(--font-jetbrains-mono)"],
      serif: ["Georgia", "Times New Roman", "serif"],
    },
    extend: {
      animation: {
        meteor: "meteor 5s linear infinite",
      },
      keyframes: {
        meteor: {
          "0%": {
            transform: "rotate(215deg) translateX(0)",
            opacity: 1,
          },
          "70%": {
            opacity: 1,
          },
          "100%": {
            transform: "rotate(215deg) translateX(-500px)",
            opacity: 0,
          },
        },
      },
    },
  },
  plugins: [],
};
