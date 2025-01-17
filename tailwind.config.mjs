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
        'hundred': '100px',
        'onetwenty': '120px',
        'onethirtyfour': '134px',
        'onefortyfive': '145px',
        'fourtwentytwo': '422px',
      },
      maxWidth: {
        'sixhundred': '600px'
      },
      lineHeight: {
        'twentythree': '23px',
        'twentyseven': '27px',
        'thirtytwo': '32px',
        'fifty': '50px',
        'fiftyone': '51px',
        'sixty': '60px',
        'sixtyeight': '68px',
        'seventytwo': '72px',
      },
      colors: {
        'SlateBlack': '#323232',
        'SoftBeigePink': '#D4B0A5',
        'NearBlack': '#333333',
        'DimGray': '#666666',
        'DustyGreen': '#939580',
        'DustyGrayBlue': '#848892',
        'WarmWhite': '#FAF6F2'
      },
      gap: {
        'fortynine': '49px',
      },
      fontSize: {
        'twentytwo': '22px',
        'thirtyfive': '35px',
        'fortytwo': '42px',
        'fifty': '50px',
        'sixtyfive': '65px',
      },
      letterSpacing: {
        '0.5': '0.5px'
      },
      padding: {
        'fortyfive': '45px',
        'thirtyone': '31px',
        'fifteen': '15px',
      }
    },
  },
  plugins: [],
};
