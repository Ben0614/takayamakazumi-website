module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      padding: {
        header: "25.5px 15px",
      },
    },
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
  },
  plugins: [],
};
