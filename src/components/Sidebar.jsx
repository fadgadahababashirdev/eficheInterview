
import { ClipboardList, Users2 ,Calendar } from 'lucide-react'
import React from 'react'
import { FaFile } from 'react-icons/fa'
import { GoPersonAdd } from 'react-icons/go'
import { IoGridOutline } from 'react-icons/io5'



const Sidebar = () => {
  return (
    <div className='w-[11.5rem] h-screen  border border-r-[0.4px] flex justify-center py-[2rem]'> 
        {/* file and heading  div*/}
      <div>
      <div className='flex justify-between h-fit gap-2'>
            <div className='flex  items-center'><FaFile className='text-[1.3rem]  text-[#409C7C]'/></div>
            <div><h1 className=' text-[1.6rem] font-bold'>eFiche</h1></div>
        </div> 
         {/* menu icon */}
        <div className='flex justify-center bg-[#409C7C] p-5 rounded-xl my-[2rem]'><IoGridOutline className='text-white text-[1.2rem]'/></div>
        {/* person */} 
        <div className='flex justify-center my-[2rem]'><GoPersonAdd className='text-gray-400 text-[1.2rem]'/></div> 
        {/* calender */}
        <div className='flex justify-center my-[2rem]'><Calendar className='text-gray-400 text-[1.2rem]'/></div>
         {/*clipboard list */}
        <div className='flex justify-center my-[2rem]'><ClipboardList className='text-gray-400 text-[1.2rem]'/></div> 
        {/*  */}
        <div className='flex justify-center my-[2rem]'><Users2 className='text-gray-400 text-[1.2rem]'/></div> 
        
      </div>
       
       
        
    </div>
  )
}

export default Sidebar