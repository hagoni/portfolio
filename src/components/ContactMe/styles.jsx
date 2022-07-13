import styled from 'styled-components';
import Contact from '../../images/contact.jpg';

export const Wrapper = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 800px;
  height: 400px;
  background: no-repeat center/cover url(${Contact});
  &:before {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.3);
    z-index: -1;
  }
`;

export const Title = styled.h2`
  padding: 20px;
  height: 20px;
  font-size: 45px;
  color: #fff;
  font-weight: 500;
`;

export const EmailAddress = styled.span`
  position: absolute;
  right: 30px;
  bottom: 30px;
  font-size: 16px;
  color: #fff;
`;