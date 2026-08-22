import { useState, useEffect } from "react";
const Items = () => {
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
      {recipes.map((item) => {
        return (
          <div key={item.id}>
            <p>{item.name}</p>
          </div>
        );
      })}
    </>
  );
};

export default Items;
