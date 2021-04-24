import styled from "styled-components";
import { Overlay } from "../src/components/overlay/Overlay";

const Container = styled.div`
  min-height: 100vh;
  padding: 0 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ContentBase = styled.div`
  display: flex;
  flex-direction: column;
  place-items: center;
  place-content: center;
`;

const BackgroundVideo = styled.iframe`
  z-index: -1;
  position: fixed;
  height: 115%;
  width: 101%;
  object-fit: cover;
`;

const DemoVid = () => (
  <BackgroundVideo
    autoPlay
    allowfullscreen
    allow="autoplay; encrypted-media"
    type="text/html"
    frameborder="0"
    // src="https://www.youtube.com/embed/neV3EPgvZ3g?autoplay=1&showinfo=0&controls=0&vq=hd720"
    src="https://www.youtube.com/embed/fEvM-OUbaKs?autoplay=1&showinfo=0&controls=0&vq=hd720"
  />
);

const Content = () => (
  <ContentBase>
    <DemoVid />
  </ContentBase>
);

export default function Home() {
  return (
    <Container>
      <main>
        {/* <Overlay timeout={2000} /> */}
        <Overlay />
        <Content />
      </main>
    </Container>
  );
}
