import { Briefcase, Check, LucideClipboardList } from 'lucide-react';
import React from 'react';
import { FaTimes } from 'react-icons/fa';
import { GoPeople } from 'react-icons/go';
import { IoMdCodeWorking } from 'react-icons/io';
import { IoBagHandleOutline, IoHappyOutline } from 'react-icons/io5'; 
import { LiaTimesSolid } from "react-icons/lia";

const DataNumberTwo = () => {
  return (
    <div className=" w-full bg-white rounded-md my-[2rem] p-4 pb-[2rem]">
      <h1 className="para text-[1.2rem] font-medium">Inpatient</h1>
      <div className="py-[.6rem]"></div>
      <div className="flex justify-between mt-[1rem] ">
        <div className="w-full h-full border-r-[1.6px]  border-[#F1F2F4]">
          <div className="flex gap-4 items-center">
            <div className="bg-[#F8F8F8] p-2 w-[3rem] h-[3rem] flex items-center justify-center rounded-full">
              <Check className="w-5" />
            </div>
            <h1 className="para text-[14px] font-medium">
              Available <br />
              beds
            </h1>
          </div>
          <div className="text-[2rem] para font-semibold mt-[1.2rem]  mb-[-.8rem]">
            32
          </div>
        </div>
        <div className="w-full h-full border-r-[1.6px]  border-[#F1F2F4] pl-[3rem]  ">
          <div className="flex gap-4 items-center">
            <div className="bg-[#F8F8F8] p-2 w-[3rem] h-[3rem] flex items-center justify-center rounded-full">
              <LiaTimesSolid className="w-5" />
            </div>
            <h1 className="para text-[14px] font-medium">
              Occupied <br />
              beds
            </h1>
          </div>
          <div className="text-[2rem] para font-semibold mt-[1.2rem]  mb-[-.8rem]">
            07
          </div>
        </div>
        <div className="w-full h-full border-r-[1.6px]  border-[#F1F2F4] pl-[3rem]  ">
          <div className="flex gap-4 items-center">
            <div className="bg-[#F8F8F8] p-2 w-[3rem] h-[3rem] flex items-center justify-center rounded-full">
              <LucideClipboardList className="w-5" />
            </div>
            <h1 className="para text-[14px] font-medium">
              Transfers <br />
              Work list
            </h1>
          </div>
          <div className="text-[2rem] para font-semibold mt-[1.2rem]  mb-[-.8rem]">
            11
          </div>
        </div>
        <div className="w-full  h-full pl-[3rem] ">
          <div className="flex gap-4 items-center">
            <div className="bg-[#F8F8F8] p-2 w-[3rem] h-[3rem] flex items-center justify-center rounded-full">
              <IoHappyOutline className="w-5" />
            </div>
            <h1 className="para text-[14px] font-medium">
              Discharge <br />
              List
            </h1>
          </div>
          <div className="text-[2rem] para font-semibold mt-[1.2rem]  mb-[-.8rem]">
            32
          </div>
        </div>
      </div> 
    
    </div>
  );
};

export default DataNumberTwo;
