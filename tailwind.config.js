/* eslint-disable @typescript-eslint/quotes */
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1E1E24',
        secondary: '#ffffff',
        blue: '#5865F2',
        font: '#FFF8F0'
      }
    }
  },
  plugins: []
}
