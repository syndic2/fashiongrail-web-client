<template>
  <main>
    <div class="p-24">
      <div class="grid grid-flow-col gap-2">
        <div>products</div>
        <FilterBar />
      </div>
    </div>
  </main>
</template>

<script lang="ts">
  import { Vue, Component, Prop } from 'nuxt-property-decorator';

  import { $axios } from '../utilities/api';
  import { Product } from '../models/product/product';
  import FilterBar from '../components/pages/catalogs/FilterBar.vue';

  @Component({
    components: {
      FilterBar
    }
  })
  export default class CatalogsPage extends Vue{
    public products: Product[]= [];

    async fetch() {
      this.products= await $axios.$get('/data/product/items.json');
    }
  }
</script>
