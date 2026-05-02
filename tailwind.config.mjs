/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx,vue,svelte}"],
  theme: {
    extend: {
      colors: {
        metric: "#0055ff",
        ink: "#1f2937",
        muted: "#6b7280",
        line: "#e5e7eb"
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "ui-monospace", "SFMono-Regular", "monospace"]
      },
      boxShadow: {
        card: "0 10px 28px -18px rgba(17, 24, 39, 0.45)"
      }
    }
  },
  plugins: []
};
