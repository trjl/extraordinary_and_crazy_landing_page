import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import "bootstrap/dist/css/bootstrap.css"
import "./assets/bootstrap-icons/bootstrap-icons.css"
import "./assets/css/style.css"
import "@splidejs/splide/dist/css/splide.min.css";



const app = createApp(App);

app.config.globalProperties.site = require('./site.json');

app.use(router).mount("#app");



// import "./assets/js/landing.js"


