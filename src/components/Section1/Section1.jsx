import React from 'react'
import Navbar from './Navbar.jsx'
import Maincontent from './Maincontent.jsx'


const Section1 = (props) => {
  return (
    <div className='h-screen w-full py-10 '>

      < Navbar/>
      < Maincontent users={props.users}/>
    </div>
    
    
  )
}

export default Section1
