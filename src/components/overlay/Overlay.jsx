import { Fade } from "@material-ui/core";
import styled from "styled-components";
import { demoSpheres } from "../../domain/Sphere";
import { useActivityTimeout } from "../../util/hooks";
import Chat from "./Chat";
import Sidebar from "./Sidebar";
import { TiltableSphereAvatar } from "./SphereAvatar";
import Topbar from "./Topbar";

const OverlayBase = styled.div`
  z-index: 100;
  position: fixed;
  top: 0;
  left: 0;
`;

const mySpheres = [...Array(10).keys()].reduce(
  (p) => p.concat(demoSpheres),
  demoSpheres
);

const Side = ({ spheres, reset }) => (
  <Sidebar reset={reset}>
    {(spheres || mySpheres).map((sphere, i) => (
      <TiltableSphereAvatar key={`${sphere.name}-${i}`} sphere={sphere} />
    ))}
  </Sidebar>
);

const Overlay = ({ timeout, spheres, ...props }) => {
  const timeoutEnabled = timeout && timeout > 0;

  const [visible, reset] = timeoutEnabled
    ? useActivityTimeout(timeout)
    : [true, () => {}];

  return (
    <Fade in={visible}>
      <OverlayBase {...props}>
        <Topbar />
        <Side reset={reset} />
        <Chat />
      </OverlayBase>
    </Fade>
  );
};

export default Overlay;
export { Overlay };
