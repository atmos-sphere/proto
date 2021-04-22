const ChatMessage = class ChatMessage {
  constructor(from = "", text = "", sentByMe = false) {
    this.from = from;
    this.text = text;
    this.sentByMe = sentByMe;
  }

  static with({ from, text, sentByMe }) {
    return new ChatMessage(from, text, sentByMe);
  }

  withFrom(from) {
    this.from = from || this.from;
    return this;
  }

  withText(text) {
    this.text = text || this.text;
    return this;
  }

  withSentByMe(sentByMe) {
    this.sentByMe = sentByMe || this.sentByMe;
    return this;
  }
};

const helloThere = (times) =>
  [...Array(Math.max(times - 1, 0)).keys()].reduce(
    (p) => `${p} Hello there`,
    "Hello there"
  );

const demoMessages = [
  ChatMessage.with({ text: helloThere(1) }),
  ChatMessage.with({ text: helloThere(5), sentByMe: true }),
  ChatMessage.with({ text: helloThere(2) }),
  ChatMessage.with({ text: helloThere(10), sentByMe: true }),
  ChatMessage.with({ text: helloThere(20) }),
  ChatMessage.with({ text: helloThere(5) }),
  ChatMessage.with({ text: helloThere(2), sentByMe: true }),
  ChatMessage.with({ text: helloThere(2), sentByMe: true }),
  ChatMessage.with({ text: helloThere(2), sentByMe: true }),
  ChatMessage.with({ text: helloThere(2), sentByMe: true }),
];

export default ChatMessage;
export { ChatMessage, demoMessages };
