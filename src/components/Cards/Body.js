import React from 'react';
import styled from 'styled-components';

const CardBody = styled.div`
  padding: 1.5rem;
  border-top: 1px solid #e6eaf6;
  border-bottom: 1px solid #e6eaf6;
`;

const Title = styled.h3`
  color: #274264;
  font-size: 18px;
  line-height: 22px;
`;

const Vehicle = styled.p`
  margin: 1rem 0;
  color: #21d170;
  font-size: 14px;
  line-height: 20px;
`;

const TitleBlock = styled.div`
  margin: 0 1rem 1rem 0;
  width: calc(100% - 4rem);
  float: left;
`;

const Body = ({title, vehicle, children, img}) => {
  return (
    <CardBody>
      <TitleBlock>
        <Title>{title}</Title>
        <Vehicle>{vehicle}</Vehicle>
      </TitleBlock>
      {children}
    </CardBody>
  );
};

export default Body;
