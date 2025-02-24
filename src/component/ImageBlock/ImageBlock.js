import React from "react";
import Image from "next/image";
import { styled } from "@pigment-css/react";
import { SIZES } from "../../util/const";


function ImageBlock({ title, imageSrc, children }) {
    const isProd = process.env.NODE_ENV === "production";
    const basePath = isProd ? process.env.NEXT_PUBLIC_BASE_PATH : "";
    return (
        <Layout>
            <Card>
                <Header>{title}</Header>
                <ImageSpan>
                    <Image
                        priority
                        src={basePath + imageSrc}
                        alt="Method overview"
                        layout="responsive"
                        width={800}
                        height={250}
                    />
                </ImageSpan>
                <Paragraph>
                    {children}
                </Paragraph>
            </Card>
        </Layout>
    );
}
const ImageSpan = styled.span`
  margin-top: 2rem;
  margin-bottom: 1rem;
`;

const Header = styled.h2`
  font-weight: 100;
  font-size: 2;
  margin-bottom: 0.5rem;
`;

const Paragraph = styled.p`
  padding-top: 1rem;
  font-weight: 300;
  font-size: 1.125rem;
`;

const Layout = styled.div`

  margin-bottom: ${SIZES[60]};

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
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
  text-align: left;
  color: inherit;
  text-decoration: none;
  border-bottom: 1px solid #eaeaea;
  border-radius: 10px;
  width: 100%;
`;

export default ImageBlock;
