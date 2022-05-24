module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        98: "33rem",
      },
      fontFamily: {
        custom1: ["Bebas Neue", "sans-serif"],
        custom2: ["Montserrat", "sans-serif"],
        
        
      },
      zIndex : {
        100 : '99999'
      }
    },
  },
  plugins: [],
};
