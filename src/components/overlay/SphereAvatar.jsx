import styles from "./overlay.module.scss";

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

  return (
    <div className={styles.avatar} {...props}>
      {sphereToImage(sphere || {})}
    </div>
  );
};

export default SphereAvatar;
