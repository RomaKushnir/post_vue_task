<template>
  <div id="app">
    <NavBar />
    <router-view></router-view>
    <!-- <PostAddNew /> -->
    <!-- <PostList v-bind:posts="allPosts" v-on:remove-post="removePost" /> -->
    <!-- <PostList v-bind:posts="allPosts" /> -->
  </div>
</template>

<script>
// import PostAddNew from "@/components/Layout/PostAddNew.vue";
// import PostList from "@/components/Layout/PostList.vue";
// import Vuex from "vuex";
import NavBar from "./components/Header/NavBar";

export default {
  name: "app",
  components: {
    NavBar
  },
  // computed: Vuex.mapGetters(["allPosts"]),
  // methods: Vuex.mapActions(["getPosts"]),
  // computed: {
  //   allPosts() {
  //     console.log(this.$store);
  //     return this.$store.getters.allPosts;
  //   }
  // },
  // methods: {
  // removePost(id) {
  //   // console.log(id);
  //   this.posts = this.posts.filter(el => el.id !== id);
  // }
  // },
  mounted() {
    this.$store.dispatch("getPosts");
  }
};
</script>

<style>
#app {
  text-align: center;
}
</style>
