<template>
  <div class="flex gap-4">
    <div class="text-dark-grey" style="heigth: fit-content;">
      <font-awesome-icon icon="truck" />
    </div>
    <div class="flex-grow flex flex-col gap-3">
      <span>Dikirim dari Surabaya, Jawa Timur</span>
      <div class="grid grid-cols-2 items-center gap-3">
        <span>pilih kecamatan tujuan</span>
        <select v-model="selectedShipmentId" @change="changeProvince" class="bg-transparent text-sm rounded-2xl border border-dark-grey w-1/2 px-2 py-1 focus:outline-none">
          <option class="bg-dark-grey text-light-grey" v-bind:value="information.id" :key="index" v-for="(information, index) in shipmentInformations">
            {{ information.province }}
          </option>
        </select>
      </div>
      <template v-if="selectedShipment !== null">
        <div class="grid grid-cols-2 gap-3" :key="index" v-for="(courier, index) in selectedShipment.couriers">
          <span>{{ courier.name }}</span>
          <span>Rp. {{ $thousandSeparators(courier.price) }}</span>
        </div>
      </template>
      <template v-else>no courier data</template>
    </div>
  </div>
</template>

<script lang="ts">
  import { Vue, Component, Prop } from 'nuxt-property-decorator';

  import { $axios } from '../../../utilities/api';
  import { ShipmentInformation } from '../../../models/shipment-information';

  @Component
  export default class ShipmentInformationComponent extends Vue {
    public selectedShipmentId: number= 1;
    public selectedShipment: ShipmentInformation | null | undefined= null;
    public shipmentInformations: ShipmentInformation[]= [];

    async fetch() {
      this.shipmentInformations= await $axios.$get('/data/shipment-informations.json');
      this.selectedShipment= this.shipmentInformations.find((object: ShipmentInformation) => object.id === this.selectedShipmentId);
    }

    changeProvince() {
      this.selectedShipment= this.shipmentInformations.find((object: ShipmentInformation) => object.id === this.selectedShipmentId);
    }
  }
</script>
