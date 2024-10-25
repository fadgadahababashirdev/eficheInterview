import React from 'react';
import MenuDown from './MenuDown';
import Info from './Info';
import { FaTimes } from 'react-icons/fa';
import { Menu } from 'lucide-react';

const Navbar = ({handleShowSideBar}) => {
  return (
    <div className=" px-4 md:px-0 border-b  w-screen md:w-[88%] z-40 fixed top-0  md:left-[12%] h-[6.5rem] flex justify-between items-center">
      <MenuDown />
      <Info />
      <div className="border  relative   border-slate-200 cursor-pointer border-1 rounded-xl flex md:hidden items-center p-5" onClick={handleShowSideBar}>
        {' '}
        <Menu className="w-4 h-4 " />
      </div>
    </div>
  );
};

export default Navbar;
