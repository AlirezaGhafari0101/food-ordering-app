import React from 'react'

export default function Input({input, label}) {
  return (
    <div className='flex items-center mb-1'>
    <label className='font-bold mr-4' htmlFor={input.id}>{label}</label>
    <input {...input} className='w-12 rounded-md border border-[#ccc] pl-2'/>
  </div>
  )
}
