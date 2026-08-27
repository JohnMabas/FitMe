import { useParams, useNavigate } from "react-router";

export default function Restaurant({ recipes }) {
  const { id } = useParams();
  const navigate = useNavigate();

  const recipe = recipes.find(
    (recipe) => recipe.id === Number(id)
  );

  if (!recipe) {
    return (
      <div className="p-8">
        <h1>Recipe not found</h1>

        <button
          onClick={() => navigate("/")}
          className="mt-4 bg-[#FC8019] px-4 py-2 rounded-lg text-white"
        >
          Go Home
        </button>
      </div>
    );
  }

  return (
    <div>
      <header>
        <button
          onClick={() => navigate(-1)}
          className="m-4"
        >
          ← Back
        </button>
      </header>

      <main className="p-8">
        <img
          src={recipe.image}
          alt={recipe.name}
          className="w-96 rounded-xl"
        />

        <h1 className="text-3xl font-bold mt-6">
          {recipe.name}
        </h1>

        <p className="mt-4">
          {recipe.instructions?.join(" ")}
        </p>

        <div className="mt-6">
          <p>Prep time: {recipe.prepTimeMinutes} mins</p>
          <p>Cook time: {recipe.cookTimeMinutes} mins</p>
          <p>Servings: {recipe.servings}</p>
          <p>Difficulty: {recipe.difficulty}</p>
          <p>Cuisine: {recipe.cuisine}</p>
        </div>
      </main>
    </div>
  );
}