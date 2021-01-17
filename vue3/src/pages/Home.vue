<template>
  <div class="m-auto">
    <h1 class="text-center">Welcome to Vue 3 Full Course</h1>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      state : this.$store.state
    }
  }

};
</script>

<style scoped></style>
