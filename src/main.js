import Vue from "vue";
import App from "./App.vue";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(fas);
import "bootstrap/dist/css/bootstrap.min.css";

Vue.config.productionTip = false;
Vue.component("fa", FontAwesomeIcon);

new Vue({
  render: (h) => h(App),
}).$mount("#app");
