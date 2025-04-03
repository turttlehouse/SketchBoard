/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    
      screens: {
        'sm': '340px',
        // => @media (min-width: 640px) { ... }  mobile (340px - 767px)

        'md': '768px',
        // => @media (min-width: 768px) { ... } Tablet (768px - 1023px)

        'lg': '1024px',
        // => @media (min-width: 1024px) { ... } Desktop (1024px - 1279px)

        'xl': '1280px',
        // => @media (min-width: 1280px) { ... } 

        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }
      },
  },

  plugins: [],
  
}

