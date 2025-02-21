import React from "react";
import { styled } from "@pigment-css/react";
import { SIZES } from "../../util/const";


function VideoBlock() {
  return (
    <Layout>
    <Card>
      <Header>Demo Video</Header>
      <ImageSpan>
        <video
          autoPlay
          controls
          muted
          loop
          playsInline
          src="/video.mp4"
          alt="Demo video"
        />
      </ImageSpan>
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

export default VideoBlock;
