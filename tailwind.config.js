/** @type {import('tailwindcss').Config} */
module.exports = {
  // Files Tailwind scans so it only keeps the utility classes we actually use.
  content: ["./*.html", "./js/**/*.js"],
  // Dark mode is driven by a `.dark` class on <html>, toggled in js/main.js.
  darkMode: "class",
  theme: {
    extend: {
      // Palette grounded in Sanganer/Bagru block-printing near Jaipur:
      // indigo and madder-red hand-printed on undyed cotton.
      colors: {
        paper: "#f2ece0",        // undyed-cotton ecru background (light)
        cream: "#faf6ec",        // lifted card surface (light)
        sand: "#ddd0b8",         // warm khadi borders / dividers
        ink: "#20262e",          // indigo-charcoal text (block-print ink)
        mocha: "#6b6256",        // muted secondary text
        indigo: "#31427c",       // Sanganer/Bagru indigo — primary accent
        "indigo-deep": "#25325f", // accent hover (light)
        "indigo-soft": "#93a6dd", // brighter indigo for dark mode
        madder: "#a83e2b",       // madder-red — the roast meter's warm note
        "madder-soft": "#d9694e", // brighter madder for dark mode
        roast: "#12151d",        // deep indigo-night background (dark)
        bean: "#1b2130",         // lifted surface (dark)
      },
      fontFamily: {
        display: ['Newsreader', 'ui-serif', 'Georgia', 'serif'],
        sans: ['"Hanken Grotesk"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        content: "72rem", // shared page width
      },
      // A single indigo-tinted lift, in place of Tailwind's stock grey shadow.
      // Real shadows pick up the light around them; ours leans block-print indigo.
      boxShadow: {
        card: "0 1px 2px rgb(32 38 46 / 0.05), 0 18px 40px -24px rgb(49 66 124 / 0.5)",
      },
    },
  },
  plugins: [],
};
