import React from 'react';
import styled from 'styled-components';

import Header from './components/Header';
import Grid from './components/Grid';
import Footer from './components/Footer';

const Container = styled.div`
  margin: 0 auto;
  max-width: calc(3 * 20rem + 3rem);
`;

const App = () => {
  return (
    <Container>
      <Header />
      <Grid />
      <Footer />
    </Container>
  );
};

export default App;
