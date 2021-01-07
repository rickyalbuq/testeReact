import React from 'react';

import Data from '../../Data';
import Card from './Card';
import { Icon1 } from '../Icons';

const CardDoacao = () => {
  const { header, title, vehicle, value, text, button, city } = Data[1];

  return (
    <Card
      header={header}
      title={title}
      vehicle={vehicle}
      value={value}
      text={text}
      button={button}
      city={city}
    >
      <Icon1 />
    </Card>
  );
};

export default CardDoacao;
