/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: "#0F0C60",
        secondary: "#00f6ff",
        mainin: "#FFFFFF",
        dimBlue: "rgba(9, 151, 124, 0.1)",
        biBi: "#232b69",
        yellowLight: '#FFF3D9',
        greenLight: '#CCF0EE',
        basic: "#AFADE9",
        image1:"url(/src/assets/hero/bg.jpg)"
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    
    
    },
  },
  plugins: [],
}