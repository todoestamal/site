import { createGlobalStyle } from 'styled-components';
import styledNormalize from 'styled-normalize';

const globalStyle = createGlobalStyle`
  ${styledNormalize}
  @import url('https://fonts.googleapis.com/css?family=Fira+Mono');

  body {
    margin: 0;
    width: 100%;
    min-height: 100%;
    overflow-x: hidden;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;

    font-family: 'Fira Mono', monospace;
    font-size: 14px;
  }
`;

export default globalStyle;
