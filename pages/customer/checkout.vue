<template>
  <main class="bg-light-grey mt-16 py-14 px-36">
    <div class="flex flex-col divide-y-2 divide-dark-grey">
      <h1 class="uppercase text-maroon text-3xl font-bold py-4">Checkout</h1>
      <div class="flex items-center justify-between py-6">
        <div class="flex flex-col gap-y-1">
          <span class="text-xl font-bold">alamat pengiriman</span>
          <span class="italic text-lg">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed <br> diam nonummy nibh euismod tincidunt ut laoreet</span>
        </div>
        <button class="focus:outline-none">
          <div class="flex justify-center items-center rounded-full bg-dark-grey text-white w-10 h-10">
            <font-awesome-icon icon="chevron-right" size="lg" />
          </div>
        </button>
      </div>
      <span></span>
    </div>
    <div class="grid grid-flow-row gap-y-14 mt-16">
      <CheckoutItem v-for="number in 5" :key="number" />
    </div>
    <div class="flex gap-x-2 mt-10">
      <span class="flex-grow text-lg font-semibold ml-8">grand total</span>
      <span class="text-lg font-semibold mr-12">Rp. berapa</span>
    </div>
  </main>
</template>

<script lang="ts">
  import { Vue, Component, Prop} from 'nuxt-property-decorator';

  import CheckoutItem from '~/components/pages/customer/checkout/CheckoutItem.vue';

  @Component({
    components: {
      CheckoutItem
    }
  })
  export default class CheckoutPage extends Vue {

  }
</script>
