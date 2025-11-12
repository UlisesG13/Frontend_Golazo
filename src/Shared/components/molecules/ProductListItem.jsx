import RatingStars from '../atom/RatingStars'

const ProductListItem = ({
  name,
  price,
  image,
  rating = 5
}) => {
  return (
    <div className="flex gap-4 p-4 border-b border-gray-100 last:border-b-0">
      <div className="flex-shrink-0 w-20 h-20">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-contain rounded"
          loading="lazy"
        />
      </div>
      
      <div className="flex flex-col flex-grow min-w-0">
        <h3 className="text-sm font-medium text-gray-900 line-clamp-1">
          {name}
        </h3>
        
        <RatingStars rating={rating} size="sm" className="mt-1" />
        
        <div className="mt-1 flex items-center justify-between">
          <span className="text-sm font-bold text-gray-900">
            ${price.toLocaleString('en-US')}
          </span>
          <button className="text-sm text-teal-600 font-medium hover:text-teal-700">
            Set Details
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductListItem