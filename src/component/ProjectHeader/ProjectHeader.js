import React from "react";
import { styled } from '@pigment-css/react';

function ProjectHeader({ title, authors, publishedAt }) {
  return (
    <>
      <NameHeader>
	{title}
      </NameHeader>
      <Authors>
	{ authors }
      </Authors>
      <PublishedAt>
	{ publishedAt }
      </PublishedAt>
      
    </>
  );
}

const NameHeader = styled.h1`
  max-width: 800px;
  text-align: center;
  text-decoration: none;
  line-height: 1;
  font-size: 4rem;
`;

const Authors = styled.p`
  padding-top: 1rem;
  font-weight: 300;
  font-size: 1.rem;
`;

const PublishedAt = styled.p`
  padding-bottom: 1rem;
  font-weight: 100;
  font-size: 1.25rem;
`;

export default ProjectHeader;
