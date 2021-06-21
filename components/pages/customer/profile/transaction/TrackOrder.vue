<template>
  <fragment>
    <span class="text-md font-bold">pesanan no resi: {{ trackOrders.resiNumber }}</span>
    <div class="flex flex-col gap-y-8 mt-12">
      <div v-for="(track, index) in trackOrders.tracks" :key="index" class="flex gap-x-2 items-center text-sm gap-x-8">
        <div class="flex flex-col items-end">
          <span>{{ track.date }}</span>
          <span>{{ track.time }}</span>
        </div>
        <span class="italic">{{ track.status }}</span>
      </div>
    </div>
  </fragment>
</template>

<script lang="ts">
  import { Vue, Component, Prop } from 'nuxt-property-decorator';

  @Component
  export default class TrackOrderComponent extends Vue {
    public trackOrders= {
      resiNumber: 1234567890,
      tracks: [
        {
          date: '22-01-2021',
          time: '11.20 WIB',
          status: 'paket diterima oleh Dicky Bastian Steel'
        },
        {
          date: '22-01-2021',
          time: '11.20 WIB',
          status: 'paket sedang menuju alamat pengiriman'
        },
        {
          date: '22-01-2021',
          time: '11.20 WIB',
          status: 'paket sudah tiba di SUB'
        },
        {
          date: '22-01-2021',
          time: '11.20 WIB',
          status: 'paket sudah transit'
        },
        {
          date: '22-01-2021',
          time: '11.20 WIB',
          status: 'paket dikirimkan oleh Dicky Bastial Steel2'
        }
      ]
    };
  }
</script>
