
<template>

  <!-- <header class="text-slate-700 relative mx-auto flex flex-col overflow-hidden px-4 py-4 lg:flex-row lg:items-center bg-green-400">
    <a href="#" class="flex items-center whitespace-nowrap text-2xl font-black">
      <span class="mr-2 w-8">
        <img src="" alt="" />
      </span>
      FamilyFin
    </a>
    <input type="checkbox" class="peer hidden" id="navbar-open" />
    <label class="absolute top-5 right-5 cursor-pointer lg:hidden" for="navbar-open">
      <svg class="h-7 w-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 6h16M4 12h16M4 18h16"></path>
      </svg>
    </label>
    <nav aria-label="Header Navigation" class="peer-checked:pt-8 peer-checked:max-h-60 flex max-h-0 w-full flex-col items-center overflow-hidden transition-all lg:ml-24 lg:max-h-full lg:flex-row">
      <ul class="flex w-full flex-col items-center space-y-2 lg:flex-row lg:justify-center lg:space-y-0">
        <li class="lg:mr-12"><a class="rounded text-white-400 transition focus:outline-none focus:ring-1 focus:ring-white-700 focus:ring-offset-2 font-bold" href="/saldo">Saldo</a></li>
        <li class="lg:mr-12"><a class="rounded text-gray-700 transition focus:outline-none focus:ring-1 focus:ring-blue-700 focus:ring-offset-2 font-bold" href="/pengeluaran">Pengeluaran</a></li>
        <li class="lg:mr-12"><a class="rounded text-gray-700 transition focus:outline-none focus:ring-1 focus:ring-blue-700 focus:ring-offset-2 font-bold" href="/pemasukan">Pemasukan</a></li>
        <li class="lg:mr-12"><a class="rounded text-gray-700 transition focus:outline-none focus:ring-1 focus:ring-blue-700 focus:ring-offset-2 font-bold" href="/keluarga">Keluarga</a></li>
      </ul>
      <hr class="mt-4 w-full lg:hidden" />
      <div>
        <span>
          <RouterLink to="/profil">
          <svg class="w-6 h-6 mr-4 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
          <path fill-rule="evenodd" d="M12 20a8 8 0 0 1-5-1.8v-.6c0-1.8 1.5-3.3 3.3-3.3h3.4c1.8 0 3.3 1.5 3.3 3.3v.6a8 8 0 0 1-5 1.8ZM2 12a10 10 0 1 1 10 10A10 10 0 0 1 2 12Zm10-5a3.3 3.3 0 0 0-3.3 3.3c0 1.7 1.5 3.2 3.3 3.2 1.8 0 3.3-1.5 3.3-3.3C15.3 8.6 13.8 7 12 7Z" clip-rule="evenodd"/>
          </svg>
        </RouterLink>
        </span>
      </div>
      
    </nav>
  </header> -->
  
      <div class="container mx-auto py-8">
      
      <link href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:ital,wght@0,300;0,400;1,600&display=swap" rel="stylesheet" />
      <div class="">
    
    <div class="col-span-2 -mx-4 bg-gradient-to-t from-green-500 to-green-500 px-4 py-8 sm:col-span-1 sm:mx-0 sm:rounded-xl sm:py-4">
      <p class="mb-5 font-medium text-indigo-100">Total saldo keluarga</p>
      <div class="mb-9 flex max-w-xs">
        <div class="mb-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-100 text-indigo-400 sm:mr-3 sm:mb-0">
          <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="none" viewBox="0 0 24 24">
    <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M8 7V6a1 1 0 0 1 1-1h11a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1h-1M3 18v-7a1 1 0 0 1 1-1h11a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1Zm8-3.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"/>
  </svg>
        </div>
        <div class="px-0">
          <p class="mb-1 text-2xl font-black text-white">Rp. 1.000.000,00</p>
          <p class="font-medium text-indigo-100">Rupiah</p>
        </div>
      </div>
      
      <div class="h-56 w-full rounded-xl bg-white p-10 shadow-md">
      <div class="font-bold">Kategori Pemasukan</div>
      <hr>
      <br>
      <div class="flex items-center">
          <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.3L19 7H7.3"/>
          </svg>
          <span class="ml-2">Teks pertama</span>
      </div>
      <hr>
      <br>
      <div class="flex items-center">
        <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M3 21h18M4 18h16M6 10v8m4-8v8m4-8v8m4-8v8M4 9.5v-1c0-.3.2-.6.5-.8l7-4.5a1 1 0 0 1 1 0l7 4.5c.3.2.5.5.5.8v1c0 .3-.2.5-.5.5h-15a.5.5 0 0 1-.5-.5Z"/>
    </svg>
          <span class="ml-2">Teks kedua</span>
      </div>
      
      <hr>
      <br>
      <div class="flex items-center">
        <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M8 7V6c0-.6.4-1 1-1h11c.6 0 1 .4 1 1v7c0 .6-.4 1-1 1h-1M3 18v-7c0-.6.4-1 1-1h11c.6 0 1 .4 1 1v7c0 .6-.4 1-1 1H4a1 1 0 0 1-1-1Zm8-3.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"/>
    </svg>
          <span class="ml-2">Teks ketiga</span>
      </div>
      <hr>
  </div>
    
    <br>
    <div class="h-56 w-100 rounded-xl bg-white p-10 shadow-md">
      <div class="font-bold">Kategori Pengeluaran</div>
      <hr>
      <br>
      <div class="flex items-center">
          <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.3L19 7H7.3"/>
          </svg>
          <span class="ml-2">Teks pertama</span>
      </div>
      <hr>
      <br>
      <div class="flex items-center">
        <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M3 21h18M4 18h16M6 10v8m4-8v8m4-8v8m4-8v8M4 9.5v-1c0-.3.2-.6.5-.8l7-4.5a1 1 0 0 1 1 0l7 4.5c.3.2.5.5.5.8v1c0 .3-.2.5-.5.5h-15a.5.5 0 0 1-.5-.5Z"/>
    </svg>
          <span class="ml-2">Teks kedua</span>
      </div>
      
      <hr>
      <br>
      <div class="flex items-center">
        <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M8 7V6c0-.6.4-1 1-1h11c.6 0 1 .4 1 1v7c0 .6-.4 1-1 1h-1M3 18v-7c0-.6.4-1 1-1h11c.6 0 1 .4 1 1v7c0 .6-.4 1-1 1H4a1 1 0 0 1-1-1Zm8-3.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"/>
    </svg>
          <span class="ml-2">Teks ketiga</span>
      </div>
      <hr>
  </div>
  </div>
    </div>
  </div>
    
  
  
  
  
  </template>
  
  <script>
</script>
  