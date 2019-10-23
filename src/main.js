import Vue from "vue";
import App from "./App.vue";
import router from "./router/router";
import {library} from "@fortawesome/fontawesome-svg-core";

import{faTrash} from '@fortawesome/free-solid-svg-icons';
import{FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'

library.add(faTrash);

Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
