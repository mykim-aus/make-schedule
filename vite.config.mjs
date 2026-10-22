import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue2";

// Replaces the vue-cli 2 webpack 3 setup that used to live in build/ and config/.
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      // main.js mounts with `template: '<App/>'`, which needs the runtime + compiler build
      vue: "vue/dist/vue.esm.js",
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
    extensions: [".mjs", ".js", ".json", ".vue"],
  },
  server: {
    port: 8080,
  },
});
