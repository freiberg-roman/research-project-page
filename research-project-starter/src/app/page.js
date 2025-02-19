import * as React from 'react';
import { styled } from '@pigment-css/react';
import Footer from '@/component/Footer';
import ProjectHeader from '@/component/ProjectHeader';
import ProjectLinks from '@/component/ButtonRow'

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
