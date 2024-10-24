import { Hand } from 'lucide-react';
import React from 'react';
import { FaArrowRight, FaLongArrowAltRight } from 'react-icons/fa';
import { FaArrowRightLong } from 'react-icons/fa6';
import Stats from '@/Dashboard/Stats';
import DataNumberTwo from '@/Dashboard/DataNumberTwo';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import SearchAndFilter from './SearchAndFilter';

import PatientTable from './PatientTable';

const NurseT = () => {
  return (
    <div className="bg-[#f1f2f4] absolute left-[11.5rem] w-[85.3%]  pl-[4.5rem] p-5 mt-[6rem] ">
    <section className='bg-white rounded-xl px-[2rem] py-[2rem]'>
     <Navbar/> 
     <SearchAndFilter/>
     <PatientTable/>
    </section>
    </div>
  );
};

export default NurseT;
