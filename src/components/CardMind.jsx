

export default function CardMind({image, name}) {
  return (
    <div>
        <div>
            <img src={image} alt="" className="w-25 rounded-full" />
            <span className="text-sm">{name}</span>
        </div>
      
    </div>
  )
}
