import type { App } from "vue";

import FullscreenLoader from "./FullscreenLoader.vue";

export const GlobalInstaller = {
  install(app: App) {
    app.component("FullscreenLoader", FullscreenLoader);
  },
};
