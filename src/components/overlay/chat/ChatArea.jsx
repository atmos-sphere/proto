import { useContext, useEffect, useRef } from "react";
import styled from "styled-components";
import { hiddenScrollbar } from "../OverlayItem";
import ChatContext from "./ChatContext";
import { ChatMessageToBubble } from "./MessageBubble";
import { seeThroughWhiteBackground, transitionLinearAll } from "./styles";

const ChatAreaBase = styled.div`
  ${seeThroughWhiteBackground}
  ${transitionLinearAll}

  width: 100%;
  max-height: 93.5%;

  margin-top: 0.5em;
  margin-bottom: 0.5em;
  padding: 0.5em;

  overflow: hidden;
  overflow-y: scroll;
  ${hiddenScrollbar}
`;

const ChatArea = () => {
  const messageList = useRef(null);
  const { messages } = useContext(ChatContext);
  const convertChatMessagesToBubbles = () =>
    messages.map((m, i) => <ChatMessageToBubble message={m} key={i} />);

  useEffect(() => {
    if (!messageList.current) return;
    messageList.current.scrollTop = messageList.current.scrollHeight;
  }, [messages]);

  return (
    <ChatAreaBase ref={messageList}>
      {convertChatMessagesToBubbles()}
    </ChatAreaBase>
  );
};

export default ChatArea;
