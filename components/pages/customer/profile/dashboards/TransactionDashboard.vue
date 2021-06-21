<template>
  <div class="flex flex-col gap-y-8">
    <!-- MENU -->
    <div class="rounded-3.5xl bg-light-grey p-12">
      <h3 class="uppercase text-maroon text-center text-xl font-bold">Pesanan Saya</h3>
      <div class="flex justify-center items-center gap-x-8 mt-10">
        <div
          class="flex flex-col items-center gap-y-4 filter brightness-50 cursor-pointer"
          @click="openMenu(menu)"
          v-bind:class="{ 'brightness-100': menu.clicked }"
          v-for="(menu, index) in menuButtons"
          :key="index"
        >
          <div class="flex justify-center items-center rounded-2xl bg-dark-grey w-28 h-36" >
            <img :src="`/medias/icons/customer/${menu.status}.png`" alt="">
          </div>
          <span>{{ menu.name }}</span>
        </div>
      </div>
    </div>

    <!-- CONTENT -->
    <div class="rounded-3.5xl bg-light-grey p-12">
      <div class="flex items-center gap-x-6">
        <img src="/medias/images/products/product-1.png" class="rounded-3.5xl bg-white object-contain w-36 h-36 p-2" alt="">
        <div class="flex flex-col">
          <div class="flex gap-x-1">
            <img src="/medias/icons/shop.png" class="object-contain w-4" alt="">
            <span class="text-sm">Pull&Bear</span>
          </div>
          <h1 class="uppercase text-lg font-bold mt-2">Velvet Outer</h1>
          <span class="italic text-sm">color: sky blue; size: m</span>
          <span class="text-sm font-bold mt-4">Rp. 199.000</span>
        </div>
        <button @click="onProcess" class="italic rounded-full bg-dark-grey text-white text-sm ml-auto px-6 py-2 focus:outline-none">
          {{ transaction.text }}
        </button>
      </div>
    </div>
    
    <!-- MODAL -->
    <ModalBox :styleClasess="'bg-light-grey rounded-4xl px-8 pt-6 pb-20'" :onOpen="toogleModal" @onClose="onCloseModal">
      <TrackOrder v-if="transaction.status === 'delivered'" />
      <RateOrder v-else-if="transaction.status === 'rating'" />
    </ModalBox>
  </div>
</template>

<script lang="ts">
  import { Vue, Component, Prop } from 'nuxt-property-decorator';
  import ModalBox from '../../../../utilities/widgets/modal/ModalBox.vue';
  import TrackOrder from '../transaction/TrackOrder.vue';
  import RateOrder from '../transaction/RateOrder.vue';

  @Component({
    components: {
      ModalBox,
      TrackOrder,
      RateOrder
    }
  })
  export default class TransactionDashboardComponent extends Vue {
    public transaction= { text: 'bayar sekarang', status: 'unpaid' };
    public menuButtons: any[]= [
      { name: 'belum bayar', status: 'unpaid', clicked: true },
      { name: 'dikemas', status: 'packing', clicked: false },
      { name: 'dikirim', status: 'delivered', clicked: false },
      { name: 'penilaian', status: 'rating', clicked: false }
    ];
    public toogleModal: boolean= false;

    reset() {
      this.menuButtons.forEach(menu => menu.clicked= false);
      this.toogleModal= false;
    }

    openMenu(menu: any) {
      this.reset();
      this.transaction.status= menu.status;
      menu.clicked= true;

      if (menu.status === 'unpaid') this.transaction.text= 'bayar sekarang';
      else if (menu.status === 'packing') this.transaction.text= 'chat toko';
      else if (menu.status === 'delivered') this.transaction.text= 'lacak pengiriman';
      else if (menu.status === 'rating') this.transaction.text= 'beri penilaian'
    }

    onCloseModal(isOpen: boolean) {
      this.toogleModal= isOpen;
    }

    onProcess() {
      if (this.transaction.status === 'delivered' || this.transaction.status === 'rating') {
        this.toogleModal= true;
      }
    }
  }
</script>
