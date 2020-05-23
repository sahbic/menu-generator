import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from 'gatsby'

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    {data.allStrapiRecipe.edges.map(({ node }) => (
        <div key={node.id}>
          <Link to={node.slug}>
            <h4>
              {node.recipename}
            </h4>
          </Link>
        </div>
    ))}
  </Layout>
)

export default IndexPage

export const query = graphql`
  query {
    allStrapiRecipe {
      edges {
        node {
          recipename
          slug
        }
      }
    }
  }
`