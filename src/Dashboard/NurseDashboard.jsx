import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import DataNumber from './DataNumber';
import Stats from './Stats';

const NurseDashboard = () => {
  const [handleShowSideBar, setHandleShowSidebar] = useState(false);
  const handleShowSideBarFunction = () => {
    setHandleShowSidebar(!handleShowSideBar);
  };
  return (
    <div className="flex">
      <div
        className={`${
          handleShowSideBar
            ? 'w-[40%]  z-50 bg-white xl:w-[12%] fixed left-0 top-0 h-screen  border border-r-[0.4px] flex justify-center py-[2rem]'
            : 'hidden  z-50 bg-white xl:w-[12%] fixed left-0 top-0 h-screen  border border-r-[0.4px] xl:flex justify-center py-[2rem]'
        }`}
      >
        <Sidebar />
      </div>

      <div className="w-full">
        <Navbar handleShowSideBar={handleShowSideBarFunction} />

        <DataNumber/> 
      </div>
    </div>
  );
};

export default NurseDashboard;
