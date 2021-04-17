import { Fade } from "@material-ui/core";
import { demoSpheres } from "../../domain/Sphere";
import Tiltable from "../Tiltable";
import Chat from "./Chat";
import { useActivityTimeout } from "../../util/hooks";
import styles from "./overlay.module.scss";
import Sidebar from "./Sidebar";
import SphereAvatar from "./SphereAvatar";
import Topbar from "./Topbar";

// const mySpheres = [...Array(10).keys()].reduce(
//   (p) => p.concat(demoSpheres),
//   demoSpheres
// );

const Side = ({ spheres, reset }) => (
  <Sidebar reset={reset}>
    {console.log(demoSpheres)}
    {/* change demoSphere to mySpheres */}
    {(spheres || demoSpheres).map((sphere, i) => (
      <Tiltable
        key={`${sphere.name}-${i}`}
        className={styles.avatarContainer}
        degX={14}
        degY={18}
        speed={1000}
      >
        <SphereAvatar sphere={sphere} />
      </Tiltable>
    ))}
  </Sidebar>
);

const Overlay = ({ timeout, spheres, setSphere, ...props }) => {
  const timeoutEnabled = timeout && timeout > 0;

  const [visible, reset] = timeoutEnabled
    ? useActivityTimeout(timeout)
    : [true, () => {}];

  return (
    <Fade in={visible}>
      <div className={styles.overlay} {...props}>
        <Topbar />
        <Side reset={reset} spheres={spheres} />
        <Chat />
      </div>
    </Fade>
  );
};

export default Overlay;
