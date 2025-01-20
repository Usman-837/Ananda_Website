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
        'oneforty': '140px',
        'onefortyfive': '145px',
        'fourtwentytwo': '422px',
      },
      maxWidth: {
        'sixhundred': '600px',
        'sixthirtythree': '633px',
        'sixhundredninety': '690px',
      },
      lineHeight: {
        'twentythree': '23px',
        'twentyfive': '25px',
        'twentyseven': '27px',
        'twentynine': '29px',
        'thirtytwo': '32px',
        'forty': '40px',
        'fortynine': '49px',
        'fifty': '50px',
        'fiftyone': '51px',
        'fiftyeight': '58px',
        'sixty': '60px',
        'sixtyeight': '68px',
        'seventytwo': '72px',
        'seventynine': '79px',
        'ninety': '90px',
      },
      colors: {
        'SlateBlack': '#323232',
        'SoftBeigePink': '#D4B0A5',
        'NearBlack': '#333333',
        'DimGray': '#666666',
        'SteelGray': '#858585',
        'DustyGreen': '#939580',
        'DustyGrayBlue': '#848892',
        'WarmWhite': '#FAF6F2',
        'LightGray': '#D3D3D3',
        'SoftSand': '#D2ADA2',
        'Gray': '#525252 '
      },
      gap: {
        'fortynine': '49px',
      },
      fontSize: {
        'twenty': '20px',
        'twentytwo': '22px',
        'twentyfive': '25px',
        'twentyeight': '28px',
        'thirtyfive': '35px',
        'thirtyfour': '34px',
        'forty': '40px',
        'fortytwo': '42px',
        'fifty': '50px',
        'fiftyfive': '55px',
        'sixtyfive': '65px',
        'eighty': '80px',
      },
      letterSpacing: {
        '0.5': '0.5px'
      },
      padding: {
        'fifteen': '15px',
        'thirtyone': '31px',
        'forty': '40px',
        'fortyfive': '45px',
        'fifty': '50px',
        'sixtyfive': '65px',
        'hundred': '100px',
        'onethousandfifteen': '115px',
      }
    },
  },
  plugins: [],
};
