import Head from "next/head";
import { AudioPlayer, defaultTracks } from "../src/components/AudioPlayer";
import Overlay from "../src/components/overlay/Overlay";
import styles from "./index.module.scss";

const HeaderWithFonts = () => (
  <Head>
    <title>Atmos</title>
    <link rel="icon" href="/favicon.ico" />
    <link rel="preconnect" href="https://fonts.gstatic.com" />
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css2?family=Cairo&display=swap"
    />
    <link rel="preconnect" href="https://fonts.gstatic.com" />
    <link
      href="https://fonts.googleapis.com/css2?family=Cairo&family=Rubik:wght@500&display=swap"
      rel="stylesheet"
    />
  </Head>
);

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
      <HeaderWithFonts />
      <main>
        <Overlay timeout={5000} />
        <Content />
        <AudioPlayer tracks={defaultTracks} />
      </main>
      <footer style={{ display: "none" }}>Atmos Sphere</footer>
    </div>
  );
}
