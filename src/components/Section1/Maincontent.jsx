import React from 'react'
import Leftcontent from './Leftcontent'
import Rightcontent from './Rightcontent'

const Maincontent = (props) => {
  return (
    <div className='h-[90vh] flex flex-row gap-7 px-18  pb-16 pt-6 '>
        <Leftcontent/>
        <Rightcontent users={props.users}/>
      
    </div>
  )
}

export default Maincontent
