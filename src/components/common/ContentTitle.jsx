import React from 'react';
import styled from 'styled-components';

const Title = styled.h2`
  font-size: 50px;
  font-weight: 700;
  color: #0b6033;
`;

const ContentTitle = ({ title }) => {
  return (
    <Title>{title}</Title>
  );
}

export default ContentTitle;