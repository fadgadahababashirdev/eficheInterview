import React from 'react'
import { IoIosArrowDown } from 'react-icons/io'
import { TbMessage } from 'react-icons/tb'

const Info = () => {
  return (
    <div className='flex   gap-[1.5rem] pr-[4rem] items-center '> 
        {/* message */} 
        <div className='relative h-fit pl-0 flex items-center'>
            <TbMessage className='w-[1.5rem] h-[1.5rem]'/> 
            <div className='w-2 h-2 absolute top-0 right-0 rounded-full bg-red-500'></div>
        </div>
        {/* image */}
        <div className='flex items-center gap-2 '> 
            <img src="../image.png" alt="image not found" className='w-8 h-8 rounded-full'/> 
            <IoIosArrowDown className='w-3 '/>
        </div>
    </div>
  )
}

export default Info