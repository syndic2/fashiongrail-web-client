<template>
  <div>
    <Header />
    <Nuxt />
    <Footer />
  </div>
</template>

<script lang="ts">
  import { Vue, Component, Prop } from 'nuxt-property-decorator';

  import Header from '../components/utilities/Header.vue';
  import Footer from '../components/utilities/Footer.vue';

  @Component({
    components: {
      Header,
      Footer
    }
  })
  export default class DefaultLayout extends Vue {

  }
</script>
