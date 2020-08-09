<template>
  <div class="container">
    <div class="modal-overlay">
      <div class="modal-body"></div>
    </div>
    <h2>Users table</h2>
    <UserTable />
  </div>
</template>

<script>
import UserTable from "@/components/UserTable.vue";
export default {
  components: {
    UserTable
  }
};
</script>