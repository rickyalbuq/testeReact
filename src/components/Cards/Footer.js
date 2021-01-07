import React from 'react';
import styled from 'styled-components';

const Text = styled.p`
  margin: 1rem 1.5rem 0.75rem 1.5rem;
  clear: both;
  
  color: #8798ad;
  font-size: 14px;
  line-height: 20px;
  font-weight: 400;
`;

const Footer = ({ children }) => {
  return <Text>{children}</Text>;
};

export default Footer;
