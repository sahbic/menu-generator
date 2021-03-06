import React from "react"
import Img from "gatsby-image"
import { Link } from "gatsby"


const Recipe = ({ recipe, file }) => {
    console.log(file)
    return(
        <>
            <div  className="recipe-item">
                <Link to={recipe.slug}>
                    <div className="module-image">
                        {recipe.picture ? <Img className="recipeimage" fluid={recipe.picture.childImageSharp.fluid} /> :  <Img fluid={file.childImageSharp.fluid}/> }
                    </div>
                </Link>
                    <div className="module-text">
                        <Link to={recipe.slug} style={{ textDecoration: 'none' }}>
                            <p className="module-recipe-title">{recipe.recipename}</p>
                        </Link>
                        <p className="module-add-menu">Menu</p>
                    </div>
                
            </div>
        </>
    )

}

export default Recipe