import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tailwindScrollbar from "tailwind-scrollbar";

export default defineConfig({
  plugins: [
    react(),
    tailwindcss({
      config: {
        content: ["../index.html", "./src/**/*.{js,ts,jsx,tsx}"],
        theme: {
          extend: {
            fontFamily: {
              inter: ["Inter", "sans-serif"],
            },
          },
        },
        plugins: [tailwindScrollbar()],
      },
    }),
  ],
});
