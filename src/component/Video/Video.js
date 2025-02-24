"use client";
import React, { useState, useRef, useEffect } from "react";
import { styled } from "@pigment-css/react";
import { SIZES } from "../../util/const";

function LazyVideo({ videoSrc, videoAlt }) {
  const [isInView, setIsInView] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" } // load slightly before the video enters view
    );
    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <VideoContainer ref={containerRef}>
      {isInView ? (
        <Video
          autoPlay
          controls
          muted
          loop
          playsInline
          src={videoSrc}
          alt={videoAlt}
        />
      ) : (
        <Placeholder />
      )}
    </VideoContainer>
  );
}

const VideoContainer = styled.div`
  width: 100%;
  height: auto;
  position: relative;
`;

const Video = styled.video`
  width: 100%;
  height: auto;
  display: block;
`;

const Placeholder = styled.div`
  width: 100%;
  height: 200px; /* adjust based on expected video dimensions */
  background-color: #eaeaea;
`;

function VideoBlock({ title, videoSrc, videoAlt }) {
  const isProd = process.env.NODE_ENV === "production";
  const basePath = isProd ? process.env.NEXT_PUBLIC_BASE_PATH : "";

  return (
    <Layout>
      <Card>
        <Header>{title}</Header>
        <ImageSpan>
          <LazyVideo videoSrc={basePath + videoSrc} videoAlt={videoAlt} />
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
  font-size: 2rem;
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
  padding: 0.5rem 0.5rem 1.5rem;
  padding-top: 1.5rem;
  text-align: left;
  color: inherit;
  text-decoration: none;
  border-bottom: 1px solid #eaeaea;
  border-radius: 10px;
  width: 100%;
`;

export default VideoBlock;

