<template>
  <div class="container">
    <h2>Post {{id}}</h2>
    <div class="show-post-wrap">
      <h5>{{post.title}}</h5>
      <p>{{post.body}}</p>
    </div>
    <div class="comment-item-wrap">
      <Comment v-for="comment of comments" v-bind:comment="comment" :key="comment.id" />
    </div>
  </div>
</template>

<script>
import Comment from "@/components/Comment.vue";
import { mapGetters } from "vuex";
import axios from "axios";
export default {
  data() {
    return {
      id: this.$route.params.postId,
      post: {},
      comments: []
    };
  },
  components: {
    Comment
  },
  computed: mapGetters(["allPosts"]),
  methods: {
    findPost() {
      this.post = this.allPosts.reduce((post, el) => {
        if (el.id === +this.id) {
          post = el;
        }
        return post;
      }, {});
    },
    getComments(id) {
      axios
        .get("https://jsonplaceholder.typicode.com/comments?postId=" + id)
        .then(res => (this.comments = res.data));
    }
  },
  mounted() {
    this.findPost();
    this.getComments(this.id);
  }
};
</script>

<style scoped>
h5 {
  font-size: 2rem;
}

.comment-item-wrap {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-top: 40px;
}
</style>