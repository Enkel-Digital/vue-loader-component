import type { App } from "vue";

import FullscreenLoader from "./FullscreenLoader.vue";

export const GlobalLoaderInstaller = {
  install(app: App) {
    app.component("FullscreenLoader", FullscreenLoader);
  },
};
