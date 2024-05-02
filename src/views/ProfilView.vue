<template>


  <link href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:ital,wght@0,300;0,400;1,600&display=swap" rel="stylesheet" />

  <center>
    <div class="m-10 max-w-sm">
      <div class="rounded-lg border bg-white px-4 pt-8 pb-10 shadow-lg">
        <div class="relative mx-auto w-36 rounded-full">
          <span class="absolute right-0 m-3 h-3 w-3 rounded-full bg-green-500 ring-2 ring-green-300 ring-offset-2"></span>
          <img class="mx-auto h-auto w-full rounded-full" src="https://cdn.kibrispdr.org/data/221/foto-profil-kosong-5.png" alt="" />
        </div>
        <h1 class="my-1 text-center text-xl font-bold leading-8 text-gray-900"></h1>
        <ul class="mt-3 divide-y rounded bg-gray-100 py-2 px-3 text-gray-600 shadow-sm hover:text-gray-700 hover:shadow">
          <li class="flex items-center py-3 text-sm">
            <span>Nama </span>
            <span class="ml-auto">{{ getUser.name }}</span>
          </li>
          <li class="flex items-center py-3 text-sm">
            <span>Email </span>
            <span class="ml-auto">{{ getUser.email }}</span>
          </li>
        </ul>
        <div class="flex justify-center mt-4">
          <button @click="handleLogout" class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2">Logout</button>
        </div>
      </div>
    </div>
  </center>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  computed: {
    ...mapGetters('user', ['getUser']),
  },
  methods: {
    ...mapActions('user', ['fetchUseme']),
    ...mapActions('auth', ['logout']),
    async handleLogout() {
      await this.logout();
      // Redirect to login page after logout
      this.$router.push('/login');
    },
  },
  created() {
    this.fetchUseme();
  },
}
</script>
