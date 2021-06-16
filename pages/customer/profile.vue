<template>
  <main>
    <div class="py-28">
      <div class="flex justify-center gap-x-10">
        <!-- LEFT SIDE -->
        <div class="flex flex-col items-center gap-y-5 bg-light-grey rounded-3.5xl w-fit-content p-8" style="height: 40rem;">
          <div class="flex flex-col items-center">
            <img src="/medias/images/profilepembeli.png" class="rounded-full object-contain w-36" alt="">
            <h1 class="uppercase text-maroon text-lg font-bold">Dicky Bastian Steel</h1>
          </div>

          <div class="flex-grow flex flex-col gap-y-3">
            <button
              class="flex items-center border border-dark-grey rounded-full px-7 py-2 focus:outline-none"
              @click="changeDashboard(menu)"
              v-bind:class="{ 'bg-dark-grey': menu.clicked, 'gap-x-3': index === 1 }"
              v-for="(menu, index) in menuButtons"
              :key="index"
            >
              <span v-bind:class="{ 'italic text-white': menu.clicked }" class="flex-grow">{{ menu.name }}</span>
              <font-awesome-icon v-bind:class="{ 'text-white': menu.clicked, 'text-dark-grey': !menu.clicked }" icon="chevron-circle-right" />
            </button>
          </div>

          <NuxtLink to="/" class="flex items-center gap-x-2 text-dark-grey">
            <font-awesome-icon icon="power-off" />
            <span class="font-semibold">logout</span>
          </NuxtLink>
        </div>

        <!-- RIGHT SIDE -->
        <keep-alive>
          <component class="col-span-2 overflow-y-auto" style="width: 44rem;" v-bind:is="dashboard" />
        </keep-alive>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
  import { Vue, Component, Prop } from 'nuxt-property-decorator';
  import { VueClass } from 'vue-class-component/lib/declarations';

  import IndexDashboardComponent from '~/components/pages/customer/profile/dashboards/IndexDashboard.vue';
  import TransactionDashboardComponent from '~/components/pages/customer/profile/dashboards/TransactionDashboard.vue';

  @Component({
    components: {
      IndexDashboardComponent,
      TransactionDashboardComponent
    }
  })
  export default class ProfilePage extends Vue {
    public menuButtons: any[]= [
      {
        name: 'Profile',
        dashboard: IndexDashboardComponent,
        clicked: true
      },
      {
        name: 'Data Transaksi',
        dashboard: TransactionDashboardComponent,
        clicked: false
      },
      {
        name: 'Favorit',
        clicked: false
      }
    ];
    public dashboard: VueClass<any>= IndexDashboardComponent;

    changeDashboard(menu: any) {
      this.menuButtons.forEach(button => button.clicked= false);
      menu.clicked= true;

      if (menu.dashboard) {
        this.dashboard= menu.dashboard;
      }
    }
  }
</script>
