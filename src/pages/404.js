import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>Aqui no está</h1>
    <p>Acabas de llegar a un sitio que no existe... el vacío.</p>
  </Layout>
)

export default NotFoundPage
