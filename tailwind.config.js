/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Space Grotesk', 'Inter', 'sans-serif'], // Existing sans font stack
        mono: ['JetBrains Mono', 'monospace'], // Existing mono font stack
        'fira-sans': ['Fira Sans', 'sans-serif'], // Existing Fira Sans
        'roboto': ['Roboto', 'sans-serif'], // Add Roboto
        'merriweather': ['Merriweather', 'serif'], // Add Merriweather
      },
      colors: {
        background: {
          start: '#1a1b26',
          end: '#24283b',
        },
        text: {
          primary: '#a9b1d6',
          secondary: '#9aa5ce',
          accent: '#7aa2f7',
          highlight: '#ff9e64',
        },
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #7aa2f7 0%, #bb9af7 100%)',
      },
    },
  },
  plugins: [],
};