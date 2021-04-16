import styled from "styled-components";
import Tiltable from "../Tiltable";
import { selectable } from "./OverlayItem";

const AvatarContainer = styled(Tiltable)`
  border-radius: 50%;
  transition: all 0.2s cubic-bezier(0.165, 0.84, 0.44, 1);

  &:hover {
    border-radius: 20%;
    cursor: pointer;
  }
`;

const Avatar = styled.div`
  display: flex;
  place-items: center;
  place-content: center;

  perspective: 1px;
  border-radius: inherit;
  background-color: rgba(63, 63, 63, 0.822);
  transition: all 0.2s cubic-bezier(0.165, 0.84, 0.44, 1);

  &:active {
    transform: translate(0, 0.1em);
  }

  img {
    ${selectable("none")}
    border-radius: inherit;
    width: inherit;

    display: flex;
    place-content: center;
    place-items: center;

    font-size: 2rem;
    font-family: "Rubik", "Cairo", sans-serif;
  }
`;

const SphereAvatar = ({ sphere, ...props }) => {
  const sphereToImage = ({ name, image }) => (
    <img
      alt={(name || "X").substring(0, 1).toUpperCase()}
      src={image}
      draggable={false}
      onDragStart={(e) => {
        e.preventDefault();
      }}
    />
  );

  return <Avatar {...props}>{sphereToImage(sphere || {})}</Avatar>;
};

const TiltableSphereAvatar = ({ sphere, ...props }) => {
  return (
    <AvatarContainer degX={14} degY={18} speed={1000} {...props}>
      <SphereAvatar sphere={sphere} />
    </AvatarContainer>
  );
};

export default SphereAvatar;
export { SphereAvatar, TiltableSphereAvatar };
