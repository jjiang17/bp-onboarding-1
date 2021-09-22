import React,{useEffect, useState} from "react";
import './App.css';
import Recipe from "./recipe";

const App = () => {

  const APP_ID = '2ffca7e2';
  const APP_KEY = '39eec2a0b1ff5479923cb80180ee5375';
  
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('chicken');

useEffect( () => {
  getRecipes();
}, [query]);

const getRecipes = async () => {
  const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
  const data = await response.json();
  setRecipes(data.hits);
  console.log(data.hits);
};

const updateSearch = e => {
  setSearch(e.target.value);
};

const getSearch = e => {
  e.preventDefault();
  setQuery(search);
  setSearch('');
};

  return (
    <div className="App">
      <form onSubmit={getSearch} className="search-form">
        <input className="search-bar" type = 'text'
        value={search} onChange={updateSearch}/>
        <button className="search-button" type = 'submit'>Search</button>
      </form>
      <div className="recipes">
      {recipes.map(recipe => (
        <Recipe
        key={recipe.recipe.label}
        title={recipe.recipe.label}
        servings={recipe.recipe.yield}
        calories={recipe.recipe.calories/recipe.recipe.yield}
        image = {recipe.recipe.image}
        ingredients={recipe.recipe.ingredients}
        /> 
      ))}
      </div>
    </div>
  );
};

export default App;
