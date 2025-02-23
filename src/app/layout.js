import { Inter } from "next/font/google";
import '@pigment-css/react/styles.css';
import { globalCss } from '@pigment-css/react';
import { QUERIES } from '../util/const'

globalCss`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  * {
    margin: 0;
  }

  html, body {
    scroll-behavior: smooth;
    height: 100%;

    --primary-color: black;
    --border-color: #eaeaea;

    --global-padding: 24px;
    @media ${QUERIES.phoneAndSmaller} {
      --global-padding: 8px;
    }
  }
  
  body {
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
  }

  img, picture, video, canvas, svg {
    display: block;
    max-width: 100%;
  }

  input, button, textarea, select {
    font: inherit;
  }
  p, h1, h2, h3, h4, h5, h6 {
    overflow-wrap: break-word;
  }

  #root, #__next {
    isolation: isolate;
    height: 100%;
  }

  ol, ul {
    list-style: none;
  }

  a {
    display: block;
    white-space: nowrap;
  }
`;

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: 'Research Project Webpage Starter',
  description: 'Generated your next research project webpage!',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
        <body className={inter.className}>{children}</body>
    </html>
  );
}
