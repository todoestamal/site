import React from 'react';
import styled from 'styled-components';
import Logo from './logo';

const Header = styled.div`
  overflow: hidden;
  display: flex;
  justify-content: center;
  padding: 5px 0;
`;

const NavBarLogo = styled.div`
  width: 600px;
`;

export default props => (
  <Header>
    <NavBarLogo>
      <Logo />
    </NavBarLogo>
  </Header>
)
