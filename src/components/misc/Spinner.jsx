import { CircularProgress } from "@material-ui/core";
import styled from "styled-components";

const FullWidthAndCentered = () => styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  place-items: center;
  place-content: center;
`;

const Spinner = () => (
  <FullWidthAndCentered>
    <CircularProgress
      color="secondary"
      style={{ height: "3em", width: "3em" }}
    />
  </FullWidthAndCentered>
);

export default Spinner;
