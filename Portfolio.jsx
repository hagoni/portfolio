import React from 'react';
import GlobalStyle, { Container } from './GlobalStyle';
import { Home, Header, Publisher } from './src/components';

const Portfolio = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Publisher />
    </>
  )
}

export default Portfolio;
