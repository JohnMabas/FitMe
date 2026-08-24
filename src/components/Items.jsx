import { useState, useEffect } from "react";
import Cards from "./Cards";
const Items = ({Items}) => {
  

  return (
    <>
    <div className="flex items-center justify-between gap-10">

      
      <div>

          <h1>Nearby Restaurants</h1>

 <div className="grid grid-cols-2 gap-5">
             {Items.slice(0,12).map((item) => {
        return (
          
         <Cards
         key={item.id}
         image={item.image}
         name={item.name}
         tags={item.tags[1]}
         rating={item.rating}
         hand={item.hand}
         prepTimeMinutes={item.prepTimeMinutes}
         cookTimeMinutes={item.cookTimeMinutes}
         />
        );
      })}
       </div>
      </div>

       

<div>
        <h1>Recommended Food Items</h1>

  <div className="grid grid-cols-3 gap-5">

                  {Items.slice(12,30).map((item) => {
        return (
          
         <Cards
         key={item.id}
         image={item.image}
         name={item.name}
         tags={item.tags[1]}
         rating={item.rating}
         hand={item.hand}
         prepTimeMinutes={item.prepTimeMinutes}
         cookTimeMinutes={item.cookTimeMinutes}
         />
        );
      })}
       </div>
</div>


    </div>

    </>
  );

};

export default Items;
