<template>
  <div class="rounded-3.5xl bg-light-grey px-12 pt-4 pb-12">
    <div class="flex flex-col gap-y-5">
      <!-- IDENTITIY -->
      <div class="flex items-center gap-x-3">
        <img src="/medias/images/profilepembeli.png" class="rounded-full w-48" alt="">
        <div class="flex flex-col items-center gap-y-1">
          <h1 class="uppercase text-2xl text-maroon font-bold">Dicky Bastian Steel</h1>
          <span class="text-sm">surabaya, jawa timur</span>
          <span class="italic text-sm">bergabung 2 tahun yang lalu</span>
        </div>
      </div>

      <!-- FORM -->
      <form @submit.prevent="onUpdate" class="grid grid-cols-3 gap-5">
        <div class="col-span-2 flex flex-col gap-y-2">
          <label for="fullname" class="font-semibold">Fullname</label>
          <input type="text" class="rounded-full border-dark-grey bg-transparent px-4 py-2 focus:border-dark-grey focus:ring-0 focus:outline-none">
        </div>
        <div class="flex flex-col gap-y-2">
          <label for="gender" class="font-semibold">Gender</label>
          <input type="text" class="rounded-full border-dark-grey bg-transparent px-4 py-2 focus:border-dark-grey focus:ring-0 focus:outline-none">
        </div>
        <div class="col-span-2 flex flex-col gap-y-2">
          <label for="fullname" class="font-semibold">Address</label>
          <input type="text" class="rounded-full border-dark-grey bg-transparent px-4 py-2 focus:border-dark-grey focus:ring-0 focus:outline-none">
        </div>
        <div class="flex flex-col gap-y-2">
          <label for="gender" class="font-semibold">Date of Birth</label>
          <input type="date" class="rounded-full border-dark-grey bg-transparent px-4 py-2 focus:border-dark-grey focus:ring-0 focus:outline-none">
        </div>
        <div class="col-span-2 flex flex-col gap-y-2">
          <label for="fullname" class="font-semibold">Email</label>
          <input type="text" class="rounded-full border-dark-grey bg-transparent px-4 py-2 focus:border-dark-grey focus:ring-0 focus:outline-none">
        </div>
        <div class="flex flex-col gap-y-2">
          <label for="gender" class="font-semibold">Phone</label>
          <input type="text" class="rounded-full border-dark-grey bg-transparent px-4 py-2 focus:border-dark-grey focus:ring-0 focus:outline-none">
        </div>
        <div class="col-span-3 flex justify-center mt-8">
          <button type="submit" class="bg-transparent border rounded-full border-dark-grey focus:border-dark-grey px-8 py-2 hover:bg-dark-grey hover:text-white focus:ring-0 focus:outline-none">simpan</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
  import { Vue, Component, Prop } from 'nuxt-property-decorator';

  @Component
  export default class IndexDashboardComponent extends Vue {

    onUpdate() {
      alert('test');
    }
  }
</script>
