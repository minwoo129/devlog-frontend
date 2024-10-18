import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      screens: {
        sm: { max: "767px" },
        md: { min: "768px", max: "991px" },
        lg: { min: "992px", max: "1199px" },
        xl: { min: "1200px" },
        mobile: { max: "480px" },
        tablet: { min: "481px", max: "768px" },
        laptop: { min: "769px", max: "1279px" },
        desktop: { min: "1280px" },
      },
      fontFamily: {
        "nanumneo-l": ["NanumGothicNeo-Light"],
        "nanumneo-r": ["NanumGothicNeo-Regular"],
        "nanumneo-b": ["NanumGothicNeo-Bold"],
        "nanumneo-eb": ["NanumGothicNeo-ExtraBold"],
        "nanumneo-h": ["NanumGothicNeo-Heavy"],
      },
    },
    aspectRatio: {
      video: "16 / 9",
      1: "1",
      2: "2",
      3: "3",
      4: "4",
      5: "5",
      6: "6",
      7: "7",
      8: "8",
      9: "9",
      10: "10",
      11: "11",
      12: "12",
      13: "13",
      14: "14",
      15: "15",
      16: "16",
    },
  },
  plugins: [
    require("tailwind-scrollbar-hide"),
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio"),
  ],
};
export default config;
