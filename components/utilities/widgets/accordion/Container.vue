<template>
  <div class="grid grid-flow-row gap-3">
    <slot />
  </div>
</template>

<script lang="ts">
  import { Vue, Component, Prop } from 'nuxt-property-decorator';

  @Component
  export default class AccordionContainer extends Vue {

  }
</script>
