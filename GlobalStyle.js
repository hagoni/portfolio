import styled, { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

// 공통 변수
$HeaderHeight: 60;

const GlobalStyle = createGlobalStyle`
  ${reset};
  html {
    font-family: 'Noto Sans KR', sans-serif;
    color: #222;
    height: 100%;
  }
  body, #root {
    height: 100%;
  }
  b {
    font-weight: 500;
  }
  * {
    box-sizing: border-box;
  }
`;

export const Inner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  height: 100%;
`;

export default GlobalStyle;