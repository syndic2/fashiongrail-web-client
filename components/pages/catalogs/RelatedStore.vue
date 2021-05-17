<template>
  <div class="bg-light-grey rounded-2xl lg:px-6 lg:py-2">
    <div class="grid grid-cols-2 gap-2">
      <div class="flex items-center gap-2">
        <NuxtLink to="">
          <img class="object-contain w-40 h-40" src="medias/logos/brands/pull-&-bear.png" alt="">
        </NuxtLink>
        <div>
          <span class="text-lg font-bold">Pull & Bear</span>
          <p class="leading-tight text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>
        </div>
      </div>
      <div class="grid grid-flow-col divide-x divide-dark-grey lg:py-4">
        <div class="flex flex-col justify-center items-center gap-1 font-bold">
          <span class="text-3xl text-dark-grey">58</span>
          <span class="text-sm">produk</span>
        </div>
        <div class="flex flex-col justify-center items-center gap-1 font-bold">
          <span class="text-3xl text-dark-grey">4.7</span>
          <span class="text-sm">penilaian</span>
        </div>
        <div class="flex flex-col justify-center items-center gap-1 font-bold">
          <span class="text-3xl text-dark-grey">70%</span>
          <span class="text-sm">presentase chat dibalas</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import { Vue, Component, Prop } from 'nuxt-property-decorator';

  @Component
  export default class RelatedStoreComponent extends Vue {

  }
</script>
