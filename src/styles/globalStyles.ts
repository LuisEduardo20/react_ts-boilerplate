import { createGlobalStyle } from "styled-components";

//? Estilo global da aplicação mais css reset
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
`;
