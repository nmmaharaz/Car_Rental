import daisyui from 'daisyui';

/** @type {import('tailwindcss').Config} */
const flowbite = require("flowbite-react/tailwind");
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      backgroundImage: {
        'banner': "url('./assets/carbanner.jpg')",
        'footer-texture': "url('/img/footer-texture.png')",
      }
    }
  },
  plugins: [ 
    flowbite.plugin(),
    daisyui,
  ],
}



