import React from 'react'
import Input from '../../UI/Input'

export default function MealItemForm({id}) {
  return (
    <form className='text-right'>
    <Input
      label='Amount'
      input={{
        id: 'amount_' + id,
        type: 'number',
        min: '1',
        max: '5',
        step: '1',
        defaultValue: '1',
      }}
    />
    <button className='cursor-pointer bg-[#8a2b06] border border-[#8a2b06] text-white py-1 px-8 rounded-2xl font-bold hover:bg-[#641e03] hover:border-[#641e03]  active:bg-[#641e03] active:border-[#641e03]' >+ Add</button>
  </form>
  )
}
