import RatingStars from '../atom/RatingStars'

const ProductCard = ({ 
  name, 
  price, 
  image, 
  rating = 5, 
  badges = [] 
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-xl p-4 transition-all duration-300 hover:scale-105">
      <div className="relative aspect-square bg-gray-50 rounded-lg mb-4">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-contain"
          loading="lazy"
        />
        {badges.length > 0 && (
          <div className="absolute top-2 right-2 flex gap-1">
            {badges.map((badge, index) => (
              <span
                key={index}
                className="w-6 h-6 rounded-full bg-purple-600 text-white text-xs font-bold flex items-center justify-center"
              >
                {badge}
              </span>
            ))}
          </div>
        )}
      </div>
      
      <h3 className="text-sm font-medium text-gray-900 line-clamp-2 min-h-[2.5rem]">
        {name}
      </h3>
      
      <div className="mt-2 flex items-center justify-between">
        <span className="text-lg font-bold text-gray-900">
          ${price.toLocaleString('en-US')}
        </span>
        <RatingStars rating={rating} />
      </div>
    </div>
  )
}

export default ProductCard