import { AudioPlayer, defaultTracks } from "../src/components/AudioPlayer";
import Overlay from "../src/components/overlay/Overlay";
import styles from "./index.module.scss";

const DemoVid = () => <video controls src="/animals.mp4" type="video/mp4" />;

const Content = () => (
  <div className={styles.content}>
    <h1 style={{ fontSize: "10em" }}>Hello World!</h1>
    <DemoVid />
  </div>
);

export default function Home() {
  return (
    <div className={styles.container}>
      <main>
        {/* TODO: removed timeout for easier debugging, add back later */}
        {/* <Overlay timeout={2000} /> */}
        <Overlay />

        <Content />
        <AudioPlayer tracks={defaultTracks} />
      </main>
    </div>
  );
}
