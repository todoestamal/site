import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';

const IndexPage = () => (
  <Layout>
    <SEO
      title="Patrocinanos"
      keywords={['patrocionio', 'pasta', 'beneficio']}
    />
    <h1>Patrocinar Todo Está Mal</h1>
    <p>
      ¿Estas interesado en hacer llegar tu mensaje a miles de desarrolladores?
      Nosotros estamos interesados en ayudarte. Hablemos.
    </p>
    <p>
      Todo esta mal es un podcast para desarrolladores y otros miembros de la
      comunidad tech. Esta presentado por Miquel Company, Sergio Susa y Berny
      Cantos, desarrolladores senior con mucha experiéncia en varios sectores,
      roles.
    </p>
    <p>
      En cada episodio hablamos de un tema relacionado con la vida techie dando
      nuestro punto de vista y explicando nuestras experiencias. En cada
      episodio invitamos a gente que pueda aportar una experiencia mas detallada
      y un punto de vista diferente
    </p>
    <p>
      Patrocinar nuestro podcast es ideal para todos aquellos que quieran llegar
      a una audiencia tecnica, motivada y con ganas de aprender y probar cosas
      nuevas. A nuestros oientes les puede interesar:
    </p>
    <ul>
      <li>Ofertas de Trabajo</li>
      <li>Cursos Técnicos</li>
      <li>Herramientas, Software, Servicios, Hardware</li>
    </ul>
    <h2>Precio</h2>
    <p>
      No tenemos una tarifa prefijada. Pero nos podemos adaptar a vuestras
      necesidades buscando una solución optima para vuestros intereses.
    </p>
    <p>El patrocinio puede incluir:</p>
    <ul>
      <li>Mención durante el episodio</li>
      <li>Links dentro del site y en la descripción del episodio</li>
      <li>
        Llevar camisetas/merchandising de vuestra empresa en la grabación del
        episodio
      </li>
      <li>Tweets de agradecimiento</li>
    </ul>
    <h2>Contacta con Nosotros</h2>
    <p>
      Si estas interesado en trabajar juntos y patrocinar este podcast{' '}
      <a href="mailto:sponsor@todoestamal.com">envianos un email</a>
    </p>
  </Layout>
);

export default IndexPage;
