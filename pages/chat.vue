<template>
  <main class="bg-light-grey mt-8 p-24 pt-12">
    <!-- LIST CHAT -->
    <div class="border-2 border-dark-grey rounded-3xl grid grid-cols-3 h-full">
      <div style="height: 40rem;">
        <div class="px-10 pt-12 pb-14">
          <h1 class="uppercase text-2xl font-bold">CHAT</h1>
          <SearchBar class="mt-4" />
        </div>
        <div class="flex flex-col">
          <ChatPreview
            @click.native="selectedChatWith= chat; chat.incomingChats= 0"
            v-for="(chat, index) in chats"
            :key="index"
            :chat="chat"
            :class="{ 'border-t-2': index === 0, 'bg-dark-grey text-white': selectedChatWith && selectedChatWith.from === chat.from }"
            class="border-b-2 border-dark-grey px-6 py-2 cursor-pointer" />
        </div>
      </div>

      <!-- DETAIL CHAT -->
      <div class="col-span-2 grid grid-flow-row gap-x-5 border-l-2 border-dark-grey">
        <template v-if="selectedChatWith">
          <!-- HEADER -->
          <div class="flex items-center gap-x-1 px-12 border-b-2 border-dark-grey py-4">
            <img src="medias/logos/brands/pull-&-bear.png" class="rounded-full object-contain w-20" alt="">
            <div class="flex-grow flex flex-col">
              <h2 class="text-xl font-bold">{{ selectedChatWith.from }}</h2>
              <span class="italic text-sm">online 23 menit yang lalu</span>
            </div>
            <button>
              <font-awesome-icon icon="ellipsis-v" size="2x" class="text-dark-grey" />
            </button>
          </div>

          <!-- CHAT -->
          <div class="flex-grow flex flex-col justify-between px-16 pt-8 pb-8">
            <div id="messages-container" class="flex flex-col gap-y-5 overflow-y-auto h-96 max-h-96">
              <BubbleChat
                v-for="(message, index) in selectedChatWith.messages"
                :key="index"
                :message="message" />
            </div>
            <div class="flex justify-end items-center relative mt-10">
              <div class="absolute mr-4">
                <button @click="addFile" class="focus:outline-none">
                  <font-awesome-icon icon="plus-circle" size="lg" class="text-dark-grey" />
                </button>
              </div>
              <textarea-autosize
                @keydown.native.enter.exact.prevent="onSendMessage"
                v-model="messageText"
                :max-height="200"
                rows="1"
                class="resize-none placeholder-italic bg-transparent border-2 border-dark-grey rounded-full w-full pl-5 pr-10 py-3 focus:outline-none focus:ring-0 focus:border-dark-grey"
                placeholder="type something..." />
            </div>
          </div>
        </template>
        <template v-else>
          <div class="flex justify-center items-center h-full">
            <span>-No chat yet-</span>
          </div>
        </template>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
  import { Vue, Component, Prop } from 'nuxt-property-decorator';

  import { Chat, Message } from '~/models/chat';
  import SearchBar from '~/components/utilities/SearchBar.vue';
  import ChatPreview from '~/components/pages/chat/ChatPreview.vue';
  import BubbleChat from '~/components/pages/chat/BubbleChat.vue';

  @Component({
    components: {
      SearchBar,
      ChatPreview,
      BubbleChat
    }
  })
  export default class ChatPage extends Vue {
    public chats: Chat[]= [
      {
        from: 'Store A',
        previewTime: '11:16 AM',
        incomingChats: 0,
        messages: [
          {
            user: 'Dicky Bastian STEEL',
            text: 'Halo min Toko A',
            time: '11:15 AM'
          },
          {
            user: 'Store A',
            text: 'Halo bang STEEL',
            time: '11:16 AM'
          }
        ]
      },
      {
        from: 'Store B',
        previewTime: '11:21 PM',
        incomingChats: 2,
        messages: [
          {
            user: 'Dicky Bastian STEEL',
            text: 'Halo min Toko B',
            time: '11:20'
          },
          {
            user: 'Store B',
            text: 'Halo bang STEEL',
            time: '11:21 AM'
          }
        ]
      },
      {
        from: 'Store C',
        previewTime: '11:22 AM',
        incomingChats: 1,
        messages: [
          {
            user: 'Dicky Bastian STEEL',
            text: 'Halo min Toko C',
            time: '11:20 AM'
          },
          {
            user: 'Store C',
            text: 'Halo bang STEEL',
            time: '11:22 AM'
          }
        ]
      }
    ];
    public selectedChatWith: Chat | null= null;
    public messageText: string= '';

    updated() {
      const messagesContainer: HTMLElement | any | null= this.$el.querySelector('#messages-container');
      messagesContainer.scrollTop= messagesContainer.scrollHeight;
    }

    addFile() {
      alert('whoops belum ditambahkan gan :D');
    }
    
    onSendMessage() {
      if (this.messageText && this.messageText.trim()) {
        const replyText= this.messageText;

        this.selectedChatWith!.messages= [...this.selectedChatWith!.messages, <Message>{
          user: 'Dicky Bastian STEEL',
          time: '11:29 PM',
          text: this.messageText
        }];
        this.messageText= '';

        setTimeout(() => {
          this.selectedChatWith!.messages= [...this.selectedChatWith!.messages, <Message>{
            user: this.selectedChatWith?.from,
            time: '11:29 PM',
            text: `Heheh :), ${replyText}`
          }];
        }, 2000);
      } else {
        this.messageText= '';
      }
    }
  }
</script>
