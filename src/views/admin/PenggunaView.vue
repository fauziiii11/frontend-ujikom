<template>
    <link href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:ital,wght@0,300;0,400;1,600&display=swap" rel="stylesheet" />
    <div class="text-gray-900 ml-64 mt-20 p-10">
        <div class="flex items-center justify-between pb-6">
    <div>
      <h2 class="font-semibold text-gray-700">Pengguna FamilyFin</h2>
      
    </div>
    <div class="flex items-center justify-between">
      
    </div>
  </div>
  <div class="overflow-y-hidden rounded-lg border">
    <div class="overflow-x-auto">
      <table class="w-full">
        <thead>
          <tr class="bg-green-600 text-left text-xs font-semibold uppercase tracking-widest text-white">
            <th class="px-5 py-3">Id</th>
            <th class="px-5 py-3">Nama</th>
            <th class="px-6 py-3 text-left">Email</th>
            <th class="px-6 py-3 text-left">Role</th>
            <th class="px-6 py-3 text-left">Actions</th>
            
            
          </tr>
        </thead>
        <tbody class="text-gray-500">
          <tr  v-for="user in getUser" :key="user.id">
            <td class="border-b border-gray-200 bg-white px-5 py-5 text-sm">
              <p class="whitespace-no-wrap">{{user.id}}</p>
            </td>
            <td class="border-b border-gray-200 bg-white px-5 py-5 text-sm">
              <div class="flex items-center">
                
                <div class="ml-3">
                  <p class="whitespace-no-wrap">{{user.name}}</p>
                </div>
              </div>
            </td>
            
            <td class="border-b border-gray-200 bg-white px-5 py-5 text-sm">
              <p class="whitespace-no-wrap">{{ user.email }}</p>
            </td>
            <td class="border-b border-gray-200 bg-white px-5 py-5 text-sm">
              <p class="whitespace-no-wrap">{{user.role}}</p>
            </td>
            <td class="border-b border-gray-200 bg-white px-5 py-5 text-sm">
              <router-link :to="'/edituser/' + user.id" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Edit</router-link>
              <span> | </span>
            <button @click="confirmDelete(user.id)" class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Delete</button>
</td>
          </tr>
          
          
        </tbody>
      </table>
    </div>
    <div class="flex flex-col items-center border-t bg-white px-5 py-5 sm:flex-row sm:justify-between">
      <span class="text-xs text-gray-600 sm:text-sm"> Showing 1 to 5 of 12 Entries </span>
      <div class="mt-2 inline-flex sm:mt-0">
        <button class="mr-2 h-12 w-12 rounded-full border text-sm font-semibold text-gray-600 transition duration-150 hover:bg-gray-100">Prev</button>
        <button class="h-12 w-12 rounded-full border text-sm font-semibold text-gray-600 transition duration-150 hover:bg-gray-100">Next</button>
      </div>
    </div>
  </div>
</div>

</template>
<script>
import { mapGetters, mapActions } from 'vuex';

export default {
    data() {
        return {
            idToDelete: null,
        };
    },
    methods: {
        ...mapActions('user', ["fetchUser", "deletePost"]),
      async confirmDelete(id) {
        this.idToDelete = id;
        if (confirm("apakah anda hapus")) {
          this.deleteItem();
        }
      },
      async deleteItem() {
        try {
          await this.deletePost(this.idToDelete);
          this.idToDelete = null;
          this.fetchUser();
          alert('berhasil');
        } catch(error) {
          console.error(error);
          alert('gagal menghapus')
        }
      },
    },
    computed: {
        ...mapGetters('user', ['getUser'])
    },
    mounted() {
        // Panggil aksi fetchDataMusik ketika komponen dimuat
        this.fetchUser();
    }
};
</script>