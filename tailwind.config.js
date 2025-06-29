// tailwind.config.js
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#ffc107",         
          "primary-content": "#ffffff",
          "accent": "#ffc107",          
        },
      },
    ],
    defaultTheme: "mytheme",
  },
};
