import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import VModal from "vue-js-modal";

createApp(App).use(router, VModal).mount("#app");
