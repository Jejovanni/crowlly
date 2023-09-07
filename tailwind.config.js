/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url(' low-poly-grid-haikei.svg')",
        'hero-mobile': "url('low-poly-grid-haikei-mobile.svg') ",
        'register-pattern': "url('low-poly-grid-haikei-register.svg')"
      }
    },
  },
  plugins: [],
}

