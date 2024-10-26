import { ClipboardList, Users2, Calendar } from 'lucide-react';
import React, { useState } from 'react';
import { FaFile, FaTimes } from 'react-icons/fa';
import { GoPersonAdd } from 'react-icons/go';
import { IoGridOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  <div className="relative inline-block">
    <div className="bg-gray-900 text-white px-6 py-2 rounded-2xl shadow-lg">
      <span className="font-sans text-lg">My patients</span>
    </div>

    <div className="absolute -bottom-2 left-3 w-2 h-2 transform rotate-45 bg-gray-900"></div>
  </div>;
  return (
    <>
      <div className="">
        <div className="">
          <Link to="/dashboard">
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
          <Link to="/dashboard">
            <div className="flex justify-center bg-[#27a376] p-5 rounded-xl mt-[2rem]">
              <IoGridOutline className="text-white text-[1rem]" />
            </div>
          </Link>
          {/* person */}

          <div className="flex justify-center items-center mt-[1rem] ">
            <div className="relative group">
              <div className=" opacity-0 group-hover:opacity-100 text-xs p-1 py-2 ml-[2rem] mb-[.4rem] bg-black rounded-md px-2 para  text-white">
                <div>My patients</div>
                <div className="w-3 h-3 bg-black ml-3 rotate-45 mb-[-.7rem]"></div>
              </div>
              <div className="flex justify-center">
                <GoPersonAdd className="text-[#a0aec0] cursor-pointer text-[1rem]" />
              </div>
            </div>
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
