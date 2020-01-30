import Vue from "vue";
import App from "./App.vue";
import axios from 'axios';
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import router from "./router";
import store from "./store";
import Middle from "./components/Middle.vue";
import body from "./components/body.vue";
import floot from "./components/floot.vue";
import VueAwesomeSwiper from "vue-awesome-swiper";

// require styles
import "swiper/dist/css/swiper.css";

Vue.use(VueAwesomeSwiper);

Vue.prototype.http=axios
Vue.use(ElementUI);
Vue.component("Middle-app", Middle);
Vue.component("app-body", body);
Vue.component("app-floot", floot);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
