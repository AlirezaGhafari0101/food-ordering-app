import React from 'react'

export default function Card({children}) {
  return (
    <div className='p-8 shadow-header rounded-[14px] bg-white'>{children}</div>
  )
}
