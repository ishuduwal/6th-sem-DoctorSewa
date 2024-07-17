/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'port-gore': {
          '50': '#f0f2fd',
          '100': '#e4e8fb',
          '200': '#ced4f7',
          '300': '#afb8f2',
          '400': '#8f93ea',
          '500': '#7774e0',
          '600': '#6659d2',
          '700': '#5749b9',
          '800': '#473e95',
          '900': '#3d3877',
          '950': '#252146',
        },
      },
    },
  },
  plugins: [],
}
