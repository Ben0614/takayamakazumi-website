let plugin = require("tailwindcss/plugin");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      lg: "1040px",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "15px",
        lg: "2rem",
      },
    },

    extend: {
      fontSize: {
        "area-title": [
          "28px",
          {
            letterSpacing: "7px",
            lineHeight: "50.5px",
          },
        ],
        "area-date": [
          "14px",
          {
            lineHeight: "14px",
          },
        ],
        "area-category": [
          "12px",
          {
            lineHeight: "12px",
          },
        ],
        "area-content": [
          "12px",
          {
            lineHeight: "23px",
          },
        ],
        "area-view": [
          "14px",
          {
            letterSpacing: "2.8px",
            lineHeight: "42px",
          },
        ],
      },
      padding: {
        header: "25.5px 15px",
      },
      colors: {
        categoryTag: "#95b9c8",
        all: "#595757",
      },
    },
  },
  plugins: [
    plugin(function ({ addVariant }) {
      addVariant("four", "&:nth-child(4)");
    }),
  ],
};
