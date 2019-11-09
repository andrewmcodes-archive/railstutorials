import React from "react"
import { Link } from "gatsby"
import { graphql } from 'gatsby'

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Hero from "../components/hero"

const IndexPage = (props) => {
  const data = props.data.allFile.edges[0].node.childMarkdownRemark.frontmatter
  return (
  <Layout>
    <SEO title="Home" />
    <Hero title={data.title} intro={data.intro} image={data.image} />

    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
  )
}

export const query = graphql`
  query {
    allFile (filter: {sourceInstanceName: {eq: "content"} name: {eq: "home"}}) {
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
}`

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
//           topics
//           title
//           summary
//         }
//       }
//     }
//   }
// `

// export default ComponentName
