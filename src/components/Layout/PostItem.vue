<template>
  <div class="post-item">
    <p>
      <!-- <span>{{index + 1}}</span> -->
      <span>{{post.title}}</span>
    </p>
    <p>{{post.body}}</p>
    <!-- <button v-on:click="$emit('remove-post', post.id)">видалити</button> -->
  </div>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true
    },
    index: Number
  }
};
</script>

<style scoped>
.post-item {
  flex-basis: 47%;
  /* display: flex;
  justify-content: center;
  align-items: center; */
  width: 100%;
  box-sizing: border-box;
  padding: 20px;
  margin-bottom: 10px;
  border: 1px solid black;
  border-radius: 5px;
}
span {
  font-size: 1.2rem;
}
button {
  margin-left: 20px;
}
</style>