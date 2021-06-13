<template>
  <div class="relative bg-light-grey rounded-xl lg:p-4 p-2">
    <i class="cursor-pointer absolute lg:-right-3 -right-1.5 lg:bottom-12 bottom-10 lg:w-6 w-3">
      <img src="/medias/icons/favourite2.png" alt="">
    </i>
    <NuxtLink :to="product.url" class="grid grid-flow-row gap-2">
      <img :src="product.imgUrl" class="bg-white object-contain rounded-xl w-full lg:h-36 h-24" alt="">
      <div class="lg:text-sm text-xs">
        <span class="block font-bold">{{ product.name }}</span>
        <span>Rp. {{ $thousandSeparators(product.price) }}</span>
      </div>
      <div class="flex lg:gap-2 gap-1 lg:text-sm text-xs mt-3">
        <div>
          <font-awesome-icon icon="map-marker-alt" />
        </div>
        <div>{{ product.location }}</div>
      </div>
      <div class="grid grid-flow-col divide-x-2 divide-black">
        <div class="flex items-center gap-1 lg:text-sm text-xs">
          <font-awesome-icon icon="star" size="xs" :key="index" v-for="(rate, index) in product.rating" />
        </div>
        <div class="flex justify-center items-center">
          <span class="self-center lg:text-sm text-xs">{{ product.sold }} terjual</span>
        </div>
      </div>
    </NuxtLink>
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
