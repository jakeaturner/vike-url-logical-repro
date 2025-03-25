import path from "path";
import md from "unplugin-vue-markdown/vite";
import vue from "@vitejs/plugin-vue";
import { defineConfig } from "vite";
import vike from "vike/plugin";

export default defineConfig({
  plugins: [
    vike({}),
    vue({
      include: [/\.vue$/, /\.md$/],
    }),
    md({}),
  ],
  resolve: {
    alias: {
      include: path.resolve(__dirname, "locales/**"),
      "@locales": path.join(__dirname, "locales"),
    },
  },
  build: {
    target: "es2022",
  },
});
