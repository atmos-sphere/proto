/**
 * A custom Hook that tracks whether or not the user is active on the page
 * (indicated by 'mousemove' and 'keydown' window events).
 *
 * @returns A state variable that indicates when the user is active
 */
const useActivityTimeout = (timeout) => {
  const [active, setActive] = useState(true);
  const on = () => setActive(true);
  const off = () => setActive(false);

  useEffect(() => {
    const interval = window.setInterval(off, timeout);
    window.addEventListener("mousemove", on);
    window.addEventListener("keydown", on);

    return () => {
      window.clearInterval(interval);
      window.removeEventListener("mousemove", on);
      window.removeEventListener("keydown", on);
    };
  }, []);

  return active;
};

export default useActivityTimeout;
export { useActivityTimeout };
