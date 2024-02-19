import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

export const GlobalStyles = createGlobalStyle`
  ${normalize}

  :root {
  --black: #000000;
  --white: #ffffff;
  --brand: #8baa36;
  --fontLight: #fafafa;
  --fontDark: #3e4462;
  --accentDark: #22252a;
  --highlightDark: #1e1f28;
  --transparent: #d9d9d9;
  --accentLight: #efefef;
  --borderLight: #f0f0f0;
  --borderDark: #23262a;
  --inputText: #bdbdbd;
  --error: #e74a3b;
  --warning: #f6c23e;
  --success: #3cbc81;
  --mediaBg: #ebf3d4;
  --darkBg: #1e1f28;
  --formDark: #2a2c36;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Poppins', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: #fafafa;
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
