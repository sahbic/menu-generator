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
        <Col lg={2}>
          <p>qqchose</p>
        </Col>
        <Col md={12} lg={9}>
          <Container>
            <Row className="text-center">
              {data.allStrapiRecipe.edges.map(({ node }) => (
                <Col sm={6} xl={4} key={node.slug}>
                  <Recipe recipe={node}/>
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
}
`