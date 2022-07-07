import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset};
  html {
    font-family: 'Noto Sans KR', sans-serif;
    height: 100%;
  }
  body, #root {
    height: 100%;
  }
`;

export default GlobalStyle;