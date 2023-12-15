/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      s: { max: "500px" },
      // => @media (min-width: 640px and max-width: 767px) { ... }

      md: { min: "501px", max: "950px" },
      // => @media (min-width: 768px and max-width: 1023px) { ... }

      lg: { min: "951px", max: "1279px" },
      // => @media (min-width: 1024px and max-width: 1279px) { ... }

      xl: { min: "1280px", max: "1535px" },
      // => @media (min-width: 1280px and max-width: 1535px) { ... }

      "2xl": { min: "1536px" },
      // => @media (min-width: 1536px) { ... }
    },

    extend: {
      keyframes: {
        bouncy: {
          "0%, 100%": {
            transform: "translateY(-5%)",
            animationTimingFunction: "cubic-bezier(0.8, 0, 1, 1)",
          },
          "5%": {
            transform: "none",
            animationTimingFunction: "cubic-bezier(0, 0, 0.2, 1)",
          },
        },
      },
      animation: {
        bouncy: "bouncy 5s infinite",
      },
      colors: {
        primary: " rgba(9, 21, 35, 1)",
        accent: " rgba(165, 65, 65, 0.87)",
      },
      boxShadow: {
        // '3xl': '5px 35px 50px -50px white',
        "3xl": "10px 10px 5px #888888",
      },
    },
  },
  plugins: [],
};

// --accent-color: rgba(9, 21, 35, 1);
