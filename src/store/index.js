import Vue from "vue";
import Vuex from "vuex";
import post from "./modules/post";

Vue.use(Vuex);

// console.log(Vuex);

export default new Vuex.Store({
  modules: {
    post,
  },
});
