import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#101A3C",
        royal: "#2540C8",
        sky2: "#2F7BE0",
        peacock: "#0FA3A3",
        emerald2: "#18B26B",
        paper: "#F8FAFD",
        mist: "#E9EEF7",
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      boxShadow: {
        glass: "0 8px 32px rgba(16,26,60,0.10), inset 0 1px 0 rgba(255,255,255,0.75)",
        lift: "0 16px 48px rgba(16,26,60,0.14), inset 0 1px 0 rgba(255,255,255,0.8)",
        card: "0 2px 12px rgba(16,26,60,0.06)",
      },
      backgroundImage: {
        "brand-gradient": "linear-gradient(135deg, #2540C8 0%, #0FA3A3 55%, #18B26B 100%)",
      },
    },
  },
  plugins: [],
};
export default config;
