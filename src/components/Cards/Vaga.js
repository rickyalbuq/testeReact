import React from 'react';

import Data from '../../Data';
import Card from './Card';
import { Icon0 } from '../Icons';

const CardVaga = () => {
  const { header, title, vehicle, value, text, button, city } = Data[0];

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
      <Icon0 />
    </Card>
  );
};

export default CardVaga;
