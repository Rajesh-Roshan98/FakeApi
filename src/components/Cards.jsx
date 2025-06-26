import React from 'react'

const Cards = ({product}) => {
    const description = product.description.slice(0, 20);
  return (
    <div className='bg-white p-3 flex flex-col cursor-pointer rounded-lg hover:scale-105 shadow-md hover:shadow-xl text-black'>
        <div className='h-48 overflow-hidden'>
            <img src={product.image} className='h-full w-full object-contain' />
        </div>
        <div>
            <h1 className='font-bold text-lg'>{product.title}</h1>
            <h2 className='text-sm text-gray-600 '>{description}...</h2>
        </div>
        <div className='mt-2 font-semibold text-green-600'>
            $ {product.price}
        </div>
    </div>
  )
}

export default Cards
