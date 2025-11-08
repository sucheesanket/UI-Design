import React from 'react'
import Cards from './Cards'

const Rightcontent = (props) => {
  return (
    <div className='flex gap-3.5 h-full w-3/4'>
      {props.users.map((user,index)=>(
      
      <Cards key={index} user={user} index={index}/>
      ))}
      
      
      
    </div>
  )
}

export default Rightcontent
