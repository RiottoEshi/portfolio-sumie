// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#000000",
        paper: "#ffffff",
        shadow: "#1a1a1a",
        mist: "#f5f5f5",
        stone: "#e0e0e0",
      },
      fontFamily: {
        serif: ["var(--font-primary)", "serif"],
        sans: ["var(--font-secondary)", "sans-serif"],
      },
      transitionTimingFunction: {
        "ink": "cubic-bezier(0.19, 1, 0.22, 1)",
        "smooth": "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
      },
      animation: {
        "ink-reveal": "ink-reveal 0.8s cubic-bezier(0.19, 1, 0.22, 1) forwards",
      },
      keyframes: {
        "ink-reveal": {
          "0%": { opacity: "0", transform: "translateY(20px) scale(0.98)" },
          "100%": { opacity: "1", transform: "translateY(0) scale(1)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;