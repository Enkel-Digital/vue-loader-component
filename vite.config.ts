import { defineConfig } from "vite";

import vue from "@vitejs/plugin-vue";
import typescript from "rollup-plugin-typescript2";

// https://vitejs.dev/config/
// https://vitejs.dev/config/#conditional-config
export default defineConfig({
  plugins: [
    vue(),

    // rollup options
    typescript({
      check: false,

      include: ["src/**/*", "src/**/*.vue"],

      // Files for this plugin to ignore
      exclude: ["vite.config.ts"],
    }),
  ],

  build: {
    // Using index.ts as the entry point of the library and only produce a ESM output
    lib: {
      entry: "./src/index.ts",
      formats: ["es"],
    },

    // Do not bundle the entire VueJS framework into the library output by treating it as an external dependency
    rollupOptions: { external: ["vue"] },
  },
});
