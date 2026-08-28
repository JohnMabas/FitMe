import CardMind from "./CardMind";

export default function Mind({ Name }) {
  return (
    <section className="mt-16 px-4 sm:mt-20 sm:px-6 md:mt-24 lg:px-8">

      {/* Heading */}

      <h2
        className="
          mb-6
          text-lg
          font-medium
          text-[#202020]
          sm:text-xl
          md:text-2xl
        "
      >
        What's on your mind
      </h2>


      {/* Cards */}

      <div
        className="
          grid
          grid-cols-2
          gap-x-4
          gap-y-8

          sm:grid-cols-3
          sm:gap-x-5
          sm:gap-y-9

          md:grid-cols-4
          md:gap-x-6

          lg:grid-cols-6
          lg:gap-x-7
        "
      >

        {Name.slice(0, 6).map((item) => (
          <CardMind
            key={item.id}
            image={item.image}
            name={item.name}
          />
        ))}

      </div>

    </section>
  );
}