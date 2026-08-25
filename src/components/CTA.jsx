import { BiRepeat } from "react-icons/bi";


export default function CTA() {
  return (
    <div>
      <div className="flex justify-center items-center gap-6  m-auto bg-[#FC8019] p-10">
        <span className="text-white text-lg">Search by Restaurant</span>
        <BiRepeat className="text-white"/>

              <input
                className="border border-white text-white w-125 py-2 pl-4 rounded-lg"
                type="text"
                placeholder="Enter item or restaurant you are looking for"
              />

              <button className="border border-black bg-black text-white p-2 rounded-lg ">
                Get Started
              </button>

            
      </div>
    </div>
  )
}
