import * as React from 'react';
import { styled } from '@pigment-css/react';
import Footer from "@/component/Footer";

export default function Home() {
  return (
    <>
      <Main>
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
