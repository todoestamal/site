import React from 'react';
import styled from 'styled-components';

const EmbedContainer = styled.div`
  position:relative;
  height:0;
  overflow:hidden;
  max-width:100%;
  padding-bottom:56.25%;
`;

const Elem = styled.iframe`
  position:absolute;
  top:0;
  left:0;
  width:100%;
  height:100%;
`;

const player = ({ url }) => (
  <EmbedContainer>
    <Elem src={url} allowFullScreen frameBorder="0" />
  </EmbedContainer>
)

export default player;
