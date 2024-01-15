import React from 'react'

function Loader() {
  return (
    <div className='h-screen flex items-center justify-center fixed inset-0 bg-primary z-[10000]'>
        <div className='flex gap-5 text-5xl font-semibold'>
            <h1 className='text-sixth a'>A</h1>
            <h1 className='text-fourth b'>B</h1>
            <h1 className='text-fifth k'>K</h1>
        </div>
    </div>
  )
}

export default Loader