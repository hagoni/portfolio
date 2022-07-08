import styled from 'styled-components';
import Modal from '@mui/material/Dialog';

export const ContentWrapper = styled.div`
  padding: 50px 0 40px;
`;

export const Title = styled.h3`
  font-size: 60px;
  color: #222;
  font-weight: 700;
  margin-bottom: 40px;
`;

export const ProjectList = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;

export const ProjectItem = styled.li`
  width: 47%;
  margin-bottom: 40px;
  &:nth-child(2n-1) {
    margin-right: 6%;
  }
`;

export const ProjectImg = styled.div`
  height: 300px;
  background: no-repeat center/cover url(${props => props.imgURL});
`;

export const ProjectTitle = styled.h4`
  font-size: 24px;
  font-weight: 500;
  margin: 10px 0 20px;
`;

export const ProjectInfoList = styled.ul``;

export const ProjectInfoItem = styled.li`
  font-size: 14px;
  color: #222;
  margin-bottom: 10px;
`;

export const SiteLink = styled.a`
  font-size: 14px;
  color: #108446;
  font-weight: 500;
  text-decoration: unset;
  margin-right: 20px;
  cursor: pointer;
`;

export const CustomModal = styled(Modal)`
  .MuiDialog-paper {
    max-width: 800px;
    width: 800px;
    padding: 40px 20px;
  }
`;

export const ModalTitle = styled.p`
  position: relative;
  font-size: 30px;
  font-weight: 500;
  margin-bottom: 50px;
  &:before {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    bottom: -10px;
    height: 1px;
    background-color: #aaa;
  }
`;

export const CareerTitle = styled.p`
`;

export const CareerContentList = styled.ul`
`;

export const CareerContentItem = styled.li`
  margin-top: 15px;
  line-height: 150%;
`;