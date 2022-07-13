import React from 'react';
import * as S from './styles';
import { ContentTitle } from '../common';
import { DataTmax, DataView3 } from './Data';
import { Inner } from '../../../GlobalStyle';

const Publisher = () => {
  const ListTmax = DataTmax.map((target) => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
      <>
        <S.ProjectItem key={target.id}>
          <S.ProjectImg imgURL={`src/images/${target.imgNum}.jpg`} />
          <S.ProjectTitle>{target.title}</S.ProjectTitle>
          <S.ProjectInfoList>
            <S.ProjectInfoItem>
              기간 : {target.date}
            </S.ProjectInfoItem>
            <S.ProjectInfoItem>
              {target.web}
            </S.ProjectInfoItem>
            <S.ProjectInfoItem>
              담당 업무 : {target.myRole}
            </S.ProjectInfoItem>
          </S.ProjectInfoList>
          <S.SiteLink onClick={handleOpen}>경력기술서 요약본 열기</S.SiteLink>
        </S.ProjectItem>
        <S.CustomModal
          open={open}
          onClose={handleClose}
        >
          <S.ModalTitle>경력기술서</S.ModalTitle>
          <S.CareerTitle>프로젝트 명 : {target.cTitle}</S.CareerTitle>
          <S.CareerContentList>
            <S.CareerContentItem>
              참여인원 : {target.cCount}명 내외
            </S.CareerContentItem>
            <S.CareerContentItem>
              기술스택 : {target.cStack}
            </S.CareerContentItem>
            <S.CareerContentItem>
              &lt;기타사항&gt;<br />{target.cInfo}
            </S.CareerContentItem>
          </S.CareerContentList>
        </S.CustomModal>
      </>
    );
  });

  const ListView3 = DataView3.map((target) => {
    return (
      <S.ProjectItem key={target.id}>
        <S.ProjectImg imgURL={`src/images/${target.imgNum}.jpg`} />
        <S.ProjectTitle>{target.title}</S.ProjectTitle>
        <S.ProjectInfoList>
          <S.ProjectInfoItem>
            기간 : {target.date}
          </S.ProjectInfoItem>
          <S.ProjectInfoItem>
            {target.web}
          </S.ProjectInfoItem>
          <S.ProjectInfoItem>
            담당 업무 : {target.myRole}
          </S.ProjectInfoItem>
        </S.ProjectInfoList>
        <S.SiteLink href={target.siteURL} target="_blank">사이트 바로가기</S.SiteLink>
        {target.gitURL !== undefined &&
          <S.SiteLink href={target.gitURL} target="_blank">깃 바로가기</S.SiteLink>
        }
      </S.ProjectItem>
    )
  })

  return (
    <>
      <ContentTitle title="Publisher">2018.03 부터 퍼블리셔로 일하며 진행한 프로젝트 내역입니다.<br />미완성 포트폴리오 입니다.<br />2022년 7월 13일 최신화.</ContentTitle>
      <Inner>
        <S.ContentWrapper>
          <S.Title>Tmax A&C(2020.08 ~ )</S.Title>
          <S.ProjectList>{ListTmax}</S.ProjectList>
        </S.ContentWrapper>
        <S.ContentWrapper>
          <S.Title>View3(2018.03 ~ 2020.07)</S.Title>
          <S.ProjectList>{ListView3}</S.ProjectList>
        </S.ContentWrapper>
      </Inner>
    </>
  );
}

export default Publisher;