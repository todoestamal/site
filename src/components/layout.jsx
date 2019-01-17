import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import styled, { createGlobalStyle } from 'styled-components';
import styledNormalize from 'styled-normalize';
import Footer from './footer';
import Header from './header';
import fonts from '../globalStyles/fonts';

const GlobalStyles = createGlobalStyle`
  ${styledNormalize}
  ${fonts}
`;

const BodyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: 960px;
  padding: 0px 1.0875rem 1.45rem;
  padding-top: 0;
`;

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <GlobalStyles />
        <BodyWrapper>
          <Header />
          {children}
          <Footer />
        </BodyWrapper>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
