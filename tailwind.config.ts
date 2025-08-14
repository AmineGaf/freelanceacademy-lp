import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/content/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/animations/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sora: ["var(--font-sora)", "sans-serif"],
        gedinarone: ["var(--font-gedinarone)", "sans-serif"],
      },
      colors: {
        background: "#02070D",
        "black-w0": "#101636",
        "black-w1": "#050C15",
        blue: "#0057FF",
        "blue-w1": "#012E63",
        "blue-w2": "#076DEC",
        "blue-w3": "#2749A2",
        "dark-blue": "#011E87",
        grey: "#9EA3B7",
        "grey-w1": "#C2CAD6",
        "light-blue-w1": "#BBCDE8",
        "green-w0": "#00FF00",
      },
      backgroundImage: {
        "progress-linear":
          "linear-gradient(131deg,rgba(255, 255, 255, 0.08) 26.91%,rgba(7, 109, 236, 0.6) 73.09%)",
        "progress-highlight":
          "linear-gradient(180deg,rgba(255, 255, 255, 0) 0%,rgba(255, 255, 255, 0.16) 50%,rgba(255, 255, 255, 0) 100%)",
        "gradient-a":
          "linear-gradient(to bottom, rgba(246,246,246,0.965) 0%, rgba(170,170,170,0.667) 100%)",
        "linear-stroke":
          "linear-gradient(to bottom, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 100%)",
        "linear-blur":
          "linear-gradient(to bottom, rgba(222,45,45,0.871) 0%, rgba(222,45,45,0.871) 100%)",
        "linear-border":
          "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,.25) 49%, rgba(255,255,255,0) 100%);",
        "radical-button":
          "radial-gradient(56.23% 69.25% at 49.73% 50%, rgba(1, 14, 61, 0.13) 0%, rgba(0, 91, 227, 0.70) 100%);",
        "section-container":
          "linear-gradient(180deg, rgba(255, 255, 255, 0.04) 0%, rgba(255, 255, 255, 0.00) 100%)",
        "small-icon":
          "radial-gradient(50% 50% at 50% 50%, #101636 0%, #161F4F 100%)",
        text: "linear-gradient(180deg, #FFF 26.16%, #7F85BB 106.98%)",
        "feature-card":
          "linear-gradient(180deg, #151C2F 0%, rgba(21, 28, 47, 0.00) 100%)",
        "testimony-text":
          "linear-gradient(138deg, #3A84F2 7.9%, #97C1FF 51.81%, #3A84F2 91.72%)",
        price:
          "linear-gradient(183deg, #FFF 3.4%, #BBCDE8 49.4%, #9CB2FF 93.46%)",
        "pricing-star":
          "radial-gradient(50% 50% at 50% 50%, #061023 0%, #16264F 100%)",
      },
      boxShadow: {
        progress:
          "0px 0px 64px 0px rgba(7, 109, 236, 0.02),0px 0px 32px 0px rgba(7, 109, 236, 0.04),0px 0px 16px 0px rgba(7, 109, 236, 0.08),0px 0px 8px 0px rgba(7, 109, 236, 0.12),0px 0px 4px 0px rgba(7, 109, 236, 0.16),0px 0px 6px 0px rgba(7, 109, 236, 0.24)",
        card: "-8px 8px 0px 0px #242425",
        "border-top": "0px -2px 0px 0px rgba(255, 255, 255, 0.32);",
        "section-border": "0px -4px 0px 0px rgba(1, 46, 99 , .75)",
        guarantee: "0px 5px 20px 0px #101D36 inset;",
        "small-card": "0px -10px 40px 0px #101636 inset",
        "small-icon": "0px 0px 20px 4px rgba(58, 110, 242, 0.16)",
        features:
          "0px 0px 0px 4px rgba(1, 30, 135, 0.16), 0px -10px 40px 0px #101636 inset",
        testimonier: "0px 0px 0px 2px #0057FF",
        pricing:
          "0px 0px 4px 4px rgba(1, 30, 135, 0.25), 0px -10px 40px 0px #101636 inset;",
      },
      fontSize: {
        // Main headings - Large titles
        display: [
          "4rem", // 64px
          {
            lineHeight: "110%",
            fontWeight: 700,
            letterSpacing: "-0.02em",
          },
        ],

        // Section headings - H1, H2
        h1: [
          "3rem", // 48px
          {
            lineHeight: "120%",
            fontWeight: 700,
            letterSpacing: "-0.01em",
          },
        ],
        h2: [
          "2.25rem", // 36px
          {
            lineHeight: "125%",
            fontWeight: 700,
            letterSpacing: "-0.01em",
          },
        ],

        // Subsection headings - H3, H4
        h3: [
          "1.875rem", // 30px
          {
            lineHeight: "130%",
            fontWeight: 600,
            letterSpacing: "-0.005em",
          },
        ],
        h4: [
          "1.5rem", // 24px
          {
            lineHeight: "130%",
            fontWeight: 600,
            letterSpacing: "-0.005em",
          },
        ],

        // Small headings - H5
        h5: [
          "1.25rem", // 20px
          {
            lineHeight: "135%",
            fontWeight: 600,
            letterSpacing: "-0.005em",
          },
        ],

        // Body text
        "body-xl": [
          "1.25rem", // 20px
          {
            lineHeight: "140%",
            fontWeight: 400,
            letterSpacing: "-0.005em",
          },
        ],
        "body-lg": [
          "1.125rem", // 18px
          {
            lineHeight: "145%",
            fontWeight: 400,
            letterSpacing: "-0.005em",
          },
        ],
        body: [
          "1rem", // 16px
          {
            lineHeight: "145%",
            fontWeight: 400,
            letterSpacing: "-0.005em",
          },
        ],
        "body-sm": [
          "0.875rem", // 14px
          {
            lineHeight: "145%",
            fontWeight: 400,
            letterSpacing: "-0.005em",
          },
        ],
      },
      padding: {
        "desk-x": "6rem",
        "tab-x": "4rem",
        "mob-x": "1rem",
        "desk-y": "6rem",
        "tab-y": "3rem",
        "mob-y": "",
      },
    },
  },
  plugins: [],
} satisfies Config;
