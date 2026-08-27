import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";

import "./App.css";
import { useEffect, useState } from "react";

import CTA from "./components/CTA";
import Hero from "./components/Hero";
import Items from "./components/Items";
import Mind from "./components/Mind";
import NavBar from "./components/NavBar";
import Personalized from "./components/Personalized";
import Footer from "./components/Footer";
import SearchResults from "./components/SearchResults";
import Restaurant from "./components/Restaurant";
import Checkout from "./components/Checkout";


function Home({ recipes }) {
  return (
    <>
      <NavBar />

      <Hero />

      <Items Items={recipes} />

      <CTA />

      <Mind Name={recipes} />

      <Personalized Personal={recipes} />

      <Footer />
    </>
  );
}


function App() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    async function getRecipes() {
      try {
        const res = await fetch("https://dummyjson.com/recipes");
        const data = await res.json();

        setRecipes(data.recipes);
      } catch (error) {
        console.log(error.message);
      }
    }

    getRecipes();
  }, []);


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home recipes={recipes} />,
    },

    {
      path: "/search",
      element: <SearchResults recipes={recipes} />,
    },

    {
      path: "/restaurant/:id",
      element: <Restaurant recipesItem={recipes} />,
    },
    {
  path: "/checkout",
  element: <Checkout/>
},
  ]);


  return(
    <RouterProvider router={router} />

  ) 
}


export default App;