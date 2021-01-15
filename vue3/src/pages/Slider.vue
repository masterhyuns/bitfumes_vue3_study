<template>
  <div class="flex flex-wrap w-full relative">
    <div class="absolute w-full" v-for="(color, index) in sliders" :key="color">
      <transition name="fade">
        <div
          v-if="currentSlider === index"
          :class="color"
          style="height: 350px"
        ></div>
      </transition>
    </div>
    <div class="absolute w-full" style="height: 340px">
      <div class="absolute bottom-0 w-full flex justify-center">
        <div
          @click="makeActive(index)"
          v-for="(item, index) in sliders"
          :key="item"
          :class="currentSlider === index ? 'bg-gray-700' : 'bg-gray-300'"
          class="w-4 h-4 rounded-full mx-2 cursor-pointer shadow-md"
        ></div>
      </div>
    </div>

    <div class="my-10 flex w-full">
      <div class="m-auto">
        <transition name="fade">
          <h1 v-if="isTitleShowing">Slider Carousel</h1>
        </transition>
        <button
          class="px-2 rounded border"
          @click="isTitleShowing = !isTitleShowing"
        >
          Toggle Text
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Slider",
  data() {
    return {
      currentSlider: 1,
      sliders: ["bg-blue-600", "bg-yellow-600", "bg-pink-600"],
      interval: "",
      isTitleShowing: true,
    };
  },
  mounted() {
    this.interval = setInterval(() => {
      console.log("i am chaing current slide : " + this.currentSlider);
      if (this.currentSlider === 2) {
        this.currentSlider = 0;
      } else {
        this.currentSlider++;
      }
    }, 2000);
  },
  beforeUnmount() {
    clearInterval(this.interval);
  },
  methods: {
    makeActive(index) {
      this.currentSlider = index;
    },
  },
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: all 1s ease;
}

.fade-enter-from {
  opacity: 0;
  transform: translateX(-100%);
}

.fade-leave-to {
  opacity: 0;
  transform: translateX(100%);
}
</style>
