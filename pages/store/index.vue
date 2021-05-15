<template>
  <main>
    <div class="p-16 grid grid-cols-4 gap-12" >
      <div class="py-12 bg-light-grey rounded-4xl">
        <div class="grid grid-rows-12 px-12">
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
      <div class="p-8 bg-light-grey col-span-3 rounded-4xl">
        <keep-alive>
          <component v-bind:is="dashboard" />
        </keep-alive>
      </div>
    </div>
  </main>
</template>





<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator';
import ProfileComponent from '../../components/pages/store/dashboards/Profile.vue'
import HomeComponent from '../../components/pages/store/dashboards/Home.vue'
@Component({
  components: {
    ProfileComponent,
    HomeComponent
  }
})
export default class StorePage extends Vue{
  public dashboard = HomeComponent

  changeDashboard(dashboard:string){
    switch (dashboard) {
      case 'profile':
        this.dashboard= ProfileComponent;
        break;
      case 'home':
        this.dashboard= HomeComponent;
        break;
      default:
        this.dashboard=ProfileComponent;
        break;
    }

  }

}
</script>

