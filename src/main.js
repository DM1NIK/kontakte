import Vue from "vue";
import App from "./App.vue";
import Axios from "axios";
import VueAxios from "vue-axios";
import router from "./router/router";
import {library} from "@fortawesome/fontawesome-svg-core";
import VuejsDialog from 'vuejs-dialog';
import 'vuejs-dialog/dist/vuejs-dialog.min.css';
import{faTrash} from '@fortawesome/free-solid-svg-icons';
import{FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'


Vue.use(VuejsDialog);

library.add(faTrash);

Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
Vue.use(VueAxios, Axios);