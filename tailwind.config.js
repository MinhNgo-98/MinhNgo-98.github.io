module.exports = {
  purge: {
    content: [
      "./src/**/*.vue",
      "./src/**/*.js",
      "./src/**/*.jsx",
      "./src/**/*.html",
      "./src/**/*.pug",
      "./src/**/*.md",
      "./docs/**/*.md",
      "./blog/**/*.md",
    ],
    options: {
      whitelist: [
        "body",
        "html",
        "img",
        "a",
        "g-image",
        "g-image--lazy",
        "g-image--loaded",
        "active",
      ],
    },
  },
  theme: {
    extend: {
      spacing: {
        "80": "20rem",
        "108": "27rem",
      },
      borderWidth: {
        "14": "14px",
      },
    },
    container: {
      padding: "1rem",
    },
    colors: {
      background: {
        primary: "var(--bg-background-primary)",
        secondary: "var(--bg-background-secondary)",
        tertiary: "var(--bg-background-tertiary)",
        form: "var(--bg-background-form)",
      },

      copy: {
        primary: "var(--text-copy-primary)",
        secondary: "var(--text-copy-hover)",
      },

      "border-color": {
        primary: "var(--border-border-color-primary)",
      },

      transparent: "transparent",

      black: "#242423",
      white: "#fff",

      gray: {
        100: "#e9e9e9",
        200: "#d3d3d3",
        300: "#bdbdbd",
        400: "#a7a7a7",
        500: "#929291",
        600: "#7c7c7b",
        700: "#666665",
        800: "#50504f",
        900: "#3a3a39",
      },
      blue: {
        100: "#F1F6F8",
        200: "#DFE7F1",
        300: "#C8D1E9",
        400: "#A0AADC",
        500: "#7480CA",
        600: "#575988",
        700: "#404787",
        800: "#313762",
        900: "#272C4B",
      },
      pink: {
        100: "#FDEEF0",
        200: "#FBD2DF",
        300: "#FAACC2",
        400: "#FA7593",
        500: "#E14B5A",
        600: "#F52D46",
        700: "#DA223C",
        800: "#AF1C33",
        900: "#8C182A",
      },
      yellow: {
        100: "#F3F092",
        200: "#F6E880",
        300: "#FFD037",
        400: "#E6B912",
        500: "#DE9906",
        600: "#C97504",
        700: "#A75808",
        800: "#86450E",
        900: "#6D370F",
      },
      violet: {
        100: "#F7F5F7",
        200: "#EEE4EE",
        300: "#E3CAE2",
        400: "#D49DCC",
        500: "#C070B0",
        600: "#984C89",
        700: "#632652",
        800: "#4B2D4D",
        900: "#39243C",
      },
    },
    fontFamily: {
      sans: ["Lato", "sans-serif"],
      serif: ["Georgia", "serif"],
      mono: [
        "Menlo",
        "Monaco",
        "Consolas",
        '"Liberation Mono"',
        '"Courier New"',
        "monospace",
      ],
    },
  },
  variants: {
    // Some useful comment
  },
  plugins: [
    // Some useful comment
  ],
};
