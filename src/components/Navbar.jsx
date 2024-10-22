import React from 'react'
import MenuDown from './MenuDown'
import Info from './Info'


const Navbar = () => {
  return (
    <div className='bg-white border-b  w-[86%] z-50 fixed top-0 left-[11.5rem] h-[6.5rem] flex justify-between items-center'>
     <MenuDown/> 
     <Info/>
    </div>
  )
}

export default Navbar