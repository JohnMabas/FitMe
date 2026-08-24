import { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";
import hand from "/src/assets/image/hand.png"
import { FaPeopleGroup } from "react-icons/fa6";
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
    <div className="grid grid-cols-4 gap-3 items-center m-10">

            {recipes.map((item) => {
        return (
          <div key={item.id} className=" img bg-gray-200 w-64 p-5 rounded-lg space-y-2  ">
            <img  src={item.image} alt="" className="w-62" />
            <h3>{item.name}</h3>
            <span className="flex gap-32 items-center">
              <p className="text-[14px]">{item.tags[1]}</p>
              <span className="flex items-center gap-2">
                <FaStar className="text-amber-500 text-sm"/>
                <p className="text-[14px]">{item.rating}</p>
              </span>
            </span>
            <div className="flex items-center gap-16">
              <span className="flex items-center gap-1">
                <img src={hand} alt="" className="w-4" />
                <span className="flex gap-1 text-[13px]">
                  <p>{item.prepTimeMinutes} </p>
                  <p>Mins</p>
                </span>

              </span>

              <span className="flex items-center gap-1">
                <FaPeopleGroup className="text-amber-500 text-sm"/>
                <span className="flex items-center gap-1 justify-center text-[13px]">
                  <p>{item.cookTimeMinutes} </p>
                  <p>for two</p>
                </span>

              </span>
            </div>
          </div>
        );
      })}

    </div>

    </>
  );
};

export default Items;
