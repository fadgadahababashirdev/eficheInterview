import React from 'react';
import { AlignJustify, FileText, Calendar, Link } from 'lucide-react';
import { ChevronsUpDown } from 'lucide-react';
import { LucideChevronsUpDown } from 'lucide-react';
import { ChevronLeft, ChevronRight, ChevronDown } from 'lucide-react';
const PatientTable = () => {
  const patients = [
    {
      id: '01',
      image: 'GA',
      name: 'Jack Maa',
      identifier: 'GIKUN37353',
      gender: 'Male',
      date: '2024/08/06 09:32:21',
      address: 'Kicukiro',
      phone: '0789650093',
    },
    {
      id: '02',
      image: 'GA',
      name: 'Manzi dider',
      identifier: 'GIKUN37353',
      gender: 'Male',
      date: '2024/08/06 09:32:21',
      address: 'Kicukiro',
      phone: '0789650093',
    },
    {
      id: '03',
      image: 'GA',
      name: 'Gisa Arlette',
      identifier: 'GIKUN37353',
      gender: 'Female',
      date: '2024/08/06 09:32:21',
      address: 'Gasabo',
      phone: '0789650093',
    },
    {
      id: '04',
      image: 'GA',
      name: 'Abraham Kamau',
      identifier: 'GIKUN37353',
      gender: 'Male',
      date: '2024/08/06 09:32:21',
      address: 'Nyarugenge',
      phone: '0789650093',
    },
    {
      id: '05',
      image: 'GA',
      name: 'Abayizera Bertrand',
      identifier: 'GIKUN37353',
      gender: 'Male',
      date: '2024/08/06 09:32:21',
      address: 'Kicukiro',
      phone: '0789650093',
    },
    {
      id: '06',
      image: 'GA',
      name: 'Abayo Yvette',
      identifier: 'GIKUN37353',
      gender: 'Female',
      date: '2024/08/06 09:32:21',
      address: 'Kicukiro',
      phone: '0789650093',
    },
    {
      id: '07',
      image: 'GA',
      name: 'James Wilson',
      identifier: 'GIKUN37353',
      gender: 'Male',
      date: '2024/08/06 09:32:21',
      address: 'Gasabo',
      phone: '0789650093',
    },
    {
      id: '08',
      image: 'GA',
      name: 'Sarah Johnson',
      identifier: 'GIKUN37353',
      gender: 'Female',
      date: '2024/08/06 09:32:21',
      address: 'Nyarugenge',
      phone: '0789650093',
    },
    {
      id: '09',
      image: 'GA',
      name: 'Michael Chen',
      identifier: 'GIKUN37353',
      gender: 'Male',
      date: '2024/08/06 09:32:21',
      address: 'Kicukiro',
      phone: '0789650093',
    },
    {
      id: '10',
      image: 'GA',
      name: 'Emily Davis',
      identifier: 'GIKUN37353',
      gender: 'Female',
      date: '2024/08/06 09:32:21',
      address: 'Gasabo',
      phone: '0789650093',
    }
    // Add other patients...
  ];

  const ActionButtons = () => (
    <div className="flex gap-2">
      <button className="p-2 bg-emerald-500 rounded-lg hover:bg-emerald-600">
        <AlignJustify className="w-4 h-4 text-white" />
      </button>
      <button className="p-2 bg-yellow-400 rounded-lg hover:bg-yellow-500">
        <FileText className="w-4 h-4 text-white" />
      </button>
      <button className="p-2 bg-orange-400 rounded-lg hover:bg-orange-500">
        <Calendar className="w-4 h-4 text-white" />
      </button>
      <button className="p-2 bg-blue-500 rounded-lg hover:bg-blue-600">
        <Link className="w-4 h-4 text-white" />
      </button>
    </div>
  );

  return (
    <div className="w-full overflow-x-auto">
      <table className="w-full min-w-full">
        <thead className="bg-gray-50">
          <tr className="relative">
            <th className="  p-4 para text-left text-gray-500 font-medium text-xs">
              <div className="flex items-center gap-1">
                <span>#</span>{' '}
                <ChevronsUpDown className="w-4 h-4 text-gray-300" />
              </div>
            </th>
            <th className=" p-4 para text-left text-gray-500 font-medium text-xs">
              <div className="flex items-center justify-between">
                <span>Patient</span>{' '}
                <ChevronsUpDown className="w-4 h-4 text-gray-300" />
              </div>
            </th>
            <th className=" p-4 para text-left text-gray-500 font-medium text-xs">
              <div className="flex items-center justify-between gap-1">
                <span>Identifier</span>{' '}
                <ChevronsUpDown className="w-4 h-4 text-gray-300" />
              </div>
            </th>
            <th className=" p-4 para text-left text-gray-500 font-medium text-xs">
              <div className="flex items-center justify-between gap-1">
                <span>Gender</span>{' '}
                <ChevronsUpDown className="w-4 h-4 text-gray-300" />
              </div>
            </th>
            <th className=" p-4 para text-left text-gray-500 font-medium text-xs">
              <div className="flex items-center justify-between gap-1">
                <span> Date</span>{' '}
                <ChevronsUpDown className="w-4 h-4 text-gray-300" />
              </div>
            </th>
            <th className="  p-4 para text-left text-gray-500 font-medium text-xs">
              <div className="flex items-center justify-between gap-1">
                <span>Address</span>{' '}
                <ChevronsUpDown className="w-4 h-4 text-gray-300" />
              </div>
            </th>
            <th className=" p-4 para text-left text-gray-500 font-medium text-xs">
              <div className="flex items-center justify-between gap-1">
                <span> Phone </span>{' '}
                <ChevronsUpDown className="w-4 h-4 text-gray-300" />
              </div>
            </th>
            <th className="absolute right-4 p-4 para text-left text-gray-500 font-medium text-xs">
              <div className="flex items-center justify-between gap-1">
                <span> Action Patient</span>
              </div>
            </th>
          </tr>
        </thead>
        <tbody className="bg-white">
          {patients.map((patient) => (
            <tr key={patient.id} className="border-t">
              <td className="p-4 text-xs">{patient.id}</td>
              <td className="p-4">
                <div className="flex items-center gap-2">
                  {patient.image === 'GA' ? (
                    <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-xs">
                      GA
                    </div>
                  ) : (
                    <img
                      src="/api/placeholder/32/32"
                      alt={patient.name}
                      className="w-8 h-8 rounded-full"
                    />
                  )}
                  <span className="text-xs">{patient.name}</span>
                </div>
              </td>
              <td className="p-4 text-xs">{patient.identifier}</td>
              <td className="p-4 text-xs">{patient.gender}</td>
              <td className="p-4 text-xs">
                <div className="flex flex-col">
                  <span className="text-xs">2024/08/06</span>
                  <span className="text-xs">09:32:21</span>
                </div>
              </td>
              <td className="p-4 text-xs">{patient.address}</td>
              <td className="p-4 text-xs">{patient.phone}</td>
              <td className="p-4 text-xs">
                <ActionButtons />
              </td>
            </tr>
          ))}
        </tbody> 
        
      </table> 
      <div className="flex items-center justify-between px-4 pt-[2rem]  mt-[1rem] border-t">
  {/* Left side pagination */}
  <div className="flex items-center gap-2">
    <button className="p-2 border rounded-lg  border-[#f5f5f7] hover:bg-gray-50">
      <ChevronLeft className="w-4 h-4 text-gray-500" />
    </button>
    <button className="px-3 py-2 bg-[#f5f5f7] hover:bg-gray-50 text-xs rounded-lg ">1</button>
    <button className="px-3 py-1 hover:bg-gray-50 text-xs rounded">2</button>
    <button className="px-3 py-1 hover:bg-gray-50 text-xs rounded">3</button>
    <span className="px-3 py-1">...</span>
    <button className="px-3 py-1 hover:bg-gray-50 text-xs rounded">10</button>
    <button className="p-2 border rounded hover:bg-gray-50">
      <ChevronRight className="w-4 h-4 text-black" />
    </button>
  </div>

  {/* Right side info and dropdown */}
  <div className="flex items-center gap-4 ">
    <span className="text-gray-500 text-xs">Showing 1 to 8 of 50 entries</span>
    <div className="flex items-center gap-2">
      <span className="text-gray-500 text-xs">Show</span>
      <select className="border rounded text-xs p-1 pr-8 appearance-none bg-transparent">
        <option value="8 ">8</option>
        <option value="10">10</option>
        <option value="25">25</option>
        <option value="50">50</option>
      </select>
      <ChevronDown className="w-4 h-4 text-gray-500 -ml-6 pointer-events-none" />
    </div>
  </div>
</div>
    </div>
  );
};

export default PatientTable;
