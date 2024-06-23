/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "813F" :"#FF813F",
        "0C0C":"#100C0C",
        "4B4C":"#474B4C",
      },
      fontSize: {
        '52' :'52px',
        '72': 'clamp(3rem, 3.35vw + 1rem, 7rem)',
        '60': 'clamp(3rem, 3.35vw + 1rem, 3.75rem)',
        '48': 'clamp(3rem, 3.35vw + 1rem, 3rem)',
        '26': '26px',
      },
      margin: {
        '100': '100px',
        '50': '50px',
      },
      padding: {
        '100': '100px',
        '50': '50px',
      }

    },
  },
  plugins: [],
};
