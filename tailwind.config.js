const { nextui } = require("@nextui-org/react");
const flowbite = require("flowbite-react/tailwind");
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/preline/dist/*.js",
    flowbite.content(),
  ],
  theme: {
    extend: {
      screens: {
        xs: "380px",
        xx: "280px",
        mm: "420px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
      fontFamily: {
        dmsans: ["DM Sans", "sans-serif"],
        monts: ["Montserrat", "sans-serif"],
        harma: ["Harmattan", "sans-serif"],
        generalSans: ["General Sans", "sans-serif"],
        Cabin: ["Cabin", "sans-serif"],
        Jost: ["Jost", "sans-serif"],
        openSans: ["Open Sans", "sans-serif"],
        outfit: ["Outfit", "sans-serif"],
        fig: ["Figtree", "sans-serif"],
        syne: ["Syne", "sans-serif"],
      },
      colors: {
        bac: "#121317",
        pri: "#1A1C23",
        gold: "#FCCE53",
        mod: "#24262D",
      },
    },
  },
  darkMode: "class",
  plugins: [
    // require('daisyui'),
    flowbite.plugin(),
    require("preline/plugin"),
    nextui({
      themes: {
        "purple-dark": {
          extend: "dark", // <- inherit default values from dark theme
          colors: {
            // background: "#0D001A",
            background: "#1A1C23",
            foreground: "#ffffff",
            secs: "#E43D30",
            white: "#FFFFFF",
            primary: {
              50: "#3B096C",
              100: "#520F83",
              200: "#7318A2",
              300: "#9823C2",
              400: "#c031e2",
              500: "#DD62ED",
              600: "#F182F6",
              700: "#FCADF9",
              800: "#FDD5F9",
              900: "#FEECFE",
              DEFAULT: "#FCCE53",
              foreground: "#000000",
            },
            focus: "#F182F6",
          },
          layout: {
            disabledOpacity: "0.3",
            radius: {
              small: "4px",
              medium: "6px",
              large: "8px",
            },
            // borderWidth: {
            //   small: "1px",
            //   medium: "2px",
            //   large: "3px",
            // },
          },
        },
      },
    }),
  ],
};
