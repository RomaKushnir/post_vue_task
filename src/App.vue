<template>
  <div id="app">
    <NavBar />
    <router-view />
  </div>
</template>

<script>
import NavBar from "./components/NavBar";

export default {
  name: "app",
  components: {
    NavBar
  },
  mounted() {
    // this.$store.dispatch("getPosts");
  }
};
</script>

<style>
.container {
  max-width: 800px;
  margin: 0 auto;
}

h1,
h2 {
  font-size: 2rem;
  text-align: center;
  margin: 20px 0;
}

h3 {
  font-size: 1.3rem;
  margin: 0;
}

button {
  cursor: pointer;
}
</style>
