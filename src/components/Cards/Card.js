import React from 'react';
import styled from 'styled-components';

import Header from './Header';
import Body from './Body';
import Info from './Info';
import Footer from './Footer';

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
  header,
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
      <Header>{header}</Header>
      <Body title={title} vehicle={vehicle}>
        {children}
        <Info value={value} text={text} button={button} />
      </Body>
      <Footer className="">{city}</Footer>
    </CardBlock>
  );
};

export default Card;
