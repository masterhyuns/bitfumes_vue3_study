<template>
  <section
      @click="$emit('close-login')"
      class="h-screen w-screen bg-gray-500 fixed top-0 opacity-50 z-20">

  </section>
  <div class="absolute inset-0">
    <div class="flex h-full">
      <div class="m-auto bg-white p-2 rounded shadow z-30 w-1/3">
        <div class="p-2 border">
          <h1 class="text-xl text-center">Login</h1>
          <form class="p-2 my-2" @submit.prevent="submit">
            <div class="my-4">
              <label for="id">Email or Username</label>
              <input
                  v-model="email" type="text" id="id" class="rounded shadow p-2 w-full"
                  placeholder="Enter your email or username">
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
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from '@/utilities/firebase'

export default {
  data() {
    return {
        email: '',
        password: '',
    }
  },
  methods: {
    submit() {

      firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
          .then((user) => {
            console.log(user)
          })
          .catch((error) => {
            console.log(error)
          })
    }
  }
}
</script>

<style scoped></style>
