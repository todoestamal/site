import React from 'react';
import styled from 'styled-components';

const Footer = styled.footer`
  margin-top: auto;
  font-size: 0.7rem;
  background-color: #efefef;
  text-align: center;
  padding: 10px 0;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
`;

export default props => (
  <Footer>
    <span>© {new Date().getFullYear()}, Construido con {` `} <a href="https://www.gatsbyjs.org">Gatsby</a></span>
  </Footer>
);
