import React from 'react';
import * as S from './styles.jsx';
import { ContentTitle } from '../common';

const Home = () => {
  return (
    <S.Wrapper>
      <ContentTitle title="Introduce" />
      <S.List>
        <S.Item>하 곤</S.Item>
        <S.Item>5년차 퍼블리셔</S.Item>
        <S.Item>경기도 성남시 분당구 거주</S.Item>
        <S.Item>Career : <br />&nbsp;&nbsp;&nbsp;&nbsp;Web Agency(View3) 2018.03 ~ 2020.07<br />&nbsp;&nbsp;&nbsp;&nbsp;<b>Tmax A&C 2020.08 ~ 현재</b></S.Item>
      </S.List>
      <S.TextField>
        첫 회사인 View3라는 웹 에이전시에 다니면서 약 77개의 프로젝트를 진행했습니다.<br />
        티맥스A&C 입사 후 <b>WAPL</b>이란 플랫폼 웹앱 구축 프로젝트에 참여했고<br />
        워크스페이스 웹인 <b>WAPL Works</b> 구축 프로젝트에 참여했습니다.<br />
        MUI를 커스터마이징한 Storybook 기반의  공통 UI 컴포넌트 <b>Wapl-ui</b> 라이브러리 개발에 참여했습니다.<br />
        기업 반응형, 브랜드 PC/Mobile 최적화 사이트, 랜딩 사이트 등 다양한 경험이 있습니다.<br />
      </S.TextField>
    </S.Wrapper>
  );
}

export default Home;