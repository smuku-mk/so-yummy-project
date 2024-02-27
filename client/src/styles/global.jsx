import styled, { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

export const GlobalStyles = createGlobalStyle`
  ${normalize}

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Poppins', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: ${(props) => props.theme.mainBg}
  }
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }
  *,
  ::after,
  ::before {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }
  h1 {
    padding: 0;
    margin: 0;
  }
  ul {
    list-style-type: none;
  }
  a {
    text-decoration: none;
  }
  img {
    display: block;
    max-width: 100%;
    height: auto;
  }
`;

export const GlobalContainer = styled.div`
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 16px;

  @media screen and (min-width: 768px) {
    padding: 0 32px;
  }

  @media screen and (min-width: 1440px) {
    padding: 0 100px;
  }
`;
