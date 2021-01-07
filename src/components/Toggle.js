import React from 'react';
import styled from 'styled-components';

const Checkbox = styled.input`
  &:checked + span {
    background-color: #21d170;
  }

  &:focus + span {
    box-shadow: 0 0 3px #21d170;
  }

  &:checked + span::before {
    transform: translateX(14px);
  }
`;

const Switch = styled.div`
  position: relative;
  display: inline-block;
  width: 40px;
  height: 20px;

  & > input {
    opacity: 0;
    width: 0;
    height: 0;
  }
`;

const Slider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0.5rem;
  right: 0;
  bottom: 0;
  background-color: #e6eaf6;
  border-radius: 20px;
  -webkit-transition: 0.4s;
  transition: 0.4s;

  &::before {
    position: absolute;
    content: '';
    height: 12.8px;
    width: 12.8px;
    left: 2.5px;
    bottom: 4px;
    background-color: white;
    -webkit-transition: 0.4s;
    transition: 0.4s;
    border-radius: 50%;
  }
`;

const Toggle = () => {
  return (
    <Switch>
      <Checkbox type="checkbox" />
      <Slider />
    </Switch>
  );
};

export default Toggle;
