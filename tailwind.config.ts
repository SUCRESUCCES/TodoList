import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx,js,jsx}"],
  darkMode: "media",
  theme: {
    extend: {
      colors: {
        background: "#ffffff",
        foreground: "#171717",
        "background-dark": "#0a0a0a",
        "foreground-dark": "#ededed",
      },
      // borderRadius: {
      //   r5: "5px",
      //   r6: "6px",
      // },
      animation: {
        "fade-in": "fadeIn 0.4s ease-out",
      },
      keyframe: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      fontFamily: {
        sans: ["Geist Sans", "Arial", "sans-serif"],
        mono: ["Geist Mono", "monospace"],
      },
    },
  },
  plugins: [],
};

export default config;
