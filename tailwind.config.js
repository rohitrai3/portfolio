/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      backdropBlur: {
        xs: "2px"
      },
      colors: {
        "classic-blue": "#0F4C81",
        "illuminating": "#F5DF4D",
        "vary-pery": "#6667AB",
        "viva-magenta": "#BB2649",
      },
      fontFamily: {
        pressStart2P: ["PressStart2P-Regular", "sans-serif"]
      },
      height: {
        dvh: "100dvh"
      },
      margin: {
        "dvw-1/2": "50dvw"
      }
    },
  },
  plugins: [],
}

