export default {
  mutations: {
    changePage(state, page) {
      state.page = page;
    },
  },
  state: { page: 1 },
  getters: {
    currentPage(state) {
      return state.page;
    },
  },
};
