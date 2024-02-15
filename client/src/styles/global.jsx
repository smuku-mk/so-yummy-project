import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  @import '~@csstools/normalize.css';

  /* colors */
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
}

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: rgb(226, 225, 225);
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
