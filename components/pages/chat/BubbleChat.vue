<template>
  <div
    :class="{ 'self-end justify-end': message.user === 'Dicky Bastian STEEL' }"
    class="flex items-center gap-x-2 w-full"
  >
    <div class="flex flex-col items-center text-sm">
      <span>{{ message.time }}</span>
      <span v-if="message.user === 'Dicky Bastian STEEL'">read</span>
    </div>
    <p
      v-html="message.text"
      :class="{
        'bg-white text-black': message.user === 'Dicky Bastian STEEL',
        'bg-dark-grey text-white': message.user !== 'Dicky Bastian STEEL'
      }"
      class="rounded-3.5xl rounded-br-none text-md break-all whitespace-pre-wrap max-w-3/4 p-3">
    </p>
  </div>
</template>

<script lang="ts">
  import { Vue, Component, Prop } from 'nuxt-property-decorator';

  import { Message } from '~/models/chat';

  @Component
  export default class BubbleChatComponent extends Vue {
    @Prop() message!: Message;

  }
</script>

