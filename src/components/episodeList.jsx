import React from 'react';
import { Link, StaticQuery } from "gatsby"
import styled, { css } from 'styled-components';

const EpisodeList = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 10px;
  border-right: 1px solid #bbb;
  flex: 1;
`;

const Episode = styled.div`
  margin: 5px 0;
  padding: 5px;
  background: #bbb;

  ${props =>
    props.active &&
    css`
      background: #eee;
    `}
`;

const StyledLink = styled(Link)`
  color: #000;
  text-decoration: none;
  border-bottom: 1px solid #bbb;

  &:hover {
    text-decoration: underline;
  }
`;

const Number = styled.div`
  font-size: 12px;
`;

const Title = styled.div`
  font-weight: 600;
`;

const episodeList = (props) => (
  <StaticQuery query={graphql`
    query {
      allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
        edges {
          node {
            frontmatter {
              path
              episode
              title
            }
          }
        }
      }
    }
  `
  }

  render={(data) => (
      <EpisodeList>
        {data.allMarkdownRemark.edges.map(({node}, idx) => (
          <Episode active={ idx === 0}>
            <StyledLink to={node.frontmatter.path}>
              <Number>Episodio {node.frontmatter.episode}</Number>
              <Title>{node.frontmatter.title}</Title>
            </StyledLink>

          </Episode>
        ))}
      </EpisodeList>
    )}
/>
);

export default episodeList;
