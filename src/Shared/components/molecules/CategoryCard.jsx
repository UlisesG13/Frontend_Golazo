const CategoryCard = ({ title, image }) => {
  return (
    <div className="rounded-lg overflow-hidden shadow-sm bg-white w-full">
      <div 
        className="h-48 w-full bg-cover bg-center" 
        style={{ 
          backgroundImage: `url('${image}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }} 
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="mt-2 text-sm text-gray-600">Explora {title.toLowerCase()}</p>
      </div>
    </div>
  )
}

export default CategoryCard
