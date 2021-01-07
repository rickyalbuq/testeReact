import React from 'react';
import styled from 'styled-components';

import Vaga from './Cards/Vaga';
import Doacao from './Cards/Doacao';
import Campanha from './Cards/Campanha';

const CardGrid = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
`;

const Grid = () => {
  return (
    <CardGrid>
      <Vaga />
      <Doacao />
      <Doacao />
      <Doacao />
      <Vaga />
      <Campanha />
      <Doacao />
      <Vaga />
      <Doacao />
    </CardGrid>
  );
};

export default Grid;
