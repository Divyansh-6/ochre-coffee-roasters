/** @type {import('tailwindcss').Config} */
module.exports = {
  // Files Tailwind scans so it only keeps the utility classes we actually use.
  content: ["./*.html", "./js/**/*.js"],
  // Dark mode is driven by a `.dark` class on <html>, toggled in js/main.js.
  darkMode: "class",
  theme: {
    extend: {
      // Coffee + Jaipur "Pink City" palette. Named so classes stay consistent.
      colors: {
        paper: "#f6f1e8",      // warm ivory background (light)
        cream: "#fdfaf4",      // lifted card surface (light)
        sand: "#e7dac6",       // warm borders / dividers
        ink: "#241a10",        // espresso near-black text
        mocha: "#6f6152",      // muted secondary text
        clay: "#b14a2c",       // roasted-clay accent
        "clay-deep": "#8c3a20", // accent hover (light)
        "clay-soft": "#e0885a", // brighter accent for dark mode
        roast: "#17110d",      // deep espresso background (dark)
        bean: "#231a13",       // lifted surface (dark)
      },
      fontFamily: {
        display: ['Fraunces', 'ui-serif', 'Georgia', 'serif'],
        sans: ['"Hanken Grotesk"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        content: "72rem", // shared page width
      },
    },
  },
  plugins: [],
};
