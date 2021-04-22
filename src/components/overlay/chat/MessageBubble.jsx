import styled from "styled-components";
import ChatMessage from "../../../domain/ChatMessage";

// prettier-ignore
const BubbleBase = styled.div`
  width: 80%;
  font-size: 1rem;
  background: black;
  border-radius: 0.5em;
  padding: 0.3em;
  margin-top: 0.5em;
  margin-bottom: 0.5em;

  ${({ $sent }) => $sent && `
    margin-left: auto;
    background: #fcba03;
  `}
`;

const Sent = (props) => <BubbleBase $sent {...props} />;
const Received = (props) => <BubbleBase {...props} />;

const ChatMessageToBubble = ({ message = new ChatMessage(), ...props }) =>
  message.sentByMe ? (
    <Sent {...props}>{message.text}</Sent>
  ) : (
    <Received from={message.from} {...props}>
      {message.text}
    </Received>
  );

export { Sent, Received, ChatMessageToBubble };
