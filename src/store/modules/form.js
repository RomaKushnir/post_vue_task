export default {
  actions: {
    createPost(ctx, post) {
      ctx.commit("updateCreatedPost", { post, ctx });
      // console.log("ctx", ctx);
      // console.log("this", this);
    },
  },
  mutations: {
    updateCreatedPost(state, { post, ctx }) {
      // state.createdPosts = [post, ...state.createdPosts];
      setTimeout(() => {
        ctx.rootState.posts.posts = [post, ...ctx.rootState.posts.posts];
      }, 300);
    },
  },
  // state: {
  //   createdPosts: [],
  // },
  // getters: {
  //   allCreatedPosts(state) {
  //     return state.createdPosts;
  //   },
  // },
};
