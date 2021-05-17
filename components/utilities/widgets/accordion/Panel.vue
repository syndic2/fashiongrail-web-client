<template>
  <div>
    <button @click="onToogle()" class="flex items-center gap-2 border-b border-dark-grey w-full pb-2 focus:outline-none">
      <slot name="header" />
      <font-awesome-icon :icon="isOpen === true ? 'chevron-up' : 'chevron-down'" />
    </button>
    <div class="transisiton ease-out duration-700" v-bind:class="{ 'hidden': !isOpen }">
      <slot name="content" />
    </div>
  </div>
</template>

<script lang="ts">
  import { Vue, Component, Prop } from 'nuxt-property-decorator';

  @Component
  export default class AccordionPanel extends Vue {
    public isOpen: boolean= false;

    onToogle() {
      this.isOpen= !this.isOpen;
    }
  }
</script>

<style lang="scss" scoped>

</style>
