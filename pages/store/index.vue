<template>
  <main>
    <div class="p-24 grid grid-cols-4 gap-12" >
      <div class="py-4 bg-light-grey rounded-4xl">
        <div class="grid grid-rows-12 px-12">
          <div class="row-span-8 flex flex-col justify-center items-center gap-4 ">
            <img src="/medias/logos/brands/kenzo.png" class="w-32 h-32 object-contain bg-white rounded-full">
            <span class="text-maroon text-2xl font-bold">Kenzo</span>
            <button class="rounded-full border-2 border-grey py-2 px-6 w-full">Home</button>
            <button class="rounded-full border-2 border-grey py-2 px-6 w-full">Pesanan</button>
            <button class="rounded-full border-2 border-grey py-2 px-6 w-full">Etalase Toko</button>
            <button class="rounded-full border-2 border-grey py-2 px-6 w-full">Data Transaksi</button>
          </div>
          <button class="row-start-12 rounded-full border-2 border-grey py-2 px-6 w-full">Logout</button>
        </div>
      </div>
      <div class="p-8 bg-light-grey col-span-3 rounded-lg">

      </div>
    </div>
  </main>
</template>





<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator';
@Component
export default class StorePage extends Vue{

}
</script>

