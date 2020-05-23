import React from "react"
import { Button } from 'react-bootstrap'
// import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
// import { graphql } from 'gatsby'

const MenuPage = ({ data }) => (
  <Layout>
    <SEO title="Menu" />
    <Button variant="outline-primary">Generate Menu</Button>
  </Layout>
)

export default MenuPage