import React from "react";
import { styled } from '@pigment-css/react';
import Icon from '@/component/Icon/Icon'

function Footer() {
  return (
    <FooterWrapper>
      <Paragraph>Template from</Paragraph>
      <a href="https://github.com/freiberg-roman/research-project-page.git">
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
