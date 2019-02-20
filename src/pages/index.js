import React from 'react';
import Layout from '../components/layout';
import Episode from '../components/episode';
import SEO from '../components/seo';

const IndexPage = props => (
  <Episode episode={props.data.allMarkdownRemark.edges[0].node} />
);

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      limit: 1
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          html
          frontmatter {
            title
            tags
            yt_id
            audio_url
          }
        }
      }
    }
  }
`;

export default IndexPage;
