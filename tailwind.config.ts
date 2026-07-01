import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg:      "#030712",
        surface: "#0d1117",
        card:    "#0f1724",
        accent:  "#6366f1",
        "accent-light": "#818cf8",
        "accent-dim":   "rgba(99,102,241,0.15)",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      animation: {
        wave:    "wave 2s infinite",
        marquee: "marquee 28s linear infinite",
        "marquee-reverse": "marquee-reverse 22s linear infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4,0,0.6,1) infinite",
      },
      keyframes: {
        wave: {
          "0%":   { transform: "rotate(0deg)" },
          "10%":  { transform: "rotate(14deg)" },
          "20%":  { transform: "rotate(-8deg)" },
          "30%":  { transform: "rotate(14deg)" },
          "40%":  { transform: "rotate(-4deg)" },
          "50%":  { transform: "rotate(10deg)" },
          "60%":  { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(0deg)" },
        },
        marquee: {
          from: { transform: "translateX(0)" },
          to:   { transform: "translateX(-50%)" },
        },
        "marquee-reverse": {
          from: { transform: "translateX(-50%)" },
          to:   { transform: "translateX(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
