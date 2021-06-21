<template>
  <div class="py-6 px-4">
    <span class="font-bold block text-maroon text-3xl text-center">Pesanan Toko</span>
    <div class="relative mt-10">
      <div class="flex">
        <button class="border-2 border-t-2 border-dark-grey pb-6 h-16 w-36 px-8 rounded-t-3.5xl focus:text-white focus:bg-dark-grey focus:outline-none transform focus:scale-y-135 hover:font-bold hover:italic">Semua</button>
        <button class="border-2 border-t-2 border-dark-grey pb-6 h-16 w-48 px-8 rounded-t-3.5xl focus:text-white focus:bg-dark-grey focus:outline-none transform focus:scale-y-135 hover:font-bold hover:italic">Perlu diproses</button>
        <button class="border-2 border-t-2 border-dark-grey pb-6 h-16 w-48 px-8 rounded-t-3.5xl focus:text-white focus:bg-dark-grey focus:outline-none transform focus:scale-y-135 hover:font-bold hover:italic">Sudah diproses</button>
      </div>
      <div class="border-2 border-dark-grey absolute top-8 left-0 rounded-4xl z-20 bg-light-grey px-8 pb-8">
        <div class="grid grid-cols-5 gap-0.5 mt-12 justify-items-center">
          <span class="font-semibold col-span-2">Nama Barang</span>
          <span class="font-semibold">Jumlah yang dibayar</span>
          <span class="font-semibold">Status</span>
          <span class="font-semibold">Keterangan</span>
        </div>
        <div class="mt-4 grid grid-flow-row gap-4 overflow-y-auto h-96">
          <OrderCard :key="index" v-for="(order,index) in orders" :order="order"></OrderCard>
        </div>
      </div>
   </div>
  </div>
</template>

<script lang="ts">
  import { Vue, Component, Prop } from 'nuxt-property-decorator';
  import OrderCard from "~/components/pages/store/OrderCard.vue";
  import {$axios} from "~/utilities/api";
  import {Order} from "../../../../models/order/order";

  @Component({
    components:{
      OrderCard
    }
  })
  export default class OrdersDashboardComponent extends Vue {
    public orders:Order[] = []

    async fetch(){
      this.orders = await $axios.$get(`${process.env.BASE_URL}/data/store/orders/orders.json`)
    }
  }
</script>
