import React from 'react';
import MenuDown from './MenuDown';
import Info from './Info';
import { FaTimes } from 'react-icons/fa';
import { Menu } from 'lucide-react';

const Navbar = ({handleShowSideBar}) => {
  return (
    <div className=" px-4 xl:px-0 border-b bg-white w-screen xl:w-[88%] z-40 xl:z-50 fixed top-0  xl:left-[12%] h-[6.5rem] flex justify-between items-center">
     <div className='xl:ml-[3.5rem]'><MenuDown /></div>
   
      <div className='flex gap-4'>
        {' '}
        <Info /> 
        <div className="border  relative   border-slate-200 cursor-pointer border-1 rounded-xl flex xl:hidden items-center p-5" onClick={handleShowSideBar}> <Menu className="w-4 h-4 " /></div>
       
      </div>
    </div>
  );
};

export default Navbar;
