<template>
  <div class="post-item post-item-wrap">
    <div class="post-item-body">
      <router-link v-bind:to="'/post/' + post.id">
        <h3 class="post-header">{{post.title}}</h3>
      </router-link>
      <p class="post-text">{{post.body}}</p>
    </div>
    <!-- <div class="button-wrap"> -->
    <!-- <button class="btn-remove" v-on:click="$emit('remove-post', post.id)">remove</button> -->
    <!-- <button class="btn-remove" @click="removePost(post.id)">remove</button> -->
    <!-- </div> -->
  </div>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      id: this.$route.params.postId
    };
  },
  methods: {
    removePost(id) {
      // this.$emit("remove-post", this.post.id);
      this.$emit("remove-post", id);
    },
    created() {
      this.$route = this.post.id;
    }
  }
};
</script>

<style scoped>
.post-item-wrap {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.post-item {
  flex-basis: 48%;
  width: 100%;
  min-height: 200px;
  box-sizing: border-box;
  padding: 15px;
  margin-bottom: 10px;
  border: 1px solid black;
  border-radius: 5px;
}

.post-header {
  font-size: 1.2rem;
  margin-bottom: 15px;
}
.post-header::first-letter {
  text-transform: capitalize;
}

.post-text {
  font-size: 0.9rem;
}

.button-wrap {
  display: flex;
  justify-content: flex-end;
}
button {
  margin-left: 20px;
  padding: 5px 10px;
  color: white;
  border-radius: 5px;
  border: none;
  outline: none;
}
.btn-edit {
  background-color: lightseagreen;
}
.btn-remove {
  background-color: #dc3545;
}
</style>