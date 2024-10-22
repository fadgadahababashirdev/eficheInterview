import React from 'react'
import { FaArrowRight, FaLongArrowAltRight } from 'react-icons/fa'
import { FaArrowRightLong } from 'react-icons/fa6'

const DataNumber = () => {
  return (
    <div className='bg-[#f1f2f4] absolute left-[11.5rem] w-[85.3%] h-full pl-[4.5rem] p-5 mt-[6rem]'>
        {/* greetings */}
        <section className=''>
            <h1 className='text-[1.5rem] font-semibold'>Hi, Jack</h1> 
            <p className='text-[#687588] para text-sm  mt-[.4rem]'>This is your perfomance report so far</p>
        </section> 
        <section className='bg-white p-5 rounded-lg my-[1rem]'>
            <h1 className='para text-sm  fo'>Current consultations</h1>
            <h1 className='font-semibold text-[1.9rem] para my-[1rem]'>07</h1>
            <div className='text-xs para flex gap-4 items-center'>
                <div className='text-[#27a376]'>Go to my consultations</div> 
                <div ><FaArrowRightLong  className='text-[#27a376]' /></div>
            </div>
        </section>
    </div>
  )
}

export default DataNumber