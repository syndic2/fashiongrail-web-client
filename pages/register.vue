<template>
  <main>
    <div class="grid lg:grid-cols-2 auto-rows-min lg:divide-x-2 lg:divide-y-0 divide-y-2 divide-dark-grey lg:p-20 p-10">
      <img class="justify-self-center w-4/5" src="medias/images/hello.png" alt="">
      <div class="flex lg:flex-col justify-center lg:pl-20">
        <form class="lg:text-left text-center w-full lg:mt-0 mt-6">
          <div>
            <label for="fullname" class="block lg:text-lg font-semibold lg:ml-5">fullname</label>
            <input type="text" class="border border-dark-grey rounded-full lg:w-full lg:mt-2 lg:px-4 lg:py-2 focus:outline-none">
          </div>
          <div class="mt-8">
            <label class="block lg:text-lg font-semibold lg:ml-5" for="phone">phone</label>
            <input type="text" class="border border-dark-grey rounded-full lg:w-full lg:mt-2 lg:px-4 lg:py-3 focus:outline-none">
          </div>
          <div class="mt-8">
            <label class="block lg:text-lg font-semibold lg:ml-5" for="phone">email</label>
            <input type="email" class="border border-dark-grey rounded-full lg:w-full lg:mt-2 lg:px-4 lg:py-3 focus:outline-none">
          </div>
          <div class="mt-8">
            <label class="block lg:text-lg font-semibold lg:ml-5" for="phone">address</label>
            <input type="text" class="border border-dark-grey rounded-full lg:w-full lg:mt-2 lg:px-4 lg:py-3 focus:outline-none">
          </div>
          <div class="mt-8">
            <label class="block lg:text-lg font-semibold lg:ml-5" for="phone">username</label>
            <input type="text" class="border border-dark-grey rounded-full lg:w-full lg:mt-2 lg:px-4 lg:py-3 focus:outline-none">
          </div>
          <div class="mt-8">
            <label class="block lg:text-lg font-semibold lg:ml-5" for="phone">password</label>
            <input type="password" class="border border-dark-grey rounded-full lg:w-full lg:mt-2 lg:px-4 lg:py-3 focus:outline-none">
          </div>
          <div class="text-center mt-12">
            <button type="submit" class="bg-dark-grey italic lg:text-lg text-sm text-white font-semibold rounded-full lg:px-8 lg:py-2 px-4 py-1 focus:outline-none">sign - up</button>
          </div>
        </form>
      </div>
    </div>
  </main>
</template>

<script>
  export default {

  }
</script>
