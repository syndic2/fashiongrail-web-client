<template>
  <div class="relative bg-light-grey rounded-md grid auto-rows-auto gap-2 lg:p-4 p-2">
    <NuxtLink to="" class="absolute lg:-right-3 -right-1.5 lg:bottom-14 bottom-10 lg:w-6 w-3">
      <img src="medias/icons/favourite2.png" alt="">
    </NuxtLink>
    <img class="transition duration-50 ease-in-out object-contain w-full lg:h-44 h-24" :src="product.imgUrl" alt="">
    <div class="lg:text-sm text-xs">
      <span class="block font-bold">{{ product.name }}</span>
      <span>Rp. {{ product.price }}</span>
    </div>
    <div class="flex lg:gap-2 gap-1 lg:text-sm text-xs">
      <div>
        <font-awesome-icon icon="map-marker-alt" />
      </div>
      <div>{{ product.location }}</div>
    </div>
    <div class="flex divide-x-2 divide-black">
      <div class="flex items-center gap-1 lg:text-sm text-xs lg:pr-2 pr-1">
        <font-awesome-icon icon="star" size="xs" :key="index" v-for="(rate, index) in product.rating" />
      </div>
      <span class="lg:text-sm text-xs lg:pl-2 pl-1">{{ product.sold }} terjual</span>
    </div>
  </div>
</template>

<script lang="ts">
  import { Vue, Component, Prop } from 'nuxt-property-decorator';
  import { Product } from '../models/product/product';

  @Component
  export default class ProductComponent extends Vue {
    @Prop() product!: Product;
  }
</script>
