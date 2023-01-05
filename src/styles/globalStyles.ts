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
  input:focus, textarea:focus {
    outline: none;
  }
  input:-webkit-autofill,
  input:-webkit-autofill:hover, 
  input:-webkit-autofill:focus, 
  input:-webkit-autofill:active {
    -webkit-box-shadow: 0 0 0 30px white inset !important;
  }
  .spinner {
    z-index: 5;
  }
`;
