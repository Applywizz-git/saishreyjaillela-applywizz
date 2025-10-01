import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        // Base system colors
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        
        // Premium palette (no blue/purple/violet)
        charcoal: {
          DEFAULT: "hsl(var(--charcoal))",
          foreground: "hsl(var(--charcoal-foreground))",
        },
        ink: {
          DEFAULT: "hsl(var(--ink))",
          foreground: "hsl(var(--ink-foreground))",
        },
        emerald: {
          DEFAULT: "hsl(var(--emerald))",
          foreground: "hsl(var(--emerald-foreground))",
        },
        lime: {
          DEFAULT: "hsl(var(--lime))",
          foreground: "hsl(var(--lime-foreground))",
        },
        amber: {
          DEFAULT: "hsl(var(--amber))",
          foreground: "hsl(var(--amber-foreground))",
        },
        tangerine: {
          DEFAULT: "hsl(var(--tangerine))",
          foreground: "hsl(var(--tangerine-foreground))",
        },
        crimson: {
          DEFAULT: "hsl(var(--crimson))",
          foreground: "hsl(var(--crimson-foreground))",
        },
        warmgray: {
          DEFAULT: "hsl(var(--warmgray))",
          light: "hsl(var(--warmgray-light))",
          foreground: "hsl(var(--warmgray-foreground))",
        },
        
        // System semantic colors
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      backgroundImage: {
        'gradient-premium': 'linear-gradient(135deg, hsl(var(--emerald)) 0%, hsl(var(--lime)) 100%)',
        'gradient-warm': 'linear-gradient(135deg, hsl(var(--amber)) 0%, hsl(var(--tangerine)) 100%)',
        'gradient-danger': 'linear-gradient(135deg, hsl(var(--crimson)) 0%, hsl(var(--tangerine)) 100%)',
        'gradient-dark': 'linear-gradient(135deg, hsl(var(--charcoal)) 0%, hsl(var(--ink)) 100%)',
      },
      boxShadow: {
        'premium': '0 20px 40px -10px hsl(var(--emerald) / 0.3)',
        'warm': '0 20px 40px -10px hsl(var(--amber) / 0.3)',
        'glow': '0 0 30px hsl(var(--emerald) / 0.5)',
        'inner-glow': 'inset 0 2px 10px hsl(var(--emerald) / 0.2)',
      },
      keyframes: {
        // Accordion animations
        "accordion-down": {
          from: { height: "0", opacity: "0" },
          to: { height: "var(--radix-accordion-content-height)", opacity: "1" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)", opacity: "1" },
          to: { height: "0", opacity: "0" },
        },
        
        // Premium animations
        "float-in": {
          "0%": { opacity: "0", transform: "translateY(30px) scale(0.9)" },
          "100%": { opacity: "1", transform: "translateY(0) scale(1)" },
        },
        "slide-up": {
          "0%": { opacity: "0", transform: "translateY(40px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "scale-in": {
          "0%": { opacity: "0", transform: "scale(0.8)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "glow-pulse": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.6" },
        },
        "letter-float": {
          "0%": { opacity: "0", transform: "translateY(100px) rotateX(90deg)" },
          "100%": { opacity: "1", transform: "translateY(0) rotateX(0deg)" },
        },
        "progress-fill": {
          "0%": { width: "0%" },
          "100%": { width: "var(--progress-width)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.3s ease-out",
        "accordion-up": "accordion-up 0.3s ease-out",
        "float-in": "float-in 0.6s ease-out forwards",
        "slide-up": "slide-up 0.4s ease-out forwards",
        "scale-in": "scale-in 0.3s ease-out forwards",
        "fade-in": "fade-in 0.5s ease-out forwards",
        "glow-pulse": "glow-pulse 2s ease-in-out infinite",
        "letter-float": "letter-float 0.8s ease-out forwards",
        "progress-fill": "progress-fill 1.5s ease-out forwards",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    require("@tailwindcss/container-queries"),
  ],
} satisfies Config;
