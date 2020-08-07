<template>
  <div>
    <h1>post list</h1>
    <div class="posts-wrap">
      <PostItem v-for="(post, i) of allPosts" v-bind:post="post" v-bind:index="i" :key="post.id" />
    </div>
  </div>
</template>

<script>
// v-on:remove-post="removePost"
import Vuex from "vuex";
import PostItem from "./PostItem";

export default {
  name: "PostList",
  components: {
    PostItem
  },
  // methods: {
  // removePost(id) {
  //   console.log(id);
  //   this.$emit("remove-post", id);
  // }
  // }
  computed: Vuex.mapGetters(["allPosts"]),
  methods: Vuex.mapActions(["getPosts"])
};
// console.log();
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