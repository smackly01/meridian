/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#050D1A",
          900: "#081426",
          800: "#0A1B33",
          700: "#0E2440",
          600: "#14304F",
          500: "#1B3D63",
        },
        gold: {
          300: "#E6C98A",
          400: "#D4AF6A",
          500: "#C9A35C",
          600: "#B08A45",
          700: "#8F6F37",
        },
        mist: {
          50: "#F7F9FB",
          100: "#EEF2F6",
          200: "#DDE4EC",
          300: "#C4CFDC",
          400: "#9AA7B8",
          500: "#748296",
          600: "#556276",
          700: "#3F4A5C",
          800: "#2A3342",
        },
      },
      fontFamily: {
        display: ["Manrope", "system-ui", "sans-serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      maxWidth: {
        container: "80rem",
      },
      letterSpacing: {
        overline: "0.22em",
      },
      boxShadow: {
        card: "0 1px 2px rgba(8,20,38,0.04), 0 8px 24px rgba(8,20,38,0.06)",
        cardhover:
          "0 2px 4px rgba(8,20,38,0.05), 0 16px 40px rgba(8,20,38,0.12)",
        panel: "0 1px 2px rgba(8,20,38,0.05), 0 24px 60px rgba(8,20,38,0.10)",
      },
      transitionTimingFunction: {
        premium: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
};
