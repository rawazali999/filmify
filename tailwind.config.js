const config = {
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
          primary: "#073966",

          secondary: "#af06c9",

          accent: "#1bfc5f",

          neutral: "#141624",

          "base-100": "#fbfcfd",

          info: "#22b6f1",

          success: "#2dbe81",

          warning: "#a07b03",

          error: "#f53259",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
  //...
};
export default config;
