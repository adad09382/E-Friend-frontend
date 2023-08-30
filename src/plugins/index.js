/**
 * plugins/index.js
 *
 * Automatically included in `./src/main.js`
 */

// Plugins
import { loadFonts } from "./webfontloader";
import vuetify from "./vuetify";
import pinia from "../store";
import router from "../router";
import VuetifyUseDialog from "vuetify-use-dialog";
import VueFileAgentNext from "@boindil/vue-file-agent-next";
import "@boindil/vue-file-agent-next/dist/vue-file-agent-next.css";

export function registerPlugins(app) {
  loadFonts();
  // 先在 pinia 獲得使用者的store，再依據state 導向
  app
    .use(vuetify)
    .use(pinia)
    .use(router)
    .use(VuetifyUseDialog)
    .use(VueFileAgentNext);
}