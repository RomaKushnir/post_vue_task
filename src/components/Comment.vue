<template>
  <div class="comment-item">
    <p>{{comment.name}}</p>
    <p>{{comment.email}}</p>
    <p>{{comment.body}}</p>
  </div>
</template>

<script>
export default {
  props: {
    comment: {
      type: Object,
      required: true
    }
  }
};
</script>

<style scoped>
.comment-item {
  width: 80%;
  border: 1px solid black;
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 10px;
}
p {
  margin: 0 0 10px;
}
</style>