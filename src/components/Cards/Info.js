import React from 'react';
import styled from 'styled-components';
import Button from '../Button';

const InfoBlock = styled.div`
  margin-top: 1rem;
  clear: both;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TextBlock = styled.div`
  display: flex;
  align-items: center;
`;

const Numbers = styled.p`
  margin-right: 0.5rem;
  color: #274264;
  font-size: 18px;
  line-height: 22px;
`;

const Text = styled.p`
  color: #8798ad;
  font-size: 9px;
  line-height: 10px;
  text-transform: uppercase;
`;

const Info = ({ level, value, text, button }) => {
  return (
    <InfoBlock>
      <TextBlock>
        <Numbers>{value}</Numbers>
        <Text>
          {text[0]} <br /> {text[1]}
        </Text>
      </TextBlock>
      <Button
        pad={'8px 16px'}
        fSize={'14px'}
        lHeight={'18px'}
        fill={'#21D170'}
        color={'#ffffff'}
        href="/"
      >
        {level == 'subscribe' ? 'Participar' : 'Doar'}
      </Button>
    </InfoBlock>
  );
};

export default Info;
