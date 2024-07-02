/** @type {import('tailwindcss').Config} */
import keepPreset from "keep-react/src/keep-preset.js";

import resolve from "@rollup/plugin-node-resolve";

export default {
   content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
      "node_modules/keep-react/**/*.{js,jsx,ts,tsx}",
   ],

   presets: [keepPreset],
   theme: {
      extend: {
         fontFamily: {
            robot: ["Teko", "sans-serif"],
            kodom: ["Lobster", " sans-serif"],
            latin: ["M PLUS Code Latin", " sans-serif"],
            oswald: ["Oswald", " sans-serif"],
         },
      },
   },
   plugins: [
      resolve({
         extensions: [".js", ".jsx"],
      }),
   ],
};
