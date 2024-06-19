/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontSize: {
      sm: '0.8rem',
      base: '1rem',
      xl: '1.25rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.5rem',
    },
    extend: {
      lineHeight: {
        '4.5rem': '4.5rem',
      },
      colors: {
        'light-grey': '#f4f3f3',
        'custom-blue': '#123FBF'
      },
      zIndex: {
        '1': '1',
      },
      gradientColorStops: {
        'start': '#eaf0f7',
        'end': '#75B4E4',
      },
    },
  },
  plugins: [],
}

