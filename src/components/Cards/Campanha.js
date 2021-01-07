import React from 'react';

import Data from '../../Data';
import Card from './Card';
import { Icon2 } from '../Icons';

const CardCampanha = () => {
  const { header, title, vehicle, value, text, button, city } = Data[2];

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
      <Icon2 />
    </Card>
  );
};

export default CardCampanha;
