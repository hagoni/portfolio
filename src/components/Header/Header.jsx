import React from 'react';
import * as S from './styles';

const GNBList = [
  <S.GNBItem><S.CustomLink to="/">Publisher</S.CustomLink></S.GNBItem>,
  <S.GNBItem><S.CustomLink to="/fe">FE Developer</S.CustomLink></S.GNBItem>,
  <S.GNBItem><S.CustomLink to="/contact">Contact me</S.CustomLink></S.GNBItem>
]

const Header = () => {
  return (
    <S.Wrapper>
      <S.ToHome>홈으로</S.ToHome>
      <S.GNB>
        {GNBList.map((content) => content)}
      </S.GNB>
    </S.Wrapper>
  );
}

export default Header;