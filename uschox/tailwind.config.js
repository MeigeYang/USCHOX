/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'caslon': ['"adobe-caslon-pro"', 'serif'],
        'montserrat': ['var(--font-montserrat)', 'sans-serif'],
        
      },
      backgroundImage: {
        'founders': "url('/founders.jpg')",
        'members': "url('/members_background.png')",
      },
      // ... other theme extensions
    },
  },
  plugins: [],
}