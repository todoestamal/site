import React from 'react';
import Layout from '../components/layout'
import EpisodeList from '../components/episodeList';
import SEO from '../components/seo'
import { Content, MainContent } from '../components/styles/layout';
import YouTube from '../components/ytPlayer';

const episode = ({episode}) => {
  const { frontmatter, html } = episode;

  return (
  <Layout>
    <SEO title={frontmatter.title} keywords={frontmatter.tags} />
    <YouTube url={`https://www.youtube.com/embed/${frontmatter.yt_id}`}/>
    <Content>
      <EpisodeList />
      <MainContent>
        <div
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </MainContent>
    </Content>
  </Layout>
  );
}

export default episode;
