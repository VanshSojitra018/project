/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src//*.{js,jsx,ts,tsx}"],
  theme: {
    // Global breakpoints for responsive utilities
    screens: {
      sm: "320px",
      sm1: "375px",
      md1: "479px",
      md2: "639px",
      md: "767px",
      lg1: "991px",
      lg: "1024px",
      xl: "1199px",
      "2xl": "1400px",
    },

    // Customize container behavior
    container: {
      center: true, // Center the container horizontally
      padding: "12px", // 16px left & right padding
      screens: {
        sm: "375px",
        md1: "479px",
        md2: "639px",
        md: "767px",
        lg1: "991px",
        lg: "1024px",
        xl: "1199px",
        "2xl": "1400px",
      },
    },

    extend: {
      colors: {
        bgfooter: "#060922",
        footerarrow: "#09aff4",
        blog:"#0d1857",
        hero:"#060922"
      },
      fontFamily: {
        Jost: ["Jost", "sans-serif"],
      },
       
    },
  },
};
