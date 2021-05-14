<template>
  <main>
    <div class="grid lg:grid-cols-2 auto-rows-min lg:divide-x-2 lg:divide-y-0 divide-y-2 divide-dark-grey lg:p-20 p-10">
      <img class="justify-self-center self-center w-4/5" src="medias/images/hello.png" alt="">
      <div class="flex lg:flex-col justify-center lg:pl-20">
        <form class="lg:text-left text-center w-full lg:mt-0 mt-6">
          <div class="lg:ml-5 lg:text-left text-center">
            we just need your registered email address <br> to send your password reset
          </div>
          <div class="lg:mt-16 mt-8">
            <label for="email" class="block lg:text-lg font-semibold lg:ml-5">email</label>
            <input type="email" class="border border-dark-grey rounded-full lg:w-full lg:mt-2 lg:px-4 lg:py-2 focus:outline-none">
          </div>
          <div class="text-center lg:mt-12 mt-8">
            <button type="submit" class="bg-dark-grey italic lg:text-lg text-white font-semibold rounded-full lg:px-10 lg:py-2 px-5 py-1">send</button>
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
