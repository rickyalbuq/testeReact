import React from 'react';
import styled from 'styled-components';

import Header from './Header';
import Body from './Body';
import Info from './Info';
import Footer from './Footer';
import { Icon0, Icon1 } from '../Icons';

const CardBlock = styled.div`
  width: 20rem;

  box-sizing: border-box;
  border: 1px solid #e6eaf6;
  border-radius: 6px;

  &:hover {
    box-shadow: 0px 10px 30px rgba(13, 51, 32, 0.1);
  }
`;

const Card = ({
  level,
  title,
  vehicle,
  value,
  text,
  button,
  city,
  children,
}) => {
  return (
    <CardBlock>
      <Header>
        {level === 'subscribe' ? 'Vaga de Voluntariado' : 'Doação de materiais'}
      </Header>
      <Body title={title} vehicle={vehicle}>
        {level === 'subscribe' ? <Icon0 /> : <Icon1 />}
        <Info
          value={value}
          text={
            level === 'subscribe' ? ['Horas', 'Semana'] : ['Valor', 'Esperado']
          }
          button={button}
          level={level}
        />
      </Body>
      <Footer>{city}</Footer>
    </CardBlock>
  );
};

export default Card;
