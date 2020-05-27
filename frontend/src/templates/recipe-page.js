import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

export default function RecipePage({ data }) {
  const post = data.strapiRecipe
  return (
    <Layout>
      <SEO title={post.recipename} />
      <div>
        <h1>{post.recipename}</h1>
        <ul>
          {data.strapiRecipe.ingredients.map(({ ingredient }) => (
                  <li key={ingredient.id}>{ingredient.ingredientname}</li>
          ))}
        </ul>
      </div>
    </Layout>
  )
}

export const query = graphql`
    query($slug: String!) {
        strapiRecipe(slug: { eq: $slug }) {
            recipename
            slug
            ingredients {
                ingredient {
                    ingredientname
                }
            }
        }
    }
`