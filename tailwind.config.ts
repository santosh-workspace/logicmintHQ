import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#050816",
        surface: "#0F172A",
        brand: { blue: "#2563EB", mint: "#10B981", hi: "#60A5FA" },
      },
      fontFamily: {
        display: ["var(--font-space)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
