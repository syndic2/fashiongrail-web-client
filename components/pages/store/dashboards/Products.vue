<template>
  <div class="py-6 px-4">
    <span class="font-bold block text-maroon text-3xl text-center">Daftar Produk Toko</span>
    <div class="relative mt-10">
      <div class="border-2 border-dark-grey absolute top-8 left-0 rounded-4xl z-20 bg-light-grey px-8 pb-8">
        <div class="grid grid-cols-8 gap-0.5 mt-12 justify-items-center">
          <span class="font-semibold">&nbsp;</span>
          <span class="font-semibold col-span-2">Nama Barang</span>
          <span class="font-semibold">Ukuran</span>
          <span class="font-semibold">Warna</span>
          <span class="font-semibold">Stok</span>
          <span class="font-semibold">Harga</span>
          <span class="font-semibold">Ket</span>
        </div>
        <div class="mt-4 grid grid-flow-row gap-4 overflow-y-auto h-96">
          <CheckoutItem/>
        </div>
      </div>
    </div>

  </div>

</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator';
import CheckoutItem from "~/components/pages/customer/checkout/CheckoutItem.vue";
@Component(
  {
    components:{
      CheckoutItem
    }
  }
)
@Component
export default class ProductsComponent extends Vue {

}
</script>
