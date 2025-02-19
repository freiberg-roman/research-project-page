import Icon from "../Icon/Icon";
import { motion } from "framer-motion";
import React from "react";
import { styled } from "@pigment-css/react";
import { SIZES } from "../../util/const";


function ProjectLinks() {
  return (
    <ButtonRow>
      <SkipLink
        whileHover={{
          scale: 1.1,
          transition: { duration: 0.2 },
        }}
        whileTap={{ scale: 0.8 }}
        href="https://arxiv.org/abs/2410.18835"
      >
        <Icon size="20" id="archive" />
        Paper
      </SkipLink>
      <SkipLink
        whileHover={{
          scale: 1.1,
          transition: { duration: 0.2 },
        }}
        whileTap={{ scale: 0.8 }}
        href="https://github.com/freiberg-roman/mj-grasp-sim"
      >
        <Icon size="20" id="github" />
        Code
      </SkipLink>
    </ButtonRow>
  );
}

const ButtonRow = styled.div`
  margin: 1rem;
  display: flex;
  gap: 1rem;
`;

const SkipLink = styled(motion.a)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  border: 1px solid #eaeaea;
  border-radius: ${SIZES[8]};
  padding: ${SIZES[16]} ${SIZES[24]};
  color: var(--primary-color);
  text-decoration: none;

  &:hover {
    border: 1px solid black;
  }
`;

export default ProjectLinks;
