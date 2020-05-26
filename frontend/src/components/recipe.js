import React from "react"
import Img from "gatsby-image"
import { Link } from "gatsby"


const Recipe = ({ recipe }) => {
    return(
        <>
            <div  className="recipe-item">
                <Link to={recipe.slug}>
                    {recipe.picture && <Img fluid={recipe.picture.childImageSharp.fluid} /> }
                    <h4>{recipe.recipename}</h4>
                </Link>
            </div>
        </>
    )

}

export default Recipe