
import { FaStar } from "react-icons/fa";
import { FaPeopleGroup } from "react-icons/fa6";
import hand from "/src/assets/image/hand.png"


export default function Cards({image, name, tags, rating, prepTimeMinutes, cookTimeMinutes }) {
  return (
    <div>
      
          <div  className=" img bg-gray-200  p-3 rounded-lg space-y-2  ">
                  <img  src={image} alt="" className="w-52" />
                  <h3>{name}</h3>
                  <span className="flex gap-32 items-center">
                    <p className="text-[14px]">{tags}</p>
                    <span className="flex items-center gap-2">
                      <FaStar className="text-amber-500 text-sm"/>
                      <p className="text-[14px]">{rating}</p>
                    </span>
                  </span>
                  <div className="flex justify-between items-center gap-16">
                    <span className="flex items-center gap-1">
                      <img src={hand} alt="" className="w-4" />
                      <span className="flex gap-1 text-[13px]">
                        <p>{prepTimeMinutes} </p>
                        <p>Mins</p>
                      </span>
      
                    </span>
      
                    <span className="flex items-center gap-1">
                      <FaPeopleGroup className="text-amber-500 text-sm"/>
                      <span className="flex items-center gap-1 justify-center text-[13px]">
                        <p>{cookTimeMinutes} </p>
                        <p>for two</p>
                      </span>
      
                    </span>
                  </div>
                </div>
    </div>
  )
}
