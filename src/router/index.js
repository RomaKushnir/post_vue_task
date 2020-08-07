import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
// import NewPost from "../views/NewPost.vue";
// import Users from "../views/Users.vue";
// import PostReviewPage from "@/views/PostReviewPage";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
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
  // {
  //   path: "/postreview",
  //   name: "PostReviewPage",
  //   component: () => import("@/views/PostReviewPage"),
  // },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
