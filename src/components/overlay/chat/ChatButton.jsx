import { ButtonBase } from "@material-ui/core";
import ArrowForwardIosRoundedIcon from "@material-ui/icons/ArrowForwardIosRounded";
import styled from "styled-components";
import { seeThroughWhiteBackground, whitenOnHover } from "./styles";

// prettier-ignore
const MaximizeButtonBase = styled(ButtonBase)`
  &&& {
    ${seeThroughWhiteBackground}
    ${whitenOnHover}

    height: 2em;
    width: 100%;

    svg {
      transform: rotate(90deg);
      width: unset;
      ${({ $minimized }) => $minimized && `
        transform: rotate(-90deg);
      `}
    }
  }
`;

const ChatButton = ({ minimized, ...props }) => (
  <MaximizeButtonBase focusRipple $minimized={minimized} {...props}>
    {minimized ? "Chat" : <ArrowForwardIosRoundedIcon />}
  </MaximizeButtonBase>
);

export default ChatButton;
export { ChatButton };
