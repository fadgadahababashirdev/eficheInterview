import React from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import DataNumber from './DataNumber';
import Stats from './Stats';
import NurseT from '@/components/Tables/NurseT';

const NurseTable = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="w-full  ">
        <Navbar />
        <NurseT/>
      </div>
    </div>
  );
};

export default NurseTable;
