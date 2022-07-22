import Vue from "vue";
//import VueResource from 'vue-resource';
import VueAxios from "vue-axios";
import Vuelidate from "vuelidate";
import App from "./App.vue";
import router from "./router";
//import axios from 'axios';
import { securedAxiosInstance, plainAxiosInstance } from "./services/index";
import Multiselect from "vue-multiselect";
import "@/assets/css/tailwind.css";

Vue.config.productionTip = false;

Vue.use(VueAxios, {
  secure: securedAxiosInstance,
  plain: plainAxiosInstance,
});
Vue.use(Vuelidate);
//Vue.use(VueResource);
//Vue.prototype.$http = axios;
// register globally
Vue.component("multiselect", Multiselect);

new Vue({
  router,
  securedAxiosInstance,
  plainAxiosInstance,
  render: (h) => h(App),
}).$mount("#app");
