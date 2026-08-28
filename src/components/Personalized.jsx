import PersonalizedCard from "./PersonalizedCard";

export default function Personalized({ Personal }) {
  return (
    <div>
      <section className="mt-10 m-8">
        <h1 className="mb-10 text-xl font-medium text-[#202020] sm:text-2xl">
          Personalized recommendations
        </h1>

        <div className="grid grid-cols-2 md:grid-cols-4 justify-center items-center gap-4">
          {Personal.slice(0, 4).map((item) => {
            return (
              <PersonalizedCard
                key={item.id}
                image={item.image}
                name={item.name}
                tags={item.tags?.[1]}
                rating={item.rating}
                prepTimeMinutes={item.prepTimeMinutes}
                cookTimeMinutes={item.cookTimeMinutes}
              />
            );
          })}
        </div>
      </section>
    </div>
  );
}
