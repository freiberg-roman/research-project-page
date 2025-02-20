"use client";
import { SIZES } from "../../util/const";
import { css, styled } from "@pigment-css/react";
import { motion } from "framer-motion";
import React from "react";
import Icon from "../Icon/Icon";


function ProjectLinks() {
  return (
    <ButtonRow>
      <motion.a
	  	className={motionButton}
        whileHover={{
          scale: 1.1,
          transition: { duration: 0.2 },
        }}
        whileTap={{ scale: 0.8 }}
        href="https://github.com/freiberg-roman/research-project-starter"
      >
        <Icon size="20" id="archive" />
        Paper
      </motion.a>
      <motion.a
	  	className={motionButton}
        whileHover={{
          scale: 1.1,
          transition: { duration: 0.2 },
        }}
        whileTap={{ scale: 0.8 }}
        href="https://github.com/freiberg-roman/research-project-starter"
      >
        <Icon size="20" id="github" />
        Code
      </motion.a>
      <motion.a
	  	className={motionButton}
        whileHover={{
          scale: 1.1,
          transition: { duration: 0.2 },
        }}
        whileTap={{ scale: 0.8 }}
        href="https://github.com/freiberg-roman/mj-grasp-sim"
      >
        {/* GitHub Icon before the text */}
        <Icon size="20" id="twitter" />
        Twitter
      </motion.a>
    </ButtonRow>
  );
}
export default ProjectLinks;

const ButtonRow = styled.div`
  margin: 1rem;
  display: flex;
  gap: 1rem;
`;

const motionButton = css({
	display: 'inline-flex',
	alignItems: 'center',
	gap: '0.5rem',
	border: '1px solid #eaeaea',
	borderRadius: SIZES[8],
	padding: `${SIZES[16]} ${SIZES[24]}`,
	color: 'var(--primary-color)',
	textDecoration: 'none',
	':hover': {
	  border: '1px solid black',
	},
  });
