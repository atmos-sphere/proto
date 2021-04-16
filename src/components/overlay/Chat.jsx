import styled from "styled-components";
import { OverlayItem, thickness } from "./OverlayItem";

const ChatBase = styled(OverlayItem)`
  height: ${thickness}em;
  width: 20%;
  padding: 1em;

  display: flex;
  flex-direction: row;
  place-items: center;
  place-content: center;

  z-index: inherit;
  position: fixed;
  bottom: 4%;
  right: 6%;
`;

const Chat = () => <ChatBase>Chat</ChatBase>;

export default Chat;
