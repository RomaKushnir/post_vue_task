import Vue from "vue";
import Vuex from "vuex";
import posts from "./modules/post";
import pagination from "./modules/pagination";

Vue.use(Vuex);
// console.log(Vuex);

export default new Vuex.Store({
  modules: {
    posts,
    pagination,
  },
});
