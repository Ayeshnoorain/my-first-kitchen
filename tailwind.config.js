/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'elegant-white': '#FFFFFF',
        'soft-gray': '#F8F9FA',
        'warm-gray': '#6B7280',
        'deep-maroon': '#8B2635',
        'rich-maroon': '#A0522D',
        'accent-gold': '#B8860B',
        'warm-gold': '#DAA520',
        'text-dark': '#1F2937',
        'text-light': '#6B7280',
        'header-maroon': '#5D2E2E',
        'info-tan': '#D2B48C',
      },
      fontFamily: {
        'serif': ['Playfair Display', 'serif'],
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'script': ['Dancing Script', 'cursive'],
      },
    },
  },
  plugins: [],
} 