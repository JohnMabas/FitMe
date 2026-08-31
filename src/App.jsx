import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
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
import Signup from "./components/Signup";
import Login from "./components/Login";

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

function ProtectedRoute({ children }) {
  const isLoggedIn =
    localStorage.getItem("foodAppLoggedIn") === "true";

  if (!isLoggedIn) {
    return <Navigate to="/signup" replace />;
  }

  return children;
}

function App() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    async function getRecipes() {
      try {
        const res = await fetch(
          "https://dummyjson.com/recipes"
        );

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
      element: <Signup />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/home",
      element: (
        <ProtectedRoute>
          <Home recipes={recipes} />
        </ProtectedRoute>
      ),
    },
    {
      path: "/search",
      element: (
        <ProtectedRoute>
          <SearchResults recipes={recipes} />
        </ProtectedRoute>
      ),
    },
    {
      path: "/restaurant/:id",
      element: (
        <ProtectedRoute>
          <Restaurant recipesItem={recipes} />
        </ProtectedRoute>
      ),
    },
    {
      path: "/checkout",
      element: (
        <ProtectedRoute>
          <Checkout />
        </ProtectedRoute>
      ),
    },
  ]);

  return (
    <RouterProvider router={router} />
  );
}


export default App;