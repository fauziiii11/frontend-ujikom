<template>
  <link href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:ital,wght@0,300;0,400;1,600&display=swap" rel="stylesheet" />
    <nav class="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
      <div class="px-3 py-3 lg:px-5 lg:pl-3">
        <div class="flex items-center justify-between">
          <div class="flex items-center justify-start rtl:justify-end">
            <button data-drawer-target="logo-sidebar" data-drawer-toggle="logo-sidebar" aria-controls="logo-sidebar"
              type="button"
              class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
              <span class="sr-only">Open sidebar</span>
              <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
                <path clip-rule="evenodd" fill-rule="evenodd"
                  d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z">
                </path>
              </svg>
            </button>
            <a href="" class="flex ms-2 md:me-24">
              <!-- <img src="" class="h-8 me-3" alt="FlowBite Logo" /> -->
              <span
                class="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">FamilyFin Admin</span>
            </a>
          </div>
          <div class="flex items-center">
            <div class="flex items-center ms-3">
              
              <div
                class="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600"
                id="dropdown-user"></div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  
    <!-- component -->
    <div class="min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased bg-gray-50 text-gray-800 ">
      <div class="fixed flex flex-col top-0 left-0 w-64 bg-white h-full border-r">
        <div class="flex items-center justify-center h-14 border-b">
          <div>Sidebar Navigation By iAmine</div>
        </div>
        <div class="overflow-y-auto overflow-x-hidden flex-grow">
          <ul class="flex flex-col py-4 space-y-1">
            <li class="px-5">
              <div class="flex flex-row items-center h-8">
                <div class="text-sm font-light tracking-wide text-gray-500">
                  Menu
                </div>
              </div>
            </li>
            <li>
              <router-link to="/admin">
                <a
                  class="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6">
                  <span class="inline-flex justify-center items-center ml-4">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6">
                      </path>
                    </svg>
                  </span>
                  <span class="ml-2 text-sm tracking-wide truncate">Dashboard</span>
                </a>
              </router-link>
            </li>
            
            
            <li>
              <a href="/admin/pengguna"
                class="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6">
                <span class="inline-flex justify-center items-center ml-4">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z">
                    </path>
                  </svg>
                </span>
                <span class="ml-2 text-sm tracking-wide truncate">Users</span>
                
              </a>
            </li>
            
            <li>
              <router-link to="/admin/profil"
                class="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6">
                <span class="inline-flex justify-center items-center ml-4">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                  </svg>
                </span>
                <span class="ml-2 text-sm tracking-wide truncate">Profile</span>
              </router-link>
            </li>
            
  
          </ul>
        </div>
      </div>
    </div>
  </template>
  
  <!-- <script>
  import Swal from 'sweetalert2'; // Import SweetAlert2 library
  import { mapActions } from 'vuex';
  
  export default {
    methods: {
      ...mapActions('auth', ['logout']), // Map action 'logout' from auth module
  
      // Method to confirm logout
      confirmLogout() {
        Swal.fire({
          title: "Apakah Anda Yakin?",
          text: "Anda Akan Segera Keluar.",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, logout"
        }).then((result) => {
          if (result.isConfirmed) {
            this.logout(); // Call logout action if user confirms
          }
        });
      }
    }
  }
  </script> -->