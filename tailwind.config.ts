import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}", "./pages/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          teal: "#2C7A7B",
          orange: "#F6AD55",
          dark: "#1A202C",
          light: "#EDF2F7"
        }
      },
      boxShadow: {
        soft: "0 8px 24px rgba(44, 122, 123, 0.15)"
      },
      borderRadius: {
        xl: "12px"
      }
    }
  },
  plugins: []
};

export default config;
