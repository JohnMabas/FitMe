
import './App.css'
import Cards from './components/Cards';
import Hero from './components/Hero'
import Items from './components/Items'
import NavBar from './components/NavBar'
import { useState, useEffect } from "react";


function App() {

  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    async function getRecipes() {
      try {
        const res = await fetch("https://dummyjson.com/recipes");
        const data = await res.json();
        setRecipes(data.recipes);
        console.log(data);
      } catch (error) {
        console.log(error.message);
      }
    }
    getRecipes();
  }, []);

  return (
    <>
    <NavBar/>
    <Hero/>
    <Items Items={recipes}/>
    <Cards/>
      
    </>
  )
}

export default App
