import React from 'react'

const Cardcontent = ({user,index}) => {
  return (
    <div className='absolute p-5 flex flex-col gap-100 bottom-0 left-0 right-0'>
      <h3 className='h-11 w-11 rounded-3xl bg-white flex items-center justify-center text-2xl'>{index+1}</h3>
      <div>
        <p className='pb-8 text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, quaerat libero consequatur eligendi ipsum accusamus?</p>
        <div className='flex items-center justify-between text-lg text-white'>
        <button className='px-3.5 py-0.5 capitalize rounded-2xl ' style={{backgroundColor:user.color}}>{user.tag}</button>
        <button><i className="h-7 w-7 p-3 rounded-2xl bg-blue-500 flex items-center justify-center ri-arrow-right-line"></i></button>
        </div>
      </div>
    </div>
  )
}

export default Cardcontent
