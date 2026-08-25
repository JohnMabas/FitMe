import Cards from "./Cards";

const Items = ({ Items }) => {
  return (
    <div className="w-full px-4 py-8 sm:px-6 lg:px-10">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">

        {/* Nearby Restaurants */}
        <section>
          <h1 className="mb-5 text-xl font-medium text-[#202020] sm:text-2xl">
            Nearby Restaurants
          </h1>

          <div className="grid grid-cols-2 gap-4">
            {Items.slice(0, 4).map((item) => {
              return (
                <Cards
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

        {/* Recommended Food Items */}
        <section>
          <h1 className="mb-5 text-xl font-medium text-[#202020] sm:text-2xl">
            Recommended Food Items
          </h1>

          <div className="grid grid-cols-2 gap-4">
            {Items.slice(4, 8).map((item) => {
              return (
                <Cards
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

    </div>
  );
};

export default Items;