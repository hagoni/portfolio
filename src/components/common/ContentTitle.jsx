import React from 'react';
import * as S from './styles';
import { Inner } from '../../../GlobalStyle';

const ContentTitle = ({ title, subTitle }) => {
  return (
    <S.Wrapper>
      <Inner>
        <S.FlexWrapper>
          <S.Title>{title}</S.Title>
          <S.SubTitle>{subTitle}</S.SubTitle>
        </S.FlexWrapper>
      </Inner>
    </S.Wrapper>
  );
}

export default ContentTitle;