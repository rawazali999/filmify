import type { Config } from "tailwindcss";

const config: Config = {
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
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#3a51ff",

          secondary: "#807af9",

          accent: "#ff6870",

          neutral: "#26203c",

          "base-100": "#e9e8ee",

          info: "#4077bf",

          success: "#83e2a9",

          warning: "#f2c854",

          error: "#f42f53",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
  //...
};
export default config;
