<template>
  <div class="rounded-3xl shadow-lg bg-light-grey p-6">
    <div class="flex items-center gap-x-4">
      <input type="checkbox" class="form-checkbox rounded border-dark-grey text-dark-grey w-6 h-6 focus:ring-0">
      <div class="flex flex-col">
        <label class="text-xl font-bold">{{ cart.store_name }}</label>
        <span class="text-sm italic">{{ cart.store_location }}</span>
      </div>
    </div>
    <template v-if="cart.items.length">
      <CartProduct v-for="(item, index) in cart.items" :key="index" :product="item" />
    </template>
    <span v-else class="block mt-4">no data</span>
  </div>
</template>

<script lang="ts">
  import { Vue, Component, Prop } from 'nuxt-property-decorator';
  import CartProduct from './CartProduct.vue';

  @Component({
    components: {
      CartProduct
    }
  })
  export default class CartStoreComponent extends Vue {
    @Prop() cart!: any;
  }
</script>


