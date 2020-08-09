import Vue from "vue";
import Vuex from "vuex";
import posts from "./modules/post";
import pagination from "./modules/pagination";
import form from "./modules/form";
import users from "./modules/users";

Vue.use(Vuex);
// console.log(Vuex);

export default new Vuex.Store({
  modules: {
    posts,
    pagination,
    form,
    users,
  },
});
