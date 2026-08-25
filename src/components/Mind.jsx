import CardMind from "./CardMind";

export default function Mind({ Name }) {
  return (
    <div>
      <section className="mt-24 px-4 m-8 ">
        <h2 className="mb-5 text-xl font-medium text-[#202020] sm:text-2xl">What's on your mind</h2>
        <div className=" grid grid-cols-6 justify-center items-center gap-3 mt-4 ">
          {Name.slice(0, 6).map((item) => {
            return (
              <CardMind key={item.id}
               image={item.image}
                name={item.name} />
            );
          })}
        </div>
      </section>
    </div>
  );
}
