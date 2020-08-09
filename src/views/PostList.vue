<template>
  <div class="container">
    <PostList />
    <Pagination />
  </div>
</template>

<script>
// @ is an alias to /src
import PostList from "@/components/PostList.vue";
import Pagination from "@/components/Pagination.vue";

export default {
  components: {
    PostList,
    Pagination
  }
};
</script>
