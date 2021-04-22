import { useState } from "react";
import styled from "styled-components";
import { OverlayItem, thickness } from "../OverlayItem";
import ChatArea from "./ChatArea";
import { ChatButton } from "./ChatButton";
import { ChatInput } from "./ChatInput";

// prettier-ignore
const ChatBase = styled(OverlayItem)`
  height: ${thickness}em;
  width: 27em;
  padding: 1em;

  display: flex;
  flex-direction: column;
  place-content: center;

  z-index: inherit;
  position: fixed;
  bottom: 4%;
  right: 6%;

  ${({ $minimized }) => !$minimized && `
    place-content: flex-start;
    height: 40em;
  `}
`;

const ChatGridBase = styled.div`
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: auto 2em;

  height: 100%;
  max-height: 34em;
  width: 100%;
`;

const ChatGrid = (props) => (
  <ChatGridBase {...props}>
    <ChatArea />
    <ChatInput />
  </ChatGridBase>
);

const ChatContents = ({ minimized, ...props }) => (
  <>
    <ChatButton minimized={minimized} {...props} />
    {!minimized && <ChatGrid />}
  </>
);

const Chat = ({ className, ...props }) => {
  const [minimized, setMinimized] = useState(true);
  const toggleMinimized = () => setMinimized(!minimized);

  return (
    <ChatBase $minimized={minimized} className={className} {...props}>
      <ChatContents minimized={minimized} onClick={toggleMinimized} />
    </ChatBase>
  );
};

export default Chat;
