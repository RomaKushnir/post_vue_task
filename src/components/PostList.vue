<template>
  <div class="container">
    <h1>post list</h1>
    <div class="posts-wrap">
      <PostItem
        v-for="post of allPosts"
        v-bind:post="post"
        v-on:remove-post="removePost"
        :key="post.id"
      />
    </div>
  </div>
</template>

<script>
import { mapActions, mapMutations, mapGetters } from "vuex";
import PostItem from "./PostItem";

export default {
  name: "PostList",
  components: {
    PostItem
  },
  methods: {
    ...mapActions(["getPosts"]),
    ...mapMutations(["removePost"])
  },
  computed: mapGetters(["allPosts", "currentPage"]),
  mounted() {
    this.getPosts(this.currentPage);
  }
};
</script>

<style scoped>
h1 {
  font-size: 3rem;
}

.posts-wrap {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 15px;
}
</style>