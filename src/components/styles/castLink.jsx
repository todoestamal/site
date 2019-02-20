import styled from 'styled-components';

export const CastList = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const CastItem = styled.div`
  background: #eee;
  padding: 10px;
  margin: 3px 0;
`;

export const CastLink = styled.a`
  text-decoration: none;
  color: #000;

  &:hover{
    text-decoration: underline;
  }
`;
