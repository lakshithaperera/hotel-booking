import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
  body,html{
    overflow-x: hidden;
  }
  body {
    margin: 0;
    padding: 0;
    font-family: 'Jost', sans-serif;
    box-sizing: border-box;
  }
  button{
    cursor: pointer;
    border-radius: 4px;
  }
`;
 
export default GlobalStyle;