export default function CardMind({ image, name }) {
  return (
    <div className="flex w-full justify-center">
      <div className="flex w-full max-w-32 flex-col items-center gap-3 text-center">
        <img
          src={image}
          alt={name}
          className="
            aspect-square
            w-20
            rounded-full
            object-cover
            sm:w-24
            md:w-28
            lg:w-30
          "
        />

        <span
          className="
            line-clamp-2
            text-xs
            font-medium
            leading-4
            sm:text-sm
          "
        >
          {name}
        </span>
      </div>
    </div>
  );
}
