import { createBrowserRouter, RouterProvider } from "react-router";
import './App.css'
import Cards from './components/Cards';
import CTA from './components/CTA';
import Hero from './components/Hero'
import Items from './components/Items'
import Mind from './components/Mind';
import NavBar from './components/NavBar'
import { useState, useEffect } from "react";
import Personalized from './components/Personalized';
import Footer from './components/Footer';
import SearchResults from "./components/SearchResults";


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

  

  function Home() {
  return (
    <>
     <NavBar/>
    <Hero/>
    <Items Items={recipes}/>
    {/* <Cards/> */}
    <CTA/>
    <Mind Name={recipes}/>
    <Personalized Personal={recipes}/>
    <Footer/>
    </>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/search",
    element: <SearchResults/>,
  },
]);

  return (
    <>
  <RouterProvider router={router} />;
    </>
  )
}

export default App
