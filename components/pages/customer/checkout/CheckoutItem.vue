<template>
  <div class="flex flex-col">
    <AccordionContainer>
      <AccordionPanel>
        <div slot="header" class="flex items-center gap-x-3">
          <i class="w-14">
            <img src="/medias/icons/shop.png" alt="">
          </i>
          <div class="flex flex-col">
            <span class="text-xl font-bold">Pull&Bear</span>
            <span class="italic">Jakarta Pusat</span>
          </div>
        </div>
        <div slot="content" class="grid grid-flow-row gap-y-3 mt-6">
          <div v-for="number of 3" :key="number" class="rounded-2xl bg-dark-grey px-16 py-8">
            <div class="flex items-center gap-x-6">
              <img src="/medias/images/products/product-1.png" class="rounded-2xl object-contain bg-white w-48 h-48 p-2" alt="">
              <div class="flex flex-col gap-y-1 text-white ">
                <h1 class="uppercase text-2xl font-semibold">Velvet Outer</h1>
                <span class="italic text-sm">color: sky blue; size: m</span>
                <span class="mt-4">Rp. {{ $thousandSeparators(100000) }}</span>
              </div>
            </div>
          </div>
        </div>
      </AccordionPanel>
    </AccordionContainer>

    <!--<div class="flex flex-col gap-4">
      <div class="flex items-center gap-x-3">
        <i class="w-14">
          <img src="/medias/icons/shop.png" alt="">
        </i>
        <div class="flex flex-col">
          <span class="text-xl font-bold">Pull&Bear</span>
          <span class="italic">Jakarta Pusat</span>
        </div>
      </div>

      <div class="rounded-2xl bg-dark-grey px-16 py-8">
        <div class="flex items-center gap-x-6">
          <img src="/medias/images/products/product-1.png" class="rounded-2xl object-contain bg-white w-48 h-48 p-2" alt="">
          <div class="flex flex-col gap-y-1 text-white ">
            <h1 class="uppercase text-2xl font-semibold">Velvet Outer</h1>
            <span class="italic text-sm">color: sky blue; size: m</span>
            <span class="mt-4">Rp. {{ $thousandSeparators(100000) }}</span>
          </div>
        </div>
      </div>
    </div>-->

    <!-- EXTRA NOTE -->
    <div class="flex flex-col gap-y-3 mt-4">
      <span>detail pemesanan / catatan tamban untuk penjual</span>
      <textarea rows="5" class="rounded-3xl border-dark-grey bg-transparent w-full p-4 focus:border-dark-grey focus:ring-0" style="resize: none;"></textarea>
    </div>

    <AccordionContainer class="mt-4">
      <AccordionPanel>
        <span slot="header" class="text-lg text-left ml-8">jasa pengiriman</span>
        <ShipmentInformation slot="content" class="p-6" />
        <div slot="extras" class="flex-grow text-right mr-12">
          <span class="text-lg">Rp. berapa</span>
        </div>
      </AccordionPanel>
      <AccordionPanel>
        <span slot="header" class="text-lg text-left ml-8">voucher</span>
        <div slot="content" class="p-6">cooming soon</div>
        <div slot="extras" class="flex-grow text-right mr-12">
          <span class="text-lg">Rp. berapa</span>
        </div>
      </AccordionPanel>
    </AccordionContainer>

    <div class="grid grid-cols-2 items-center gap-x-2 px-8 py-4">
      <span class="text-lg font-bold">subtotal</span>
      <span class="text-right text-lg font-semibold mr-4">Rp. berapa</span>
    </div>
  </div>
</template>

<script lang="ts">
  import { Vue, Component, Prop } from 'nuxt-property-decorator';

  import { AccordionContainer, AccordionPanel } from '~/components/utilities/widgets/accordion';
  import ShipmentInformation from '../../product-detail/ShipmentInformation.vue';

  @Component({
    components: {
      AccordionContainer,
      AccordionPanel,
      ShipmentInformation
    }
  })
  export default class CheckoutItemComponent extends Vue {

  }
</script>
