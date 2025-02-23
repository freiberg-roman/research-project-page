import React from "react";
import { styled } from "@pigment-css/react";
import { SIZES } from "../../util/const";

function TextBlock({ title, children }) {
  return (
    <Layout>
      <Card>
        <Header>{title}</Header>
        <Paragraph>
          {children}
        </Paragraph>
      </Card>
    </Layout>
  );
}
const Header = styled.h2`
  font-weight: 100;
  font-size: 2;
  margin-bottom: 0.5rem;
`;

const Paragraph = styled.p`
  font-weight: 300;
  font-size: 1.125rem;
`;

const Layout = styled.div`
  margin-top: ${SIZES[36]};
  margin-bottom: ${SIZES[36]};

  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  width: min(100%, 800px);

  @media (max-width: 600px) {
    width: 100%;
    flex-direction: column;
  }
`;

const Card = styled.div`
  padding: 0.5rem;
  padding-top: 0.rem;
  padding-bottom: 1.5rem;
  text-align: left;
  color: inherit;
  text-decoration: none;
  border-bottom: 1px solid #eaeaea;
  border-radius: 10px;
  width: 100%;
`;

export default TextBlock;
