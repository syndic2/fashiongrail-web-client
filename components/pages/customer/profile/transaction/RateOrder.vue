<template>
  <fragment>
    <h1 class="uppercase text-lg text-center font-bold">Velvet Outer</h1>
    <form class="mt-10">
      <div class="flex gap-x-4">
        <div class="border-1   rounded-2xl border-dark-grey bg-transparent flex flex-col justify-center items-center gap-y-2 p-6">
          <font-awesome-icon icon="plus" size="2x" class="text-dark-grey" />
          <span class="italic text-center text-sm">unggah foto <br> atau video</span>
        </div>
        <textarea class="border-1 rounded-2xl border-dark-grey bg-transparent focus:outline-none focus:ring-0 focus:border-dark-grey" style="resize: none;" rows="5" cols="30" placeholder="komentar & ulasan"></textarea>
      </div>
      <div class="flex flex-col items-center gap-y-2 mt-8">
        <span class="italic text-md">rating kepuasan:</span>
        <div class="flex gap-x-4">
          <font-awesome-icon
            @mouseover="onMouseOverStar(value)"
            @mouseleave="onMouseLeaveStar"
            @click="onSelectStar(value)"
            v-for="(value, index) in 5"
            :key="index"
            :icon="[ratingIconPrefixes[index], 'star']"
            size="2x"
            :id="`star-${index}`"
            class="text-dark-grey" />
        </div>
      </div>
      <div class="flex justify-center mt-12">
        <button type="submit" class="bg-dark-grey rounded-full italic text-white px-6 py-1 focus:outline-none">kirim</button>
      </div>
    </form>
  </fragment>
</template>

<script lang="ts">
  import { Vue, Component, Prop } from 'nuxt-property-decorator';

  @Component
  export default class RateOrderComponent extends Vue {
    public ratingIconPrefixes: string[]= ['far', 'far', 'far', 'far', 'far'];
    public selectedRatingValue: number= 0;
    public hoveredRatingValue: number= 0;

    onMouseOverStar(value: number) {
      this.hoveredRatingValue= value;
      for (let i= 0; i < this.hoveredRatingValue; i++) {
        this.ratingIconPrefixes[i]= 'fas';
      }
      this.$forceUpdate();
    }

    onMouseLeaveStar() {
      for (let i= 0; i < 5; i++) {
        if (i < this.selectedRatingValue) {
          this.ratingIconPrefixes[i]= 'fas';
        } else {
          this.ratingIconPrefixes[i]= 'far';
        }
      }
      this.$forceUpdate();
    }

    onSelectStar(value: number) {
      this.selectedRatingValue= value;
      this.ratingIconPrefixes.forEach((_, index) => this.ratingIconPrefixes[index]= 'far');

      for (let i= 0; i < this.selectedRatingValue; i++) {
        this.ratingIconPrefixes[i]= 'fas';
      }

      this.$forceUpdate();
    }
  }
</script>
