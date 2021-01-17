<template>
  <div class="m-auto">
    <h1 class="text-2xl text-center">Dc Heroes {{ heroesCount }}</h1>
    <div v-show="false">

<!--      <h2>{{ fullname }}</h2>-->
      <p>{{ randC }}</p>
      <p>{{ randC }}</p>
      <p>{{ randM() }}</p>
      <p>{{ randM() }}</p>
    </div>
    <ul>
      <li
          class="flex justify-between"
          v-for="(hero, index) in dcHeroes"
          :key="hero.name"
      >
        <div>
          {{ hero.name }}
        </div>
        <button @click="removeHero(index)">X</button>
      </li>
    </ul>
    <form class="mt-10" @submit.prevent="addHero">
      <input
          class="border rounded-lg"
          type="text"
          v-model="newHero"
          placeholder="Type Hero Name Here"
          ref="newHeroRef"
      />
      <button
          class="border rounded bg-gradient-to-r from-red-700 to-pink-500 text-white"
          type="submit"
      >
        Add Hero
      </button>
    </form>
<!--    <button @click="setFullName">set full name</button>-->
    <!--  <input type="text" v-model.number="hero1" />
    <input type="text" v-model.trim.lazy="hero2" />
    <input type="text" v-model.trim="hero3" />-->
  </div>
</template>

<script>
import { computed, onMounted, ref } from 'vue'

export default {
  setup() {
    const newHeroRef = ref('')
    const newHero = ref('')
    const dcHeroes = ref([

      { name: 'SuperGirl' },
      { name: 'Flash' },
      { name: 'Batman' },
      { name: 'Arrow' },
      { name: 'SuperMan' },
    ]);

    function removeHero(idx) {
      // this.dcHeroes.splice(index, 1);
      // this.dcHeroes = this.dcHeroes.filter((hero) => hero.name != name);
      dcHeroes.value = dcHeroes.value.filter((hero, index) => index != idx)
    }

    function addHero() {
      if (newHero.value !== '') {
        //this.dcHeroes.push({ name: this.newHero });
        dcHeroes.value.unshift({ name: newHero.value })
        newHero.value = ''
      }
    }

    function randM() {
      return Math.random()
    }

    const heroesCount = computed({
      get: () => dcHeroes.value.length,
    })

    const randC = computed(() => {
      return dcHeroes.value.length * Math.random()
    })

    onMounted(() => {
      newHeroRef.value.focus()
    })

    return {
      dcHeroes, newHero, removeHero, addHero, randC, newHeroRef, heroesCount, randM
    }
  },
  /*
    computed: {
      heroesCount() {
        return this.dcHeroes.length;
      },
      randC() {
        return this.dcHeroes.length * Math.random();
      },
      fullname: {
        get() {
          return `Full name is ${this.fname} ${this.lname}`;
        },
        set(fullname) {
          const values = fullname.split(" ");
          this.fname = values[0];
          this.lname = values[1];
        },
      },
    },
    mounted() {
      this.$refs.newHeroRef.focus()
    },
    methods: {
      addHero() {
        if (this.newHero !== "") {
          //this.dcHeroes.push({ name: this.newHero });
          this.dcHeroes.unshift({ name: this.newHero });
          this.newHero = "";
        }
      },
      randM() {
        return Math.random();
      },
      setFullName() {
        this.fullname = "BBBB XXXX";
      },
      removeHero(idx) {
        // this.dcHeroes.splice(index, 1);
        // this.dcHeroes = this.dcHeroes.filter((hero) => hero.name != name);
        this.dcHeroes = this.dcHeroes.filter((hero, index) => index != idx);
      },
    },
    data() {
      return {
        newHero: "",
        fname: "SSS",
        lname: "TTTT",
        dcHeroes: [{ name: "A" }, { name: "B" }, { name: "C" }, { name: "D" }],
      };
    },*/
}
</script>

<style scoped></style>
