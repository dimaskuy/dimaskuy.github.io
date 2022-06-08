module.exports = {
  content: ["index.html"],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        lora: ["Lora", "serif"],
      },
      colors: {
        primary: "#4f46e5", // indigo-600
        medPrimary: "#4338ca",
        darkPrimary: "#312e81",
        secondary: "#475569", // slate-600
        dark: "#1e293b", // slate-800
      },
      screens: {
        "2xl": "1320px",
      },
      animation: {
        pulseFast: "pulse .8s ease-in-out infinite",
        wave: "wave 5s ease-in-out infinite",
        scale: "scale 0.3s ease-in-out",
        scaleReverse: "scale 0.3s ease-in-out alternate-reverse",
        opacity: "opacity 0.3s ease-in-out",
        opacityReverse: "opacity 0.3s ease-in-out alternate-reverse",
        opacity: "opacity 0.2s ease-in-out",
        translate: "translate 0.3s ease-in-out",
      },
      keyframes: {
        wave: {
          "0%": {
            transform: "rotate(0deg)",
          },
          "100%": {
            transform: "rotate(14deg)",
          },
          "20%": {
            transform: "rotate(-8deg)",
          },
          "30%": {
            transform: "rotate(14deg)",
          },
          "40%": {
            transform: "rotate(-4deg)",
          },
          "50%": {
            transform: "rotate(10deg)",
          },
          "60%": {
            transform: "rotate(0deg)",
          },
          "100%": {
            transform: "rotate(0deg)",
          },
        },
        scale: {
          "0%": {
            transform: "scale(0)",
          },
          "100%": {
            transform: "scale(1)",
          },
        },
        opacity: {
          "0%": {
            opacity: "0",
          },
          "100%": {
            opacity: "1",
          },
        },
        translate: {
          "0%": {
            transform: "translateY(-100px)",
          },
          "100%": {
            transform: "translateY(0px)",
          },
        },
      },
    },
  },
  plugins: [],
};
