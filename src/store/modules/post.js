import axios from "axios";

export default {
  actions: {
    getPosts(ctx, page = 1) {
      axios
        .get(`https://jsonplaceholder.typicode.com/posts?_page=${page}`)
        .then((res) => {
          ctx.commit("updatePosts", res.data);
        });
      // console.log("axios");
      // console.log("context", ctx);
    },
  },
  mutations: {
    updatePosts(state, newPosts) {
      state.posts = newPosts;
    },
    removePost(state, id) {
      console.log(id);
      return (state.posts = state.posts.filter((el) => el.id !== id));
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
