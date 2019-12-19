import React, { useEffect, useState } from 'react';
import Recipe from './Recipe'
import "./App.css"
const App = () => {
    const APP_ID = "f1053257"
    const APP_KEY = "e57c8ba16650c26e92d456de2e1308ad"
    const [recipes, setRecipes] = useState([]);
    const[search,setSearch]=useState("")
    const [query,setQuery]=useState('chicken')
    //const exampleReq=`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`
    // const [counter,setCounter]=useState(0)
    useEffect(() => {
        //console.log('useEffect has been run ')
        getRecipes()
    }, [query])

    const getRecipes = async () => {
        const response = await fetch(
            `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`)
        const data = await response.json();
        // console.log(data);
        setRecipes(data.hits)
        console.log(data.hits)
    }

   const updateSearch=(e)=>{
        setSearch(e.target.value)
    }
    const getSearch=(e)=>{
        e.preventDefault()
        setQuery(search)
        setSearch('')
    }
    return (
             <div className="App">
                 <div className="header-style">
                 <div className="header">Recipe APP</div>
                 </div>
            <form className="search-form" onSubmit={getSearch}>
                <input className="search-bar" type="text" value={search} onChange={updateSearch}/>
                <button className="search-button" type="submit">Search</button>
            </form>
<div className="recipes">
            {recipes.map(recipe => (
                <Recipe 
                key={recipe.recipe.label}
                title={recipe.recipe.label}
                calories={recipe.recipe.calories}
                image={recipe.recipe.image}
              ingredients={recipe.recipe.ingredients}
                 />
            ))}
            </div>
        </div>

    )


}
export default App;