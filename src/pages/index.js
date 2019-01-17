import React from 'react'
import styled from 'styled-components'
import media from 'styled-media-query'
import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'

const CenteredAnnouncement = styled.div`
  display: flex;
  margin: 30px 0px;
  height: 100%;
  align-items: center;
  flex-direction: column;
`

const ImagePlaceholder = styled.div`
  max-width: 640px;
  width: 100%;
`

const H1 = styled.h1`
  text-align: center;
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <CenteredAnnouncement>
      <ImagePlaceholder>
        <Image />
      </ImagePlaceholder>
      <div>
        <H1>Estamos trabajando en ello!!!</H1>
        <p>
          De mientras estamos mirando de acabar unos detalles. Pero en breve
          podreis disfrutar del mejor podcast de desarrollo sin hablar de
          desarrollo que nunca se haya hecho. Si quereis ir viendo nuestro
          progresos no dudeis en visitar nuestro repo de{' '}
          <a
            href="https://github.com/todoestamal/site"
            rel="noreferrer"
            rel="noopener"
          >
            github
          </a>
        </p>
      </div>
    </CenteredAnnouncement>
  </Layout>
)

export default IndexPage
