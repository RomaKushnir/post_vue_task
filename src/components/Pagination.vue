<template>
  <div class="pagination-wrap">
    <button type="button" @click="prevPage">prev</button>
    <p class="current-page">{{currentPage}}</p>
    <button type="button" @click="nextPage">next</button>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from "vuex";
export default {
  methods: {
    ...mapActions(["getPosts"]),
    ...mapMutations(["changePage"]),
    nextPage() {
      const page = this.currentPage + 1;
      if (page <= 10) {
        this.getPosts(page);
        this.changePage(page);
      }
    },
    prevPage() {
      const page = this.currentPage - 1;
      if (page > 0) {
        this.getPosts(page);
        this.changePage(page);
      }
    }
  },
  computed: mapGetters(["currentPage"]),
  mounted() {}
};
</script>

<style scoped>
.pagination-wrap {
  display: flex;
  justify-content: space-around;
  align-items: center;
  max-width: 200px;
  margin: 0 auto 30px;
}
button {
  border: none;
  outline: none;
  background-color: darkgreen;
  color: white;
  padding: 7px 14px;
  border-radius: 5px;
  font-size: 1.1rem;
}
.current-page {
  border-radius: 5px;
  border: 2px solid green;
  padding: 0 15px;
  line-height: 1.3;
  font-size: 1.5rem;
  font-weight: bold;
}
</style>