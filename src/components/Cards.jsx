import { FaStar } from "react-icons/fa";
import { FaPeopleGroup } from "react-icons/fa6";
import hand from "/src/assets/image/hand.png";

export default function Cards({
  image,
  name,
  tags,
  rating,
  prepTimeMinutes,
  cookTimeMinutes,
}) {
  return (
    <div className=" img lg:w-64 w-full rounded-lg bg-[#f7f7f7] p-3 transition-all duration-200 hover:shadow-md">
      
      <div className="aspect-square w-full overflow-hidden rounded-md">
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover"
        />
      </div>

      <h3 className="mt-2 line-clamp-2 min-h-8 text-xs font-medium leading-4 text-[#202020] sm:text-sm">
        {name}
      </h3>

      <div className="mt-2 flex items-center justify-between gap-2">
        
        <p className="truncate text-[10px] text-gray-500 sm:text-xs">
          {tags}
        </p>

        <div className="flex shrink-0 items-center gap-1">
          <FaStar className="text-[10px] text-amber-500" />

          <span className="text-[10px] text-gray-600 sm:text-xs">
            {rating}
          </span>
        </div>

      </div>

      <div className="mt-2 flex items-center justify-between gap-2">
        
        <div className="flex min-w-0 items-center gap-1">
          <img
            src={hand}
            alt=""
            className="h-3 w-3 shrink-0 object-contain sm:h-4 sm:w-4"
          />

          <span className="whitespace-nowrap text-[9px] text-gray-600 sm:text-[11px]">
            {prepTimeMinutes} Mins
          </span>
        </div>

        <div className="flex min-w-0 items-center gap-1">
          <FaPeopleGroup className="shrink-0 text-[10px] text-amber-500" />

          <span className="whitespace-nowrap text-[9px] text-gray-600 sm:text-[11px]">
            {cookTimeMinutes} for two
          </span>
        </div>

      </div>
    </div>
  );
}