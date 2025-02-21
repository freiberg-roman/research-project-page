import * as React from 'react';
import { styled } from '@pigment-css/react';
import Footer from '@/component/Footer';
import ProjectHeader from '@/component/ProjectHeader';
import TextBlock from '../component/TextBlock';
import ProjectLinks from '../component/ProjectLink';
import VideoBlock from '../component/Video/Video';
import ImageBlock from '../component/ImageBlock/ImageBlock';
import CiteUs from '../component/Cite/Cite';

export default function Home() {
  return (
    <>
      <Main>
        <ProjectHeader
          title="Your NextJS Project Page"
          authors="First Author, Second Author, Third Author, Fourth Author"
          publishedAt="Your International Conference (2025)"
        />
        <ProjectLinks />
        <TextBlock title="Abstract">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
          invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
          accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
          Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
          At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
          sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
          sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
          At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
          sanctus est Lorem ipsum dolor sit amet.
        </TextBlock>
        <ImageBlock></ImageBlock>
        <VideoBlock></VideoBlock>
        <CiteUs
          entryType="article"
          citationKey="yourKey"
          title="Your Title"
          authors={["First Author", "Second Author", "Third Author"]}
          journal="Journal of Research"
          year="2025"
          publisher="Your Publisher"
        ></CiteUs>
      </Main>
      <Footer />
    </>
  );
}

const Main = styled.main`
  padding: 4rem var(--global-padding);
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
