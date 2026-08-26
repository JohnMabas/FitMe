import NavBar from "./NavBar";
import { useSearchParams } from "react-router";
import { useEffect, useState } from "react";

export default function SearchResults() {

     const [searchParams] = useSearchParams();

  const query = searchParams.get("q");

  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const searchRecipes = async () => {
      if (!query) return;

      try {
        setLoading(true);

        const response = await fetch(
          `https://dummyjson.com/recipes/search?q=${encodeURIComponent(query)}`
        );

        const data = await response.json();

        setRecipes(data.recipes);
      } catch (error) {
        console.error("Error fetching recipes:", error);
      } finally {
        setLoading(false);
      }
    };

    searchRecipes();
  }, [query]);

  if (loading) {
    return <h1>Loading...</h1>;
  }
  

  return (
    <div>
      <section>
        <NavBar />

         <section className="p-6">
      <h1 className="text-2xl font-bold mb-6">
        Search results for "{query}"
      </h1>

      {recipes.length === 0 ? (
        <p>No recipes found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {recipes.map((recipe) => (
            <div
              key={recipe.id}
              className="border rounded-lg overflow-hidden"
            >
              <img
                src={recipe.image}
                alt={recipe.name}
                className="w-full"
              />

              <div className="p-4">
                <h2 className="font-bold">
                  {recipe.name}
                </h2>

                <p>
                  {recipe.cuisine}
                </p>

                <p>
                   {recipe.rating}
                </p>

                <p>
                  {recipe.difficulty}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>

       

      </section>
    </div>
  );
}
