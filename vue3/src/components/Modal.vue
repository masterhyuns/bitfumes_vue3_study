<template>
  <section
      @click="close"
      class="h-screen w-screen bg-gray-500 fixed top-0 left-0 opacity-50 z-20">
  </section>

  <div class="absolute inset-0">
    <div class="flex h-full">
      <div class="m-auto bg-white p-2 rounded shadow z-30 w-1/3">
        <div class="p-2 border">
          <h1 class="text-2xl">
            <slot name="title">Provide Some Data Here</slot>
          </h1>
          <main>
            <slot name="body"></slot>
          </main>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  setup(_, { emit }){
    function close() {
      emit('close')
    }
    return {
      close
    }
  }
}
</script>

<style scoped>

</style>