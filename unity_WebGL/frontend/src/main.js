import Vue from "vue";
import App from "./App";
import router from "./router/index";
import store from "./store";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import VueSimpleAlert from "vue-simple-alert";
import VueSwal from 'vue-swal'


Vue.use(VueSwal)
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.config.productionTip = false;
Vue.use(VueSimpleAlert);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
