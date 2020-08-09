import Vue from "vue";
import VueRouter from "vue-router";
import PostList from "../views/PostList.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "PostList",
    component: PostList,
  },
  {
    path: "/newpost",
    name: "NewPost",
    component: () => import("../views/NewPost.vue"),
  },
  {
    path: "/users",
    name: "Users",
    component: () => import("../views/Users.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
