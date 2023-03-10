import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
  }

  html {
    font-family: 'Roboto', sans-serif;
  }

  body {
    width: '100vw'; 
    height: '100vh';
    background-color: '#3a3a3a'; 
    color: '#ccc';
  }

`

export { GlobalStyle }