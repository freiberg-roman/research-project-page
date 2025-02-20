"use client";
import React, { useState } from "react";
import styled from "styled-components";
import { SIZES } from "@/utils/const";

const BibtexCard = ({
  entryType = "article",
  citationKey = "yourKey",
  title,
  authors,
  journal,
  year,
  publisher,
  ...rest
}) => {
  const generateBibtex = () => {
    const lines = [];
    lines.push(`@${entryType}{${citationKey},`);
    lines.push(`  title = {${title}},`);
    lines.push(`  author = {${authors.join(" and ")}},`);
    if (journal) lines.push(`  journal = {${journal}},`);
    if (year) lines.push(`  year = {${year}},`);
    if (publisher) lines.push(`  publisher = {${publisher}},`);
    // Add any additional fields
    Object.entries(rest).forEach(([key, value]) => {
      lines.push(`  ${key} = {${value}},`);
    });
    // Remove the trailing comma from the last field
    if (lines.length > 0) {
      lines[lines.length - 1] = lines[lines.length - 1].replace(/,$/, "");
    }
    lines.push(`}`);
    return lines.join("\n");
  };

  const bibtexString = generateBibtex();

  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(bibtexString);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Copy failed:", err);
    }
  };

  return (
    <Layout>
      <Card>
        <HeaderContainer>
          <Header>Cite Us</Header>
          <CopyButton onClick={handleCopy}>
            {copied ? "Copied!" : "Copy"}
          </CopyButton>
        </HeaderContainer>
        <Cite>{bibtexString}</Cite>
      </Card>
    </Layout>
  );
};

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
`;

const CopyButton = styled.button`
  background: #0070f3;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  cursor: pointer;
  font-size: 0.9rem;
  &:hover {
    background: #005bb5;
  }
`;

const Cite = styled.pre`
  background-color: #f5f5f5;
  color: #333;
  padding: 1rem;
  border-radius: 5px;
  font-family: monospace;
  white-space: pre-wrap;
  overflow-x: auto;
`;

const Header = styled.h2`
  font-weight: 600;
  font-size: 1.5rem;
  margin: 0;
`;

const Layout = styled.div`
  margin-top: ${SIZES[60]};
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
  padding: 1.5rem;
  text-align: left;
  color: inherit;
  border: 1px solid #eaeaea;
  border-radius: 10px;
  width: 100%;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

export default BibtexCard;
