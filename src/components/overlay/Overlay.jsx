import { Fade } from "@material-ui/core";
import { useEffect, useRef, useState } from "react";
import { demoSpheres } from "../../domain/Sphere";
import Tiltable from "../Tiltable";
import Chat from "./Chat";
import useActivityTimeout from "./hooks";
import styles from "./overlay.module.scss";
import Sidebar from "./Sidebar";
import SphereAvatar from "./SphereAvatar";
import Topbar from "./Topbar";

const Side = () => (
  <Sidebar>
    {demoSpheres.map((sphere, i) => (
      <Tiltable
        key={i}
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

const Overlay = ({ timeout, ...props }) => {
  const timeoutEnabled = timeout && timeout > 0;
  const visible = timeoutEnabled ? useActivityTimeout(timeout) : true;
  return (
    <Fade in={visible}>
      <div className={styles.overlay} {...props}>
        <Topbar />
        <Side />
        <Chat />
      </div>
    </Fade>
  );
};

export default Overlay;
