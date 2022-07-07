import styled from 'styled-components';
import Logo from '../../images/logo.png';

export const Wrapper = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  height: 60px;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
`;

export const ToHome = styled.a`
  font-size: 0;
  width: 40px;
  height: 40px;
  background: no-repeat center/cover url(${Logo});
  cursor: pointer;
`;

export const GNB = styled.ul`
  display: flex;
  align-items: center;
`;

export const GNBItem = styled.li`
  margin-left: 15px;
  cursor: pointer;
  transition: 0.2s ease;
  &:hover {
    color: #0b6033;
  }
  &.on {
    font-weight: 700;
    color: #0b6033;
  }
`;