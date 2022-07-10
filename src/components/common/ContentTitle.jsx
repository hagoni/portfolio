import React from 'react';
import * as S from './styles';
import { Inner } from '../../../GlobalStyle';

const ContentTitle = ({ title, children }) => {
  return (
    <S.Wrapper>
      <Inner>
        <S.FlexWrapper>
          <S.Title>{title}</S.Title>
          <S.SubTitle>{children}</S.SubTitle>
        </S.FlexWrapper>
      </Inner>
    </S.Wrapper>
  );
}

export default ContentTitle;