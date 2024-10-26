import React from 'react'
import { IoIosArrowDown } from 'react-icons/io'
import { TbMessage } from 'react-icons/tb'

const Info = () => {
  return (
    <div className='flex gap-[1.5rem] md:pr-[4rem] items-center '> 
        {/* message */} 
        <div className='relative h-fit md:pl-0 flex items-center'>
            <TbMessage className='w-[2rem] h-[2rem] md:w-[1.5rem] md:h-[1.5rem]'/> 
            <div className='w-2 h-2 md:w-2  md:h-2 absolute top-0 right-0 rounded-full bg-red-500'></div>
        </div>
        {/* image */}
        <div className='flex items-center gap-2 '> 
            <img src="../image.png" alt="image not found" className='w-8 h-8 rounded-full'/> 
            <IoIosArrowDown className='h-6 w-6 md:w-3 md:h-3 '/>
        </div>
    </div>
  )
}

export default Info