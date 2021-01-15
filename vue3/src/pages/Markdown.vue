<template>
  <div class="flex flex-wrap w-full">
    <h1 class="w-full text-center text-3xl my-4">Markdown App</h1>
    <section class="flex m-auto w-10/12 h-screen">
      <article class="w-1/2 border">
        <textarea
          class="w-full h-full resize-none"
          :value="text"
          @input="update"
          ref="markdownTextArea"
        ></textarea>
      </article>
      <article class="w-1/2 border bg-gray-100" v-html="markedText"></article>
    </section>
  </div>
</template>

<script>
import marked from "marked";
import debounce from "@/utilities/mixins/debounce";
export default {
  beforeCreate() {
    console.log("before create");
  },
  created() {
    console.log("created");
  },
  beforeMount() {
    console.log("before mount");
  },
  mounted() {
    console.log("mounted");
    this.$refs.markdownTextArea.focus();
  },
  beforeUnmount() {
    console.log("before unmount");
  },
  unmounted() {
    console.log("unmounted");
  },

  beforeUpdate() {
    console.log("before update");
  },
  updated() {
    console.log("updated");
  },
  mixins: [debounce],
  data() {
    return {
      text: "",
      timeout: null,
    };
  },
  computed: {
    markedText() {
      return marked(this.text);
    },
  },
  methods: {
    update(e) {
      const task = () => (this.text = e.target.value);
      this.debounce(task, 500);
    },
  },
};
</script>

<style scoped></style>
