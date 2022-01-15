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
      },
      keyframes: {
        menu: {
          "0%": { transform: "translate(0px,2px)" },
          "5%": { transform: "translate(0px,-2px)" },
          "10%": { transform: "translate(0px,2px)" },
          "15%": { transform: "translate(0px,-2px)" },
          "20%": { transform: "translate(0px,2px)" },
          "25%": { transform: "translate(0px,-2px)" },
          "30%": { transform: "translate(0px,2px)" },
        },
        shape: {
          "0%,100%": { borderRadius: "63% 37% 54% 46%/55% 48% 52% 45%" },
          "14%": { borderRadius: "40% 60% 54% 46%/49% 60% 40% 51%" },
          "28%": { borderRadius: "54% 46% 38% 62%/49% 70% 30% 51%" },
          "42%": { borderRadius: "61% 39% 55% 45%/61% 38% 62% 39%" },
          "56%": { borderRadius: "61% 39% 67% 33%/70% 50% 50% 30%" },
          "70%": { borderRadius: "50% 50% 34% 66%/56% 68% 32% 44%" },
          "84%": { borderRadius: "46% 54% 50% 50%/35% 61% 39% 65%" },
        },
        shape2: {
          "0%,100%": { borderRadius: "49% 51% 49% 51% / 51% 52% 48% 49%" },
          "14%": { borderRadius: "57% 43% 52% 48% / 44% 54% 46% 56%" },
          "28%": { borderRadius: "50% 50% 47% 53% / 57% 48% 52% 43%" },
          "42%": { borderRadius: "50% 50% 47% 53% / 57% 48% 52% 43%" },
          "56%": { borderRadius: "49% 51% 49% 51% / 58% 44% 56% 42%" },
          "70%": { borderRadius: "40% 60% 39% 61% / 58% 44% 56% 42%" },
          "84%": { borderRadius: "40% 60% 45% 55% / 44% 54% 46% 56%" },
        },
        shape3: {
          "0%,100%": { borderRadius: "49% 51% 49% 51% / 51% 52% 48% 49%" },
          "14%": { borderRadius: "49% 51% 49% 51% / 58% 44% 56% 42%" },
          "28%": { borderRadius: "40% 60% 39% 61% / 58% 44% 56% 42%" },
          "42%": { borderRadius: "40% 60% 45% 55% / 44% 54% 46% 56%" },
          "56%": { borderRadius: "57% 43% 52% 48% / 44% 54% 46% 56%" },
          "70%": { borderRadius: "50% 50% 47% 53% / 57% 48% 52% 43%" },
          "84%": { borderRadius: "43% 57% 45% 55% / 57% 48% 52% 43%" },
        },
        prof_shape: {
          "0%,100%": { borderRadius: "18% 22% 14% 14% / 16% 23% 10% 14%" },
          "14%": { borderRadius: "27% 22% 25% 14% / 16% 23% 10% 14%" },
          "28%": { borderRadius: "19% 22% 25% 20% / 23% 30% 17% 29%" },
          "42%": { borderRadius: "23% 22% 31% 25% / 26% 24% 17% 18%" },
          "56%": { borderRadius: "13% 17% 24% 25% / 17% 26% 11% 29%" },
          "70%": { borderRadius: "29% 26% 16% 30% / 17% 26% 22% 19%" },
          "84%": { borderRadius: "29% 33% 25% 30% / 21% 21% 29% 24%" },
        },
      },
      animation: {
        menu: "menu 2s infinite",
        shape: "shape 30s ease 0s infinite",
        shape2: "shape2 15s ease 0s infinite",
        shape3: "shape3 15s ease 0s infinite",
        prof_shape: "prof_shape 30s ease 0s infinite",
      },
    },
  },
  plugins: [
    plugin(function ({ addVariant }) {
      addVariant("four", "&:nth-child(4)");
    }),
  ],
};
