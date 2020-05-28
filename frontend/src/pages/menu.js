import React, { useState } from "react"
import { Button } from 'react-bootstrap'

import Layout from "../components/layout"
import SEO from "../components/seo"

import MenuCard from "../components/menucard"
import Courses from "../components/courses"

import { Container, Row, Col } from "react-bootstrap"

function MenuPage ({ data }) {

  const [menuitems, setMenuitems] = useState(null);

  // const APIURL = "http://localhost:5000";

  function getRandomMenu() {
    fetch('/api/randomMeals')
    .then((res) => res.json())
    .then((res) => {
      setMenuitems(res)
   });
  };

  return(
    <Layout>
    <SEO title="Menu" />
    <Container>
      <Row>
        <Col>
          <div className="generate-menu-button">
            <Button variant="outline-primary" onClick={getRandomMenu}>Generez un Menu</Button>
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          {menuitems && <MenuCard menuitems = {menuitems}/>}
        </Col>
      </Row>
      <Row>
        <Col>
          {menuitems && <Courses menuitems={menuitems}/>}
        </Col>
      </Row>
    </Container>
  </Layout>
  )

}

export default MenuPage