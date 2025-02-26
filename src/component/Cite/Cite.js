"use client";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { styled, css } from "@pigment-css/react";
import { SIZES } from "../../util/const";

const CiteUs = ({
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
          <motion.button className={copyButton} onClick={handleCopy}
            whileHover={{
              scale: 1.1,
              transition: { duration: 0.2 },
            }}
            whileTap={{ scale: 0.8 }}
          >
            Copy
          </motion.button>
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

const copyButton = css({
  background: 'white',
  display: 'inline-flex',
  alignItems: 'center',
  border: '1px solid #eaeaea',
  borderRadius: SIZES[8],
  padding: `${SIZES[16]} ${SIZES[24]}`,
  color: 'var(--primary-color)',
  textDecoration: 'none',
  '&:hover': {
    border: '1px solid black',
  },
});

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
  font-weight: 100;
  font-size: 2;
  margin-bottom: 0.5rem;
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
  border-radius: 10px;
  width: 100%;
  text-decoration: none;
  border-bottom: 1px solid #eaeaea;
`;

export default CiteUs;
