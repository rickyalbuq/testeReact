import React from 'react';
import styled from 'styled-components';
import Button from './Button';

const Container = styled.div`
  margin: 3.5rem 0;
`;

const Footer = () => {
  return (
    <Container>
      <Button
        pad={'16px 24px'}
        fSize={'19px'}
        lHeight={'24px'}
        fill={'#ffffff'}
        color={'#21D170'}
        href="/"
      >
        Todas as Oportunidades
      </Button>
    </Container>
  );
};

export default Footer;
