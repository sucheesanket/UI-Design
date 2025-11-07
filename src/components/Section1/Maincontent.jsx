import React from 'react'
import Leftcontent from './Leftcontent'
import Rightcontent from './Rightcontent'

const Maincontent = () => {
  return (
    <div className='h-[90vh] flex flex-row gap-7 px-18  pb-16 pt-6 '>
        <Leftcontent/>
        <Rightcontent/>
      
    </div>
  )
}

export default Maincontent
