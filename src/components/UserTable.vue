<template>
  <div>
    <modal v-if="showModal" @close-modal="showModal = false">
      <p v-for="(el, i) in this.userInfo" :key="i">{{el}}</p>
    </modal>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">id</th>
          <th scope="col">name</th>
          <th scope="col">email</th>
          <th scope="col">website</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in allUsers" :key="user.id">
          <td>{{user.id}}</td>
          <td>
            <div class="table-cell-wrap">
              <span>{{user.name}}</span>
              <button @click="getUserInfo(user.company)">info</button>
            </div>
          </td>
          <td>{{user.email}}</td>
          <td>{{user.website}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import Modal from "@/components/Modal.vue";
import { mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {
      showModal: false,
      userInfo: {}
    };
  },
  components: {
    Modal
  },
  computed: {
    ...mapGetters(["allUsers"])
  },
  methods: {
    ...mapActions(["getUsers"]),
    getUserInfo(item) {
      this.showModal = true;
      this.userInfo = item;
      // console.log("this", this);
      // console.log("local data", this.userInfo);
      // console.log("user company", item);
    }
  },
  mounted() {
    this.getUsers();
  }
};
</script>

<style scoped>
table {
  border: 1px solid black;
  border-collapse: collapse;
  width: 100%;
}
th {
  font-size: 1.2rem;
}
th,
td {
  border: 1px solid black;
  padding: 5px;
}
.table-cell-wrap {
  display: flex;
  justify-content: space-between;
}
</style>