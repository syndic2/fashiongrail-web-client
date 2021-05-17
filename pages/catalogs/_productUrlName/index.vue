<template>
  <main>
    <div class="lg:py-24">
      <!-- LEFT SIDE -->
      <div class="bg-light-grey lg:p-20">
        <div v-if="product !== null" class="grid grid-cols-2 divide-x divide-dark-grey">
          <div class="grid grid-cols-rows-2 grid-cols-3 gap-4 gap-x-6 lg:px-14">
            <div class="col-span-3 relative bg-white rounded-xl">
              <i class="cursor-pointer absolute -right-8 bottom-6">
                <img class="lg:w-16" src="/medias/icons/favourite2.png" alt="">
              </i>
              <img class="object-contain w-full lg:h-96" :src="product.imgUrl" alt="">
            </div>
            <div class="bg-white rounded-xl lg:p-4" :key="index" v-for="(image, index) in detailImages" >
              <img class="object-cover object-center rounded-xl lg:w-32 lg:h-28" :src="`/medias/images/product-details/product-1/${image}`" alt="">
            </div>
          </div>
          <div class="flex flex-col gap-8 lg:px-8 lg:py-6">
            <div class="flex flex-col gap-1">
              <h1 class="uppercase text-3xl">{{ product.name }}</h1>
              <span class="text-3xl font-bold">Rp. {{ $thousandSeparators(product.price) }}</span>
            </div>
            <div class="flex flex-col gap-3">
              <div class="flex items-center gap-2">
                <NuxtLink to="/">
                  <img class="object-contain lg:w-8 lg:h-8" src="/medias/icons/shop.png" alt="">
                </NuxtLink>
                <span class="lg:text-base font-semibold">Pull & Bear</span>
              </div>
              <div class="flex items-center divide-x divide-dark-grey">
                <div class="flex items-center gap-1 text-dark-grey pr-2">
                  <font-awesome-icon icon="star" size="sm" :key="index" v-for="(rate, index) in product.rating" />
                </div>
                <span class="pl-2">{{ product.sold }} terjual</span>
              </div>
            </div>
            <AccordionContainer>
              <AccordionPanel>
                <span slot="header" class="text-xl text-left flex-grow">detail produk</span>
                <span slot="content">content</span>
              </AccordionPanel>
              <AccordionPanel>
                <span slot="header" class="text-xl text-left flex-grow">detail produk</span>
                <span slot="content">content</span>
              </AccordionPanel>
              <AccordionPanel>
                <span slot="header" class="text-xl text-left flex-grow">penilaian</span>
                <span slot="content">content</span>
              </AccordionPanel>
            </AccordionContainer>
          </div>
        </div>
        <span v-else>no product data</span>
      </div>

      <!-- SIMILAR PRODUCTS -->
      <div class="lg:mt-24 lg:px-24">
        <h1 class="uppercase text-3xl text-maroon text-center font-bold">Produk Serupa</h1>
        <SimilarProducts class="lg:mt-4" />
      </div>
    </div>
  </main>
</template>

<script lang="ts">
  import { Vue, Component, Prop } from 'nuxt-property-decorator';

  import { $axios } from '../../../utilities/api';
  import { Product } from '../../../models/product/product';
  import { AccordionContainer, AccordionPanel } from '../../../components/utilities/widgets/accordion/index';
  import SimilarProducts from '../../../components/pages/product-detail/SimilarProducts.vue';

  @Component({
    components: {
      AccordionContainer,
      AccordionPanel,
      SimilarProducts
    }
  })
  export default class ProductDetailPage extends Vue {
    public product: Product | null | undefined= null;
    public detailImages: string[]= ['velvet-outer-2.png', 'velvet-outer-3.jpg', 'velvet-outer-4.jpg'];

    async fetch() {
      await $axios.$get('/data/product/items.json').then((products: Product[]) => {
        this.product= products.find((object: Product) => object.urlName === this.$route.params.productUrlName);
      });
    }
  }
</script>
