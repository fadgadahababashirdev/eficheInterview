import { ClipboardList, Users2, Calendar } from 'lucide-react';
import React, { useState } from 'react';
import { FaFile, FaTimes } from 'react-icons/fa';
import { GoPersonAdd } from 'react-icons/go';
import { IoGridOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';

const Sidebar = ({handleShowSideBar}) => {
 
  return (
    <>
    <div className="">
        <div className="flex items-center my-2 md:my-0  md:hidden border w-10 h-10 justify-center border-slate-200 rounded-md p-2" onClick={handleShowSideBar}>
          {' '}
          <FaTimes className="w-4 h-4" />
        </div>
        
        <div className=''>
          <Link to="/Nurse">
            <div className="flex justify-between h-fit gap-2">
              <div className="flex  items-center">
                <FaFile className="text-[1.3rem]  text-[#27a376]" />
              </div>
              <div>
                <h1 className=" text-[1.6rem] font-bold">eFiche</h1>
              </div>
            </div>
          </Link>
          {/* menu icon */}
          <Link to="/Nurse">
            <div className="flex justify-center bg-[#27a376] p-5 rounded-xl my-[2rem]">
              <IoGridOutline className="text-white text-[1rem]" />
            </div>
          </Link>
          {/* person */}
          <div className="flex justify-center my-[2rem]">
            <GoPersonAdd className="text-[#a0aec0] text-[1rem]" />
          </div>
          {/* calender */}
          <div className="flex justify-center my-[2rem]">
            <Calendar className="text-[#a0aec0] text-[1rem]" />
          </div>
          {/*clipboard list */}
          <div className="flex justify-center my-[2rem]">
            <ClipboardList className="text-[#a0aec0] text-[1rem]" />
          </div>
          {/*  */}
          <div className="flex justify-center my-[2rem]">
            <Users2 className="text-[#a0aec0] text-[1rem]" />
          </div>
        </div>
      </div>
     
    </>
  );
};

export default Sidebar;
