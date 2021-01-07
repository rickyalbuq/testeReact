import React from 'react';
import styled from 'styled-components';

import Toggle from './Toggle';

const HeaderBlock = styled.div`
  margin: 3rem 0 2.5rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.h1`
  color: #274264;
  font-size: 24px;
  line-height: 32px;
`;

const Label = styled.label`
  color: #8798ad;
  font-size: 15px;
  line-height: 22px;
`;

const Header = () => {
  return (
    <HeaderBlock>
      <Title>Oportunidades em destaque</Title>
      <Label>
        Geolocalização Ativa
        <Toggle />
      </Label>
    </HeaderBlock>
  );
};

export default Header;
