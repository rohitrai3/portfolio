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
        "greenery": "#88B04B",
        "illuminating": "#F5DF4D",
        "living-coral": "#FF6F61",
        "ultra-violet": "#5F4B8B",
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

