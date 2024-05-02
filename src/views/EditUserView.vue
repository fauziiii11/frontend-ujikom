<template>
    <!-- Komponen EditUserView.vue -->
    <link href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:ital,wght@0,300;0,400;1,600&display=swap" rel="stylesheet" />
    <div class="text-gray-900 ml-64 mt-20 p-10">
        <div class="flex items-center justify-between pb-6">
    <div class="flex flex-wrap text-slate-800">
      <div class="relative hidden h-screen select-none flex-col justify-center bg-blue-600 text-center md:flex md:w-1/3">
        <img class="mx-auto w-56 max-w-lg rounded-lg object-cover" src="" />
        <div class="mx-auto py-16 px-8 text-white">
          <p class="my-6 text-4xl font-bold leading-10">Edit User</p>
          <p class="mb-4 text-lg font-medium">Silakan lakukan perubahan yang diperlukan.</p>
        </div>
      </div>
      <div class="flex w-full flex-col md:w-2/3">
        <div class="my-auto flex max-w-screen-md flex-col justify-center px-6 md:pl-12 pt-8 sm:pt-0 md:justify-start">
          <p class="text-center text-3xl font-bold md:text-left">Edit Akun Disini!</p>
          <form @submit.prevent="performEdit">
            <div class="form-group">
              <label for="name">Name:</label>
              <input type="text" id="name" v-model="editedUser.name" />
            </div>
            <div class="form-group">
              <label for="email">Email:</label>
              <input type="email" id="email" v-model="editedUser.email" />
            </div>
            <div class="form-group">
              <label for="password">Password:</label>
              <input type="password" id="password" v-model="editedUser.password" />
            </div>
            <div class="form-group">
              <label for="role">Role:</label>
              <select id="role" v-model="editedUser.role">
                <option value="admin">Admin</option>
                <option value="member">Member</option>
              </select>
            </div>
            <div class="flex-row-2 space-y-7 justify-between">
              <button type="submit">Save</button>
            </div>
          </form>
          <router-link to="/users" class="mt-2">
            <button class="" type="button">Kembali</button>
          </router-link>
        </div>
      </div>
    </div>
  </div>
    </div>
  </template>
  
  <script>
  import { mapActions, mapGetters } from 'vuex';
  
  export default {
    data() {
      return {
        editedUser: {
          name: '',
          email: '',
          password: '',
          role: '',
        },
      };
    },
    computed: {
      ...mapGetters('user', ['getEditedUser']),
    },
    methods: {
      ...mapActions('user', ['saveEditedUser', 'fetchUserById']),
      async performEdit() {
        try {
          const success = await this.saveEditedUser({ id: this.$route.params.id, editedUser: this.editedUser });
          if (success) {
            alert('Berhasil diedit');
            this.$router.push('/pengguna');
          }
        } catch (error) {
          alert('Failed');
        }
      },
    },
    mounted() {
      // Mendapatkan ID pengguna dari URL
      const userId = this.$route.params.id;
      // Jika ada ID, dapatkan detail pengguna dari server
      if (userId) {
        this.fetchUserById(userId)
          .then(() => {
            const user = this.getEditedUser;
            if (user) {
              this.editedUser = { ...user };
            }
          })
          .catch((error) => {
            console.error(error);
          });
      }
    },
  };
  </script>
  
  <style scoped>
  .edit-user {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
  
  .edit-user-container {
    max-width: 400px;
    padding: 40px;
    background-color: #f9f9f9;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }
  
  h2 {
    margin-bottom: 20px;
    text-align: center;
  }
  
  .form-group {
    margin-bottom: 20px;
  }
  
  label {
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
  }
  
  input[type="text"],
  input[type="email"],
  input[type="password"],
  select {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  
  button {
    background-color: #007bff;
    color: #fff;
    border: none;
    padding: 12px 0;
    width: 100%;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
    transition: background-color 0.3s;
  }
  
  button:hover {
    background-color: #0056b3;
  }
  </style>