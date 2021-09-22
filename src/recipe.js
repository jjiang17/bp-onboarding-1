import React from "react";
import style from "./recipe.module.css"

const Recipe = ({title,servings,calories,image,ingredients}) => {
    return(
        <div className={style.recipe}>
            <h1>{title}</h1>
            <div className={style.ingredients}>Ingredients:
            <ol>
                {ingredients.map(ingredient =>(
                    <li>{ingredient.text}</li>
                ))}
            </ol>
            </div>
            <p>Servings: {servings}</p>
            <p>Calories per serving: {Math.round(calories)}</p>
            <img className={style.image} src= {image} alt=""></img>
        </div> 
    );


};

export default Recipe; 