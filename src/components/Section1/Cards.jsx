import React from 'react'
import Cardcontent from './Cardcontent'

const Cards = ({user,index}) => {
  return (
    <div className='h-full w-1/3 bg-blue-100 relative overflow-hidden rounded-3xl'>
      <img className='h-full w-full object-cover object-center' src={user.img} alt="" />
      <Cardcontent user={user} index={index}/>
    </div>
  )
}

export default Cards
