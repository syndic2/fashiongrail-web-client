<template>
  <main>
    <div class="p-16 flex justify-center gap-12" >
      <div class="py-12 bg-light-grey rounded-4xl h-fit-content">
        <div class="grid grid-rows-12 px-12 ">
          <div class="row-span-8 flex flex-col justify-center items-center gap-4 ">
            <img src="/medias/logos/brands/kenzo.png" class="w-32 h-32 object-contain bg-white rounded-full" @click="changeDashboard('profile')">
            <span class="text-maroon text-2xl font-bold">Kenzo</span>
            <button class="rounded-full border-2 border-grey py-2 px-6 w-full focus:outline-none focus:bg-dark-grey focus:text-white" @click="changeDashboard('home')">Home</button>
            <button class="rounded-full border-2 border-grey py-2 px-6 w-full focus:outline-none focus:bg-dark-grey focus:text-white" @click="changeDashboard('pesanan')">Pesanan</button>
            <button class="rounded-full border-2 border-grey py-2 px-6 w-full focus:outline-none focus:bg-dark-grey focus:text-white" @click="changeDashboard('etalase')">Etalase Toko</button>
            <button class="rounded-full border-2 border-grey py-2 px-6 w-full focus:outline-none focus:bg-dark-grey focus:text-white" @click="changeDashboard('transaksi')">Data Transaksi</button>
          </div>
          <button class="row-start-12 rounded-full border-2 border-grey py-2 px-6 w-full">Logout</button>
        </div>
      </div>
      <div class="p-8 bg-light-grey col-span-3 rounded-4xl" style="width: 52rem">
        <keep-alive>
          <component v-bind:is="dashboard" />
        </keep-alive>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
  import { Vue, Component, Prop } from 'nuxt-property-decorator';
  import HomeDashboard from '../../components/pages/store/dashboards/Home.vue';
  import ProfileDashboard from '../../components/pages/store/dashboards/Profile.vue';
  import OrdersDashbboard from "../../components/pages/store/dashboards/Orders.vue";
  import ProductsDashboard from "~/components/pages/store/dashboards/Products.vue";

  @Component({
    components: {
      HomeDashboard,
      ProfileDashboard,
      OrdersDashbboard,
      ProductsDashboard
    }
  })
  export default class StorePage extends Vue{
    public dashboard = HomeDashboard
    
    changeDashboard(dashboard:string) {
      switch (dashboard) {
        case 'home':
          this.dashboard = HomeDashboard
          break;

        case 'profile':
          this.dashboard = ProfileDashboard
          break;

        case 'pesanan':
          this.dashboard = OrdersDashbboard
          break;

        case 'etalase':
          this.dashboard = ProductsDashboard
          break;
      }
    }
  }
</script>

