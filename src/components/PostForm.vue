<template>
  <div class="post-form-wrap">
    <form @submit.prevent="createNewPost">
      <label>
        title:
        <input type="text" v-model.trim="title" />
      </label>
      <label>
        body:
        <textarea v-model.trim="body"></textarea>
      </label>
      <button type="submit">submit</button>
    </form>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      title: "",
      body: ""
    };
  },
  methods: {
    ...mapActions(["createPost"]),
    createNewPost() {
      if (this.title && this.body) {
        const id = Date.now();
        const title = this.title;
        const body = this.body;

        const newPost = {
          id,
          title,
          body
        };
        this.createPost(newPost);
        this.$router.push("/");
      }
    }
  }
};
</script>

<style scoped>
form {
  margin: 0 auto;
  max-width: 350px;
  text-align: left;
}

input,
textarea {
  display: inline-block;
  box-sizing: border-box;
  width: 100%;
  margin-bottom: 15px;
  padding-left: 5px;
}

input {
  line-height: 1.5;
}

textarea {
  resize: none;
  height: 100px;
}

button {
  display: block;
  margin-left: auto;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 6px 15px;
  font-size: 1.1rem;
}
</style>