<template>
  <div class="py-8 p-4">
    <span class="font-bold block text-maroon text-3xl text-center">Pesanan Toko</span>
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
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator';
import OrderCard from "~/components/pages/store/OrderCard.vue";
import {$axios} from "~/utilities/api";
import {Order} from "../../../../models/order/order";

@Component(
  {
    components:{
      OrderCard
    }
  }
)


export default class OrdersComponent extends Vue {
  public orders:Order[] = []
  async fetch(){
    this.orders = await $axios.$get('/data/store/orders/orders.json')
  }
}
</script>
