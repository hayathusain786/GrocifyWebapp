import React from 'react'
import { FaHeart, FaPlusSquare } from 'react-icons/fa'

const ProductCard = ({image,name,price}) => {
  return (
    <div className="bg-card px-3 py-5 flex flex-col justify-between items-center rounded-lg">
                {/* icons  */}
                <div className="flex justify-between w-full">
                <span className='text-secondary text-xl'> <FaHeart/> </span>
                <span className='text-secondary text-xl'> <FaPlusSquare/> </span>
                </div>
                {/* image  */}
                <div className='w-full h-36'>
                    <img src={image} className='w-full h-full object-contain' />
                </div>
                {/* Content  */}
                <div className="flex flex-col gap-2 items-center">
                    <h2 className="font-bold">{name}</h2>
                    <p className="font-medium">${price.toFixed(2)}</p>
                    <button className="btn-primary">Add to Cart</button>
                </div>
            </div>
  )
}

export default ProductCard