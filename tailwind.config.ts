// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",   // App Router pages
    "./components/**/*.{js,ts,jsx,tsx}", // shadcn/ui & your components
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

export default config;
