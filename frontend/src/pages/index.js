import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from "gatsby"
import Recipe from "../components/recipe"

import { Container, Row, Col } from "react-bootstrap"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <Container>
      <Row>
        <Col lg={3}>
          <p>recipes</p>
        </Col>
        <Col md={12} lg={9}>
          <Container className="container-recipes">
            <Row>
              {data.allStrapiRecipe.edges.map(({ node }) => (
                <Col sm={6} xl={4} key={node.slug}>
                  <Recipe recipe={node} file={data.file}/>
                </Col>
              ))}
            </Row>
          </Container>
        </Col>
      </Row>
    </Container>
  </Layout>
)

export default IndexPage

export const query = graphql`
query MyQuery {
  allStrapiRecipe {
    edges {
      node {
        recipename
        slug
        picture {
          childImageSharp {
            fluid(maxWidth: 500) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
  file(relativePath: { eq: "food.jpeg" }) {
    childImageSharp {
      fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
      }
    }
  }
}
`