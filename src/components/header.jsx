import React from 'react';
import { Link } from 'gatsby';
import Logo from './logo';
import { Header, HeaderLogo, NavBarLogo, NavBarMenu } from './styles/header';
import { CastList, CastItem, CastLink } from './styles/castLink';

export default () => (
  <Header>
    <HeaderLogo>
      <NavBarLogo>
        <Link to="/"><Logo /></Link>
      </NavBarLogo>
    </HeaderLogo>
    <NavBarMenu>
      <CastList>
        <CastItem>
          <CastLink href="https://itunes.apple.com/es/podcast/todo-esta-mal/id1453375597?mt=2">
            iTunes
          </CastLink>
        </CastItem>
        <CastItem>
          <CastLink href="https://www.youtube.com/channel/UCb7kuF7CtxV4pLqswhZy_Dw">
            YouTube
          </CastLink>
        </CastItem>
        <CastItem>
          <CastLink href="https://www.twitter.com/_TodoEstaMal_">
            Twitter
          </CastLink>
        </CastItem>
        <CastItem>
          <CastLink href="https://open.spotify.com/show/7lSX0GlROui9UFK6SsJY3u?si=aJYzFkIZRKSv9cOrRUOhDA">
            Spotify
          </CastLink>
        </CastItem>
        <CastItem>
          <CastLink href="https://overcast.fm/itunes1453375597/todo-esta-mal">
            Overcast
          </CastLink>
        </CastItem>
        <CastItem>
          <CastLink href="https://www.stitcher.com/podcast/todo-esta-mal">
            Stitcher
          </CastLink>
        </CastItem>
        <CastItem>
          <CastLink href="https://anchor.fm/s/1e2a16b0/podcast/rss">
            RSS
          </CastLink>
        </CastItem>
      </CastList>
    </NavBarMenu>
  </Header>
);
