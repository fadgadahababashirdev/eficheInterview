import { Check } from 'lucide-react';
import React, { useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';

const MenuDown = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const handleOpenMenu = () => {
    setOpenMenu(!openMenu);
  };
  return (
    <div className="border  relative md:border-l-0   border-slate-200 cursor-pointer border-1 rounded-r-xl flex items-center p-5" onClick={handleOpenMenu}>
      <IoIosArrowDown className="w-4 h-4 " />
      <div className={`bg-white  p-2 w-[11.5rem] h-[28rem] absolute  mt-[35rem]  md:mt-[32rem] md:left-[-8rem] rounded-lg transform transition-all duration-300 ease-in-out ${
        openMenu ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
      }`}>
        {/* Nurse */}
        <div className="bg-[#f8f8f8] p-4 rounded-xl text-center flex justify-between">
          <h1 className="para rob ">Nurse</h1>
          <div>
            <Check className="text-[#27a376]" />
          </div>
        </div>

        {[
          'Facility admin',
          'Receptionist',
          'Lab technician',
          'Pharmacist',
          'Cashier',
          'Scientist',
        ].map((title) => (
          <div className="pl-1 py-4 rounded-xl text-center flex " key={title}>
            <h1 className="para rob ">{title}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuDown;