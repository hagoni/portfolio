import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GlobalStyle, { Container } from './GlobalStyle';
import { Home, Header, FrontEnd, Publisher, ContactMe } from './src/components';

const Portfolio = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Header />
      {/* <Routes>
        <Route path="/" element={<Publisher />}></Route>
        <Route path="/fe" element={<FrontEnd />}></Route>
        <Route path="/contact" element={<ContactMe />}></Route>
        <Route path="*" element={<Publisher />}></Route>
      </Routes> */}
      <Publisher />
    </BrowserRouter>
  )
}

ReactDom.render(<Portfolio />, document.querySelector('#root'));
