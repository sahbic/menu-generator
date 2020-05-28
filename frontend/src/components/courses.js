import React from "react"

import { Checkbox, FormGroup, FormControlLabel } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'

import { CardColumns, Card} from "react-bootstrap"

function getCourses(menuitems) {

    var items = {}

    for (var i = 0, rec; i < menuitems.length; i++) {
        rec = menuitems[i]
        for (var j = 0, ing; j < rec.ingredients.length; j++) {
            ing = rec.ingredients[j]
            var amount = ing.amount ? ing.amount : 1
            if (items.hasOwnProperty(ing.ingredient.type)) {
                if (items[ing.ingredient.type].hasOwnProperty(ing.ingredient.ingredientname)) {
                    items[ing.ingredient.type][ing.ingredient.ingredientname]["amount"] += amount
                }
                else {
                    items[ing.ingredient.type][ing.ingredient.ingredientname] = {
                        "ingredientname" : ing.ingredient.ingredientname,
                        "type" : ing.ingredient.type,
                        "amount" : amount,
                        "measurement" : ing.measurement,
                        "id" : ing.ingredient.id,
                    }
                }

            } else {
                items[ing.ingredient.type] = {}
                items[ing.ingredient.type][ing.ingredient.ingredientname] = {
                    "ingredientname" : ing.ingredient.ingredientname,
                    "type" : ing.ingredient.type,
                    "amount" : amount,
                    "measurement" : ing.measurement,
                    "id" : ing.ingredient.id,
                }
            }
        }
    }

    return(items)
}

const StyledFormControlLabel = withStyles({
    root: {
        margin: '0 0% 0px',
    },
    label: {
      fontSize: '1rem',
      fontFamily: 'serif',
    },
  })(FormControlLabel);

const CategoryList = ({category, list}) => {
    return(
        <>
            <div className="type-card">
                <h4 className="ingredient-type-title">{category.replace(/_/g," ")}</h4>
                <FormGroup column>
                    {Object.values(list[category]).map((item) => (
                        <StyledFormControlLabel className="list-ingredient-group" control={<Checkbox color="primary"/>} label={item.amount + ' ' + item.ingredientname} />
                    ))}
                </FormGroup>
            </div>
        </>
    )
}

const Courses = ({menuitems}) => {
    const courses = menuitems ? getCourses(menuitems) : null
    return(
        <>
        <h3>Liste de Courses</h3>
                <CardColumns>
                    {courses && Object.keys(courses).map((item,i) => (
                        <Card style={{ border: 'none' }}>
                            <CategoryList category={item} list={courses}/>
                        </Card>  
                    ))}
                </CardColumns>
      </>
    )
}

export default Courses