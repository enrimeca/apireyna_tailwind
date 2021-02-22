import React from 'react'

const ProductCard = ({name, image, description}) => {
  return (
    <div className="m-4 mx-8 max-w-sm bg-white rounded-xl shadow-md space-y-2 flex flex-wrap sm:space-y-0 sm:space-x-6 h-120 w-64">
      <img className="h-64 rounded-t-xl" src={image} alt={name} />
      <div className="pl-4 pr-4 sm:pl-1">
        <p className="text-lg text-black font-semibold">{name}</p>
        <p className="text-gray-500 font-medium">{description}</p>
      </div>
    </div>
  )
}

export default ProductCard
