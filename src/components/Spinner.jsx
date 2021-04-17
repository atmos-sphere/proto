import { CircularProgress } from "@material-ui/core";

const Spinner = () => (
  <div
    style={{
      width: "100vw",
      height: "100vh",
      display: "flex",
      placeItems: "center",
      placeContent: "center",
    }}
  >
    <CircularProgress
      color="secondary"
      style={{ height: "3em", width: "3em" }}
    />
  </div>
);

export default Spinner;
