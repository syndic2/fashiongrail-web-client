<template>
  <main>
    <div class="grid lg:grid-cols-2 auto-rows-min lg:divide-x-2 lg:divide-y-0 divide-y-2 divide-dark-grey lg:p-20 p-10">
      <img class="justify-self-center lg:w-4/5" src="medias/images/welcome.png" alt="">
      <div class="flex lg:flex-col justify-center lg:pl-20">
        <form class="lg:text-left text-center w-full lg:mt-0 mt-6">
          <div>
            <label for="username" class="block lg:text-lg font-semibold lg:ml-5">username / email / phone</label>
            <input class="border border-dark-grey rounded-full lg:w-full lg:mt-2 lg:px-4 lg:py-2 focus:outline-none" type="text">
          </div>
          <div class="lg:mt-10 mt-8">
            <label class="block lg:text-lg font-semibold lg:ml-5" for="password">password</label>
            <input class="border border-dark-grey rounded-full lg:w-full lg:mt-2 lg:px-4 lg:py-3 focus:outline-none" type="password">
          </div>
          <div class="lg:text-lg text-sm text-center lg:mt-12 mt-8">
            <button type="submit" class="bg-dark-grey italic text-white font-semibold rounded-full lg:px-10 lg:py-3 px-5 py-2 focus:outline-none">login</button>
            <div class="mt-2">
              forgot password? <NuxtLink to="/forgot-password"><span class="italic text-maroon font-bold">help</span></NuxtLink>
            </div>
          </div>
        </form>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
  export default {

  }
</script>
