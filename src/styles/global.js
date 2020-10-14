import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    font-family: 'Poppins', sans-serif;
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  body {
    -webkit-font-smoothing: antialised;
    background-color: #d1d8e4;
  }
  #root {
    max-width: 1020px;
    margin: 0 auto;
    padding: 0 20px 50px;
  }
  button {
    cursor: pointer;
  }
`;