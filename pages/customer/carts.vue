<template>
  <main>
    <div class="p-20 px-36">
      <h1 class="uppercase text-3xl text-maroon font-bold">Keranjang</h1>
      <div class="grid grid-cols-3 gap-x-12 mt-8">
        <template v-if="carts.length">
          <div class="col-span-2 grid grid-flow-row gap-y-12">
            <CartStore v-for="(cart, index) in carts" :key="index" :cart="cart" />
          </div>
        </template>
        <span v-else class="block mt-8">no data</span>
        <div class="flex flex-col gap-y-4 rounded-3xl bg-light-grey shadow-lg h-fit-content p-8 px-10">
          <span class="text-center mt-4">Total Belanja</span>
          <span class="text-center font-bold">1 Item: &nbsp; Rp. {{ $thousandSeparators(199000) }}</span>
          <button class="bg-dark-grey italic text-white font-semibold rounded-full w-fit-content mx-auto px-4 py-1 focus:outline-none" @click="onCheckout">
            checkout
          </button>
        </div>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
  import { Vue, Component, Prop } from 'nuxt-property-decorator';

  import { $axios } from '../../utilities/api';
  import { Cart } from '../../models/cart';
  import CartStore from '~/components/pages/customer/carts/CartStore.vue';

  @Component({
    components: {
      CartStore
    }
  })
  export default class CartsPage extends Vue {
    public grandTotal: number= 0;
    public carts: Cart[]= [];

    async fetch() {
      const { grandTotal, carts }= await $axios.$get(`${process.env.BASE_URL}/data/carts.json`);

      this.grandTotal= grandTotal;
      this.carts= carts;
    }
    
    onCheckout() {
      this.$router.push('/checkout');
    }
  }
</script>
