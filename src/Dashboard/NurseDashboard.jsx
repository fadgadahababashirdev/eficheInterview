import React from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import DataNumber from './DataNumber';
import Stats from './Stats';

const NurseDashboard = () => {
  return (
    <div className="flex">
      <div className="w-[12%] fixed left-0 top-0 h-screen  border border-r-[0.4px] flex justify-center py-[2rem]">
        <Sidebar />
      </div>

      <div className="w-full">
        <Navbar />

        <DataNumber/> 
      </div>
    </div>
  );
};

export default NurseDashboard;
