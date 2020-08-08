<template>
  <div class="post-item">
    <p>{{post.title}}</p>
    <p>{{post.body}}</p>
    <div class="button-wrap">
      <button class="btn-edit" v-on:click="$emit('edit-post', post.id)">edit</button>
      <button class="btn-remove" v-on:click="$emit('remove-post', post.id)">remove</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true
    }
  }
};
</script>

<style scoped>
.post-item {
  flex-basis: 48%;
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
p {
  font-size: 1.2rem;
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
  cursor: pointer;
  border: none;
  outline: none;
}
.btn-edit {
  background-color: lightseagreen;
}
.btn-remove {
  background-color: red;
}
</style>