import React from 'react';
import { IoIosArrowBack } from 'react-icons/io';
import { PiLessThanBold, PiLessThanLight } from 'react-icons/pi';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="flex justify-between relative">
      <div className=''>
        <div className="flex gap-4 items-center">
          <div>
          <Link to="/Nurse"><IoIosArrowBack className="w-5 h-5 text-[#a0aec0] " /></Link>
          </div>
          <div className="">
            <h1 className="text-[1.4rem] mt-2 font-semibold para">
              Consultations (7)
            </h1>
          </div>
        </div>
        <div className="ml-[2.3rem] mt-3 para text-[#687588] text-sm">
          <p>Manage your consultations</p>
        </div>
      </div>
      <div className='w-[60%]'>
        <ul className="flex gap-8 items-center h-full para justify-end">
          <li className='border-b-2 pb-1 border-[#27A376]  text-[#27A376] font-medium'><span className='px-[.7rem]'>All pending</span></li>
          <li className='pb-1 '>Today</li>
          <li className='pb-1'>This Week</li>
          <li className='pb-1'>This Month</li>
        </ul> 
        <hr className='h-2 w-full'/>
      </div>
    </div>
  );
};

export default Navbar;
