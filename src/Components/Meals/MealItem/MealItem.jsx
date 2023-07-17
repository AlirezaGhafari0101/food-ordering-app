import React from 'react'
import MealItemForm from './MealItemForm'

export default function MealItem({price, description, name}) {


    const fixedPrice = `$${price.toFixed(2)}`

  return (
    <li className='flex justify-between m-4 pb-4 border-b border-[#ccc]'>
      <div>
        <h3 className='ml-1 font-bold text-xl'>{name}</h3>
        <div className='italic'>{description}</div>
        <div className='mt-1 font-bold text-lg text-[#ad5502]'>{fixedPrice}</div>
      </div>
      <div>
        <MealItemForm  />
      </div>
    </li>
  )
}
