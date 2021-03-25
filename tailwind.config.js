const colors = require("tailwindcss/colors");
const theme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      borderRadius: {
        "circle": "50%",
      },

      fontFamily: {
        artifika: ["artifika"],
      },
      height: {
        600: "600px",
      },
      container: {
        center: "true",
      },
      backgroundImage: (theme) => ({
        "hero-pattern":
          "url('https://lh5.googleusercontent.com/proxy/YeCIF1FnNB4K4qurZOo7WzngEET35VSnqOp2sfgwiWLoRipOCdWr7lLTb5uU05HhctbilaYWTtBNiFXsNftuAxjErwwrEwK7w0PGBrXBpQZgullEqLVBhaCLiUY=w1200-h630-p-k-no-nu')",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
