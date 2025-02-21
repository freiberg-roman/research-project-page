import React from "react";
import Image from "next/image";
import { styled } from "@pigment-css/react";
import { SIZES } from "../../util/const";

function ImageBlock() {
    return (
        <Layout>
            <Card>
                <Header>Method Overview</Header>
                <ImageSpan>
                    <Image
                        priority
                        src="/figure.png"
                        alt="Method overview"
                        layout="responsive"
                        width={800}
                        height={250}
                    />
                </ImageSpan>
                <Paragraph>
                    Overview of open and closed gripper configurations. Scene and gripper point clouds are encoded through an
                    equivariant U‑Net, producing multi‑scale hierarchical equivariant descriptor field (EDF) features.
                    A multi‑scale tensor field then computes query positions and EDF features using the
                    Farthest Point Sampling (FPS) algorithm. The featurized point clouds and
                    query tokens are time‑conditioned via an equivariant  FiLM layer. The tokens query
                    features in the scene’s hierarchical point cloud, which the
                    score head uses to predict a diffusion‑based pose estimate. The resulting pose estimate is
                    applied as an equivariant transform to the EDF features of the query tokens.
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
