import styled, { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

// 공통 변수
$HeaderHeight: 60;

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

export const Container = styled.div`
  padding-top: 60px;
  max-width: 1200px;
  margin: 0 auto;
`;

export default GlobalStyle;