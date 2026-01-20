// tailwind.config.js
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  plugins: [require("daisyui")],
  darkMode: "class",
  daisyui: {
    themes: [
      "dark",
      {
        softlight: {
          primary: "#ec4899",
          secondary: "#f472b6",
          accent: "#fb7185",

          neutral: "#2b2b2b",

          "base-100": "#fff1f5", // 🌸 pink background
          "base-200": "#ffe4e6",
          "base-300": "#fecdd3",

          info: "#38bdf8",
          success: "#22c55e",
          warning: "#f59e0b",
          error: "#ef4444",
        },
      },
    ],
  },
};
