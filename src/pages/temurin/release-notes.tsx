import * as React from 'react'
import { graphql } from 'gatsby'
import { Trans } from 'gatsby-plugin-react-i18next';

import Layout from '../../components/Layout'
import Seo from '../../components/Seo'
import ReleaseNotesRender from '../../components/ReleaseNotesRender'

const ReleaseNotesPage = () => (
  <Layout>
    <section className='py-5 text-center container'>
      <div className='row py-lg-5'>
        <div className='col-lg-8 col-md-8 mx-auto'>
          <h1 className='fw-light'><Trans>Release Notes</Trans></h1>
        </div>
        <ReleaseNotesRender />
      </div>
    </section>
  </Layout>
)

export default ReleaseNotesPage

export const Head = () => (
  <Seo title='Release Notes' />
)

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(filter: {language: {eq: $language}}) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`