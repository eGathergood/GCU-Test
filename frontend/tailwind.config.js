module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}', // For app directory (if using App Router)
    './pages/**/*.{js,ts,jsx,tsx}', // For pages directory
    './components/**/*.{js,ts,jsx,tsx}', // For components directory
  ],
  theme: {
    extend: {
      colors: {
        primary: '#004d75', // Dark Blue
        accent: '#81c0e7', // Light Blue
        background: '#f5f5f5', // Light Gray Background
        border: '#e5e5e5', // Soft Gray Border
        white: '#ffffff', // White
      },
    },
  },
  plugins: [],
};
