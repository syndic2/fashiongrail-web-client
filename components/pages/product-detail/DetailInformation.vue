<template>
  <div>
    <template v-if="productInformation !== null">
      <!-- HEADER -->
      <div :key="index" v-for="(table, index) in topSections">
        <div class="grid grid-cols-3 grid-flow-row items-center gap-3 border border-dark-grey" v-bind:class="{
          'border-t-0 border-b-0': (index+1) % 2 === 0,
          'rounded-tl-3xl rounded-tr-3xl': index === 0
        }">
          <div class="font-bold border-dark-grey border-r p-3">{{ table.heading }}</div>
          <div class="col-span-2 border-dark-grey">{{ table.value }}</div>
        </div>
      </div>
      <div class="grid grid-cols-3 gap-3 font-bold border border-dark-grey border-t-0 border-b-0">
        <div class="border-r border-dark-grey p-3">Ukuran</div>
        <div class="text-center border-r border-dark-grey p-3">Panjang Baju</div>
        <div class="text-center border-dark-grey p-3">Lingkar Dada</div>
      </div>

      <!-- CONTENT -->
      <div class="grid grid-flow-row">
        <div class="grid grid-cols-3 gap-3 border border-dark-grey" :key="i" v-for="(information, i) in productInformation.size_informations" v-bind:class="{
          'border-b-0': i === 0 || i === 1,
          'border-t-0': i === 3,
          'rounded-bl-3xl rounded-br-3xl': i === productInformation.size_informations.length-1
        }">
          <span class="text-center font-bold border-r border-dark-grey p-1">{{ information.name }}</span>
          <div class="col-span-2 grid grid-cols-2 gap-3">
            <span class="text-center" :key="j" v-for="(size, j) in information.sizes" v-bind:class="{ 'border-r border-dark-grey': j === 0 }">
              {{ size.size }}
            </span>
          </div>
        </div>
      </div>
    </template>
    <template v-else>
      <span class="block text-center">no product information data</span>
    </template>
  </div>
</template>

<script lang="ts">
  import { Vue, Component, Prop } from 'nuxt-property-decorator';

  import { $axios } from '../../../utilities/api';
  import { ProductInformation } from '../../../models/product/product-information';

  @Component
  export default class DetailInformationComponent extends Vue {
    public topSections: object[]= [];
    public productInformation: ProductInformation | null | undefined= null;

    async fetch() {
      await $axios.$get('/data/product/information.json').then((productInformations: ProductInformation[]) => {
        this.productInformation= productInformations.find(object => object.id === 1);
        this.topSections= [
          { heading: 'Merk', value: this.productInformation?.brand },
          { heading: 'Bahan', value: this.productInformation?.material },
          { heading: 'Stok', value: this.productInformation?.stock }
        ];
      });
    }
  }
</script>


