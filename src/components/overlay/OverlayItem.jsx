import styled from "styled-components";
import defaultTheme from "../../util/styles";

const thickness = 5;

const OverlayItem = styled.div`
  color: white;
  border-radius: 1.5em;
  background-color: rgba(0, 0, 0, 0.5);
  transition: all 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);

  button {
    transition: all 0.2s linear;
    width: 3em;

    svg {
      color: white;
      width: inherit;
      height: inherit;
    }
  }

  @supports (-webkit-backdrop-filter: none) or (backdrop-filter: none) {
    -webkit-backdrop-filter: blur(15px);
    backdrop-filter: blur(15px);
    background-color: rgba(0, 0, 0, 0.5);
  }

  * {
    font-family: ${({ theme }) => theme.fonts.Rubik};
  }
`;

OverlayItem.defaultProps = { theme: defaultTheme };

const hiddenScrollbar = `
  ::-webkit-scrollbar {
    width: 0; /* Remove scrollbar space */
    background: transparent; /* Optional: just make scrollbar invisible */
  }
  -ms-overflow-style: none; /* Internet Explorer 10+ */
  scrollbar-width: none; /* Firefox */
`;

const selectable = (s = "none") => `
  -khtml-user-select: ${s};
  -o-user-select: ${s};
  -moz-user-select: ${s};
  -webkit-user-select: ${s};
  user-select: ${s};
`;

export default OverlayItem;
export { OverlayItem, hiddenScrollbar, selectable, thickness };
