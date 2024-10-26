import React from 'react';
import NurseDashboard from './NurseDashboard';

const Dashboard = () => {
  return (
    <div className="relative">
      <div className="z-20">
        <NurseDashboard />
      </div>
      <div className="w-full  z-[100] bg-red-400">hello world</div>
    </div>
  );
};

export default Dashboard;
