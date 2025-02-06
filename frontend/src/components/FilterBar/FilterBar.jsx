import React from 'react'

export const Filter = () => {
  return (
    <div className = 'w-1/5 z-[300] absolute right-0 flex justify-between p-4'>
      <button className = 'border-green-400 border-2 p-2 rounded-full w-[100px] text-center bg-offwhite drop-shadow-2xl'>Type</button>
      <button className = 'border-green-400 border-2 p-2 rounded-full w-[100px] text-center bg-offwhite'>Date</button>
    </div>
  )
}
