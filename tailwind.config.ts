import { defineConfig } from 'tailwindcss'

export default defineConfig({
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class', // Dark mode kullanımı
  theme: {
    extend: {},
  },
  plugins: [],
})
