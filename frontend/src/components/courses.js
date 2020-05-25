import React from "react"

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

const CategoryList = ({category, list}) => {
    return(
        <>
            <h4>{category}</h4>
            <ul>
            {Object.values(list[category]).map((item) => (
                <li key={item.id}>{item.amount} {item.ingredientname}</li>
            ))}
            </ul>
        </>
    )
}

const Courses = ({menuitems}) => {
    const courses = menuitems ? getCourses(menuitems) : null
    return(
        <>
        <h3>Liste de Courses</h3>
            {courses && Object.keys(courses).map((item,i) => (
                <CategoryList key={item} category={item} list={courses}/>
            ))}
      </>
    )
}

export default Courses