import styled from "styled-components";
import { AudioPlayer, defaultTracks } from "../src/components/AudioPlayer";
import { Overlay } from "../src/components/overlay/Overlay";

const ContentBase = styled.div`
  display: flex;
  flex-direction: column;
  place-items: center;
  place-content: center;
`;

const Header = styled.h1`
  font-size: 10em;
`;

const Container = styled.div`
  min-height: 100vh;
  padding: 0 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const DemoVid = () => <video controls src="/animals.mp4" type="video/mp4" />;

const Content = () => (
  <ContentBase>
    <Header>Hello World!</Header>
    <DemoVid />
  </ContentBase>
);

export default function Home() {
  return (
    <Container>
      <main>
        <Overlay timeout={2000} />
        <Content />
        <AudioPlayer tracks={defaultTracks} />
      </main>
    </Container>
  );
}
