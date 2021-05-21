<template>
  <header>
    <div id="header-grid" class="lg:gap-4 gap-2 items-center bg-light-grey mt-16 p-5 lg:py-10 lg:px-24">
      <NuxtLink to="/" class="block w-full h-full bg-no-repeat bg-center bg-contain" style="background-image: url(/medias/images/fg-logo.png)"></NuxtLink>
      <div class="relative">
        <span class="absolute block inset-y-0 left-0 flex items-center lg:mx-3 mx-2">
          <button type="submit" class="focus:outline-none">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" class="lg:w-5 lg:h-5 w-3 h-3">
              <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
          </button>
        </span>
        <input class="lg:text-base text-sm placeholder-italic outline-none bg-light-grey border-2 border-dark-grey rounded-full lg:w-full lg:h-8 lg:py-5 lg:pl-10 h-4 py-3 pl-5" type="search" placeholder="type something...">
      </div>
      <div class="flex justify-end gap-2">
        <template v-if="!isAuthenticated">
          <NuxtLink to="/login">
            <button class="lg:text-base text-sm border-2 border-dark-grey rounded-full lg:py-1 lg:px-4 p-1 focus:outline-none hover:bg-dark-grey hover:text-white">login</button>
          </NuxtLink>
          <NuxtLink to="/register">
            <button class="lg:text-base text-sm border-2 border-dark-grey rounded-full lg:py-1 lg:px-4 p-1 focus:outline-none hover:bg-dark-grey hover:text-white">register</button>
          </NuxtLink>
        </template>
        <template v-else>
          <div v-if="authenticatedMenuIcons.length" class="grid grid-flow-col justify-items-center items-center divide-x-2 divide-grey">
            <NuxtLink :to="icon.url" :key="index" v-for="(icon, index) of authenticatedMenuIcons" class="text-dark-grey lg:text-base text-xs lg:px-2">
              <font-awesome-icon :icon="icon.name" />
            </NuxtLink>
          </div>
        </template>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
  import { Vue, Component, Prop } from 'nuxt-property-decorator';

  @Component
  export default class HeaderComponent extends Vue {
    public isAuthenticated: boolean= true;
    public authenticatedMenuIcons= [
      { name: 'shopping-cart', url: '' },
      { name: 'bell', url: '' },
      { name: 'envelope', url: '' },
      { name: 'heart', url: '/favourites' },
      { name: 'user', url: '' }
    ];
  }
</script>

<style>
  #header-grid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media (min-width: 1024px) {
    #header-grid {
      grid-template-columns: 1fr 2fr 1fr;
    }
  }
</style>
