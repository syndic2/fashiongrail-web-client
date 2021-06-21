<template>
  <div v-if="isOpen" class="bg-black bg-opacity-25 fixed inset-0 flex justify-center items-center z-10">
    <div :class="styleClasess">
      <div class="flex justify-end mb-6">
        <button @click="close" class="text-dark-grey active:outline-none focus:outline-none">
          <font-awesome-icon icon="times" size="lg" />
        </button>
      </div>
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
  import { Vue, Component, Prop, Watch } from 'nuxt-property-decorator';
  //'bg-light-grey rounded-4xl px-8 pt-6 pb-20'
  @Component
  export default class ModalBox extends Vue {
    @Prop({ default: 'bg-white' }) styleClasess!: string;
    @Prop({ default: false }) onOpen!: boolean;

    public isOpen: boolean= this.onOpen;

    @Watch('onOpen')
    onOpenChanged() {
      this.isOpen= this.onOpen;
    }

    close() {
      this.isOpen= false;
      this.$emit('onClose', this.isOpen);
    }
  }
</script>
