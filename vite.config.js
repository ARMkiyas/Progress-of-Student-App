import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import pluginRewriteAll from "vite-plugin-rewrite-all";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      ...pluginRewriteAll(),
    },
  ],
  base: "/",
  server: {
    port: 3000,
  },

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: ["./tests/setup.ts"],
    css: true,
  },
});
