import React from 'react';
import styled from 'styled-components';

const Btn = styled.a`
  font-weight: 500;
  border: 1px solid #21d170;
  border-radius: 5px;

  &:hover {
    cursor: pointer;
  }
`;

const Button = ({ pad, fSize, lHeight, fill, color, children }) => {
  return (
    <Btn
      style={{
        padding: pad,
        fontSize: fSize,
        lineHeight: lHeight,
        background: fill,
        color: color,
        '&:hover': {
          color: fill,
          background: color,
        },
      }}
      onMouseOver={({ target }) => {
        target.style.color = fill;
        target.style.background = color;
      }}
      onMouseOut={({ target }) => {
        target.style.color = color;
        target.style.background = fill;
      }}
    >
      {children}
    </Btn>
  );
};

export default Button;
