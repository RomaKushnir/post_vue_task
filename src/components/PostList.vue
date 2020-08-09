<template>
  <div>
    <h1>Post list</h1>
    <div class="posts-wrap" v-if="allPosts.length">
      <PostItem
        v-for="post of allPosts"
        v-bind:post="post"
        v-on:remove-post="removePost"
        :key="post.id"
      />
    </div>
    <p class="no-post-plug" v-else>no posts</p>
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
.posts-wrap {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 15px;
}

.no-post-plug {
  text-align: center;
  margin: 100px;
  font-size: 2rem;
  text-transform: uppercase;
}
</style>