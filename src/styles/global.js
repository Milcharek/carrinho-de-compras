/* // Arquivo de configuração de estilos globais */
import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');
  * {
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