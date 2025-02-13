import React from 'react'

export const Filter = () => {
  return (
    <div className = ' z-[300] absolute right-0 flex gap-x-10 p-4'>
      <button className = 'border-green-400 border-2 p-2 rounded-full w-[100px] text-center bg-offwhite drop-shadow-2xl'>Type</button>
      <button className = 'border-green-400 border-2 p-2 rounded-full w-[100px] text-center bg-offwhite'>Date</button>
    </div>
  )
}
