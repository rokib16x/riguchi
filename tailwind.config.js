/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Space Grotesk', 'Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        background: {
          start: '#8B2FBE',
          end: '#1E2F97',
        },
        text: {
          primary: '#FFFFFF',
          secondary: '#E2E8F0',
          accent: '#FF3366',
        },
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #8B2FBE 0%, #1E2F97 100%)',
      },
    },
  },
  plugins: [],
};

