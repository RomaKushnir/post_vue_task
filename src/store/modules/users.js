import axios from "axios";
export default {
  actions: {
    getUsers(ctx) {
      axios.get(`https://jsonplaceholder.typicode.com/users`).then((res) => {
        ctx.commit("updateUsers", res.data);
      });
    },
  },
  mutations: {
    updateUsers(state, users) {
      // console.log(users);
      state.users = users;
    },
  },
  state: {
    users: [],
  },
  getters: {
    allUsers(state) {
      return state.users;
    },
  },
};
