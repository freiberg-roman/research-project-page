import React from "react";
import { styled } from '@pigment-css/react';
import Icon from '@/component/Icon/Icon'

function Footer() {
  return (
    <FooterWrapper>
      <Paragraph>Find me on</Paragraph>
      <a href="mailto:me@romanfreiberg.com">
        <LogoSpan>
          <Icon size="24" id="mail"></Icon>
        </LogoSpan>
      </a>
      <a href="https://github.com/freiberg-roman">
        <LogoSpan>
          <Icon size="24" id="github"></Icon>
        </LogoSpan>
      </a>
    </FooterWrapper>
  );
}

const FooterWrapper = styled.footer`
  display: flex;
  flex: 1;
  padding: 1rem 0;
  border-top: 1px solid #eaeaea;
  justify-content: center;
  align-items: center;
`;

const Paragraph = styled.p`
  margin-right: 1rem;
  font-weight: 300;
`;

const LogoSpan = styled.span`
  text-align: center;
  justify-content: center;
  margin: 0 1.5rem;
`;

export default Footer;
