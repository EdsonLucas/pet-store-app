import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body, #react-root {
    min-height: 100%;
  }

  body {
    font-family: 'Nunito', 'Roboto', sans-serif;
    background: #ffffff;
    -webkit-font-smoothing: antialiased !important;
  }

  body, input, button {
    color: #222;
    font-size: 14px;
    font-weight: 700;
  }

  button {
    cursor: pointer;
    outline: none
  }

  h1 {
    font-size: 40px
  }

  h2 {
    font-size: 20px;
  }

  h3 {
    font-size: 17px
  }

  a:focus,
  button:focus,
  a:active,
  button:active,
  a:visited,
  button:visited {
    outline: none;
    border: none;
  }

`;
