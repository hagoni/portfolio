import React from 'react';
import * as S from './styles.jsx';
import { ContentTitle } from '../common';

const Home = () => {
  return (
    <S.Wrapper>
      <ContentTitle title="Introduce" />
      <div>
        간단한 소개
      </div>
      <div>
        경력
      </div>
    </S.Wrapper>
  );
}

export default Home;