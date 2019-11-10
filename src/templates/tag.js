import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import SourcesList from '../components/SourcesList'

const CategoryTemplate = ({ location, pageContext, data }) => {
  const { tag } = pageContext
  return (
    <Layout location={location} title={`Sources in tag "${tag}"`}>
      <SEO title={`Sources in tag "${tag}"`} />
      <h1>Tag: {tag}</h1>
      <SourcesList sourceEdges={data.allSourcesYaml.edges} />
    </Layout>
  )
}

export const pageQuery = graphql`
  query TagPage($tag: String) {
    allSourcesYaml(limit: 1000, filter:  { tags: { in: [$tag] } }) {
      totalCount
      edges {
        node {
          authors
          link
          date
          formats
          tags
          title
          summary
        }
      }
    }
  }
`

export default CategoryTemplate
