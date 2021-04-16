import { Divider, IconButton } from "@material-ui/core";
import ArrowForwardIosRoundedIcon from "@material-ui/icons/ArrowForwardIosRounded";
import clsx from "clsx";
import { useState } from "react";
import styles from "./overlay.module.scss";

const Sidebar = ({ children, reset, ...props }) => {
  const [minimized, setMinimized] = useState(false);
  const toggleMinimized = () => {
    setMinimized(!minimized);
  };
  return (
    <div className={clsx(styles.sidebar, { [styles.minimized]: minimized })}>
      <IconButton
        className={clsx(styles.minimizeButton, {
          [styles.minimizedButton]: minimized,
          [styles.maximizedButton]: !minimized,
        })}
        onClick={toggleMinimized}
      >
        <ArrowForwardIosRoundedIcon />
      </IconButton>
      <Divider />
      <div className={styles.sphereList} onScroll={reset} {...props}>
        {children}
      </div>
    </div>
  );
};

export default Sidebar;