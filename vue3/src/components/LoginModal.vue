<template>
  <div v-show="isLoginOpen">
    <section
        @click="close"
        class="h-screen w-screen bg-gray-500 fixed top-0 opacity-50 z-20">

    </section>
    <div class="absolute inset-0">
      <div class="flex h-full">
        <div class="m-auto bg-white p-2 rounded shadow z-30 w-1/3">
          <div class="p-2 border">
            <h1 class="text-xl text-center">Login</h1>
            <section class="my-5 text-center">
              <button class="border px-2 rounded">Login With Google</button>
            </section>
            <form class="p-2 my-2" @submit.prevent="submit">
              <div class="my-4">
                <label for="id">Email or Username</label>
                <input
                    v-model="email" type="text" id="id" class="rounded shadow p-2 w-full"
                    placeholder="Enter your email or username" ref="email">
              </div>
              <div class="my-4">
                <label for="password">Password</label>
                <input
                    v-model="password" type="password" id="password" class="rounded shadow p-2 w-full"
                    placeholder="Enter your password">
              </div>
              <div class="my-4">
                <button
                    type="submit" class="w-full rounded shadow-md bg-gradient-to-r from-red-800 to-pink-800 text-white">
                  <span v-if="!isLoading">Login</span>
                  <span v-else>Loading...</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from '@/utilities/firebase'

export default {
  computed: {
    isLoginOpen() {
      return this.$store.state.isLoginOpen
    }
  },
  data() {
    return {
      email: 'hyuns@naver.com',
      password: '123456',
      isLoading: false
    }
  },
  mounted() {
    this.$refs.email.focus()
  },
  methods: {
    submit() {
      this.isLoading = true
      firebase.auth().signInWithEmailAndPassword(this.email, this.password)
          .then((user) => {
            console.log(user)
            this.isLoading = false
            this.close()
          })
          .catch((error) => {
            console.log(error)
            this.isLoading = false
          })
    },
    close() {
      //this.$emit('close-login')
      this.$store.commit('setLoginModal', false)
    },
  }
}
</script>

<style scoped></style>
