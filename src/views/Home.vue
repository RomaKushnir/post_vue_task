<template>
  <!-- <PostList v-bind:allPosts="allPosts" /> -->
  <PostList />
</template>

<script>
// v-on:remove-post="removePost"
// @ is an alias to /src
// import Vuex from "vuex";
import PostList from "@/components/Layout/PostList.vue";
export default {
  components: {
    PostList
  }
  // computed: Vuex.mapGetters(["allPosts"]),
  // methods: Vuex.mapActions(["getPosts"])
};
</script>
