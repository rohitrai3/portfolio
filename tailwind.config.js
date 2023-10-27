/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
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

