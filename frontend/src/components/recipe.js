import React from "react"
import Img from "gatsby-image"
import { Link } from "gatsby"


const Recipe = ({ recipe }) => {
    return(
        <>
            <div  className="recipe-item">
                <Link to={recipe.slug}>
                    <div className="module-image">
                        {recipe.picture ? <Img className="recipeimage" fluid={recipe.picture.childImageSharp.fluid} /> :  <div className="rectangle" /> }
                    </div>
                    <div className="module-text">
                        <h4>{recipe.recipename}</h4>
                    </div>
                </Link>
            </div>
        </>
    )

}

export default Recipe