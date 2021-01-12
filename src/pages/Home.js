import React from 'react';
import styled from 'styled-components';

import Header from '../components/Header';
import Grid from '../components/Grid';
import Footer from '../components/Footer';

const Container = styled.div`
  margin: 0 auto;
  max-width: calc(3 * 20rem + 3rem);

  @media (max-width: 1004px) {
    max-width: calc(2 * 20rem + 1.5rem);
  }

  @media (max-width: 663px) {
    max-width: calc(20rem);
  }
`;

const Home = () => {
  return (
    <Container>
      <Header />
      <Grid />
      <Footer />
    </Container>
  );
};

export default Home;
