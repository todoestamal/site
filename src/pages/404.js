import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import { ResponsiveDiv } from '../components/styles/responsive';
import { Link } from 'gatsby';

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>Aqui no está lo que buscas</h1>
    <ResponsiveDiv>
      <iframe
        src="https://giphy.com/embed/3o7aTskHEUdgCQAXde"
        width="100%"
        height="100%"
        style={{ position: 'absolute' }}
        frameBorder="0"
        class="giphy-embed"
        allowFullScreen
      />
    </ResponsiveDiv>
    <p>
      Acabas de llegar a un sitio que no existe... el vacío. ¿Te sientes
      confundido?
    </p>
    <p>
      Vuelve al <Link to="/">inicio</Link> para volver a encontrarte.
    </p>
  </Layout>
);

export default NotFoundPage;
