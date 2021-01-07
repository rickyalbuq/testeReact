import React from 'react';
import styled from 'styled-components';

import icon0 from '../img/icon-service-0.svg';
import icon1 from '../img/icon-service-1.svg';
import icon2 from '../img/icon-service-2.svg';

const Icon = styled.img`
  width: 3rem;
`;

export const Icon0 = () => {
  return <Icon src={icon0} alt="Ícone Representativo"/>;
};

export const Icon1 = () => {
  return <Icon src={icon1} alt="Ícone Representativo"/>;
};

export const Icon2 = () => {
  return <Icon src={icon2} alt="Ícone Representativo"/>;
};
