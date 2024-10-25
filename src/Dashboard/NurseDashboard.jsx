import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import DataNumber from './DataNumber';
import Stats from './Stats';

const NurseDashboard = () => { 
  const [showSideBar, setShowSideBar] = useState(true); 
  const handleShowSideBar = ()=>{
    setShowSideBar(!showSideBar)
  }
  return (
    <div className="flex">
     {showSideBar &&  <div className="w-[40%] px-5  md:px-0   md:w-[12%] fixed left-0 top-0 h-screen  border border-r-[0.4px] md:flex justify-center md:py-[2rem]">
        <Sidebar handleShowSideBar={handleShowSideBar}/>
      </div>}

      <div className="w-full hidden  md:visible">
      <Navbar />

        <DataNumber/> 
      </div>
    </div>
  );
};

export default NurseDashboard;
