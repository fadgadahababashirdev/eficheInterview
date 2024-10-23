import ConsultationChart from '@/components/ConsultationChart';
import { Button } from '@/components/ui/button';
import {
  Briefcase,
  TrendingDown,
  TrendingUp,
  TrendingUpDown,
} from 'lucide-react';
import React from 'react';
import { FaArrowLeftLong, FaArrowRightLong } from 'react-icons/fa6';
import { GoPeople } from 'react-icons/go';

const Stats = () => {
  return (
    <div className=" bg-white rounded-md flex py-2 justify-between h-[26rem] mt-[2rem]">
      <div className="w-full p-5">
        <div className="w-full flex">
          <div className="w-[15rem] border-r border-1 border-[#F1F2F4] border-b py-4">
            <div className="bg-[#F8F8F8] p-2 w-[3rem] h-[3rem] flex items-center justify-center rounded-full">
              <GoPeople className="w-3" />
            </div>

            <div className="flex gap-5 items-center my-4">
              <div className="text-[2rem] para font-semibold">27</div>
              <div className="flex items-center justify-center  gap-2 bg-[#e7f7ef] rounded-xl h-4 p-4">
                <div>
                  <TrendingUp className="w-3 h-10 text-[#27a376]" />
                </div>

                <div className="text-xs text-[#27a376] font-semibold ">
                  <span>+</span>25,5<span>%</span>
                </div>
              </div>
            </div>
            <h1 className="para text-[14px] font-medium">Consultations</h1>
          </div>

          <div className="w-[15rem]  pl-6  border-b border-1 border-[#F1F2F4] py-4">
            <div className="bg-[#F8F8F8] p-2 w-[3rem] h-[3rem] flex items-center justify-center rounded-full">
              <Briefcase className="w-3" />
            </div>

            <div className="flex gap-5 items-center my-4">
              <div className="text-[2rem] para font-semibold">25</div>
              <div className="flex items-center justify-center  gap-2 bg-[#e7f7ef] rounded-xl h-4 p-4">
                <div>
                  <TrendingUp className="w-3 h-10 text-[#27a376]" />
                </div>

                <div className="text-xs text-[#27a376] font-semibold ">
                  <span>+</span>4,10<span>%</span>
                </div>
              </div>
            </div>
            <h1 className="para text-[14px] font-medium">Admissions</h1>
          </div>
        </div>

        <div className="w-full flex">
          <div className="w-[15rem] border-r border-1 border-[#F1F2F4] py-4">
            <div className="bg-[rgb(248,248,248)] p-2 w-[3rem] h-[3rem] flex items-center justify-center rounded-full">
              <FaArrowLeftLong className="w-3" />
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
            <h1 className="para text-[14px] font-medium">Consultations</h1>
          </div>

          <div className="w-[15rem]  pl-6   py-4">
            <div className="bg-[#F8F8F8] p-2 w-[3rem] h-[3rem] flex items-center justify-center rounded-full">
              <FaArrowRightLong className="w-3" />
            </div>

            <div className="flex gap-5 items-center my-4">
              <div className="text-[2rem] para font-semibold">07</div>
              <div className="flex items-center justify-center  gap-2 bg-[#ffedec] rounded-xl h-4 p-4">
                <div>
                  <TrendingDown className="w-4 h-10 text-[#E03137]" />
                </div>

                <div className="text-xs text-[#E03137] font-semibold ">
                  <span>+</span>4,10<span>%</span>
                </div>
              </div>
            </div>
            <h1 className="para text-[14px] font-medium">Referrals</h1>
          </div>
        </div>
      </div>
      <div className="bg-blue-500 w-full">
        <ConsultationChart />
      </div>
    </div>
  );
};

export default Stats;
