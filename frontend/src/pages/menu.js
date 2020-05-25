import React, { useState } from "react"
import { Button } from 'react-bootstrap'

import Layout from "../components/layout"
import SEO from "../components/seo"

import Courses from "../components/courses"

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
    <Button variant="outline-primary" onClick={getRandomMenu}>Generez un Menu</Button>
    <h3>Menu</h3>
    <ul>
      {menuitems && menuitems.map((item) => (
        <li key={item.id}>{item.recipename}</li>
      ))}
    </ul>
    <Courses menuitems={menuitems}/>
  </Layout>
  )

}

export default MenuPage