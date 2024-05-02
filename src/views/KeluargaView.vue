<template>



    <link href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:ital,wght@0,300;0,400;1,600&display=swap" rel="stylesheet" />
    <div class="mx-auto max-w-screen-lg px-4 py-8 sm:px-8">
  <div class="flex items-center justify-between pb-6">
    <div>
      <h2 class="font-semibold text-gray-700">Riwayat Pengeluaran Keluarga</h2>
      <span class="text-xs text-gray-500">Riwayat Pengeluaran</span>
    </div>
    <div class="flex items-center justify-between">
      
    </div>
  </div>
  <div class="overflow-y-hidden rounded-lg border">
    <div class="overflow-x-auto">
      <table class="w-full">
        <thead>
          <tr class="bg-green-600 text-left text-xs font-semibold uppercase tracking-widest text-white">
            <th class="px-5 py-3">ID</th>
            <th class="px-5 py-3">Nama</th>
            <th class="px-5 py-3"></th>
            <th class="px-5 py-3">Tanggal</th>
            <th class="px-5 py-3">Kategori Pengeluaran</th>
            
          </tr>
        </thead>
        <tbody class="text-gray-500">
          <tr>
            <td class="border-b border-gray-200 bg-white px-5 py-5 text-sm">
              <p class="whitespace-no-wrap">0</p>
            </td>
            <td class="border-b border-gray-200 bg-white px-5 py-5 text-sm">
              <div class="flex items-center">
                
                <div class="ml-3">
                  <p class="whitespace-no-wrap">Ayah</p>
                </div>
              </div>
            </td>
            <td class="border-b border-gray-200 bg-white px-5 py-5 text-sm">
              <p class="whitespace-no-wrap">19:19:19</p>
            </td>
            <td class="border-b border-gray-200 bg-white px-5 py-5 text-sm">
              <p class="whitespace-no-wrap">Sep 28, 2022</p>
            </td>
            <td class="border-b border-gray-200 bg-white px-5 py-5 text-sm">
              <p class="whitespace-no-wrap">Makanan dan Minuman</p>
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
