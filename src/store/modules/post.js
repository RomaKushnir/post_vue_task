import axios from "axios";

export default {
  actions: {
    getPosts(ctx) {
      console.log("axios");
      axios
        .get("https://jsonplaceholder.typicode.com/posts?_limit=10")
        .then((res) => {
          ctx.commit("updatePosts", res.data);
        });
    },
  },
  mutations: {
    updatePosts(state, posts) {
      state.posts = posts;
    },
  },
  state: {
    posts: [],
  },
  getters: {
    allPosts(state) {
      return state.posts;
    },
  },
};
