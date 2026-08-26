import NavBar from "./NavBar";
import { useSearchParams } from "react-router";
import { useEffect, useState } from "react";

export default function SearchResults({ recipes }) {
  const [searchParams] = useSearchParams();

  const query = searchParams.get("q") || "";

  const results = recipes.filter((recipe) =>
    recipe.name.toLowerCase().includes(query.toLowerCase()),
  );

  return (
    <div>
      <section>
        <NavBar />

        <section>
          <h1>Search Results for "{query}"</h1>

          {results.length === 0 ? (
            <p>No recipes found.</p>
          ) : (
            results.map((recipe) => (
              <div key={recipe.id}>
                <img src={recipe.image} alt={recipe.name} />
                <h2>{recipe.name}</h2>
              </div>
            ))
          )}
        </section>
      </section>
    </div>
  );
}
