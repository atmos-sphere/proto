import { IconButton, InputBase } from "@material-ui/core";
import SendRoundedIcon from "@material-ui/icons/SendRounded";
import { useContext, useState } from "react";
import styled from "styled-components";
import { ChatMessage } from "../../../domain/ChatMessage";
import ChatContext from "./ChatContext";
import {
  seeThroughWhiteBackground,
  transitionLinearAll,
  whitenOnHover,
} from "./styles";

const Root = styled.div`
  display: grid;
  grid-template-columns: auto 3em;
  width: 93%;
`;

const Input = styled(InputBase)`
  &&& {
    ${seeThroughWhiteBackground}
    ${whitenOnHover}
    ${transitionLinearAll}

    height: 2rem;
    padding-left: 0.5em;
    padding-right: 0.5em;
    color: white;
    font-size: 1rem;
    border-radius: 0.4em;
  }
`;

const SendButton = styled(IconButton)`
  &&& {
    margin-left: 0.2em;
    position: relative;
    bottom: 1em;
    z-index: 5000;
    transform: scale(1);
  }
`;

const ChatInput = (props) => {
  const [text, setText] = useState("");
  const { messages, setMessages } = useContext(ChatContext);
  const sendMessage = () => {
    if (text === "") return;
    setMessages(messages.concat([ChatMessage.with({ text, sentByMe: true })]));
    setText("");
  };

  const handleTyping = (e) => setText(e.target.value);
  const handleEnterKey = (e) => e.keyCode === 13 && sendMessage();

  return (
    <Root>
      <Input
        autoFocus
        placeholder="Message"
        value={text}
        onChange={handleTyping}
        onKeyDown={handleEnterKey}
        {...props}
      />
      <SendButton onClick={sendMessage}>
        <SendRoundedIcon />
      </SendButton>
    </Root>
  );
};

export default ChatInput;
export { ChatInput };
