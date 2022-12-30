import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  html, body, #root {
    height: 100%;
  }
  a {
    text-decoration: none;
  }
  ul[class],
  ol[class] {
    list-style: none;
  }
  button {
    cursor: pointer;
  }
  .spinner {
    z-index: 5;
  }
`;
