import { LucideLogOut } from 'lucide-react';
import React, { useState, useEffect } from 'react';

import { GoPeople } from 'react-icons/go';
import { IoPersonOutline } from 'react-icons/io5';
import { LiaTimesSolid } from 'react-icons/lia';

const AdmissionsCard = ({ admission }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
      <div
        className={` transform transition-all duration-300 ease-in-out ${
          mounted
            ? '  translate-y-0 opacity-100'
            : ' translate-y-full opacity-0'
        }`}
      >
        <div className="bg-white p-4 border-red-300 rounded-lg w-full md:w-[40rem]">
          <div className="flex justify-between items-center mb-4">
            <div>
              <h1 className="text-black">Admissions</h1>
            </div>
            <div>
              <LiaTimesSolid
                className="text-black cursor-pointer"
                onClick={admission}
              />
            </div>
          </div>
          <div>
            <div className="flex gap-4 justify-between items-center ">
              <div className="bg-[#f0fffa] p-5 rounded-lg  w-full">
                <div className="bg-white rounded-full border-[1.5px] border-[#e7f7ef] w-[2rem] h-[2rem] flex justify-center items-center p-2">
                  <IoPersonOutline className="text-[#27a376]" />
                </div>
                <h1 className="text-[#687588] text-[.9rem] my-4">
                  Current Admission{' '}
                </h1>
                <h1 className="para text-black">10</h1>
              </div>
              <div className="bg-[#f0fffa] p-5 rounded-lg  w-full">
                <div className="bg-white rounded-full border-[1.5px] border-[#e7f7ef] w-[2rem] h-[2rem] flex justify-center items-center p-2">
                  <LucideLogOut className="text-[#27a376]" />
                </div>
                <h1 className="text-[#687588] text-[.9rem] my-4">Discharge</h1>
                <h1 className="para text-black">05</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdmissionsCard;
