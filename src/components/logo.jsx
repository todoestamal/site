import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

const Image = () => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(relativePath: { eq: "logo.png" }) {
          childImageSharp {
            fluid(maxWidth: 500) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}
    render={data => <Img fluid={data.placeholderImage.childImageSharp.fluid} alt="Todo Esta Mal" />}
  />
)
export default Image;
