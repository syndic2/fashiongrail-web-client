<template>
  <main>
    <div class="p-20 px-28">
      <div class="flex flex-col gap-y-3 mt-4" style="width: fit-content;">
        <h1 class="text-5xl text-maroon font-bold">BARANG FAVORIT</h1>
        <div class="relative">
          <span class="absolute block inset-y-0 left-0 flex items-center lg:mx-3 mx-2">
            <button type="submit" class="focus:outline-none">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" class="lg:w-5 lg:h-5">
                <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
            </button>
          </span>
          <input class="bg-transparent lg:text-base placeholder-italic outline-none border-2 border-dark-grey rounded-full lg:w-full lg:h-8 lg:py-5 lg:pl-10" type="search" placeholder="cari dalam favorit...">
        </div>
      </div>

      <div class="grid grid-cols-5 grid-flow-row gap-5 mt-16">
        <Product :product="product" :key="index" v-for="(product, index) in favouritedProducts" />
      </div>
    </div>
  </main>
</template>

<script lang="ts">
  import { Vue, Component, Prop } from 'nuxt-property-decorator';

  import { $axios } from '../../utilities/api';
  import { Product } from '../../models/product/product';

  @Component({

  })
  export default class FavouritesPage extends Vue {
    public favouritedProducts: Product[]= [];

    async fetch() {
      this.favouritedProducts= await $axios.$get('/data/product/items.json');
      this.favouritedProducts= this.favouritedProducts.slice(0, 10);
    }
  }
</script>

