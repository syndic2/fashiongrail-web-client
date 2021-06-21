<template>
  <div class="py-8 px-16">
    <span class="font-bold block text-maroon text-3xl text-center">Penting Hari Ini</span>
    <div class="mt-6 grid grid-flow-row gap-6">
      <div class="grid grid-cols-3 gap-8">
        <div class="flex flex-col items-center justify-center gap-2">
          <img class="bg-dark-grey rounded-2xl py-8 w-auto h-56 object-contain" src="/medias/icons/store/pesananbaru.png" alt="">
          <span class="italic text-dark-grey">Pesanan Baru</span>
        </div>
        <div class="flex flex-col items-center justify-center gap-2">
          <img class="bg-dark-grey rounded-2xl py-8 w-auto h-56 object-contain" src="/medias/icons/store/siapkirim.png" alt="">
          <span class="italic text-dark-grey">Siap Dikirim</span>
        </div>
        <div class="flex flex-col items-center justify-center gap-2">
          <img class="bg-dark-grey rounded-2xl py-8 w-auto h-56 object-contain" src="/medias/icons/store/chatmasuk.png" alt="">
          <span class="italic text-dark-grey">Chat Masuk</span>
        </div>
      </div>
      <div class="grid grid-cols-3 gap-8">
        <div class="flex flex-col items-center justify-center gap-2">
          <img class="bg-dark-grey rounded-2xl py-8 w-auto h-56 object-contain" src="/medias/icons/store/ulasanbaru.png" alt="">
          <span class="italic text-dark-grey">Ulasan Baru</span>
        </div>
        <div class="flex flex-col items-center justify-center gap-2">
          <img class="bg-dark-grey rounded-2xl py-8 w-auto h-56 object-contain"  src="/medias/icons/store/pengembalian.png" alt="">
          <span class="italic text-dark-grey">Pengembalian</span>
        </div>
        <div class="flex flex-col items-center justify-center gap-2">
          <img class="bg-dark-grey rounded-2xl py-8 w-auto h-56 object-contain opacity-0"  src="/medias/icons/store/siapkirim.png" alt="">
          <span class="italic text-dark-grey">&nbsp;</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import { Vue, Component, Prop } from 'nuxt-property-decorator';

  @Component
  export default class HomeDashboardComponent extends Vue {

  }
</script>

