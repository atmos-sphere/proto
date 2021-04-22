import { Fade } from "@material-ui/core";
import { useState } from "react";
import styled from "styled-components";
import { demoMessages } from "../../domain/ChatMessage";
import { demoSpheres, Sphere } from "../../domain/Sphere";
import { useActivityTimeout } from "../../util/hooks";
import Chat from "./chat/Chat";
import ChatContext from "./chat/ChatContext";
import Sidebar from "./sidebar/Sidebar";
import { TiltableSphereAvatar } from "./sidebar/SphereAvatar";
import Topbar from "./topbar/Topbar";

const OverlayBase = styled.div`
  z-index: 100;
  position: fixed;
  top: 0;
  left: 0;
`;

const mySpheres = demoSpheres.concat([Sphere.with({ name: "Goeff" })]);

const Side = ({ spheres, reset }) => (
  <Sidebar reset={reset}>
    {(spheres || mySpheres).map((sphere, i) => (
      <TiltableSphereAvatar key={`${sphere.name}-${i}`} sphere={sphere} />
    ))}
  </Sidebar>
);

const Overlay = ({ timeout, spheres, ...props }) => {
  const [messages, setMessages] = useState(demoMessages);
  const timeoutEnabled = timeout && timeout > 0;
  const [visible, reset] = timeoutEnabled
    ? useActivityTimeout(timeout)
    : [true, () => {}];

  return (
    <ChatContext.Provider value={{ messages, setMessages }}>
      <Fade in={visible}>
        <OverlayBase {...props}>
          <Topbar />
          <Side reset={reset} />
          <Chat />
        </OverlayBase>
      </Fade>
    </ChatContext.Provider>
  );
};

export default Overlay;
export { Overlay };
