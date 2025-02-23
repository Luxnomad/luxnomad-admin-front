import { createGlobalStyle } from 'styled-components';
import normalize from 'styled-normalize';

const GlobalStyle = createGlobalStyle`
  ${normalize}
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    color: #333;
  }
  
  li {
    list-style: none;
  }
  
  a {
    text-decoration: none;
  }
  
  p {
    margin: 0;
  }
`;

export default GlobalStyle;
