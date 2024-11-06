import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use '@/styles/_variables.scss' as *; @use '@/styles/_mixins.scss' as *;`,
      },
    },
  },
  plugins: [vue()],
  build: {
    rollupOptions: {
      external: (id) => /vue-material-design-icons/.test(id),
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@pages": path.resolve(__dirname, "./src/pages"),
      "@components": path.resolve(__dirname, "./src/components"),
      "@layout": path.resolve(__dirname, "./src/layouts"),
      "@styles": path.resolve(__dirname, "./src/styles"),
      "@stores": path.resolve(__dirname, "./src/stores"),
      "@router": path.resolve(__dirname, "./src/routers"),
      "@assets": path.resolve(__dirname, "./src/assets"),
      "@api": path.resolve(__dirname, "./src/api"),
      "@utils": path.resolve(__dirname, "./src/utils"),
    },
  },
});
