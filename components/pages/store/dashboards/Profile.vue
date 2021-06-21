<template>
  <div class="grid grid-flow-row px-8 py-4 gap-8">
    <div class="flex gap-4 items-center">
      <img src="/medias/logos/brands/kenzo.png" class="w-32 h-32 object-contain bg-white rounded-full">
      <div class="flex flex-col">
        <span class="text-maroon text-2xl font-bold">Kenzo</span>
        <span>Jakarta Barat, Indonesia</span>
        <span>bergabung 2 tahun lalu</span>
      </div>
    </div>
    <form action="">
      <div class="grid grid-flow-row gap-4">
        <div class="grid grid-cols-3 gap-4">
          <div class="grid col-span-2 gap-2" >
            <label class="block lg:text-lg">Nama Toko</label>
            <input type="text" class="rounded-full py-3 px-6 w-full bg-transparent focus:outline-none border border-dark-grey">
          </div>
          <div class="grid gap-2">
            <label class="block lg:text-lg">No Tlp.</label>
            <input type="text" class="w-full rounded-full py-3 px-6 bg-transparent focus:outline-none border border-dark-grey" >
          </div>
        </div>
        <div class="grid grid-flow-col gap-4">
          <div class="grid gap-2">
            <label class="block lg:text-lg">Email</label>
            <input type="text" class="rounded-full py-3 px-6 w-full bg-transparent focus:outline-none border border-dark-grey"  >
          </div>
          <div class="grid gap-2">
            <label class="block lg:text-lg">Alamat</label>
            <input type="text" class="rounded-full py-3 px-6 w-full bg-transparent focus:outline-none border border-dark-grey" >
          </div>
        </div>
        <div class="grid gap-2">
          <label class="block lg:text-lg">Deskripsi Toko</label>
          <textarea rows="5" style="resize: none" class="p-4 w-full rounded-2xl bg-transparent focus:outline-none border border-dark-grey"></textarea>
        </div>
        <div class="grid grid-cols-2 items-center gap-4">
          <button class="rounded-full border-2 border-grey py-2 px-6 w-1/2 justify-self-end focus:bg-dark-grey focus:text-white focus:outline-none">Simpan</button>
          <button class="rounded-full border-2 border-grey py-2 px-6 w-1/2 justify-self-start focus:bg-dark-grey focus:text-white focus:outline-none">Edit</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script lang="ts">
  import { Vue, Component, Prop } from 'nuxt-property-decorator';

  @Component
  export default class ProfileDashboardComponent extends Vue {

  }
</script>

