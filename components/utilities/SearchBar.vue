<template>
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
</template>

<script lang="ts">
  import { Vue, Component, Prop } from 'nuxt-property-decorator';

  @Component
  export default class SearchBarComponent extends Vue {
    
  }
</script>
