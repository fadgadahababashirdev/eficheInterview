import { SearchIcon } from 'lucide-react';
import React from 'react';
import { GoSearch } from 'react-icons/go';
import { IoIosArrowDown } from 'react-icons/io';

const SearchAndFilter = () => {
  return (
    <div className="flex justify-between w-full my-6">
      <div className="w-[70%] p-4 border flex justify-between items-center border-[#CBD5E0] rounded-lg">
        <div className="w-[70%]">
          <input
            type="text"
            placeholder="Search patient"
            className="outline-none w-full"
          />
        </div>
        <div>
          <GoSearch className="w-6 h-6" />
        </div>
      </div>
      <div className="border border-[#CBD5E0] rounded-lg w-[28%] relative flex items-center pl-4">
        <h1 className="para text-xs whitespace-nowrap ">
          Visit Department:
        </h1>
        <div className="relative w-[50%] mb-[3px]">
          <select
            name=""
            id="select"
            className="w-full outline-none appearance-none cursor-pointer  text-xs font-semibold text-[#27a376]"
          >
            <option value="" className="">
              All
            </option>
            <option value="">Nurse</option>
          </select>
          <IoIosArrowDown className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none" />
        </div>
      </div>
    </div>
  );
};

export default SearchAndFilter;
