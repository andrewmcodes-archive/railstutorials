import React from 'react'
import { Link } from 'gatsby'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Hero from '../components/hero'
import Source from '../components/SourcesListCard'
import SourcesList from '../components/SourcesList'

const IndexPage = props => {
  const indexData =
    props.data.allFile.edges[0].node.childMarkdownRemark.frontmatter
  const sources = props.data.allSourcesYaml.edges

  return (
    <Layout>
      <SEO title='Home' />
      <Hero
        title={indexData.title}
        intro={indexData.intro}
        image={indexData.image}
      />
      <div className='max-w-xl mx-auto py-8'>
        <SourcesList sourceEdges={sources} />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allSourcesYaml(sort: { fields: [date], order: DESC }) {
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
    allFile(
      filter: { sourceInstanceName: { eq: "content" }, name: { eq: "home" } }
    ) {
      edges {
        node {
          childMarkdownRemark {
            frontmatter {
              title
              intro
              image
            }
          }
        }
      }
    }
  }
`

export default IndexPage

// export default IndexPage

// import React from 'react'
// import { graphql } from 'gatsby'

// const ComponentName = ({ data }) => <pre>{JSON.stringify(data, null, 4)}</pre>

// export const query = graphql`
//   {
//     allSourcesYaml {
//       edges {
//         node {
//           authors
//           link
//           date
//           formats
//           tags
//           title
//           summary
//         }
//       }
//     }
//   }
// `

// export default ComponentName
