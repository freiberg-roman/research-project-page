import * as React from 'react';
import { styled } from '@pigment-css/react';
import Footer from '@/component/Footer';
import ProjectHeader from '@/component/ProjectHeader';
import TextBlock from '../component/TextBlock';
import ProjectLinks from '../component/ProjectLink';

export default function Home() {
  return (
    <>
      <Main>
        <ProjectHeader 
          title="Your NextJS Project Page"
          authors="First Author, Second Author, Third Author, Fourth Author"
          publishedAt="Your International Conference (2025)"
        />
        <ProjectLinks/>
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
      </Main>
      <Footer/>
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
