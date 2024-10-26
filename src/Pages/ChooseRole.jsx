import React, { useState } from 'react';
import { PiArrowBendRightDownThin } from 'react-icons/pi';
import { FaFile } from 'react-icons/fa';
import { ImEyeBlocked } from 'react-icons/im';
import { CornerDownLeft, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';

const ChooseRole = () => {
  const [showPassword, setShowPassword] = useState(false);

  // function to show password
  const showPass = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div className="w-full  py-[4rem]">
      {/* div containing image and the form */}
      <div className="flex min-w-full justify-center ">
        {/* form div  */}
        <div className="w-[28rem]">
          {/* icon down */}
          <div className="mt-[2rem]">
            <img
              src="../arrowdown.svg"
              alt=""
              className="w-[6rem] ml-[-3rem]"
            />
          </div>
          {/* file and heading div */}
          <div className="flex mt-[4rem] gap-8 min-w-full justify-center items-center">
            {/* file */}
            <div>
              <FaFile className="text-[3.5rem] text-[#409C7C]" />
            </div>
            {/* heading */}
            <div className="text-[4.5rem] font-bold">eFiche</div>
          </div>
          {/* login into your account  */}
          <div>
            <h1 className="text-[1.6rem] font-semibold text-center my-[1rem] md:my-[1rem]">
              Select the user role
            </h1>
          </div>
          {/*Roles*/}
          <div className="flex justify-center my-[.3rem]">
            <div className=" block md:flex gap-[1rem] ">
              {/* facility */}
              <div className="flex justify-between border-2 border-[#E5E7EB] rounded-2xl p-4 items-center  w-[16rem] my-[1rem] md:my-[1rem] md:my-0">
                <h1 className="text-lg">Facility Admin</h1>
                <input
                  type="radio"
                  className="appearance-none w-6 h-6 rounded-full border-2 border-[#E5E7EB]"
                />
              </div>
              <div className="flex justify-between border-2 border-[#E5E7EB] rounded-2xl p-4 items-center  w-[16rem] my-[1rem] md:my-[1rem] md:my-0">
                <h1 className="text-lg">Receptionist</h1>
                <input
                  type="radio"
                  className="appearance-none w-6 h-6 rounded-full border-2 border-[#E5E7EB]"
                />
              </div>
            </div>
          </div>
          <div className="flex justify-center my-[1rem] md:my-[1rem]">
            <div className="block md:flex gap-[1rem]  ">
              {/* facility */}
              <div className="flex justify-between border-2 border-[#E5E7EB] rounded-2xl p-4 items-center  w-[16rem] my-[1rem] md:my-[1rem] md:my-0">
                <h1 className="text-lg">Lab technician</h1>
                <input
                  type="radio"
                  className="appearance-none w-6 h-6 rounded-full border-2 border-[#E5E7EB]"
                />
              </div>
              <div className="flex justify-between border-2 border-[#E5E7EB] rounded-2xl p-4 items-center  w-[16rem] my-[1rem] md:my-[1rem] md:my-0">
                <h1 className="text-lg">Radiology technician</h1>
                <input
                  type="radio"
                  className="appearance-none w-6 h-6 rounded-full border-2 border-[#E5E7EB]"
                />
              </div>
            </div>
          </div>
          <div className="flex justify-center my-[1rem] md:my-[1rem]">
            <div className="block md:flex gap-[1rem]   ">
              {/* facility */}
              <div className="flex justify-between border-2 border-[#E5E7EB] rounded-2xl p-4 items-center  w-[16rem] my-[1rem] md:my-[1rem] ">
                <h1 className="text-lg">Audiologist</h1>
                <input
                  type="radio"
                  className="appearance-none w-6 h-6 rounded-full border-2 border-[#E5E7EB]"
                />
              </div>
              <div className="flex justify-between border-2 border-[#E5E7EB] rounded-2xl p-4 items-center  w-[16rem] my-[1rem] md:my-[1rem] ">
                <h1 className="text-lg">Pharmacist</h1>
                <input
                  type="radio"
                  className="appearance-none w-6 h-6 rounded-full border-2 border-[#E5E7EB]"
                />
              </div>
            </div>
          </div>
          <div className="flex justify-center my-[1rem] md:my-[1rem]">
            <div className="block md:flex gap-[1rem]">
              {/* facility */}
              <div className="flex justify-between border-2 border-[#E5E7EB] rounded-2xl p-4 items-center  w-[16rem] my-[1rem] md:my-[1rem] ">
                <h1 className="text-lg">Cashier</h1>
                <input
                  type="radio"
                  className="appearance-none w-6 h-6 rounded-full border-2 border-[#E5E7EB]"
                />
              </div>
              <Link to="/Dashboard">
                {' '}
                <div className="flex justify-between border-2 border-[#E5E7EB] rounded-2xl p-4 items-center cursor-pointer w-[16rem] my-[1rem] md:my-[1rem] ">
                  <h1 className="text-lg">Nurse</h1>
                  <input
                    type="radio"
                    className="appearance-none w-6 h-6 rounded-full border-2 border-[#E5E7EB]"
                  />
                </div>
              </Link>
            </div>
          </div>
          <div className="flex justify-center my-[1rem] md:my-[1rem]">
            <div className="block md:flex gap-[1rem]">
              {/* facility */}
              <div className="flex justify-between border-2 border-[#E5E7EB] rounded-2xl p-4 items-center  w-[16rem] my-[1rem] md:my-[1rem] md:my-0">
                <h1 className="text-lg">Accountant</h1>
                <input
                  type="radio"
                  className="appearance-none w-6 h-6 rounded-full border-2 border-[#E5E7EB]"
                />
              </div>
              <div className="flex justify-between border-2 border-[#E5E7EB] rounded-2xl p-4 items-center  w-[16rem] my-[1rem] md:my-[1rem] md:my-0">
                <h1 className="text-lg">Dentist</h1>
                <input
                  type="radio"
                  className="appearance-none w-6 h-6 rounded-full border-2 border-[#E5E7EB]"
                />
              </div>
            </div>
          </div>

          {/* copy rights */}
          <div className="md:flex gap-4 my-[4rem] text-[.9rem]">
            {' '}
            <div className="text-slate-400 text-center md:text-normal">
              {' '}
              &copy; 2024 eFiche.Alrights reserved.{' '}
            </div>
            <div className="text-center">Terms & Conditions Privacy Policy</div>
          </div>
        </div>

        <div className="w-[40rem]  bg-green-400 rounded-2xl hidden md:flex justify-end relative ml-[4rem] mr-[-5rem]  overflow-hidden">
          <img
            src="../image.png"
            alt=""
            className="h-full w-full object-cover"
            style={{
              animation: 'zoomIn 15s forwards',
              transformOrigin: 'center center',
            }}
          />
          <div className="absolute z-20 w-full h-full bg-[#3aa97f] opacity-50 top-0 rounded-3xl flex justify-center items-center"></div>
          <div className="top-0 absolute z-30 w-full h-full flex justify-center items-center">
            <div className="px-[.5rem]">
              <h1 className="text-[3rem] md:text-[1.5rem] xl:text-[2.5rem]  text-center text-white ">
                Streamlined and digitised <br /> medical experience
              </h1>
              <p className="text-center text-[1.1rem] md:text-[.8rem]  xl:text-[.9rem] font-thin text-white mt-[2rem] jakarta ">
                Enhanced data accessibility leads to improved <br />
                patient outcomes , increased efficiency , and more <br />
                effective reporting.
              </p>
            </div>
          </div>
        </div>

        {/* image with texts dev */}
        {/* <div></div> */}
        {/*image div*/}
      </div>
    </div>
  );
};
const style = document.createElement('style');
style.textContent = `
@keyframes zoomIn {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(1.2);
  }
}
`;
document.head.appendChild(style);
export default ChooseRole;
