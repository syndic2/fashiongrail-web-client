<template>
  <main>
    <!-- FEATURED EVENT CAROUSEL -->
    <section>
      <div class="lg:p-24 p-10">
        <VueSlickCarousel v-if="featuredEvents.length" v-bind="carouselSettings.featuredEvent">
          <div :key="index" v-for="(event, index) of featuredEvents">
            <NuxtLink :to="'/events'">
              <img class="object-cover object-center w-full lg:h-96 h-44" :src="`medias/images/featured-events/${event}`" alt="">
            </NuxtLink>
          </div>
        </VueSlickCarousel>
      </div>
    </section>

    <!-- CATEGORIES -->
    <section>
      <div class="bg-light-grey lg:px-48 lg:py-12 p-10">
        <h1 class="text-maroon lg:text-4xl text-lg font-bold text-center">CATEGORIES</h1>
        <template v-if="productCategories.length">
          <div class="grid grid-rows-2 auto-rows-auto divide-y-2 divide-maroon lg:mt-14 mt-7">
            <div class="grid grid-cols-4 lg:gap-8 gap-4 lg:px-16 px-6">
              <div :key="index" v-for="(category, index) in productCategories">
                <div v-if="category.section === 'men'" class="flex flex-col lg:gap-2 gap-2 h-full">
                  <NuxtLink :to="category.url">
                    <img class="transition duration-50 ease-in-out transform hover:scale-110 object-contain w-full lg:h-44 h-20" :src="category.imgUrl" alt="">
                  </NuxtLink>
                  <span class="block uppercase font-bold lg:text-sm text-xs text-dark-grey text-center">{{ category.name }}</span>
                </div>
              </div>
            </div>
            <div class="grid grid-cols-4 lg:gap-8 gap-4 lg:px-16 px-6">
              <div :key="index" v-for="(category, index) in productCategories">
                <div v-if="category.section === 'woman'" class="flex flex-col lg:gap-2 gap-2 h-full">
                  <NuxtLink :to="category.url">
                    <img class="transition duration-50 ease-in-out transform hover:scale-110 object-contain w-full lg:h-44 h-20" :src="category.imgUrl" alt="">
                  </NuxtLink>
                  <span class="block uppercase font-bold lg:text-sm text-xs text-dark-grey text-center">{{ category.name }}</span>
                </div>
              </div>
            </div>
          </div>
        </template>
        <template v-else>no categories data</template>
      </div>
    </section>

    <!-- FEATURED BRANDS CAROUSEL -->
    <section>
      <div class="grid grid-cols-3 items-center lg:gap-8 gap-6 lg:p-40 p-10">
        <span class="justify-self-end uppercase lg:text-5xl text-lg text-dark-grey font-bold">FEATURED <br> BRANDS</span>
        <VueSlickCarousel class="col-span-2" v-if="featuredBrands.length" v-bind="carouselSettings.featuredBrands">
          <fragment :key="i" v-for="(featured, i) of featuredBrands">
            <div class="grid grid-rows-3 grid-cols-3 lg:gap-4 gap-2 lg:p-4 p-2">
              <fragment :key="j" v-for="(brand, j) of featured.sections">
                <div v-if="brand.isLarge" class="flex items-center row-span-2 col-span-2 border-2 border-dark-grey shadow-lg lg:p-10 p-5">
                  <NuxtLink :to="'/brands'">
                    <img class="transition duration-50 ease-in-out transform hover:scale-110 object-contain w-full lg:h-16" :src="`medias/logos/brands/${brand.name}`" alt="">
                  </NuxtLink>
                </div>
                <div v-else class="flex items-center border-2 border-dark-grey shadow-lg lg:p-6 p-3">
                  <NuxtLink :to="'/brands'">
                    <img class="transition duration-50 ease-in-out transform hover:scale-110 object-contain w-full lg:h-10" :src="`medias/logos/brands/${brand.name}`" alt="">
                  </NuxtLink>
                </div>
              </fragment>
            </div>
          </fragment>
        </VueSlickCarousel>
      </div>
    </section>

    <!-- MOST WANTED CAROUSEL -->
    <section>
      <div class="bg-dark-grey lg:p-20 p-10">
        <h1 class="uppercase lg:text-4xl text-xl text-light-grey text-center font-bold">Most Wanted</h1>
        <div class="lg:mt-10 mt-5">
          <VueSlickCarousel v-if="productMostWanteds.length" v-bind="carouselSettings.mostWanteds">
            <div class="lg:p-4 p-2" :key="index" v-for="(product, index) in productMostWanteds">
              <Product :product="product" />
            </div>
          </VueSlickCarousel>
        </div>
      </div>
    </section>

    <!-- FG DESCRIPTION -->
    <section>
      <div class="grid grid-cols-2 divide-x-2 divide-maroon lg:px-32 lg:py-32 p-10">
        <div class="flex flex-col justify-center justify-self-end lg:pr-14 pr-7 lg:py-14 py-7">
          <span class="uppercase lg:text-4xl text-xl text-maroon font-bold">Get to <br> Know <br> Fashiongrail</span>
        </div>
        <div class="flex flex-col justify-center justify-self-start lg:pl-14 pl-7 lg:py-14 py-7">
          <p class="lg:text-base text-xs text-justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
          </p>
        </div>
      </div>
    </section>
  </main>
</template>

<script lang="ts">
  import { Vue, Component, Prop } from 'nuxt-property-decorator';
  import VueSlickCarousel from 'vue-slick-carousel'
  import 'vue-slick-carousel/dist/vue-slick-carousel.css'
  import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

  import { $axios } from '../utilities/api';
  import { Product } from '../models/product/product';
  import { ProductCategories }  from '../models/product/product-categories';
  import ProductComponent from '../components/Product.vue';

  @Component({
    components: {
      VueSlickCarousel,
      ProductComponent
    }
  })
  export default class LandingPage extends Vue {
    public carouselSettings?= {
      featuredEvent: {
        arrows: false,
        dots: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 5000,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      },
      featuredBrands: {
        arrows: false,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      },
      mostWanteds: {
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
      }
    };
    public featuredEvents: string[]= ['event-1.jpg', 'event-2.jpg', 'event-3.jpg'];
    public featuredBrands= [
      {
        sections: [
          { name: 'zara.png', isLarge: true },
          { name: 'hugo-boss.png' },
          { name: 'kenzo.png' },
          { name: 'fendi-roma.png' },
          { name: 'prada.png' },
          { name: 'gucci.png' }
        ]
      },
      {
        sections: [
          { name: 'zara.png', isLarge: true },
          { name: 'hugo-boss.png' },
          { name: 'kenzo.png' },
          { name: 'fendi-roma.png' },
          { name: 'prada.png' },
          { name: 'gucci.png' }
        ]
      },
      {
        sections: [
          { name: 'zara.png', isLarge: true },
          { name: 'hugo-boss.png' },
          { name: 'kenzo.png' },
          { name: 'fendi-roma.png' },
          { name: 'prada.png' },
          { name: 'gucci.png' }
        ]
      }
    ];
    public productMostWanteds: Product[]= [];
    public productCategories: ProductCategories[]= [];

    async fetch() {
      this.productMostWanteds= await $axios.$get('/data/product/most-wanteds.json');
      this.productCategories= await $axios.$get('/data/product/categories.json');
    }
  };
</script>

<style lang="scss">
  button {
    &.slick-prev:before, &.slick-next:before {
      /*color: black !important;*/
    }
  }

  ul.slick-dots {
    /*position: static !important;*/
    display: flex !important;
    justify-content: center;
    gap: 5px;

    li {
      margin: 0 !important;

      button:before {
        color: #7B322F !important;
        font-size: 0.5rem;

        @media (min-width: 1024px) {
          font-size: 0.8rem;
        }
      }
    }
  }
</style>

