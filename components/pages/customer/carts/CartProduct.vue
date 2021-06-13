<template>
  <div class="grid grid-cols-2 rounded-3xl bg-white mt-6 p-6">
    <div class="flex items-center gap-x-2">
      <input type="checkbox" class="form-checkbox rounded text-dark-grey w-5 h-5 focus:ring-0">
      <img :src="product.imgUrl" class="border-2 rounded-3xl border-grey bg-transparent object-contain w-40 h-40 p-2" alt="">
      <div class="ml-2">
        <h1 class="uppercase text-lg font-bold">{{ product.name }}</h1>
        <span class="block italic text-sm">color: sky blue, size: m</span>
        <span class="block font-bold text-sm mt-4">Rp. {{ $thousandSeparators(product.price) }}</span>
      </div>
    </div>
    <div class="flex justify-end items-end">
      <div class="flex justify-end items-end gap-x-1">
        <button class="h-fit-content focus:outline-none" @click="onIncrementAmount">
          <font-awesome-icon class="text-dark-grey" icon="plus-circle" />
        </button>
        <input type="number" class="border-0 border-b-2 border-dark-grey font-bold text-center w-11 p-1 focus:border-dark-grey focus:outline-none focus:ring-0" :value="amount" min="1" max="1000">
        <button class="h-fit-content focus:outline-none" @click="onDecrementAmount">
          <font-awesome-icon class="text-dark-grey" icon="minus-circle" />
        </button>
        <button class="ml-4 focus:outline-none" @click="onRemove">
          <font-awesome-icon class="text-dark-grey" icon="trash-alt" />
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import { Vue, Component, Prop } from 'nuxt-property-decorator';

  @Component
  export default class CartProductComponent extends Vue {
    @Prop() product: any;

    public amount: number= 1;

    onIncrementAmount() {
      if (this.amount < 1000) {
        this.amount++;
      }
    }

    onDecrementAmount() {
      if (this.amount > 1) {
        this.amount--;
      }
    }

    onRemove() {
      
    }
  }
</script>

<style lang="scss" scoped>
    /* Chrome, Safari, Edge, Opera */
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  input[type=number] {
    -moz-appearance: textfield;
  }
</style>
