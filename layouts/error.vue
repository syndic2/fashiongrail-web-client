<template>
  <main class="flex justify-center items-center h-screen">
    <span class="text-2xl text-maroon">ERROR 404. hayo mau buka :)</span>
  </main>
</template>

<script lang="ts">
  import { Vue, Component, Prop} from 'nuxt-property-decorator';

  @Component
  export default class ErrorPage extends Vue {
    layout() {
      return 'plain';
    }
  }
</script>

