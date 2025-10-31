import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [["babel-plugin-react-compiler"]],
      },
    }),
    // Tailwind is handled via PostCSS (`postcss.config.cjs`) so the vite-specific plugin is not required here.
  ],
});
