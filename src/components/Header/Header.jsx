import React from 'react';
import * as S from './styles';

const GNBList = [
  <S.GNBItem>Publisher</S.GNBItem>,
  <S.GNBItem>FE Developer</S.GNBItem>,
  <S.GNBItem>Contact me</S.GNBItem>
]

const Header = () => {
  return (
    <S.Wrapper>
      <S.ToHome>홈으로</S.ToHome>
      <S.GNB>
        {/* {GNBList.map((content) => content)} */}
      </S.GNB>
    </S.Wrapper>
  );
}

export default Header;