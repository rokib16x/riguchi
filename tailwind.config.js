/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        purple: {
          400: '#B83280',
          500: '#8B2FBE',
          600: '#7C2BAD',
          700: '#6B2499',
        },
        blue: {
          900: '#1E2F97',
        },
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #8B2FBE 0%, #1E2F97 100%)',
      },
    },
  },
  plugins: [],
};
