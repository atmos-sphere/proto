import { Divider, IconButton } from "@material-ui/core";
import ArrowForwardIosRoundedIcon from "@material-ui/icons/ArrowForwardIosRounded";
import { useState } from "react";
import styled from "styled-components";
import { hiddenScrollbar, OverlayItem, thickness } from "./OverlayItem";

// prettier-ignore
const SidebarBase = styled(OverlayItem)`
  z-index: inherit;
  position: fixed;
  top: max(4%, 2em);
  bottom: max(4%, 2em);
  left: max(3%, 3em);

  width: ${thickness}em;
  height: 92%;
  padding: 0.5em;

  display: flex;
  flex-direction: column;
  align-items: center;

  button {
    width: 95%;
  }

  hr {
    width: 100%;
    height: 0.2em;
    margin-bottom: 0.5em;
    border-radius: 14%;
  }

  ${({ $minimized }) => $minimized && `
    height: 5em;

    hr,
    div {
      display: none;
    }
  `}
`;

const MinMaxButton = styled(IconButton)`
  transform: rotate(${({ $minimized }) => ($minimized ? "-90" : "90")}deg);
`;

const SphereList = styled.div`
  height: 95%;
  width: 95%;

  display: flex;
  flex-direction: column;
  align-items: center;

  overflow: hidden;
  overflow-y: scroll;
  ${hiddenScrollbar}

  & > div {
    width: 100% !important;
    position: relative;
    padding-top: 100%;
    margin-top: 0.2em;
    margin-bottom: 0.7em;

    & > * {
      position: absolute;
      margin-top: -100%;
      width: 100% !important;
      height: 100% !important;
    }
  }
`;

const Sidebar = ({ children, reset, ...props }) => {
  const [minimized, setMinimized] = useState(false);
  const toggleMinimized = () => {
    setMinimized(!minimized);
  };
  return (
    <SidebarBase $minimized={minimized}>
      <MinMaxButton $minimized={minimized} onClick={toggleMinimized}>
        <ArrowForwardIosRoundedIcon />
      </MinMaxButton>
      <Divider />
      <SphereList onScroll={reset} {...props}>
        {children}
      </SphereList>
    </SidebarBase>
  );
};

export default Sidebar;
