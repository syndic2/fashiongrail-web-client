<template>
  <div class="grid gap-2">
    <div class="grid grid-cols-5 gap-0.5">
      <div class="flex col-span-2 items-center bg-dark-grey rounded-l-lg pl-8 py-1 gap-2">
        <img src="/medias/images/profilepembeli.png" class="w-6 h-6 object-contain border border-white rounded-full">
        <span class="text-white italic text-xs truncate">{{order.username}}</span>
        <span class="ml-4 text-white italic text-xs truncate" >{{order.order_invoice}} </span>
      </div>
      <div class="bg-dark-grey"></div>
      <div class="bg-dark-grey"></div>
      <div class="bg-dark-grey rounded-r-lg"></div>
    </div>
    <div class="grid grid-cols-5 gap-0.5">
      <div class="grid grid-flow-col col-span-2 items-center  bg-grey rounded-l-2xl p-4 gap-2">
        <img :src="`/medias/images/products/product-${order.products[0].product_id}.png`" class="bg-white rounded-xl w-16 h-full object-contain">
        <div class="flex flex-col">
          <span class="text-xl font-bold">{{order.products[0].product_name}}</span>
          <span class="text-xs">{{order.products[0].product_detail}}</span>
        </div>
        <span class="font-bold">x{{order.products[0].qty}}</span>
      </div>
      <div class="bg-grey flex items-center justify-center">
        <span class="font-semibold text-center">Rp. {{$thousandSeparators(order.total)}}</span>
      </div>
      <div class="bg-grey flex items-center justify-center">
        <span class="font-semibold text-center" v-if="order.status==0">Perlu diproses</span>
        <span class="font-semibold text-center" v-else-if="order.status==1">Telah diproses</span>
      </div>
      <div class="bg-grey flex items-center justify-center">
        <span class="font-semibold text-center" v-if="order.status==0">Menunggu pesanan</span>
        <span class="font-semibold text-center" v-else-if="order.status==1">Atur pengiriman</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator';
import {Order} from "~/models/order/order";


@Component
export default class OrderCard extends Vue {
@Prop() order!:Order
}
</script>

