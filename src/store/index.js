import Vue from "vue";
import VuexPersist from "vuex-persist";
import Vuex from "vuex";
import user from "./modules/userModule.js";
import mandi from "./modules/mandi"
import articals from "./modules/articals"
Vue.use(Vuex);
const vuexPersist = new VuexPersist({
  storage: window.localStorage
});

export const store = new Vuex.Store({
  // plugins: [vuexPersist.plugin],
  modules: {
    user,
    mandi,
    articals
  }
});
