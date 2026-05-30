/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Warm dark-orange accent (1970s-leaning terracotta)
        orange: {
          accent: "#BF4B1A",
          deep: "#9E3C13",
          soft: "#F3E3D6",
        },
        // Warm near-black ink
        ink: {
          DEFAULT: "#1C1815",
          soft: "#3A332D",
          muted: "#6B6259",
        },
        // Warm paper surfaces (not pure white)
        paper: {
          DEFAULT: "#FBF9F4",
          warm: "#F5F1E8",
          deep: "#1C1815",
        },
        line: "#E4DDD0",
      },
      fontFamily: {
        heading: ['"DM Sans"', "system-ui", "sans-serif"],
        sans: ['"Inter"', "system-ui", "sans-serif"],
        mono: ['"JetBrains Mono"', "monospace"],
      },
      letterSpacing: {
        tightest: "-0.045em",
        tighter: "-0.03em",
        tight: "-0.02em",
        label: "0.22em",
      },
      maxWidth: {
        "8xl": "90rem",
      },
      keyframes: {
        shimmer: {
          "0%, 100%": { opacity: "0.35" },
          "50%": { opacity: "0.85" },
        },
      },
      animation: {
        shimmer: "shimmer 6s ease-in-out infinite",
      },
      transitionTimingFunction: {
        editorial: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
}
