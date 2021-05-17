<template>
  <main>
    <div class="p-14">
      <div class="grid grid-cols-6 gap-6">
        <div class="col-span-5">
          <div class="grid grid-flow-row gap-2">
            <span class="italic">Toko berkaitan dengan "nama barang"</span>
            <RelatedStore />
            <div class="flex justify-end">
              <NuxtLink to="">
                <span class="italic text-grey font-semibold border-b-2 border-dark-grey lg:pb-0.5">lihat toko lainnya -></span>
              </NuxtLink>
            </div>
          </div>
          <div class="grid grid-flow-row gap-4 lg:mt-16">
            <span class="italic">Menampilkan 1-15 barang dari total 150 "kemeja batik"</span>
            <div class="flex items-center gap-3">
              <span class="font-bold text-xl">urutkan</span>
              <button class="rounded-full border border-dark-grey focus:outline-none hover:bg-dark-grey hover:text-white px-5 py-1">terbaru</button>
              <button class="rounded-full border border-dark-grey focus:outline-none hover:bg-dark-grey hover:text-white px-5 py-1">terlaris</button>
              <button class="rounded-full border border-dark-grey focus:outline-none hover:bg-dark-grey hover:text-white px-5 py-1">harga rendah</button>
              <button class="rounded-full border border-dark-grey focus:outline-none hover:bg-dark-grey hover:text-white px-5 py-1">harga tinggi</button>
            </div>
            <div class="grid grid-cols-5 grid-flow-row gap-5">
              <client-only placeholder="Loading catalogs...">
                <Product :product="product" :key="index" v-for="(product, index) in products" />
              </client-only>
            </div>
          </div>
        </div>
        <FilterBar />
      </div>
    </div>
  </main>
</template>

<script lang="ts">
  import { Vue, Component, Prop } from 'nuxt-property-decorator';

  import { $axios } from '../../utilities/api';
  import { Product } from '../../models/product/product';
  import FilterBar from '../../components/pages/catalogs/FilterBar.vue';
  import RelatedStore from '../../components/pages/catalogs/RelatedStore.vue';
  import ProductComponent from '../../components/Product.vue';

  @Component({
    components: {
      FilterBar,
      RelatedStore,
      ProductComponent
    }
  })
  export default class CatalogsPage extends Vue{
    public products: Product[]= [];

    async fetch() {
      this.products= await $axios.$get('/data/product/items.json');
    }
  }
</script>
