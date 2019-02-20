import React from 'react';
import { graphql } from "gatsby";
import Episode from '../components/episode';

const episode = ({data}) => (
  <Episode episode={data.markdownRemark} />
)

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        title
        tags
        yt_id
        audio_url
      }
    }
  }
`;



export default episode;
