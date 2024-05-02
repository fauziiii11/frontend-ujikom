<template>



    <link href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:ital,wght@0,300;0,400;1,600&display=swap" rel="stylesheet" />
    <div class="sm:w-[38rem] mx-auto my-10 overflow-hidden rounded-2xl bg-white shadow-lg sm:max-w-lg">
  <div class="bg-green-500 px-10 py-10 text-center text-white">
    <p class="font-serif text-2xl font-semibold tracking-wider">PEMASUKAN</p>
    <p class="text-center text-blue-100">Masukan Pemasukanmu Disini</p>
  </div>

  <div class="space-y-4 px-8 py-10" @submit.prevent="performpemasukan">
    <label class="block" for="name">
      <p class="text-gray-600">Pemasukan Atas Nama</p>
      <input v-model="nama" class="w-full rounded-md border bg-white px-2 py-2 outline-none ring-blue-600 focus:ring-1" type="name" placeholder="(contoh : Ayah)" />
    </label>
    <label class="block" for="number">
      <p class="text-gray-600">Nominal Pemasukan</p>
      <input v-model="jumlah_pemasukan" class="w-full rounded-md border bg-white px-2 py-2 outline-none ring-blue-600 focus:ring-1" type="number" placeholder="masukan nominal pengeluaran anda!" />
    </label>
    <label class="block" for="number">
      <p class="text-gray-600">Tanggal</p>
      <input v-model="tanggal" class="w-full rounded-md border bg-white px-2 py-2 outline-none ring-blue-600 focus:ring-1" type="number" placeholder="masukan tanggal" />
    </label>
    <label class="block" for="name">
      <p class="text-gray-600">Kategori Pemasukan</p>
      <input v-model="id_kategori_pemasukan" class="w-full rounded-md border bg-white px-2 py-2 outline-none ring-blue-600 focus:ring-1" type="name" placeholder="masukan kategori pemasukan" />
    </label>
    
    <button class="mt-4 rounded-full bg-blue-500 px-10 py-2 font-semibold text-white">Submit</button>
  </div>
</div>

</template>

<script>
import { mapActions } from 'vuex';

export default {
  data() {
    return {
      nama: '',
      jumlah_pemasukan: '',
      tanggal: '',
      id_kategori_pemasukan: '',
    };
  },
  methods: {
    ...mapActions('auth', ['pemasukan']),
    async performpemasukan() {
      const credentials = {
        nama: this.nama,
        jumlah_pemasukan: this.jumlah_pemasukan,
        tanggal: this.tanggal,
        id_kategori_pemasukan: this.id_kategori_pemasukan,

      };

      const success = await this.pemasukan(credentials);

      if (success) {
        // Redirect to the desired route on successful login
        this.$router.push('/saldo');
      } else {
        alert("pemasukan Failed");
      }
    },
  },
};
</script>
