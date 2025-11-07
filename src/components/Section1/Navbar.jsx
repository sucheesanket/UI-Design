import React from 'react'

const navbar = () => {
  return (
    <div>
      <nav className=' flex items-center justify-between px-15 py-5'>
        <div className='uppercase font-normal px-3 py-2 rounded-xl text-lg bg-black text-white'>target audience</div>
        <div className='flex gap-5 text-black uppercase font-medium text-lg'>
            <p>digital</p>
            <p>banking</p>
            <p>platform</p>
        </div>
      </nav>
    </div>
  )
}

export default navbar
