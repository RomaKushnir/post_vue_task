import axios from "axios";
export default {
  actions: {
    getPosts(ctx, page = 1) {
      axios
        .get(
          `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=10`
        )
        .then((res) => {
          ctx.commit("updatePosts", res.data);
        })
        .catch((error) => console.log(error));
      // console.log("axios");
      // console.log("context", ctx);
    },
  },
  mutations: {
    updatePosts(state, newPosts) {
      //відображення лише постів з сервера
      state.posts = newPosts;
      //відображення постів з сервера + створені нові пости із Store модуля form
      // state.posts = [...this.getters.allCreatedPosts, ...newPosts];
    },
    removePost(state, id) {
      state.posts = state.posts.filter((el) => el.id !== id);
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
