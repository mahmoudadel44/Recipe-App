import React from 'react'
//import style from './recipe.module.css'
const Recipe=({title,calories,image,ingredients})=>{
    return(
        
<div className="recipe">
<h1>{title}</h1>
<p>{calories}</p>
<img className="image" src={image} alt="food"/>
<ol>
    {ingredients.map(ingredient => (
        <li>{ingredient.text}</li>
    ))}
</ol>
</div>

    )
}


export default Recipe;