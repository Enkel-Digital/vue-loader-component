import type { App } from "vue";

import Loader from "./Loader.vue";

export default {
  install(app: App) {
    app.component("Loader", Loader);
  },
};

// Named export for users to import the component from this entry point file,
// So that they can explicitly define the component import when using inside their SFCs,
// instead of injecting this as a global component available to the entire app.
export { Loader };
