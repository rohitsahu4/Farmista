// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";
import {
  store
} from "./store";
import {firebase,db} from "@/scripts/firebase";
import AlertCmp from "./components/Shared/Alert.vue";
import divider from "./components/Shared/divider.vue";
import signout from "./components/Shared/signedout.vue";
Vue.use(Vuetify,{theme:{
  primary: "#E27D5F",
  secondary: "#E8A87C",
  accent: "#C38D9A",
  error: "#40B3A2",
  warning: "#40B3A2",
  info: "#9c27b0",
  success: "#8bc34a"

  }
});
Vue.component("app-alert", AlertCmp);
Vue.component("Divider", divider);
Vue.component('signedout', signout);
Vue.config.productionTip = false;
/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  store,
  components: {
    App
  },
  template: "<App/>"
});
