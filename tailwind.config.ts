import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // University of Washington palette
        husky: {
          DEFAULT: "#4B2E83", // Husky Purple
          deep: "#1C0F3E",    // Midnight Purple alias
          50: "#F2EEFA",
          100: "#E2D9F2",
          200: "#C4B0E2",
          300: "#9E84CB",
          400: "#7E60B4",
          500: "#4B2E83",
          600: "#3D2469",
          700: "#2D1B5E",
          800: "#1C0F3E",
          900: "#0F0822",
        },
        gold: {
          DEFAULT: "#B7A57A", // Metallic Gold
          50: "#FAF7EF",
          100: "#F0EAD7",
          200: "#E0D2B0",
          300: "#D0BB89",
          400: "#C4AC7E",
          500: "#B7A57A",
          600: "#9E8B5E",
          700: "#7C6D49",
          800: "#5A4F35",
          900: "#393222",
        },
        cream: "#F5F1E8",
        ink: "#1A1A1A",
        stone: "#6B6B6B",
      },
      fontFamily: {
        display: ["Fraunces", "Georgia", "serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "ui-monospace", "monospace"],
      },
      animation: {
        "fade-up": "fade-up 0.6s ease-out forwards",
        "slow-pulse": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
