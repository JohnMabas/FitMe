

export default function CardMind({image, name}) {
  return (
    <div>
        <div className="space-y-3 img">
            <img src={image} alt="" className="w-25 rounded-full" />
            <span className="text-sm">{name}</span>
        </div>
      
    </div>
  )
}
