// import { reactRouter } from "@react-router/dev/vite";
import { resolve } from "path";
import { defineConfig } from "vite";

import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [tailwindcss(), react(), tsconfigPaths()],
  server: {
    port: 3000,
    strictPort: true,
  },
  resolve: {
    alias: [{ find: "@/", replacement: resolve(__dirname, "./") }],
  },
});
