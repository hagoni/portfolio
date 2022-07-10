import styled from 'styled-components';
import bgImg from '../../images/int_bg.jpg'

export const Wrapper = styled.div`
  height: 500px;
  background: no-repeat center/cover url(${bgImg});
  padding: 60px 20px;
`;

export const FlexWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 100%;
`;

export const Title = styled.h2`
  font-size: 50px;
  font-weight: 700;
  color: #fff;
  margin: 190px 0 30px;
`;

export const SubTitle = styled.p`
  font-size: 20px;
  color: #fff;
  line-height: 150%;
`;
