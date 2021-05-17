<template>
  <div id="similar-products">
    <VueSlickCarousel v-if="products.length" v-bind="carouselSettings">
      <div class="lg:p-4 p-2" :key="index" v-for="(product, index) in products">
         <Product :product="product" />
      </div>
    </VueSlickCarousel>
  </div>
</template>

<script lang="ts">
  import { Vue, Component, Prop } from 'nuxt-property-decorator';
  import VueSlickCarousel from 'vue-slick-carousel'
  import 'vue-slick-carousel/dist/vue-slick-carousel.css'
  import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

  import { $axios } from '../../../utilities/api';
  import { Product } from '../../../models/product/product';
  import ProductComponent from '../../Product.vue';

  @Component({
    components: {
      VueSlickCarousel,
      ProductComponent
    }
  })
  export default class SimilarProductsComponent extends Vue {
    public carouselSettings= {
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 640,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        }
      ]
    };
    public products: Product[]= [];

    async fetch() {
      this.products= await $axios.$get('/data/product/items.json');
      this.products= this.products.slice(0, 10);
    }
  }
</script>

<style lang="scss" scoped>
  #similar-products /deep/ {
    button {
      &.slick-prev:before, &.slick-next:before {
        color: #A2927C !important;
      }
    }
  }
</style>
