/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        pressStart2P: ["PressStart2P-Regular", "sans-serif"],
        robotoMono: ["RobotoMono-Regular", "sans"]
      },
      height: {
        dvh: "100dvh"
      }
    },
  },
  plugins: [],
}

