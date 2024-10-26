import ConsultationChart from '@/components/ConsultationChart';
import { Button } from '@/components/ui/button';
import { TrendingDown, TrendingUp, TrendingUpDown } from 'lucide-react';

import React from 'react';
import { FaArrowLeftLong, FaArrowRightLong } from 'react-icons/fa6';
import { GoPeople } from 'react-icons/go';
import { IoBriefcaseOutline } from 'react-icons/io5';

const Stats = ({ consultation, admission, appoitments }) => {
  return (
    <div className="bg-white rounded-md flex py-2 justify-between px-2  mt-[2rem]">
      <div className="w-full grid grid-cols-2 py-[1rem] ">
        <div className="">
          <div className="w-full h-full  border-r border-b py-[1rem] px-[1rem]">
            <div className="bg-[rgb(248,248,248)] w-[3rem] h-[3rem] flex items-center justify-center rounded-full">
              <GoPeople className="w-5" />
            </div>
            <div className="flex gap-5 items-center  my-4">
              <div className="text-[2rem] para font-semibold">20</div>
              <div className="flex items-center justify-center  gap-2 bg-[#e7f7ef] rounded-xl h-4 p-4">
                <div>
                  <TrendingUp className="w-3 h-10 text-[#27a376]" />
                </div>

                <div className="text-xs text-[#27a376] font-semibold ">
                  <span>+</span>25,5<span>%</span>
                </div>
              </div>
            </div>
            <h1
              className="para text-sm font-medium cursor-pointer"
              onClick={consultation}
            >
              Consultations
            </h1>
          </div>
        </div>
        <div className="w-full  h-full border-b  py-[1rem] px-[1rem]">
          {' '}
          <div className="bg-[rgb(248,248,248)] w-[3rem] h-[3rem] flex items-center justify-center rounded-full">
            <IoBriefcaseOutline className="w-5" />
          </div>
          <div className="flex gap-5 items-center  my-4">
            <div className="text-[2rem] para font-semibold">20</div>
            <div className="flex items-center justify-center  gap-2 bg-[#e7f7ef] rounded-xl h-4 p-4">
              <div>
                <TrendingUp className="w-3 h-10 text-[#27a376]" />
              </div>

              <div className="text-xs text-[#27a376] font-semibold ">
                <span>+</span>25,5<span>%</span>
              </div>
            </div>
          </div>
          <h1
            className="para text-sm font-medium cursor-pointer"
            onClick={admission}
          >
            Admissions
          </h1>
        </div>
        <div className="w-full h-full   border-r  py-[1rem] px-[1rem]">
          {' '}
          <div className="bg-[rgb(248,248,248)] w-[3rem] h-[3rem] flex items-center justify-center rounded-full">
            <FaArrowLeftLong className="w-5" />
          </div>
          <div className="flex gap-5  items-center  my-4">
            <div className="text-[2rem] para font-semibold">20</div>
            <div className="flex items-center justify-center  gap-2 bg-[#e7f7ef] rounded-xl h-4 p-4">
              <div>
                <TrendingUp className="w-3 h-10 text-[#27a376]" />
              </div>

              <div className="text-xs text-[#27a376] font-semibold ">
                <span>+</span>25,5<span>%</span>
              </div>
            </div>
          </div>
          <h1
            className="para text-sm font-medium cursor-pointer"
            onClick={appoitments}
          >
            Appoitments
          </h1>
        </div>
        <div className="w-full h-full   py-[1rem] px-[1rem]">
          {' '}
          <div className="bg-[rgb(248,248,248)] w-[3rem] h-[3rem] flex items-center justify-center rounded-full">
            <FaArrowRightLong className="w-5" />
          </div>
          <div className="flex gap-5 items-center  my-4">
            <div className="text-[2rem] para font-semibold">20</div>
            <div className="flex items-center justify-center  gap-2 bg-[#ffedec] rounded-xl h-4 p-4">
              <div>
                <TrendingDown className="w-3 h-10 text-[#E03137]" />
              </div>

              <div className="text-xs text-[#E03137] font-semibold ">
                <span>+</span>25,5<span>%</span>
              </div>
            </div>
          </div>
          <h1 className="para text-sm font-medium">Referalls</h1>
        </div>
      </div>
      <div className=" w-full">
        <ConsultationChart />
      </div>
    </div>
  );
};

export default Stats;
