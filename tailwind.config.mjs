/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      screens: {
        'laptop': '993px',
      },
      width: {
        'onethirtyfour': '134px',
        'hundred': '100px',
        'onetwenty': '120px'
      },
      lineHeight: {
        'twentythree': '23px',
      },
      colors: {
        'navmenucolor': '#323232',
        'SoftBeigePink': '#D4B0A5'
      },
      gap: {
        'fortynine': '49px',
      }
    },
  },
  plugins: [],
};
