import { useEffect, useRef, useState } from "react";

/**
 * A custom Hook that tracks whether or not the user is active on the page
 * (indicated by 'mousemove', 'mousedown', and 'keydown' window events).
 *
 * @returns A state variable that indicates when the user is active
 */
const useActivityTimeout = (timeout) => {
  const activityEvents = ["mousemove", "mousedown", "keydown", "scroll"];

  const [active, setActive] = useState(true);
  const interval = useRef(null);
  const t = Number.isFinite(timeout) && timeout > 0 ? timeout : 1000;

  const turnOff = () => setActive(false);

  let triggered = false;
  const turnOn = () => {
    if (!triggered) {
      triggered = true;
      setTimeout(() => {
        triggered = false;
      }, timeout * 0.5);
      window.clearInterval(interval.current);
      interval.current = window.setInterval(turnOff, t);
      setActive(true);
    }
  };

  const registerEventListeners = () => {
    activityEvents.forEach((e) => window.addEventListener(e, turnOn));
    return () =>
      activityEvents.forEach((e) => window.removeEventListener(e, turnOn));
  };

  useEffect(() => {
    turnOn();
    return registerEventListeners();
  }, []);

  return [active, turnOn];
};

export default useActivityTimeout;
export { useActivityTimeout };
