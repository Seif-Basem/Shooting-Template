import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// to change the tap title depending on which page you are in
import { createHead } from "@vueuse/head";
// bootstrap
import "bootstrap/dist/css/bootstrap.css";
// aos animation library
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init({
  duration: 1500,
});

// Create head manager for handling meta information
const head = createHead();

createApp(App).use(store).use(head).use(router).mount("#app");

// bootstrap
import "bootstrap/dist/js/bootstrap.js";
