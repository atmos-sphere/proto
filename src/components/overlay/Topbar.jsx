import { IconButton } from "@material-ui/core";
import SettingsRoundedIcon from "@material-ui/icons/SettingsRounded";
import { useState } from "react";
import styled from "styled-components";
import { OverlayItem, thickness } from "./OverlayItem";

const TopbarBase = styled(OverlayItem)`
  height: ${thickness - 1}em;
  padding: 1em;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto;
  place-items: center;
  place-content: center;

  z-index: inherit;
  position: fixed;
  top: 4%;
  right: 6%;

  button {
    width: 2.2em;
    height: 2.2em;
    margin: 0.2em;
    transition: all 0.2s cubic-bezier(0.075, 0.82, 0.165, 1),
      transform 1s cubic-bezier(0.455, 0.03, 0.515, 0.955);
    svg {
      width: 1.6em;
    }
  }
`;

const SpinnyBoi = styled.div`
  transition: all 1s cubic-bezier(0.075, 0.82, 0.165, 1);
  transform: scale(1) rotate(0deg);
`;

const Spinny = ({ children, ...props }) => {
  const [style, setStyle] = useState({});

  const spinny = {
    transition: "all 1s cubic-bezier(0.075, 0.82, 0.165, 1)",
    transform: "scale(1.2) rotate(360deg)",
  };

  const animate = () => {
    setStyle(spinny);
    setTimeout(() => setStyle({}), 800);
  };

  return (
    <SpinnyBoi
      role="button"
      tabIndex={0}
      onClick={animate}
      onKeyPress={animate}
      style={style}
      {...props}
    >
      {children}
    </SpinnyBoi>
  );
};

const SettingsButton = ({ onClick, ...props }) => (
  <Spinny>
    <IconButton {...props}>
      <SettingsRoundedIcon />
    </IconButton>
  </Spinny>
);

const Topbar = () => {
  const openSettings = () => {};

  return (
    <TopbarBase>
      <div />
      <div>Topbar</div>
      <SettingsButton onClick={openSettings} />
    </TopbarBase>
  );
};

export default Topbar;
