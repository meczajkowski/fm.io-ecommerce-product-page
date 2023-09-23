/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: 'hsl(26, 100%, 55%)',
        'primary-muted': 'hsl(25, 100%, 94%)',
        secondary: ' hsl(223, 64%, 98%)',

        muted: ' hsl(220, 14%, 75%)',
      },
    },
  },
  plugins: [],
};
