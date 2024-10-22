import React from 'react'
import MenuDown from './MenuDown'
import Info from './Info'


const Navbar = () => {
  return (
    <div className='bg-white border-b border- w-full h-[6.5rem] flex justify-between items-center'>
     <MenuDown/> 
     <Info/>
    </div>
  )
}

export default Navbar