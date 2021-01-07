import React from 'react';
import styled from 'styled-components';

const Text = styled.h2`
  margin: 1rem 1.5rem;
  color: #8798ad;

  font-size: 12px;
  line-height: 14px;
  font-weight: 500;
  text-transform: uppercase;
`;

const Header = ({ children }) => {
  return <Text>{children}</Text>;
};

export default Header;
