/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        'formbordercolor': '#E2E2E2',
        'formbackgroundcolor': "#FFFFFF",
        'inputbordercolor': '#3849E6',
        'inputs': '#dddddd',
        'links': '#3849E6',
        'buttonhover': '#3849E6',
        'deletecolor': '#e94033',
        'blackborder': '#000',
        'grayborder': '#C0C0C0',
        'lightgray': '#F5F5F5',
        'textwhite': "#FFFFFF",
        'excelbordercolor': '#4AAA4D',
        'excelbgcolor': '#4AAA4D',
        'exceltextcolor': '#4AAA4D',
        'copybordercolor': '#3849E6',
        'copybgcolor': '#3849E6',
        'copytextcolor': '#3849E6',
        'pdfbordercolor': '#DE2429',
        'pdftextcolor': '#DE2429',
        'pdfbgcolor': '#DE2429',
        'printbordercolor': '#000',
        'printtextcolor': '#000',
        'printbgcolor': '#000',
        'tableheadbg': '#F8F8FA',
        'tableheadbghover': '#F8F8FA',
        'tableheadtext': '#3849E6',
        'dropdowns': '#fff',
        'dropdownsborder': '#000',
        'dropdownshoverborder': '#3849E6',
        'selectedbutton': '#DC143C',
        'selectedtext': '#fff',
      }
    },
  },
  plugins: [],
};
