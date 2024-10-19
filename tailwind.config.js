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
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        slate: {
          800: '#37446B',
          900: '#212C4D',
          950: '#080F25',
        },
      },
      fontFamily: {
        sans: 'Ranade, system-ui, sans-serif',
      },
    },
  },
  plugins: [],
}
