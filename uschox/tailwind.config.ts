

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'caslon': ['"adobe-caslon-pro"', 'serif'],
      },
      backgroundImage: {
        'founders': "url('/founders.jpg')", // Adjust the path if necessary
      },
    },
  },
  plugins: [],
}


