import type { App } from "vue";

import Loader from "./Loader.vue";

export default {
  install(app: App) {
    app.component("Loader", Loader);
  },
};
