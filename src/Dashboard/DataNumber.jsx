import { Hand } from 'lucide-react';
import React from 'react';
import { FaArrowRight, FaLongArrowAltRight } from 'react-icons/fa';
import { FaArrowRightLong } from 'react-icons/fa6';
import Stats from './Stats';
import DataNumberTwo from './DataNumberTwo';
import { Link } from 'react-router-dom';

const DataNumber = () => {
  return (
    <div className="bg-[#f1f2f4] md:w-screen  absolute xl:left-[12%] xl:w-[88%]  xl:px-[4rem] p-4 xl:p-5 mt-[6rem]">
      {/* greetings */}
      <section className="">
        <h1 className="text-[1.5rem] font-semibold flex gap-2">
          Hi, Jack{' '}
          <span className="flex items-center">
            <img src="../hand.svg" className="w-6 h-8" />
          </span>
        </h1>
        <p className="text-[#687588] para text-sm  mt-[.4rem]">
          This is your perfomance report so far
        </p>
      </section>

      <section className="bg-white p-5 rounded-lg my-[1rem] flex justify-between">
       <Link to="/Report">
        <div>
          <h1 className="para text-sm  font-medium">Current consultations</h1>
          <h1 className="font-semibold text-[1.9rem] para my-[1rem]">07</h1>
          <div className="text-xs  flex gap-4 items-center">
            <div className="text-[#27a376] cursor-pointer">
              Go to my consultations
            </div>
            <div>
              <FaArrowRightLong className="text-[#27a376] cursor-pointer" />
            </div>
          </div>
        </div>
       </Link>


        <div className="flex justify-between">
          <div>
            <h1 className="para text-sm font-medium">Current admissions</h1>
            <h1 className="font-semibold text-[1.9rem] para my-[1rem]">17</h1>
            <div className="text-xs  flex gap-4 items-center">
              <div className="text-[#27a376] cursor-pointer">
                Go to my admissions
              </div>
              <div>
                <FaArrowRightLong className="text-[#27a376] cursor-pointer" />
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <span className="w-[.1px] h-[6.5rem] bg-[#F1F2F4] mr-[-7rem]"></span>
          </div>
        </div>
        <div className="flex justify-between">
          <div>
            <h1 className="para text-sm  font-medium">Current appoitments</h1>
            <h1 className="font-semibold text-[1.9rem] para my-[1rem]">21</h1>
            <div className="text-xs para flex gap-4 items-center">
              <div className="text-[#27a376] cursor-pointer">
                Go to my appoitments
              </div>
              <div>
                <FaArrowRightLong className="text-[#27a376] cursor-pointer" />
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <span className="w-[.1px] h-[6.5rem] bg-[#F1F2F4] mr-[-7rem]"></span>
          </div>
        </div>
        <div>
          <h1 className="para text-sm  font-medium">Current emergency PT</h1>
          <h1 className="font-semibold text-[1.9rem] para my-[1rem] ">500</h1>
          <div className="text-xs para flex gap-4 items-center">
            <div className="text-[#27a376] cursor-pointer">
              Go to my consultations
            </div>
            <div>
              <FaArrowRightLong className="text-[#27a376] cursor-pointer" />
            </div>
          </div>
        </div>
      </section>
      {/* stats and chart */}
      <section>
        
          {' '}
          <Stats /> 
         
       
      </section> 
      <section>
       <DataNumberTwo/>
      </section>
    </div>
  );
};

export default DataNumber;
