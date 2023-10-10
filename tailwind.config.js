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
        font: '#FFF8F0',
        bggrey: '#453950'
      },
      backgroundImage: {
        home: "url('/src/assets/home.webp')",
        footer: "url('/src/assets/bgfooter.webp')",
        bghome: "url('/src/assets/bghome.webp')",
        bgwhite: "url('/src/assets/bgwhite.webp')"
      }
    }
  },
  plugins: []
}
