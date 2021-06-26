export interface Message {
  user: string;
  text: string;
  time: string;
};

export interface Chat {
  from: string;
  previewTime: string;
  incomingChats: number;
  messages: Message[];
};
