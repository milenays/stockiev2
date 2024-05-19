import { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}', // Kendi dizinlerinizi ekleyin
  ],
  darkMode: 'class', // Dark mode'u etkinleştirir
  theme: {
    extend: {},
  },
  plugins: [],
};

export default config;
