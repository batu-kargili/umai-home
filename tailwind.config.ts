import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        midnight:        "#0e0d2e",
        denim:           "#1a1950",
        "academy-blue":  "#0074a2",
        ocean:           "#0079ff",
        "island-cyan":   "#38cced",
        "meadow-teal":   "#00afba",
        "landing-blue": "#106CEC",
        "landing-blue-light": "#60a5fa",
        "landing-blue-soft": "#93c5fd",
        "landing-blue-surface": "#041a36",
        "off-white":     "#f8f9fc",
        "light-gray":    "#eef1f6",
        "mid-gray":      "#8a94a6",
        "dark-text":     "#1a1f36",
        // UMAI brand reds
        "umai-red":      "#b91c1c",
        "umai-red-dark": "#991b1b",
        "umai-red-light":"#f87171",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "sans-serif"],
        display: ["var(--font-geist-sans)", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
      maxWidth: {
        container: "1280px",
      },
      backgroundImage: {
        "hero-gradient":  "linear-gradient(135deg, #020b2e 0%, #0a1a5c 40%, #0d2275 70%, #020b2e 100%)",
        "card-gradient":  "linear-gradient(135deg, rgba(14,36,89,0.6) 0%, rgba(2,11,46,0.8) 100%)",
        "cta-gradient":   "linear-gradient(90deg, #020b2e 0%, #0e2459 50%, #0074a2 100%)",
        "cyan-glow":      "radial-gradient(ellipse at 60% 40%, rgba(56,204,237,0.15) 0%, transparent 60%)",
        "ocean-glow":     "radial-gradient(ellipse at 30% 60%, rgba(0,121,255,0.12) 0%, transparent 55%)",
      },
      boxShadow: {
        card:           "0 4px 24px rgba(4,5,49,0.10)",
        "card-hover":   "0 12px 40px rgba(4,5,49,0.18)",
        glow:           "0 0 32px rgba(56,204,237,0.25)",
        "glow-ocean":   "0 0 32px rgba(0,121,255,0.30)",
      },
      borderRadius: {
        DEFAULT: "var(--radius-ui)",
        sm: "var(--radius-ui)",
        md: "var(--radius-ui)",
        lg: "var(--radius-ui)",
        xl: "var(--radius-ui)",
        "2xl": "var(--radius-ui)",
        "3xl": "var(--radius-ui)",
      },
      animation: {
        "fade-up":    "fadeUp 0.7s ease forwards",
        "fade-in":    "fadeIn 0.5s ease forwards",
        "pulse-slow": "pulse 4s cubic-bezier(0.4,0,0.6,1) infinite",
      },
      keyframes: {
        fadeUp: {
          "0%":   { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%":   { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
