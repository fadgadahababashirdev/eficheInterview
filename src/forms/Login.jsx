import React, { useState } from 'react';
import { PiArrowBendRightDownThin } from 'react-icons/pi';
import { FaFile } from 'react-icons/fa';
import { ImEyeBlocked } from 'react-icons/im';
import { CornerDownLeft, FileText } from 'lucide-react';

const Login = () => {
  const [showPassword , setShowPassword] = useState(false) 

  // function to show password 
  const showPass = ()=>{
    setShowPassword(!showPassword) 
    
  }
  return (
    <div className="w-full   py-[4rem] ">
      {/* div containing image and the form */}
      <div className="flex min-w-full justify-center">
        {/* form div  */}
        <div className="">
          {/* icon down */}
          <div className="mt-[2rem]">
            <img src="../Vector.svg" alt="" className="w-[6rem]  ml-[-5rem]" />
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
            <h1 className="text-2xl font-bold text-center my-[2rem] para">
              Log into your account
            </h1>
          </div>
          {/* input username  */}
          <div>
            <label htmlFor="username">
              <h1 className="font-medium font-lg">
                Username<span className="text-red-500">*</span>
              </h1>
            </label>
            <input
              type="text"
              placeholder="user name"
              className="w-full p-4 rounded-md mt-2 border outline-none
             focus:border-[#409C7C] focus:ring-[1.3px] focus:ring-[#409C7C] "
              id="username"
            />
          </div>
          {/* password */}
          <div className="my-[2rem] ">
            <label htmlFor="password">
              {' '}
              <h1 className="font-medium font-lg">
                Password<span className="text-red-500">*</span>
              </h1>
            </label>
            <div
              className="group flex justify-between w-full p-4 rounded-md mt-2 
                border border-gray-300 transition-all duration-200
                focus-within:border-[#409C7C] focus-within:ring-[1.3px] focus-within:ring-[#409C7C]"
            >
              <input
                type={`${showPassword ? "text" : "Password"}`}
                placeholder="Password"
                className="w-[80%] outline-none "
                id="password"
              />
              <div onClick={showPass}>
                <ImEyeBlocked className="black text-[1.5rem] cursor-pointer" />
              </div>
            </div>
          </div>
          {/* remember me and forgor password container */}
          <div className="flex justify-between mt-[4rem]">
            <div className="flex gap-2">
              {/* checkbox */}{' '}
              <input
                type="checkbox"
                className="w-6 h-6 border-2 border-gray-300 rounded-lg appearance-none checked:bg-blue-500 checked:border-blue-500 "
                id="rememberme"
              />
              {/* remember me  */}
              <label htmlFor="rememberme">
                {' '}
                <span className="text-gray-500 font-medium cursor-pointer">
                  Remember Me
                </span>{' '}
              </label>
            </div>
            {/* forgot password */}
            <span className="font-medium text-gray-500">Forgot Password </span>
          </div>
          {/* Login */}
          <div className="my-[2rem]">
            <button className="w-full text-center  p-3 bg-[#409C7C] rounded-xl text-white font-medium text-[1.3rem]">
              Login
            </button>
          </div>
          {/* copy rights */}
          <div className="flex gap-4 my-[4rem] text-[.9rem]">
            {' '}
            <span className="text-slate-400 ">
              {' '}
              &copy; 2024 eFiche.Alrights reserved.{' '}
            </span>
            <span>Terms & Conditions Privacy Policy</span>
          </div>
        </div>

        <div className="w-[45rem]  bg-green-400 mr-[-12rem] ml-[12rem] rounded-2xl relative">
          <img src="../image.png" alt="" className="h-full" />
          <div className="absolute z-20 w-full h-full bg-emerald-500 opacity-50 top-0 rounded-3xl flex justify-center items-center">
            
          </div> 
          <div className='top-0 absolute z-30 w-full h-full flex justify-center items-center'>
            <div className='px-[.5rem]'>
              <h1 className='text-[3rem] text-center text-white font-semibold '>Streamlined and digitised <br/> medical experience</h1> 
              <p className='text-center text-[1.1rem] text-white mt-[2rem] font-sans'>Enhanced data accessibility leads to improved <br/>patient outcomes , increased efficiency , and more <br/>effective reporting.</p>
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

export default Login;
