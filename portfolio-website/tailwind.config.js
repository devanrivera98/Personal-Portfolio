/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
      colors: {
        maroon: '#7A2048',
        lightBlue: 'rgb(167,176,227)',
        lightGreen: 'rgb(104,195,200)',
        darkBlue: '#1E2761',
      }
    },
  },
  plugins: [],
}
