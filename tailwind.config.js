/** @type {import('tailwindcss').Config} */
  module.exports = {
    content: [
      "./src/**/*.{js,jsx,css,tsx}",
    ],
    theme: {
      extend: {
        backgroundImage: {
          'gradient': 'linear-gradient(177deg, #005fd600 -50%, #000000 100%)',
        },
        colors: {
          white: "#FFFFFF",
          primary: "#f44749",
          secondary: "#f3af24",
          sectionBg: "#F9F9F9",
          dark: "#000000",
          title: "#565758",
          newsTitle: "#292828",
          p: "#717275",
          border: "#eaeaea",
        },
        borderRadius: {
          default: ".25rem",
        },
        fontFamily: {
          body: ['Montserrat', 'sans-serif'],
        },
        fontSize: {
          'h1': '76px',
          'h2': '56px',
          'h3': '42px',
          'h4': '28px',
          'h5': '26px',
          'h6': '22px',
        },
      },
    },
    variants: {},
    plugins: [],
  };  