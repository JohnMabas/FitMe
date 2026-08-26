import NavBar from "./NavBar";
import { FaPeopleGroup } from "react-icons/fa6";
import hand from "/src/assets/image/hand.png";
import { useSearchParams } from "react-router";
import { useEffect, useState } from "react";
import Footer from "./Footer";

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

        <section className="m-8">
          <div className="space-y-4">
            <h1>Search Results for "{query}"</h1>
            <div className="flex items-center gap-3">
              <button className="bg-[#FC8019] p-2 w-24 rounded-2xl text-white">
                Dishes
              </button>
              <button className="border border-[#FC8019] p-2 rounded-2xl w-40">
                Restaurants
              </button>
            </div>
          </div>

          <div className="mt-13 grid grid-cols-5 gap-96">
            {results.length === 0 ? (
              <p>No recipes found.</p>
            ) : (
              results.map((recipe) => (
                <div
                  key={recipe.id}
                  className="flex items-center gap-3 px-4 py-4 bg-gray-100  w-87.5"
                >
                  <img className="w-32 rounded-lg" src={recipe.image} alt={recipe.name} />
                  <div className="">
                    <h2 className="font-bold">{recipe.name}</h2>
                    <span className="text-sm">{recipe.tags[1]}</span>
                    <div className="flex items-center gap-10">
                      <span className="flex items-center gap-2">
                        <img src={hand} alt="" />

                        {recipe.prepTimeMinutes}
                      </span>

                      <span className="flex items-center gap-1">
                        <span className="flex items-center gap-2">
                          <FaPeopleGroup className="shrink-0 text-[20px] text-amber-500" />
                          {recipe.cookTimeMinutes}
                          <p>Mins</p>
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </section>
      </section>
      <Footer/>
    </div>
  );
}
