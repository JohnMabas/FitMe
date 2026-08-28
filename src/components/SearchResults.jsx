
import NavBar from "./NavBar";
import { FaPeopleGroup } from "react-icons/fa6";
import hand from "/src/assets/image/hand.png";
import { useSearchParams, useNavigate } from "react-router";
import Footer from "./Footer";

export default function SearchResults({ recipes }) {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const query = searchParams.get("q") || "";

  const results = recipes.filter((recipe) =>
    recipe.name.toLowerCase().includes(query.toLowerCase())
  );

  const openRestaurant = (id) => {
    navigate(`/restaurant/${id}`);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />

      <main className="flex-1 px-4 py-6 sm:px-6 md:px-8 lg:px-10">
        {/* Header */}
        <div className="space-y-4">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold">
            Search Results for "{query}"
          </h1>

          {/* Filter Buttons */}
          <div className="flex flex-wrap items-center gap-3">
            <button className="bg-[#FC8019] px-5 py-2 rounded-2xl text-white text-sm sm:text-base">
              Dishes
            </button>

            <button className="border border-[#FC8019] px-5 py-2 rounded-2xl text-sm sm:text-base">
              Restaurants
            </button>
          </div>
        </div>

        {/* Results */}
        <div className="mt-8 sm:mt-10 md:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
          {results.length === 0 ? (
            <p className="col-span-full text-gray-500 text-center py-10">
              No recipes found.
            </p>
          ) : (
            results.map((recipe) => (
              <div
                key={recipe.id}
                onClick={() => openRestaurant(recipe.id)}
                className="cursor-pointer flex items-center gap-3 p-3 sm:p-4 bg-gray-100 rounded-lg w-full min-w-0 hover:shadow-md transition-shadow duration-200"
              >
                {/* Image */}
                <img
                  className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-lg object-cover shrink-0"
                  src={recipe.image}
                  alt={recipe.name}
                />

                {/* Content */}
                <div className="min-w-0 flex-1">
                  <h2 className="font-bold text-sm sm:text-base md:text-lg truncate">
                    {recipe.name}
                  </h2>

                  <span className="block text-xs sm:text-sm text-gray-600 truncate mt-1">
                    {recipe.tags?.[1] || recipe.tags?.[0] || ""}
                  </span>

                  {/* Recipe Info */}
                  <div className="flex flex-wrap items-center gap-3 sm:gap-5 mt-3 text-xs sm:text-sm">
                    <span className="flex items-center gap-1.5">
                      <img
                        src={hand}
                        alt=""
                        className="w-5 h-5 sm:w-6 sm:h-6"
                      />
                      <span>{recipe.prepTimeMinutes}</span>
                      <span>Mins</span>
                    </span>

                    <span className="flex items-center gap-1.5">
                      <FaPeopleGroup className="shrink-0 text-lg sm:text-xl text-amber-500" />
                      <span>{recipe.cookTimeMinutes}</span>
                      <span>Mins</span>
                    </span>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
