import styled from 'styled-components';

export const Header = styled.div`
  overflow: hidden;
  padding: 10px 0;
  width: 100%;
`;

export const HeaderLogo = styled.div`
  width: 100%;
  display: flex;

  @media (max-width: 768px) {
    justify-content: space-around;
  }
`;

export const NavBarLogo = styled.div`
  width: 350px;
`;

export const NavBarMenu = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin-top: 5px;
`;
