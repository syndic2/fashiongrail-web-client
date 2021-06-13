<template>
  <div>
    <button @click="onToogle" class="flex items-center gap-4 border-b-2 border-dark-grey w-full pb-2 focus:outline-none">
      <slot name="header" />
      <font-awesome-icon :icon="isOpen === true ? 'chevron-up' : 'chevron-down'" />
      <slot name="extras" />
    </button>
    <div class="accordion-content" ref="accordionContent">
      <slot name="content" />
    </div>
  </div>
</template>

<script lang="ts">
  import { Vue, Component, Prop, Ref } from 'nuxt-property-decorator';

  @Component
  export default class AccordionPanel extends Vue {
    @Ref('accordionContent') readonly accordionContent!: HTMLDivElement;

    public isOpen: boolean= false;

    mounted() {
      //this.onToogle();
    }

    onToogle() {
      this.isOpen= !this.isOpen;

      if (!this.isOpen) {
        this.accordionContent.style.maxHeight= '0';
      } else {
        this.accordionContent.style.maxHeight= `${this.accordionContent.scrollHeight}px`;
      }
    }
  }
</script>

<style lang="scss" scoped>
  .accordion-content {
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.3s ease-out;
  }
</style>
