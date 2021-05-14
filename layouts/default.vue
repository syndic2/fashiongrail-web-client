<template>
  <div>
    <Header />
    <Nuxt />
    <Footer />
  </div>
</template>

<script lang="ts">
  import Header from '../components/utilities/Header.vue';
  import Footer from '../components/utilities/Footer.vue';

  export default {
    components: {
      Header,
      Footer
    }
  }
</script>
