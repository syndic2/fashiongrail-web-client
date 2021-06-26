<template>
  <div class="flex items-center gap-x-1">
    <img src="medias/logos/brands/pull-&-bear.png" class="rounded-full object-contain w-20" alt="">
    <div class="flex-grow flex flex-col">
      <h3 class="text-xl font-semibold">{{ chat.from }}</h3>
      <span class="text-sm">preview message</span>
    </div>
    <div class="flex flex-col items-center text-sm">
      <span v-if="chat.incomingChats > 0" class="flex justify-center items-center bg-dark-grey text-white rounded-full w-6 h-6">
        {{ chat.incomingChats }}
      </span>
      <span>{{ chat.previewTime }}</span>
    </div>
  </div>
</template>

<script lang="ts">
  import { Vue, Component, Prop } from 'nuxt-property-decorator';

  import { Chat } from '~/models/chat';

  @Component
  export default class ChatPreviewComponent extends Vue {
    @Prop() chat!: Chat;
  }
</script>
