import Vue from 'vue';
import App from './App.vue';
import router from './router';
import { securedAxiosInstance, plainAxiosInstance } from './services/index';
import '@/assets/css/tailwind.css';

Vue.config.productionTip = false;

Vue.use({
  secure: securedAxiosInstance,
  plain: plainAxiosInstance,
});

new Vue({
  router,
  securedAxiosInstance,
  plainAxiosInstance,
  render: (h) => h(App),
}).$mount('#app');
