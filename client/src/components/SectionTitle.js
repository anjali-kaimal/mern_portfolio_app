import React from 'react'

function SectionTitle({title}) {
  return (
    <div className='flex gap-10 items-center py-10'>
        <h1 className='text-3xl text-sixth'>{title}</h1>
        <div className='w-screen h-[1px] bg-third'>

        </div>
    </div>
  )
}

export default SectionTitle