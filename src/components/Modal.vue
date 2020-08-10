<template>
  <div class="modal-overlay">
    <div class="modal-body">
      <button class="modal-close" @click="$emit('close-modal')">&times;</button>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    // console.log("this", this);
  }
};
</script>

<style scoped>
.modal-overlay {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.4);
}

.modal-body {
  position: relative;
  width: 350px;
  min-height: 50px;
  background-color: white;
  border-radius: 5px;
  padding: 15px;
}

.modal-close {
  position: absolute;
  top: -40px;
  right: -40px;
  font-size: 3rem;
  color: white;
  background-color: transparent;
  border: none;
  outline: none;
}

p {
  margin: 5px 0;
}
</style>

