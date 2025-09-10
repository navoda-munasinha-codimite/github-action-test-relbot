/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'oxford-blue': '#14213d',
        'light-blue': '#3b82f6',
        'powder-blue': '#93c5fd',
      },
    },
  },
  plugins: [],
}
