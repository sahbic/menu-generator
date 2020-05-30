import React from "react"
import MenuRecipe from "../components/menurecipe"

function MenuCard({ menuitems }) {
    return(
        <>
            <h3 style={{ fontFamily: 'serif' }}>Menu</h3>
            <div className="menu-recipe-container" >
                {menuitems && menuitems.map((item) => (
                    <MenuRecipe key={item.id} item={item} />
                ))}
            </div>
        </>
    )
}
  
export default MenuCard