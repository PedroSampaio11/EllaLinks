import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  html, body {
    padding: 0;
    margin: 0;
    height: 100%;
    font-size: 10px;
    overflow-x: hidden;
    background: linear-gradient(164deg, rgba(255, 210, 196, 1) 0%, rgba(255, 251, 250, 1) 100%);
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  /* Scrollbar */
  ::-webkit-scrollbar {
    width: 8px;
    background: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #DC0469;
    border-radius: 10px;
  }

  /* Texto selecionado */
  ::selection {
    background: #DC0469;
    color: #fff;
  }
`;
