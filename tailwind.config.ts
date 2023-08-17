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
          primary: "#33a5ce",

          secondary: "#b4e285",

          accent: "#f2ce4b",

          neutral: "#2a233e",

          "base-100": "#efeef1",

          info: "#718cd6",

          success: "#78dec5",

          warning: "#d3a50d",

          error: "#f6656c",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
export default config;
