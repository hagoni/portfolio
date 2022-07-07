import React from 'react';
import GlobalStyle, { Container } from './GlobalStyle';
import { Home, Header } from './src/components';

const Portfolio = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Container>
        <Home />
      </Container>
    </>
  )
}

export default Portfolio;
