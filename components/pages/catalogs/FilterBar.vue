<template>
  <aside>
    <h1 class="text-xl font-bold">filter</h1>
    <div class="bg-dark-grey rounded-3xl grid grid-flow-row items-center divide-y-2 divide-white lg:mt-2">
      <span class="cursor-pointer text-white lg:p-4 lg:pt-10">Lokasi</span>
      <span class="cursor-pointer text-white lg:p-4">Penilaian</span>
      <span class="cursor-pointer text-white lg:p-4">Harga</span>
    </div>
  </aside>
</template>

<script lang="ts">
  import { Vue, Component, Prop } from 'nuxt-property-decorator';

  @Component
  export default class FilterBarComponent extends Vue {

  }
</script>

